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
import { Vh_CategorySet } from './Vh_CategorySet';

/**
 * Request builder class for operations supported on the {@link Vh_CategorySet} entity.
 */
export class Vh_CategorySetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Vh_CategorySet<T>, T> {
  /**
   * Returns a request builder for querying all `Vh_CategorySet` entities.
   * @returns A request builder for creating requests to retrieve all `Vh_CategorySet` entities.
   */
  getAll(): GetAllRequestBuilder<Vh_CategorySet<T>, T> {
    return new GetAllRequestBuilder<Vh_CategorySet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `Vh_CategorySet` entity based on its keys.
   * @param category Key property. See {@link Vh_CategorySet.category}.
   * @returns A request builder for creating requests to retrieve one `Vh_CategorySet` entity based on its keys.
   */
  getByKey(
    category: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Vh_CategorySet<T>, T> {
    return new GetByKeyRequestBuilder<Vh_CategorySet<T>, T>(this.entityApi, {
      Category: category
    });
  }
}
