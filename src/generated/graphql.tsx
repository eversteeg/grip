import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any;
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any;
};

export type Address = Node & {
  __typename?: 'Address';
  addressid: Scalars['Int'];
  addressnumber: Scalars['Int'];
  addressnumberappendix?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  countrycode: Scalars['String'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Organizationaddress`. */
  organizationaddressesByAddressid: OrganizationaddressesConnection;
  /** Reads and enables pagination through a set of `Personaddress`. */
  personaddressesByAddressid: PersonaddressesConnection;
  street: Scalars['String'];
  updateby: Scalars['String'];
  zipcode: Scalars['String'];
};


export type AddressOrganizationaddressesByAddressidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationaddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationaddressesOrderBy>>;
};


export type AddressPersonaddressesByAddressidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonaddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonaddressesOrderBy>>;
};

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `addressid` field. */
  addressid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `addressnumber` field. */
  addressnumber?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `addressnumberappendix` field. */
  addressnumberappendix?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `countrycode` field. */
  countrycode?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `street` field. */
  street?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `zipcode` field. */
  zipcode?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Address` */
export type AddressInput = {
  addressid?: InputMaybe<Scalars['Int']>;
  addressnumber: Scalars['Int'];
  addressnumberappendix?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  countrycode?: InputMaybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  street: Scalars['String'];
  updateby: Scalars['String'];
  zipcode: Scalars['String'];
};

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  addressid?: InputMaybe<Scalars['Int']>;
  addressnumber?: InputMaybe<Scalars['Int']>;
  addressnumberappendix?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  countrycode?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  street?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
  zipcode?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: 'AddressesConnection';
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>;
  /** A list of `Address` objects. */
  nodes: Array<Maybe<Address>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: 'AddressesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Address` at the end of the edge. */
  node?: Maybe<Address>;
};

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  AddressidAsc = 'ADDRESSID_ASC',
  AddressidDesc = 'ADDRESSID_DESC',
  AddressnumberappendixAsc = 'ADDRESSNUMBERAPPENDIX_ASC',
  AddressnumberappendixDesc = 'ADDRESSNUMBERAPPENDIX_DESC',
  AddressnumberAsc = 'ADDRESSNUMBER_ASC',
  AddressnumberDesc = 'ADDRESSNUMBER_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  CountrycodeAsc = 'COUNTRYCODE_ASC',
  CountrycodeDesc = 'COUNTRYCODE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StreetAsc = 'STREET_ASC',
  StreetDesc = 'STREET_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC',
  ZipcodeAsc = 'ZIPCODE_ASC',
  ZipcodeDesc = 'ZIPCODE_DESC'
}

export type Attribute = Node & {
  __typename?: 'Attribute';
  attribid: Scalars['String'];
  /** Reads and enables pagination through a set of `Attributedescription`. */
  attributedescriptionsByTableidAndAttribid: AttributedescriptionsConnection;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Organizationattribute`. */
  organizationattributesByTableidAndAttribid: OrganizationattributesConnection;
  /** Reads and enables pagination through a set of `Personattribute`. */
  personattributesByTableidAndAttribid: PersonattributesConnection;
  tableid: Scalars['String'];
  updateby: Scalars['String'];
};


export type AttributeAttributedescriptionsByTableidAndAttribidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AttributedescriptionCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AttributedescriptionsOrderBy>>;
};


export type AttributeOrganizationattributesByTableidAndAttribidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationattributeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationattributesOrderBy>>;
};


export type AttributePersonattributesByTableidAndAttribidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonattributeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonattributesOrderBy>>;
};

/**
 * A condition to be used against `Attribute` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AttributeCondition = {
  /** Checks for equality with the object’s `attribid` field. */
  attribid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `tableid` field. */
  tableid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Attribute` */
export type AttributeInput = {
  attribid: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  tableid: Scalars['String'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Attribute`. Fields that are set will be updated. */
export type AttributePatch = {
  attribid?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  tableid?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
};

export type Attributedescription = Node & {
  __typename?: 'Attributedescription';
  attribid: Scalars['String'];
  attribname: Scalars['String'];
  /** Reads a single `Attribute` that is related to this `Attributedescription`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  language: Scalars['String'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  tableid: Scalars['String'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Attributedescription` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type AttributedescriptionCondition = {
  /** Checks for equality with the object’s `attribid` field. */
  attribid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `attribname` field. */
  attribname?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `language` field. */
  language?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `tableid` field. */
  tableid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Attributedescription` */
export type AttributedescriptionInput = {
  attribid: Scalars['String'];
  attribname: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  language?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  tableid: Scalars['String'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Attributedescription`. Fields that are set will be updated. */
export type AttributedescriptionPatch = {
  attribid?: InputMaybe<Scalars['String']>;
  attribname?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  language?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  tableid?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Attributedescription` values. */
export type AttributedescriptionsConnection = {
  __typename?: 'AttributedescriptionsConnection';
  /** A list of edges which contains the `Attributedescription` and cursor to aid in pagination. */
  edges: Array<AttributedescriptionsEdge>;
  /** A list of `Attributedescription` objects. */
  nodes: Array<Maybe<Attributedescription>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Attributedescription` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Attributedescription` edge in the connection. */
export type AttributedescriptionsEdge = {
  __typename?: 'AttributedescriptionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Attributedescription` at the end of the edge. */
  node?: Maybe<Attributedescription>;
};

/** Methods to use when ordering `Attributedescription`. */
export enum AttributedescriptionsOrderBy {
  AttribidAsc = 'ATTRIBID_ASC',
  AttribidDesc = 'ATTRIBID_DESC',
  AttribnameAsc = 'ATTRIBNAME_ASC',
  AttribnameDesc = 'ATTRIBNAME_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LanguageAsc = 'LANGUAGE_ASC',
  LanguageDesc = 'LANGUAGE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TableidAsc = 'TABLEID_ASC',
  TableidDesc = 'TABLEID_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

/** A connection to a list of `Attribute` values. */
export type AttributesConnection = {
  __typename?: 'AttributesConnection';
  /** A list of edges which contains the `Attribute` and cursor to aid in pagination. */
  edges: Array<AttributesEdge>;
  /** A list of `Attribute` objects. */
  nodes: Array<Maybe<Attribute>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Attribute` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Attribute` edge in the connection. */
export type AttributesEdge = {
  __typename?: 'AttributesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Attribute` at the end of the edge. */
  node?: Maybe<Attribute>;
};

/** Methods to use when ordering `Attribute`. */
export enum AttributesOrderBy {
  AttribidAsc = 'ATTRIBID_ASC',
  AttribidDesc = 'ATTRIBID_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TableidAsc = 'TABLEID_ASC',
  TableidDesc = 'TABLEID_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Bankaccount = Node & {
  __typename?: 'Bankaccount';
  accountid: Scalars['Int'];
  accountnumber: Scalars['String'];
  bic: Scalars['String'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Organizationbankaccount`. */
  organizationbankaccountsByAccountid: OrganizationbankaccountsConnection;
  /** Reads and enables pagination through a set of `Personbankaccount`. */
  personbankaccountsByAccountid: PersonbankaccountsConnection;
  updateby: Scalars['String'];
};


export type BankaccountOrganizationbankaccountsByAccountidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationbankaccountCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationbankaccountsOrderBy>>;
};


export type BankaccountPersonbankaccountsByAccountidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonbankaccountCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonbankaccountsOrderBy>>;
};

/**
 * A condition to be used against `Bankaccount` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type BankaccountCondition = {
  /** Checks for equality with the object’s `accountid` field. */
  accountid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `accountnumber` field. */
  accountnumber?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `bic` field. */
  bic?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Bankaccount` */
export type BankaccountInput = {
  accountid?: InputMaybe<Scalars['Int']>;
  accountnumber: Scalars['String'];
  bic: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Bankaccount`. Fields that are set will be updated. */
export type BankaccountPatch = {
  accountid?: InputMaybe<Scalars['Int']>;
  accountnumber?: InputMaybe<Scalars['String']>;
  bic?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Bankaccount` values. */
export type BankaccountsConnection = {
  __typename?: 'BankaccountsConnection';
  /** A list of edges which contains the `Bankaccount` and cursor to aid in pagination. */
  edges: Array<BankaccountsEdge>;
  /** A list of `Bankaccount` objects. */
  nodes: Array<Maybe<Bankaccount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Bankaccount` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Bankaccount` edge in the connection. */
export type BankaccountsEdge = {
  __typename?: 'BankaccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Bankaccount` at the end of the edge. */
  node?: Maybe<Bankaccount>;
};

/** Methods to use when ordering `Bankaccount`. */
export enum BankaccountsOrderBy {
  AccountidAsc = 'ACCOUNTID_ASC',
  AccountidDesc = 'ACCOUNTID_DESC',
  AccountnumberAsc = 'ACCOUNTNUMBER_ASC',
  AccountnumberDesc = 'ACCOUNTNUMBER_DESC',
  BicAsc = 'BIC_ASC',
  BicDesc = 'BIC_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Bankcode = Node & {
  __typename?: 'Bankcode';
  bankcode: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  citycode: Scalars['String'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Bankcode` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type BankcodeCondition = {
  /** Checks for equality with the object’s `bankcode` field. */
  bankcode?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `citycode` field. */
  citycode?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Bankcode` */
export type BankcodeInput = {
  bankcode: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  citycode: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Bankcode`. Fields that are set will be updated. */
export type BankcodePatch = {
  bankcode?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  citycode?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Bankcode` values. */
export type BankcodesConnection = {
  __typename?: 'BankcodesConnection';
  /** A list of edges which contains the `Bankcode` and cursor to aid in pagination. */
  edges: Array<BankcodesEdge>;
  /** A list of `Bankcode` objects. */
  nodes: Array<Maybe<Bankcode>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Bankcode` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Bankcode` edge in the connection. */
export type BankcodesEdge = {
  __typename?: 'BankcodesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Bankcode` at the end of the edge. */
  node?: Maybe<Bankcode>;
};

/** Methods to use when ordering `Bankcode`. */
export enum BankcodesOrderBy {
  BankcodeAsc = 'BANKCODE_ASC',
  BankcodeDesc = 'BANKCODE_DESC',
  CitycodeAsc = 'CITYCODE_ASC',
  CitycodeDesc = 'CITYCODE_DESC',
  CityAsc = 'CITY_ASC',
  CityDesc = 'CITY_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Car = Node & {
  __typename?: 'Car';
  /** Reads and enables pagination through a set of `CarTrip`. */
  carTripsByCarid: CarTripsConnection;
  carid: Scalars['Int'];
  description?: Maybe<Scalars['String']>;
  enddate?: Maybe<Scalars['Datetime']>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  licenseplate: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  remarks?: Maybe<Scalars['String']>;
  startdate: Scalars['Datetime'];
  updateby: Scalars['String'];
};


export type CarCarTripsByCaridArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CarTripCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CarTripsOrderBy>>;
};

/** A condition to be used against `Car` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CarCondition = {
  /** Checks for equality with the object’s `carid` field. */
  carid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `enddate` field. */
  enddate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `licenseplate` field. */
  licenseplate?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `remarks` field. */
  remarks?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `startdate` field. */
  startdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Car` */
export type CarInput = {
  carid?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  enddate?: InputMaybe<Scalars['Datetime']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  licenseplate: Scalars['String'];
  remarks?: InputMaybe<Scalars['String']>;
  startdate?: InputMaybe<Scalars['Datetime']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Car`. Fields that are set will be updated. */
export type CarPatch = {
  carid?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  enddate?: InputMaybe<Scalars['Datetime']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  licenseplate?: InputMaybe<Scalars['String']>;
  remarks?: InputMaybe<Scalars['String']>;
  startdate?: InputMaybe<Scalars['Datetime']>;
  updateby?: InputMaybe<Scalars['String']>;
};

export type CarTrip = Node & {
  __typename?: 'CarTrip';
  /** Reads a single `Car` that is related to this `CarTrip`. */
  carByCarid?: Maybe<Car>;
  carid: Scalars['Int'];
  departure: Scalars['String'];
  destination: Scalars['String'];
  distance: Scalars['Int'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  milagestart: Scalars['Int'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  tripdate: Scalars['Datetime'];
  tripgoal: Scalars['String'];
  tripid: Scalars['Int'];
  updateby: Scalars['String'];
};

/** A condition to be used against `CarTrip` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CarTripCondition = {
  /** Checks for equality with the object’s `carid` field. */
  carid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `departure` field. */
  departure?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `destination` field. */
  destination?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `distance` field. */
  distance?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `milagestart` field. */
  milagestart?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tripdate` field. */
  tripdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `tripgoal` field. */
  tripgoal?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `tripid` field. */
  tripid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `CarTrip` */
export type CarTripInput = {
  carid: Scalars['Int'];
  departure: Scalars['String'];
  destination: Scalars['String'];
  distance: Scalars['Int'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  milagestart: Scalars['Int'];
  tripdate?: InputMaybe<Scalars['Datetime']>;
  tripgoal: Scalars['String'];
  tripid?: InputMaybe<Scalars['Int']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `CarTrip`. Fields that are set will be updated. */
export type CarTripPatch = {
  carid?: InputMaybe<Scalars['Int']>;
  departure?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  distance?: InputMaybe<Scalars['Int']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  milagestart?: InputMaybe<Scalars['Int']>;
  tripdate?: InputMaybe<Scalars['Datetime']>;
  tripgoal?: InputMaybe<Scalars['String']>;
  tripid?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `CarTrip` values. */
export type CarTripsConnection = {
  __typename?: 'CarTripsConnection';
  /** A list of edges which contains the `CarTrip` and cursor to aid in pagination. */
  edges: Array<CarTripsEdge>;
  /** A list of `CarTrip` objects. */
  nodes: Array<Maybe<CarTrip>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `CarTrip` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `CarTrip` edge in the connection. */
export type CarTripsEdge = {
  __typename?: 'CarTripsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `CarTrip` at the end of the edge. */
  node?: Maybe<CarTrip>;
};

/** Methods to use when ordering `CarTrip`. */
export enum CarTripsOrderBy {
  CaridAsc = 'CARID_ASC',
  CaridDesc = 'CARID_DESC',
  DepartureAsc = 'DEPARTURE_ASC',
  DepartureDesc = 'DEPARTURE_DESC',
  DestinationAsc = 'DESTINATION_ASC',
  DestinationDesc = 'DESTINATION_DESC',
  DistanceAsc = 'DISTANCE_ASC',
  DistanceDesc = 'DISTANCE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  MilagestartAsc = 'MILAGESTART_ASC',
  MilagestartDesc = 'MILAGESTART_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TripdateAsc = 'TRIPDATE_ASC',
  TripdateDesc = 'TRIPDATE_DESC',
  TripgoalAsc = 'TRIPGOAL_ASC',
  TripgoalDesc = 'TRIPGOAL_DESC',
  TripidAsc = 'TRIPID_ASC',
  TripidDesc = 'TRIPID_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

/** A connection to a list of `Car` values. */
export type CarsConnection = {
  __typename?: 'CarsConnection';
  /** A list of edges which contains the `Car` and cursor to aid in pagination. */
  edges: Array<CarsEdge>;
  /** A list of `Car` objects. */
  nodes: Array<Maybe<Car>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Car` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Car` edge in the connection. */
export type CarsEdge = {
  __typename?: 'CarsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Car` at the end of the edge. */
  node?: Maybe<Car>;
};

/** Methods to use when ordering `Car`. */
export enum CarsOrderBy {
  CaridAsc = 'CARID_ASC',
  CaridDesc = 'CARID_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  EnddateAsc = 'ENDDATE_ASC',
  EnddateDesc = 'ENDDATE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  LicenseplateAsc = 'LICENSEPLATE_ASC',
  LicenseplateDesc = 'LICENSEPLATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RemarksAsc = 'REMARKS_ASC',
  RemarksDesc = 'REMARKS_DESC',
  StartdateAsc = 'STARTDATE_ASC',
  StartdateDesc = 'STARTDATE_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Codetable = Node & {
  __typename?: 'Codetable';
  colname: Scalars['String'];
  colvalue: Scalars['String'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  language: Scalars['String'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  priority: Scalars['Int'];
  tablename: Scalars['String'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Codetable` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CodetableCondition = {
  /** Checks for equality with the object’s `colname` field. */
  colname?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `colvalue` field. */
  colvalue?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `language` field. */
  language?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `priority` field. */
  priority?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tablename` field. */
  tablename?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Codetable` */
export type CodetableInput = {
  colname: Scalars['String'];
  colvalue: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  language?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  priority?: InputMaybe<Scalars['Int']>;
  tablename: Scalars['String'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Codetable`. Fields that are set will be updated. */
export type CodetablePatch = {
  colname?: InputMaybe<Scalars['String']>;
  colvalue?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  language?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  priority?: InputMaybe<Scalars['Int']>;
  tablename?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Codetable` values. */
export type CodetablesConnection = {
  __typename?: 'CodetablesConnection';
  /** A list of edges which contains the `Codetable` and cursor to aid in pagination. */
  edges: Array<CodetablesEdge>;
  /** A list of `Codetable` objects. */
  nodes: Array<Maybe<Codetable>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Codetable` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Codetable` edge in the connection. */
export type CodetablesEdge = {
  __typename?: 'CodetablesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Codetable` at the end of the edge. */
  node?: Maybe<Codetable>;
};

/** Methods to use when ordering `Codetable`. */
export enum CodetablesOrderBy {
  ColnameAsc = 'COLNAME_ASC',
  ColnameDesc = 'COLNAME_DESC',
  ColvalueAsc = 'COLVALUE_ASC',
  ColvalueDesc = 'COLVALUE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LanguageAsc = 'LANGUAGE_ASC',
  LanguageDesc = 'LANGUAGE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PriorityAsc = 'PRIORITY_ASC',
  PriorityDesc = 'PRIORITY_DESC',
  TablenameAsc = 'TABLENAME_ASC',
  TablenameDesc = 'TABLENAME_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Communication = Node & {
  __typename?: 'Communication';
  communicationdata: Scalars['String'];
  communicationid: Scalars['Int'];
  communicationtype: Scalars['String'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Organizationcommunication`. */
  organizationcommunicationsByCommunicationid: OrganizationcommunicationsConnection;
  /** Reads and enables pagination through a set of `Personcommunication`. */
  personcommunicationsByCommunicationid: PersoncommunicationsConnection;
  priority: Scalars['Int'];
  updateby: Scalars['String'];
};


export type CommunicationOrganizationcommunicationsByCommunicationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationcommunicationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationcommunicationsOrderBy>>;
};


export type CommunicationPersoncommunicationsByCommunicationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersoncommunicationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersoncommunicationsOrderBy>>;
};

/**
 * A condition to be used against `Communication` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CommunicationCondition = {
  /** Checks for equality with the object’s `communicationdata` field. */
  communicationdata?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `communicationid` field. */
  communicationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `communicationtype` field. */
  communicationtype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `priority` field. */
  priority?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Communication` */
export type CommunicationInput = {
  communicationdata: Scalars['String'];
  communicationid?: InputMaybe<Scalars['Int']>;
  communicationtype: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  priority?: InputMaybe<Scalars['Int']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Communication`. Fields that are set will be updated. */
export type CommunicationPatch = {
  communicationdata?: InputMaybe<Scalars['String']>;
  communicationid?: InputMaybe<Scalars['Int']>;
  communicationtype?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  priority?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Communication` values. */
export type CommunicationsConnection = {
  __typename?: 'CommunicationsConnection';
  /** A list of edges which contains the `Communication` and cursor to aid in pagination. */
  edges: Array<CommunicationsEdge>;
  /** A list of `Communication` objects. */
  nodes: Array<Maybe<Communication>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Communication` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Communication` edge in the connection. */
export type CommunicationsEdge = {
  __typename?: 'CommunicationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Communication` at the end of the edge. */
  node?: Maybe<Communication>;
};

/** Methods to use when ordering `Communication`. */
export enum CommunicationsOrderBy {
  CommunicationdataAsc = 'COMMUNICATIONDATA_ASC',
  CommunicationdataDesc = 'COMMUNICATIONDATA_DESC',
  CommunicationidAsc = 'COMMUNICATIONID_ASC',
  CommunicationidDesc = 'COMMUNICATIONID_DESC',
  CommunicationtypeAsc = 'COMMUNICATIONTYPE_ASC',
  CommunicationtypeDesc = 'COMMUNICATIONTYPE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PriorityAsc = 'PRIORITY_ASC',
  PriorityDesc = 'PRIORITY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /** The `Address` to be created by this mutation. */
  address: AddressInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  __typename?: 'CreateAddressPayload';
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the create `Attribute` mutation. */
export type CreateAttributeInput = {
  /** The `Attribute` to be created by this mutation. */
  attribute: AttributeInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Attribute` mutation. */
export type CreateAttributePayload = {
  __typename?: 'CreateAttributePayload';
  /** The `Attribute` that was created by this mutation. */
  attribute?: Maybe<Attribute>;
  /** An edge for our `Attribute`. May be used by Relay 1. */
  attributeEdge?: Maybe<AttributesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Attribute` mutation. */
export type CreateAttributePayloadAttributeEdgeArgs = {
  orderBy?: InputMaybe<Array<AttributesOrderBy>>;
};

/** All input for the create `Attributedescription` mutation. */
export type CreateAttributedescriptionInput = {
  /** The `Attributedescription` to be created by this mutation. */
  attributedescription: AttributedescriptionInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Attributedescription` mutation. */
export type CreateAttributedescriptionPayload = {
  __typename?: 'CreateAttributedescriptionPayload';
  /** Reads a single `Attribute` that is related to this `Attributedescription`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /** The `Attributedescription` that was created by this mutation. */
  attributedescription?: Maybe<Attributedescription>;
  /** An edge for our `Attributedescription`. May be used by Relay 1. */
  attributedescriptionEdge?: Maybe<AttributedescriptionsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Attributedescription` mutation. */
export type CreateAttributedescriptionPayloadAttributedescriptionEdgeArgs = {
  orderBy?: InputMaybe<Array<AttributedescriptionsOrderBy>>;
};

/** All input for the create `Bankaccount` mutation. */
export type CreateBankaccountInput = {
  /** The `Bankaccount` to be created by this mutation. */
  bankaccount: BankaccountInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Bankaccount` mutation. */
export type CreateBankaccountPayload = {
  __typename?: 'CreateBankaccountPayload';
  /** The `Bankaccount` that was created by this mutation. */
  bankaccount?: Maybe<Bankaccount>;
  /** An edge for our `Bankaccount`. May be used by Relay 1. */
  bankaccountEdge?: Maybe<BankaccountsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Bankaccount` mutation. */
export type CreateBankaccountPayloadBankaccountEdgeArgs = {
  orderBy?: InputMaybe<Array<BankaccountsOrderBy>>;
};

/** All input for the create `Bankcode` mutation. */
export type CreateBankcodeInput = {
  /** The `Bankcode` to be created by this mutation. */
  bankcode: BankcodeInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Bankcode` mutation. */
export type CreateBankcodePayload = {
  __typename?: 'CreateBankcodePayload';
  /** The `Bankcode` that was created by this mutation. */
  bankcode?: Maybe<Bankcode>;
  /** An edge for our `Bankcode`. May be used by Relay 1. */
  bankcodeEdge?: Maybe<BankcodesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Bankcode` mutation. */
export type CreateBankcodePayloadBankcodeEdgeArgs = {
  orderBy?: InputMaybe<Array<BankcodesOrderBy>>;
};

/** All input for the create `Car` mutation. */
export type CreateCarInput = {
  /** The `Car` to be created by this mutation. */
  car: CarInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `Car` mutation. */
export type CreateCarPayload = {
  __typename?: 'CreateCarPayload';
  /** The `Car` that was created by this mutation. */
  car?: Maybe<Car>;
  /** An edge for our `Car`. May be used by Relay 1. */
  carEdge?: Maybe<CarsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Car` mutation. */
export type CreateCarPayloadCarEdgeArgs = {
  orderBy?: InputMaybe<Array<CarsOrderBy>>;
};

/** All input for the create `CarTrip` mutation. */
export type CreateCarTripInput = {
  /** The `CarTrip` to be created by this mutation. */
  carTrip: CarTripInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our create `CarTrip` mutation. */
export type CreateCarTripPayload = {
  __typename?: 'CreateCarTripPayload';
  /** Reads a single `Car` that is related to this `CarTrip`. */
  carByCarid?: Maybe<Car>;
  /** The `CarTrip` that was created by this mutation. */
  carTrip?: Maybe<CarTrip>;
  /** An edge for our `CarTrip`. May be used by Relay 1. */
  carTripEdge?: Maybe<CarTripsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `CarTrip` mutation. */
export type CreateCarTripPayloadCarTripEdgeArgs = {
  orderBy?: InputMaybe<Array<CarTripsOrderBy>>;
};

/** All input for the create `Codetable` mutation. */
export type CreateCodetableInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Codetable` to be created by this mutation. */
  codetable: CodetableInput;
};

/** The output of our create `Codetable` mutation. */
export type CreateCodetablePayload = {
  __typename?: 'CreateCodetablePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Codetable` that was created by this mutation. */
  codetable?: Maybe<Codetable>;
  /** An edge for our `Codetable`. May be used by Relay 1. */
  codetableEdge?: Maybe<CodetablesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Codetable` mutation. */
export type CreateCodetablePayloadCodetableEdgeArgs = {
  orderBy?: InputMaybe<Array<CodetablesOrderBy>>;
};

/** All input for the create `Communication` mutation. */
export type CreateCommunicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Communication` to be created by this mutation. */
  communication: CommunicationInput;
};

/** The output of our create `Communication` mutation. */
export type CreateCommunicationPayload = {
  __typename?: 'CreateCommunicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Communication` that was created by this mutation. */
  communication?: Maybe<Communication>;
  /** An edge for our `Communication`. May be used by Relay 1. */
  communicationEdge?: Maybe<CommunicationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Communication` mutation. */
export type CreateCommunicationPayloadCommunicationEdgeArgs = {
  orderBy?: InputMaybe<Array<CommunicationsOrderBy>>;
};

/** All input for the create `DefaultSetting` mutation. */
export type CreateDefaultSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `DefaultSetting` to be created by this mutation. */
  defaultSetting: DefaultSettingInput;
};

/** The output of our create `DefaultSetting` mutation. */
export type CreateDefaultSettingPayload = {
  __typename?: 'CreateDefaultSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DefaultSetting` that was created by this mutation. */
  defaultSetting?: Maybe<DefaultSetting>;
  /** An edge for our `DefaultSetting`. May be used by Relay 1. */
  defaultSettingEdge?: Maybe<DefaultSettingsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `DefaultSetting` mutation. */
export type CreateDefaultSettingPayloadDefaultSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<DefaultSettingsOrderBy>>;
};

/** All input for the create `Document` mutation. */
export type CreateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Document` to be created by this mutation. */
  document: DocumentInput;
};

/** The output of our create `Document` mutation. */
export type CreateDocumentPayload = {
  __typename?: 'CreateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Document` that was created by this mutation. */
  document?: Maybe<Document>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Document` mutation. */
export type CreateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};

/** All input for the create `FinDefaultVatItem` mutation. */
export type CreateFinDefaultVatItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `FinDefaultVatItem` to be created by this mutation. */
  finDefaultVatItem: FinDefaultVatItemInput;
};

/** The output of our create `FinDefaultVatItem` mutation. */
export type CreateFinDefaultVatItemPayload = {
  __typename?: 'CreateFinDefaultVatItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FinDefaultVatItem` that was created by this mutation. */
  finDefaultVatItem?: Maybe<FinDefaultVatItem>;
  /** An edge for our `FinDefaultVatItem`. May be used by Relay 1. */
  finDefaultVatItemEdge?: Maybe<FinDefaultVatItemsEdge>;
  /** Reads a single `Organization` that is related to this `FinDefaultVatItem`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vat` that is related to this `FinDefaultVatItem`. */
  vatByVatid?: Maybe<Vat>;
};


/** The output of our create `FinDefaultVatItem` mutation. */
export type CreateFinDefaultVatItemPayloadFinDefaultVatItemEdgeArgs = {
  orderBy?: InputMaybe<Array<FinDefaultVatItemsOrderBy>>;
};

/** All input for the create `FinInvoice` mutation. */
export type CreateFinInvoiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `FinInvoice` to be created by this mutation. */
  finInvoice: FinInvoiceInput;
};

/** All input for the create `FinInvoiceItem` mutation. */
export type CreateFinInvoiceItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `FinInvoiceItem` to be created by this mutation. */
  finInvoiceItem: FinInvoiceItemInput;
};

/** The output of our create `FinInvoiceItem` mutation. */
export type CreateFinInvoiceItemPayload = {
  __typename?: 'CreateFinInvoiceItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `FinInvoice` that is related to this `FinInvoiceItem`. */
  finInvoiceByInvoiceid?: Maybe<FinInvoice>;
  /** The `FinInvoiceItem` that was created by this mutation. */
  finInvoiceItem?: Maybe<FinInvoiceItem>;
  /** An edge for our `FinInvoiceItem`. May be used by Relay 1. */
  finInvoiceItemEdge?: Maybe<FinInvoiceItemsEdge>;
  /** Reads a single `FinProduct` that is related to this `FinInvoiceItem`. */
  finProductByProductid?: Maybe<FinProduct>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vat` that is related to this `FinInvoiceItem`. */
  vatByVatid?: Maybe<Vat>;
};


/** The output of our create `FinInvoiceItem` mutation. */
export type CreateFinInvoiceItemPayloadFinInvoiceItemEdgeArgs = {
  orderBy?: InputMaybe<Array<FinInvoiceItemsOrderBy>>;
};

/** The output of our create `FinInvoice` mutation. */
export type CreateFinInvoicePayload = {
  __typename?: 'CreateFinInvoicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FinInvoice` that was created by this mutation. */
  finInvoice?: Maybe<FinInvoice>;
  /** An edge for our `FinInvoice`. May be used by Relay 1. */
  finInvoiceEdge?: Maybe<FinInvoicesEdge>;
  /** Reads a single `Organization` that is related to this `FinInvoice`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `FinInvoice` mutation. */
export type CreateFinInvoicePayloadFinInvoiceEdgeArgs = {
  orderBy?: InputMaybe<Array<FinInvoicesOrderBy>>;
};

/** All input for the create `FinProduct` mutation. */
export type CreateFinProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `FinProduct` to be created by this mutation. */
  finProduct: FinProductInput;
};

/** The output of our create `FinProduct` mutation. */
export type CreateFinProductPayload = {
  __typename?: 'CreateFinProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FinProduct` that was created by this mutation. */
  finProduct?: Maybe<FinProduct>;
  /** An edge for our `FinProduct`. May be used by Relay 1. */
  finProductEdge?: Maybe<FinProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `FinProduct` mutation. */
export type CreateFinProductPayloadFinProductEdgeArgs = {
  orderBy?: InputMaybe<Array<FinProductsOrderBy>>;
};

/** All input for the create `FinVatItem` mutation. */
export type CreateFinVatItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `FinVatItem` to be created by this mutation. */
  finVatItem: FinVatItemInput;
};

/** The output of our create `FinVatItem` mutation. */
export type CreateFinVatItemPayload = {
  __typename?: 'CreateFinVatItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FinVatItem` that was created by this mutation. */
  finVatItem?: Maybe<FinVatItem>;
  /** An edge for our `FinVatItem`. May be used by Relay 1. */
  finVatItemEdge?: Maybe<FinVatItemsEdge>;
  /** Reads a single `Organization` that is related to this `FinVatItem`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vat` that is related to this `FinVatItem`. */
  vatByVatid?: Maybe<Vat>;
};


/** The output of our create `FinVatItem` mutation. */
export type CreateFinVatItemPayloadFinVatItemEdgeArgs = {
  orderBy?: InputMaybe<Array<FinVatItemsOrderBy>>;
};

/** All input for the create `Instrument` mutation. */
export type CreateInstrumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Instrument` to be created by this mutation. */
  instrument: InstrumentInput;
};

/** The output of our create `Instrument` mutation. */
export type CreateInstrumentPayload = {
  __typename?: 'CreateInstrumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Instrument` that was created by this mutation. */
  instrument?: Maybe<Instrument>;
  /** An edge for our `Instrument`. May be used by Relay 1. */
  instrumentEdge?: Maybe<InstrumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Instrument` mutation. */
export type CreateInstrumentPayloadInstrumentEdgeArgs = {
  orderBy?: InputMaybe<Array<InstrumentsOrderBy>>;
};

/** All input for the create `Invoicenumber` mutation. */
export type CreateInvoicenumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Invoicenumber` to be created by this mutation. */
  invoicenumber: InvoicenumberInput;
};

/** The output of our create `Invoicenumber` mutation. */
export type CreateInvoicenumberPayload = {
  __typename?: 'CreateInvoicenumberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Invoicenumber` that was created by this mutation. */
  invoicenumber?: Maybe<Invoicenumber>;
  /** An edge for our `Invoicenumber`. May be used by Relay 1. */
  invoicenumberEdge?: Maybe<InvoicenumbersEdge>;
  /** Reads a single `Organization` that is related to this `Invoicenumber`. */
  organizationByInvoiceOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Invoicenumber` mutation. */
export type CreateInvoicenumberPayloadInvoicenumberEdgeArgs = {
  orderBy?: InputMaybe<Array<InvoicenumbersOrderBy>>;
};

/** All input for the create `KnexMigration` mutation. */
export type CreateKnexMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnexMigration` to be created by this mutation. */
  knexMigration: KnexMigrationInput;
};

/** The output of our create `KnexMigration` mutation. */
export type CreateKnexMigrationPayload = {
  __typename?: 'CreateKnexMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigration` that was created by this mutation. */
  knexMigration?: Maybe<KnexMigration>;
  /** An edge for our `KnexMigration`. May be used by Relay 1. */
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnexMigration` mutation. */
export type CreateKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsOrderBy>>;
};

/** All input for the create `KnexMigrationsLock` mutation. */
export type CreateKnexMigrationsLockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `KnexMigrationsLock` to be created by this mutation. */
  knexMigrationsLock: KnexMigrationsLockInput;
};

/** The output of our create `KnexMigrationsLock` mutation. */
export type CreateKnexMigrationsLockPayload = {
  __typename?: 'CreateKnexMigrationsLockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigrationsLock` that was created by this mutation. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  /** An edge for our `KnexMigrationsLock`. May be used by Relay 1. */
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `KnexMigrationsLock` mutation. */
export type CreateKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsLocksOrderBy>>;
};

/** All input for the create `Organization` mutation. */
export type CreateOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Organization` to be created by this mutation. */
  organization: OrganizationInput;
};

/** The output of our create `Organization` mutation. */
export type CreateOrganizationPayload = {
  __typename?: 'CreateOrganizationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Organization` that was created by this mutation. */
  organization?: Maybe<Organization>;
  /** An edge for our `Organization`. May be used by Relay 1. */
  organizationEdge?: Maybe<OrganizationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Organization` mutation. */
export type CreateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};

/** All input for the create `Organizationaddress` mutation. */
export type CreateOrganizationaddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Organizationaddress` to be created by this mutation. */
  organizationaddress: OrganizationaddressInput;
};

/** The output of our create `Organizationaddress` mutation. */
export type CreateOrganizationaddressPayload = {
  __typename?: 'CreateOrganizationaddressPayload';
  /** Reads a single `Address` that is related to this `Organizationaddress`. */
  addressByAddressid?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Organization` that is related to this `Organizationaddress`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationaddress` that was created by this mutation. */
  organizationaddress?: Maybe<Organizationaddress>;
  /** An edge for our `Organizationaddress`. May be used by Relay 1. */
  organizationaddressEdge?: Maybe<OrganizationaddressesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Organizationaddress` mutation. */
export type CreateOrganizationaddressPayloadOrganizationaddressEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationaddressesOrderBy>>;
};

/** All input for the create `Organizationattribute` mutation. */
export type CreateOrganizationattributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Organizationattribute` to be created by this mutation. */
  organizationattribute: OrganizationattributeInput;
};

/** The output of our create `Organizationattribute` mutation. */
export type CreateOrganizationattributePayload = {
  __typename?: 'CreateOrganizationattributePayload';
  /** Reads a single `Attribute` that is related to this `Organizationattribute`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Organization` that is related to this `Organizationattribute`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationattribute` that was created by this mutation. */
  organizationattribute?: Maybe<Organizationattribute>;
  /** An edge for our `Organizationattribute`. May be used by Relay 1. */
  organizationattributeEdge?: Maybe<OrganizationattributesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Organizationattribute` mutation. */
export type CreateOrganizationattributePayloadOrganizationattributeEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationattributesOrderBy>>;
};

/** All input for the create `Organizationbankaccount` mutation. */
export type CreateOrganizationbankaccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Organizationbankaccount` to be created by this mutation. */
  organizationbankaccount: OrganizationbankaccountInput;
};

/** The output of our create `Organizationbankaccount` mutation. */
export type CreateOrganizationbankaccountPayload = {
  __typename?: 'CreateOrganizationbankaccountPayload';
  /** Reads a single `Bankaccount` that is related to this `Organizationbankaccount`. */
  bankaccountByAccountid?: Maybe<Bankaccount>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Organization` that is related to this `Organizationbankaccount`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationbankaccount` that was created by this mutation. */
  organizationbankaccount?: Maybe<Organizationbankaccount>;
  /** An edge for our `Organizationbankaccount`. May be used by Relay 1. */
  organizationbankaccountEdge?: Maybe<OrganizationbankaccountsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Organizationbankaccount` mutation. */
export type CreateOrganizationbankaccountPayloadOrganizationbankaccountEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationbankaccountsOrderBy>>;
};

/** All input for the create `Organizationcommunication` mutation. */
export type CreateOrganizationcommunicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Organizationcommunication` to be created by this mutation. */
  organizationcommunication: OrganizationcommunicationInput;
};

/** The output of our create `Organizationcommunication` mutation. */
export type CreateOrganizationcommunicationPayload = {
  __typename?: 'CreateOrganizationcommunicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Communication` that is related to this `Organizationcommunication`. */
  communicationByCommunicationid?: Maybe<Communication>;
  /** Reads a single `Organization` that is related to this `Organizationcommunication`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationcommunication` that was created by this mutation. */
  organizationcommunication?: Maybe<Organizationcommunication>;
  /** An edge for our `Organizationcommunication`. May be used by Relay 1. */
  organizationcommunicationEdge?: Maybe<OrganizationcommunicationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Organizationcommunication` mutation. */
export type CreateOrganizationcommunicationPayloadOrganizationcommunicationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationcommunicationsOrderBy>>;
};

/** All input for the create `Organizationperson` mutation. */
export type CreateOrganizationpersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Organizationperson` to be created by this mutation. */
  organizationperson: OrganizationpersonInput;
};

/** The output of our create `Organizationperson` mutation. */
export type CreateOrganizationpersonPayload = {
  __typename?: 'CreateOrganizationpersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Organization` that is related to this `Organizationperson`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationperson` that was created by this mutation. */
  organizationperson?: Maybe<Organizationperson>;
  /** An edge for our `Organizationperson`. May be used by Relay 1. */
  organizationpersonEdge?: Maybe<OrganizationpeopleEdge>;
  /** Reads a single `Person` that is related to this `Organizationperson`. */
  personByPersonid?: Maybe<Person>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Organizationperson` mutation. */
export type CreateOrganizationpersonPayloadOrganizationpersonEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationpeopleOrderBy>>;
};

/** All input for the create `Person` mutation. */
export type CreatePersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Person` to be created by this mutation. */
  person: PersonInput;
};

/** The output of our create `Person` mutation. */
export type CreatePersonPayload = {
  __typename?: 'CreatePersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Person` that was created by this mutation. */
  person?: Maybe<Person>;
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Person` mutation. */
export type CreatePersonPayloadPersonEdgeArgs = {
  orderBy?: InputMaybe<Array<PeopleOrderBy>>;
};

/** All input for the create `Personaddress` mutation. */
export type CreatePersonaddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Personaddress` to be created by this mutation. */
  personaddress: PersonaddressInput;
};

/** The output of our create `Personaddress` mutation. */
export type CreatePersonaddressPayload = {
  __typename?: 'CreatePersonaddressPayload';
  /** Reads a single `Address` that is related to this `Personaddress`. */
  addressByAddressid?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Person` that is related to this `Personaddress`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personaddress` that was created by this mutation. */
  personaddress?: Maybe<Personaddress>;
  /** An edge for our `Personaddress`. May be used by Relay 1. */
  personaddressEdge?: Maybe<PersonaddressesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Personaddress` mutation. */
export type CreatePersonaddressPayloadPersonaddressEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonaddressesOrderBy>>;
};

/** All input for the create `Personattribute` mutation. */
export type CreatePersonattributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Personattribute` to be created by this mutation. */
  personattribute: PersonattributeInput;
};

/** The output of our create `Personattribute` mutation. */
export type CreatePersonattributePayload = {
  __typename?: 'CreatePersonattributePayload';
  /** Reads a single `Attribute` that is related to this `Personattribute`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Person` that is related to this `Personattribute`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personattribute` that was created by this mutation. */
  personattribute?: Maybe<Personattribute>;
  /** An edge for our `Personattribute`. May be used by Relay 1. */
  personattributeEdge?: Maybe<PersonattributesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Personattribute` mutation. */
export type CreatePersonattributePayloadPersonattributeEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonattributesOrderBy>>;
};

/** All input for the create `Personbankaccount` mutation. */
export type CreatePersonbankaccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Personbankaccount` to be created by this mutation. */
  personbankaccount: PersonbankaccountInput;
};

/** The output of our create `Personbankaccount` mutation. */
export type CreatePersonbankaccountPayload = {
  __typename?: 'CreatePersonbankaccountPayload';
  /** Reads a single `Bankaccount` that is related to this `Personbankaccount`. */
  bankaccountByAccountid?: Maybe<Bankaccount>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Person` that is related to this `Personbankaccount`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personbankaccount` that was created by this mutation. */
  personbankaccount?: Maybe<Personbankaccount>;
  /** An edge for our `Personbankaccount`. May be used by Relay 1. */
  personbankaccountEdge?: Maybe<PersonbankaccountsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Personbankaccount` mutation. */
export type CreatePersonbankaccountPayloadPersonbankaccountEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonbankaccountsOrderBy>>;
};

/** All input for the create `Personcommunication` mutation. */
export type CreatePersoncommunicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Personcommunication` to be created by this mutation. */
  personcommunication: PersoncommunicationInput;
};

/** The output of our create `Personcommunication` mutation. */
export type CreatePersoncommunicationPayload = {
  __typename?: 'CreatePersoncommunicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Communication` that is related to this `Personcommunication`. */
  communicationByCommunicationid?: Maybe<Communication>;
  /** Reads a single `Person` that is related to this `Personcommunication`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personcommunication` that was created by this mutation. */
  personcommunication?: Maybe<Personcommunication>;
  /** An edge for our `Personcommunication`. May be used by Relay 1. */
  personcommunicationEdge?: Maybe<PersoncommunicationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Personcommunication` mutation. */
export type CreatePersoncommunicationPayloadPersoncommunicationEdgeArgs = {
  orderBy?: InputMaybe<Array<PersoncommunicationsOrderBy>>;
};

/** All input for the create `Personinstrument` mutation. */
export type CreatePersoninstrumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Personinstrument` to be created by this mutation. */
  personinstrument: PersoninstrumentInput;
};

/** The output of our create `Personinstrument` mutation. */
export type CreatePersoninstrumentPayload = {
  __typename?: 'CreatePersoninstrumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Instrument` that is related to this `Personinstrument`. */
  instrumentByInstrumentid?: Maybe<Instrument>;
  /** Reads a single `Person` that is related to this `Personinstrument`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personinstrument` that was created by this mutation. */
  personinstrument?: Maybe<Personinstrument>;
  /** An edge for our `Personinstrument`. May be used by Relay 1. */
  personinstrumentEdge?: Maybe<PersoninstrumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Personinstrument` mutation. */
export type CreatePersoninstrumentPayloadPersoninstrumentEdgeArgs = {
  orderBy?: InputMaybe<Array<PersoninstrumentsOrderBy>>;
};

/** All input for the create `UserSetting` mutation. */
export type CreateUserSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `UserSetting` to be created by this mutation. */
  userSetting: UserSettingInput;
};

/** The output of our create `UserSetting` mutation. */
export type CreateUserSettingPayload = {
  __typename?: 'CreateUserSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserSetting` that was created by this mutation. */
  userSetting?: Maybe<UserSetting>;
  /** An edge for our `UserSetting`. May be used by Relay 1. */
  userSettingEdge?: Maybe<UserSettingsEdge>;
};


/** The output of our create `UserSetting` mutation. */
export type CreateUserSettingPayloadUserSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<UserSettingsOrderBy>>;
};

/** All input for the create `Vat` mutation. */
export type CreateVatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The `Vat` to be created by this mutation. */
  vat: VatInput;
};

/** The output of our create `Vat` mutation. */
export type CreateVatPayload = {
  __typename?: 'CreateVatPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Vat` that was created by this mutation. */
  vat?: Maybe<Vat>;
  /** An edge for our `Vat`. May be used by Relay 1. */
  vatEdge?: Maybe<VatsEdge>;
};


/** The output of our create `Vat` mutation. */
export type CreateVatPayloadVatEdgeArgs = {
  orderBy?: InputMaybe<Array<VatsOrderBy>>;
};

export type DefaultSetting = Node & {
  __typename?: 'DefaultSetting';
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
  objectvalue: Scalars['String'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `DefaultSetting` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type DefaultSettingCondition = {
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `objectid` field. */
  objectid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `objecttype` field. */
  objecttype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `objectvalue` field. */
  objectvalue?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `DefaultSetting` */
export type DefaultSettingInput = {
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
  objectvalue: Scalars['String'];
  updateby: Scalars['String'];
};

/** Represents an update to a `DefaultSetting`. Fields that are set will be updated. */
export type DefaultSettingPatch = {
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  objectid?: InputMaybe<Scalars['String']>;
  objecttype?: InputMaybe<Scalars['String']>;
  objectvalue?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `DefaultSetting` values. */
export type DefaultSettingsConnection = {
  __typename?: 'DefaultSettingsConnection';
  /** A list of edges which contains the `DefaultSetting` and cursor to aid in pagination. */
  edges: Array<DefaultSettingsEdge>;
  /** A list of `DefaultSetting` objects. */
  nodes: Array<Maybe<DefaultSetting>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `DefaultSetting` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `DefaultSetting` edge in the connection. */
export type DefaultSettingsEdge = {
  __typename?: 'DefaultSettingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `DefaultSetting` at the end of the edge. */
  node?: Maybe<DefaultSetting>;
};

/** Methods to use when ordering `DefaultSetting`. */
export enum DefaultSettingsOrderBy {
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  ObjectidAsc = 'OBJECTID_ASC',
  ObjectidDesc = 'OBJECTID_DESC',
  ObjecttypeAsc = 'OBJECTTYPE_ASC',
  ObjecttypeDesc = 'OBJECTTYPE_DESC',
  ObjectvalueAsc = 'OBJECTVALUE_ASC',
  ObjectvalueDesc = 'OBJECTVALUE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

/** All input for the `deleteAddressByAddressid` mutation. */
export type DeleteAddressByAddressidInput = {
  addressid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Address` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: 'DeleteAddressPayload';
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAddressId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the `deleteAttributeByTableidAndAttribid` mutation. */
export type DeleteAttributeByTableidAndAttribidInput = {
  attribid: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  tableid: Scalars['String'];
};

/** All input for the `deleteAttribute` mutation. */
export type DeleteAttributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Attribute` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Attribute` mutation. */
export type DeleteAttributePayload = {
  __typename?: 'DeleteAttributePayload';
  /** The `Attribute` that was deleted by this mutation. */
  attribute?: Maybe<Attribute>;
  /** An edge for our `Attribute`. May be used by Relay 1. */
  attributeEdge?: Maybe<AttributesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAttributeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Attribute` mutation. */
export type DeleteAttributePayloadAttributeEdgeArgs = {
  orderBy?: InputMaybe<Array<AttributesOrderBy>>;
};

/** All input for the `deleteAttributedescriptionByTableidAndAttribidAndLanguage` mutation. */
export type DeleteAttributedescriptionByTableidAndAttribidAndLanguageInput = {
  attribid: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  language: Scalars['String'];
  tableid: Scalars['String'];
};

/** All input for the `deleteAttributedescription` mutation. */
export type DeleteAttributedescriptionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Attributedescription` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Attributedescription` mutation. */
export type DeleteAttributedescriptionPayload = {
  __typename?: 'DeleteAttributedescriptionPayload';
  /** Reads a single `Attribute` that is related to this `Attributedescription`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /** The `Attributedescription` that was deleted by this mutation. */
  attributedescription?: Maybe<Attributedescription>;
  /** An edge for our `Attributedescription`. May be used by Relay 1. */
  attributedescriptionEdge?: Maybe<AttributedescriptionsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedAttributedescriptionId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Attributedescription` mutation. */
export type DeleteAttributedescriptionPayloadAttributedescriptionEdgeArgs = {
  orderBy?: InputMaybe<Array<AttributedescriptionsOrderBy>>;
};

/** All input for the `deleteBankaccountByAccountid` mutation. */
export type DeleteBankaccountByAccountidInput = {
  accountid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `deleteBankaccount` mutation. */
export type DeleteBankaccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Bankaccount` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Bankaccount` mutation. */
export type DeleteBankaccountPayload = {
  __typename?: 'DeleteBankaccountPayload';
  /** The `Bankaccount` that was deleted by this mutation. */
  bankaccount?: Maybe<Bankaccount>;
  /** An edge for our `Bankaccount`. May be used by Relay 1. */
  bankaccountEdge?: Maybe<BankaccountsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedBankaccountId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Bankaccount` mutation. */
export type DeleteBankaccountPayloadBankaccountEdgeArgs = {
  orderBy?: InputMaybe<Array<BankaccountsOrderBy>>;
};

/** All input for the `deleteBankcodeByBankcodeAndCitycode` mutation. */
export type DeleteBankcodeByBankcodeAndCitycodeInput = {
  bankcode: Scalars['String'];
  citycode: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `deleteBankcode` mutation. */
export type DeleteBankcodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Bankcode` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Bankcode` mutation. */
export type DeleteBankcodePayload = {
  __typename?: 'DeleteBankcodePayload';
  /** The `Bankcode` that was deleted by this mutation. */
  bankcode?: Maybe<Bankcode>;
  /** An edge for our `Bankcode`. May be used by Relay 1. */
  bankcodeEdge?: Maybe<BankcodesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedBankcodeId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Bankcode` mutation. */
export type DeleteBankcodePayloadBankcodeEdgeArgs = {
  orderBy?: InputMaybe<Array<BankcodesOrderBy>>;
};

/** All input for the `deleteCarByCarid` mutation. */
export type DeleteCarByCaridInput = {
  carid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `deleteCar` mutation. */
export type DeleteCarInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Car` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Car` mutation. */
export type DeleteCarPayload = {
  __typename?: 'DeleteCarPayload';
  /** The `Car` that was deleted by this mutation. */
  car?: Maybe<Car>;
  /** An edge for our `Car`. May be used by Relay 1. */
  carEdge?: Maybe<CarsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedCarId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Car` mutation. */
export type DeleteCarPayloadCarEdgeArgs = {
  orderBy?: InputMaybe<Array<CarsOrderBy>>;
};

/** All input for the `deleteCarTripByTripid` mutation. */
export type DeleteCarTripByTripidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  tripid: Scalars['Int'];
};

/** All input for the `deleteCarTrip` mutation. */
export type DeleteCarTripInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CarTrip` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `CarTrip` mutation. */
export type DeleteCarTripPayload = {
  __typename?: 'DeleteCarTripPayload';
  /** Reads a single `Car` that is related to this `CarTrip`. */
  carByCarid?: Maybe<Car>;
  /** The `CarTrip` that was deleted by this mutation. */
  carTrip?: Maybe<CarTrip>;
  /** An edge for our `CarTrip`. May be used by Relay 1. */
  carTripEdge?: Maybe<CarTripsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedCarTripId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `CarTrip` mutation. */
export type DeleteCarTripPayloadCarTripEdgeArgs = {
  orderBy?: InputMaybe<Array<CarTripsOrderBy>>;
};

/** All input for the `deleteCodetableByTablenameAndColnameAndColvalueAndLanguage` mutation. */
export type DeleteCodetableByTablenameAndColnameAndColvalueAndLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  colname: Scalars['String'];
  colvalue: Scalars['String'];
  language: Scalars['String'];
  tablename: Scalars['String'];
};

/** All input for the `deleteCodetable` mutation. */
export type DeleteCodetableInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Codetable` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Codetable` mutation. */
export type DeleteCodetablePayload = {
  __typename?: 'DeleteCodetablePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Codetable` that was deleted by this mutation. */
  codetable?: Maybe<Codetable>;
  /** An edge for our `Codetable`. May be used by Relay 1. */
  codetableEdge?: Maybe<CodetablesEdge>;
  deletedCodetableId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Codetable` mutation. */
export type DeleteCodetablePayloadCodetableEdgeArgs = {
  orderBy?: InputMaybe<Array<CodetablesOrderBy>>;
};

/** All input for the `deleteCommunicationByCommunicationid` mutation. */
export type DeleteCommunicationByCommunicationidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  communicationid: Scalars['Int'];
};

/** All input for the `deleteCommunication` mutation. */
export type DeleteCommunicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Communication` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Communication` mutation. */
export type DeleteCommunicationPayload = {
  __typename?: 'DeleteCommunicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Communication` that was deleted by this mutation. */
  communication?: Maybe<Communication>;
  /** An edge for our `Communication`. May be used by Relay 1. */
  communicationEdge?: Maybe<CommunicationsEdge>;
  deletedCommunicationId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Communication` mutation. */
export type DeleteCommunicationPayloadCommunicationEdgeArgs = {
  orderBy?: InputMaybe<Array<CommunicationsOrderBy>>;
};

/** All input for the `deleteDefaultSettingByObjectidAndObjecttypeAndObjectvalue` mutation. */
export type DeleteDefaultSettingByObjectidAndObjecttypeAndObjectvalueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
  objectvalue: Scalars['String'];
};

/** All input for the `deleteDefaultSetting` mutation. */
export type DeleteDefaultSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `DefaultSetting` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `DefaultSetting` mutation. */
export type DeleteDefaultSettingPayload = {
  __typename?: 'DeleteDefaultSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DefaultSetting` that was deleted by this mutation. */
  defaultSetting?: Maybe<DefaultSetting>;
  /** An edge for our `DefaultSetting`. May be used by Relay 1. */
  defaultSettingEdge?: Maybe<DefaultSettingsEdge>;
  deletedDefaultSettingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `DefaultSetting` mutation. */
export type DeleteDefaultSettingPayloadDefaultSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<DefaultSettingsOrderBy>>;
};

/** All input for the `deleteDocumentByDocumentid` mutation. */
export type DeleteDocumentByDocumentidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  documentid: Scalars['Int'];
};

/** All input for the `deleteDocumentByNameAndObjectidAndObjecttype` mutation. */
export type DeleteDocumentByNameAndObjectidAndObjecttypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
};

/** All input for the `deleteDocument` mutation. */
export type DeleteDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Document` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayload = {
  __typename?: 'DeleteDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedDocumentId?: Maybe<Scalars['ID']>;
  /** The `Document` that was deleted by this mutation. */
  document?: Maybe<Document>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};

/** All input for the `deleteFinDefaultVatItemByVatitemid` mutation. */
export type DeleteFinDefaultVatItemByVatitemidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  vatitemid: Scalars['Int'];
};

/** All input for the `deleteFinDefaultVatItem` mutation. */
export type DeleteFinDefaultVatItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FinDefaultVatItem` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `FinDefaultVatItem` mutation. */
export type DeleteFinDefaultVatItemPayload = {
  __typename?: 'DeleteFinDefaultVatItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFinDefaultVatItemId?: Maybe<Scalars['ID']>;
  /** The `FinDefaultVatItem` that was deleted by this mutation. */
  finDefaultVatItem?: Maybe<FinDefaultVatItem>;
  /** An edge for our `FinDefaultVatItem`. May be used by Relay 1. */
  finDefaultVatItemEdge?: Maybe<FinDefaultVatItemsEdge>;
  /** Reads a single `Organization` that is related to this `FinDefaultVatItem`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vat` that is related to this `FinDefaultVatItem`. */
  vatByVatid?: Maybe<Vat>;
};


/** The output of our delete `FinDefaultVatItem` mutation. */
export type DeleteFinDefaultVatItemPayloadFinDefaultVatItemEdgeArgs = {
  orderBy?: InputMaybe<Array<FinDefaultVatItemsOrderBy>>;
};

/** All input for the `deleteFinInvoiceByInvoiceid` mutation. */
export type DeleteFinInvoiceByInvoiceidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  invoiceid: Scalars['Int'];
};

/** All input for the `deleteFinInvoiceByInvoicenumber` mutation. */
export type DeleteFinInvoiceByInvoicenumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  invoicenumber: Scalars['String'];
};

/** All input for the `deleteFinInvoice` mutation. */
export type DeleteFinInvoiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FinInvoice` to be deleted. */
  nodeId: Scalars['ID'];
};

/** All input for the `deleteFinInvoiceItemByInvoiceitemid` mutation. */
export type DeleteFinInvoiceItemByInvoiceitemidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  invoiceitemid: Scalars['Int'];
};

/** All input for the `deleteFinInvoiceItem` mutation. */
export type DeleteFinInvoiceItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FinInvoiceItem` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `FinInvoiceItem` mutation. */
export type DeleteFinInvoiceItemPayload = {
  __typename?: 'DeleteFinInvoiceItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFinInvoiceItemId?: Maybe<Scalars['ID']>;
  /** Reads a single `FinInvoice` that is related to this `FinInvoiceItem`. */
  finInvoiceByInvoiceid?: Maybe<FinInvoice>;
  /** The `FinInvoiceItem` that was deleted by this mutation. */
  finInvoiceItem?: Maybe<FinInvoiceItem>;
  /** An edge for our `FinInvoiceItem`. May be used by Relay 1. */
  finInvoiceItemEdge?: Maybe<FinInvoiceItemsEdge>;
  /** Reads a single `FinProduct` that is related to this `FinInvoiceItem`. */
  finProductByProductid?: Maybe<FinProduct>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vat` that is related to this `FinInvoiceItem`. */
  vatByVatid?: Maybe<Vat>;
};


/** The output of our delete `FinInvoiceItem` mutation. */
export type DeleteFinInvoiceItemPayloadFinInvoiceItemEdgeArgs = {
  orderBy?: InputMaybe<Array<FinInvoiceItemsOrderBy>>;
};

/** The output of our delete `FinInvoice` mutation. */
export type DeleteFinInvoicePayload = {
  __typename?: 'DeleteFinInvoicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFinInvoiceId?: Maybe<Scalars['ID']>;
  /** The `FinInvoice` that was deleted by this mutation. */
  finInvoice?: Maybe<FinInvoice>;
  /** An edge for our `FinInvoice`. May be used by Relay 1. */
  finInvoiceEdge?: Maybe<FinInvoicesEdge>;
  /** Reads a single `Organization` that is related to this `FinInvoice`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `FinInvoice` mutation. */
export type DeleteFinInvoicePayloadFinInvoiceEdgeArgs = {
  orderBy?: InputMaybe<Array<FinInvoicesOrderBy>>;
};

/** All input for the `deleteFinProductByProductid` mutation. */
export type DeleteFinProductByProductidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  productid: Scalars['Int'];
};

/** All input for the `deleteFinProduct` mutation. */
export type DeleteFinProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FinProduct` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `FinProduct` mutation. */
export type DeleteFinProductPayload = {
  __typename?: 'DeleteFinProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFinProductId?: Maybe<Scalars['ID']>;
  /** The `FinProduct` that was deleted by this mutation. */
  finProduct?: Maybe<FinProduct>;
  /** An edge for our `FinProduct`. May be used by Relay 1. */
  finProductEdge?: Maybe<FinProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `FinProduct` mutation. */
export type DeleteFinProductPayloadFinProductEdgeArgs = {
  orderBy?: InputMaybe<Array<FinProductsOrderBy>>;
};

/** All input for the `deleteFinVatItemByVatitemid` mutation. */
export type DeleteFinVatItemByVatitemidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  vatitemid: Scalars['Int'];
};

/** All input for the `deleteFinVatItem` mutation. */
export type DeleteFinVatItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `FinVatItem` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `FinVatItem` mutation. */
export type DeleteFinVatItemPayload = {
  __typename?: 'DeleteFinVatItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedFinVatItemId?: Maybe<Scalars['ID']>;
  /** The `FinVatItem` that was deleted by this mutation. */
  finVatItem?: Maybe<FinVatItem>;
  /** An edge for our `FinVatItem`. May be used by Relay 1. */
  finVatItemEdge?: Maybe<FinVatItemsEdge>;
  /** Reads a single `Organization` that is related to this `FinVatItem`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vat` that is related to this `FinVatItem`. */
  vatByVatid?: Maybe<Vat>;
};


/** The output of our delete `FinVatItem` mutation. */
export type DeleteFinVatItemPayloadFinVatItemEdgeArgs = {
  orderBy?: InputMaybe<Array<FinVatItemsOrderBy>>;
};

/** All input for the `deleteInstrumentByInstrumentid` mutation. */
export type DeleteInstrumentByInstrumentidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  instrumentid: Scalars['Int'];
};

/** All input for the `deleteInstrument` mutation. */
export type DeleteInstrumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Instrument` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Instrument` mutation. */
export type DeleteInstrumentPayload = {
  __typename?: 'DeleteInstrumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedInstrumentId?: Maybe<Scalars['ID']>;
  /** The `Instrument` that was deleted by this mutation. */
  instrument?: Maybe<Instrument>;
  /** An edge for our `Instrument`. May be used by Relay 1. */
  instrumentEdge?: Maybe<InstrumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Instrument` mutation. */
export type DeleteInstrumentPayloadInstrumentEdgeArgs = {
  orderBy?: InputMaybe<Array<InstrumentsOrderBy>>;
};

/** All input for the `deleteInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumber` mutation. */
export type DeleteInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  invoiceOrganizationid: Scalars['Int'];
  invoiceSequencenumber: Scalars['Int'];
  invoiceYear: Scalars['String'];
};

/** All input for the `deleteInvoicenumber` mutation. */
export type DeleteInvoicenumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Invoicenumber` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Invoicenumber` mutation. */
export type DeleteInvoicenumberPayload = {
  __typename?: 'DeleteInvoicenumberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedInvoicenumberId?: Maybe<Scalars['ID']>;
  /** The `Invoicenumber` that was deleted by this mutation. */
  invoicenumber?: Maybe<Invoicenumber>;
  /** An edge for our `Invoicenumber`. May be used by Relay 1. */
  invoicenumberEdge?: Maybe<InvoicenumbersEdge>;
  /** Reads a single `Organization` that is related to this `Invoicenumber`. */
  organizationByInvoiceOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Invoicenumber` mutation. */
export type DeleteInvoicenumberPayloadInvoicenumberEdgeArgs = {
  orderBy?: InputMaybe<Array<InvoicenumbersOrderBy>>;
};

/** All input for the `deleteKnexMigrationById` mutation. */
export type DeleteKnexMigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
};

/** All input for the `deleteKnexMigration` mutation. */
export type DeleteKnexMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnexMigration` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnexMigration` mutation. */
export type DeleteKnexMigrationPayload = {
  __typename?: 'DeleteKnexMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnexMigrationId?: Maybe<Scalars['ID']>;
  /** The `KnexMigration` that was deleted by this mutation. */
  knexMigration?: Maybe<KnexMigration>;
  /** An edge for our `KnexMigration`. May be used by Relay 1. */
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnexMigration` mutation. */
export type DeleteKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsOrderBy>>;
};

/** All input for the `deleteKnexMigrationsLockByIndex` mutation. */
export type DeleteKnexMigrationsLockByIndexInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  index: Scalars['Int'];
};

/** All input for the `deleteKnexMigrationsLock` mutation. */
export type DeleteKnexMigrationsLockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `KnexMigrationsLock` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `KnexMigrationsLock` mutation. */
export type DeleteKnexMigrationsLockPayload = {
  __typename?: 'DeleteKnexMigrationsLockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedKnexMigrationsLockId?: Maybe<Scalars['ID']>;
  /** The `KnexMigrationsLock` that was deleted by this mutation. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  /** An edge for our `KnexMigrationsLock`. May be used by Relay 1. */
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `KnexMigrationsLock` mutation. */
export type DeleteKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsLocksOrderBy>>;
};

/** All input for the `deleteOrganizationByOrganizationid` mutation. */
export type DeleteOrganizationByOrganizationidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  organizationid: Scalars['Int'];
};

/** All input for the `deleteOrganization` mutation. */
export type DeleteOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organization` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Organization` mutation. */
export type DeleteOrganizationPayload = {
  __typename?: 'DeleteOrganizationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOrganizationId?: Maybe<Scalars['ID']>;
  /** The `Organization` that was deleted by this mutation. */
  organization?: Maybe<Organization>;
  /** An edge for our `Organization`. May be used by Relay 1. */
  organizationEdge?: Maybe<OrganizationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Organization` mutation. */
export type DeleteOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};

/** All input for the `deleteOrganizationaddressByOrganizationidAndAddressid` mutation. */
export type DeleteOrganizationaddressByOrganizationidAndAddressidInput = {
  addressid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  organizationid: Scalars['Int'];
};

/** All input for the `deleteOrganizationaddress` mutation. */
export type DeleteOrganizationaddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationaddress` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Organizationaddress` mutation. */
export type DeleteOrganizationaddressPayload = {
  __typename?: 'DeleteOrganizationaddressPayload';
  /** Reads a single `Address` that is related to this `Organizationaddress`. */
  addressByAddressid?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOrganizationaddressId?: Maybe<Scalars['ID']>;
  /** Reads a single `Organization` that is related to this `Organizationaddress`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationaddress` that was deleted by this mutation. */
  organizationaddress?: Maybe<Organizationaddress>;
  /** An edge for our `Organizationaddress`. May be used by Relay 1. */
  organizationaddressEdge?: Maybe<OrganizationaddressesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Organizationaddress` mutation. */
export type DeleteOrganizationaddressPayloadOrganizationaddressEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationaddressesOrderBy>>;
};

/** All input for the `deleteOrganizationattributeByOrganizationidAndTableidAndAttribid` mutation. */
export type DeleteOrganizationattributeByOrganizationidAndTableidAndAttribidInput = {
  attribid: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  organizationid: Scalars['Int'];
  tableid: Scalars['String'];
};

/** All input for the `deleteOrganizationattribute` mutation. */
export type DeleteOrganizationattributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationattribute` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Organizationattribute` mutation. */
export type DeleteOrganizationattributePayload = {
  __typename?: 'DeleteOrganizationattributePayload';
  /** Reads a single `Attribute` that is related to this `Organizationattribute`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOrganizationattributeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Organization` that is related to this `Organizationattribute`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationattribute` that was deleted by this mutation. */
  organizationattribute?: Maybe<Organizationattribute>;
  /** An edge for our `Organizationattribute`. May be used by Relay 1. */
  organizationattributeEdge?: Maybe<OrganizationattributesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Organizationattribute` mutation. */
export type DeleteOrganizationattributePayloadOrganizationattributeEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationattributesOrderBy>>;
};

/** All input for the `deleteOrganizationbankaccountByOrganizationidAndAccountid` mutation. */
export type DeleteOrganizationbankaccountByOrganizationidAndAccountidInput = {
  accountid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  organizationid: Scalars['Int'];
};

/** All input for the `deleteOrganizationbankaccount` mutation. */
export type DeleteOrganizationbankaccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationbankaccount` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Organizationbankaccount` mutation. */
export type DeleteOrganizationbankaccountPayload = {
  __typename?: 'DeleteOrganizationbankaccountPayload';
  /** Reads a single `Bankaccount` that is related to this `Organizationbankaccount`. */
  bankaccountByAccountid?: Maybe<Bankaccount>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOrganizationbankaccountId?: Maybe<Scalars['ID']>;
  /** Reads a single `Organization` that is related to this `Organizationbankaccount`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationbankaccount` that was deleted by this mutation. */
  organizationbankaccount?: Maybe<Organizationbankaccount>;
  /** An edge for our `Organizationbankaccount`. May be used by Relay 1. */
  organizationbankaccountEdge?: Maybe<OrganizationbankaccountsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Organizationbankaccount` mutation. */
export type DeleteOrganizationbankaccountPayloadOrganizationbankaccountEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationbankaccountsOrderBy>>;
};

/** All input for the `deleteOrganizationcommunicationByOrganizationidAndCommunicationid` mutation. */
export type DeleteOrganizationcommunicationByOrganizationidAndCommunicationidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  communicationid: Scalars['Int'];
  organizationid: Scalars['Int'];
};

/** All input for the `deleteOrganizationcommunication` mutation. */
export type DeleteOrganizationcommunicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationcommunication` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Organizationcommunication` mutation. */
export type DeleteOrganizationcommunicationPayload = {
  __typename?: 'DeleteOrganizationcommunicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Communication` that is related to this `Organizationcommunication`. */
  communicationByCommunicationid?: Maybe<Communication>;
  deletedOrganizationcommunicationId?: Maybe<Scalars['ID']>;
  /** Reads a single `Organization` that is related to this `Organizationcommunication`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationcommunication` that was deleted by this mutation. */
  organizationcommunication?: Maybe<Organizationcommunication>;
  /** An edge for our `Organizationcommunication`. May be used by Relay 1. */
  organizationcommunicationEdge?: Maybe<OrganizationcommunicationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Organizationcommunication` mutation. */
export type DeleteOrganizationcommunicationPayloadOrganizationcommunicationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationcommunicationsOrderBy>>;
};

/** All input for the `deleteOrganizationpersonByOrganizationidAndPersonidAndRoletype` mutation. */
export type DeleteOrganizationpersonByOrganizationidAndPersonidAndRoletypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  organizationid: Scalars['Int'];
  personid: Scalars['Int'];
  roletype: Scalars['String'];
};

/** All input for the `deleteOrganizationperson` mutation. */
export type DeleteOrganizationpersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationperson` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Organizationperson` mutation. */
export type DeleteOrganizationpersonPayload = {
  __typename?: 'DeleteOrganizationpersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedOrganizationpersonId?: Maybe<Scalars['ID']>;
  /** Reads a single `Organization` that is related to this `Organizationperson`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationperson` that was deleted by this mutation. */
  organizationperson?: Maybe<Organizationperson>;
  /** An edge for our `Organizationperson`. May be used by Relay 1. */
  organizationpersonEdge?: Maybe<OrganizationpeopleEdge>;
  /** Reads a single `Person` that is related to this `Organizationperson`. */
  personByPersonid?: Maybe<Person>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Organizationperson` mutation. */
export type DeleteOrganizationpersonPayloadOrganizationpersonEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationpeopleOrderBy>>;
};

/** All input for the `deletePersonByPersonid` mutation. */
export type DeletePersonByPersonidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  personid: Scalars['Int'];
};

/** All input for the `deletePerson` mutation. */
export type DeletePersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Person` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Person` mutation. */
export type DeletePersonPayload = {
  __typename?: 'DeletePersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPersonId?: Maybe<Scalars['ID']>;
  /** The `Person` that was deleted by this mutation. */
  person?: Maybe<Person>;
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Person` mutation. */
export type DeletePersonPayloadPersonEdgeArgs = {
  orderBy?: InputMaybe<Array<PeopleOrderBy>>;
};

/** All input for the `deletePersonaddressByPersonidAndAddressid` mutation. */
export type DeletePersonaddressByPersonidAndAddressidInput = {
  addressid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  personid: Scalars['Int'];
};

/** All input for the `deletePersonaddress` mutation. */
export type DeletePersonaddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personaddress` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Personaddress` mutation. */
export type DeletePersonaddressPayload = {
  __typename?: 'DeletePersonaddressPayload';
  /** Reads a single `Address` that is related to this `Personaddress`. */
  addressByAddressid?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPersonaddressId?: Maybe<Scalars['ID']>;
  /** Reads a single `Person` that is related to this `Personaddress`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personaddress` that was deleted by this mutation. */
  personaddress?: Maybe<Personaddress>;
  /** An edge for our `Personaddress`. May be used by Relay 1. */
  personaddressEdge?: Maybe<PersonaddressesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Personaddress` mutation. */
export type DeletePersonaddressPayloadPersonaddressEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonaddressesOrderBy>>;
};

/** All input for the `deletePersonattributeByPersonidAndTableidAndAttribid` mutation. */
export type DeletePersonattributeByPersonidAndTableidAndAttribidInput = {
  attribid: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  personid: Scalars['Int'];
  tableid: Scalars['String'];
};

/** All input for the `deletePersonattribute` mutation. */
export type DeletePersonattributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personattribute` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Personattribute` mutation. */
export type DeletePersonattributePayload = {
  __typename?: 'DeletePersonattributePayload';
  /** Reads a single `Attribute` that is related to this `Personattribute`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPersonattributeId?: Maybe<Scalars['ID']>;
  /** Reads a single `Person` that is related to this `Personattribute`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personattribute` that was deleted by this mutation. */
  personattribute?: Maybe<Personattribute>;
  /** An edge for our `Personattribute`. May be used by Relay 1. */
  personattributeEdge?: Maybe<PersonattributesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Personattribute` mutation. */
export type DeletePersonattributePayloadPersonattributeEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonattributesOrderBy>>;
};

/** All input for the `deletePersonbankaccountByPersonidAndAccountid` mutation. */
export type DeletePersonbankaccountByPersonidAndAccountidInput = {
  accountid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  personid: Scalars['Int'];
};

/** All input for the `deletePersonbankaccount` mutation. */
export type DeletePersonbankaccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personbankaccount` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Personbankaccount` mutation. */
export type DeletePersonbankaccountPayload = {
  __typename?: 'DeletePersonbankaccountPayload';
  /** Reads a single `Bankaccount` that is related to this `Personbankaccount`. */
  bankaccountByAccountid?: Maybe<Bankaccount>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPersonbankaccountId?: Maybe<Scalars['ID']>;
  /** Reads a single `Person` that is related to this `Personbankaccount`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personbankaccount` that was deleted by this mutation. */
  personbankaccount?: Maybe<Personbankaccount>;
  /** An edge for our `Personbankaccount`. May be used by Relay 1. */
  personbankaccountEdge?: Maybe<PersonbankaccountsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Personbankaccount` mutation. */
export type DeletePersonbankaccountPayloadPersonbankaccountEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonbankaccountsOrderBy>>;
};

/** All input for the `deletePersoncommunicationByPersonidAndCommunicationid` mutation. */
export type DeletePersoncommunicationByPersonidAndCommunicationidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  communicationid: Scalars['Int'];
  personid: Scalars['Int'];
};

/** All input for the `deletePersoncommunication` mutation. */
export type DeletePersoncommunicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personcommunication` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Personcommunication` mutation. */
export type DeletePersoncommunicationPayload = {
  __typename?: 'DeletePersoncommunicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Communication` that is related to this `Personcommunication`. */
  communicationByCommunicationid?: Maybe<Communication>;
  deletedPersoncommunicationId?: Maybe<Scalars['ID']>;
  /** Reads a single `Person` that is related to this `Personcommunication`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personcommunication` that was deleted by this mutation. */
  personcommunication?: Maybe<Personcommunication>;
  /** An edge for our `Personcommunication`. May be used by Relay 1. */
  personcommunicationEdge?: Maybe<PersoncommunicationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Personcommunication` mutation. */
export type DeletePersoncommunicationPayloadPersoncommunicationEdgeArgs = {
  orderBy?: InputMaybe<Array<PersoncommunicationsOrderBy>>;
};

/** All input for the `deletePersoninstrumentByPersonidAndInstrumentid` mutation. */
export type DeletePersoninstrumentByPersonidAndInstrumentidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  instrumentid: Scalars['Int'];
  personid: Scalars['Int'];
};

/** All input for the `deletePersoninstrument` mutation. */
export type DeletePersoninstrumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personinstrument` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Personinstrument` mutation. */
export type DeletePersoninstrumentPayload = {
  __typename?: 'DeletePersoninstrumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedPersoninstrumentId?: Maybe<Scalars['ID']>;
  /** Reads a single `Instrument` that is related to this `Personinstrument`. */
  instrumentByInstrumentid?: Maybe<Instrument>;
  /** Reads a single `Person` that is related to this `Personinstrument`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personinstrument` that was deleted by this mutation. */
  personinstrument?: Maybe<Personinstrument>;
  /** An edge for our `Personinstrument`. May be used by Relay 1. */
  personinstrumentEdge?: Maybe<PersoninstrumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Personinstrument` mutation. */
export type DeletePersoninstrumentPayloadPersoninstrumentEdgeArgs = {
  orderBy?: InputMaybe<Array<PersoninstrumentsOrderBy>>;
};

/** All input for the `deleteUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalue` mutation. */
export type DeleteUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  objectname: Scalars['String'];
  objecttype: Scalars['String'];
  propertyname: Scalars['String'];
  propertyvalue: Scalars['String'];
  userid: Scalars['Int'];
};

/** All input for the `deleteUserSetting` mutation. */
export type DeleteUserSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserSetting` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `UserSetting` mutation. */
export type DeleteUserSettingPayload = {
  __typename?: 'DeleteUserSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserSettingId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserSetting` that was deleted by this mutation. */
  userSetting?: Maybe<UserSetting>;
  /** An edge for our `UserSetting`. May be used by Relay 1. */
  userSettingEdge?: Maybe<UserSettingsEdge>;
};


/** The output of our delete `UserSetting` mutation. */
export type DeleteUserSettingPayloadUserSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<UserSettingsOrderBy>>;
};

/** All input for the `deleteVatByVatid` mutation. */
export type DeleteVatByVatidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  vatid: Scalars['Int'];
};

/** All input for the `deleteVat` mutation. */
export type DeleteVatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Vat` to be deleted. */
  nodeId: Scalars['ID'];
};

/** The output of our delete `Vat` mutation. */
export type DeleteVatPayload = {
  __typename?: 'DeleteVatPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedVatId?: Maybe<Scalars['ID']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Vat` that was deleted by this mutation. */
  vat?: Maybe<Vat>;
  /** An edge for our `Vat`. May be used by Relay 1. */
  vatEdge?: Maybe<VatsEdge>;
};


/** The output of our delete `Vat` mutation. */
export type DeleteVatPayloadVatEdgeArgs = {
  orderBy?: InputMaybe<Array<VatsOrderBy>>;
};

export type Document = Node & {
  __typename?: 'Document';
  authorid: Scalars['String'];
  data?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  documentid: Scalars['Int'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  mimetype: Scalars['String'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Document` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type DocumentCondition = {
  /** Checks for equality with the object’s `authorid` field. */
  authorid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `data` field. */
  data?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `documentid` field. */
  documentid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `mimetype` field. */
  mimetype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `objectid` field. */
  objectid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `objecttype` field. */
  objecttype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Document` */
export type DocumentInput = {
  authorid: Scalars['String'];
  data?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  documentid?: InputMaybe<Scalars['Int']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  mimetype: Scalars['String'];
  name: Scalars['String'];
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Document`. Fields that are set will be updated. */
export type DocumentPatch = {
  authorid?: InputMaybe<Scalars['String']>;
  data?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  documentid?: InputMaybe<Scalars['Int']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  mimetype?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  objectid?: InputMaybe<Scalars['String']>;
  objecttype?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Document` values. */
export type DocumentsConnection = {
  __typename?: 'DocumentsConnection';
  /** A list of edges which contains the `Document` and cursor to aid in pagination. */
  edges: Array<DocumentsEdge>;
  /** A list of `Document` objects. */
  nodes: Array<Maybe<Document>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Document` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Document` edge in the connection. */
export type DocumentsEdge = {
  __typename?: 'DocumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Document` at the end of the edge. */
  node?: Maybe<Document>;
};

/** Methods to use when ordering `Document`. */
export enum DocumentsOrderBy {
  AuthoridAsc = 'AUTHORID_ASC',
  AuthoridDesc = 'AUTHORID_DESC',
  DataAsc = 'DATA_ASC',
  DataDesc = 'DATA_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  DocumentidAsc = 'DOCUMENTID_ASC',
  DocumentidDesc = 'DOCUMENTID_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  MimetypeAsc = 'MIMETYPE_ASC',
  MimetypeDesc = 'MIMETYPE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  ObjectidAsc = 'OBJECTID_ASC',
  ObjectidDesc = 'OBJECTID_DESC',
  ObjecttypeAsc = 'OBJECTTYPE_ASC',
  ObjecttypeDesc = 'OBJECTTYPE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type FinDefaultVatItem = Node & {
  __typename?: 'FinDefaultVatItem';
  amount: Scalars['Float'];
  articlenumber: Scalars['String'];
  createdate: Scalars['Datetime'];
  description: Scalars['String'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` that is related to this `FinDefaultVatItem`. */
  organizationByOrganizationid?: Maybe<Organization>;
  organizationid: Scalars['Int'];
  updateby: Scalars['String'];
  /** Reads a single `Vat` that is related to this `FinDefaultVatItem`. */
  vatByVatid?: Maybe<Vat>;
  vatdate: Scalars['Datetime'];
  vatid: Scalars['Int'];
  vatitemid: Scalars['Int'];
  vattype: Scalars['String'];
};

/**
 * A condition to be used against `FinDefaultVatItem` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FinDefaultVatItemCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Checks for equality with the object’s `articlenumber` field. */
  articlenumber?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdate` field. */
  createdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `organizationid` field. */
  organizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vatdate` field. */
  vatdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `vatid` field. */
  vatid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `vatitemid` field. */
  vatitemid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `vattype` field. */
  vattype?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `FinDefaultVatItem` */
export type FinDefaultVatItemInput = {
  amount: Scalars['Float'];
  articlenumber: Scalars['String'];
  createdate?: InputMaybe<Scalars['Datetime']>;
  description: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid: Scalars['Int'];
  updateby: Scalars['String'];
  vatdate?: InputMaybe<Scalars['Datetime']>;
  vatid: Scalars['Int'];
  vatitemid?: InputMaybe<Scalars['Int']>;
  vattype: Scalars['String'];
};

/** Represents an update to a `FinDefaultVatItem`. Fields that are set will be updated. */
export type FinDefaultVatItemPatch = {
  amount?: InputMaybe<Scalars['Float']>;
  articlenumber?: InputMaybe<Scalars['String']>;
  createdate?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
  vatdate?: InputMaybe<Scalars['Datetime']>;
  vatid?: InputMaybe<Scalars['Int']>;
  vatitemid?: InputMaybe<Scalars['Int']>;
  vattype?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `FinDefaultVatItem` values. */
export type FinDefaultVatItemsConnection = {
  __typename?: 'FinDefaultVatItemsConnection';
  /** A list of edges which contains the `FinDefaultVatItem` and cursor to aid in pagination. */
  edges: Array<FinDefaultVatItemsEdge>;
  /** A list of `FinDefaultVatItem` objects. */
  nodes: Array<Maybe<FinDefaultVatItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FinDefaultVatItem` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FinDefaultVatItem` edge in the connection. */
export type FinDefaultVatItemsEdge = {
  __typename?: 'FinDefaultVatItemsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FinDefaultVatItem` at the end of the edge. */
  node?: Maybe<FinDefaultVatItem>;
};

/** Methods to use when ordering `FinDefaultVatItem`. */
export enum FinDefaultVatItemsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  ArticlenumberAsc = 'ARTICLENUMBER_ASC',
  ArticlenumberDesc = 'ARTICLENUMBER_DESC',
  CreatedateAsc = 'CREATEDATE_ASC',
  CreatedateDesc = 'CREATEDATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC',
  VatdateAsc = 'VATDATE_ASC',
  VatdateDesc = 'VATDATE_DESC',
  VatidAsc = 'VATID_ASC',
  VatidDesc = 'VATID_DESC',
  VatitemidAsc = 'VATITEMID_ASC',
  VatitemidDesc = 'VATITEMID_DESC',
  VattypeAsc = 'VATTYPE_ASC',
  VattypeDesc = 'VATTYPE_DESC'
}

export type FinInvoice = Node & {
  __typename?: 'FinInvoice';
  createdate: Scalars['Datetime'];
  datesent?: Maybe<Scalars['Datetime']>;
  description?: Maybe<Scalars['String']>;
  /** Reads and enables pagination through a set of `FinInvoiceItem`. */
  finInvoiceItemsByInvoiceid: FinInvoiceItemsConnection;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  invoicedate: Scalars['Datetime'];
  invoiceid: Scalars['Int'];
  invoicenumber: Scalars['String'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  objectid: Scalars['Int'];
  objecttype: Scalars['String'];
  /** Reads a single `Organization` that is related to this `FinInvoice`. */
  organizationByOrganizationid?: Maybe<Organization>;
  organizationid: Scalars['Int'];
  paymentdate?: Maybe<Scalars['Datetime']>;
  paymenttext?: Maybe<Scalars['String']>;
  updateby: Scalars['String'];
};


export type FinInvoiceFinInvoiceItemsByInvoiceidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinInvoiceItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinInvoiceItemsOrderBy>>;
};

/**
 * A condition to be used against `FinInvoice` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FinInvoiceCondition = {
  /** Checks for equality with the object’s `createdate` field. */
  createdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `datesent` field. */
  datesent?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `invoicedate` field. */
  invoicedate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `invoiceid` field. */
  invoiceid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `invoicenumber` field. */
  invoicenumber?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `objectid` field. */
  objectid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `objecttype` field. */
  objecttype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `organizationid` field. */
  organizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `paymentdate` field. */
  paymentdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `paymenttext` field. */
  paymenttext?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `FinInvoice` */
export type FinInvoiceInput = {
  createdate?: InputMaybe<Scalars['Datetime']>;
  datesent?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  invoicedate?: InputMaybe<Scalars['Datetime']>;
  invoiceid?: InputMaybe<Scalars['Int']>;
  invoicenumber: Scalars['String'];
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  objectid: Scalars['Int'];
  objecttype: Scalars['String'];
  organizationid: Scalars['Int'];
  paymentdate?: InputMaybe<Scalars['Datetime']>;
  paymenttext?: InputMaybe<Scalars['String']>;
  updateby: Scalars['String'];
};

export type FinInvoiceItem = Node & {
  __typename?: 'FinInvoiceItem';
  amount: Scalars['Float'];
  description?: Maybe<Scalars['String']>;
  /** Reads a single `FinInvoice` that is related to this `FinInvoiceItem`. */
  finInvoiceByInvoiceid?: Maybe<FinInvoice>;
  /** Reads a single `FinProduct` that is related to this `FinInvoiceItem`. */
  finProductByProductid?: Maybe<FinProduct>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  invoiceid: Scalars['Int'];
  invoiceitemid: Scalars['Int'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  priority: Scalars['Int'];
  productid?: Maybe<Scalars['Int']>;
  updateby: Scalars['String'];
  /** Reads a single `Vat` that is related to this `FinInvoiceItem`. */
  vatByVatid?: Maybe<Vat>;
  vatid: Scalars['Int'];
};

/**
 * A condition to be used against `FinInvoiceItem` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FinInvoiceItemCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `invoiceid` field. */
  invoiceid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `invoiceitemid` field. */
  invoiceitemid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `priority` field. */
  priority?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `productid` field. */
  productid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vatid` field. */
  vatid?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `FinInvoiceItem` */
export type FinInvoiceItemInput = {
  amount: Scalars['Float'];
  description?: InputMaybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  invoiceid: Scalars['Int'];
  invoiceitemid?: InputMaybe<Scalars['Int']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  priority: Scalars['Int'];
  productid?: InputMaybe<Scalars['Int']>;
  updateby: Scalars['String'];
  vatid: Scalars['Int'];
};

/** Represents an update to a `FinInvoiceItem`. Fields that are set will be updated. */
export type FinInvoiceItemPatch = {
  amount?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  invoiceid?: InputMaybe<Scalars['Int']>;
  invoiceitemid?: InputMaybe<Scalars['Int']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  priority?: InputMaybe<Scalars['Int']>;
  productid?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
  vatid?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `FinInvoiceItem` values. */
export type FinInvoiceItemsConnection = {
  __typename?: 'FinInvoiceItemsConnection';
  /** A list of edges which contains the `FinInvoiceItem` and cursor to aid in pagination. */
  edges: Array<FinInvoiceItemsEdge>;
  /** A list of `FinInvoiceItem` objects. */
  nodes: Array<Maybe<FinInvoiceItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FinInvoiceItem` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FinInvoiceItem` edge in the connection. */
export type FinInvoiceItemsEdge = {
  __typename?: 'FinInvoiceItemsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FinInvoiceItem` at the end of the edge. */
  node?: Maybe<FinInvoiceItem>;
};

/** Methods to use when ordering `FinInvoiceItem`. */
export enum FinInvoiceItemsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  InvoiceidAsc = 'INVOICEID_ASC',
  InvoiceidDesc = 'INVOICEID_DESC',
  InvoiceitemidAsc = 'INVOICEITEMID_ASC',
  InvoiceitemidDesc = 'INVOICEITEMID_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PriorityAsc = 'PRIORITY_ASC',
  PriorityDesc = 'PRIORITY_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC',
  VatidAsc = 'VATID_ASC',
  VatidDesc = 'VATID_DESC'
}

/** Represents an update to a `FinInvoice`. Fields that are set will be updated. */
export type FinInvoicePatch = {
  createdate?: InputMaybe<Scalars['Datetime']>;
  datesent?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  invoicedate?: InputMaybe<Scalars['Datetime']>;
  invoiceid?: InputMaybe<Scalars['Int']>;
  invoicenumber?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  objectid?: InputMaybe<Scalars['Int']>;
  objecttype?: InputMaybe<Scalars['String']>;
  organizationid?: InputMaybe<Scalars['Int']>;
  paymentdate?: InputMaybe<Scalars['Datetime']>;
  paymenttext?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `FinInvoice` values. */
export type FinInvoicesConnection = {
  __typename?: 'FinInvoicesConnection';
  /** A list of edges which contains the `FinInvoice` and cursor to aid in pagination. */
  edges: Array<FinInvoicesEdge>;
  /** A list of `FinInvoice` objects. */
  nodes: Array<Maybe<FinInvoice>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FinInvoice` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FinInvoice` edge in the connection. */
export type FinInvoicesEdge = {
  __typename?: 'FinInvoicesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FinInvoice` at the end of the edge. */
  node?: Maybe<FinInvoice>;
};

/** Methods to use when ordering `FinInvoice`. */
export enum FinInvoicesOrderBy {
  CreatedateAsc = 'CREATEDATE_ASC',
  CreatedateDesc = 'CREATEDATE_DESC',
  DatesentAsc = 'DATESENT_ASC',
  DatesentDesc = 'DATESENT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  InvoicedateAsc = 'INVOICEDATE_ASC',
  InvoicedateDesc = 'INVOICEDATE_DESC',
  InvoiceidAsc = 'INVOICEID_ASC',
  InvoiceidDesc = 'INVOICEID_DESC',
  InvoicenumberAsc = 'INVOICENUMBER_ASC',
  InvoicenumberDesc = 'INVOICENUMBER_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  ObjectidAsc = 'OBJECTID_ASC',
  ObjectidDesc = 'OBJECTID_DESC',
  ObjecttypeAsc = 'OBJECTTYPE_ASC',
  ObjecttypeDesc = 'OBJECTTYPE_DESC',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PaymentdateAsc = 'PAYMENTDATE_ASC',
  PaymentdateDesc = 'PAYMENTDATE_DESC',
  PaymenttextAsc = 'PAYMENTTEXT_ASC',
  PaymenttextDesc = 'PAYMENTTEXT_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type FinProduct = Node & {
  __typename?: 'FinProduct';
  amount: Scalars['Float'];
  description: Scalars['String'];
  /** Reads and enables pagination through a set of `FinInvoiceItem`. */
  finInvoiceItemsByProductid: FinInvoiceItemsConnection;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  productid: Scalars['Int'];
  updateby: Scalars['String'];
};


export type FinProductFinInvoiceItemsByProductidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinInvoiceItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinInvoiceItemsOrderBy>>;
};

/**
 * A condition to be used against `FinProduct` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FinProductCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `productid` field. */
  productid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `FinProduct` */
export type FinProductInput = {
  amount: Scalars['Float'];
  description: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  name: Scalars['String'];
  productid?: InputMaybe<Scalars['Int']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `FinProduct`. Fields that are set will be updated. */
export type FinProductPatch = {
  amount?: InputMaybe<Scalars['Float']>;
  description?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
  productid?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `FinProduct` values. */
export type FinProductsConnection = {
  __typename?: 'FinProductsConnection';
  /** A list of edges which contains the `FinProduct` and cursor to aid in pagination. */
  edges: Array<FinProductsEdge>;
  /** A list of `FinProduct` objects. */
  nodes: Array<Maybe<FinProduct>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FinProduct` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FinProduct` edge in the connection. */
export type FinProductsEdge = {
  __typename?: 'FinProductsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FinProduct` at the end of the edge. */
  node?: Maybe<FinProduct>;
};

/** Methods to use when ordering `FinProduct`. */
export enum FinProductsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  ProductidAsc = 'PRODUCTID_ASC',
  ProductidDesc = 'PRODUCTID_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type FinVatItem = Node & {
  __typename?: 'FinVatItem';
  amount: Scalars['Float'];
  articlenumber: Scalars['String'];
  createdate: Scalars['Datetime'];
  description: Scalars['String'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` that is related to this `FinVatItem`. */
  organizationByOrganizationid?: Maybe<Organization>;
  organizationid: Scalars['Int'];
  updateby: Scalars['String'];
  /** Reads a single `Vat` that is related to this `FinVatItem`. */
  vatByVatid?: Maybe<Vat>;
  vatdate: Scalars['Datetime'];
  vatid: Scalars['Int'];
  vatitemid: Scalars['Int'];
  vattype: Scalars['String'];
};

/**
 * A condition to be used against `FinVatItem` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FinVatItemCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars['Float']>;
  /** Checks for equality with the object’s `articlenumber` field. */
  articlenumber?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `createdate` field. */
  createdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `organizationid` field. */
  organizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vatdate` field. */
  vatdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `vatid` field. */
  vatid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `vatitemid` field. */
  vatitemid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `vattype` field. */
  vattype?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `FinVatItem` */
export type FinVatItemInput = {
  amount: Scalars['Float'];
  articlenumber: Scalars['String'];
  createdate?: InputMaybe<Scalars['Datetime']>;
  description: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid: Scalars['Int'];
  updateby: Scalars['String'];
  vatdate?: InputMaybe<Scalars['Datetime']>;
  vatid: Scalars['Int'];
  vatitemid?: InputMaybe<Scalars['Int']>;
  vattype: Scalars['String'];
};

/** Represents an update to a `FinVatItem`. Fields that are set will be updated. */
export type FinVatItemPatch = {
  amount?: InputMaybe<Scalars['Float']>;
  articlenumber?: InputMaybe<Scalars['String']>;
  createdate?: InputMaybe<Scalars['Datetime']>;
  description?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
  vatdate?: InputMaybe<Scalars['Datetime']>;
  vatid?: InputMaybe<Scalars['Int']>;
  vatitemid?: InputMaybe<Scalars['Int']>;
  vattype?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `FinVatItem` values. */
export type FinVatItemsConnection = {
  __typename?: 'FinVatItemsConnection';
  /** A list of edges which contains the `FinVatItem` and cursor to aid in pagination. */
  edges: Array<FinVatItemsEdge>;
  /** A list of `FinVatItem` objects. */
  nodes: Array<Maybe<FinVatItem>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `FinVatItem` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `FinVatItem` edge in the connection. */
export type FinVatItemsEdge = {
  __typename?: 'FinVatItemsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `FinVatItem` at the end of the edge. */
  node?: Maybe<FinVatItem>;
};

/** Methods to use when ordering `FinVatItem`. */
export enum FinVatItemsOrderBy {
  AmountAsc = 'AMOUNT_ASC',
  AmountDesc = 'AMOUNT_DESC',
  ArticlenumberAsc = 'ARTICLENUMBER_ASC',
  ArticlenumberDesc = 'ARTICLENUMBER_DESC',
  CreatedateAsc = 'CREATEDATE_ASC',
  CreatedateDesc = 'CREATEDATE_DESC',
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC',
  VatdateAsc = 'VATDATE_ASC',
  VatdateDesc = 'VATDATE_DESC',
  VatidAsc = 'VATID_ASC',
  VatidDesc = 'VATID_DESC',
  VatitemidAsc = 'VATITEMID_ASC',
  VatitemidDesc = 'VATITEMID_DESC',
  VattypeAsc = 'VATTYPE_ASC',
  VattypeDesc = 'VATTYPE_DESC'
}

export type Instrument = Node & {
  __typename?: 'Instrument';
  description?: Maybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  instrumentid: Scalars['Int'];
  lastupdate: Scalars['Datetime'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Personinstrument`. */
  personinstrumentsByInstrumentid: PersoninstrumentsConnection;
  updateby: Scalars['String'];
};


export type InstrumentPersoninstrumentsByInstrumentidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersoninstrumentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersoninstrumentsOrderBy>>;
};

/**
 * A condition to be used against `Instrument` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InstrumentCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `instrumentid` field. */
  instrumentid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Instrument` */
export type InstrumentInput = {
  description?: InputMaybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  instrumentid?: InputMaybe<Scalars['Int']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  name: Scalars['String'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Instrument`. Fields that are set will be updated. */
export type InstrumentPatch = {
  description?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  instrumentid?: InputMaybe<Scalars['Int']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Instrument` values. */
export type InstrumentsConnection = {
  __typename?: 'InstrumentsConnection';
  /** A list of edges which contains the `Instrument` and cursor to aid in pagination. */
  edges: Array<InstrumentsEdge>;
  /** A list of `Instrument` objects. */
  nodes: Array<Maybe<Instrument>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Instrument` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Instrument` edge in the connection. */
export type InstrumentsEdge = {
  __typename?: 'InstrumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Instrument` at the end of the edge. */
  node?: Maybe<Instrument>;
};

/** Methods to use when ordering `Instrument`. */
export enum InstrumentsOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  InstrumentidAsc = 'INSTRUMENTID_ASC',
  InstrumentidDesc = 'INSTRUMENTID_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Invoicenumber = Node & {
  __typename?: 'Invoicenumber';
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  invoiceOrganizationid: Scalars['Int'];
  invoiceSequencenumber: Scalars['Int'];
  invoiceYear: Scalars['String'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` that is related to this `Invoicenumber`. */
  organizationByInvoiceOrganizationid?: Maybe<Organization>;
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Invoicenumber` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type InvoicenumberCondition = {
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `invoiceOrganizationid` field. */
  invoiceOrganizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `invoiceSequencenumber` field. */
  invoiceSequencenumber?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `invoiceYear` field. */
  invoiceYear?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Invoicenumber` */
export type InvoicenumberInput = {
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  invoiceOrganizationid: Scalars['Int'];
  invoiceSequencenumber: Scalars['Int'];
  invoiceYear: Scalars['String'];
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Invoicenumber`. Fields that are set will be updated. */
export type InvoicenumberPatch = {
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  invoiceOrganizationid?: InputMaybe<Scalars['Int']>;
  invoiceSequencenumber?: InputMaybe<Scalars['Int']>;
  invoiceYear?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Invoicenumber` values. */
export type InvoicenumbersConnection = {
  __typename?: 'InvoicenumbersConnection';
  /** A list of edges which contains the `Invoicenumber` and cursor to aid in pagination. */
  edges: Array<InvoicenumbersEdge>;
  /** A list of `Invoicenumber` objects. */
  nodes: Array<Maybe<Invoicenumber>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Invoicenumber` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Invoicenumber` edge in the connection. */
export type InvoicenumbersEdge = {
  __typename?: 'InvoicenumbersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Invoicenumber` at the end of the edge. */
  node?: Maybe<Invoicenumber>;
};

/** Methods to use when ordering `Invoicenumber`. */
export enum InvoicenumbersOrderBy {
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  InvoiceOrganizationidAsc = 'INVOICE_ORGANIZATIONID_ASC',
  InvoiceOrganizationidDesc = 'INVOICE_ORGANIZATIONID_DESC',
  InvoiceSequencenumberAsc = 'INVOICE_SEQUENCENUMBER_ASC',
  InvoiceSequencenumberDesc = 'INVOICE_SEQUENCENUMBER_DESC',
  InvoiceYearAsc = 'INVOICE_YEAR_ASC',
  InvoiceYearDesc = 'INVOICE_YEAR_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type KnexMigration = Node & {
  __typename?: 'KnexMigration';
  batch?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  migrationTime?: Maybe<Scalars['Datetime']>;
  name?: Maybe<Scalars['String']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `KnexMigration` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnexMigrationCondition = {
  /** Checks for equality with the object’s `batch` field. */
  batch?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `migrationTime` field. */
  migrationTime?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `KnexMigration` */
export type KnexMigrationInput = {
  batch?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  migrationTime?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `KnexMigration`. Fields that are set will be updated. */
export type KnexMigrationPatch = {
  batch?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  migrationTime?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `KnexMigration` values. */
export type KnexMigrationsConnection = {
  __typename?: 'KnexMigrationsConnection';
  /** A list of edges which contains the `KnexMigration` and cursor to aid in pagination. */
  edges: Array<KnexMigrationsEdge>;
  /** A list of `KnexMigration` objects. */
  nodes: Array<Maybe<KnexMigration>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnexMigration` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnexMigration` edge in the connection. */
export type KnexMigrationsEdge = {
  __typename?: 'KnexMigrationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnexMigration` at the end of the edge. */
  node?: Maybe<KnexMigration>;
};

export type KnexMigrationsLock = Node & {
  __typename?: 'KnexMigrationsLock';
  index: Scalars['Int'];
  isLocked?: Maybe<Scalars['Int']>;
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

/**
 * A condition to be used against `KnexMigrationsLock` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type KnexMigrationsLockCondition = {
  /** Checks for equality with the object’s `index` field. */
  index?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `isLocked` field. */
  isLocked?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `KnexMigrationsLock` */
export type KnexMigrationsLockInput = {
  index?: InputMaybe<Scalars['Int']>;
  isLocked?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `KnexMigrationsLock`. Fields that are set will be updated. */
export type KnexMigrationsLockPatch = {
  index?: InputMaybe<Scalars['Int']>;
  isLocked?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `KnexMigrationsLock` values. */
export type KnexMigrationsLocksConnection = {
  __typename?: 'KnexMigrationsLocksConnection';
  /** A list of edges which contains the `KnexMigrationsLock` and cursor to aid in pagination. */
  edges: Array<KnexMigrationsLocksEdge>;
  /** A list of `KnexMigrationsLock` objects. */
  nodes: Array<Maybe<KnexMigrationsLock>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `KnexMigrationsLock` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `KnexMigrationsLock` edge in the connection. */
export type KnexMigrationsLocksEdge = {
  __typename?: 'KnexMigrationsLocksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `KnexMigrationsLock` at the end of the edge. */
  node?: Maybe<KnexMigrationsLock>;
};

/** Methods to use when ordering `KnexMigrationsLock`. */
export enum KnexMigrationsLocksOrderBy {
  IndexAsc = 'INDEX_ASC',
  IndexDesc = 'INDEX_DESC',
  IsLockedAsc = 'IS_LOCKED_ASC',
  IsLockedDesc = 'IS_LOCKED_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Methods to use when ordering `KnexMigration`. */
export enum KnexMigrationsOrderBy {
  BatchAsc = 'BATCH_ASC',
  BatchDesc = 'BATCH_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  MigrationTimeAsc = 'MIGRATION_TIME_ASC',
  MigrationTimeDesc = 'MIGRATION_TIME_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>;
  /** Creates a single `Attribute`. */
  createAttribute?: Maybe<CreateAttributePayload>;
  /** Creates a single `Attributedescription`. */
  createAttributedescription?: Maybe<CreateAttributedescriptionPayload>;
  /** Creates a single `Bankaccount`. */
  createBankaccount?: Maybe<CreateBankaccountPayload>;
  /** Creates a single `Bankcode`. */
  createBankcode?: Maybe<CreateBankcodePayload>;
  /** Creates a single `Car`. */
  createCar?: Maybe<CreateCarPayload>;
  /** Creates a single `CarTrip`. */
  createCarTrip?: Maybe<CreateCarTripPayload>;
  /** Creates a single `Codetable`. */
  createCodetable?: Maybe<CreateCodetablePayload>;
  /** Creates a single `Communication`. */
  createCommunication?: Maybe<CreateCommunicationPayload>;
  /** Creates a single `DefaultSetting`. */
  createDefaultSetting?: Maybe<CreateDefaultSettingPayload>;
  /** Creates a single `Document`. */
  createDocument?: Maybe<CreateDocumentPayload>;
  /** Creates a single `FinDefaultVatItem`. */
  createFinDefaultVatItem?: Maybe<CreateFinDefaultVatItemPayload>;
  /** Creates a single `FinInvoice`. */
  createFinInvoice?: Maybe<CreateFinInvoicePayload>;
  /** Creates a single `FinInvoiceItem`. */
  createFinInvoiceItem?: Maybe<CreateFinInvoiceItemPayload>;
  /** Creates a single `FinProduct`. */
  createFinProduct?: Maybe<CreateFinProductPayload>;
  /** Creates a single `FinVatItem`. */
  createFinVatItem?: Maybe<CreateFinVatItemPayload>;
  /** Creates a single `Instrument`. */
  createInstrument?: Maybe<CreateInstrumentPayload>;
  /** Creates a single `Invoicenumber`. */
  createInvoicenumber?: Maybe<CreateInvoicenumberPayload>;
  /** Creates a single `KnexMigration`. */
  createKnexMigration?: Maybe<CreateKnexMigrationPayload>;
  /** Creates a single `KnexMigrationsLock`. */
  createKnexMigrationsLock?: Maybe<CreateKnexMigrationsLockPayload>;
  /** Creates a single `Organization`. */
  createOrganization?: Maybe<CreateOrganizationPayload>;
  /** Creates a single `Organizationaddress`. */
  createOrganizationaddress?: Maybe<CreateOrganizationaddressPayload>;
  /** Creates a single `Organizationattribute`. */
  createOrganizationattribute?: Maybe<CreateOrganizationattributePayload>;
  /** Creates a single `Organizationbankaccount`. */
  createOrganizationbankaccount?: Maybe<CreateOrganizationbankaccountPayload>;
  /** Creates a single `Organizationcommunication`. */
  createOrganizationcommunication?: Maybe<CreateOrganizationcommunicationPayload>;
  /** Creates a single `Organizationperson`. */
  createOrganizationperson?: Maybe<CreateOrganizationpersonPayload>;
  /** Creates a single `Person`. */
  createPerson?: Maybe<CreatePersonPayload>;
  /** Creates a single `Personaddress`. */
  createPersonaddress?: Maybe<CreatePersonaddressPayload>;
  /** Creates a single `Personattribute`. */
  createPersonattribute?: Maybe<CreatePersonattributePayload>;
  /** Creates a single `Personbankaccount`. */
  createPersonbankaccount?: Maybe<CreatePersonbankaccountPayload>;
  /** Creates a single `Personcommunication`. */
  createPersoncommunication?: Maybe<CreatePersoncommunicationPayload>;
  /** Creates a single `Personinstrument`. */
  createPersoninstrument?: Maybe<CreatePersoninstrumentPayload>;
  /** Creates a single `UserSetting`. */
  createUserSetting?: Maybe<CreateUserSettingPayload>;
  /** Creates a single `Vat`. */
  createVat?: Maybe<CreateVatPayload>;
  /** Deletes a single `Address` using its globally unique id. */
  deleteAddress?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Address` using a unique key. */
  deleteAddressByAddressid?: Maybe<DeleteAddressPayload>;
  /** Deletes a single `Attribute` using its globally unique id. */
  deleteAttribute?: Maybe<DeleteAttributePayload>;
  /** Deletes a single `Attribute` using a unique key. */
  deleteAttributeByTableidAndAttribid?: Maybe<DeleteAttributePayload>;
  /** Deletes a single `Attributedescription` using its globally unique id. */
  deleteAttributedescription?: Maybe<DeleteAttributedescriptionPayload>;
  /** Deletes a single `Attributedescription` using a unique key. */
  deleteAttributedescriptionByTableidAndAttribidAndLanguage?: Maybe<DeleteAttributedescriptionPayload>;
  /** Deletes a single `Bankaccount` using its globally unique id. */
  deleteBankaccount?: Maybe<DeleteBankaccountPayload>;
  /** Deletes a single `Bankaccount` using a unique key. */
  deleteBankaccountByAccountid?: Maybe<DeleteBankaccountPayload>;
  /** Deletes a single `Bankcode` using its globally unique id. */
  deleteBankcode?: Maybe<DeleteBankcodePayload>;
  /** Deletes a single `Bankcode` using a unique key. */
  deleteBankcodeByBankcodeAndCitycode?: Maybe<DeleteBankcodePayload>;
  /** Deletes a single `Car` using its globally unique id. */
  deleteCar?: Maybe<DeleteCarPayload>;
  /** Deletes a single `Car` using a unique key. */
  deleteCarByCarid?: Maybe<DeleteCarPayload>;
  /** Deletes a single `CarTrip` using its globally unique id. */
  deleteCarTrip?: Maybe<DeleteCarTripPayload>;
  /** Deletes a single `CarTrip` using a unique key. */
  deleteCarTripByTripid?: Maybe<DeleteCarTripPayload>;
  /** Deletes a single `Codetable` using its globally unique id. */
  deleteCodetable?: Maybe<DeleteCodetablePayload>;
  /** Deletes a single `Codetable` using a unique key. */
  deleteCodetableByTablenameAndColnameAndColvalueAndLanguage?: Maybe<DeleteCodetablePayload>;
  /** Deletes a single `Communication` using its globally unique id. */
  deleteCommunication?: Maybe<DeleteCommunicationPayload>;
  /** Deletes a single `Communication` using a unique key. */
  deleteCommunicationByCommunicationid?: Maybe<DeleteCommunicationPayload>;
  /** Deletes a single `DefaultSetting` using its globally unique id. */
  deleteDefaultSetting?: Maybe<DeleteDefaultSettingPayload>;
  /** Deletes a single `DefaultSetting` using a unique key. */
  deleteDefaultSettingByObjectidAndObjecttypeAndObjectvalue?: Maybe<DeleteDefaultSettingPayload>;
  /** Deletes a single `Document` using its globally unique id. */
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `Document` using a unique key. */
  deleteDocumentByDocumentid?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `Document` using a unique key. */
  deleteDocumentByNameAndObjectidAndObjecttype?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `FinDefaultVatItem` using its globally unique id. */
  deleteFinDefaultVatItem?: Maybe<DeleteFinDefaultVatItemPayload>;
  /** Deletes a single `FinDefaultVatItem` using a unique key. */
  deleteFinDefaultVatItemByVatitemid?: Maybe<DeleteFinDefaultVatItemPayload>;
  /** Deletes a single `FinInvoice` using its globally unique id. */
  deleteFinInvoice?: Maybe<DeleteFinInvoicePayload>;
  /** Deletes a single `FinInvoice` using a unique key. */
  deleteFinInvoiceByInvoiceid?: Maybe<DeleteFinInvoicePayload>;
  /** Deletes a single `FinInvoice` using a unique key. */
  deleteFinInvoiceByInvoicenumber?: Maybe<DeleteFinInvoicePayload>;
  /** Deletes a single `FinInvoiceItem` using its globally unique id. */
  deleteFinInvoiceItem?: Maybe<DeleteFinInvoiceItemPayload>;
  /** Deletes a single `FinInvoiceItem` using a unique key. */
  deleteFinInvoiceItemByInvoiceitemid?: Maybe<DeleteFinInvoiceItemPayload>;
  /** Deletes a single `FinProduct` using its globally unique id. */
  deleteFinProduct?: Maybe<DeleteFinProductPayload>;
  /** Deletes a single `FinProduct` using a unique key. */
  deleteFinProductByProductid?: Maybe<DeleteFinProductPayload>;
  /** Deletes a single `FinVatItem` using its globally unique id. */
  deleteFinVatItem?: Maybe<DeleteFinVatItemPayload>;
  /** Deletes a single `FinVatItem` using a unique key. */
  deleteFinVatItemByVatitemid?: Maybe<DeleteFinVatItemPayload>;
  /** Deletes a single `Instrument` using its globally unique id. */
  deleteInstrument?: Maybe<DeleteInstrumentPayload>;
  /** Deletes a single `Instrument` using a unique key. */
  deleteInstrumentByInstrumentid?: Maybe<DeleteInstrumentPayload>;
  /** Deletes a single `Invoicenumber` using its globally unique id. */
  deleteInvoicenumber?: Maybe<DeleteInvoicenumberPayload>;
  /** Deletes a single `Invoicenumber` using a unique key. */
  deleteInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumber?: Maybe<DeleteInvoicenumberPayload>;
  /** Deletes a single `KnexMigration` using its globally unique id. */
  deleteKnexMigration?: Maybe<DeleteKnexMigrationPayload>;
  /** Deletes a single `KnexMigration` using a unique key. */
  deleteKnexMigrationById?: Maybe<DeleteKnexMigrationPayload>;
  /** Deletes a single `KnexMigrationsLock` using its globally unique id. */
  deleteKnexMigrationsLock?: Maybe<DeleteKnexMigrationsLockPayload>;
  /** Deletes a single `KnexMigrationsLock` using a unique key. */
  deleteKnexMigrationsLockByIndex?: Maybe<DeleteKnexMigrationsLockPayload>;
  /** Deletes a single `Organization` using its globally unique id. */
  deleteOrganization?: Maybe<DeleteOrganizationPayload>;
  /** Deletes a single `Organization` using a unique key. */
  deleteOrganizationByOrganizationid?: Maybe<DeleteOrganizationPayload>;
  /** Deletes a single `Organizationaddress` using its globally unique id. */
  deleteOrganizationaddress?: Maybe<DeleteOrganizationaddressPayload>;
  /** Deletes a single `Organizationaddress` using a unique key. */
  deleteOrganizationaddressByOrganizationidAndAddressid?: Maybe<DeleteOrganizationaddressPayload>;
  /** Deletes a single `Organizationattribute` using its globally unique id. */
  deleteOrganizationattribute?: Maybe<DeleteOrganizationattributePayload>;
  /** Deletes a single `Organizationattribute` using a unique key. */
  deleteOrganizationattributeByOrganizationidAndTableidAndAttribid?: Maybe<DeleteOrganizationattributePayload>;
  /** Deletes a single `Organizationbankaccount` using its globally unique id. */
  deleteOrganizationbankaccount?: Maybe<DeleteOrganizationbankaccountPayload>;
  /** Deletes a single `Organizationbankaccount` using a unique key. */
  deleteOrganizationbankaccountByOrganizationidAndAccountid?: Maybe<DeleteOrganizationbankaccountPayload>;
  /** Deletes a single `Organizationcommunication` using its globally unique id. */
  deleteOrganizationcommunication?: Maybe<DeleteOrganizationcommunicationPayload>;
  /** Deletes a single `Organizationcommunication` using a unique key. */
  deleteOrganizationcommunicationByOrganizationidAndCommunicationid?: Maybe<DeleteOrganizationcommunicationPayload>;
  /** Deletes a single `Organizationperson` using its globally unique id. */
  deleteOrganizationperson?: Maybe<DeleteOrganizationpersonPayload>;
  /** Deletes a single `Organizationperson` using a unique key. */
  deleteOrganizationpersonByOrganizationidAndPersonidAndRoletype?: Maybe<DeleteOrganizationpersonPayload>;
  /** Deletes a single `Person` using its globally unique id. */
  deletePerson?: Maybe<DeletePersonPayload>;
  /** Deletes a single `Person` using a unique key. */
  deletePersonByPersonid?: Maybe<DeletePersonPayload>;
  /** Deletes a single `Personaddress` using its globally unique id. */
  deletePersonaddress?: Maybe<DeletePersonaddressPayload>;
  /** Deletes a single `Personaddress` using a unique key. */
  deletePersonaddressByPersonidAndAddressid?: Maybe<DeletePersonaddressPayload>;
  /** Deletes a single `Personattribute` using its globally unique id. */
  deletePersonattribute?: Maybe<DeletePersonattributePayload>;
  /** Deletes a single `Personattribute` using a unique key. */
  deletePersonattributeByPersonidAndTableidAndAttribid?: Maybe<DeletePersonattributePayload>;
  /** Deletes a single `Personbankaccount` using its globally unique id. */
  deletePersonbankaccount?: Maybe<DeletePersonbankaccountPayload>;
  /** Deletes a single `Personbankaccount` using a unique key. */
  deletePersonbankaccountByPersonidAndAccountid?: Maybe<DeletePersonbankaccountPayload>;
  /** Deletes a single `Personcommunication` using its globally unique id. */
  deletePersoncommunication?: Maybe<DeletePersoncommunicationPayload>;
  /** Deletes a single `Personcommunication` using a unique key. */
  deletePersoncommunicationByPersonidAndCommunicationid?: Maybe<DeletePersoncommunicationPayload>;
  /** Deletes a single `Personinstrument` using its globally unique id. */
  deletePersoninstrument?: Maybe<DeletePersoninstrumentPayload>;
  /** Deletes a single `Personinstrument` using a unique key. */
  deletePersoninstrumentByPersonidAndInstrumentid?: Maybe<DeletePersoninstrumentPayload>;
  /** Deletes a single `UserSetting` using its globally unique id. */
  deleteUserSetting?: Maybe<DeleteUserSettingPayload>;
  /** Deletes a single `UserSetting` using a unique key. */
  deleteUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalue?: Maybe<DeleteUserSettingPayload>;
  /** Deletes a single `Vat` using its globally unique id. */
  deleteVat?: Maybe<DeleteVatPayload>;
  /** Deletes a single `Vat` using a unique key. */
  deleteVatByVatid?: Maybe<DeleteVatPayload>;
  /** Updates a single `Address` using its globally unique id and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddressByAddressid?: Maybe<UpdateAddressPayload>;
  /** Updates a single `Attribute` using its globally unique id and a patch. */
  updateAttribute?: Maybe<UpdateAttributePayload>;
  /** Updates a single `Attribute` using a unique key and a patch. */
  updateAttributeByTableidAndAttribid?: Maybe<UpdateAttributePayload>;
  /** Updates a single `Attributedescription` using its globally unique id and a patch. */
  updateAttributedescription?: Maybe<UpdateAttributedescriptionPayload>;
  /** Updates a single `Attributedescription` using a unique key and a patch. */
  updateAttributedescriptionByTableidAndAttribidAndLanguage?: Maybe<UpdateAttributedescriptionPayload>;
  /** Updates a single `Bankaccount` using its globally unique id and a patch. */
  updateBankaccount?: Maybe<UpdateBankaccountPayload>;
  /** Updates a single `Bankaccount` using a unique key and a patch. */
  updateBankaccountByAccountid?: Maybe<UpdateBankaccountPayload>;
  /** Updates a single `Bankcode` using its globally unique id and a patch. */
  updateBankcode?: Maybe<UpdateBankcodePayload>;
  /** Updates a single `Bankcode` using a unique key and a patch. */
  updateBankcodeByBankcodeAndCitycode?: Maybe<UpdateBankcodePayload>;
  /** Updates a single `Car` using its globally unique id and a patch. */
  updateCar?: Maybe<UpdateCarPayload>;
  /** Updates a single `Car` using a unique key and a patch. */
  updateCarByCarid?: Maybe<UpdateCarPayload>;
  /** Updates a single `CarTrip` using its globally unique id and a patch. */
  updateCarTrip?: Maybe<UpdateCarTripPayload>;
  /** Updates a single `CarTrip` using a unique key and a patch. */
  updateCarTripByTripid?: Maybe<UpdateCarTripPayload>;
  /** Updates a single `Codetable` using its globally unique id and a patch. */
  updateCodetable?: Maybe<UpdateCodetablePayload>;
  /** Updates a single `Codetable` using a unique key and a patch. */
  updateCodetableByTablenameAndColnameAndColvalueAndLanguage?: Maybe<UpdateCodetablePayload>;
  /** Updates a single `Communication` using its globally unique id and a patch. */
  updateCommunication?: Maybe<UpdateCommunicationPayload>;
  /** Updates a single `Communication` using a unique key and a patch. */
  updateCommunicationByCommunicationid?: Maybe<UpdateCommunicationPayload>;
  /** Updates a single `DefaultSetting` using its globally unique id and a patch. */
  updateDefaultSetting?: Maybe<UpdateDefaultSettingPayload>;
  /** Updates a single `DefaultSetting` using a unique key and a patch. */
  updateDefaultSettingByObjectidAndObjecttypeAndObjectvalue?: Maybe<UpdateDefaultSettingPayload>;
  /** Updates a single `Document` using its globally unique id and a patch. */
  updateDocument?: Maybe<UpdateDocumentPayload>;
  /** Updates a single `Document` using a unique key and a patch. */
  updateDocumentByDocumentid?: Maybe<UpdateDocumentPayload>;
  /** Updates a single `Document` using a unique key and a patch. */
  updateDocumentByNameAndObjectidAndObjecttype?: Maybe<UpdateDocumentPayload>;
  /** Updates a single `FinDefaultVatItem` using its globally unique id and a patch. */
  updateFinDefaultVatItem?: Maybe<UpdateFinDefaultVatItemPayload>;
  /** Updates a single `FinDefaultVatItem` using a unique key and a patch. */
  updateFinDefaultVatItemByVatitemid?: Maybe<UpdateFinDefaultVatItemPayload>;
  /** Updates a single `FinInvoice` using its globally unique id and a patch. */
  updateFinInvoice?: Maybe<UpdateFinInvoicePayload>;
  /** Updates a single `FinInvoice` using a unique key and a patch. */
  updateFinInvoiceByInvoiceid?: Maybe<UpdateFinInvoicePayload>;
  /** Updates a single `FinInvoice` using a unique key and a patch. */
  updateFinInvoiceByInvoicenumber?: Maybe<UpdateFinInvoicePayload>;
  /** Updates a single `FinInvoiceItem` using its globally unique id and a patch. */
  updateFinInvoiceItem?: Maybe<UpdateFinInvoiceItemPayload>;
  /** Updates a single `FinInvoiceItem` using a unique key and a patch. */
  updateFinInvoiceItemByInvoiceitemid?: Maybe<UpdateFinInvoiceItemPayload>;
  /** Updates a single `FinProduct` using its globally unique id and a patch. */
  updateFinProduct?: Maybe<UpdateFinProductPayload>;
  /** Updates a single `FinProduct` using a unique key and a patch. */
  updateFinProductByProductid?: Maybe<UpdateFinProductPayload>;
  /** Updates a single `FinVatItem` using its globally unique id and a patch. */
  updateFinVatItem?: Maybe<UpdateFinVatItemPayload>;
  /** Updates a single `FinVatItem` using a unique key and a patch. */
  updateFinVatItemByVatitemid?: Maybe<UpdateFinVatItemPayload>;
  /** Updates a single `Instrument` using its globally unique id and a patch. */
  updateInstrument?: Maybe<UpdateInstrumentPayload>;
  /** Updates a single `Instrument` using a unique key and a patch. */
  updateInstrumentByInstrumentid?: Maybe<UpdateInstrumentPayload>;
  /** Updates a single `Invoicenumber` using its globally unique id and a patch. */
  updateInvoicenumber?: Maybe<UpdateInvoicenumberPayload>;
  /** Updates a single `Invoicenumber` using a unique key and a patch. */
  updateInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumber?: Maybe<UpdateInvoicenumberPayload>;
  /** Updates a single `KnexMigration` using its globally unique id and a patch. */
  updateKnexMigration?: Maybe<UpdateKnexMigrationPayload>;
  /** Updates a single `KnexMigration` using a unique key and a patch. */
  updateKnexMigrationById?: Maybe<UpdateKnexMigrationPayload>;
  /** Updates a single `KnexMigrationsLock` using its globally unique id and a patch. */
  updateKnexMigrationsLock?: Maybe<UpdateKnexMigrationsLockPayload>;
  /** Updates a single `KnexMigrationsLock` using a unique key and a patch. */
  updateKnexMigrationsLockByIndex?: Maybe<UpdateKnexMigrationsLockPayload>;
  /** Updates a single `Organization` using its globally unique id and a patch. */
  updateOrganization?: Maybe<UpdateOrganizationPayload>;
  /** Updates a single `Organization` using a unique key and a patch. */
  updateOrganizationByOrganizationid?: Maybe<UpdateOrganizationPayload>;
  /** Updates a single `Organizationaddress` using its globally unique id and a patch. */
  updateOrganizationaddress?: Maybe<UpdateOrganizationaddressPayload>;
  /** Updates a single `Organizationaddress` using a unique key and a patch. */
  updateOrganizationaddressByOrganizationidAndAddressid?: Maybe<UpdateOrganizationaddressPayload>;
  /** Updates a single `Organizationattribute` using its globally unique id and a patch. */
  updateOrganizationattribute?: Maybe<UpdateOrganizationattributePayload>;
  /** Updates a single `Organizationattribute` using a unique key and a patch. */
  updateOrganizationattributeByOrganizationidAndTableidAndAttribid?: Maybe<UpdateOrganizationattributePayload>;
  /** Updates a single `Organizationbankaccount` using its globally unique id and a patch. */
  updateOrganizationbankaccount?: Maybe<UpdateOrganizationbankaccountPayload>;
  /** Updates a single `Organizationbankaccount` using a unique key and a patch. */
  updateOrganizationbankaccountByOrganizationidAndAccountid?: Maybe<UpdateOrganizationbankaccountPayload>;
  /** Updates a single `Organizationcommunication` using its globally unique id and a patch. */
  updateOrganizationcommunication?: Maybe<UpdateOrganizationcommunicationPayload>;
  /** Updates a single `Organizationcommunication` using a unique key and a patch. */
  updateOrganizationcommunicationByOrganizationidAndCommunicationid?: Maybe<UpdateOrganizationcommunicationPayload>;
  /** Updates a single `Organizationperson` using its globally unique id and a patch. */
  updateOrganizationperson?: Maybe<UpdateOrganizationpersonPayload>;
  /** Updates a single `Organizationperson` using a unique key and a patch. */
  updateOrganizationpersonByOrganizationidAndPersonidAndRoletype?: Maybe<UpdateOrganizationpersonPayload>;
  /** Updates a single `Person` using its globally unique id and a patch. */
  updatePerson?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Person` using a unique key and a patch. */
  updatePersonByPersonid?: Maybe<UpdatePersonPayload>;
  /** Updates a single `Personaddress` using its globally unique id and a patch. */
  updatePersonaddress?: Maybe<UpdatePersonaddressPayload>;
  /** Updates a single `Personaddress` using a unique key and a patch. */
  updatePersonaddressByPersonidAndAddressid?: Maybe<UpdatePersonaddressPayload>;
  /** Updates a single `Personattribute` using its globally unique id and a patch. */
  updatePersonattribute?: Maybe<UpdatePersonattributePayload>;
  /** Updates a single `Personattribute` using a unique key and a patch. */
  updatePersonattributeByPersonidAndTableidAndAttribid?: Maybe<UpdatePersonattributePayload>;
  /** Updates a single `Personbankaccount` using its globally unique id and a patch. */
  updatePersonbankaccount?: Maybe<UpdatePersonbankaccountPayload>;
  /** Updates a single `Personbankaccount` using a unique key and a patch. */
  updatePersonbankaccountByPersonidAndAccountid?: Maybe<UpdatePersonbankaccountPayload>;
  /** Updates a single `Personcommunication` using its globally unique id and a patch. */
  updatePersoncommunication?: Maybe<UpdatePersoncommunicationPayload>;
  /** Updates a single `Personcommunication` using a unique key and a patch. */
  updatePersoncommunicationByPersonidAndCommunicationid?: Maybe<UpdatePersoncommunicationPayload>;
  /** Updates a single `Personinstrument` using its globally unique id and a patch. */
  updatePersoninstrument?: Maybe<UpdatePersoninstrumentPayload>;
  /** Updates a single `Personinstrument` using a unique key and a patch. */
  updatePersoninstrumentByPersonidAndInstrumentid?: Maybe<UpdatePersoninstrumentPayload>;
  /** Updates a single `UserSetting` using its globally unique id and a patch. */
  updateUserSetting?: Maybe<UpdateUserSettingPayload>;
  /** Updates a single `UserSetting` using a unique key and a patch. */
  updateUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalue?: Maybe<UpdateUserSettingPayload>;
  /** Updates a single `Vat` using its globally unique id and a patch. */
  updateVat?: Maybe<UpdateVatPayload>;
  /** Updates a single `Vat` using a unique key and a patch. */
  updateVatByVatid?: Maybe<UpdateVatPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAttributeArgs = {
  input: CreateAttributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAttributedescriptionArgs = {
  input: CreateAttributedescriptionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBankaccountArgs = {
  input: CreateBankaccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBankcodeArgs = {
  input: CreateBankcodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCarArgs = {
  input: CreateCarInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCarTripArgs = {
  input: CreateCarTripInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCodetableArgs = {
  input: CreateCodetableInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCommunicationArgs = {
  input: CreateCommunicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDefaultSettingArgs = {
  input: CreateDefaultSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFinDefaultVatItemArgs = {
  input: CreateFinDefaultVatItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFinInvoiceArgs = {
  input: CreateFinInvoiceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFinInvoiceItemArgs = {
  input: CreateFinInvoiceItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFinProductArgs = {
  input: CreateFinProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFinVatItemArgs = {
  input: CreateFinVatItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInstrumentArgs = {
  input: CreateInstrumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInvoicenumberArgs = {
  input: CreateInvoicenumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateKnexMigrationArgs = {
  input: CreateKnexMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateKnexMigrationsLockArgs = {
  input: CreateKnexMigrationsLockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationaddressArgs = {
  input: CreateOrganizationaddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationattributeArgs = {
  input: CreateOrganizationattributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationbankaccountArgs = {
  input: CreateOrganizationbankaccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationcommunicationArgs = {
  input: CreateOrganizationcommunicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateOrganizationpersonArgs = {
  input: CreateOrganizationpersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersonArgs = {
  input: CreatePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersonaddressArgs = {
  input: CreatePersonaddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersonattributeArgs = {
  input: CreatePersonattributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersonbankaccountArgs = {
  input: CreatePersonbankaccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersoncommunicationArgs = {
  input: CreatePersoncommunicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePersoninstrumentArgs = {
  input: CreatePersoninstrumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserSettingArgs = {
  input: CreateUserSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateVatArgs = {
  input: CreateVatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByAddressidArgs = {
  input: DeleteAddressByAddressidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAttributeArgs = {
  input: DeleteAttributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAttributeByTableidAndAttribidArgs = {
  input: DeleteAttributeByTableidAndAttribidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAttributedescriptionArgs = {
  input: DeleteAttributedescriptionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAttributedescriptionByTableidAndAttribidAndLanguageArgs = {
  input: DeleteAttributedescriptionByTableidAndAttribidAndLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBankaccountArgs = {
  input: DeleteBankaccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBankaccountByAccountidArgs = {
  input: DeleteBankaccountByAccountidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBankcodeArgs = {
  input: DeleteBankcodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBankcodeByBankcodeAndCitycodeArgs = {
  input: DeleteBankcodeByBankcodeAndCitycodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCarArgs = {
  input: DeleteCarInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCarByCaridArgs = {
  input: DeleteCarByCaridInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCarTripArgs = {
  input: DeleteCarTripInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCarTripByTripidArgs = {
  input: DeleteCarTripByTripidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCodetableArgs = {
  input: DeleteCodetableInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCodetableByTablenameAndColnameAndColvalueAndLanguageArgs = {
  input: DeleteCodetableByTablenameAndColnameAndColvalueAndLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCommunicationArgs = {
  input: DeleteCommunicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCommunicationByCommunicationidArgs = {
  input: DeleteCommunicationByCommunicationidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDefaultSettingArgs = {
  input: DeleteDefaultSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDefaultSettingByObjectidAndObjecttypeAndObjectvalueArgs = {
  input: DeleteDefaultSettingByObjectidAndObjecttypeAndObjectvalueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentByDocumentidArgs = {
  input: DeleteDocumentByDocumentidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentByNameAndObjectidAndObjecttypeArgs = {
  input: DeleteDocumentByNameAndObjectidAndObjecttypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinDefaultVatItemArgs = {
  input: DeleteFinDefaultVatItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinDefaultVatItemByVatitemidArgs = {
  input: DeleteFinDefaultVatItemByVatitemidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinInvoiceArgs = {
  input: DeleteFinInvoiceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinInvoiceByInvoiceidArgs = {
  input: DeleteFinInvoiceByInvoiceidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinInvoiceByInvoicenumberArgs = {
  input: DeleteFinInvoiceByInvoicenumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinInvoiceItemArgs = {
  input: DeleteFinInvoiceItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinInvoiceItemByInvoiceitemidArgs = {
  input: DeleteFinInvoiceItemByInvoiceitemidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinProductArgs = {
  input: DeleteFinProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinProductByProductidArgs = {
  input: DeleteFinProductByProductidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinVatItemArgs = {
  input: DeleteFinVatItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFinVatItemByVatitemidArgs = {
  input: DeleteFinVatItemByVatitemidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInstrumentArgs = {
  input: DeleteInstrumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInstrumentByInstrumentidArgs = {
  input: DeleteInstrumentByInstrumentidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInvoicenumberArgs = {
  input: DeleteInvoicenumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumberArgs = {
  input: DeleteInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationArgs = {
  input: DeleteKnexMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationByIdArgs = {
  input: DeleteKnexMigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationsLockArgs = {
  input: DeleteKnexMigrationsLockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteKnexMigrationsLockByIndexArgs = {
  input: DeleteKnexMigrationsLockByIndexInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationArgs = {
  input: DeleteOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationByOrganizationidArgs = {
  input: DeleteOrganizationByOrganizationidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationaddressArgs = {
  input: DeleteOrganizationaddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationaddressByOrganizationidAndAddressidArgs = {
  input: DeleteOrganizationaddressByOrganizationidAndAddressidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationattributeArgs = {
  input: DeleteOrganizationattributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationattributeByOrganizationidAndTableidAndAttribidArgs = {
  input: DeleteOrganizationattributeByOrganizationidAndTableidAndAttribidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationbankaccountArgs = {
  input: DeleteOrganizationbankaccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationbankaccountByOrganizationidAndAccountidArgs = {
  input: DeleteOrganizationbankaccountByOrganizationidAndAccountidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationcommunicationArgs = {
  input: DeleteOrganizationcommunicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationcommunicationByOrganizationidAndCommunicationidArgs = {
  input: DeleteOrganizationcommunicationByOrganizationidAndCommunicationidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationpersonArgs = {
  input: DeleteOrganizationpersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteOrganizationpersonByOrganizationidAndPersonidAndRoletypeArgs = {
  input: DeleteOrganizationpersonByOrganizationidAndPersonidAndRoletypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonArgs = {
  input: DeletePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonByPersonidArgs = {
  input: DeletePersonByPersonidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonaddressArgs = {
  input: DeletePersonaddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonaddressByPersonidAndAddressidArgs = {
  input: DeletePersonaddressByPersonidAndAddressidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonattributeArgs = {
  input: DeletePersonattributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonattributeByPersonidAndTableidAndAttribidArgs = {
  input: DeletePersonattributeByPersonidAndTableidAndAttribidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonbankaccountArgs = {
  input: DeletePersonbankaccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersonbankaccountByPersonidAndAccountidArgs = {
  input: DeletePersonbankaccountByPersonidAndAccountidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersoncommunicationArgs = {
  input: DeletePersoncommunicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersoncommunicationByPersonidAndCommunicationidArgs = {
  input: DeletePersoncommunicationByPersonidAndCommunicationidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersoninstrumentArgs = {
  input: DeletePersoninstrumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePersoninstrumentByPersonidAndInstrumentidArgs = {
  input: DeletePersoninstrumentByPersonidAndInstrumentidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserSettingArgs = {
  input: DeleteUserSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalueArgs = {
  input: DeleteUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVatArgs = {
  input: DeleteVatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteVatByVatidArgs = {
  input: DeleteVatByVatidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByAddressidArgs = {
  input: UpdateAddressByAddressidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttributeArgs = {
  input: UpdateAttributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttributeByTableidAndAttribidArgs = {
  input: UpdateAttributeByTableidAndAttribidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttributedescriptionArgs = {
  input: UpdateAttributedescriptionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAttributedescriptionByTableidAndAttribidAndLanguageArgs = {
  input: UpdateAttributedescriptionByTableidAndAttribidAndLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBankaccountArgs = {
  input: UpdateBankaccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBankaccountByAccountidArgs = {
  input: UpdateBankaccountByAccountidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBankcodeArgs = {
  input: UpdateBankcodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBankcodeByBankcodeAndCitycodeArgs = {
  input: UpdateBankcodeByBankcodeAndCitycodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCarArgs = {
  input: UpdateCarInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCarByCaridArgs = {
  input: UpdateCarByCaridInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCarTripArgs = {
  input: UpdateCarTripInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCarTripByTripidArgs = {
  input: UpdateCarTripByTripidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCodetableArgs = {
  input: UpdateCodetableInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCodetableByTablenameAndColnameAndColvalueAndLanguageArgs = {
  input: UpdateCodetableByTablenameAndColnameAndColvalueAndLanguageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCommunicationArgs = {
  input: UpdateCommunicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCommunicationByCommunicationidArgs = {
  input: UpdateCommunicationByCommunicationidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDefaultSettingArgs = {
  input: UpdateDefaultSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDefaultSettingByObjectidAndObjecttypeAndObjectvalueArgs = {
  input: UpdateDefaultSettingByObjectidAndObjecttypeAndObjectvalueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentArgs = {
  input: UpdateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentByDocumentidArgs = {
  input: UpdateDocumentByDocumentidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentByNameAndObjectidAndObjecttypeArgs = {
  input: UpdateDocumentByNameAndObjectidAndObjecttypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinDefaultVatItemArgs = {
  input: UpdateFinDefaultVatItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinDefaultVatItemByVatitemidArgs = {
  input: UpdateFinDefaultVatItemByVatitemidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinInvoiceArgs = {
  input: UpdateFinInvoiceInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinInvoiceByInvoiceidArgs = {
  input: UpdateFinInvoiceByInvoiceidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinInvoiceByInvoicenumberArgs = {
  input: UpdateFinInvoiceByInvoicenumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinInvoiceItemArgs = {
  input: UpdateFinInvoiceItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinInvoiceItemByInvoiceitemidArgs = {
  input: UpdateFinInvoiceItemByInvoiceitemidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinProductArgs = {
  input: UpdateFinProductInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinProductByProductidArgs = {
  input: UpdateFinProductByProductidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinVatItemArgs = {
  input: UpdateFinVatItemInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFinVatItemByVatitemidArgs = {
  input: UpdateFinVatItemByVatitemidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInstrumentArgs = {
  input: UpdateInstrumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInstrumentByInstrumentidArgs = {
  input: UpdateInstrumentByInstrumentidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInvoicenumberArgs = {
  input: UpdateInvoicenumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumberArgs = {
  input: UpdateInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationArgs = {
  input: UpdateKnexMigrationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationByIdArgs = {
  input: UpdateKnexMigrationByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationsLockArgs = {
  input: UpdateKnexMigrationsLockInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateKnexMigrationsLockByIndexArgs = {
  input: UpdateKnexMigrationsLockByIndexInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationByOrganizationidArgs = {
  input: UpdateOrganizationByOrganizationidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationaddressArgs = {
  input: UpdateOrganizationaddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationaddressByOrganizationidAndAddressidArgs = {
  input: UpdateOrganizationaddressByOrganizationidAndAddressidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationattributeArgs = {
  input: UpdateOrganizationattributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationattributeByOrganizationidAndTableidAndAttribidArgs = {
  input: UpdateOrganizationattributeByOrganizationidAndTableidAndAttribidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationbankaccountArgs = {
  input: UpdateOrganizationbankaccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationbankaccountByOrganizationidAndAccountidArgs = {
  input: UpdateOrganizationbankaccountByOrganizationidAndAccountidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationcommunicationArgs = {
  input: UpdateOrganizationcommunicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationcommunicationByOrganizationidAndCommunicationidArgs = {
  input: UpdateOrganizationcommunicationByOrganizationidAndCommunicationidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationpersonArgs = {
  input: UpdateOrganizationpersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateOrganizationpersonByOrganizationidAndPersonidAndRoletypeArgs = {
  input: UpdateOrganizationpersonByOrganizationidAndPersonidAndRoletypeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonArgs = {
  input: UpdatePersonInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonByPersonidArgs = {
  input: UpdatePersonByPersonidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonaddressArgs = {
  input: UpdatePersonaddressInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonaddressByPersonidAndAddressidArgs = {
  input: UpdatePersonaddressByPersonidAndAddressidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonattributeArgs = {
  input: UpdatePersonattributeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonattributeByPersonidAndTableidAndAttribidArgs = {
  input: UpdatePersonattributeByPersonidAndTableidAndAttribidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonbankaccountArgs = {
  input: UpdatePersonbankaccountInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersonbankaccountByPersonidAndAccountidArgs = {
  input: UpdatePersonbankaccountByPersonidAndAccountidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersoncommunicationArgs = {
  input: UpdatePersoncommunicationInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersoncommunicationByPersonidAndCommunicationidArgs = {
  input: UpdatePersoncommunicationByPersonidAndCommunicationidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersoninstrumentArgs = {
  input: UpdatePersoninstrumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePersoninstrumentByPersonidAndInstrumentidArgs = {
  input: UpdatePersoninstrumentByPersonidAndInstrumentidInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserSettingArgs = {
  input: UpdateUserSettingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalueArgs = {
  input: UpdateUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalueInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVatArgs = {
  input: UpdateVatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateVatByVatidArgs = {
  input: UpdateVatByVatidInput;
};

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
};

export type Organization = Node & {
  __typename?: 'Organization';
  description?: Maybe<Scalars['String']>;
  enddate?: Maybe<Scalars['Datetime']>;
  /** Reads and enables pagination through a set of `FinDefaultVatItem`. */
  finDefaultVatItemsByOrganizationid: FinDefaultVatItemsConnection;
  /** Reads and enables pagination through a set of `FinInvoice`. */
  finInvoicesByOrganizationid: FinInvoicesConnection;
  /** Reads and enables pagination through a set of `FinVatItem`. */
  finVatItemsByOrganizationid: FinVatItemsConnection;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `Invoicenumber`. */
  invoicenumbersByInvoiceOrganizationid: InvoicenumbersConnection;
  kvknumber?: Maybe<Scalars['String']>;
  lastupdate: Scalars['Datetime'];
  name: Scalars['String'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Organizationaddress`. */
  organizationaddressesByOrganizationid: OrganizationaddressesConnection;
  /** Reads and enables pagination through a set of `Organizationattribute`. */
  organizationattributesByOrganizationid: OrganizationattributesConnection;
  /** Reads and enables pagination through a set of `Organizationbankaccount`. */
  organizationbankaccountsByOrganizationid: OrganizationbankaccountsConnection;
  /** Reads and enables pagination through a set of `Organizationcommunication`. */
  organizationcommunicationsByOrganizationid: OrganizationcommunicationsConnection;
  organizationid: Scalars['Int'];
  organizationidParent?: Maybe<Scalars['Int']>;
  /** Reads and enables pagination through a set of `Organizationperson`. */
  organizationpeopleByOrganizationid: OrganizationpeopleConnection;
  organizationtype: Scalars['String'];
  remarks?: Maybe<Scalars['String']>;
  startdate: Scalars['Datetime'];
  updateby: Scalars['String'];
  vatnumber?: Maybe<Scalars['String']>;
};


export type OrganizationFinDefaultVatItemsByOrganizationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinDefaultVatItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinDefaultVatItemsOrderBy>>;
};


export type OrganizationFinInvoicesByOrganizationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinInvoiceCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinInvoicesOrderBy>>;
};


export type OrganizationFinVatItemsByOrganizationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinVatItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinVatItemsOrderBy>>;
};


export type OrganizationInvoicenumbersByInvoiceOrganizationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InvoicenumberCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InvoicenumbersOrderBy>>;
};


export type OrganizationOrganizationaddressesByOrganizationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationaddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationaddressesOrderBy>>;
};


export type OrganizationOrganizationattributesByOrganizationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationattributeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationattributesOrderBy>>;
};


export type OrganizationOrganizationbankaccountsByOrganizationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationbankaccountCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationbankaccountsOrderBy>>;
};


export type OrganizationOrganizationcommunicationsByOrganizationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationcommunicationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationcommunicationsOrderBy>>;
};


export type OrganizationOrganizationpeopleByOrganizationidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationpersonCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationpeopleOrderBy>>;
};

/**
 * A condition to be used against `Organization` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OrganizationCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `enddate` field. */
  enddate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `kvknumber` field. */
  kvknumber?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `organizationid` field. */
  organizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `organizationidParent` field. */
  organizationidParent?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `organizationtype` field. */
  organizationtype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `remarks` field. */
  remarks?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `startdate` field. */
  startdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vatnumber` field. */
  vatnumber?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Organization` */
export type OrganizationInput = {
  description?: InputMaybe<Scalars['String']>;
  enddate?: InputMaybe<Scalars['Datetime']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  kvknumber?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  name: Scalars['String'];
  organizationid?: InputMaybe<Scalars['Int']>;
  organizationidParent?: InputMaybe<Scalars['Int']>;
  organizationtype: Scalars['String'];
  remarks?: InputMaybe<Scalars['String']>;
  startdate?: InputMaybe<Scalars['Datetime']>;
  updateby: Scalars['String'];
  vatnumber?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `Organization`. Fields that are set will be updated. */
export type OrganizationPatch = {
  description?: InputMaybe<Scalars['String']>;
  enddate?: InputMaybe<Scalars['Datetime']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  kvknumber?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  name?: InputMaybe<Scalars['String']>;
  organizationid?: InputMaybe<Scalars['Int']>;
  organizationidParent?: InputMaybe<Scalars['Int']>;
  organizationtype?: InputMaybe<Scalars['String']>;
  remarks?: InputMaybe<Scalars['String']>;
  startdate?: InputMaybe<Scalars['Datetime']>;
  updateby?: InputMaybe<Scalars['String']>;
  vatnumber?: InputMaybe<Scalars['String']>;
};

export type Organizationaddress = Node & {
  __typename?: 'Organizationaddress';
  /** Reads a single `Address` that is related to this `Organizationaddress`. */
  addressByAddressid?: Maybe<Address>;
  addressid: Scalars['Int'];
  addresstype: Scalars['String'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` that is related to this `Organizationaddress`. */
  organizationByOrganizationid?: Maybe<Organization>;
  organizationid: Scalars['Int'];
  preferred: Scalars['Int'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Organizationaddress` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type OrganizationaddressCondition = {
  /** Checks for equality with the object’s `addressid` field. */
  addressid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `addresstype` field. */
  addresstype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `organizationid` field. */
  organizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `preferred` field. */
  preferred?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Organizationaddress` */
export type OrganizationaddressInput = {
  addressid: Scalars['Int'];
  addresstype: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid: Scalars['Int'];
  preferred: Scalars['Int'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Organizationaddress`. Fields that are set will be updated. */
export type OrganizationaddressPatch = {
  addressid?: InputMaybe<Scalars['Int']>;
  addresstype?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid?: InputMaybe<Scalars['Int']>;
  preferred?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Organizationaddress` values. */
export type OrganizationaddressesConnection = {
  __typename?: 'OrganizationaddressesConnection';
  /** A list of edges which contains the `Organizationaddress` and cursor to aid in pagination. */
  edges: Array<OrganizationaddressesEdge>;
  /** A list of `Organizationaddress` objects. */
  nodes: Array<Maybe<Organizationaddress>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organizationaddress` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Organizationaddress` edge in the connection. */
export type OrganizationaddressesEdge = {
  __typename?: 'OrganizationaddressesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Organizationaddress` at the end of the edge. */
  node?: Maybe<Organizationaddress>;
};

/** Methods to use when ordering `Organizationaddress`. */
export enum OrganizationaddressesOrderBy {
  AddressidAsc = 'ADDRESSID_ASC',
  AddressidDesc = 'ADDRESSID_DESC',
  AddresstypeAsc = 'ADDRESSTYPE_ASC',
  AddresstypeDesc = 'ADDRESSTYPE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PreferredAsc = 'PREFERRED_ASC',
  PreferredDesc = 'PREFERRED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Organizationattribute = Node & {
  __typename?: 'Organizationattribute';
  attribid: Scalars['String'];
  /** Reads a single `Attribute` that is related to this `Organizationattribute`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  attribvalue?: Maybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` that is related to this `Organizationattribute`. */
  organizationByOrganizationid?: Maybe<Organization>;
  organizationid: Scalars['Int'];
  tableid: Scalars['String'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Organizationattribute` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type OrganizationattributeCondition = {
  /** Checks for equality with the object’s `attribid` field. */
  attribid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `attribvalue` field. */
  attribvalue?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `organizationid` field. */
  organizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tableid` field. */
  tableid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Organizationattribute` */
export type OrganizationattributeInput = {
  attribid: Scalars['String'];
  attribvalue?: InputMaybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid: Scalars['Int'];
  tableid: Scalars['String'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Organizationattribute`. Fields that are set will be updated. */
export type OrganizationattributePatch = {
  attribid?: InputMaybe<Scalars['String']>;
  attribvalue?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid?: InputMaybe<Scalars['Int']>;
  tableid?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Organizationattribute` values. */
export type OrganizationattributesConnection = {
  __typename?: 'OrganizationattributesConnection';
  /** A list of edges which contains the `Organizationattribute` and cursor to aid in pagination. */
  edges: Array<OrganizationattributesEdge>;
  /** A list of `Organizationattribute` objects. */
  nodes: Array<Maybe<Organizationattribute>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organizationattribute` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Organizationattribute` edge in the connection. */
export type OrganizationattributesEdge = {
  __typename?: 'OrganizationattributesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Organizationattribute` at the end of the edge. */
  node?: Maybe<Organizationattribute>;
};

/** Methods to use when ordering `Organizationattribute`. */
export enum OrganizationattributesOrderBy {
  AttribidAsc = 'ATTRIBID_ASC',
  AttribidDesc = 'ATTRIBID_DESC',
  AttribvalueAsc = 'ATTRIBVALUE_ASC',
  AttribvalueDesc = 'ATTRIBVALUE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TableidAsc = 'TABLEID_ASC',
  TableidDesc = 'TABLEID_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Organizationbankaccount = Node & {
  __typename?: 'Organizationbankaccount';
  accountid: Scalars['Int'];
  /** Reads a single `Bankaccount` that is related to this `Organizationbankaccount`. */
  bankaccountByAccountid?: Maybe<Bankaccount>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` that is related to this `Organizationbankaccount`. */
  organizationByOrganizationid?: Maybe<Organization>;
  organizationid: Scalars['Int'];
  preferred: Scalars['Int'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Organizationbankaccount` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type OrganizationbankaccountCondition = {
  /** Checks for equality with the object’s `accountid` field. */
  accountid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `organizationid` field. */
  organizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `preferred` field. */
  preferred?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Organizationbankaccount` */
export type OrganizationbankaccountInput = {
  accountid: Scalars['Int'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid: Scalars['Int'];
  preferred?: InputMaybe<Scalars['Int']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Organizationbankaccount`. Fields that are set will be updated. */
export type OrganizationbankaccountPatch = {
  accountid?: InputMaybe<Scalars['Int']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid?: InputMaybe<Scalars['Int']>;
  preferred?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Organizationbankaccount` values. */
export type OrganizationbankaccountsConnection = {
  __typename?: 'OrganizationbankaccountsConnection';
  /** A list of edges which contains the `Organizationbankaccount` and cursor to aid in pagination. */
  edges: Array<OrganizationbankaccountsEdge>;
  /** A list of `Organizationbankaccount` objects. */
  nodes: Array<Maybe<Organizationbankaccount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organizationbankaccount` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Organizationbankaccount` edge in the connection. */
export type OrganizationbankaccountsEdge = {
  __typename?: 'OrganizationbankaccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Organizationbankaccount` at the end of the edge. */
  node?: Maybe<Organizationbankaccount>;
};

/** Methods to use when ordering `Organizationbankaccount`. */
export enum OrganizationbankaccountsOrderBy {
  AccountidAsc = 'ACCOUNTID_ASC',
  AccountidDesc = 'ACCOUNTID_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PreferredAsc = 'PREFERRED_ASC',
  PreferredDesc = 'PREFERRED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Organizationcommunication = Node & {
  __typename?: 'Organizationcommunication';
  /** Reads a single `Communication` that is related to this `Organizationcommunication`. */
  communicationByCommunicationid?: Maybe<Communication>;
  communicationid: Scalars['Int'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` that is related to this `Organizationcommunication`. */
  organizationByOrganizationid?: Maybe<Organization>;
  organizationid: Scalars['Int'];
  preferred: Scalars['Int'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Organizationcommunication` object types. All
 * fields are tested for equality and combined with a logical ‘and.’
 */
export type OrganizationcommunicationCondition = {
  /** Checks for equality with the object’s `communicationid` field. */
  communicationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `organizationid` field. */
  organizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `preferred` field. */
  preferred?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Organizationcommunication` */
export type OrganizationcommunicationInput = {
  communicationid: Scalars['Int'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid: Scalars['Int'];
  preferred?: InputMaybe<Scalars['Int']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Organizationcommunication`. Fields that are set will be updated. */
export type OrganizationcommunicationPatch = {
  communicationid?: InputMaybe<Scalars['Int']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid?: InputMaybe<Scalars['Int']>;
  preferred?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Organizationcommunication` values. */
export type OrganizationcommunicationsConnection = {
  __typename?: 'OrganizationcommunicationsConnection';
  /** A list of edges which contains the `Organizationcommunication` and cursor to aid in pagination. */
  edges: Array<OrganizationcommunicationsEdge>;
  /** A list of `Organizationcommunication` objects. */
  nodes: Array<Maybe<Organizationcommunication>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organizationcommunication` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Organizationcommunication` edge in the connection. */
export type OrganizationcommunicationsEdge = {
  __typename?: 'OrganizationcommunicationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Organizationcommunication` at the end of the edge. */
  node?: Maybe<Organizationcommunication>;
};

/** Methods to use when ordering `Organizationcommunication`. */
export enum OrganizationcommunicationsOrderBy {
  CommunicationidAsc = 'COMMUNICATIONID_ASC',
  CommunicationidDesc = 'COMMUNICATIONID_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PreferredAsc = 'PREFERRED_ASC',
  PreferredDesc = 'PREFERRED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

/** A connection to a list of `Organizationperson` values. */
export type OrganizationpeopleConnection = {
  __typename?: 'OrganizationpeopleConnection';
  /** A list of edges which contains the `Organizationperson` and cursor to aid in pagination. */
  edges: Array<OrganizationpeopleEdge>;
  /** A list of `Organizationperson` objects. */
  nodes: Array<Maybe<Organizationperson>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organizationperson` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Organizationperson` edge in the connection. */
export type OrganizationpeopleEdge = {
  __typename?: 'OrganizationpeopleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Organizationperson` at the end of the edge. */
  node?: Maybe<Organizationperson>;
};

/** Methods to use when ordering `Organizationperson`. */
export enum OrganizationpeopleOrderBy {
  EnddateAsc = 'ENDDATE_ASC',
  EnddateDesc = 'ENDDATE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  PersonidAsc = 'PERSONID_ASC',
  PersonidDesc = 'PERSONID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RemarksAsc = 'REMARKS_ASC',
  RemarksDesc = 'REMARKS_DESC',
  RoletypeAsc = 'ROLETYPE_ASC',
  RoletypeDesc = 'ROLETYPE_DESC',
  StartdateAsc = 'STARTDATE_ASC',
  StartdateDesc = 'STARTDATE_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Organizationperson = Node & {
  __typename?: 'Organizationperson';
  enddate?: Maybe<Scalars['Datetime']>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` that is related to this `Organizationperson`. */
  organizationByOrganizationid?: Maybe<Organization>;
  organizationid: Scalars['Int'];
  /** Reads a single `Person` that is related to this `Organizationperson`. */
  personByPersonid?: Maybe<Person>;
  personid: Scalars['Int'];
  remarks?: Maybe<Scalars['String']>;
  roletype: Scalars['String'];
  startdate: Scalars['Datetime'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Organizationperson` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type OrganizationpersonCondition = {
  /** Checks for equality with the object’s `enddate` field. */
  enddate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `organizationid` field. */
  organizationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `personid` field. */
  personid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `remarks` field. */
  remarks?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `roletype` field. */
  roletype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `startdate` field. */
  startdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Organizationperson` */
export type OrganizationpersonInput = {
  enddate?: InputMaybe<Scalars['Datetime']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid: Scalars['Int'];
  personid: Scalars['Int'];
  remarks?: InputMaybe<Scalars['String']>;
  roletype: Scalars['String'];
  startdate?: InputMaybe<Scalars['Datetime']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Organizationperson`. Fields that are set will be updated. */
export type OrganizationpersonPatch = {
  enddate?: InputMaybe<Scalars['Datetime']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  organizationid?: InputMaybe<Scalars['Int']>;
  personid?: InputMaybe<Scalars['Int']>;
  remarks?: InputMaybe<Scalars['String']>;
  roletype?: InputMaybe<Scalars['String']>;
  startdate?: InputMaybe<Scalars['Datetime']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Organization` values. */
export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  /** A list of edges which contains the `Organization` and cursor to aid in pagination. */
  edges: Array<OrganizationsEdge>;
  /** A list of `Organization` objects. */
  nodes: Array<Maybe<Organization>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Organization` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Organization` edge in the connection. */
export type OrganizationsEdge = {
  __typename?: 'OrganizationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Organization` at the end of the edge. */
  node?: Maybe<Organization>;
};

/** Methods to use when ordering `Organization`. */
export enum OrganizationsOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  EnddateAsc = 'ENDDATE_ASC',
  EnddateDesc = 'ENDDATE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  KvknumberAsc = 'KVKNUMBER_ASC',
  KvknumberDesc = 'KVKNUMBER_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  Natural = 'NATURAL',
  OrganizationidAsc = 'ORGANIZATIONID_ASC',
  OrganizationidDesc = 'ORGANIZATIONID_DESC',
  OrganizationidParentAsc = 'ORGANIZATIONID_PARENT_ASC',
  OrganizationidParentDesc = 'ORGANIZATIONID_PARENT_DESC',
  OrganizationtypeAsc = 'ORGANIZATIONTYPE_ASC',
  OrganizationtypeDesc = 'ORGANIZATIONTYPE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RemarksAsc = 'REMARKS_ASC',
  RemarksDesc = 'REMARKS_DESC',
  StartdateAsc = 'STARTDATE_ASC',
  StartdateDesc = 'STARTDATE_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC',
  VatnumberAsc = 'VATNUMBER_ASC',
  VatnumberDesc = 'VATNUMBER_DESC'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
};

/** A connection to a list of `Person` values. */
export type PeopleConnection = {
  __typename?: 'PeopleConnection';
  /** A list of edges which contains the `Person` and cursor to aid in pagination. */
  edges: Array<PeopleEdge>;
  /** A list of `Person` objects. */
  nodes: Array<Maybe<Person>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Person` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Person` edge in the connection. */
export type PeopleEdge = {
  __typename?: 'PeopleEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Person` at the end of the edge. */
  node?: Maybe<Person>;
};

/** Methods to use when ordering `Person`. */
export enum PeopleOrderBy {
  DateofbirthAsc = 'DATEOFBIRTH_ASC',
  DateofbirthDesc = 'DATEOFBIRTH_DESC',
  FirstnameAsc = 'FIRSTNAME_ASC',
  FirstnameDesc = 'FIRSTNAME_DESC',
  GenderAsc = 'GENDER_ASC',
  GenderDesc = 'GENDER_DESC',
  InfixAsc = 'INFIX_ASC',
  InfixDesc = 'INFIX_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastnameAsc = 'LASTNAME_ASC',
  LastnameDesc = 'LASTNAME_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PersonidAsc = 'PERSONID_ASC',
  PersonidDesc = 'PERSONID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Person = Node & {
  __typename?: 'Person';
  dateofbirth?: Maybe<Scalars['Datetime']>;
  firstname: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  infix?: Maybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastname: Scalars['String'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads and enables pagination through a set of `Organizationperson`. */
  organizationpeopleByPersonid: OrganizationpeopleConnection;
  /** Reads and enables pagination through a set of `Personaddress`. */
  personaddressesByPersonid: PersonaddressesConnection;
  /** Reads and enables pagination through a set of `Personattribute`. */
  personattributesByPersonid: PersonattributesConnection;
  /** Reads and enables pagination through a set of `Personbankaccount`. */
  personbankaccountsByPersonid: PersonbankaccountsConnection;
  /** Reads and enables pagination through a set of `Personcommunication`. */
  personcommunicationsByPersonid: PersoncommunicationsConnection;
  personid: Scalars['Int'];
  /** Reads and enables pagination through a set of `Personinstrument`. */
  personinstrumentsByPersonid: PersoninstrumentsConnection;
  updateby: Scalars['String'];
};


export type PersonOrganizationpeopleByPersonidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationpersonCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationpeopleOrderBy>>;
};


export type PersonPersonaddressesByPersonidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonaddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonaddressesOrderBy>>;
};


export type PersonPersonattributesByPersonidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonattributeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonattributesOrderBy>>;
};


export type PersonPersonbankaccountsByPersonidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonbankaccountCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonbankaccountsOrderBy>>;
};


export type PersonPersoncommunicationsByPersonidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersoncommunicationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersoncommunicationsOrderBy>>;
};


export type PersonPersoninstrumentsByPersonidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersoninstrumentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersoninstrumentsOrderBy>>;
};

/** A condition to be used against `Person` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PersonCondition = {
  /** Checks for equality with the object’s `dateofbirth` field. */
  dateofbirth?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `firstname` field. */
  firstname?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `gender` field. */
  gender?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `infix` field. */
  infix?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastname` field. */
  lastname?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `personid` field. */
  personid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Person` */
export type PersonInput = {
  dateofbirth?: InputMaybe<Scalars['Datetime']>;
  firstname: Scalars['String'];
  gender?: InputMaybe<Scalars['String']>;
  infix?: InputMaybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastname: Scalars['String'];
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid?: InputMaybe<Scalars['Int']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Person`. Fields that are set will be updated. */
export type PersonPatch = {
  dateofbirth?: InputMaybe<Scalars['Datetime']>;
  firstname?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  infix?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastname?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

export type Personaddress = Node & {
  __typename?: 'Personaddress';
  /** Reads a single `Address` that is related to this `Personaddress`. */
  addressByAddressid?: Maybe<Address>;
  addressid: Scalars['Int'];
  addresstype: Scalars['String'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Person` that is related to this `Personaddress`. */
  personByPersonid?: Maybe<Person>;
  personid: Scalars['Int'];
  preferred: Scalars['Int'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Personaddress` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PersonaddressCondition = {
  /** Checks for equality with the object’s `addressid` field. */
  addressid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `addresstype` field. */
  addresstype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `personid` field. */
  personid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `preferred` field. */
  preferred?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Personaddress` */
export type PersonaddressInput = {
  addressid: Scalars['Int'];
  addresstype: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid: Scalars['Int'];
  preferred: Scalars['Int'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Personaddress`. Fields that are set will be updated. */
export type PersonaddressPatch = {
  addressid?: InputMaybe<Scalars['Int']>;
  addresstype?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid?: InputMaybe<Scalars['Int']>;
  preferred?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Personaddress` values. */
export type PersonaddressesConnection = {
  __typename?: 'PersonaddressesConnection';
  /** A list of edges which contains the `Personaddress` and cursor to aid in pagination. */
  edges: Array<PersonaddressesEdge>;
  /** A list of `Personaddress` objects. */
  nodes: Array<Maybe<Personaddress>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Personaddress` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Personaddress` edge in the connection. */
export type PersonaddressesEdge = {
  __typename?: 'PersonaddressesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Personaddress` at the end of the edge. */
  node?: Maybe<Personaddress>;
};

/** Methods to use when ordering `Personaddress`. */
export enum PersonaddressesOrderBy {
  AddressidAsc = 'ADDRESSID_ASC',
  AddressidDesc = 'ADDRESSID_DESC',
  AddresstypeAsc = 'ADDRESSTYPE_ASC',
  AddresstypeDesc = 'ADDRESSTYPE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PersonidAsc = 'PERSONID_ASC',
  PersonidDesc = 'PERSONID_DESC',
  PreferredAsc = 'PREFERRED_ASC',
  PreferredDesc = 'PREFERRED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Personattribute = Node & {
  __typename?: 'Personattribute';
  attribid: Scalars['String'];
  /** Reads a single `Attribute` that is related to this `Personattribute`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  attribvalue?: Maybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Person` that is related to this `Personattribute`. */
  personByPersonid?: Maybe<Person>;
  personid: Scalars['Int'];
  tableid: Scalars['String'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Personattribute` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PersonattributeCondition = {
  /** Checks for equality with the object’s `attribid` field. */
  attribid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `attribvalue` field. */
  attribvalue?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `personid` field. */
  personid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `tableid` field. */
  tableid?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Personattribute` */
export type PersonattributeInput = {
  attribid: Scalars['String'];
  attribvalue?: InputMaybe<Scalars['String']>;
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid: Scalars['Int'];
  tableid: Scalars['String'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Personattribute`. Fields that are set will be updated. */
export type PersonattributePatch = {
  attribid?: InputMaybe<Scalars['String']>;
  attribvalue?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid?: InputMaybe<Scalars['Int']>;
  tableid?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Personattribute` values. */
export type PersonattributesConnection = {
  __typename?: 'PersonattributesConnection';
  /** A list of edges which contains the `Personattribute` and cursor to aid in pagination. */
  edges: Array<PersonattributesEdge>;
  /** A list of `Personattribute` objects. */
  nodes: Array<Maybe<Personattribute>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Personattribute` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Personattribute` edge in the connection. */
export type PersonattributesEdge = {
  __typename?: 'PersonattributesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Personattribute` at the end of the edge. */
  node?: Maybe<Personattribute>;
};

/** Methods to use when ordering `Personattribute`. */
export enum PersonattributesOrderBy {
  AttribidAsc = 'ATTRIBID_ASC',
  AttribidDesc = 'ATTRIBID_DESC',
  AttribvalueAsc = 'ATTRIBVALUE_ASC',
  AttribvalueDesc = 'ATTRIBVALUE_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PersonidAsc = 'PERSONID_ASC',
  PersonidDesc = 'PERSONID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TableidAsc = 'TABLEID_ASC',
  TableidDesc = 'TABLEID_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Personbankaccount = Node & {
  __typename?: 'Personbankaccount';
  accountid: Scalars['Int'];
  /** Reads a single `Bankaccount` that is related to this `Personbankaccount`. */
  bankaccountByAccountid?: Maybe<Bankaccount>;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Person` that is related to this `Personbankaccount`. */
  personByPersonid?: Maybe<Person>;
  personid: Scalars['Int'];
  preferred: Scalars['Int'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Personbankaccount` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PersonbankaccountCondition = {
  /** Checks for equality with the object’s `accountid` field. */
  accountid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `personid` field. */
  personid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `preferred` field. */
  preferred?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Personbankaccount` */
export type PersonbankaccountInput = {
  accountid: Scalars['Int'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid: Scalars['Int'];
  preferred?: InputMaybe<Scalars['Int']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Personbankaccount`. Fields that are set will be updated. */
export type PersonbankaccountPatch = {
  accountid?: InputMaybe<Scalars['Int']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid?: InputMaybe<Scalars['Int']>;
  preferred?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Personbankaccount` values. */
export type PersonbankaccountsConnection = {
  __typename?: 'PersonbankaccountsConnection';
  /** A list of edges which contains the `Personbankaccount` and cursor to aid in pagination. */
  edges: Array<PersonbankaccountsEdge>;
  /** A list of `Personbankaccount` objects. */
  nodes: Array<Maybe<Personbankaccount>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Personbankaccount` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Personbankaccount` edge in the connection. */
export type PersonbankaccountsEdge = {
  __typename?: 'PersonbankaccountsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Personbankaccount` at the end of the edge. */
  node?: Maybe<Personbankaccount>;
};

/** Methods to use when ordering `Personbankaccount`. */
export enum PersonbankaccountsOrderBy {
  AccountidAsc = 'ACCOUNTID_ASC',
  AccountidDesc = 'ACCOUNTID_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PersonidAsc = 'PERSONID_ASC',
  PersonidDesc = 'PERSONID_DESC',
  PreferredAsc = 'PREFERRED_ASC',
  PreferredDesc = 'PREFERRED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Personcommunication = Node & {
  __typename?: 'Personcommunication';
  /** Reads a single `Communication` that is related to this `Personcommunication`. */
  communicationByCommunicationid?: Maybe<Communication>;
  communicationid: Scalars['Int'];
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Person` that is related to this `Personcommunication`. */
  personByPersonid?: Maybe<Person>;
  personid: Scalars['Int'];
  preferred: Scalars['Int'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Personcommunication` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type PersoncommunicationCondition = {
  /** Checks for equality with the object’s `communicationid` field. */
  communicationid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `personid` field. */
  personid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `preferred` field. */
  preferred?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Personcommunication` */
export type PersoncommunicationInput = {
  communicationid: Scalars['Int'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid: Scalars['Int'];
  preferred?: InputMaybe<Scalars['Int']>;
  updateby: Scalars['String'];
};

/** Represents an update to a `Personcommunication`. Fields that are set will be updated. */
export type PersoncommunicationPatch = {
  communicationid?: InputMaybe<Scalars['Int']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid?: InputMaybe<Scalars['Int']>;
  preferred?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Personcommunication` values. */
export type PersoncommunicationsConnection = {
  __typename?: 'PersoncommunicationsConnection';
  /** A list of edges which contains the `Personcommunication` and cursor to aid in pagination. */
  edges: Array<PersoncommunicationsEdge>;
  /** A list of `Personcommunication` objects. */
  nodes: Array<Maybe<Personcommunication>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Personcommunication` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Personcommunication` edge in the connection. */
export type PersoncommunicationsEdge = {
  __typename?: 'PersoncommunicationsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Personcommunication` at the end of the edge. */
  node?: Maybe<Personcommunication>;
};

/** Methods to use when ordering `Personcommunication`. */
export enum PersoncommunicationsOrderBy {
  CommunicationidAsc = 'COMMUNICATIONID_ASC',
  CommunicationidDesc = 'COMMUNICATIONID_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PersonidAsc = 'PERSONID_ASC',
  PersonidDesc = 'PERSONID_DESC',
  PreferredAsc = 'PREFERRED_ASC',
  PreferredDesc = 'PREFERRED_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

export type Personinstrument = Node & {
  __typename?: 'Personinstrument';
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  /** Reads a single `Instrument` that is related to this `Personinstrument`. */
  instrumentByInstrumentid?: Maybe<Instrument>;
  instrumentid: Scalars['Int'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  /** Reads a single `Person` that is related to this `Personinstrument`. */
  personByPersonid?: Maybe<Person>;
  personid: Scalars['Int'];
  updateby: Scalars['String'];
};

/**
 * A condition to be used against `Personinstrument` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type PersoninstrumentCondition = {
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `instrumentid` field. */
  instrumentid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `personid` field. */
  personid?: InputMaybe<Scalars['Int']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
};

/** An input for mutations affecting `Personinstrument` */
export type PersoninstrumentInput = {
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  instrumentid: Scalars['Int'];
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid: Scalars['Int'];
  updateby: Scalars['String'];
};

/** Represents an update to a `Personinstrument`. Fields that are set will be updated. */
export type PersoninstrumentPatch = {
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  instrumentid?: InputMaybe<Scalars['Int']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  personid?: InputMaybe<Scalars['Int']>;
  updateby?: InputMaybe<Scalars['String']>;
};

/** A connection to a list of `Personinstrument` values. */
export type PersoninstrumentsConnection = {
  __typename?: 'PersoninstrumentsConnection';
  /** A list of edges which contains the `Personinstrument` and cursor to aid in pagination. */
  edges: Array<PersoninstrumentsEdge>;
  /** A list of `Personinstrument` objects. */
  nodes: Array<Maybe<Personinstrument>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Personinstrument` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Personinstrument` edge in the connection. */
export type PersoninstrumentsEdge = {
  __typename?: 'PersoninstrumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Personinstrument` at the end of the edge. */
  node?: Maybe<Personinstrument>;
};

/** Methods to use when ordering `Personinstrument`. */
export enum PersoninstrumentsOrderBy {
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  InstrumentidAsc = 'INSTRUMENTID_ASC',
  InstrumentidDesc = 'INSTRUMENTID_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PersonidAsc = 'PERSONID_ASC',
  PersonidDesc = 'PERSONID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: 'Query';
  /** Reads a single `Address` using its globally unique `ID`. */
  address?: Maybe<Address>;
  addressByAddressid?: Maybe<Address>;
  /** Reads and enables pagination through a set of `Address`. */
  allAddresses?: Maybe<AddressesConnection>;
  /** Reads and enables pagination through a set of `Attributedescription`. */
  allAttributedescriptions?: Maybe<AttributedescriptionsConnection>;
  /** Reads and enables pagination through a set of `Attribute`. */
  allAttributes?: Maybe<AttributesConnection>;
  /** Reads and enables pagination through a set of `Bankaccount`. */
  allBankaccounts?: Maybe<BankaccountsConnection>;
  /** Reads and enables pagination through a set of `Bankcode`. */
  allBankcodes?: Maybe<BankcodesConnection>;
  /** Reads and enables pagination through a set of `CarTrip`. */
  allCarTrips?: Maybe<CarTripsConnection>;
  /** Reads and enables pagination through a set of `Car`. */
  allCars?: Maybe<CarsConnection>;
  /** Reads and enables pagination through a set of `Codetable`. */
  allCodetables?: Maybe<CodetablesConnection>;
  /** Reads and enables pagination through a set of `Communication`. */
  allCommunications?: Maybe<CommunicationsConnection>;
  /** Reads and enables pagination through a set of `DefaultSetting`. */
  allDefaultSettings?: Maybe<DefaultSettingsConnection>;
  /** Reads and enables pagination through a set of `Document`. */
  allDocuments?: Maybe<DocumentsConnection>;
  /** Reads and enables pagination through a set of `FinDefaultVatItem`. */
  allFinDefaultVatItems?: Maybe<FinDefaultVatItemsConnection>;
  /** Reads and enables pagination through a set of `FinInvoiceItem`. */
  allFinInvoiceItems?: Maybe<FinInvoiceItemsConnection>;
  /** Reads and enables pagination through a set of `FinInvoice`. */
  allFinInvoices?: Maybe<FinInvoicesConnection>;
  /** Reads and enables pagination through a set of `FinProduct`. */
  allFinProducts?: Maybe<FinProductsConnection>;
  /** Reads and enables pagination through a set of `FinVatItem`. */
  allFinVatItems?: Maybe<FinVatItemsConnection>;
  /** Reads and enables pagination through a set of `Instrument`. */
  allInstruments?: Maybe<InstrumentsConnection>;
  /** Reads and enables pagination through a set of `Invoicenumber`. */
  allInvoicenumbers?: Maybe<InvoicenumbersConnection>;
  /** Reads and enables pagination through a set of `KnexMigration`. */
  allKnexMigrations?: Maybe<KnexMigrationsConnection>;
  /** Reads and enables pagination through a set of `KnexMigrationsLock`. */
  allKnexMigrationsLocks?: Maybe<KnexMigrationsLocksConnection>;
  /** Reads and enables pagination through a set of `Organizationaddress`. */
  allOrganizationaddresses?: Maybe<OrganizationaddressesConnection>;
  /** Reads and enables pagination through a set of `Organizationattribute`. */
  allOrganizationattributes?: Maybe<OrganizationattributesConnection>;
  /** Reads and enables pagination through a set of `Organizationbankaccount`. */
  allOrganizationbankaccounts?: Maybe<OrganizationbankaccountsConnection>;
  /** Reads and enables pagination through a set of `Organizationcommunication`. */
  allOrganizationcommunications?: Maybe<OrganizationcommunicationsConnection>;
  /** Reads and enables pagination through a set of `Organizationperson`. */
  allOrganizationpeople?: Maybe<OrganizationpeopleConnection>;
  /** Reads and enables pagination through a set of `Organization`. */
  allOrganizations?: Maybe<OrganizationsConnection>;
  /** Reads and enables pagination through a set of `Person`. */
  allPeople?: Maybe<PeopleConnection>;
  /** Reads and enables pagination through a set of `Personaddress`. */
  allPersonaddresses?: Maybe<PersonaddressesConnection>;
  /** Reads and enables pagination through a set of `Personattribute`. */
  allPersonattributes?: Maybe<PersonattributesConnection>;
  /** Reads and enables pagination through a set of `Personbankaccount`. */
  allPersonbankaccounts?: Maybe<PersonbankaccountsConnection>;
  /** Reads and enables pagination through a set of `Personcommunication`. */
  allPersoncommunications?: Maybe<PersoncommunicationsConnection>;
  /** Reads and enables pagination through a set of `Personinstrument`. */
  allPersoninstruments?: Maybe<PersoninstrumentsConnection>;
  /** Reads and enables pagination through a set of `UserSetting`. */
  allUserSettings?: Maybe<UserSettingsConnection>;
  /** Reads and enables pagination through a set of `Vat`. */
  allVats?: Maybe<VatsConnection>;
  /** Reads a single `Attribute` using its globally unique `ID`. */
  attribute?: Maybe<Attribute>;
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /** Reads a single `Attributedescription` using its globally unique `ID`. */
  attributedescription?: Maybe<Attributedescription>;
  attributedescriptionByTableidAndAttribidAndLanguage?: Maybe<Attributedescription>;
  /** Reads a single `Bankaccount` using its globally unique `ID`. */
  bankaccount?: Maybe<Bankaccount>;
  bankaccountByAccountid?: Maybe<Bankaccount>;
  /** Reads a single `Bankcode` using its globally unique `ID`. */
  bankcode?: Maybe<Bankcode>;
  bankcodeByBankcodeAndCitycode?: Maybe<Bankcode>;
  /** Reads a single `Car` using its globally unique `ID`. */
  car?: Maybe<Car>;
  carByCarid?: Maybe<Car>;
  /** Reads a single `CarTrip` using its globally unique `ID`. */
  carTrip?: Maybe<CarTrip>;
  carTripByTripid?: Maybe<CarTrip>;
  /** Reads a single `Codetable` using its globally unique `ID`. */
  codetable?: Maybe<Codetable>;
  codetableByTablenameAndColnameAndColvalueAndLanguage?: Maybe<Codetable>;
  /** Reads a single `Communication` using its globally unique `ID`. */
  communication?: Maybe<Communication>;
  communicationByCommunicationid?: Maybe<Communication>;
  /** Reads a single `DefaultSetting` using its globally unique `ID`. */
  defaultSetting?: Maybe<DefaultSetting>;
  defaultSettingByObjectidAndObjecttypeAndObjectvalue?: Maybe<DefaultSetting>;
  /** Reads a single `Document` using its globally unique `ID`. */
  document?: Maybe<Document>;
  documentByDocumentid?: Maybe<Document>;
  documentByNameAndObjectidAndObjecttype?: Maybe<Document>;
  /** Reads a single `FinDefaultVatItem` using its globally unique `ID`. */
  finDefaultVatItem?: Maybe<FinDefaultVatItem>;
  finDefaultVatItemByVatitemid?: Maybe<FinDefaultVatItem>;
  /** Reads a single `FinInvoice` using its globally unique `ID`. */
  finInvoice?: Maybe<FinInvoice>;
  finInvoiceByInvoiceid?: Maybe<FinInvoice>;
  finInvoiceByInvoicenumber?: Maybe<FinInvoice>;
  /** Reads a single `FinInvoiceItem` using its globally unique `ID`. */
  finInvoiceItem?: Maybe<FinInvoiceItem>;
  finInvoiceItemByInvoiceitemid?: Maybe<FinInvoiceItem>;
  /** Reads a single `FinProduct` using its globally unique `ID`. */
  finProduct?: Maybe<FinProduct>;
  finProductByProductid?: Maybe<FinProduct>;
  /** Reads a single `FinVatItem` using its globally unique `ID`. */
  finVatItem?: Maybe<FinVatItem>;
  finVatItemByVatitemid?: Maybe<FinVatItem>;
  /** Reads a single `Instrument` using its globally unique `ID`. */
  instrument?: Maybe<Instrument>;
  instrumentByInstrumentid?: Maybe<Instrument>;
  /** Reads a single `Invoicenumber` using its globally unique `ID`. */
  invoicenumber?: Maybe<Invoicenumber>;
  invoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumber?: Maybe<Invoicenumber>;
  /** Reads a single `KnexMigration` using its globally unique `ID`. */
  knexMigration?: Maybe<KnexMigration>;
  knexMigrationById?: Maybe<KnexMigration>;
  /** Reads a single `KnexMigrationsLock` using its globally unique `ID`. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  knexMigrationsLockByIndex?: Maybe<KnexMigrationsLock>;
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>;
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars['ID'];
  /** Reads a single `Organization` using its globally unique `ID`. */
  organization?: Maybe<Organization>;
  organizationByOrganizationid?: Maybe<Organization>;
  /** Reads a single `Organizationaddress` using its globally unique `ID`. */
  organizationaddress?: Maybe<Organizationaddress>;
  organizationaddressByOrganizationidAndAddressid?: Maybe<Organizationaddress>;
  /** Reads a single `Organizationattribute` using its globally unique `ID`. */
  organizationattribute?: Maybe<Organizationattribute>;
  organizationattributeByOrganizationidAndTableidAndAttribid?: Maybe<Organizationattribute>;
  /** Reads a single `Organizationbankaccount` using its globally unique `ID`. */
  organizationbankaccount?: Maybe<Organizationbankaccount>;
  organizationbankaccountByOrganizationidAndAccountid?: Maybe<Organizationbankaccount>;
  /** Reads a single `Organizationcommunication` using its globally unique `ID`. */
  organizationcommunication?: Maybe<Organizationcommunication>;
  organizationcommunicationByOrganizationidAndCommunicationid?: Maybe<Organizationcommunication>;
  /** Reads a single `Organizationperson` using its globally unique `ID`. */
  organizationperson?: Maybe<Organizationperson>;
  organizationpersonByOrganizationidAndPersonidAndRoletype?: Maybe<Organizationperson>;
  /** Reads a single `Person` using its globally unique `ID`. */
  person?: Maybe<Person>;
  personByPersonid?: Maybe<Person>;
  /** Reads a single `Personaddress` using its globally unique `ID`. */
  personaddress?: Maybe<Personaddress>;
  personaddressByPersonidAndAddressid?: Maybe<Personaddress>;
  /** Reads a single `Personattribute` using its globally unique `ID`. */
  personattribute?: Maybe<Personattribute>;
  personattributeByPersonidAndTableidAndAttribid?: Maybe<Personattribute>;
  /** Reads a single `Personbankaccount` using its globally unique `ID`. */
  personbankaccount?: Maybe<Personbankaccount>;
  personbankaccountByPersonidAndAccountid?: Maybe<Personbankaccount>;
  /** Reads a single `Personcommunication` using its globally unique `ID`. */
  personcommunication?: Maybe<Personcommunication>;
  personcommunicationByPersonidAndCommunicationid?: Maybe<Personcommunication>;
  /** Reads a single `Personinstrument` using its globally unique `ID`. */
  personinstrument?: Maybe<Personinstrument>;
  personinstrumentByPersonidAndInstrumentid?: Maybe<Personinstrument>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  /** Reads a single `UserSetting` using its globally unique `ID`. */
  userSetting?: Maybe<UserSetting>;
  userSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalue?: Maybe<UserSetting>;
  /** Reads a single `Vat` using its globally unique `ID`. */
  vat?: Maybe<Vat>;
  vatByVatid?: Maybe<Vat>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAddressByAddressidArgs = {
  addressid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAttributedescriptionsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AttributedescriptionCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AttributedescriptionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllAttributesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AttributeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AttributesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBankaccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<BankaccountCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BankaccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllBankcodesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<BankcodeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BankcodesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCarTripsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CarTripCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CarTripsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCarsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CarCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CarsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCodetablesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CodetableCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CodetablesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllCommunicationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<CommunicationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CommunicationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllDefaultSettingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<DefaultSettingCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DefaultSettingsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllDocumentsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<DocumentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFinDefaultVatItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinDefaultVatItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinDefaultVatItemsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFinInvoiceItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinInvoiceItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinInvoiceItemsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFinInvoicesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinInvoiceCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinInvoicesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFinProductsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinProductCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinProductsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllFinVatItemsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinVatItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinVatItemsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllInstrumentsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InstrumentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InstrumentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllInvoicenumbersArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<InvoicenumberCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<InvoicenumbersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllKnexMigrationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnexMigrationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnexMigrationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllKnexMigrationsLocksArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<KnexMigrationsLockCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<KnexMigrationsLocksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllOrganizationaddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationaddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationaddressesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllOrganizationattributesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationattributeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationattributesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllOrganizationbankaccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationbankaccountCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationbankaccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllOrganizationcommunicationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationcommunicationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationcommunicationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllOrganizationpeopleArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationpersonCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationpeopleOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllOrganizationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<OrganizationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPeopleArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PeopleOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPersonaddressesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonaddressCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonaddressesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPersonattributesArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonattributeCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonattributesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPersonbankaccountsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersonbankaccountCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersonbankaccountsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPersoncommunicationsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersoncommunicationCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersoncommunicationsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllPersoninstrumentsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<PersoninstrumentCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PersoninstrumentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllUserSettingsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserSettingCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UserSettingsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAllVatsArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<VatCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<VatsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAttributeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAttributeByTableidAndAttribidArgs = {
  attribid: Scalars['String'];
  tableid: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAttributedescriptionArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAttributedescriptionByTableidAndAttribidAndLanguageArgs = {
  attribid: Scalars['String'];
  language: Scalars['String'];
  tableid: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBankaccountArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBankaccountByAccountidArgs = {
  accountid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBankcodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBankcodeByBankcodeAndCitycodeArgs = {
  bankcode: Scalars['String'];
  citycode: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCarArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCarByCaridArgs = {
  carid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCarTripArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCarTripByTripidArgs = {
  tripid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCodetableArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCodetableByTablenameAndColnameAndColvalueAndLanguageArgs = {
  colname: Scalars['String'];
  colvalue: Scalars['String'];
  language: Scalars['String'];
  tablename: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCommunicationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCommunicationByCommunicationidArgs = {
  communicationid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDefaultSettingArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDefaultSettingByObjectidAndObjecttypeAndObjectvalueArgs = {
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
  objectvalue: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentByDocumentidArgs = {
  documentid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentByNameAndObjectidAndObjecttypeArgs = {
  name: Scalars['String'];
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinDefaultVatItemArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinDefaultVatItemByVatitemidArgs = {
  vatitemid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinInvoiceArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinInvoiceByInvoiceidArgs = {
  invoiceid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinInvoiceByInvoicenumberArgs = {
  invoicenumber: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinInvoiceItemArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinInvoiceItemByInvoiceitemidArgs = {
  invoiceitemid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinProductArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinProductByProductidArgs = {
  productid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinVatItemArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryFinVatItemByVatitemidArgs = {
  vatitemid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInstrumentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInstrumentByInstrumentidArgs = {
  instrumentid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInvoicenumberArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumberArgs = {
  invoiceOrganizationid: Scalars['Int'];
  invoiceSequencenumber: Scalars['Int'];
  invoiceYear: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationByIdArgs = {
  id: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationsLockArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryKnexMigrationsLockByIndexArgs = {
  index: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationByOrganizationidArgs = {
  organizationid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationaddressArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationaddressByOrganizationidAndAddressidArgs = {
  addressid: Scalars['Int'];
  organizationid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationattributeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationattributeByOrganizationidAndTableidAndAttribidArgs = {
  attribid: Scalars['String'];
  organizationid: Scalars['Int'];
  tableid: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationbankaccountArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationbankaccountByOrganizationidAndAccountidArgs = {
  accountid: Scalars['Int'];
  organizationid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationcommunicationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationcommunicationByOrganizationidAndCommunicationidArgs = {
  communicationid: Scalars['Int'];
  organizationid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationpersonArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryOrganizationpersonByOrganizationidAndPersonidAndRoletypeArgs = {
  organizationid: Scalars['Int'];
  personid: Scalars['Int'];
  roletype: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonByPersonidArgs = {
  personid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonaddressArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonaddressByPersonidAndAddressidArgs = {
  addressid: Scalars['Int'];
  personid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonattributeArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonattributeByPersonidAndTableidAndAttribidArgs = {
  attribid: Scalars['String'];
  personid: Scalars['Int'];
  tableid: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonbankaccountArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersonbankaccountByPersonidAndAccountidArgs = {
  accountid: Scalars['Int'];
  personid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersoncommunicationArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersoncommunicationByPersonidAndCommunicationidArgs = {
  communicationid: Scalars['Int'];
  personid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersoninstrumentArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryPersoninstrumentByPersonidAndInstrumentidArgs = {
  instrumentid: Scalars['Int'];
  personid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserSettingArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalueArgs = {
  objectname: Scalars['String'];
  objecttype: Scalars['String'];
  propertyname: Scalars['String'];
  propertyvalue: Scalars['String'];
  userid: Scalars['Int'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVatArgs = {
  nodeId: Scalars['ID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryVatByVatidArgs = {
  vatid: Scalars['Int'];
};

/** All input for the `updateAddressByAddressid` mutation. */
export type UpdateAddressByAddressidInput = {
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch;
  addressid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  /** An object where the defined keys will be set on the `Address` being updated. */
  addressPatch: AddressPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Address` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: 'UpdateAddressPayload';
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>;
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>;
};

/** All input for the `updateAttributeByTableidAndAttribid` mutation. */
export type UpdateAttributeByTableidAndAttribidInput = {
  attribid: Scalars['String'];
  /** An object where the defined keys will be set on the `Attribute` being updated. */
  attributePatch: AttributePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  tableid: Scalars['String'];
};

/** All input for the `updateAttribute` mutation. */
export type UpdateAttributeInput = {
  /** An object where the defined keys will be set on the `Attribute` being updated. */
  attributePatch: AttributePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Attribute` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Attribute` mutation. */
export type UpdateAttributePayload = {
  __typename?: 'UpdateAttributePayload';
  /** The `Attribute` that was updated by this mutation. */
  attribute?: Maybe<Attribute>;
  /** An edge for our `Attribute`. May be used by Relay 1. */
  attributeEdge?: Maybe<AttributesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Attribute` mutation. */
export type UpdateAttributePayloadAttributeEdgeArgs = {
  orderBy?: InputMaybe<Array<AttributesOrderBy>>;
};

/** All input for the `updateAttributedescriptionByTableidAndAttribidAndLanguage` mutation. */
export type UpdateAttributedescriptionByTableidAndAttribidAndLanguageInput = {
  attribid: Scalars['String'];
  /** An object where the defined keys will be set on the `Attributedescription` being updated. */
  attributedescriptionPatch: AttributedescriptionPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  language: Scalars['String'];
  tableid: Scalars['String'];
};

/** All input for the `updateAttributedescription` mutation. */
export type UpdateAttributedescriptionInput = {
  /** An object where the defined keys will be set on the `Attributedescription` being updated. */
  attributedescriptionPatch: AttributedescriptionPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Attributedescription` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Attributedescription` mutation. */
export type UpdateAttributedescriptionPayload = {
  __typename?: 'UpdateAttributedescriptionPayload';
  /** Reads a single `Attribute` that is related to this `Attributedescription`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /** The `Attributedescription` that was updated by this mutation. */
  attributedescription?: Maybe<Attributedescription>;
  /** An edge for our `Attributedescription`. May be used by Relay 1. */
  attributedescriptionEdge?: Maybe<AttributedescriptionsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Attributedescription` mutation. */
export type UpdateAttributedescriptionPayloadAttributedescriptionEdgeArgs = {
  orderBy?: InputMaybe<Array<AttributedescriptionsOrderBy>>;
};

/** All input for the `updateBankaccountByAccountid` mutation. */
export type UpdateBankaccountByAccountidInput = {
  accountid: Scalars['Int'];
  /** An object where the defined keys will be set on the `Bankaccount` being updated. */
  bankaccountPatch: BankaccountPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `updateBankaccount` mutation. */
export type UpdateBankaccountInput = {
  /** An object where the defined keys will be set on the `Bankaccount` being updated. */
  bankaccountPatch: BankaccountPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Bankaccount` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Bankaccount` mutation. */
export type UpdateBankaccountPayload = {
  __typename?: 'UpdateBankaccountPayload';
  /** The `Bankaccount` that was updated by this mutation. */
  bankaccount?: Maybe<Bankaccount>;
  /** An edge for our `Bankaccount`. May be used by Relay 1. */
  bankaccountEdge?: Maybe<BankaccountsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Bankaccount` mutation. */
export type UpdateBankaccountPayloadBankaccountEdgeArgs = {
  orderBy?: InputMaybe<Array<BankaccountsOrderBy>>;
};

/** All input for the `updateBankcodeByBankcodeAndCitycode` mutation. */
export type UpdateBankcodeByBankcodeAndCitycodeInput = {
  bankcode: Scalars['String'];
  /** An object where the defined keys will be set on the `Bankcode` being updated. */
  bankcodePatch: BankcodePatch;
  citycode: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `updateBankcode` mutation. */
export type UpdateBankcodeInput = {
  /** An object where the defined keys will be set on the `Bankcode` being updated. */
  bankcodePatch: BankcodePatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Bankcode` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Bankcode` mutation. */
export type UpdateBankcodePayload = {
  __typename?: 'UpdateBankcodePayload';
  /** The `Bankcode` that was updated by this mutation. */
  bankcode?: Maybe<Bankcode>;
  /** An edge for our `Bankcode`. May be used by Relay 1. */
  bankcodeEdge?: Maybe<BankcodesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Bankcode` mutation. */
export type UpdateBankcodePayloadBankcodeEdgeArgs = {
  orderBy?: InputMaybe<Array<BankcodesOrderBy>>;
};

/** All input for the `updateCarByCarid` mutation. */
export type UpdateCarByCaridInput = {
  /** An object where the defined keys will be set on the `Car` being updated. */
  carPatch: CarPatch;
  carid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** All input for the `updateCar` mutation. */
export type UpdateCarInput = {
  /** An object where the defined keys will be set on the `Car` being updated. */
  carPatch: CarPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Car` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Car` mutation. */
export type UpdateCarPayload = {
  __typename?: 'UpdateCarPayload';
  /** The `Car` that was updated by this mutation. */
  car?: Maybe<Car>;
  /** An edge for our `Car`. May be used by Relay 1. */
  carEdge?: Maybe<CarsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Car` mutation. */
export type UpdateCarPayloadCarEdgeArgs = {
  orderBy?: InputMaybe<Array<CarsOrderBy>>;
};

/** All input for the `updateCarTripByTripid` mutation. */
export type UpdateCarTripByTripidInput = {
  /** An object where the defined keys will be set on the `CarTrip` being updated. */
  carTripPatch: CarTripPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  tripid: Scalars['Int'];
};

/** All input for the `updateCarTrip` mutation. */
export type UpdateCarTripInput = {
  /** An object where the defined keys will be set on the `CarTrip` being updated. */
  carTripPatch: CarTripPatch;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `CarTrip` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `CarTrip` mutation. */
export type UpdateCarTripPayload = {
  __typename?: 'UpdateCarTripPayload';
  /** Reads a single `Car` that is related to this `CarTrip`. */
  carByCarid?: Maybe<Car>;
  /** The `CarTrip` that was updated by this mutation. */
  carTrip?: Maybe<CarTrip>;
  /** An edge for our `CarTrip`. May be used by Relay 1. */
  carTripEdge?: Maybe<CarTripsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `CarTrip` mutation. */
export type UpdateCarTripPayloadCarTripEdgeArgs = {
  orderBy?: InputMaybe<Array<CarTripsOrderBy>>;
};

/** All input for the `updateCodetableByTablenameAndColnameAndColvalueAndLanguage` mutation. */
export type UpdateCodetableByTablenameAndColnameAndColvalueAndLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Codetable` being updated. */
  codetablePatch: CodetablePatch;
  colname: Scalars['String'];
  colvalue: Scalars['String'];
  language: Scalars['String'];
  tablename: Scalars['String'];
};

/** All input for the `updateCodetable` mutation. */
export type UpdateCodetableInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Codetable` being updated. */
  codetablePatch: CodetablePatch;
  /** The globally unique `ID` which will identify a single `Codetable` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Codetable` mutation. */
export type UpdateCodetablePayload = {
  __typename?: 'UpdateCodetablePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Codetable` that was updated by this mutation. */
  codetable?: Maybe<Codetable>;
  /** An edge for our `Codetable`. May be used by Relay 1. */
  codetableEdge?: Maybe<CodetablesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Codetable` mutation. */
export type UpdateCodetablePayloadCodetableEdgeArgs = {
  orderBy?: InputMaybe<Array<CodetablesOrderBy>>;
};

/** All input for the `updateCommunicationByCommunicationid` mutation. */
export type UpdateCommunicationByCommunicationidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Communication` being updated. */
  communicationPatch: CommunicationPatch;
  communicationid: Scalars['Int'];
};

/** All input for the `updateCommunication` mutation. */
export type UpdateCommunicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Communication` being updated. */
  communicationPatch: CommunicationPatch;
  /** The globally unique `ID` which will identify a single `Communication` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Communication` mutation. */
export type UpdateCommunicationPayload = {
  __typename?: 'UpdateCommunicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Communication` that was updated by this mutation. */
  communication?: Maybe<Communication>;
  /** An edge for our `Communication`. May be used by Relay 1. */
  communicationEdge?: Maybe<CommunicationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Communication` mutation. */
export type UpdateCommunicationPayloadCommunicationEdgeArgs = {
  orderBy?: InputMaybe<Array<CommunicationsOrderBy>>;
};

/** All input for the `updateDefaultSettingByObjectidAndObjecttypeAndObjectvalue` mutation. */
export type UpdateDefaultSettingByObjectidAndObjecttypeAndObjectvalueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `DefaultSetting` being updated. */
  defaultSettingPatch: DefaultSettingPatch;
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
  objectvalue: Scalars['String'];
};

/** All input for the `updateDefaultSetting` mutation. */
export type UpdateDefaultSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `DefaultSetting` being updated. */
  defaultSettingPatch: DefaultSettingPatch;
  /** The globally unique `ID` which will identify a single `DefaultSetting` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `DefaultSetting` mutation. */
export type UpdateDefaultSettingPayload = {
  __typename?: 'UpdateDefaultSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `DefaultSetting` that was updated by this mutation. */
  defaultSetting?: Maybe<DefaultSetting>;
  /** An edge for our `DefaultSetting`. May be used by Relay 1. */
  defaultSettingEdge?: Maybe<DefaultSettingsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `DefaultSetting` mutation. */
export type UpdateDefaultSettingPayloadDefaultSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<DefaultSettingsOrderBy>>;
};

/** All input for the `updateDocumentByDocumentid` mutation. */
export type UpdateDocumentByDocumentidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Document` being updated. */
  documentPatch: DocumentPatch;
  documentid: Scalars['Int'];
};

/** All input for the `updateDocumentByNameAndObjectidAndObjecttype` mutation. */
export type UpdateDocumentByNameAndObjectidAndObjecttypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Document` being updated. */
  documentPatch: DocumentPatch;
  name: Scalars['String'];
  objectid: Scalars['String'];
  objecttype: Scalars['String'];
};

/** All input for the `updateDocument` mutation. */
export type UpdateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Document` being updated. */
  documentPatch: DocumentPatch;
  /** The globally unique `ID` which will identify a single `Document` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Document` mutation. */
export type UpdateDocumentPayload = {
  __typename?: 'UpdateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Document` that was updated by this mutation. */
  document?: Maybe<Document>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Document` mutation. */
export type UpdateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};

/** All input for the `updateFinDefaultVatItemByVatitemid` mutation. */
export type UpdateFinDefaultVatItemByVatitemidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinDefaultVatItem` being updated. */
  finDefaultVatItemPatch: FinDefaultVatItemPatch;
  vatitemid: Scalars['Int'];
};

/** All input for the `updateFinDefaultVatItem` mutation. */
export type UpdateFinDefaultVatItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinDefaultVatItem` being updated. */
  finDefaultVatItemPatch: FinDefaultVatItemPatch;
  /** The globally unique `ID` which will identify a single `FinDefaultVatItem` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `FinDefaultVatItem` mutation. */
export type UpdateFinDefaultVatItemPayload = {
  __typename?: 'UpdateFinDefaultVatItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FinDefaultVatItem` that was updated by this mutation. */
  finDefaultVatItem?: Maybe<FinDefaultVatItem>;
  /** An edge for our `FinDefaultVatItem`. May be used by Relay 1. */
  finDefaultVatItemEdge?: Maybe<FinDefaultVatItemsEdge>;
  /** Reads a single `Organization` that is related to this `FinDefaultVatItem`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vat` that is related to this `FinDefaultVatItem`. */
  vatByVatid?: Maybe<Vat>;
};


/** The output of our update `FinDefaultVatItem` mutation. */
export type UpdateFinDefaultVatItemPayloadFinDefaultVatItemEdgeArgs = {
  orderBy?: InputMaybe<Array<FinDefaultVatItemsOrderBy>>;
};

/** All input for the `updateFinInvoiceByInvoiceid` mutation. */
export type UpdateFinInvoiceByInvoiceidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinInvoice` being updated. */
  finInvoicePatch: FinInvoicePatch;
  invoiceid: Scalars['Int'];
};

/** All input for the `updateFinInvoiceByInvoicenumber` mutation. */
export type UpdateFinInvoiceByInvoicenumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinInvoice` being updated. */
  finInvoicePatch: FinInvoicePatch;
  invoicenumber: Scalars['String'];
};

/** All input for the `updateFinInvoice` mutation. */
export type UpdateFinInvoiceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinInvoice` being updated. */
  finInvoicePatch: FinInvoicePatch;
  /** The globally unique `ID` which will identify a single `FinInvoice` to be updated. */
  nodeId: Scalars['ID'];
};

/** All input for the `updateFinInvoiceItemByInvoiceitemid` mutation. */
export type UpdateFinInvoiceItemByInvoiceitemidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinInvoiceItem` being updated. */
  finInvoiceItemPatch: FinInvoiceItemPatch;
  invoiceitemid: Scalars['Int'];
};

/** All input for the `updateFinInvoiceItem` mutation. */
export type UpdateFinInvoiceItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinInvoiceItem` being updated. */
  finInvoiceItemPatch: FinInvoiceItemPatch;
  /** The globally unique `ID` which will identify a single `FinInvoiceItem` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `FinInvoiceItem` mutation. */
export type UpdateFinInvoiceItemPayload = {
  __typename?: 'UpdateFinInvoiceItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `FinInvoice` that is related to this `FinInvoiceItem`. */
  finInvoiceByInvoiceid?: Maybe<FinInvoice>;
  /** The `FinInvoiceItem` that was updated by this mutation. */
  finInvoiceItem?: Maybe<FinInvoiceItem>;
  /** An edge for our `FinInvoiceItem`. May be used by Relay 1. */
  finInvoiceItemEdge?: Maybe<FinInvoiceItemsEdge>;
  /** Reads a single `FinProduct` that is related to this `FinInvoiceItem`. */
  finProductByProductid?: Maybe<FinProduct>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vat` that is related to this `FinInvoiceItem`. */
  vatByVatid?: Maybe<Vat>;
};


/** The output of our update `FinInvoiceItem` mutation. */
export type UpdateFinInvoiceItemPayloadFinInvoiceItemEdgeArgs = {
  orderBy?: InputMaybe<Array<FinInvoiceItemsOrderBy>>;
};

/** The output of our update `FinInvoice` mutation. */
export type UpdateFinInvoicePayload = {
  __typename?: 'UpdateFinInvoicePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FinInvoice` that was updated by this mutation. */
  finInvoice?: Maybe<FinInvoice>;
  /** An edge for our `FinInvoice`. May be used by Relay 1. */
  finInvoiceEdge?: Maybe<FinInvoicesEdge>;
  /** Reads a single `Organization` that is related to this `FinInvoice`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `FinInvoice` mutation. */
export type UpdateFinInvoicePayloadFinInvoiceEdgeArgs = {
  orderBy?: InputMaybe<Array<FinInvoicesOrderBy>>;
};

/** All input for the `updateFinProductByProductid` mutation. */
export type UpdateFinProductByProductidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinProduct` being updated. */
  finProductPatch: FinProductPatch;
  productid: Scalars['Int'];
};

/** All input for the `updateFinProduct` mutation. */
export type UpdateFinProductInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinProduct` being updated. */
  finProductPatch: FinProductPatch;
  /** The globally unique `ID` which will identify a single `FinProduct` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `FinProduct` mutation. */
export type UpdateFinProductPayload = {
  __typename?: 'UpdateFinProductPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FinProduct` that was updated by this mutation. */
  finProduct?: Maybe<FinProduct>;
  /** An edge for our `FinProduct`. May be used by Relay 1. */
  finProductEdge?: Maybe<FinProductsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `FinProduct` mutation. */
export type UpdateFinProductPayloadFinProductEdgeArgs = {
  orderBy?: InputMaybe<Array<FinProductsOrderBy>>;
};

/** All input for the `updateFinVatItemByVatitemid` mutation. */
export type UpdateFinVatItemByVatitemidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinVatItem` being updated. */
  finVatItemPatch: FinVatItemPatch;
  vatitemid: Scalars['Int'];
};

/** All input for the `updateFinVatItem` mutation. */
export type UpdateFinVatItemInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `FinVatItem` being updated. */
  finVatItemPatch: FinVatItemPatch;
  /** The globally unique `ID` which will identify a single `FinVatItem` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `FinVatItem` mutation. */
export type UpdateFinVatItemPayload = {
  __typename?: 'UpdateFinVatItemPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `FinVatItem` that was updated by this mutation. */
  finVatItem?: Maybe<FinVatItem>;
  /** An edge for our `FinVatItem`. May be used by Relay 1. */
  finVatItemEdge?: Maybe<FinVatItemsEdge>;
  /** Reads a single `Organization` that is related to this `FinVatItem`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `Vat` that is related to this `FinVatItem`. */
  vatByVatid?: Maybe<Vat>;
};


/** The output of our update `FinVatItem` mutation. */
export type UpdateFinVatItemPayloadFinVatItemEdgeArgs = {
  orderBy?: InputMaybe<Array<FinVatItemsOrderBy>>;
};

/** All input for the `updateInstrumentByInstrumentid` mutation. */
export type UpdateInstrumentByInstrumentidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Instrument` being updated. */
  instrumentPatch: InstrumentPatch;
  instrumentid: Scalars['Int'];
};

/** All input for the `updateInstrument` mutation. */
export type UpdateInstrumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Instrument` being updated. */
  instrumentPatch: InstrumentPatch;
  /** The globally unique `ID` which will identify a single `Instrument` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Instrument` mutation. */
export type UpdateInstrumentPayload = {
  __typename?: 'UpdateInstrumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Instrument` that was updated by this mutation. */
  instrument?: Maybe<Instrument>;
  /** An edge for our `Instrument`. May be used by Relay 1. */
  instrumentEdge?: Maybe<InstrumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Instrument` mutation. */
export type UpdateInstrumentPayloadInstrumentEdgeArgs = {
  orderBy?: InputMaybe<Array<InstrumentsOrderBy>>;
};

/** All input for the `updateInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumber` mutation. */
export type UpdateInvoicenumberByInvoiceOrganizationidAndInvoiceYearAndInvoiceSequencenumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  invoiceOrganizationid: Scalars['Int'];
  invoiceSequencenumber: Scalars['Int'];
  invoiceYear: Scalars['String'];
  /** An object where the defined keys will be set on the `Invoicenumber` being updated. */
  invoicenumberPatch: InvoicenumberPatch;
};

/** All input for the `updateInvoicenumber` mutation. */
export type UpdateInvoicenumberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Invoicenumber` being updated. */
  invoicenumberPatch: InvoicenumberPatch;
  /** The globally unique `ID` which will identify a single `Invoicenumber` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `Invoicenumber` mutation. */
export type UpdateInvoicenumberPayload = {
  __typename?: 'UpdateInvoicenumberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Invoicenumber` that was updated by this mutation. */
  invoicenumber?: Maybe<Invoicenumber>;
  /** An edge for our `Invoicenumber`. May be used by Relay 1. */
  invoicenumberEdge?: Maybe<InvoicenumbersEdge>;
  /** Reads a single `Organization` that is related to this `Invoicenumber`. */
  organizationByInvoiceOrganizationid?: Maybe<Organization>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Invoicenumber` mutation. */
export type UpdateInvoicenumberPayloadInvoicenumberEdgeArgs = {
  orderBy?: InputMaybe<Array<InvoicenumbersOrderBy>>;
};

/** All input for the `updateKnexMigrationById` mutation. */
export type UpdateKnexMigrationByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnexMigration` being updated. */
  knexMigrationPatch: KnexMigrationPatch;
};

/** All input for the `updateKnexMigration` mutation. */
export type UpdateKnexMigrationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnexMigration` being updated. */
  knexMigrationPatch: KnexMigrationPatch;
  /** The globally unique `ID` which will identify a single `KnexMigration` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnexMigration` mutation. */
export type UpdateKnexMigrationPayload = {
  __typename?: 'UpdateKnexMigrationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigration` that was updated by this mutation. */
  knexMigration?: Maybe<KnexMigration>;
  /** An edge for our `KnexMigration`. May be used by Relay 1. */
  knexMigrationEdge?: Maybe<KnexMigrationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnexMigration` mutation. */
export type UpdateKnexMigrationPayloadKnexMigrationEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsOrderBy>>;
};

/** All input for the `updateKnexMigrationsLockByIndex` mutation. */
export type UpdateKnexMigrationsLockByIndexInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  index: Scalars['Int'];
  /** An object where the defined keys will be set on the `KnexMigrationsLock` being updated. */
  knexMigrationsLockPatch: KnexMigrationsLockPatch;
};

/** All input for the `updateKnexMigrationsLock` mutation. */
export type UpdateKnexMigrationsLockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `KnexMigrationsLock` being updated. */
  knexMigrationsLockPatch: KnexMigrationsLockPatch;
  /** The globally unique `ID` which will identify a single `KnexMigrationsLock` to be updated. */
  nodeId: Scalars['ID'];
};

/** The output of our update `KnexMigrationsLock` mutation. */
export type UpdateKnexMigrationsLockPayload = {
  __typename?: 'UpdateKnexMigrationsLockPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `KnexMigrationsLock` that was updated by this mutation. */
  knexMigrationsLock?: Maybe<KnexMigrationsLock>;
  /** An edge for our `KnexMigrationsLock`. May be used by Relay 1. */
  knexMigrationsLockEdge?: Maybe<KnexMigrationsLocksEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `KnexMigrationsLock` mutation. */
export type UpdateKnexMigrationsLockPayloadKnexMigrationsLockEdgeArgs = {
  orderBy?: InputMaybe<Array<KnexMigrationsLocksOrderBy>>;
};

/** All input for the `updateOrganizationByOrganizationid` mutation. */
export type UpdateOrganizationByOrganizationidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Organization` being updated. */
  organizationPatch: OrganizationPatch;
  organizationid: Scalars['Int'];
};

/** All input for the `updateOrganization` mutation. */
export type UpdateOrganizationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organization` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Organization` being updated. */
  organizationPatch: OrganizationPatch;
};

/** The output of our update `Organization` mutation. */
export type UpdateOrganizationPayload = {
  __typename?: 'UpdateOrganizationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Organization` that was updated by this mutation. */
  organization?: Maybe<Organization>;
  /** An edge for our `Organization`. May be used by Relay 1. */
  organizationEdge?: Maybe<OrganizationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Organization` mutation. */
export type UpdateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};

/** All input for the `updateOrganizationaddressByOrganizationidAndAddressid` mutation. */
export type UpdateOrganizationaddressByOrganizationidAndAddressidInput = {
  addressid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Organizationaddress` being updated. */
  organizationaddressPatch: OrganizationaddressPatch;
  organizationid: Scalars['Int'];
};

/** All input for the `updateOrganizationaddress` mutation. */
export type UpdateOrganizationaddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationaddress` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Organizationaddress` being updated. */
  organizationaddressPatch: OrganizationaddressPatch;
};

/** The output of our update `Organizationaddress` mutation. */
export type UpdateOrganizationaddressPayload = {
  __typename?: 'UpdateOrganizationaddressPayload';
  /** Reads a single `Address` that is related to this `Organizationaddress`. */
  addressByAddressid?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Organization` that is related to this `Organizationaddress`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationaddress` that was updated by this mutation. */
  organizationaddress?: Maybe<Organizationaddress>;
  /** An edge for our `Organizationaddress`. May be used by Relay 1. */
  organizationaddressEdge?: Maybe<OrganizationaddressesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Organizationaddress` mutation. */
export type UpdateOrganizationaddressPayloadOrganizationaddressEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationaddressesOrderBy>>;
};

/** All input for the `updateOrganizationattributeByOrganizationidAndTableidAndAttribid` mutation. */
export type UpdateOrganizationattributeByOrganizationidAndTableidAndAttribidInput = {
  attribid: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Organizationattribute` being updated. */
  organizationattributePatch: OrganizationattributePatch;
  organizationid: Scalars['Int'];
  tableid: Scalars['String'];
};

/** All input for the `updateOrganizationattribute` mutation. */
export type UpdateOrganizationattributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationattribute` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Organizationattribute` being updated. */
  organizationattributePatch: OrganizationattributePatch;
};

/** The output of our update `Organizationattribute` mutation. */
export type UpdateOrganizationattributePayload = {
  __typename?: 'UpdateOrganizationattributePayload';
  /** Reads a single `Attribute` that is related to this `Organizationattribute`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Organization` that is related to this `Organizationattribute`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationattribute` that was updated by this mutation. */
  organizationattribute?: Maybe<Organizationattribute>;
  /** An edge for our `Organizationattribute`. May be used by Relay 1. */
  organizationattributeEdge?: Maybe<OrganizationattributesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Organizationattribute` mutation. */
export type UpdateOrganizationattributePayloadOrganizationattributeEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationattributesOrderBy>>;
};

/** All input for the `updateOrganizationbankaccountByOrganizationidAndAccountid` mutation. */
export type UpdateOrganizationbankaccountByOrganizationidAndAccountidInput = {
  accountid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Organizationbankaccount` being updated. */
  organizationbankaccountPatch: OrganizationbankaccountPatch;
  organizationid: Scalars['Int'];
};

/** All input for the `updateOrganizationbankaccount` mutation. */
export type UpdateOrganizationbankaccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationbankaccount` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Organizationbankaccount` being updated. */
  organizationbankaccountPatch: OrganizationbankaccountPatch;
};

/** The output of our update `Organizationbankaccount` mutation. */
export type UpdateOrganizationbankaccountPayload = {
  __typename?: 'UpdateOrganizationbankaccountPayload';
  /** Reads a single `Bankaccount` that is related to this `Organizationbankaccount`. */
  bankaccountByAccountid?: Maybe<Bankaccount>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Organization` that is related to this `Organizationbankaccount`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationbankaccount` that was updated by this mutation. */
  organizationbankaccount?: Maybe<Organizationbankaccount>;
  /** An edge for our `Organizationbankaccount`. May be used by Relay 1. */
  organizationbankaccountEdge?: Maybe<OrganizationbankaccountsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Organizationbankaccount` mutation. */
export type UpdateOrganizationbankaccountPayloadOrganizationbankaccountEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationbankaccountsOrderBy>>;
};

/** All input for the `updateOrganizationcommunicationByOrganizationidAndCommunicationid` mutation. */
export type UpdateOrganizationcommunicationByOrganizationidAndCommunicationidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  communicationid: Scalars['Int'];
  /** An object where the defined keys will be set on the `Organizationcommunication` being updated. */
  organizationcommunicationPatch: OrganizationcommunicationPatch;
  organizationid: Scalars['Int'];
};

/** All input for the `updateOrganizationcommunication` mutation. */
export type UpdateOrganizationcommunicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationcommunication` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Organizationcommunication` being updated. */
  organizationcommunicationPatch: OrganizationcommunicationPatch;
};

/** The output of our update `Organizationcommunication` mutation. */
export type UpdateOrganizationcommunicationPayload = {
  __typename?: 'UpdateOrganizationcommunicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Communication` that is related to this `Organizationcommunication`. */
  communicationByCommunicationid?: Maybe<Communication>;
  /** Reads a single `Organization` that is related to this `Organizationcommunication`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationcommunication` that was updated by this mutation. */
  organizationcommunication?: Maybe<Organizationcommunication>;
  /** An edge for our `Organizationcommunication`. May be used by Relay 1. */
  organizationcommunicationEdge?: Maybe<OrganizationcommunicationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Organizationcommunication` mutation. */
export type UpdateOrganizationcommunicationPayloadOrganizationcommunicationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationcommunicationsOrderBy>>;
};

/** All input for the `updateOrganizationpersonByOrganizationidAndPersonidAndRoletype` mutation. */
export type UpdateOrganizationpersonByOrganizationidAndPersonidAndRoletypeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  organizationid: Scalars['Int'];
  /** An object where the defined keys will be set on the `Organizationperson` being updated. */
  organizationpersonPatch: OrganizationpersonPatch;
  personid: Scalars['Int'];
  roletype: Scalars['String'];
};

/** All input for the `updateOrganizationperson` mutation. */
export type UpdateOrganizationpersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Organizationperson` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Organizationperson` being updated. */
  organizationpersonPatch: OrganizationpersonPatch;
};

/** The output of our update `Organizationperson` mutation. */
export type UpdateOrganizationpersonPayload = {
  __typename?: 'UpdateOrganizationpersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Organization` that is related to this `Organizationperson`. */
  organizationByOrganizationid?: Maybe<Organization>;
  /** The `Organizationperson` that was updated by this mutation. */
  organizationperson?: Maybe<Organizationperson>;
  /** An edge for our `Organizationperson`. May be used by Relay 1. */
  organizationpersonEdge?: Maybe<OrganizationpeopleEdge>;
  /** Reads a single `Person` that is related to this `Organizationperson`. */
  personByPersonid?: Maybe<Person>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Organizationperson` mutation. */
export type UpdateOrganizationpersonPayloadOrganizationpersonEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationpeopleOrderBy>>;
};

/** All input for the `updatePersonByPersonid` mutation. */
export type UpdatePersonByPersonidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Person` being updated. */
  personPatch: PersonPatch;
  personid: Scalars['Int'];
};

/** All input for the `updatePerson` mutation. */
export type UpdatePersonInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Person` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Person` being updated. */
  personPatch: PersonPatch;
};

/** The output of our update `Person` mutation. */
export type UpdatePersonPayload = {
  __typename?: 'UpdatePersonPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** The `Person` that was updated by this mutation. */
  person?: Maybe<Person>;
  /** An edge for our `Person`. May be used by Relay 1. */
  personEdge?: Maybe<PeopleEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Person` mutation. */
export type UpdatePersonPayloadPersonEdgeArgs = {
  orderBy?: InputMaybe<Array<PeopleOrderBy>>;
};

/** All input for the `updatePersonaddressByPersonidAndAddressid` mutation. */
export type UpdatePersonaddressByPersonidAndAddressidInput = {
  addressid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Personaddress` being updated. */
  personaddressPatch: PersonaddressPatch;
  personid: Scalars['Int'];
};

/** All input for the `updatePersonaddress` mutation. */
export type UpdatePersonaddressInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personaddress` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Personaddress` being updated. */
  personaddressPatch: PersonaddressPatch;
};

/** The output of our update `Personaddress` mutation. */
export type UpdatePersonaddressPayload = {
  __typename?: 'UpdatePersonaddressPayload';
  /** Reads a single `Address` that is related to this `Personaddress`. */
  addressByAddressid?: Maybe<Address>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Person` that is related to this `Personaddress`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personaddress` that was updated by this mutation. */
  personaddress?: Maybe<Personaddress>;
  /** An edge for our `Personaddress`. May be used by Relay 1. */
  personaddressEdge?: Maybe<PersonaddressesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Personaddress` mutation. */
export type UpdatePersonaddressPayloadPersonaddressEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonaddressesOrderBy>>;
};

/** All input for the `updatePersonattributeByPersonidAndTableidAndAttribid` mutation. */
export type UpdatePersonattributeByPersonidAndTableidAndAttribidInput = {
  attribid: Scalars['String'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Personattribute` being updated. */
  personattributePatch: PersonattributePatch;
  personid: Scalars['Int'];
  tableid: Scalars['String'];
};

/** All input for the `updatePersonattribute` mutation. */
export type UpdatePersonattributeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personattribute` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Personattribute` being updated. */
  personattributePatch: PersonattributePatch;
};

/** The output of our update `Personattribute` mutation. */
export type UpdatePersonattributePayload = {
  __typename?: 'UpdatePersonattributePayload';
  /** Reads a single `Attribute` that is related to this `Personattribute`. */
  attributeByTableidAndAttribid?: Maybe<Attribute>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Person` that is related to this `Personattribute`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personattribute` that was updated by this mutation. */
  personattribute?: Maybe<Personattribute>;
  /** An edge for our `Personattribute`. May be used by Relay 1. */
  personattributeEdge?: Maybe<PersonattributesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Personattribute` mutation. */
export type UpdatePersonattributePayloadPersonattributeEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonattributesOrderBy>>;
};

/** All input for the `updatePersonbankaccountByPersonidAndAccountid` mutation. */
export type UpdatePersonbankaccountByPersonidAndAccountidInput = {
  accountid: Scalars['Int'];
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Personbankaccount` being updated. */
  personbankaccountPatch: PersonbankaccountPatch;
  personid: Scalars['Int'];
};

/** All input for the `updatePersonbankaccount` mutation. */
export type UpdatePersonbankaccountInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personbankaccount` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Personbankaccount` being updated. */
  personbankaccountPatch: PersonbankaccountPatch;
};

/** The output of our update `Personbankaccount` mutation. */
export type UpdatePersonbankaccountPayload = {
  __typename?: 'UpdatePersonbankaccountPayload';
  /** Reads a single `Bankaccount` that is related to this `Personbankaccount`. */
  bankaccountByAccountid?: Maybe<Bankaccount>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Person` that is related to this `Personbankaccount`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personbankaccount` that was updated by this mutation. */
  personbankaccount?: Maybe<Personbankaccount>;
  /** An edge for our `Personbankaccount`. May be used by Relay 1. */
  personbankaccountEdge?: Maybe<PersonbankaccountsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Personbankaccount` mutation. */
export type UpdatePersonbankaccountPayloadPersonbankaccountEdgeArgs = {
  orderBy?: InputMaybe<Array<PersonbankaccountsOrderBy>>;
};

/** All input for the `updatePersoncommunicationByPersonidAndCommunicationid` mutation. */
export type UpdatePersoncommunicationByPersonidAndCommunicationidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  communicationid: Scalars['Int'];
  /** An object where the defined keys will be set on the `Personcommunication` being updated. */
  personcommunicationPatch: PersoncommunicationPatch;
  personid: Scalars['Int'];
};

/** All input for the `updatePersoncommunication` mutation. */
export type UpdatePersoncommunicationInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personcommunication` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Personcommunication` being updated. */
  personcommunicationPatch: PersoncommunicationPatch;
};

/** The output of our update `Personcommunication` mutation. */
export type UpdatePersoncommunicationPayload = {
  __typename?: 'UpdatePersoncommunicationPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Communication` that is related to this `Personcommunication`. */
  communicationByCommunicationid?: Maybe<Communication>;
  /** Reads a single `Person` that is related to this `Personcommunication`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personcommunication` that was updated by this mutation. */
  personcommunication?: Maybe<Personcommunication>;
  /** An edge for our `Personcommunication`. May be used by Relay 1. */
  personcommunicationEdge?: Maybe<PersoncommunicationsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Personcommunication` mutation. */
export type UpdatePersoncommunicationPayloadPersoncommunicationEdgeArgs = {
  orderBy?: InputMaybe<Array<PersoncommunicationsOrderBy>>;
};

/** All input for the `updatePersoninstrumentByPersonidAndInstrumentid` mutation. */
export type UpdatePersoninstrumentByPersonidAndInstrumentidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  instrumentid: Scalars['Int'];
  personid: Scalars['Int'];
  /** An object where the defined keys will be set on the `Personinstrument` being updated. */
  personinstrumentPatch: PersoninstrumentPatch;
};

/** All input for the `updatePersoninstrument` mutation. */
export type UpdatePersoninstrumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Personinstrument` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Personinstrument` being updated. */
  personinstrumentPatch: PersoninstrumentPatch;
};

/** The output of our update `Personinstrument` mutation. */
export type UpdatePersoninstrumentPayload = {
  __typename?: 'UpdatePersoninstrumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Reads a single `Instrument` that is related to this `Personinstrument`. */
  instrumentByInstrumentid?: Maybe<Instrument>;
  /** Reads a single `Person` that is related to this `Personinstrument`. */
  personByPersonid?: Maybe<Person>;
  /** The `Personinstrument` that was updated by this mutation. */
  personinstrument?: Maybe<Personinstrument>;
  /** An edge for our `Personinstrument`. May be used by Relay 1. */
  personinstrumentEdge?: Maybe<PersoninstrumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Personinstrument` mutation. */
export type UpdatePersoninstrumentPayloadPersoninstrumentEdgeArgs = {
  orderBy?: InputMaybe<Array<PersoninstrumentsOrderBy>>;
};

/** All input for the `updateUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalue` mutation. */
export type UpdateUserSettingByUseridAndObjecttypeAndObjectnameAndPropertynameAndPropertyvalueInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  objectname: Scalars['String'];
  objecttype: Scalars['String'];
  propertyname: Scalars['String'];
  propertyvalue: Scalars['String'];
  /** An object where the defined keys will be set on the `UserSetting` being updated. */
  userSettingPatch: UserSettingPatch;
  userid: Scalars['Int'];
};

/** All input for the `updateUserSetting` mutation. */
export type UpdateUserSettingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `UserSetting` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `UserSetting` being updated. */
  userSettingPatch: UserSettingPatch;
};

/** The output of our update `UserSetting` mutation. */
export type UpdateUserSettingPayload = {
  __typename?: 'UpdateUserSettingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `UserSetting` that was updated by this mutation. */
  userSetting?: Maybe<UserSetting>;
  /** An edge for our `UserSetting`. May be used by Relay 1. */
  userSettingEdge?: Maybe<UserSettingsEdge>;
};


/** The output of our update `UserSetting` mutation. */
export type UpdateUserSettingPayloadUserSettingEdgeArgs = {
  orderBy?: InputMaybe<Array<UserSettingsOrderBy>>;
};

/** All input for the `updateVatByVatid` mutation. */
export type UpdateVatByVatidInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `Vat` being updated. */
  vatPatch: VatPatch;
  vatid: Scalars['Int'];
};

/** All input for the `updateVat` mutation. */
export type UpdateVatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** The globally unique `ID` which will identify a single `Vat` to be updated. */
  nodeId: Scalars['ID'];
  /** An object where the defined keys will be set on the `Vat` being updated. */
  vatPatch: VatPatch;
};

/** The output of our update `Vat` mutation. */
export type UpdateVatPayload = {
  __typename?: 'UpdateVatPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Vat` that was updated by this mutation. */
  vat?: Maybe<Vat>;
  /** An edge for our `Vat`. May be used by Relay 1. */
  vatEdge?: Maybe<VatsEdge>;
};


/** The output of our update `Vat` mutation. */
export type UpdateVatPayloadVatEdgeArgs = {
  orderBy?: InputMaybe<Array<VatsOrderBy>>;
};

export type UserSetting = Node & {
  __typename?: 'UserSetting';
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  objectname: Scalars['String'];
  objecttype: Scalars['String'];
  propertyname: Scalars['String'];
  propertyvalue: Scalars['String'];
  updateby: Scalars['String'];
  userid: Scalars['Int'];
};

/**
 * A condition to be used against `UserSetting` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type UserSettingCondition = {
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `objectname` field. */
  objectname?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `objecttype` field. */
  objecttype?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `propertyname` field. */
  propertyname?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `propertyvalue` field. */
  propertyvalue?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `userid` field. */
  userid?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `UserSetting` */
export type UserSettingInput = {
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  objectname: Scalars['String'];
  objecttype: Scalars['String'];
  propertyname: Scalars['String'];
  propertyvalue: Scalars['String'];
  updateby: Scalars['String'];
  userid: Scalars['Int'];
};

/** Represents an update to a `UserSetting`. Fields that are set will be updated. */
export type UserSettingPatch = {
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  objectname?: InputMaybe<Scalars['String']>;
  objecttype?: InputMaybe<Scalars['String']>;
  propertyname?: InputMaybe<Scalars['String']>;
  propertyvalue?: InputMaybe<Scalars['String']>;
  updateby?: InputMaybe<Scalars['String']>;
  userid?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `UserSetting` values. */
export type UserSettingsConnection = {
  __typename?: 'UserSettingsConnection';
  /** A list of edges which contains the `UserSetting` and cursor to aid in pagination. */
  edges: Array<UserSettingsEdge>;
  /** A list of `UserSetting` objects. */
  nodes: Array<Maybe<UserSetting>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `UserSetting` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `UserSetting` edge in the connection. */
export type UserSettingsEdge = {
  __typename?: 'UserSettingsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `UserSetting` at the end of the edge. */
  node?: Maybe<UserSetting>;
};

/** Methods to use when ordering `UserSetting`. */
export enum UserSettingsOrderBy {
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  ObjectnameAsc = 'OBJECTNAME_ASC',
  ObjectnameDesc = 'OBJECTNAME_DESC',
  ObjecttypeAsc = 'OBJECTTYPE_ASC',
  ObjecttypeDesc = 'OBJECTTYPE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  PropertynameAsc = 'PROPERTYNAME_ASC',
  PropertynameDesc = 'PROPERTYNAME_DESC',
  PropertyvalueAsc = 'PROPERTYVALUE_ASC',
  PropertyvalueDesc = 'PROPERTYVALUE_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC',
  UseridAsc = 'USERID_ASC',
  UseridDesc = 'USERID_DESC'
}

export type Vat = Node & {
  __typename?: 'Vat';
  description: Scalars['String'];
  /** Reads and enables pagination through a set of `FinDefaultVatItem`. */
  finDefaultVatItemsByVatid: FinDefaultVatItemsConnection;
  /** Reads and enables pagination through a set of `FinInvoiceItem`. */
  finInvoiceItemsByVatid: FinInvoiceItemsConnection;
  /** Reads and enables pagination through a set of `FinVatItem`. */
  finVatItemsByVatid: FinVatItemsConnection;
  insertby: Scalars['String'];
  insertdate: Scalars['Datetime'];
  lastupdate: Scalars['Datetime'];
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars['ID'];
  percentage: Scalars['Float'];
  updateby: Scalars['String'];
  vatid: Scalars['Int'];
};


export type VatFinDefaultVatItemsByVatidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinDefaultVatItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinDefaultVatItemsOrderBy>>;
};


export type VatFinInvoiceItemsByVatidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinInvoiceItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinInvoiceItemsOrderBy>>;
};


export type VatFinVatItemsByVatidArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<FinVatItemCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FinVatItemsOrderBy>>;
};

/** A condition to be used against `Vat` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type VatCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertby` field. */
  insertby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `insertdate` field. */
  insertdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `lastupdate` field. */
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `percentage` field. */
  percentage?: InputMaybe<Scalars['Float']>;
  /** Checks for equality with the object’s `updateby` field. */
  updateby?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `vatid` field. */
  vatid?: InputMaybe<Scalars['Int']>;
};

/** An input for mutations affecting `Vat` */
export type VatInput = {
  description: Scalars['String'];
  insertby: Scalars['String'];
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  percentage: Scalars['Float'];
  updateby: Scalars['String'];
  vatid?: InputMaybe<Scalars['Int']>;
};

/** Represents an update to a `Vat`. Fields that are set will be updated. */
export type VatPatch = {
  description?: InputMaybe<Scalars['String']>;
  insertby?: InputMaybe<Scalars['String']>;
  insertdate?: InputMaybe<Scalars['Datetime']>;
  lastupdate?: InputMaybe<Scalars['Datetime']>;
  percentage?: InputMaybe<Scalars['Float']>;
  updateby?: InputMaybe<Scalars['String']>;
  vatid?: InputMaybe<Scalars['Int']>;
};

/** A connection to a list of `Vat` values. */
export type VatsConnection = {
  __typename?: 'VatsConnection';
  /** A list of edges which contains the `Vat` and cursor to aid in pagination. */
  edges: Array<VatsEdge>;
  /** A list of `Vat` objects. */
  nodes: Array<Maybe<Vat>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Vat` you could get from the connection. */
  totalCount: Scalars['Int'];
};

/** A `Vat` edge in the connection. */
export type VatsEdge = {
  __typename?: 'VatsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `Vat` at the end of the edge. */
  node?: Maybe<Vat>;
};

/** Methods to use when ordering `Vat`. */
export enum VatsOrderBy {
  DescriptionAsc = 'DESCRIPTION_ASC',
  DescriptionDesc = 'DESCRIPTION_DESC',
  InsertbyAsc = 'INSERTBY_ASC',
  InsertbyDesc = 'INSERTBY_DESC',
  InsertdateAsc = 'INSERTDATE_ASC',
  InsertdateDesc = 'INSERTDATE_DESC',
  LastupdateAsc = 'LASTUPDATE_ASC',
  LastupdateDesc = 'LASTUPDATE_DESC',
  Natural = 'NATURAL',
  PercentageAsc = 'PERCENTAGE_ASC',
  PercentageDesc = 'PERCENTAGE_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UpdatebyAsc = 'UPDATEBY_ASC',
  UpdatebyDesc = 'UPDATEBY_DESC',
  VatidAsc = 'VATID_ASC',
  VatidDesc = 'VATID_DESC'
}

export type GetCarQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCarQuery = { __typename?: 'Query', carByCarid?: { __typename?: 'Car', licenseplate: string, description?: string | null, remarks?: string | null, startdate: any, enddate?: any | null } | null };

export type GetCarsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCarsQuery = { __typename?: 'Query', allCars?: { __typename?: 'CarsConnection', edges: Array<{ __typename?: 'CarsEdge', node?: { __typename?: 'Car', carid: number, licenseplate: string, description?: string | null, remarks?: string | null, startdate: any, enddate?: any | null } | null }> } | null };


export const GetCarDocument = gql`
    query getCar {
  carByCarid(carid: 2) {
    licenseplate
    description
    remarks
    startdate
    enddate
  }
}
    `;

/**
 * __useGetCarQuery__
 *
 * To run a query within a React component, call `useGetCarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCarQuery(baseOptions?: Apollo.QueryHookOptions<GetCarQuery, GetCarQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options);
      }
export function useGetCarLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarQuery, GetCarQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options);
        }
export type GetCarQueryHookResult = ReturnType<typeof useGetCarQuery>;
export type GetCarLazyQueryHookResult = ReturnType<typeof useGetCarLazyQuery>;
export type GetCarQueryResult = Apollo.QueryResult<GetCarQuery, GetCarQueryVariables>;
export const GetCarsDocument = gql`
    query getCars {
  allCars(condition: {}) {
    edges {
      node {
        carid
        licenseplate
        description
        remarks
        startdate
        enddate
      }
    }
  }
}
    `;

/**
 * __useGetCarsQuery__
 *
 * To run a query within a React component, call `useGetCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCarsQuery(baseOptions?: Apollo.QueryHookOptions<GetCarsQuery, GetCarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options);
      }
export function useGetCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCarsQuery, GetCarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options);
        }
export type GetCarsQueryHookResult = ReturnType<typeof useGetCarsQuery>;
export type GetCarsLazyQueryHookResult = ReturnType<typeof useGetCarsLazyQuery>;
export type GetCarsQueryResult = Apollo.QueryResult<GetCarsQuery, GetCarsQueryVariables>;