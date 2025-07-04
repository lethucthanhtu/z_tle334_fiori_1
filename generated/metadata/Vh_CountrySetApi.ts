/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Vh_CountrySet } from './Vh_CountrySet';
import { Vh_CountrySetRequestBuilder } from './Vh_CountrySetRequestBuilder';
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
export class Vh_CountrySetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Vh_CountrySet<DeSerializersT>, DeSerializersT>
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
  ): Vh_CountrySetApi<DeSerializersT> {
    return new Vh_CountrySetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Vh_CountrySet;

  requestBuilder(): Vh_CountrySetRequestBuilder<DeSerializersT> {
    return new Vh_CountrySetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Vh_CountrySet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Vh_CountrySet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Vh_CountrySet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Vh_CountrySet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Vh_CountrySet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LAND_1: OrderableEdmTypeField<
      Vh_CountrySet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANDX: OrderableEdmTypeField<
      Vh_CountrySet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NATIO: OrderableEdmTypeField<
      Vh_CountrySet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Vh_CountrySet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link land1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAND_1: fieldBuilder.buildEdmTypeField('Land1', 'Edm.String', false),
        /**
         * Static representation of the {@link landx} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANDX: fieldBuilder.buildEdmTypeField('Landx', 'Edm.String', false),
        /**
         * Static representation of the {@link natio} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NATIO: fieldBuilder.buildEdmTypeField('Natio', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Vh_CountrySet)
      };
    }

    return this._schema;
  }
}
