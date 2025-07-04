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
import { Vh_AddressTypeSet } from './Vh_AddressTypeSet';

/**
 * Request builder class for operations supported on the {@link Vh_AddressTypeSet} entity.
 */
export class Vh_AddressTypeSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Vh_AddressTypeSet<T>, T> {
  /**
   * Returns a request builder for querying all `Vh_AddressTypeSet` entities.
   * @returns A request builder for creating requests to retrieve all `Vh_AddressTypeSet` entities.
   */
  getAll(): GetAllRequestBuilder<Vh_AddressTypeSet<T>, T> {
    return new GetAllRequestBuilder<Vh_AddressTypeSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `Vh_AddressTypeSet` entity based on its keys.
   * @param addressType Key property. See {@link Vh_AddressTypeSet.addressType}.
   * @returns A request builder for creating requests to retrieve one `Vh_AddressTypeSet` entity based on its keys.
   */
  getByKey(
    addressType: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Vh_AddressTypeSet<T>, T> {
    return new GetByKeyRequestBuilder<Vh_AddressTypeSet<T>, T>(this.entityApi, {
      AddressType: addressType
    });
  }
}
