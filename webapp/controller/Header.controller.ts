import Dialog from "sap/m/Dialog";
import MessageToast from "sap/m/MessageToast";
import Select from "sap/m/Select";
import Fragment from "sap/ui/core/Fragment";
import Controller from "sap/ui/core/mvc/Controller";
import JSONModel from "sap/ui/model/json/JSONModel";

/**
 * @namespace ztle334fiori1.controller
 */
export default class RolePanel extends Controller {

  /*eslint-disable @typescript-eslint/no-empty-function*/
  public onInit(): void {
    this.openRoleDialog();
  }

  public async openRoleDialog(): Promise<void> {
    const oView = this.getView();

    let oDialog = this.byId("roleDialog") as Dialog;
    if (!oDialog) {
      oDialog = await Fragment.load({
        id: oView.getId(),
        name: "ztle334fiori1.view.RoleSelection",
        controller: this
      }) as Dialog;
      oView.addDependent(oDialog);
    }

    oDialog.open();
  }

  public onRoleConfirm(): void {
    const oSelect = this.byId("roleSelect") as Select;
    const sRole = oSelect.getSelectedKey();
    console.log(sRole);


    // Store role in a model
    const oRoleModel = new JSONModel({
      selectedRole: sRole
    });
    this.getOwnerComponent().setModel(oRoleModel, "roleModel");

    // Show feedback
    MessageToast.show(`Role selected: ${sRole}`);

    // Close dialog
    const oDialog = this.byId("roleDialog") as Dialog;
    oDialog.close();
  }

  public onShowRoleSelectDialog(): void {
    let oView = this.getView();
    let _roleDialog = oView.byId("roleDialog") as Dialog;
    _roleDialog.open();
  }
}