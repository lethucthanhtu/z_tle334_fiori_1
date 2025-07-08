/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Vh_AddressTypeSet } from './Vh_AddressTypeSet';
import { Vh_AddressTypeSetRequestBuilder } from './Vh_AddressTypeSetRequestBuilder';
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
export class Vh_AddressTypeSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Vh_AddressTypeSet<DeSerializersT>, DeSerializersT>
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
  ): Vh_AddressTypeSetApi<DeSerializersT> {
    return new Vh_AddressTypeSetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Vh_AddressTypeSet;

  requestBuilder(): Vh_AddressTypeSetRequestBuilder<DeSerializersT> {
    return new Vh_AddressTypeSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Vh_AddressTypeSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Vh_AddressTypeSet<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Vh_AddressTypeSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof Vh_AddressTypeSet,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Vh_AddressTypeSet,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS_TYPE: OrderableEdmTypeField<
      Vh_AddressTypeSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHORTTEXT: OrderableEdmTypeField<
      Vh_AddressTypeSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Vh_AddressTypeSet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link addressType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_TYPE: fieldBuilder.buildEdmTypeField(
          'AddressType',
          'Edm.String',
          false
        ),
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
        ALL_FIELDS: new AllFields('*', Vh_AddressTypeSet)
      };
    }

    return this._schema;
  }
}
