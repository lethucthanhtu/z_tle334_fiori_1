/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderLineItemSetApi } from './SalesOrderLineItemSetApi';
import { SalesOrderSet, SalesOrderSetType } from './SalesOrderSet';
import { ProductSet, ProductSetType } from './ProductSet';

/**
 * This class represents the entity "SalesOrderLineItemSet" of service "GWSAMPLE_BASIC".
 */
export class SalesOrderLineItemSet<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SalesOrderLineItemSetType<T>
{
  /**
   * Technical entity name for SalesOrderLineItemSet.
   */
  static override _entityName = 'SalesOrderLineItemSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the SalesOrderLineItemSet entity.
   */
  static _keys = ['SalesOrderID', 'ItemPosition'];
  /**
   * Sa. Ord. ID.
   * Maximum length: 10.
   */
  declare salesOrderId: DeserializedType<T, 'Edm.String'>;
  /**
   * PO Item Pos.
   * Maximum length: 10.
   */
  declare itemPosition: DeserializedType<T, 'Edm.String'>;
  /**
   * Product ID.
   * Maximum length: 10.
   */
  declare productId: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  declare note?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language.
   * Maximum length: 2.
   * @nullable
   */
  declare noteLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 5.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gross Amt.
   * @nullable
   */
  declare grossAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Net Amt.
   * @nullable
   */
  declare netAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Tax Amt.
   * @nullable
   */
  declare taxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Time Stamp.
   */
  declare deliveryDate: DeserializedType<T, 'Edm.DateTime'>;
  /**
   * Quantity.
   */
  declare quantity: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Qty. Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare quantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link SalesOrderSet} entity.
   */
  declare toHeader?: SalesOrderSet<T> | null;
  /**
   * One-to-one navigation property to the {@link ProductSet} entity.
   */
  declare toProduct?: ProductSet<T> | null;

  constructor(_entityApi: SalesOrderLineItemSetApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderLineItemSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrderId: DeserializedType<T, 'Edm.String'>;
  itemPosition: DeserializedType<T, 'Edm.String'>;
  productId: DeserializedType<T, 'Edm.String'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  noteLanguage?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  grossAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  netAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  taxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  deliveryDate: DeserializedType<T, 'Edm.DateTime'>;
  quantity: DeserializedType<T, 'Edm.Decimal'>;
  quantityUnit?: DeserializedType<T, 'Edm.String'> | null;
  toHeader?: SalesOrderSetType<T> | null;
  toProduct?: ProductSetType<T> | null;
}
