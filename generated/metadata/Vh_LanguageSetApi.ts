/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Vh_LanguageSet } from './Vh_LanguageSet';
import { Vh_LanguageSetRequestBuilder } from './Vh_LanguageSetRequestBuilder';
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
export class Vh_LanguageSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Vh_LanguageSet<DeSerializersT>, DeSerializersT>
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
  ): Vh_LanguageSetApi<DeSerializersT> {
    return new Vh_LanguageSetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Vh_LanguageSet;

  requestBuilder(): Vh_LanguageSetRequestBuilder<DeSerializersT> {
    return new Vh_LanguageSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Vh_LanguageSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Vh_LanguageSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Vh_LanguageSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Vh_LanguageSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Vh_LanguageSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    SPRAS: OrderableEdmTypeField<
      Vh_LanguageSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SPTXT: OrderableEdmTypeField<
      Vh_LanguageSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Vh_LanguageSet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link spras} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPRAS: fieldBuilder.buildEdmTypeField('Spras', 'Edm.String', false),
        /**
         * Static representation of the {@link sptxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPTXT: fieldBuilder.buildEdmTypeField('Sptxt', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Vh_LanguageSet)
      };
    }

    return this._schema;
  }
}
