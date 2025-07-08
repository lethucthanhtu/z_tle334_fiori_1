/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Vh_UnitQuantitySet } from './Vh_UnitQuantitySet';
import { Vh_UnitQuantitySetRequestBuilder } from './Vh_UnitQuantitySetRequestBuilder';
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
export class Vh_UnitQuantitySetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Vh_UnitQuantitySet<DeSerializersT>, DeSerializersT>
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
  ): Vh_UnitQuantitySetApi<DeSerializersT> {
    return new Vh_UnitQuantitySetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Vh_UnitQuantitySet;

  requestBuilder(): Vh_UnitQuantitySetRequestBuilder<DeSerializersT> {
    return new Vh_UnitQuantitySetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Vh_UnitQuantitySet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Vh_UnitQuantitySet<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Vh_UnitQuantitySet<DeSerializersT>,
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
    typeof Vh_UnitQuantitySet,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Vh_UnitQuantitySet,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MSEHI: OrderableEdmTypeField<
      Vh_UnitQuantitySet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MSEHL: OrderableEdmTypeField<
      Vh_UnitQuantitySet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Vh_UnitQuantitySet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link msehi} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSEHI: fieldBuilder.buildEdmTypeField('Msehi', 'Edm.String', false),
        /**
         * Static representation of the {@link msehl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MSEHL: fieldBuilder.buildEdmTypeField('Msehl', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Vh_UnitQuantitySet)
      };
    }

    return this._schema;
  }
}
