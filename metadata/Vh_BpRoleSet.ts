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
import type { Vh_BpRoleSetApi } from './Vh_BpRoleSetApi';

/**
 * This class represents the entity "VH_BPRoleSet" of service "GWSAMPLE_BASIC".
 */
export class Vh_BpRoleSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Vh_BpRoleSetType<T>
{
  /**
   * Technical entity name for Vh_BpRoleSet.
   */
  static override _entityName = 'VH_BPRoleSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the Vh_BpRoleSet entity.
   */
  static _keys = ['BpRole'];
  /**
   * Bus. Part. Role.
   * Maximum length: 3.
   */
  declare bpRole: DeserializedType<T, 'Edm.String'>;
  /**
   * Short Descript.
   * Maximum length: 60.
   */
  declare shorttext: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: Vh_BpRoleSetApi<T>) {
    super(_entityApi);
  }
}

export interface Vh_BpRoleSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  bpRole: DeserializedType<T, 'Edm.String'>;
  shorttext: DeserializedType<T, 'Edm.String'>;
}
