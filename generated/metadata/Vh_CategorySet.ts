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
import type { Vh_CategorySetApi } from './Vh_CategorySetApi';

/**
 * This class represents the entity "VH_CategorySet" of service "GWSAMPLE_BASIC".
 */
export class Vh_CategorySet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Vh_CategorySetType<T>
{
  /**
   * Technical entity name for Vh_CategorySet.
   */
  static override _entityName = 'VH_CategorySet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the Vh_CategorySet entity.
   */
  static _keys = ['Category'];
  /**
   * Prod. Cat.
   * Maximum length: 40.
   */
  declare category: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Vh_CategorySetApi<T>) {
    super(_entityApi);
  }
}

export interface Vh_CategorySetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  category: DeserializedType<T, 'Edm.String'>;
}
