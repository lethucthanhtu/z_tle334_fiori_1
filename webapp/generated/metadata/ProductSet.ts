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
import type { ProductSetApi } from './ProductSetApi';
import {
  BusinessPartnerSet,
  BusinessPartnerSetType
} from './BusinessPartnerSet';
import {
  SalesOrderLineItemSet,
  SalesOrderLineItemSetType
} from './SalesOrderLineItemSet';

/**
 * This class represents the entity "ProductSet" of service "GWSAMPLE_BASIC".
 */
export class ProductSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProductSetType<T>
{
  /**
   * Technical entity name for ProductSet.
   */
  static override _entityName = 'ProductSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the ProductSet entity.
   */
  static _keys = ['ProductID'];
  /**
   * Product ID.
   * Maximum length: 10.
   */
  declare productId: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod. Type Code.
   * Maximum length: 2.
   */
  declare typeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Prod. Cat.
   * Maximum length: 40.
   */
  declare category: DeserializedType<T, 'Edm.String'>;
  /**
   * Product Name.
   * Maximum length: 255.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Language.
   * Maximum length: 2.
   * @nullable
   */
  declare nameLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prod.Descrip.
   * Maximum length: 255.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language.
   * Maximum length: 2.
   * @nullable
   */
  declare descriptionLanguage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Bus. Part. ID.
   * Maximum length: 10.
   */
  declare supplierId: DeserializedType<T, 'Edm.String'>;
  /**
   * Company Name.
   * Maximum length: 80.
   * @nullable
   */
  declare supplierName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Prod. Tax Code.
   */
  declare taxTarifCode: DeserializedType<T, 'Edm.Byte'>;
  /**
   * Qty. Unit.
   * Maximum length: 3.
   */
  declare measureUnit: DeserializedType<T, 'Edm.String'>;
  /**
   * Wt. Measure.
   * @nullable
   */
  declare weightMeasure?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Qty. Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare weightUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Currency.
   * Maximum length: 5.
   */
  declare currencyCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit Price.
   * @nullable
   */
  declare price?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Dimensions.
   * @nullable
   */
  declare width?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Dimensions.
   * @nullable
   */
  declare depth?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Dimensions.
   * @nullable
   */
  declare height?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Dim. Unit.
   * Maximum length: 3.
   * @nullable
   */
  declare dimUnit?: DeserializedType<T, 'Edm.String'> | null;
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
  declare toSupplier?: BusinessPartnerSet<T> | null;
  /**
   * One-to-many navigation property to the {@link SalesOrderLineItemSet} entity.
   */
  declare toSalesOrderLineItems: SalesOrderLineItemSet<T>[];

  constructor(_entityApi: ProductSetApi<T>) {
    super(_entityApi);
  }
}

export interface ProductSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  productId: DeserializedType<T, 'Edm.String'>;
  typeCode: DeserializedType<T, 'Edm.String'>;
  category: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  nameLanguage?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  descriptionLanguage?: DeserializedType<T, 'Edm.String'> | null;
  supplierId: DeserializedType<T, 'Edm.String'>;
  supplierName?: DeserializedType<T, 'Edm.String'> | null;
  taxTarifCode: DeserializedType<T, 'Edm.Byte'>;
  measureUnit: DeserializedType<T, 'Edm.String'>;
  weightMeasure?: DeserializedType<T, 'Edm.Decimal'> | null;
  weightUnit?: DeserializedType<T, 'Edm.String'> | null;
  currencyCode: DeserializedType<T, 'Edm.String'>;
  price?: DeserializedType<T, 'Edm.Decimal'> | null;
  width?: DeserializedType<T, 'Edm.Decimal'> | null;
  depth?: DeserializedType<T, 'Edm.Decimal'> | null;
  height?: DeserializedType<T, 'Edm.Decimal'> | null;
  dimUnit?: DeserializedType<T, 'Edm.String'> | null;
  createdAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  changedAt?: DeserializedType<T, 'Edm.DateTime'> | null;
  toSupplier?: BusinessPartnerSetType<T> | null;
  toSalesOrderLineItems: SalesOrderLineItemSetType<T>[];
}
