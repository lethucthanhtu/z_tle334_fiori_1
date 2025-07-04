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
import { ProductSet } from './ProductSet';

/**
 * Request builder class for operations supported on the {@link ProductSet} entity.
 */
export class ProductSetRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ProductSet<T>, T> {
  /**
   * Returns a request builder for querying all `ProductSet` entities.
   * @returns A request builder for creating requests to retrieve all `ProductSet` entities.
   */
  getAll(): GetAllRequestBuilder<ProductSet<T>, T> {
    return new GetAllRequestBuilder<ProductSet<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ProductSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ProductSet`.
   */
  create(entity: ProductSet<T>): CreateRequestBuilder<ProductSet<T>, T> {
    return new CreateRequestBuilder<ProductSet<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `ProductSet` entity based on its keys.
   * @param productId Key property. See {@link ProductSet.productId}.
   * @returns A request builder for creating requests to retrieve one `ProductSet` entity based on its keys.
   */
  getByKey(
    productId: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<ProductSet<T>, T> {
    return new GetByKeyRequestBuilder<ProductSet<T>, T>(this.entityApi, {
      ProductID: productId
    });
  }

  /**
   * Returns a request builder for updating an entity of type `ProductSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ProductSet`.
   */
  update(entity: ProductSet<T>): UpdateRequestBuilder<ProductSet<T>, T> {
    return new UpdateRequestBuilder<ProductSet<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ProductSet`.
   * @param productId Key property. See {@link ProductSet.productId}.
   * @returns A request builder for creating requests that delete an entity of type `ProductSet`.
   */
  delete(productId: string): DeleteRequestBuilder<ProductSet<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ProductSet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ProductSet` by taking the entity as a parameter.
   */
  delete(entity: ProductSet<T>): DeleteRequestBuilder<ProductSet<T>, T>;
  delete(productIdOrEntity: any): DeleteRequestBuilder<ProductSet<T>, T> {
    return new DeleteRequestBuilder<ProductSet<T>, T>(
      this.entityApi,
      productIdOrEntity instanceof ProductSet
        ? productIdOrEntity
        : { ProductID: productIdOrEntity! }
    );
  }
}
