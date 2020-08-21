/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProtectedPortInput = {|
  id?: ?string,
  markup: string,
|};

export type ModelProtectedPortConditionInput = {|
  markup?: ?ModelStringInput,
  and?: ?Array< ?ModelProtectedPortConditionInput >,
  or?: ?Array< ?ModelProtectedPortConditionInput >,
  not?: ?ModelProtectedPortConditionInput,
|};

export type ModelStringInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type UpdateProtectedPortInput = {|
  id: string,
  markup?: ?string,
|};

export type DeleteProtectedPortInput = {|
  id?: ?string,
|};

export type ModelProtectedPortFilterInput = {|
  id?: ?ModelIDInput,
  markup?: ?ModelStringInput,
  and?: ?Array< ?ModelProtectedPortFilterInput >,
  or?: ?Array< ?ModelProtectedPortFilterInput >,
  not?: ?ModelProtectedPortFilterInput,
|};

export type ModelIDInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type CreateProtectedPortMutationVariables = {|
  input: CreateProtectedPortInput,
  condition?: ?ModelProtectedPortConditionInput,
|};

export type CreateProtectedPortMutation = {|
  createProtectedPort: ? {|
    __typename: "ProtectedPort",
    id: string,
    markup: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type UpdateProtectedPortMutationVariables = {|
  input: UpdateProtectedPortInput,
  condition?: ?ModelProtectedPortConditionInput,
|};

export type UpdateProtectedPortMutation = {|
  updateProtectedPort: ? {|
    __typename: "ProtectedPort",
    id: string,
    markup: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type DeleteProtectedPortMutationVariables = {|
  input: DeleteProtectedPortInput,
  condition?: ?ModelProtectedPortConditionInput,
|};

export type DeleteProtectedPortMutation = {|
  deleteProtectedPort: ? {|
    __typename: "ProtectedPort",
    id: string,
    markup: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type GetProtectedPortQueryVariables = {|
  id: string,
|};

export type GetProtectedPortQuery = {|
  getProtectedPort: ? {|
    __typename: "ProtectedPort",
    id: string,
    markup: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type ListProtectedPortsQueryVariables = {|
  filter?: ?ModelProtectedPortFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListProtectedPortsQuery = {|
  listProtectedPorts: ? {|
    __typename: "ModelProtectedPortConnection",
    items: ? Array<? {|
      __typename: "ProtectedPort",
      id: string,
      markup: string,
      createdAt: any,
      updatedAt: any,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateProtectedPortSubscriptionVariables = {|
  userId: string,
|};

export type OnCreateProtectedPortSubscription = {|
  onCreateProtectedPort: ? {|
    __typename: "ProtectedPort",
    id: string,
    markup: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnUpdateProtectedPortSubscriptionVariables = {|
  userId: string,
|};

export type OnUpdateProtectedPortSubscription = {|
  onUpdateProtectedPort: ? {|
    __typename: "ProtectedPort",
    id: string,
    markup: string,
    createdAt: any,
    updatedAt: any,
  |},
|};

export type OnDeleteProtectedPortSubscriptionVariables = {|
  userId: string,
|};

export type OnDeleteProtectedPortSubscription = {|
  onDeleteProtectedPort: ? {|
    __typename: "ProtectedPort",
    id: string,
    markup: string,
    createdAt: any,
    updatedAt: any,
  |},
|};