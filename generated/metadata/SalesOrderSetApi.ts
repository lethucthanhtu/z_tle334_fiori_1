/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderSet } from './SalesOrderSet';
import { SalesOrderSetRequestBuilder } from './SalesOrderSetRequestBuilder';
import { BusinessPartnerSetApi } from './BusinessPartnerSetApi';
import { SalesOrderLineItemSetApi } from './SalesOrderLineItemSetApi';
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
  OneToOneLink,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderSet<DeSerializersT>, DeSerializersT>
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
  ): SalesOrderSetApi<DeSerializersT> {
    return new SalesOrderSetApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER: OneToOneLink<
      SalesOrderSet<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toLineItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_LINE_ITEMS: Link<
      SalesOrderSet<DeSerializersT>,
      DeSerializersT,
      SalesOrderLineItemSetApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessPartnerSetApi<DeSerializersT>,
      SalesOrderLineItemSetApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_BUSINESS_PARTNER: new OneToOneLink(
        'ToBusinessPartner',
        this,
        linkedApis[0]
      ),
      TO_LINE_ITEMS: new Link('ToLineItems', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SalesOrderSet;

  requestBuilder(): SalesOrderSetRequestBuilder<DeSerializersT> {
    return new SalesOrderSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesOrderSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<SalesOrderSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof SalesOrderSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(SalesOrderSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER_ID: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_LANGUAGE: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUSTOMER_ID: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CUSTOMER_NAME: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_AMOUNT: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    LIFECYCLE_STATUS: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIFECYCLE_STATUS_DESCRIPTION: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_STATUS: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BILLING_STATUS_DESCRIPTION: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STATUS: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_STATUS_DESCRIPTION: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CHANGED_AT: OrderableEdmTypeField<
      SalesOrderSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER: OneToOneLink<
      SalesOrderSet<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toLineItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_LINE_ITEMS: Link<
      SalesOrderSet<DeSerializersT>,
      DeSerializersT,
      SalesOrderLineItemSetApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderSet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link salesOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'SalesOrderID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link note} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE: fieldBuilder.buildEdmTypeField('Note', 'Edm.String', true),
        /**
         * Static representation of the {@link noteLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'NoteLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link customerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_ID: fieldBuilder.buildEdmTypeField(
          'CustomerID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link customerName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUSTOMER_NAME: fieldBuilder.buildEdmTypeField(
          'CustomerName',
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
          true
        ),
        /**
         * Static representation of the {@link grossAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROSS_AMOUNT: fieldBuilder.buildEdmTypeField(
          'GrossAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link netAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NET_AMOUNT: fieldBuilder.buildEdmTypeField(
          'NetAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link taxAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AMOUNT: fieldBuilder.buildEdmTypeField(
          'TaxAmount',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link lifecycleStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_STATUS: fieldBuilder.buildEdmTypeField(
          'LifecycleStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lifecycleStatusDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIFECYCLE_STATUS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LifecycleStatusDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_STATUS: fieldBuilder.buildEdmTypeField(
          'BillingStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link billingStatusDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BILLING_STATUS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'BillingStatusDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STATUS: fieldBuilder.buildEdmTypeField(
          'DeliveryStatus',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryStatusDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_STATUS_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DeliveryStatusDescription',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', SalesOrderSet)
      };
    }

    return this._schema;
  }
}
