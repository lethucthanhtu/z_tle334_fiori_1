/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProductSet } from './ProductSet';
import { ProductSetRequestBuilder } from './ProductSetRequestBuilder';
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
export class ProductSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProductSet<DeSerializersT>, DeSerializersT>
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
  ): ProductSetApi<DeSerializersT> {
    return new ProductSetApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toSupplier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER: OneToOneLink<
      ProductSet<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesOrderLineItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_LINE_ITEMS: Link<
      ProductSet<DeSerializersT>,
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
      TO_SUPPLIER: new OneToOneLink('ToSupplier', this, linkedApis[0]),
      TO_SALES_ORDER_LINE_ITEMS: new Link(
        'ToSalesOrderLineItems',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = ProductSet;

  requestBuilder(): ProductSetRequestBuilder<DeSerializersT> {
    return new ProductSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProductSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProductSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProductSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProductSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProductSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PRODUCT_ID: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TYPE_CODE: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME_LANGUAGE: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION_LANGUAGE: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUPPLIER_ID: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SUPPLIER_NAME: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_TARIF_CODE: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.Byte',
      false,
      true
    >;
    MEASURE_UNIT: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WEIGHT_MEASURE: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    WEIGHT_UNIT: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRICE: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    WIDTH: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DEPTH: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    HEIGHT: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    DIM_UNIT: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CREATED_AT: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    CHANGED_AT: OrderableEdmTypeField<
      ProductSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toSupplier} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SUPPLIER: OneToOneLink<
      ProductSet<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerSetApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link toSalesOrderLineItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_SALES_ORDER_LINE_ITEMS: Link<
      ProductSet<DeSerializersT>,
      DeSerializersT,
      SalesOrderLineItemSetApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProductSet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link typeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'TypeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link nameLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'NameLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link descriptionLanguage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION_LANGUAGE: fieldBuilder.buildEdmTypeField(
          'DescriptionLanguage',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link supplierId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_ID: fieldBuilder.buildEdmTypeField(
          'SupplierID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link supplierName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUPPLIER_NAME: fieldBuilder.buildEdmTypeField(
          'SupplierName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxTarifCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TARIF_CODE: fieldBuilder.buildEdmTypeField(
          'TaxTarifCode',
          'Edm.Byte',
          false
        ),
        /**
         * Static representation of the {@link measureUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASURE_UNIT: fieldBuilder.buildEdmTypeField(
          'MeasureUnit',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link weightMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_MEASURE: fieldBuilder.buildEdmTypeField(
          'WeightMeasure',
          'Edm.Decimal',
          true
        ),
        /**
         * Static representation of the {@link weightUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEIGHT_UNIT: fieldBuilder.buildEdmTypeField(
          'WeightUnit',
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
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('Price', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link width} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WIDTH: fieldBuilder.buildEdmTypeField('Width', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link depth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPTH: fieldBuilder.buildEdmTypeField('Depth', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link height} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HEIGHT: fieldBuilder.buildEdmTypeField('Height', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link dimUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIM_UNIT: fieldBuilder.buildEdmTypeField('DimUnit', 'Edm.String', true),
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
        ALL_FIELDS: new AllFields('*', ProductSet)
      };
    }

    return this._schema;
  }
}
