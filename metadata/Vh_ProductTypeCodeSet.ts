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
import type { Vh_ProductTypeCodeSetApi } from './Vh_ProductTypeCodeSetApi';

/**
 * This class represents the entity "VH_ProductTypeCodeSet" of service "GWSAMPLE_BASIC".
 */
export class Vh_ProductTypeCodeSet<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements Vh_ProductTypeCodeSetType<T>
{
  /**
   * Technical entity name for Vh_ProductTypeCodeSet.
   */
  static override _entityName = 'VH_ProductTypeCodeSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the Vh_ProductTypeCodeSet entity.
   */
  static _keys = ['TypeCode'];
  /**
   * Prod. Type Code.
   * Maximum length: 2.
   */
  declare typeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Short Descript.
   * Maximum length: 60.
   */
  declare shorttext: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Vh_ProductTypeCodeSetApi<T>) {
    super(_entityApi);
  }
}

export interface Vh_ProductTypeCodeSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  typeCode: DeserializedType<T, 'Edm.String'>;
  shorttext: DeserializedType<T, 'Edm.String'>;
}
