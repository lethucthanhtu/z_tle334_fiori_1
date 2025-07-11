import Controller from 'sap/ui/core/mvc/Controller';
import UIComponent from 'sap/ui/core/UIComponent';
import MessageToast from 'sap/m/MessageToast';
import Event from 'sap/ui/base/Event';
import Filter from 'sap/ui/model/Filter';
import FilterOperator from 'sap/ui/model/FilterOperator';
import ListBinding from 'sap/ui/model/ListBinding';
import Table from 'sap/m/Table';
import ObjectHeader from 'sap/m/ObjectHeader';
import type {
	Employee,
	Subteam,
	Strategy,
} from '../localService/mockService/types/local.types';
import JSONModel from 'sap/ui/model/json/JSONModel';
import Button from 'sap/m/Button';
import Dialog from 'sap/m/Dialog';
import Fragment from 'sap/ui/core/Fragment';
import ColumnListItem from 'sap/m/ColumnListItem';
import Context from 'sap/ui/model/Context';
import BindingMode from 'sap/ui/model/BindingMode';
import MessageBox, { Action } from 'sap/m/MessageBox';
import Select from 'sap/m/Select';
import {
	MODEL,
	PROPS,
	ROLE,
} from 'ztle334fiori1/localService/mockService/types/local.enum';

/**
 * @namespace ztle334fiori1.controller
 */
export default class StrategyView extends Controller {
	public onInit(): void {
		const oRouter = UIComponent.getRouterFor(this);
		oRouter
			.getRoute('strategy')
			.attachPatternMatched(this._onRouteMatched, this);

		// Set up viewModel for edit mode
		const oViewModel = new JSONModel({
			editMode: false,
			editIcon: 'sap-icon://edit',
		});
		this.getView().setModel(oViewModel, 'viewModel');
	}

	private _onRouteMatched(oEvent: Event): void {
		const oView = this.getView();
		const sStratId = this._getCurrentStratId();

		// Filter employees table by strat_id
		this._filter([]);

		// Update ObjectHeader title with strategy name
		const oStrategyModel = oView.getModel(MODEL.Strategy);
		const aStrategies = (oStrategyModel?.getProperty(PROPS.Strategies) ||
			[]) as Strategy[];
		const oStrategy = aStrategies.find(
			(s: Strategy) => s.strat_id === sStratId
		);
		if (oStrategy)
			(this.byId('_IDStrategyHeader') as ObjectHeader).setTitle(
				oStrategy.strat_name
			);
	}

	public onNavigate(): void {
		// Go back in browser history
		window.history.go(-1);
	}

	private _filter(filter: Filter[]): void {
		const oTable = this.byId('employeeTable') as Table;
		const oBinding = oTable?.getBinding('items') as ListBinding;
		oBinding?.filter([
			new Filter('strat_id', FilterOperator.EQ, this._getCurrentStratId()),
			...filter,
		]);
	}

	public onFitlerSearch(oEvent: Event): void {
		const sQuery = (oEvent.getParameter('query') as string).trim();
		this._filter([new Filter('email', FilterOperator.Contains, sQuery)]);
	}

	private _getUserRole(): string {
		return this.getOwnerComponent()
			.getModel(MODEL.User)
			?.getProperty(PROPS.Current_role) as string;
	}

	private _getCurrentUser(): Employee | undefined {
		const sEmpId = this.getOwnerComponent()
			.getModel(MODEL.User)
			?.getProperty(PROPS.Current_eid) as string;
		if (!sEmpId) return undefined;

		const oModel = this.getView().getModel(MODEL.Employee) as JSONModel;
		const aEmployees = oModel.getProperty(PROPS.Employees) as Employee[];

		return aEmployees.find((e) => e.emp_ID === sEmpId);
	}

	private _checkAdminAccess(message?: string): boolean {
		const sRole = this._getUserRole();
		if (sRole.toLowerCase() !== ROLE.Admin) {
			MessageToast.show(
				message || 'You are not authorized to perform this action.'
			);
			return false;
		}
		return true;
	}

	public onCreateEmployee(): void {
		this.onModifyEmployee(undefined, true);
	}

	public async onModifyEmployee(
		oEvent?: Event,
		isCreate: boolean = false
	): Promise<void> {
		if (
			!isCreate &&
			!this._checkAdminAccess('You must be an admin to edit employee records.')
		)
			return;

		const oView = this.getView();
		const oModel = oView.getModel(MODEL.Employee) as JSONModel;

		let oEmployee: Employee;
		let sPath: string | undefined;

		const sRole = this._getUserRole().toLowerCase();
		const oCurrentUser = this._getCurrentUser();
		console.log(`Current user role: ${sRole}`, oCurrentUser);

		if (sRole === ROLE.Employee && oCurrentUser) {
			oEmployee = oCurrentUser;
			sPath = `/employees/${oCurrentUser.emp_ID}`;
			isCreate = false;
		} else if (isCreate)
			oEmployee = {
				emp_ID: '',
				first_name: '',
				last_name: '',
				email: '',
				phone_no: '',
				manager: '',
				subteam: 'HR',
				strat_id: this._getCurrentStratId(),
			};
		else {
			if (!oEvent) {
				MessageToast.show('No event source for edit.');
				return;
			}

			const oButton = oEvent.getSource() as Button;
			const oListItem = oButton.getParent()?.getParent() as ColumnListItem;
			if (!oListItem) {
				MessageToast.show('Failed to identify row for edit.');
				return;
			}

			const oContext = oListItem.getBindingContext(MODEL.Employee) as Context;
			if (!oContext) {
				MessageToast.show('No context found for edit.');
				return;
			}

			const oSelect = this.byId('subteamSelect') as Select;
			const sSubteam = oSelect?.getSelectedKey();
			sPath = sPath || oContext.getPath();
			oEmployee = {
				...oModel.getProperty(sPath),
				// subteam: sSubteam,
			}; // exact data for editing
		}

		// Create temporary model for dialog binding
		const oDialogModel = new JSONModel({
			employee: oEmployee,
			dialogTitle: isCreate ? 'Create Employee' : 'Edit Employee',
			isCreate: isCreate,
		});
		oDialogModel.setDefaultBindingMode(BindingMode.TwoWay);

		// Load fragment
		let oDialog = this.byId('employeeDialog') as Dialog;
		if (!oDialog) {
			oDialog = (await Fragment.load({
				id: oView.getId(),
				name: 'ztle334fiori1.view.EmployeeForm',
				controller: this,
			})) as Dialog;
			oView.addDependent(oDialog);
		}

		oDialog.setModel(oDialogModel, 'formModel');
		oDialog.open();
	}

	private _validateEmployee(
		oEmployee: Employee,
		isCreate: boolean,
		existingEmployees: Employee[]
	): string[] {
		// const VALID_SUBTEAMS = [
		//   "Analytics",
		//   "Development",
		//   "Operations",
		//   "HR",
		//   "Finance",
		// ];
		const VALID_SUBTEAMS = (
			(
				this.getOwnerComponent().getModel(MODEL.Subteam) as JSONModel
			).getProperty(PROPS.Subteams) as Subteam[]
		).map((s) => s.key);

		const errors: string[] = [];

		// Emp_ID
		if (!oEmployee.emp_ID || !/^\d{8}$/.test(oEmployee.emp_ID))
			errors.push('Emp_ID is required, numeric, and must be 8 digits.');
		else if (
			isCreate &&
			existingEmployees.some((e) => e.emp_ID === oEmployee.emp_ID)
		)
			errors.push('Emp_ID already exists.');

		// First Name
		if (
			!oEmployee.first_name ||
			!/^[\p{L} ]+$/u.test(oEmployee.first_name) ||
			oEmployee.first_name.length > 50
		)
			errors.push('First name is required, letters only, max 50 characters.');

		// Last Name
		if (
			!oEmployee.last_name ||
			!/^[\p{L} ]+$/u.test(oEmployee.last_name) ||
			oEmployee.last_name.length > 50
		)
			errors.push('Last name is required, letters only, max 50 characters.');

		// Email
		if (!oEmployee.email || !oEmployee.email.endsWith('@dxc.com')) {
			errors.push('Email is required and must end with @dxc.com.');
		} else {
			const isDuplicateEmail = existingEmployees.some(
				(e) => e.email === oEmployee.email && e.emp_ID !== oEmployee.emp_ID
			);

			if (isDuplicateEmail) {
				errors.push('Email already exists for another employee.');
			}
		}

		// Phone No
		if (!oEmployee.phone_no || !/^09\d{9}$/.test(oEmployee.phone_no))
			errors.push(
				'Phone number is required, must start with 09 and be 11 digits.'
			);
		else if (
			isCreate &&
			existingEmployees.some((e) => e.phone_no === oEmployee.phone_no)
		)
			errors.push('Phone number already exists.');

		// Manager
		if (
			!oEmployee.manager ||
			!/^[A-Za-z ]+$/.test(oEmployee.manager) ||
			oEmployee.manager.length > 50
		)
			errors.push('Manager is required, letters only, max 50 characters.');

		// Subteam
		if (
			!oEmployee.subteam ||
			!VALID_SUBTEAMS.includes(oEmployee.subteam) ||
			oEmployee.subteam.length > 20
		)
			errors.push(
				'Subteam is required, must be a valid subteam, max 20 characters.'
			);

		return errors;
	}

	public async onSaveEmployee(): Promise<void> {
		const oView = this.getView();
		const oDialog = this.byId('employeeDialog') as Dialog;
		const oFormModel = oDialog.getModel('formModel') as JSONModel;
		const oEmployee = oFormModel.getProperty('/employee') as Employee;
		const isCreate = oFormModel.getProperty('/isCreate');

		const oModel = oView.getModel(MODEL.Employee) as JSONModel;
		const existingEmployees = oModel.getProperty(PROPS.Employees) as Employee[];

		const errors = this._validateEmployee(
			oEmployee,
			isCreate,
			existingEmployees
		);

		if (errors.length > 0) {
			MessageBox.error(errors.join('\n'));
			return;
		}

		MessageBox.confirm('Are you sure you want to save this employee?', {
			actions: [Action.OK, Action.CANCEL],
			onClose: (sAction: Action) => {
				switch (sAction) {
					case Action.OK:
						if (isCreate) existingEmployees.unshift(oEmployee);
						else {
							const index = existingEmployees.findIndex(
								(e) => e.emp_ID === oEmployee.emp_ID
							);
							if (index > -1) existingEmployees[index] = oEmployee;
						}
						oModel.setProperty(PROPS.Employees, existingEmployees);
						oModel.refresh(true);

						MessageToast.show('Employee saved successfully.');
						break;
					case Action.CANCEL:
						MessageToast.show('Cancel add employee.');
						break;
					default:
						break;
				}
				oDialog.close();
			},
		});
	}

	public onCancelEmployee(): void {
		const oDialog = this.byId('employeeDialog') as Dialog;
		oDialog.close();
	}

	public onDeleteEmployees(): void {
		if (
			!this._checkAdminAccess(
				'You are not authorized to delete employee records.'
			)
		)
			return;

		const oView = this.getView();
		const oTable = this.byId('employeeTable') as Table;
		const oModel = oView.getModel(MODEL.Employee) as JSONModel;
		const aEmployees = oModel.getProperty(PROPS.Employees) as Employee[];
		const aSelectedContexts = oTable.getSelectedContexts(true);

		if (!aSelectedContexts.length) {
			MessageToast.show('No employees selected.');
			return;
		}

		MessageBox.confirm('Are you sure to delete?', {
			actions: [Action.OK, Action.CANCEL],
			onClose: (sAction: Action) => {
				switch (sAction) {
					case Action.OK:
						// Get indexes of selected employees
						const aIndexesToDelete = aSelectedContexts
							.map((ctx) =>
								parseInt(ctx.getPath().split('/').pop() || '-1', 10)
							)
							.filter((idx) => idx > -1);

						// Remove from highest to lowest index to avoid shifting
						aIndexesToDelete
							.sort((a, b) => b - a)
							.forEach((idx) => aEmployees.splice(idx, 1));

						oModel.setProperty(PROPS.Employees, aEmployees);
						oModel.refresh(true);
						oTable.removeSelections(true);
						MessageToast.show('Selected employees deleted.');
						break;
					case Action.CANCEL:
						MessageToast.show('Cancel delete employee(s).');
						break;
					default:
						break;
				}
			},
		});
	}

	public onDeleteEmployee(oEvent: Event): void {
		if (
			!this._checkAdminAccess(
				'You are not authorized to delete employee records.'
			)
		)
			return;

		const oView = this.getView();
		const oButton = oEvent.getSource() as Button;
		const oListItem = oButton.getParent()?.getParent() as ColumnListItem;
		if (!oListItem) {
			MessageToast.show('Failed to identify selected employee.');
			return;
		}

		const oContext = oListItem.getBindingContext(MODEL.Employee) as Context;
		if (!oContext) {
			MessageToast.show('No context found for deletion.');
			return;
		}

		const sPath = oContext.getPath(); // "/employees/2"
		const oModel = oView.getModel(MODEL.Employee) as JSONModel;

		const aEmployees = oModel.getProperty(PROPS.Employees) as Employee[];

		const sIndex = sPath.split('/').pop();
		const iIndex = sIndex ? parseInt(sIndex, 10) : -1;

		MessageBox.confirm('Are you sure to delete?', {
			actions: [Action.OK, Action.CANCEL],
			onClose: (sAction: Action) => {
				switch (sAction) {
					case Action.OK:
						if (iIndex > -1 && iIndex < aEmployees.length) {
							aEmployees.splice(iIndex, 1);
							oModel.setProperty(PROPS.Employees, aEmployees);
							oModel.refresh(true);
							MessageToast.show('Employee deleted (in-memory)');
						} else
							MessageToast.show('Failed to delete employee. Invalid index.');
						break;
					case Action.CANCEL:
						MessageToast.show('Cancel delete employee(s).');
						break;
					default:
						break;
				}
			},
		});
	}

	public onEditToggle(oEvent: Event): void {
		const oViewModel = this.getView().getModel('viewModel') as JSONModel;
		const bEdit = oViewModel.getProperty('/editMode');
		oViewModel.setProperty('/editMode', !bEdit);
		oViewModel.setProperty(
			'/editIcon',
			!bEdit ? 'sap-icon://display' : 'sap-icon://edit'
		);
	}

	// Get current strat_id from route or view context
	private _getCurrentStratId(): string {
		const oRouter = UIComponent.getRouterFor(this);
		const oHash = oRouter.getHashChanger().getHash();
		const match = oHash.match(/strategy\/([^/?]+)/);
		return match ? match[1] : '';
	}

	public onCSVExport(): void {
		const oView = this.getView();
		const oTable = this.byId('employeeTable') as Table;

		// Convert Table items' data to correct type
		const aVisibleEmployees: Employee[] = oTable.getItems().map((item) => {
			const oContext = item.getBindingContext(MODEL.Employee);
			return oContext?.getObject() as Employee;
		});

		if (!aVisibleEmployees.length) {
			MessageToast.show('No data to export.');
			return;
		}

		// Define CSV headers
		const headers = [
			'Employee ID',
			'First Name',
			'Last Name',
			'Email',
			'Phone',
			'Manager',
			'Subteam',
			'Strategy ID',
		];

		// Convert data to CSV string
		const csvRows = [
			headers.join(','), // header row
			...aVisibleEmployees.map((emp) =>
				[
					emp.emp_ID,
					emp.first_name,
					emp.last_name,
					emp.email,
					emp.phone_no,
					emp.manager,
					emp.subteam,
					emp.strat_id,
				]
					.map((field) => `"${(field || '').replace(/"/g, '""')}"`)
					.join(',')
			),
		];

		const csvContent = csvRows.join('\n');

		// Trigger download
		const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.setAttribute('href', url);
		link.setAttribute('download', 'employees_export.csv');
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);

		MessageToast.show('CSV export started.');
	}
}
