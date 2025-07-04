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
import { Vh_SexSet } from './Vh_SexSet';

/**
 * Request builder class for operations supported on the {@link Vh_SexSet} entity.
 */
export class Vh_SexSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Vh_SexSet<T>, T> {
  /**
   * Returns a request builder for querying all `Vh_SexSet` entities.
   * @returns A request builder for creating requests to retrieve all `Vh_SexSet` entities.
   */
  getAll(): GetAllRequestBuilder<Vh_SexSet<T>, T> {
    return new GetAllRequestBuilder<Vh_SexSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `Vh_SexSet` entity based on its keys.
   * @param sex Key property. See {@link Vh_SexSet.sex}.
   * @returns A request builder for creating requests to retrieve one `Vh_SexSet` entity based on its keys.
   */
  getByKey(
    sex: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Vh_SexSet<T>, T> {
    return new GetByKeyRequestBuilder<Vh_SexSet<T>, T>(this.entityApi, {
      Sex: sex
    });
  }
}
