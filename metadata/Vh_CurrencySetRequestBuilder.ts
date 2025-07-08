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
import { Vh_CurrencySet } from './Vh_CurrencySet';

/**
 * Request builder class for operations supported on the {@link Vh_CurrencySet} entity.
 */
export class Vh_CurrencySetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Vh_CurrencySet<T>, T> {
  /**
   * Returns a request builder for querying all `Vh_CurrencySet` entities.
   * @returns A request builder for creating requests to retrieve all `Vh_CurrencySet` entities.
   */
  getAll(): GetAllRequestBuilder<Vh_CurrencySet<T>, T> {
    return new GetAllRequestBuilder<Vh_CurrencySet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `Vh_CurrencySet` entity based on its keys.
   * @param waers Key property. See {@link Vh_CurrencySet.waers}.
   * @returns A request builder for creating requests to retrieve one `Vh_CurrencySet` entity based on its keys.
   */
  getByKey(
    waers: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Vh_CurrencySet<T>, T> {
    return new GetByKeyRequestBuilder<Vh_CurrencySet<T>, T>(this.entityApi, {
      Waers: waers
    });
  }
}
