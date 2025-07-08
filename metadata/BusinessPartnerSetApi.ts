/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessPartnerSet } from './BusinessPartnerSet';
import { BusinessPartnerSetRequestBuilder } from './BusinessPartnerSetRequestBuilder';
import { SalesOrderSetApi } from './SalesOrderSetApi';
import { ContactSetApi } from './ContactSetApi';
import { ProductSetApi } from './ProductSetApi';
import { CtAddress, CtAddressField } from './CtAddress';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class BusinessPartnerSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessPartnerSet<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): BusinessPartnerSetApi<DeSerializersT> {
    return new BusinessPartnerSetApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link toSalesOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDERS: Link<
      BusinessPartnerSet<DeSerializersT>,
      DeSerializersT,
      SalesOrderSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toContacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CONTACTS: Link<
      BusinessPartnerSet<DeSerializersT>,
      DeSerializersT,
      ContactSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCTS: Link<
      BusinessPartnerSet<DeSerializersT>,
      DeSerializersT,
      ProductSetApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderSetApi<DeSerializersT>,
      ContactSetApi<DeSerializersT>,
      ProductSetApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_SALES_ORDERS: new Link('ToSalesOrders', this, linkedApis[0]),
      TO_CONTACTS: new Link('ToContacts', this, linkedApis[1]),
      TO_PRODUCTS: new Link('ToProducts', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = BusinessPartnerSet;

  requestBuilder(): BusinessPartnerSetRequestBuilder<DeSerializersT> {
    return new BusinessPartnerSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessPartnerSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BusinessPartnerSet<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessPartnerSet<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof BusinessPartnerSet,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessPartnerSet,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS: CtAddressField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      false,
      true
    >;
    BUSINESS_PARTNER_ID: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COMPANY_NAME: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEB_ADDRESS: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_ADDRESS: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PHONE_NUMBER: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX_NUMBER: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_FORM: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BUSINESS_PARTNER_ROLE: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CHANGED_AT: OrderableEdmTypeField<
      BusinessPartnerSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesOrders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDERS: Link<
      BusinessPartnerSet<DeSerializersT>,
      DeSerializersT,
      SalesOrderSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toContacts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_CONTACTS: Link<
      BusinessPartnerSet<DeSerializersT>,
      DeSerializersT,
      ContactSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toProducts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCTS: Link<
      BusinessPartnerSet<DeSerializersT>,
      DeSerializersT,
      ProductSetApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessPartnerSet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildComplexTypeField(
          'Address',
          CtAddressField,
          false
        ),
        /**
         * Static representation of the {@link businessPartnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_ID: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link companyName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_NAME: fieldBuilder.buildEdmTypeField(
          'CompanyName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link webAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_ADDRESS: fieldBuilder.buildEdmTypeField(
          'WebAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'EmailAddress',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link phoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link faxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'FaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_FORM: fieldBuilder.buildEdmTypeField(
          'LegalForm',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'CurrencyCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link businessPartnerRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_ROLE: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerRole',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link createdAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_AT: fieldBuilder.buildEdmTypeField(
          'CreatedAt',
          'Edm.DateTime',
          true
        ),
        /**
         * Static representation of the {@link changedAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHANGED_AT: fieldBuilder.buildEdmTypeField(
          'ChangedAt',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessPartnerSet)
      };
    }

    return this._schema;
  }
}
