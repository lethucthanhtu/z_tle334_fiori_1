import BaseComponent from 'sap/ui/core/UIComponent';
import { createDeviceModel } from './model/models';

/**
 * @namespace ztle334fiori1
 */
export default class Component extends BaseComponent {
	public static metadata = {
		manifest: 'json',
	};

	/**
	 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
	 * @public
	 * @override
	 */
	public init(): void {
		// call the base component's init function
		super.init();

		// enable routing
		this.getRouter().initialize();

		// set the device model
		this.setModel(createDeviceModel(), 'device');
	}
}
