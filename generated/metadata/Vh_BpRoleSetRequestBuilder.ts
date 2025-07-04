/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { Vh_BpRoleSet } from './Vh_BpRoleSet';

/**
 * Request builder class for operations supported on the {@link Vh_BpRoleSet} entity.
 */
export class Vh_BpRoleSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Vh_BpRoleSet<T>, T> {
  /**
   * Returns a request builder for querying all `Vh_BpRoleSet` entities.
   * @returns A request builder for creating requests to retrieve all `Vh_BpRoleSet` entities.
   */
  getAll(): GetAllRequestBuilder<Vh_BpRoleSet<T>, T> {
    return new GetAllRequestBuilder<Vh_BpRoleSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `Vh_BpRoleSet` entity based on its keys.
   * @param bpRole Key property. See {@link Vh_BpRoleSet.bpRole}.
   * @returns A request builder for creating requests to retrieve one `Vh_BpRoleSet` entity based on its keys.
   */
  getByKey(
    bpRole: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Vh_BpRoleSet<T>, T> {
    return new GetByKeyRequestBuilder<Vh_BpRoleSet<T>, T>(this.entityApi, {
      BpRole: bpRole
    });
  }
}
