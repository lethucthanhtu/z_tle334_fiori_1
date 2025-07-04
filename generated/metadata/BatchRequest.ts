/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  BusinessPartnerSet,
  ProductSet,
  SalesOrderSet,
  SalesOrderLineItemSet,
  ContactSet,
  Vh_SexSet,
  Vh_CountrySet,
  Vh_AddressTypeSet,
  Vh_CategorySet,
  Vh_CurrencySet,
  Vh_UnitQuantitySet,
  Vh_UnitWeightSet,
  Vh_UnitLengthSet,
  Vh_ProductTypeCodeSet,
  Vh_BpRoleSet,
  Vh_LanguageSet,
  RegenerateAllDataParameters,
  SalesOrderConfirmParameters,
  SalesOrderCancelParameters,
  SalesOrderInvoiceCreatedParameters,
  SalesOrderGoodsIssueCreatedParameters,
  CtString
} from './index';

/**
 * Batch builder for operations supported on the Metadata.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    ReadMetadataRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    ReadMetadataRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadMetadataRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadMetadataRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    ReadMetadataRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultMetadataPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Metadata.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteMetadataRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteMetadataRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteMetadataRequestBuilder<DeSerializersT>
    | Array<WriteMetadataRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteMetadataRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultMetadataPath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
export type ReadMetadataRequestBuilder<DeSerializersT extends DeSerializers> =
  | GetAllRequestBuilder<BusinessPartnerSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesOrderSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesOrderLineItemSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ContactSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_SexSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_CountrySet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_AddressTypeSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_CategorySet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_CurrencySet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_UnitQuantitySet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_UnitWeightSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_UnitLengthSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_ProductTypeCodeSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_BpRoleSet<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Vh_LanguageSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BusinessPartnerSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesOrderSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SalesOrderLineItemSet<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ContactSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Vh_SexSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Vh_CountrySet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Vh_AddressTypeSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Vh_CategorySet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Vh_CurrencySet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Vh_UnitQuantitySet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Vh_UnitWeightSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Vh_UnitLengthSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      Vh_ProductTypeCodeSet<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Vh_BpRoleSet<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Vh_LanguageSet<DeSerializersT>, DeSerializersT>;
export type WriteMetadataRequestBuilder<DeSerializersT extends DeSerializers> =
  | CreateRequestBuilder<BusinessPartnerSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartnerSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartnerSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesOrderSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOrderSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOrderSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesOrderLineItemSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOrderLineItemSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOrderLineItemSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ContactSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ContactSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ContactSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_SexSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_SexSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_SexSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_CountrySet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_CountrySet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_CountrySet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_AddressTypeSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_AddressTypeSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_AddressTypeSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_CategorySet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_CategorySet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_CategorySet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_CurrencySet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_CurrencySet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_CurrencySet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_UnitQuantitySet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_UnitQuantitySet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_UnitQuantitySet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_UnitWeightSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_UnitWeightSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_UnitWeightSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_UnitLengthSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_UnitLengthSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_UnitLengthSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_ProductTypeCodeSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_ProductTypeCodeSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_ProductTypeCodeSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_BpRoleSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_BpRoleSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_BpRoleSet<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Vh_LanguageSet<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Vh_LanguageSet<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Vh_LanguageSet<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      RegenerateAllDataParameters<DeSerializersT>,
      CtString
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SalesOrderConfirmParameters<DeSerializersT>,
      SalesOrderSet
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SalesOrderCancelParameters<DeSerializersT>,
      SalesOrderSet
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SalesOrderInvoiceCreatedParameters<DeSerializersT>,
      SalesOrderSet
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SalesOrderGoodsIssueCreatedParameters<DeSerializersT>,
      SalesOrderSet
    >;
