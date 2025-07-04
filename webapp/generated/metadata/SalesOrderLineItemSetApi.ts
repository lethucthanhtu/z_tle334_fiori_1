/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SalesOrderLineItemSet } from './SalesOrderLineItemSet';
import { SalesOrderLineItemSetRequestBuilder } from './SalesOrderLineItemSetRequestBuilder';
import { SalesOrderSetApi } from './SalesOrderSetApi';
import { ProductSetApi } from './ProductSetApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v2';
export class SalesOrderLineItemSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<SalesOrderLineItemSet<DeSerializersT>, DeSerializersT>
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
  ): SalesOrderLineItemSetApi<DeSerializersT> {
    return new SalesOrderLineItemSetApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_HEADER: OneToOneLink<
      SalesOrderLineItemSet<DeSerializersT>,
      DeSerializersT,
      SalesOrderSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT: OneToOneLink<
      SalesOrderLineItemSet<DeSerializersT>,
      DeSerializersT,
      ProductSetApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      SalesOrderSetApi<DeSerializersT>,
      ProductSetApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TO_HEADER: new OneToOneLink('ToHeader', this, linkedApis[0]),
      TO_PRODUCT: new OneToOneLink('ToProduct', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = SalesOrderLineItemSet;

  requestBuilder(): SalesOrderLineItemSetRequestBuilder<DeSerializersT> {
    return new SalesOrderLineItemSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    SalesOrderLineItemSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<SalesOrderLineItemSet<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SalesOrderLineItemSet<DeSerializersT>,
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
    typeof SalesOrderLineItemSet,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SalesOrderLineItemSet,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SALES_ORDER_ID: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_POSITION: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRODUCT_ID: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NOTE: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_LANGUAGE: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GROSS_AMOUNT: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    NET_AMOUNT: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    TAX_AMOUNT: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DELIVERY_DATE: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    QUANTITY_UNIT: OrderableEdmTypeField<
      SalesOrderLineItemSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toHeader} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_HEADER: OneToOneLink<
      SalesOrderLineItemSet<DeSerializersT>,
      DeSerializersT,
      SalesOrderSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_PRODUCT: OneToOneLink<
      SalesOrderLineItemSet<DeSerializersT>,
      DeSerializersT,
      ProductSetApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<SalesOrderLineItemSet<DeSerializers>>;
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
         * Static representation of the {@link itemPosition} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_POSITION: fieldBuilder.buildEdmTypeField(
          'ItemPosition',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link productId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_ID: fieldBuilder.buildEdmTypeField(
          'ProductID',
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
         * Static representation of the {@link deliveryDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_DATE: fieldBuilder.buildEdmTypeField(
          'DeliveryDate',
          'Edm.DateTime',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link quantityUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY_UNIT: fieldBuilder.buildEdmTypeField(
          'QuantityUnit',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SalesOrderLineItemSet)
      };
    }

    return this._schema;
  }
}
