/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerSetApi } from './BusinessPartnerSetApi';
import { ProductSetApi } from './ProductSetApi';
import { SalesOrderSetApi } from './SalesOrderSetApi';
import { SalesOrderLineItemSetApi } from './SalesOrderLineItemSetApi';
import { ContactSetApi } from './ContactSetApi';
import { Vh_SexSetApi } from './Vh_SexSetApi';
import { Vh_CountrySetApi } from './Vh_CountrySetApi';
import { Vh_AddressTypeSetApi } from './Vh_AddressTypeSetApi';
import { Vh_CategorySetApi } from './Vh_CategorySetApi';
import { Vh_CurrencySetApi } from './Vh_CurrencySetApi';
import { Vh_UnitQuantitySetApi } from './Vh_UnitQuantitySetApi';
import { Vh_UnitWeightSetApi } from './Vh_UnitWeightSetApi';
import { Vh_UnitLengthSetApi } from './Vh_UnitLengthSetApi';
import { Vh_ProductTypeCodeSetApi } from './Vh_ProductTypeCodeSetApi';
import { Vh_BpRoleSetApi } from './Vh_BpRoleSetApi';
import { Vh_LanguageSetApi } from './Vh_LanguageSetApi';
import {
  regenerateAllData,
  salesOrderConfirm,
  salesOrderCancel,
  salesOrderInvoiceCreated,
  salesOrderGoodsIssueCreated,
  RegenerateAllDataParameters,
  SalesOrderConfirmParameters,
  SalesOrderCancelParameters,
  SalesOrderInvoiceCreatedParameters,
  SalesOrderGoodsIssueCreatedParameters
} from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function metadata<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateTimeT = Moment,
  TimeT = Time
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateTimeT,
      TimeT
    >
  > = defaultDeSerializers as any
): Metadata<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateTimeT,
    TimeT
  >
> {
  return new Metadata(mergeDefaultDeSerializersWith(deSerializers));
}
class Metadata<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get businessPartnerSetApi(): BusinessPartnerSetApi<DeSerializersT> {
    const api = this.initApi('businessPartnerSetApi', BusinessPartnerSetApi);
    const linkedApis = [
      this.initApi('salesOrderSetApi', SalesOrderSetApi),
      this.initApi('contactSetApi', ContactSetApi),
      this.initApi('productSetApi', ProductSetApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get productSetApi(): ProductSetApi<DeSerializersT> {
    const api = this.initApi('productSetApi', ProductSetApi);
    const linkedApis = [
      this.initApi('businessPartnerSetApi', BusinessPartnerSetApi),
      this.initApi('salesOrderLineItemSetApi', SalesOrderLineItemSetApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderSetApi(): SalesOrderSetApi<DeSerializersT> {
    const api = this.initApi('salesOrderSetApi', SalesOrderSetApi);
    const linkedApis = [
      this.initApi('businessPartnerSetApi', BusinessPartnerSetApi),
      this.initApi('salesOrderLineItemSetApi', SalesOrderLineItemSetApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get salesOrderLineItemSetApi(): SalesOrderLineItemSetApi<DeSerializersT> {
    const api = this.initApi(
      'salesOrderLineItemSetApi',
      SalesOrderLineItemSetApi
    );
    const linkedApis = [
      this.initApi('salesOrderSetApi', SalesOrderSetApi),
      this.initApi('productSetApi', ProductSetApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get contactSetApi(): ContactSetApi<DeSerializersT> {
    const api = this.initApi('contactSetApi', ContactSetApi);
    const linkedApis = [
      this.initApi('businessPartnerSetApi', BusinessPartnerSetApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get vh_SexSetApi(): Vh_SexSetApi<DeSerializersT> {
    return this.initApi('vh_SexSetApi', Vh_SexSetApi);
  }

  get vh_CountrySetApi(): Vh_CountrySetApi<DeSerializersT> {
    return this.initApi('vh_CountrySetApi', Vh_CountrySetApi);
  }

  get vh_AddressTypeSetApi(): Vh_AddressTypeSetApi<DeSerializersT> {
    return this.initApi('vh_AddressTypeSetApi', Vh_AddressTypeSetApi);
  }

  get vh_CategorySetApi(): Vh_CategorySetApi<DeSerializersT> {
    return this.initApi('vh_CategorySetApi', Vh_CategorySetApi);
  }

  get vh_CurrencySetApi(): Vh_CurrencySetApi<DeSerializersT> {
    return this.initApi('vh_CurrencySetApi', Vh_CurrencySetApi);
  }

  get vh_UnitQuantitySetApi(): Vh_UnitQuantitySetApi<DeSerializersT> {
    return this.initApi('vh_UnitQuantitySetApi', Vh_UnitQuantitySetApi);
  }

  get vh_UnitWeightSetApi(): Vh_UnitWeightSetApi<DeSerializersT> {
    return this.initApi('vh_UnitWeightSetApi', Vh_UnitWeightSetApi);
  }

  get vh_UnitLengthSetApi(): Vh_UnitLengthSetApi<DeSerializersT> {
    return this.initApi('vh_UnitLengthSetApi', Vh_UnitLengthSetApi);
  }

  get vh_ProductTypeCodeSetApi(): Vh_ProductTypeCodeSetApi<DeSerializersT> {
    return this.initApi('vh_ProductTypeCodeSetApi', Vh_ProductTypeCodeSetApi);
  }

  get vh_BpRoleSetApi(): Vh_BpRoleSetApi<DeSerializersT> {
    return this.initApi('vh_BpRoleSetApi', Vh_BpRoleSetApi);
  }

  get vh_LanguageSetApi(): Vh_LanguageSetApi<DeSerializersT> {
    return this.initApi('vh_LanguageSetApi', Vh_LanguageSetApi);
  }

  get operations() {
    return {
      regenerateAllData: (
        parameter: RegenerateAllDataParameters<DeSerializersT>
      ) => regenerateAllData(parameter, this.deSerializers),
      salesOrderConfirm: (
        parameter: SalesOrderConfirmParameters<DeSerializersT>
      ) => salesOrderConfirm(parameter, this.deSerializers),
      salesOrderCancel: (
        parameter: SalesOrderCancelParameters<DeSerializersT>
      ) => salesOrderCancel(parameter, this.deSerializers),
      salesOrderInvoiceCreated: (
        parameter: SalesOrderInvoiceCreatedParameters<DeSerializersT>
      ) => salesOrderInvoiceCreated(parameter, this.deSerializers),
      salesOrderGoodsIssueCreated: (
        parameter: SalesOrderGoodsIssueCreatedParameters<DeSerializersT>
      ) => salesOrderGoodsIssueCreated(parameter, this.deSerializers)
    };
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
