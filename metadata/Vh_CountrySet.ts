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
import type { Vh_CountrySetApi } from './Vh_CountrySetApi';

/**
 * This class represents the entity "VH_CountrySet" of service "GWSAMPLE_BASIC".
 */
export class Vh_CountrySet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Vh_CountrySetType<T>
{
  /**
   * Technical entity name for Vh_CountrySet.
   */
  static override _entityName = 'VH_CountrySet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the Vh_CountrySet entity.
   */
  static _keys = ['Land1'];
  /**
   * Country.
   * Maximum length: 3.
   */
  declare land1: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 15.
   */
  declare landx: DeserializedType<T, 'Edm.String'>;
  /**
   * Nationality.
   * Maximum length: 15.
   */
  declare natio: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Vh_CountrySetApi<T>) {
    super(_entityApi);
  }
}

export interface Vh_CountrySetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  land1: DeserializedType<T, 'Edm.String'>;
  landx: DeserializedType<T, 'Edm.String'>;
  natio: DeserializedType<T, 'Edm.String'>;
}
