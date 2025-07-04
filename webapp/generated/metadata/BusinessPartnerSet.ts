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
import { CtAddress, CtAddressField } from './CtAddress';
import type { BusinessPartnerSetApi } from './BusinessPartnerSetApi';
import { SalesOrderSet, SalesOrderSetType } from './SalesOrderSet';
import { ContactSet, ContactSetType } from './ContactSet';
import { ProductSet, ProductSetType } from './ProductSet';

/**
 * This class represents the entity "BusinessPartnerSet" of service "GWSAMPLE_BASIC".
 */
export class BusinessPartnerSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BusinessPartnerSetType<T>
{
  /**
   * Technical entity name for BusinessPartnerSet.
   */
  static override _entityName = 'BusinessPartnerSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the BusinessPartnerSet entity.
   */
  static _keys = ['BusinessPartnerID'];
  /**
   * Address.
   */
  declare address: CtAddress<T>;
  /**
   * Bus. Part. ID.
   * Maximum length: 10.
   */
  declare businessPartnerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Name.
   * Maximum length: 80.
   */
  declare companyName: DeserializedType<T, 'Edm.String'>;
  /**
   * Web Address.
   * @nullable
   */
  declare webAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E-Mail Address.
   * Maximum length: 255.
   */
  declare emailAddress: DeserializedType<T, 'Edm.String'>;
  /**
   * Phone No.
   * Maximum length: 30.
   * @nullable
   */
  declare phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax Number.
   * Maximum length: 30.
   * @nullable
   */
  declare faxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Form.
   * Maximum length: 10.
   * @nullable
   */
  declare legalForm?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 5.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Bus. Part. Role.
   * Maximum length: 3.
   */
  declare businessPartnerRole: DeserializedType<T, 'Edm.String'>;
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
   * One-to-many navigation property to the {@link SalesOrderSet} entity.
   */
  declare toSalesOrders: SalesOrderSet<T>[];
  /**
   * One-to-many navigation property to the {@link ContactSet} entity.
   */
  declare toContacts: ContactSet<T>[];
  /**
   * One-to-many navigation property to the {@link ProductSet} entity.
   */
  declare toProducts: ProductSet<T>[];

  constructor(_entityApi: BusinessPartnerSetApi<T>) {
    super(_entityApi);
  }
}

export interface BusinessPartnerSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  address: CtAddress<T>;
  businessPartnerId: DeserializedType<T, 'Edm.String'>;
  companyName: DeserializedType<T, 'Edm.String'>;
  webAddress?: DeserializedType<T, 'Edm.String'> | null;
  emailAddress: DeserializedType<T, 'Edm.String'>;
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  faxNumber?: DeserializedType<T, 'Edm.String'> | null;
  legalForm?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode: DeserializedType<T, 'Edm.String'>;
  businessPartnerRole: DeserializedType<T, 'Edm.String'>;
  createdAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  changedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  toSalesOrders: SalesOrderSetType<T>[];
  toContacts: ContactSetType<T>[];
  toProducts: ProductSetType<T>[];
}
