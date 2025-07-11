import ColumnListItem from 'sap/m/ColumnListItem';
import Event from 'sap/ui/base/Event';
import Controller from 'sap/ui/core/mvc/Controller';
import UIComponent from 'sap/ui/core/UIComponent';
import { MODEL } from 'ztle334fiori1/localService/mockService/types/local.enum';

/**
 * @namespace ztle334fiori1.controller
 */
export default class MainView extends Controller {
	/*eslint-disable @typescript-eslint/no-empty-function*/
	public onInit(): void {}

	public onStrategySelect(oEvent: Event): void {
		const oContext = (oEvent.getSource() as ColumnListItem).getBindingContext(
			MODEL.Strategy
		);

		if (oContext) {
			const strat_id = oContext.getProperty('strat_id');
			const oRouter = UIComponent.getRouterFor(this);
			oRouter.navTo('strategy', { strat_id: strat_id });
		}
	}
}
