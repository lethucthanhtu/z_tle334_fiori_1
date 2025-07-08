/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Vh_SexSet } from './Vh_SexSet';
import { Vh_SexSetRequestBuilder } from './Vh_SexSetRequestBuilder';
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
export class Vh_SexSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Vh_SexSet<DeSerializersT>, DeSerializersT>
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
  ): Vh_SexSetApi<DeSerializersT> {
    return new Vh_SexSetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Vh_SexSet;

  requestBuilder(): Vh_SexSetRequestBuilder<DeSerializersT> {
    return new Vh_SexSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Vh_SexSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Vh_SexSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Vh_SexSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Vh_SexSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Vh_SexSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SEX: OrderableEdmTypeField<
      Vh_SexSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHORTTEXT: OrderableEdmTypeField<
      Vh_SexSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Vh_SexSet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link sex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEX: fieldBuilder.buildEdmTypeField('Sex', 'Edm.String', false),
        /**
         * Static representation of the {@link shorttext} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHORTTEXT: fieldBuilder.buildEdmTypeField(
          'Shorttext',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Vh_SexSet)
      };
    }

    return this._schema;
  }
}
