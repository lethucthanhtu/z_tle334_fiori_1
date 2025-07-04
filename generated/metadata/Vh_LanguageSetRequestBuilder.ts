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
import { Vh_LanguageSet } from './Vh_LanguageSet';

/**
 * Request builder class for operations supported on the {@link Vh_LanguageSet} entity.
 */
export class Vh_LanguageSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Vh_LanguageSet<T>, T> {
  /**
   * Returns a request builder for querying all `Vh_LanguageSet` entities.
   * @returns A request builder for creating requests to retrieve all `Vh_LanguageSet` entities.
   */
  getAll(): GetAllRequestBuilder<Vh_LanguageSet<T>, T> {
    return new GetAllRequestBuilder<Vh_LanguageSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for retrieving one `Vh_LanguageSet` entity based on its keys.
   * @param spras Key property. See {@link Vh_LanguageSet.spras}.
   * @returns A request builder for creating requests to retrieve one `Vh_LanguageSet` entity based on its keys.
   */
  getByKey(
    spras: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Vh_LanguageSet<T>, T> {
    return new GetByKeyRequestBuilder<Vh_LanguageSet<T>, T>(this.entityApi, {
      Spras: spras
    });
  }
}
