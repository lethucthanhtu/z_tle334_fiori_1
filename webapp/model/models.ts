import JSONModel from 'sap/ui/model/json/JSONModel';
import Device from 'sap/ui/Device';
import BindingMode from 'sap/ui/model/BindingMode';

export function createDeviceModel() {
	const model = new JSONModel(Device);
	model.setDefaultBindingMode(BindingMode.TwoWay);
	return model;
}
