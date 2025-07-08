/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Vh_BpRoleSet } from './Vh_BpRoleSet';
import { Vh_BpRoleSetRequestBuilder } from './Vh_BpRoleSetRequestBuilder';
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
export class Vh_BpRoleSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Vh_BpRoleSet<DeSerializersT>, DeSerializersT>
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
  ): Vh_BpRoleSetApi<DeSerializersT> {
    return new Vh_BpRoleSetApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Vh_BpRoleSet;

  requestBuilder(): Vh_BpRoleSetRequestBuilder<DeSerializersT> {
    return new Vh_BpRoleSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Vh_BpRoleSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Vh_BpRoleSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Vh_BpRoleSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Vh_BpRoleSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Vh_BpRoleSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    BP_ROLE: OrderableEdmTypeField<
      Vh_BpRoleSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SHORTTEXT: OrderableEdmTypeField<
      Vh_BpRoleSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Vh_BpRoleSet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link bpRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BP_ROLE: fieldBuilder.buildEdmTypeField('BpRole', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', Vh_BpRoleSet)
      };
    }

    return this._schema;
  }
}
