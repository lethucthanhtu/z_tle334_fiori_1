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
import { Vh_UnitQuantitySet } from './Vh_UnitQuantitySet';

/**
 * Request builder class for operations supported on the {@link Vh_UnitQuantitySet} entity.
 */
export class Vh_UnitQuantitySetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Vh_UnitQuantitySet<T>, T> {
  /**
   * Returns a request builder for querying all `Vh_UnitQuantitySet` entities.
   * @returns A request builder for creating requests to retrieve all `Vh_UnitQuantitySet` entities.
   */
  getAll(): GetAllRequestBuilder<Vh_UnitQuantitySet<T>, T> {
    return new GetAllRequestBuilder<Vh_UnitQuantitySet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `Vh_UnitQuantitySet` entity based on its keys.
   * @param msehi Key property. See {@link Vh_UnitQuantitySet.msehi}.
   * @returns A request builder for creating requests to retrieve one `Vh_UnitQuantitySet` entity based on its keys.
   */
  getByKey(
    msehi: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Vh_UnitQuantitySet<T>, T> {
    return new GetByKeyRequestBuilder<Vh_UnitQuantitySet<T>, T>(
      this.entityApi,
      { Msehi: msehi }
    );
  }
}
