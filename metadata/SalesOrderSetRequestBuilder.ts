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
  RequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { SalesOrderSet } from './SalesOrderSet';

/**
 * Request builder class for operations supported on the {@link SalesOrderSet} entity.
 */
export class SalesOrderSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<SalesOrderSet<T>, T> {
  /**
   * Returns a request builder for querying all `SalesOrderSet` entities.
   * @returns A request builder for creating requests to retrieve all `SalesOrderSet` entities.
   */
  getAll(): GetAllRequestBuilder<SalesOrderSet<T>, T> {
    return new GetAllRequestBuilder<SalesOrderSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `SalesOrderSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SalesOrderSet`.
   */
  create(entity: SalesOrderSet<T>): CreateRequestBuilder<SalesOrderSet<T>, T> {
    return new CreateRequestBuilder<SalesOrderSet<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `SalesOrderSet` entity based on its keys.
   * @param salesOrderId Key property. See {@link SalesOrderSet.salesOrderId}.
   * @returns A request builder for creating requests to retrieve one `SalesOrderSet` entity based on its keys.
   */
  getByKey(
    salesOrderId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<SalesOrderSet<T>, T> {
    return new GetByKeyRequestBuilder<SalesOrderSet<T>, T>(this.entityApi, {
      SalesOrderID: salesOrderId
    });
  }

  /**
   * Returns a request builder for deleting an entity of type `SalesOrderSet`.
   * @param salesOrderId Key property. See {@link SalesOrderSet.salesOrderId}.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderSet`.
   */
  delete(salesOrderId: string): DeleteRequestBuilder<SalesOrderSet<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `SalesOrderSet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SalesOrderSet` by taking the entity as a parameter.
   */
  delete(entity: SalesOrderSet<T>): DeleteRequestBuilder<SalesOrderSet<T>, T>;
  delete(salesOrderIdOrEntity: any): DeleteRequestBuilder<SalesOrderSet<T>, T> {
    return new DeleteRequestBuilder<SalesOrderSet<T>, T>(
      this.entityApi,
      salesOrderIdOrEntity instanceof SalesOrderSet
        ? salesOrderIdOrEntity
        : { SalesOrderID: salesOrderIdOrEntity! }
    );
  }
}
