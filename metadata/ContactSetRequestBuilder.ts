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
import { ContactSet } from './ContactSet';

/**
 * Request builder class for operations supported on the {@link ContactSet} entity.
 */
export class ContactSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ContactSet<T>, T> {
  /**
   * Returns a request builder for querying all `ContactSet` entities.
   * @returns A request builder for creating requests to retrieve all `ContactSet` entities.
   */
  getAll(): GetAllRequestBuilder<ContactSet<T>, T> {
    return new GetAllRequestBuilder<ContactSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ContactSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ContactSet`.
   */
  create(entity: ContactSet<T>): CreateRequestBuilder<ContactSet<T>, T> {
    return new CreateRequestBuilder<ContactSet<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ContactSet` entity based on its keys.
   * @param contactGuid Key property. See {@link ContactSet.contactGuid}.
   * @returns A request builder for creating requests to retrieve one `ContactSet` entity based on its keys.
   */
  getByKey(
    contactGuid: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<ContactSet<T>, T> {
    return new GetByKeyRequestBuilder<ContactSet<T>, T>(this.entityApi, {
      ContactGuid: contactGuid
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ContactSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ContactSet`.
   */
  update(entity: ContactSet<T>): UpdateRequestBuilder<ContactSet<T>, T> {
    return new UpdateRequestBuilder<ContactSet<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ContactSet`.
   * @param contactGuid Key property. See {@link ContactSet.contactGuid}.
   * @returns A request builder for creating requests that delete an entity of type `ContactSet`.
   */
  delete(contactGuid: string): DeleteRequestBuilder<ContactSet<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ContactSet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ContactSet` by taking the entity as a parameter.
   */
  delete(entity: ContactSet<T>): DeleteRequestBuilder<ContactSet<T>, T>;
  delete(contactGuidOrEntity: any): DeleteRequestBuilder<ContactSet<T>, T> {
    return new DeleteRequestBuilder<ContactSet<T>, T>(
      this.entityApi,
      contactGuidOrEntity instanceof ContactSet
        ? contactGuidOrEntity
        : { ContactGuid: contactGuidOrEntity! }
    );
  }
}
