/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ContactSet } from './ContactSet';
import { ContactSetRequestBuilder } from './ContactSetRequestBuilder';
import { BusinessPartnerSetApi } from './BusinessPartnerSetApi';
import { CtAddress, CtAddressField } from './CtAddress';
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
export class ContactSetApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ContactSet<DeSerializersT>, DeSerializersT>
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
  ): ContactSetApi<DeSerializersT> {
    return new ContactSetApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link toBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER: OneToOneLink<
      ContactSet<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerSetApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [BusinessPartnerSetApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      TO_BUSINESS_PARTNER: new OneToOneLink(
        'ToBusinessPartner',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ContactSet;

  requestBuilder(): ContactSetRequestBuilder<DeSerializersT> {
    return new ContactSetRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ContactSet<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ContactSet<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ContactSet<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ContactSet, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ContactSet, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ADDRESS: CtAddressField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      false,
      true
    >;
    CONTACT_GUID: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    BUSINESS_PARTNER_ID: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIRST_NAME: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MIDDLE_NAME: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_NAME: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NICKNAME: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    INITIALS: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SEX: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PHONE_NUMBER: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FAX_NUMBER: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMAIL_ADDRESS: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LANGUAGE: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_OF_BIRTH: OrderableEdmTypeField<
      ContactSet<DeSerializers>,
      DeSerializersT,
      'Edm.DateTime',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link toBusinessPartner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TO_BUSINESS_PARTNER: OneToOneLink<
      ContactSet<DeSerializersT>,
      DeSerializersT,
      BusinessPartnerSetApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ContactSet<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link address} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS: fieldBuilder.buildComplexTypeField(
          'Address',
          CtAddressField,
          false
        ),
        /**
         * Static representation of the {@link contactGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_GUID: fieldBuilder.buildEdmTypeField(
          'ContactGuid',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link businessPartnerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BUSINESS_PARTNER_ID: fieldBuilder.buildEdmTypeField(
          'BusinessPartnerID',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', true),
        /**
         * Static representation of the {@link firstName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIRST_NAME: fieldBuilder.buildEdmTypeField(
          'FirstName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link middleName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MIDDLE_NAME: fieldBuilder.buildEdmTypeField(
          'MiddleName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_NAME: fieldBuilder.buildEdmTypeField(
          'LastName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nickname} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NICKNAME: fieldBuilder.buildEdmTypeField(
          'Nickname',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link initials} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIALS: fieldBuilder.buildEdmTypeField(
          'Initials',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sex} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEX: fieldBuilder.buildEdmTypeField('Sex', 'Edm.String', false),
        /**
         * Static representation of the {@link phoneNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PHONE_NUMBER: fieldBuilder.buildEdmTypeField(
          'PhoneNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link faxNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FAX_NUMBER: fieldBuilder.buildEdmTypeField(
          'FaxNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emailAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMAIL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'EmailAddress',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link language} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE: fieldBuilder.buildEdmTypeField(
          'Language',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dateOfBirth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_BIRTH: fieldBuilder.buildEdmTypeField(
          'DateOfBirth',
          'Edm.DateTime',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ContactSet)
      };
    }

    return this._schema;
  }
}
