/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import { CtAddress, CtAddressField } from './CtAddress';
import type { ContactSetApi } from './ContactSetApi';
import {
  BusinessPartnerSet,
  BusinessPartnerSetType
} from './BusinessPartnerSet';

/**
 * This class represents the entity "ContactSet" of service "GWSAMPLE_BASIC".
 */
export class ContactSet<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ContactSetType<T>
{
  /**
   * Technical entity name for ContactSet.
   */
  static override _entityName = 'ContactSet';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/sap/opu/odata/IWBEP/GWSAMPLE_BASIC';
  /**
   * All key fields of the ContactSet entity.
   */
  static _keys = ['ContactGuid'];
  /**
   * Address.
   */
  declare address: CtAddress<T>;
  /**
   * Contact GUID.
   */
  declare contactGuid: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Bus. Part. ID.
   * Maximum length: 10.
   */
  declare businessPartnerId: DeserializedType<T, 'Edm.String'>;
  /**
   * Title.
   * Maximum length: 10.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * First Name.
   * Maximum length: 40.
   */
  declare firstName: DeserializedType<T, 'Edm.String'>;
  /**
   * Middle Name.
   * Maximum length: 40.
   * @nullable
   */
  declare middleName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Name.
   * Maximum length: 40.
   * @nullable
   */
  declare lastName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Nickname.
   * Maximum length: 40.
   * @nullable
   */
  declare nickname?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Initials.
   * Maximum length: 10.
   * @nullable
   */
  declare initials?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sex.
   * Maximum length: 1.
   */
  declare sex: DeserializedType<T, 'Edm.String'>;
  /**
   * Phone No.
   * Maximum length: 30.
   * @nullable
   */
  declare phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fax Number.
   * Maximum length: 30.
   * @nullable
   */
  declare faxNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * E-Mail Address.
   * Maximum length: 255.
   * @nullable
   */
  declare emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Language Key.
   * Maximum length: 2.
   * @nullable
   */
  declare language?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date of Birth.
   * @nullable
   */
  declare dateOfBirth?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * One-to-one navigation property to the {@link BusinessPartnerSet} entity.
   */
  declare toBusinessPartner?: BusinessPartnerSet<T> | null;

  constructor(_entityApi: ContactSetApi<T>) {
    super(_entityApi);
  }
}

export interface ContactSetType<
  T extends DeSerializers = DefaultDeSerializers
> {
  address: CtAddress<T>;
  contactGuid: DeserializedType<T, 'Edm.Guid'>;
  businessPartnerId: DeserializedType<T, 'Edm.String'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  firstName: DeserializedType<T, 'Edm.String'>;
  middleName?: DeserializedType<T, 'Edm.String'> | null;
  lastName?: DeserializedType<T, 'Edm.String'> | null;
  nickname?: DeserializedType<T, 'Edm.String'> | null;
  initials?: DeserializedType<T, 'Edm.String'> | null;
  sex: DeserializedType<T, 'Edm.String'>;
  phoneNumber?: DeserializedType<T, 'Edm.String'> | null;
  faxNumber?: DeserializedType<T, 'Edm.String'> | null;
  emailAddress?: DeserializedType<T, 'Edm.String'> | null;
  language?: DeserializedType<T, 'Edm.String'> | null;
  dateOfBirth?: DeserializedType<T, 'Edm.DateTime'> | null;
  toBusinessPartner?: BusinessPartnerSetType<T> | null;
}
