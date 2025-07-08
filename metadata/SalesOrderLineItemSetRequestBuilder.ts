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
import { SalesOrderLineItemSet } from './SalesOrderLineItemSet';

/**
 * Request builder class for operations supported on the {@link SalesOrderLineItemSet} entity.
 */
export class SalesOrderLineItemSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderLineItemSet<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderLineItemSet` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderLineItemSet` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderLineItemSet<T>, T> {
    return new GetAllRequestBuilder<SalesOrderLineItemSet<T>, T>(
      this.entityApi
    );
  }

  /**
   * Returns a request builder for creating a `SalesOrderLineItemSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderLineItemSet`.
   */
  create(
    entity: SalesOrderLineItemSet<T>
  ): CreateRequestBuilder<SalesOrderLineItemSet<T>, T> {
    return new CreateRequestBuilder<SalesOrderLineItemSet<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderLineItemSet` entity based on its keys.
   * @param salesOrderId Key property. See {@link SalesOrderLineItemSet.salesOrderId}.
   * @param itemPosition Key property. See {@link SalesOrderLineItemSet.itemPosition}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderLineItemSet` entity based on its keys.
   */
  getByKey(
    salesOrderId: DeserializedType<T, 'Edm.String'>,
    itemPosition: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderLineItemSet<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderLineItemSet<T>, T>(
      this.entityApi,
      {
        SalesOrderID: salesOrderId,
        ItemPosition: itemPosition
      }
    );
  }

  /**
   * Returns a request builder for updating an entity of type `SalesOrderLineItemSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SalesOrderLineItemSet`.
   */
  update(
    entity: SalesOrderLineItemSet<T>
  ): UpdateRequestBuilder<SalesOrderLineItemSet<T>, T> {
    return new UpdateRequestBuilder<SalesOrderLineItemSet<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLineItemSet`.
   * @param salesOrderId Key property. See {@link SalesOrderLineItemSet.salesOrderId}.
   * @param itemPosition Key property. See {@link SalesOrderLineItemSet.itemPosition}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLineItemSet`.
   */
  delete(
    salesOrderId: string,
    itemPosition: string
  ): DeleteRequestBuilder<SalesOrderLineItemSet<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderLineItemSet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderLineItemSet` by taking the entity as a parameter.
   */
  delete(
    entity: SalesOrderLineItemSet<T>
  ): DeleteRequestBuilder<SalesOrderLineItemSet<T>, T>;
  delete(
    salesOrderIdOrEntity: any,
    itemPosition?: string
  ): DeleteRequestBuilder<SalesOrderLineItemSet<T>, T> {
    return new DeleteRequestBuilder<SalesOrderLineItemSet<T>, T>(
      this.entityApi,
      salesOrderIdOrEntity instanceof SalesOrderLineItemSet
        ? salesOrderIdOrEntity
        : {
            SalesOrderID: salesOrderIdOrEntity!,
            ItemPosition: itemPosition!
          }
    );
  }
}
