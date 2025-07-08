import Controller from 'sap/ui/core/mvc/Controller';
import JSONModel from 'sap/ui/model/json/JSONModel';
import ODataModel from 'sap/ui/model/odata/v2/ODataModel';
// import { ProductSet } from '../../generated/metadata/ProductSet';

/**
 * @namespace ztle334fiori1.controller
 */
export default class App extends Controller {
	/*eslint-disable @typescript-eslint/no-empty-function*/
	public onInit(): void {
		const oView = this.getView();
		const oDataModel = oView.getModel() as ODataModel;

		// console.log(
		// 	oDataModel.read('/ProductSet', {
		// 		success: function (oData: ProductSet[], response: Object) {
		// 			console.log('Data retrieved:', oData);

		// 			const oJSONModel = new JSONModel(oData);
		// 			oView.setModel(oJSONModel, 'products');
		// 		}.bind(this),

		// 		error: (oError: Error) => {
		// 			console.error('Error reading data:', oError);
		// 		},
		// 	})
		// );
	}
}
