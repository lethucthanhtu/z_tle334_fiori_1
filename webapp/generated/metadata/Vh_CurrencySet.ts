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
import type { Vh_CurrencySetApi } from './Vh_CurrencySetApi';

/**
 * This class represents the entity "VH_CurrencySet" of service "GWSAMPLE_BASIC".
 */
export class Vh_CurrencySet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Vh_CurrencySetType<T>
{
  /**
   * Technical entity name for Vh_CurrencySet.
   */
  static override _entityName = 'VH_CurrencySet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the Vh_CurrencySet entity.
   */
  static _keys = ['Waers'];
  /**
   * Currency.
   * Maximum length: 5.
   */
  declare waers: DeserializedType<T, 'Edm.String'>;
  /**
   * Long Text.
   * Maximum length: 40.
   */
  declare ltext: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Vh_CurrencySetApi<T>) {
    super(_entityApi);
  }
}

export interface Vh_CurrencySetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  waers: DeserializedType<T, 'Edm.String'>;
  ltext: DeserializedType<T, 'Edm.String'>;
}
