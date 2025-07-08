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
import type { SalesOrderSetApi } from './SalesOrderSetApi';
import {
  BusinessPartnerSet,
  BusinessPartnerSetType
} from './BusinessPartnerSet';
import {
  SalesOrderLineItemSet,
  SalesOrderLineItemSetType
} from './SalesOrderLineItemSet';

/**
 * This class represents the entity "SalesOrderSet" of service "GWSAMPLE_BASIC".
 */
export class SalesOrderSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements SalesOrderSetType<T>
{
  /**
   * Technical entity name for SalesOrderSet.
   */
  static override _entityName = 'SalesOrderSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the SalesOrderSet entity.
   */
  static _keys = ['SalesOrderID'];
  /**
   * Sa. Ord. ID.
   * Maximum length: 10.
   */
  declare salesOrderId: DeserializedType<T, 'Edm.String'>;
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
   * Bus. Part. ID.
   * Maximum length: 10.
   */
  declare customerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Name.
   * Maximum length: 80.
   * @nullable
   */
  declare customerName?: DeserializedType<T, 'Edm.String'> | null;
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
   * PO Lifecycle.
   * Maximum length: 1.
   * @nullable
   */
  declare lifecycleStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Lifecycle Descript.
   * Maximum length: 60.
   * @nullable
   */
  declare lifecycleStatusDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Confirmation.
   * Maximum length: 1.
   * @nullable
   */
  declare billingStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Billing Description.
   * Maximum length: 60.
   * @nullable
   */
  declare billingStatusDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * PO Ordering.
   * Maximum length: 1.
   * @nullable
   */
  declare deliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Description.
   * Maximum length: 60.
   * @nullable
   */
  declare deliveryStatusDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Time Stamp.
   * @nullable
   */
  declare createdAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Time Stamp.
   * @nullable
   */
  declare changedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartnerSet} entity.
   */
  declare toBusinessPartner?: BusinessPartnerSet<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderLineItemSet} entity.
   */
  declare toLineItems: SalesOrderLineItemSet<T>[];

  constructor(_entityApi: SalesOrderSetApi<T>) {
    super(_entityApi);
  }
}

export interface SalesOrderSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  salesOrderId: DeserializedType<T, 'Edm.String'>;
  note?: DeserializedType<T, 'Edm.String'> | null;
  noteLanguage?: DeserializedType<T, 'Edm.String'> | null;
  customerId: DeserializedType<T, 'Edm.String'>;
  customerName?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  grossAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  netAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  taxAmount?: DeserializedType<T, 'Edm.Decimal'> | null;
  lifecycleStatus?: DeserializedType<T, 'Edm.String'> | null;
  lifecycleStatusDescription?: DeserializedType<T, 'Edm.String'> | null;
  billingStatus?: DeserializedType<T, 'Edm.String'> | null;
  billingStatusDescription?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStatus?: DeserializedType<T, 'Edm.String'> | null;
  deliveryStatusDescription?: DeserializedType<T, 'Edm.String'> | null;
  createdAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  changedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  toBusinessPartner?: BusinessPartnerSetType<T> | null;
  toLineItems: SalesOrderLineItemSetType<T>[];
}
