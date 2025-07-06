import Controller from "sap/ui/core/mvc/Controller";
import UIComponent from "sap/ui/core/UIComponent";
import MessageToast from "sap/m/MessageToast";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import Event from "sap/ui/base/Event";
import Filter from "sap/ui/model/Filter";
import FilterOperator from "sap/ui/model/FilterOperator";
import ListBinding from "sap/ui/model/ListBinding";
import Table from "sap/m/Table";
import ObjectHeader from "sap/m/ObjectHeader";
import { Employee, type Strategy } from "ztle334fiori1/generated/local.types";
import SmartTable from "sap/ui/comp/smarttable/SmartTable";
import JSONModel from "sap/ui/model/json/JSONModel";
import Button from "sap/m/Button";
import Dialog from "sap/m/Dialog";
import Text from "sap/m/Text";
import Input from "sap/m/Input";
import VBox from "sap/m/VBox";
import Fragment from "sap/ui/core/Fragment";
import ColumnListItem from "sap/m/ColumnListItem";
import Context from "sap/ui/model/Context";
import BindingMode from "sap/ui/model/BindingMode";
import MessageBox from "sap/m/MessageBox";

/**
 * @namespace ztle334fiori1.controller
 */
export default class StrategyView extends Controller {
  public onInit(): void {
    const oRouter = UIComponent.getRouterFor(this);
    oRouter.getRoute("strategy").attachPatternMatched(this._onRouteMatched, this);

    // Set up viewModel for edit mode
    const oViewModel = new JSONModel({ editMode: false, editIcon: "sap-icon://edit" });
    this.getView().setModel(oViewModel, "viewModel");
  }

  private _onRouteMatched(oEvent: Event): void {
    const oView = this.getView();
    const oArgs = oEvent.getParameter("arguments");
    const sStratId = oArgs?.strat_id;

    // Filter employees table by strat_id (regular Table)
    const oTable = this.byId("employeeTable") as Table;
    const oBinding = oTable?.getBinding("items") as ListBinding;
    oBinding?.filter([
      new Filter("strat_id", FilterOperator.EQ, sStratId)
    ]);

    // Update ObjectHeader title with strategy name
    const oStrategyModel = oView.getModel("strategy");
    const aStrategies = (oStrategyModel?.getProperty("/strategies") || []) as Strategy[];
    const oStrategy = aStrategies.find((s: Strategy) => s.strat_id === sStratId);
    if (oStrategy)
      (this.byId("_IDGenObjectHeader") as ObjectHeader).setTitle(oStrategy.strat_name);
  }

  public onCreateEmployee(): void {
    this.onModifyEmployee(undefined, true);
  }

  public async onModifyEmployee(oEvent?: Event, isCreate: boolean = false): Promise<void> {
    if (!isCreate) {
      const sRole = this.getOwnerComponent().getModel("roleModel")?.getProperty("/selectedRole");

      if (sRole !== "Admin") {
        MessageToast.show("You are not authorized to edit employee records.");
        return;
      }
    }

    const oView = this.getView();

    const oModel = oView.getModel("employee") as JSONModel;

    let oEmployee: Employee;
    let sPath: string | undefined;

    if (isCreate) {
      oEmployee = {
        emp_ID: "",
        first_name: "",
        last_name: "",
        email: "",
        phone_no: "",
        manager: "",
        subteam: "",
        strat_id: this._getCurrentStratId()
      };
    } else {
      if (!oEvent) {
        MessageToast.show("No event source for edit.");
        return;
      }
      const oButton = oEvent.getSource() as Button;
      const oListItem = oButton.getParent()?.getParent() as ColumnListItem;

      if (!oListItem) {
        MessageToast.show("Failed to identify row for edit.");
        return;
      }

      const oContext = oListItem.getBindingContext("employee") as Context;
      if (!oContext) {
        MessageToast.show("No context found for edit.");
        return;
      }

      sPath = oContext.getPath();
      oEmployee = { ...oModel.getProperty(sPath) }; // clone data for editing
    }

    // Create temporary model for dialog binding
    const oDialogModel = new JSONModel({
      employee: oEmployee,
      dialogTitle: isCreate ? "Create Employee" : "Edit Employee",
      isCreate: isCreate
    });
    oDialogModel.setDefaultBindingMode(BindingMode.TwoWay);

    // Load fragment
    let oDialog = this.byId("employeeDialog") as Dialog;
    if (!oDialog) {
      oDialog = await Fragment.load({
        id: oView.getId(),
        name: "ztle334fiori1.view.EmployeeForm",
        controller: this
      }) as Dialog;
      oView.addDependent(oDialog);
    }

    oDialog.setModel(oDialogModel, "formModel");
    oDialog.open();
  }

  private _validateEmployee(oEmployee: Employee, isCreate: boolean, existingEmployees: Employee[], strategyIds: string[]): string[] {
    const VALID_SUBTEAMS = ["Analytics", "Development", "Operations", "HR", "Finance"];
    const errors: string[] = [];

    // Emp_ID
    if (!oEmployee.emp_ID || !/^\d{8}$/.test(oEmployee.emp_ID)) {
      errors.push("Emp_ID is required, numeric, and must be 8 digits.");
    } else if (isCreate && existingEmployees.some(e => e.emp_ID === oEmployee.emp_ID)) {
      errors.push("Emp_ID already exists.");
    }

    // First Name
    if (!oEmployee.first_name || !/^[A-Za-z]+$/.test(oEmployee.first_name) || oEmployee.first_name.length > 50) {
      errors.push("First name is required, letters only, max 50 characters.");
    }

    // Last Name
    if (!oEmployee.last_name || !/^[A-Za-z]+$/.test(oEmployee.last_name) || oEmployee.last_name.length > 50) {
      errors.push("Last name is required, letters only, max 50 characters.");
    }

    // Email
    if (!oEmployee.email || !oEmployee.email.endsWith("@dxc.com")) {
      errors.push("Email is required and must end with @dxc.com.");
    } else if (isCreate && existingEmployees.some(e => e.email === oEmployee.email)) {
      errors.push("Email already exists.");
    }

    // Phone No
    if (!oEmployee.phone_no || !/^09\d{9}$/.test(oEmployee.phone_no)) {
      errors.push("Phone number is required, must start with 09 and be 11 digits.");
    } else if (isCreate && existingEmployees.some(e => e.phone_no === oEmployee.phone_no)) {
      errors.push("Phone number already exists.");
    }

    // Manager
    if (!oEmployee.manager || !/^[A-Za-z ]+$/.test(oEmployee.manager) || oEmployee.manager.length > 50) {
      errors.push("Manager is required, letters only, max 50 characters.");
    }

    // Subteam
    if (!oEmployee.subteam || !VALID_SUBTEAMS.includes(oEmployee.subteam) || oEmployee.subteam.length > 20) {
      errors.push("Subteam is required, must be a valid subteam, max 20 characters.");
    }

    // // strat_id
    // if (!oEmployee.strat_id || !strategyIds.includes(oEmployee.strat_id)) {
    //   errors.push("Strategy ID is required and must exist in the Strategy table.");
    // }

    return errors;
  }

  public async onSaveEmployee(): Promise<void> {
    const oDialog = this.byId("employeeDialog") as Dialog;
    const oFormModel = oDialog.getModel("formModel") as JSONModel;
    const oEmployee = oFormModel.getProperty("/employee") as Employee;
    const isCreate = oFormModel.getProperty("/isCreate");

    const oModel = this.getView().getModel("employee") as JSONModel;
    const existingEmployees = oModel.getProperty("/employees") as Employee[];

    const strategyModel = this.getView().getModel("strategy") as JSONModel;
    const strategyIds = (strategyModel.getProperty("/strategies") as any[]).map(s => s.id);

    const errors = this._validateEmployee(oEmployee, isCreate, existingEmployees, strategyIds);

    if (errors.length > 0) {
      MessageBox.error(errors.join("\n"));
      return;
    }

    // MessageBox.confirm("Are you sure you want to save this employee?", {
    //   onClose: (sAction) => {
    //     if (sAction === MessageBox.success) {
    if (isCreate) {
      existingEmployees.push(oEmployee);
    } else {
      const index = existingEmployees.findIndex(e => e.emp_ID === oEmployee.emp_ID);
      if (index > -1) {
        existingEmployees[index] = oEmployee;
      }
    }
    oModel.setProperty("/employees", existingEmployees);
    oModel.refresh(true);
    oDialog.close();
    MessageToast.show("Employee saved successfully.");
    //     }
    //   }
    // });
  }

  public onCancelEmployee(): void {
    const oDialog = this.byId("employeeDialog") as Dialog;
    oDialog.close();
  }

  public onDeleteEmployees(): void {
    const oView = this.getView();

    const sRole = this.getOwnerComponent().getModel("roleModel")?.getProperty("/selectedRole");
    if (sRole !== "Admin") {
      MessageToast.show("You are not authorized to delete employee records.");
      return;
    }


    const oTable = this.byId("employeeTable") as Table;
    const oModel = oView.getModel("employee") as JSONModel;
    const aEmployees = oModel.getProperty("/employees") as Employee[];
    const aSelectedContexts = oTable.getSelectedContexts(true);

    if (!aSelectedContexts.length) {
      MessageToast.show("No employees selected.");
      return;
    }

    // Get indexes of selected employees
    const aIndexesToDelete = aSelectedContexts
      .map(ctx => parseInt(ctx.getPath().split("/").pop() || "-1", 10))
      .filter(idx => idx > -1);

    // Remove from highest to lowest index to avoid shifting
    aIndexesToDelete.sort((a, b) => b - a).forEach(idx => aEmployees.splice(idx, 1));

    oModel.setProperty("/employees", aEmployees);
    oModel.refresh(true);
    oTable.removeSelections(true);
    MessageToast.show("Selected employees deleted.");
  }

  public onDeleteEmployee(oEvent: Event): void {
    const oView = this.getView();

    const sRole = this.getOwnerComponent().getModel("roleModel")?.getProperty("/selectedRole");

    console.log(sRole);

    if (sRole !== "Admin") {
      MessageToast.show("You are not authorized to delete employee records.");
      return;
    }

    const oButton = oEvent.getSource() as Button;
    const oListItem = oButton.getParent()?.getParent() as ColumnListItem;

    if (!oListItem) {
      MessageToast.show("Failed to identify selected employee.");
      return;
    }

    const oContext = oListItem.getBindingContext("employee") as Context;

    if (!oContext) {
      MessageToast.show("No context found for deletion.");
      return;
    }

    const sPath = oContext.getPath(); // "/employees/2"
    const oModel = oView.getModel("employee") as JSONModel;

    const aEmployees = oModel.getProperty("/employees") as Employee[]

    const sIndex = sPath.split("/").pop();
    const iIndex = sIndex ? parseInt(sIndex, 10) : -1;

    if (iIndex > -1 && iIndex < aEmployees.length) {
      aEmployees.splice(iIndex, 1);
      oModel.setProperty("/employees", aEmployees);
      oModel.refresh(true);
      MessageToast.show("Employee deleted (in-memory)");
    } else
      MessageToast.show("Failed to delete employee. Invalid index.");

  }

  public onEditToggle(oEvent: Event): void {
    const oViewModel = this.getView().getModel("viewModel") as JSONModel;
    const bEdit = oViewModel.getProperty("/editMode");
    oViewModel.setProperty("/editMode", !bEdit);
    oViewModel.setProperty("/editIcon", !bEdit ? "sap-icon://display" : "sap-icon://edit");
  }

  private _getCurrentStratId(): string {
    // Get current strat_id from route or view context
    const oRouter = UIComponent.getRouterFor(this);
    const oHash = oRouter.getHashChanger().getHash();
    const match = oHash.match(/strategy\/([^/?]+)/);
    return match ? match[1] : "";
  }

  public onCSVExport(): void {
    // const oTable = this.byId("employeeTable") as Table;
    // if (!oTable) {
    //   MessageToast.show("Employee table not found for CSV export.");
    //   return;
    // }

    // // Get the ODataModel from the SmartTable
    // const oModel = oTable.getModel() as ODataModel;

    // // Use the export functionality of SmartTable
    // oTable.exportData({
    //   format: "CSV",
    //   filename: "employees.csv",
    //   exportType: "csv"
    // }).then(() => {
    //   MessageToast.show("CSV export successful.");
    // }).catch((error: Error) => {
    //   MessageBox.error(`CSV export failed: ${error.message}`);
    // });
  }

}