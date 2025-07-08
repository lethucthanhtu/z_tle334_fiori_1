/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  entityDeserializer,
  transformReturnValueForComplexType,
  transformReturnValueForEntity,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { metadata } from './service';
import { CtString } from './CtString';
import { SalesOrderSet } from './SalesOrderSet';
import { SalesOrderSetApi } from './SalesOrderSetApi';

/**
 * Type of the parameters to be passed to {@link regenerateAllData}.
 */
export interface RegenerateAllDataParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * No Of Sales Orders.
   */
  noOfSalesOrders?: number | null;
}

/**
 * Regenerate All Data.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function regenerateAllData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: RegenerateAllDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  RegenerateAllDataParameters<DeSerializersT>,
  CtString
> {
  const params = {
    noOfSalesOrders: new OperationParameter(
      'NoOfSalesOrders',
      'Edm.Int32',
      parameters.noOfSalesOrders
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC',
    'RegenerateAllData',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CtString)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link salesOrderConfirm}.
 */
export interface SalesOrderConfirmParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sales Order Id.
   */
  salesOrderId?: string | null;
}

/**
 * Sales Order Confirm.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOrderConfirm<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SalesOrderConfirmParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  SalesOrderConfirmParameters<DeSerializersT>,
  SalesOrderSet
> {
  const params = {
    salesOrderId: new OperationParameter(
      'SalesOrderID',
      'Edm.String',
      parameters.salesOrderId
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC',
    'SalesOrder_Confirm',
    data =>
      transformReturnValueForEntity(
        data,
        metadata(deSerializers).salesOrderSetApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link salesOrderCancel}.
 */
export interface SalesOrderCancelParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sales Order Id.
   */
  salesOrderId?: string | null;
}

/**
 * Sales Order Cancel.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOrderCancel<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SalesOrderCancelParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  SalesOrderCancelParameters<DeSerializersT>,
  SalesOrderSet
> {
  const params = {
    salesOrderId: new OperationParameter(
      'SalesOrderID',
      'Edm.String',
      parameters.salesOrderId
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC',
    'SalesOrder_Cancel',
    data =>
      transformReturnValueForEntity(
        data,
        metadata(deSerializers).salesOrderSetApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link salesOrderInvoiceCreated}.
 */
export interface SalesOrderInvoiceCreatedParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sales Order Id.
   */
  salesOrderId?: string | null;
}

/**
 * Sales Order Invoice Created.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOrderInvoiceCreated<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SalesOrderInvoiceCreatedParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  SalesOrderInvoiceCreatedParameters<DeSerializersT>,
  SalesOrderSet
> {
  const params = {
    salesOrderId: new OperationParameter(
      'SalesOrderID',
      'Edm.String',
      parameters.salesOrderId
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC',
    'SalesOrder_InvoiceCreated',
    data =>
      transformReturnValueForEntity(
        data,
        metadata(deSerializers).salesOrderSetApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link salesOrderGoodsIssueCreated}.
 */
export interface SalesOrderGoodsIssueCreatedParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Sales Order Id.
   */
  salesOrderId?: string | null;
}

/**
 * Sales Order Goods Issue Created.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOrderGoodsIssueCreated<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SalesOrderGoodsIssueCreatedParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  SalesOrderGoodsIssueCreatedParameters<DeSerializersT>,
  SalesOrderSet
> {
  const params = {
    salesOrderId: new OperationParameter(
      'SalesOrderID',
      'Edm.String',
      parameters.salesOrderId
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC',
    'SalesOrder_GoodsIssueCreated',
    data =>
      transformReturnValueForEntity(
        data,
        metadata(deSerializers).salesOrderSetApi
      ),
    params,
    deSerializers
  );
}

export const operations = {
  regenerateAllData,
  salesOrderConfirm,
  salesOrderCancel,
  salesOrderInvoiceCreated,
  salesOrderGoodsIssueCreated
};
