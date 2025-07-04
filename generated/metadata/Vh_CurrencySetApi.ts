/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Vh_CurrencySet } from './Vh_CurrencySet';
import { Vh_CurrencySetRequestBuilder } from './Vh_CurrencySetRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class Vh_CurrencySetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Vh_CurrencySet<DeSerializersT>, DeSerializersT>
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
  ): Vh_CurrencySetApi<DeSerializersT> {
    return new Vh_CurrencySetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Vh_CurrencySet;

  requestBuilder(): Vh_CurrencySetRequestBuilder<DeSerializersT> {
    return new Vh_CurrencySetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Vh_CurrencySet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Vh_CurrencySet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Vh_CurrencySet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Vh_CurrencySet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Vh_CurrencySet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    WAERS: OrderableEdmTypeField<
      Vh_CurrencySet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LTEXT: OrderableEdmTypeField<
      Vh_CurrencySet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Vh_CurrencySet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link waers} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAERS: fieldBuilder.buildEdmTypeField('Waers', 'Edm.String', false),
        /**
         * Static representation of the {@link ltext} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LTEXT: fieldBuilder.buildEdmTypeField('Ltext', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Vh_CurrencySet)
      };
    }

    return this._schema;
  }
}
