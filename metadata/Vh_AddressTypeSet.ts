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
import type { Vh_AddressTypeSetApi } from './Vh_AddressTypeSetApi';

/**
 * This class represents the entity "VH_AddressTypeSet" of service "GWSAMPLE_BASIC".
 */
export class Vh_AddressTypeSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Vh_AddressTypeSetType<T>
{
  /**
   * Technical entity name for Vh_AddressTypeSet.
   */
  static override _entityName = 'VH_AddressTypeSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the Vh_AddressTypeSet entity.
   */
  static _keys = ['AddressType'];
  /**
   * Address Type.
   * Maximum length: 2.
   */
  declare addressType: DeserializedType<T, 'Edm.String'>;
  /**
   * Short Descript.
   * Maximum length: 60.
   */
  declare shorttext: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Vh_AddressTypeSetApi<T>) {
    super(_entityApi);
  }
}

export interface Vh_AddressTypeSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  addressType: DeserializedType<T, 'Edm.String'>;
  shorttext: DeserializedType<T, 'Edm.String'>;
}
