import Controller from "sap/ui/core/mvc/Controller";
import View from "sap/ui/core/mvc/View";
import JSONModel from "sap/ui/model/json/JSONModel";
import ODataModel from "sap/ui/model/odata/v2/ODataModel";
import { ProductSet } from "ztle334fiori1/generated/metadata";

/**
 * @namespace ztle334fiori1.controller
 */
export default class App extends Controller {
  /*eslint-disable @typescript-eslint/no-empty-function*/
  public onInit(): void {
    let oView = this.getView();
    let oDataModel = oView.getModel() as ODataModel;

    console.log(
      oDataModel.read("/ProductSet", {
        success: function (oData: ProductSet[], response: Object) {
          console.log("Data retrieved:", oData);
          // Convert to JSON model for view binding if required
          var oJSONModel = new JSONModel(oData);
          oView.setModel(oJSONModel, "products");
        }.bind(this),

        error: (oError: Error) => {
          console.error("Error reading data:", oError);
        },
      })
    );
  }
}
