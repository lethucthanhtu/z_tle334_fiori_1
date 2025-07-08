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
import type { Vh_UnitWeightSetApi } from './Vh_UnitWeightSetApi';

/**
 * This class represents the entity "VH_UnitWeightSet" of service "GWSAMPLE_BASIC".
 */
export class Vh_UnitWeightSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Vh_UnitWeightSetType<T>
{
  /**
   * Technical entity name for Vh_UnitWeightSet.
   */
  static override _entityName = 'VH_UnitWeightSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the Vh_UnitWeightSet entity.
   */
  static _keys = ['Msehi'];
  /**
   * Int. meas. unit.
   * Maximum length: 3.
   */
  declare msehi: DeserializedType<T, 'Edm.String'>;
  /**
   * Unit text.
   * Maximum length: 30.
   */
  declare msehl: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Vh_UnitWeightSetApi<T>) {
    super(_entityApi);
  }
}

export interface Vh_UnitWeightSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  msehi: DeserializedType<T, 'Edm.String'>;
  msehl: DeserializedType<T, 'Edm.String'>;
}
