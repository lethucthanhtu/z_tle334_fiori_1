/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  ComplexTypeField,
  ConstructorOrField,
  DeSerializers,
  DefaultDeSerializers,
  DeserializedType,
  EdmTypeField,
  Entity,
  FieldBuilder,
  FieldOptions,
  OrderableEdmTypeField,
  PropertyMetadata
} from '@sap-cloud-sdk/odata-v2';

/**
 * CtString
 */
export interface CtString<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> {
  /**
   * String.
   */
  string: DeserializedType<DeSerializersT, 'Edm.String'>;
}

/**
 * CtStringField
 * @typeParam EntityT - Type of the entity the complex type field belongs to.
 */
export class CtStringField<
  EntityT extends Entity,
  DeSerializersT extends DeSerializers = DefaultDeSerializers,
  NullableT extends boolean = false,
  SelectableT extends boolean = false
> extends ComplexTypeField<
  EntityT,
  DeSerializersT,
  CtString,
  NullableT,
  SelectableT
> {
  private _fieldBuilder: FieldBuilder<this, DeSerializersT> = new FieldBuilder(
    this,
    this.deSerializers
  );
  /**
   * Representation of the {@link CtString.string} property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  string: OrderableEdmTypeField<
    EntityT,
    DeSerializersT,
    'Edm.String',
    false,
    false
  > = this._fieldBuilder.buildEdmTypeField('String', 'Edm.String', false);

  /**
   * Creates an instance of CtStringField.
   * @param fieldName - Actual name of the field as used in the OData request.
   * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
   */
  constructor(
    fieldName: string,
    fieldOf: ConstructorOrField<EntityT>,
    deSerializers: DeSerializersT,
    fieldOptions?: FieldOptions<NullableT, SelectableT>
  ) {
    super(fieldName, fieldOf, deSerializers, CtString, fieldOptions);
  }
}

export namespace CtString {
  /**
   * Metadata information on all properties of the `CtString` complex type.
   */
  export const _propertyMetadata: PropertyMetadata<CtString>[] = [
    {
      originalName: 'String',
      name: 'string',
      type: 'Edm.String',
      isCollection: false
    }
  ];
}
