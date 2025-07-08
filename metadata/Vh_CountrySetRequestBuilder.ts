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
import { Vh_CountrySet } from './Vh_CountrySet';

/**
 * Request builder class for operations supported on the {@link Vh_CountrySet} entity.
 */
export class Vh_CountrySetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Vh_CountrySet<T>, T> {
  /**
   * Returns a request builder for querying all `Vh_CountrySet` entities.
   * @returns A request builder for creating requests to retrieve all `Vh_CountrySet` entities.
   */
  getAll(): GetAllRequestBuilder<Vh_CountrySet<T>, T> {
    return new GetAllRequestBuilder<Vh_CountrySet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `Vh_CountrySet` entity based on its keys.
   * @param land1 Key property. See {@link Vh_CountrySet.land1}.
   * @returns A request builder for creating requests to retrieve one `Vh_CountrySet` entity based on its keys.
   */
  getByKey(
    land1: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Vh_CountrySet<T>, T> {
    return new GetByKeyRequestBuilder<Vh_CountrySet<T>, T>(this.entityApi, {
      Land1: land1
    });
  }
}
