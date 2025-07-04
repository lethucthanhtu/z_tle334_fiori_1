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
import type { Vh_LanguageSetApi } from './Vh_LanguageSetApi';

/**
 * This class represents the entity "VH_LanguageSet" of service "GWSAMPLE_BASIC".
 */
export class Vh_LanguageSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Vh_LanguageSetType<T>
{
  /**
   * Technical entity name for Vh_LanguageSet.
   */
  static override _entityName = 'VH_LanguageSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the Vh_LanguageSet entity.
   */
  static _keys = ['Spras'];
  /**
   * Language.
   * Maximum length: 2.
   */
  declare spras: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 16.
   */
  declare sptxt: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Vh_LanguageSetApi<T>) {
    super(_entityApi);
  }
}

export interface Vh_LanguageSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  spras: DeserializedType<T, 'Edm.String'>;
  sptxt: DeserializedType<T, 'Edm.String'>;
}
