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
import type { Vh_SexSetApi } from './Vh_SexSetApi';

/**
 * This class represents the entity "VH_SexSet" of service "GWSAMPLE_BASIC".
 */
export class Vh_SexSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Vh_SexSetType<T>
{
  /**
   * Technical entity name for Vh_SexSet.
   */
  static override _entityName = 'VH_SexSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the Vh_SexSet entity.
   */
  static _keys = ['Sex'];
  /**
   * Sex.
   * Maximum length: 1.
   */
  declare sex: DeserializedType<T, 'Edm.String'>;
  /**
   * Short Descript.
   * Maximum length: 60.
   */
  declare shorttext: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Vh_SexSetApi<T>) {
    super(_entityApi);
  }
}

export interface Vh_SexSetType<T extends DeSerializers = DefaultDeSerializers> {
  sex: DeserializedType<T, 'Edm.String'>;
  shorttext: DeserializedType<T, 'Edm.String'>;
}
