/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { BusinessPartnerSet } from './BusinessPartnerSet';

/**
 * Request builder class for operations supported on the {@link BusinessPartnerSet} entity.
 */
export class BusinessPartnerSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<BusinessPartnerSet<T>, T> {
  /**
   * Returns a request builder for querying all `BusinessPartnerSet` entities.
   * @returns A request builder for creating requests to retrieve all `BusinessPartnerSet` entities.
   */
  getAll(): GetAllRequestBuilder<BusinessPartnerSet<T>, T> {
    return new GetAllRequestBuilder<BusinessPartnerSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `BusinessPartnerSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `BusinessPartnerSet`.
   */
  create(
    entity: BusinessPartnerSet<T>
  ): CreateRequestBuilder<BusinessPartnerSet<T>, T> {
    return new CreateRequestBuilder<BusinessPartnerSet<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `BusinessPartnerSet` entity based on its keys.
   * @param businessPartnerId Key property. See {@link BusinessPartnerSet.businessPartnerId}.
   * @returns A request builder for creating requests to retrieve one `BusinessPartnerSet` entity based on its keys.
   */
  getByKey(
    businessPartnerId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<BusinessPartnerSet<T>, T> {
    return new GetByKeyRequestBuilder<BusinessPartnerSet<T>, T>(
      this.entityApi,
      { BusinessPartnerID: businessPartnerId }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `BusinessPartnerSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `BusinessPartnerSet`.
   */
  update(
    entity: BusinessPartnerSet<T>
  ): UpdateRequestBuilder<BusinessPartnerSet<T>, T> {
    return new UpdateRequestBuilder<BusinessPartnerSet<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerSet`.
   * @param businessPartnerId Key property. See {@link BusinessPartnerSet.businessPartnerId}.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerSet`.
   */
  delete(
    businessPartnerId: string
  ): DeleteRequestBuilder<BusinessPartnerSet<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `BusinessPartnerSet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `BusinessPartnerSet` by taking the entity as a parameter.
   */
  delete(
    entity: BusinessPartnerSet<T>
  ): DeleteRequestBuilder<BusinessPartnerSet<T>, T>;
  delete(
    businessPartnerIdOrEntity: any
  ): DeleteRequestBuilder<BusinessPartnerSet<T>, T> {
    return new DeleteRequestBuilder<BusinessPartnerSet<T>, T>(
      this.entityApi,
      businessPartnerIdOrEntity instanceof BusinessPartnerSet
        ? businessPartnerIdOrEntity
        : { BusinessPartnerID: businessPartnerIdOrEntity! }
    );
  }
}
