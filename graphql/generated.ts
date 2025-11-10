import { gql } from '@apollo/client';
import type * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client/react';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export type Cursor_Ordering =
  /** ascending ordering of the cursor */
  | 'ASC'
  /** descending ordering of the cursor */
  | 'DESC';

/** columns and relationships of "fuel_types" */
export type Fuel_Types = {
  content: Scalars['String']['output'];
  value: Scalars['String']['output'];
  /** An array relationship */
  vehicles: Array<Vehicles>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicles_Aggregate;
};


/** columns and relationships of "fuel_types" */
export type Fuel_TypesVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};


/** columns and relationships of "fuel_types" */
export type Fuel_TypesVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};

/** aggregated selection of "fuel_types" */
export type Fuel_Types_Aggregate = {
  aggregate?: Maybe<Fuel_Types_Aggregate_Fields>;
  nodes: Array<Fuel_Types>;
};

/** aggregate fields of "fuel_types" */
export type Fuel_Types_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Fuel_Types_Max_Fields>;
  min?: Maybe<Fuel_Types_Min_Fields>;
};


/** aggregate fields of "fuel_types" */
export type Fuel_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Fuel_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "fuel_types". All fields are combined with a logical 'AND'. */
export type Fuel_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Fuel_Types_Bool_Exp>>;
  _not?: InputMaybe<Fuel_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Fuel_Types_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
  vehicles?: InputMaybe<Vehicles_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "fuel_types" */
export type Fuel_Types_Constraint =
  /** unique or primary key constraint on columns "content" */
  | 'fuel_types_content_key'
  /** unique or primary key constraint on columns "value" */
  | 'fuel_types_pkey';

/** input type for inserting data into table "fuel_types" */
export type Fuel_Types_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  vehicles?: InputMaybe<Vehicles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Fuel_Types_Max_Fields = {
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Fuel_Types_Min_Fields = {
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "fuel_types" */
export type Fuel_Types_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Fuel_Types>;
};

/** input type for inserting object relation for remote table "fuel_types" */
export type Fuel_Types_Obj_Rel_Insert_Input = {
  data: Fuel_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Fuel_Types_On_Conflict>;
};

/** on_conflict condition type for table "fuel_types" */
export type Fuel_Types_On_Conflict = {
  constraint: Fuel_Types_Constraint;
  update_columns?: Array<Fuel_Types_Update_Column>;
  where?: InputMaybe<Fuel_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "fuel_types". */
export type Fuel_Types_Order_By = {
  content?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Order_By>;
};

/** primary key columns input for table: fuel_types */
export type Fuel_Types_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "fuel_types" */
export type Fuel_Types_Select_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'value';

/** input type for updating data in table "fuel_types" */
export type Fuel_Types_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "fuel_types" */
export type Fuel_Types_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Fuel_Types_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Fuel_Types_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "fuel_types" */
export type Fuel_Types_Update_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'value';

export type Fuel_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fuel_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fuel_Types_Bool_Exp;
};

/** columns and relationships of "genders" */
export type Genders = {
  content: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "genders" */
export type GendersUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "genders" */
export type GendersUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "genders" */
export type Genders_Aggregate = {
  aggregate?: Maybe<Genders_Aggregate_Fields>;
  nodes: Array<Genders>;
};

/** aggregate fields of "genders" */
export type Genders_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Genders_Max_Fields>;
  min?: Maybe<Genders_Min_Fields>;
};


/** aggregate fields of "genders" */
export type Genders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Genders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "genders". All fields are combined with a logical 'AND'. */
export type Genders_Bool_Exp = {
  _and?: InputMaybe<Array<Genders_Bool_Exp>>;
  _not?: InputMaybe<Genders_Bool_Exp>;
  _or?: InputMaybe<Array<Genders_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "genders" */
export type Genders_Constraint =
  /** unique or primary key constraint on columns "content" */
  | 'genders_content_key'
  /** unique or primary key constraint on columns "value" */
  | 'genders_pkey';

/** input type for inserting data into table "genders" */
export type Genders_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Genders_Max_Fields = {
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Genders_Min_Fields = {
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "genders" */
export type Genders_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Genders>;
};

/** input type for inserting object relation for remote table "genders" */
export type Genders_Obj_Rel_Insert_Input = {
  data: Genders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Genders_On_Conflict>;
};

/** on_conflict condition type for table "genders" */
export type Genders_On_Conflict = {
  constraint: Genders_Constraint;
  update_columns?: Array<Genders_Update_Column>;
  where?: InputMaybe<Genders_Bool_Exp>;
};

/** Ordering options when selecting data from "genders". */
export type Genders_Order_By = {
  content?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: genders */
export type Genders_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "genders" */
export type Genders_Select_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'value';

/** input type for updating data in table "genders" */
export type Genders_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "genders" */
export type Genders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Genders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Genders_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "genders" */
export type Genders_Update_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'value';

export type Genders_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Genders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Genders_Bool_Exp;
};

/** mutation root */
export type Mutation_Root = {
  /** delete data from the table: "fuel_types" */
  delete_fuel_types?: Maybe<Fuel_Types_Mutation_Response>;
  /** delete single row from the table: "fuel_types" */
  delete_fuel_types_by_pk?: Maybe<Fuel_Types>;
  /** delete data from the table: "genders" */
  delete_genders?: Maybe<Genders_Mutation_Response>;
  /** delete single row from the table: "genders" */
  delete_genders_by_pk?: Maybe<Genders>;
  /** delete data from the table: "repair_requests" */
  delete_repair_requests?: Maybe<Repair_Requests_Mutation_Response>;
  /** delete single row from the table: "repair_requests" */
  delete_repair_requests_by_pk?: Maybe<Repair_Requests>;
  /** delete data from the table: "requests_logs" */
  delete_requests_logs?: Maybe<Requests_Logs_Mutation_Response>;
  /** delete single row from the table: "requests_logs" */
  delete_requests_logs_by_pk?: Maybe<Requests_Logs>;
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "vehicle_statuses" */
  delete_vehicle_statuses?: Maybe<Vehicle_Statuses_Mutation_Response>;
  /** delete single row from the table: "vehicle_statuses" */
  delete_vehicle_statuses_by_pk?: Maybe<Vehicle_Statuses>;
  /** delete data from the table: "vehicles" */
  delete_vehicles?: Maybe<Vehicles_Mutation_Response>;
  /** delete single row from the table: "vehicles" */
  delete_vehicles_by_pk?: Maybe<Vehicles>;
  /** insert data into the table: "fuel_types" */
  insert_fuel_types?: Maybe<Fuel_Types_Mutation_Response>;
  /** insert a single row into the table: "fuel_types" */
  insert_fuel_types_one?: Maybe<Fuel_Types>;
  /** insert data into the table: "genders" */
  insert_genders?: Maybe<Genders_Mutation_Response>;
  /** insert a single row into the table: "genders" */
  insert_genders_one?: Maybe<Genders>;
  /** insert data into the table: "repair_requests" */
  insert_repair_requests?: Maybe<Repair_Requests_Mutation_Response>;
  /** insert a single row into the table: "repair_requests" */
  insert_repair_requests_one?: Maybe<Repair_Requests>;
  /** insert data into the table: "requests_logs" */
  insert_requests_logs?: Maybe<Requests_Logs_Mutation_Response>;
  /** insert a single row into the table: "requests_logs" */
  insert_requests_logs_one?: Maybe<Requests_Logs>;
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "vehicle_statuses" */
  insert_vehicle_statuses?: Maybe<Vehicle_Statuses_Mutation_Response>;
  /** insert a single row into the table: "vehicle_statuses" */
  insert_vehicle_statuses_one?: Maybe<Vehicle_Statuses>;
  /** insert data into the table: "vehicles" */
  insert_vehicles?: Maybe<Vehicles_Mutation_Response>;
  /** insert a single row into the table: "vehicles" */
  insert_vehicles_one?: Maybe<Vehicles>;
  /** update data of the table: "fuel_types" */
  update_fuel_types?: Maybe<Fuel_Types_Mutation_Response>;
  /** update single row of the table: "fuel_types" */
  update_fuel_types_by_pk?: Maybe<Fuel_Types>;
  /** update multiples rows of table: "fuel_types" */
  update_fuel_types_many?: Maybe<Array<Maybe<Fuel_Types_Mutation_Response>>>;
  /** update data of the table: "genders" */
  update_genders?: Maybe<Genders_Mutation_Response>;
  /** update single row of the table: "genders" */
  update_genders_by_pk?: Maybe<Genders>;
  /** update multiples rows of table: "genders" */
  update_genders_many?: Maybe<Array<Maybe<Genders_Mutation_Response>>>;
  /** update data of the table: "repair_requests" */
  update_repair_requests?: Maybe<Repair_Requests_Mutation_Response>;
  /** update single row of the table: "repair_requests" */
  update_repair_requests_by_pk?: Maybe<Repair_Requests>;
  /** update multiples rows of table: "repair_requests" */
  update_repair_requests_many?: Maybe<Array<Maybe<Repair_Requests_Mutation_Response>>>;
  /** update data of the table: "requests_logs" */
  update_requests_logs?: Maybe<Requests_Logs_Mutation_Response>;
  /** update single row of the table: "requests_logs" */
  update_requests_logs_by_pk?: Maybe<Requests_Logs>;
  /** update multiples rows of table: "requests_logs" */
  update_requests_logs_many?: Maybe<Array<Maybe<Requests_Logs_Mutation_Response>>>;
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update multiples rows of table: "user_roles" */
  update_user_roles_many?: Maybe<Array<Maybe<User_Roles_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
  /** update data of the table: "vehicle_statuses" */
  update_vehicle_statuses?: Maybe<Vehicle_Statuses_Mutation_Response>;
  /** update single row of the table: "vehicle_statuses" */
  update_vehicle_statuses_by_pk?: Maybe<Vehicle_Statuses>;
  /** update multiples rows of table: "vehicle_statuses" */
  update_vehicle_statuses_many?: Maybe<Array<Maybe<Vehicle_Statuses_Mutation_Response>>>;
  /** update data of the table: "vehicles" */
  update_vehicles?: Maybe<Vehicles_Mutation_Response>;
  /** update single row of the table: "vehicles" */
  update_vehicles_by_pk?: Maybe<Vehicles>;
  /** update multiples rows of table: "vehicles" */
  update_vehicles_many?: Maybe<Array<Maybe<Vehicles_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_Fuel_TypesArgs = {
  where: Fuel_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Fuel_Types_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GendersArgs = {
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Genders_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Repair_RequestsArgs = {
  where: Repair_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Repair_Requests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Requests_LogsArgs = {
  where: Requests_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Requests_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  value: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Vehicle_StatusesArgs = {
  where: Vehicle_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vehicle_Statuses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_VehiclesArgs = {
  where: Vehicles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Vehicles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_Fuel_TypesArgs = {
  objects: Array<Fuel_Types_Insert_Input>;
  on_conflict?: InputMaybe<Fuel_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Fuel_Types_OneArgs = {
  object: Fuel_Types_Insert_Input;
  on_conflict?: InputMaybe<Fuel_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_GendersArgs = {
  objects: Array<Genders_Insert_Input>;
  on_conflict?: InputMaybe<Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Genders_OneArgs = {
  object: Genders_Insert_Input;
  on_conflict?: InputMaybe<Genders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Repair_RequestsArgs = {
  objects: Array<Repair_Requests_Insert_Input>;
  on_conflict?: InputMaybe<Repair_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Repair_Requests_OneArgs = {
  object: Repair_Requests_Insert_Input;
  on_conflict?: InputMaybe<Repair_Requests_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Requests_LogsArgs = {
  objects: Array<Requests_Logs_Insert_Input>;
  on_conflict?: InputMaybe<Requests_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Requests_Logs_OneArgs = {
  object: Requests_Logs_Insert_Input;
  on_conflict?: InputMaybe<Requests_Logs_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vehicle_StatusesArgs = {
  objects: Array<Vehicle_Statuses_Insert_Input>;
  on_conflict?: InputMaybe<Vehicle_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vehicle_Statuses_OneArgs = {
  object: Vehicle_Statuses_Insert_Input;
  on_conflict?: InputMaybe<Vehicle_Statuses_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_VehiclesArgs = {
  objects: Array<Vehicles_Insert_Input>;
  on_conflict?: InputMaybe<Vehicles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Vehicles_OneArgs = {
  object: Vehicles_Insert_Input;
  on_conflict?: InputMaybe<Vehicles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Fuel_TypesArgs = {
  _set?: InputMaybe<Fuel_Types_Set_Input>;
  where: Fuel_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Fuel_Types_By_PkArgs = {
  _set?: InputMaybe<Fuel_Types_Set_Input>;
  pk_columns: Fuel_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Fuel_Types_ManyArgs = {
  updates: Array<Fuel_Types_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_GendersArgs = {
  _set?: InputMaybe<Genders_Set_Input>;
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Genders_By_PkArgs = {
  _set?: InputMaybe<Genders_Set_Input>;
  pk_columns: Genders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Genders_ManyArgs = {
  updates: Array<Genders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Repair_RequestsArgs = {
  _set?: InputMaybe<Repair_Requests_Set_Input>;
  where: Repair_Requests_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Repair_Requests_By_PkArgs = {
  _set?: InputMaybe<Repair_Requests_Set_Input>;
  pk_columns: Repair_Requests_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Repair_Requests_ManyArgs = {
  updates: Array<Repair_Requests_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Requests_LogsArgs = {
  _set?: InputMaybe<Requests_Logs_Set_Input>;
  where: Requests_Logs_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Requests_Logs_By_PkArgs = {
  _set?: InputMaybe<Requests_Logs_Set_Input>;
  pk_columns: Requests_Logs_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Requests_Logs_ManyArgs = {
  updates: Array<Requests_Logs_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _set?: InputMaybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_ManyArgs = {
  updates: Array<User_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Vehicle_StatusesArgs = {
  _inc?: InputMaybe<Vehicle_Statuses_Inc_Input>;
  _set?: InputMaybe<Vehicle_Statuses_Set_Input>;
  where: Vehicle_Statuses_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vehicle_Statuses_By_PkArgs = {
  _inc?: InputMaybe<Vehicle_Statuses_Inc_Input>;
  _set?: InputMaybe<Vehicle_Statuses_Set_Input>;
  pk_columns: Vehicle_Statuses_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vehicle_Statuses_ManyArgs = {
  updates: Array<Vehicle_Statuses_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_VehiclesArgs = {
  _inc?: InputMaybe<Vehicles_Inc_Input>;
  _set?: InputMaybe<Vehicles_Set_Input>;
  where: Vehicles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Vehicles_By_PkArgs = {
  _inc?: InputMaybe<Vehicles_Inc_Input>;
  _set?: InputMaybe<Vehicles_Set_Input>;
  pk_columns: Vehicles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Vehicles_ManyArgs = {
  updates: Array<Vehicles_Updates>;
};

/** column ordering options */
export type Order_By =
  /** in ascending order, nulls last */
  | 'asc'
  /** in ascending order, nulls first */
  | 'asc_nulls_first'
  /** in ascending order, nulls last */
  | 'asc_nulls_last'
  /** in descending order, nulls first */
  | 'desc'
  /** in descending order, nulls first */
  | 'desc_nulls_first'
  /** in descending order, nulls last */
  | 'desc_nulls_last';

export type Query_Root = {
  /** fetch data from the table: "fuel_types" */
  fuel_types: Array<Fuel_Types>;
  /** fetch aggregated fields from the table: "fuel_types" */
  fuel_types_aggregate: Fuel_Types_Aggregate;
  /** fetch data from the table: "fuel_types" using primary key columns */
  fuel_types_by_pk?: Maybe<Fuel_Types>;
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  /** An array relationship */
  repair_requests: Array<Repair_Requests>;
  /** An aggregate relationship */
  repair_requests_aggregate: Repair_Requests_Aggregate;
  /** fetch data from the table: "repair_requests" using primary key columns */
  repair_requests_by_pk?: Maybe<Repair_Requests>;
  /** An array relationship */
  requests_logs: Array<Requests_Logs>;
  /** An aggregate relationship */
  requests_logs_aggregate: Requests_Logs_Aggregate;
  /** fetch data from the table: "requests_logs" using primary key columns */
  requests_logs_by_pk?: Maybe<Requests_Logs>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "vehicle_statuses" */
  vehicle_statuses: Array<Vehicle_Statuses>;
  /** fetch aggregated fields from the table: "vehicle_statuses" */
  vehicle_statuses_aggregate: Vehicle_Statuses_Aggregate;
  /** fetch data from the table: "vehicle_statuses" using primary key columns */
  vehicle_statuses_by_pk?: Maybe<Vehicle_Statuses>;
  /** An array relationship */
  vehicles: Array<Vehicles>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicles_Aggregate;
  /** fetch data from the table: "vehicles" using primary key columns */
  vehicles_by_pk?: Maybe<Vehicles>;
};


export type Query_RootFuel_TypesArgs = {
  distinct_on?: InputMaybe<Array<Fuel_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fuel_Types_Order_By>>;
  where?: InputMaybe<Fuel_Types_Bool_Exp>;
};


export type Query_RootFuel_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fuel_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fuel_Types_Order_By>>;
  where?: InputMaybe<Fuel_Types_Bool_Exp>;
};


export type Query_RootFuel_Types_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootGendersArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Query_RootGenders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Query_RootGenders_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootRepair_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


export type Query_RootRepair_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


export type Query_RootRepair_Requests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootRequests_LogsArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};


export type Query_RootRequests_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};


export type Query_RootRequests_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVehicle_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Statuses_Order_By>>;
  where?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
};


export type Query_RootVehicle_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Statuses_Order_By>>;
  where?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
};


export type Query_RootVehicle_Statuses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};


export type Query_RootVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};


export type Query_RootVehicles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

/** columns and relationships of "repair_requests" */
export type Repair_Requests = {
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  mechanic_id?: Maybe<Scalars['uuid']['output']>;
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user?: Maybe<Users>;
  vehcile_id: Scalars['uuid']['output'];
  /** An object relationship */
  vehicle: Vehicles;
};

/** aggregated selection of "repair_requests" */
export type Repair_Requests_Aggregate = {
  aggregate?: Maybe<Repair_Requests_Aggregate_Fields>;
  nodes: Array<Repair_Requests>;
};

export type Repair_Requests_Aggregate_Bool_Exp = {
  count?: InputMaybe<Repair_Requests_Aggregate_Bool_Exp_Count>;
};

export type Repair_Requests_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Repair_Requests_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "repair_requests" */
export type Repair_Requests_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Repair_Requests_Max_Fields>;
  min?: Maybe<Repair_Requests_Min_Fields>;
};


/** aggregate fields of "repair_requests" */
export type Repair_Requests_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "repair_requests" */
export type Repair_Requests_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Repair_Requests_Max_Order_By>;
  min?: InputMaybe<Repair_Requests_Min_Order_By>;
};

/** input type for inserting array relation for remote table "repair_requests" */
export type Repair_Requests_Arr_Rel_Insert_Input = {
  data: Array<Repair_Requests_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Repair_Requests_On_Conflict>;
};

/** Boolean expression to filter rows from the table "repair_requests". All fields are combined with a logical 'AND'. */
export type Repair_Requests_Bool_Exp = {
  _and?: InputMaybe<Array<Repair_Requests_Bool_Exp>>;
  _not?: InputMaybe<Repair_Requests_Bool_Exp>;
  _or?: InputMaybe<Array<Repair_Requests_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  mechanic_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  vehcile_id?: InputMaybe<Uuid_Comparison_Exp>;
  vehicle?: InputMaybe<Vehicles_Bool_Exp>;
};

/** unique or primary key constraints on table "repair_requests" */
export type Repair_Requests_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'repair_requests_pkey';

/** input type for inserting data into table "repair_requests" */
export type Repair_Requests_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mechanic_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  vehcile_id?: InputMaybe<Scalars['uuid']['input']>;
  vehicle?: InputMaybe<Vehicles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Repair_Requests_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mechanic_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehcile_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "repair_requests" */
export type Repair_Requests_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mechanic_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehcile_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Repair_Requests_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  mechanic_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vehcile_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "repair_requests" */
export type Repair_Requests_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mechanic_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehcile_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "repair_requests" */
export type Repair_Requests_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Repair_Requests>;
};

/** on_conflict condition type for table "repair_requests" */
export type Repair_Requests_On_Conflict = {
  constraint: Repair_Requests_Constraint;
  update_columns?: Array<Repair_Requests_Update_Column>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "repair_requests". */
export type Repair_Requests_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mechanic_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  vehcile_id?: InputMaybe<Order_By>;
  vehicle?: InputMaybe<Vehicles_Order_By>;
};

/** primary key columns input for table: repair_requests */
export type Repair_Requests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "repair_requests" */
export type Repair_Requests_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'mechanic_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'vehcile_id';

/** input type for updating data in table "repair_requests" */
export type Repair_Requests_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mechanic_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehcile_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "repair_requests" */
export type Repair_Requests_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Repair_Requests_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Repair_Requests_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  mechanic_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehcile_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "repair_requests" */
export type Repair_Requests_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'id'
  /** column name */
  | 'mechanic_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'vehcile_id';

export type Repair_Requests_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Repair_Requests_Set_Input>;
  /** filter the rows which have to be updated */
  where: Repair_Requests_Bool_Exp;
};

/** columns and relationships of "requests_logs" */
export type Requests_Logs = {
  created_at: Scalars['timestamptz']['output'];
  created_by: Scalars['uuid']['output'];
  editable: Scalars['Boolean']['output'];
  id: Scalars['uuid']['output'];
  long_description: Scalars['String']['output'];
  short_description: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
};

/** aggregated selection of "requests_logs" */
export type Requests_Logs_Aggregate = {
  aggregate?: Maybe<Requests_Logs_Aggregate_Fields>;
  nodes: Array<Requests_Logs>;
};

export type Requests_Logs_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Requests_Logs_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Requests_Logs_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Requests_Logs_Aggregate_Bool_Exp_Count>;
};

export type Requests_Logs_Aggregate_Bool_Exp_Bool_And = {
  arguments: Requests_Logs_Select_Column_Requests_Logs_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Requests_Logs_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Requests_Logs_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Requests_Logs_Select_Column_Requests_Logs_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Requests_Logs_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Requests_Logs_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Requests_Logs_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "requests_logs" */
export type Requests_Logs_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Requests_Logs_Max_Fields>;
  min?: Maybe<Requests_Logs_Min_Fields>;
};


/** aggregate fields of "requests_logs" */
export type Requests_Logs_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "requests_logs" */
export type Requests_Logs_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Requests_Logs_Max_Order_By>;
  min?: InputMaybe<Requests_Logs_Min_Order_By>;
};

/** input type for inserting array relation for remote table "requests_logs" */
export type Requests_Logs_Arr_Rel_Insert_Input = {
  data: Array<Requests_Logs_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Requests_Logs_On_Conflict>;
};

/** Boolean expression to filter rows from the table "requests_logs". All fields are combined with a logical 'AND'. */
export type Requests_Logs_Bool_Exp = {
  _and?: InputMaybe<Array<Requests_Logs_Bool_Exp>>;
  _not?: InputMaybe<Requests_Logs_Bool_Exp>;
  _or?: InputMaybe<Array<Requests_Logs_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Uuid_Comparison_Exp>;
  editable?: InputMaybe<Boolean_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  long_description?: InputMaybe<String_Comparison_Exp>;
  short_description?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "requests_logs" */
export type Requests_Logs_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'requests_logs_pkey';

/** input type for inserting data into table "requests_logs" */
export type Requests_Logs_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  long_description?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Requests_Logs_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  long_description?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "requests_logs" */
export type Requests_Logs_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  long_description?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Requests_Logs_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  created_by?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  long_description?: Maybe<Scalars['String']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "requests_logs" */
export type Requests_Logs_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  long_description?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "requests_logs" */
export type Requests_Logs_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Requests_Logs>;
};

/** on_conflict condition type for table "requests_logs" */
export type Requests_Logs_On_Conflict = {
  constraint: Requests_Logs_Constraint;
  update_columns?: Array<Requests_Logs_Update_Column>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};

/** Ordering options when selecting data from "requests_logs". */
export type Requests_Logs_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  editable?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  long_description?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: requests_logs */
export type Requests_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "requests_logs" */
export type Requests_Logs_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'editable'
  /** column name */
  | 'id'
  /** column name */
  | 'long_description'
  /** column name */
  | 'short_description'
  /** column name */
  | 'updated_at';

/** select "requests_logs_aggregate_bool_exp_bool_and_arguments_columns" columns of table "requests_logs" */
export type Requests_Logs_Select_Column_Requests_Logs_Aggregate_Bool_Exp_Bool_And_Arguments_Columns =
  /** column name */
  | 'editable';

/** select "requests_logs_aggregate_bool_exp_bool_or_arguments_columns" columns of table "requests_logs" */
export type Requests_Logs_Select_Column_Requests_Logs_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns =
  /** column name */
  | 'editable';

/** input type for updating data in table "requests_logs" */
export type Requests_Logs_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  long_description?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "requests_logs" */
export type Requests_Logs_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Requests_Logs_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Requests_Logs_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  created_by?: InputMaybe<Scalars['uuid']['input']>;
  editable?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  long_description?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "requests_logs" */
export type Requests_Logs_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'created_by'
  /** column name */
  | 'editable'
  /** column name */
  | 'id'
  /** column name */
  | 'long_description'
  /** column name */
  | 'short_description'
  /** column name */
  | 'updated_at';

export type Requests_Logs_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Requests_Logs_Set_Input>;
  /** filter the rows which have to be updated */
  where: Requests_Logs_Bool_Exp;
};

export type Subscription_Root = {
  /** fetch data from the table: "fuel_types" */
  fuel_types: Array<Fuel_Types>;
  /** fetch aggregated fields from the table: "fuel_types" */
  fuel_types_aggregate: Fuel_Types_Aggregate;
  /** fetch data from the table: "fuel_types" using primary key columns */
  fuel_types_by_pk?: Maybe<Fuel_Types>;
  /** fetch data from the table in a streaming manner: "fuel_types" */
  fuel_types_stream: Array<Fuel_Types>;
  /** fetch data from the table: "genders" */
  genders: Array<Genders>;
  /** fetch aggregated fields from the table: "genders" */
  genders_aggregate: Genders_Aggregate;
  /** fetch data from the table: "genders" using primary key columns */
  genders_by_pk?: Maybe<Genders>;
  /** fetch data from the table in a streaming manner: "genders" */
  genders_stream: Array<Genders>;
  /** An array relationship */
  repair_requests: Array<Repair_Requests>;
  /** An aggregate relationship */
  repair_requests_aggregate: Repair_Requests_Aggregate;
  /** fetch data from the table: "repair_requests" using primary key columns */
  repair_requests_by_pk?: Maybe<Repair_Requests>;
  /** fetch data from the table in a streaming manner: "repair_requests" */
  repair_requests_stream: Array<Repair_Requests>;
  /** An array relationship */
  requests_logs: Array<Requests_Logs>;
  /** An aggregate relationship */
  requests_logs_aggregate: Requests_Logs_Aggregate;
  /** fetch data from the table: "requests_logs" using primary key columns */
  requests_logs_by_pk?: Maybe<Requests_Logs>;
  /** fetch data from the table in a streaming manner: "requests_logs" */
  requests_logs_stream: Array<Requests_Logs>;
  /** fetch data from the table: "user_roles" */
  user_roles: Array<User_Roles>;
  /** fetch aggregated fields from the table: "user_roles" */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table in a streaming manner: "user_roles" */
  user_roles_stream: Array<User_Roles>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
  /** fetch data from the table: "vehicle_statuses" */
  vehicle_statuses: Array<Vehicle_Statuses>;
  /** fetch aggregated fields from the table: "vehicle_statuses" */
  vehicle_statuses_aggregate: Vehicle_Statuses_Aggregate;
  /** fetch data from the table: "vehicle_statuses" using primary key columns */
  vehicle_statuses_by_pk?: Maybe<Vehicle_Statuses>;
  /** fetch data from the table in a streaming manner: "vehicle_statuses" */
  vehicle_statuses_stream: Array<Vehicle_Statuses>;
  /** An array relationship */
  vehicles: Array<Vehicles>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicles_Aggregate;
  /** fetch data from the table: "vehicles" using primary key columns */
  vehicles_by_pk?: Maybe<Vehicles>;
  /** fetch data from the table in a streaming manner: "vehicles" */
  vehicles_stream: Array<Vehicles>;
};


export type Subscription_RootFuel_TypesArgs = {
  distinct_on?: InputMaybe<Array<Fuel_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fuel_Types_Order_By>>;
  where?: InputMaybe<Fuel_Types_Bool_Exp>;
};


export type Subscription_RootFuel_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Fuel_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Fuel_Types_Order_By>>;
  where?: InputMaybe<Fuel_Types_Bool_Exp>;
};


export type Subscription_RootFuel_Types_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootFuel_Types_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Fuel_Types_Stream_Cursor_Input>>;
  where?: InputMaybe<Fuel_Types_Bool_Exp>;
};


export type Subscription_RootGendersArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootGenders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Genders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Genders_Order_By>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootGenders_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootGenders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Genders_Stream_Cursor_Input>>;
  where?: InputMaybe<Genders_Bool_Exp>;
};


export type Subscription_RootRepair_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


export type Subscription_RootRepair_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


export type Subscription_RootRepair_Requests_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRepair_Requests_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Repair_Requests_Stream_Cursor_Input>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


export type Subscription_RootRequests_LogsArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};


export type Subscription_RootRequests_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};


export type Subscription_RootRequests_Logs_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootRequests_Logs_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Requests_Logs_Stream_Cursor_Input>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};


export type Subscription_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_By_PkArgs = {
  value: Scalars['String']['input'];
};


export type Subscription_RootUser_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootVehicle_StatusesArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Statuses_Order_By>>;
  where?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
};


export type Subscription_RootVehicle_Statuses_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicle_Statuses_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicle_Statuses_Order_By>>;
  where?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
};


export type Subscription_RootVehicle_Statuses_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVehicle_Statuses_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicle_Statuses_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
};


export type Subscription_RootVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};


export type Subscription_RootVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};


export type Subscription_RootVehicles_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootVehicles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Vehicles_Stream_Cursor_Input>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_roles" */
export type User_Roles = {
  content: Scalars['String']['output'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  value: Scalars['String']['output'];
};


/** columns and relationships of "user_roles" */
export type User_RolesUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


/** columns and relationships of "user_roles" */
export type User_RolesUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
};


/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  _not?: InputMaybe<User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export type User_Roles_Constraint =
  /** unique or primary key constraint on columns "content" */
  | 'user_roles_content_key'
  /** unique or primary key constraint on columns "value" */
  | 'user_roles_pkey';

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  content?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Roles>;
};

/** input type for inserting object relation for remote table "user_roles" */
export type User_Roles_Obj_Rel_Insert_Input = {
  data: User_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};

/** on_conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns?: Array<User_Roles_Update_Column>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user_roles". */
export type User_Roles_Order_By = {
  content?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  value: Scalars['String']['input'];
};

/** select columns of table "user_roles" */
export type User_Roles_Select_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'value';

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "user_roles" */
export type User_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Roles_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "user_roles" */
export type User_Roles_Update_Column =
  /** column name */
  | 'content'
  /** column name */
  | 'value';

export type User_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Roles_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  family: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  /** An object relationship */
  gender_enum: Genders;
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  /** An array relationship */
  repair_requests: Array<Repair_Requests>;
  /** An aggregate relationship */
  repair_requests_aggregate: Repair_Requests_Aggregate;
  /** An array relationship */
  requests_logs: Array<Requests_Logs>;
  /** An aggregate relationship */
  requests_logs_aggregate: Requests_Logs_Aggregate;
  role: Scalars['String']['output'];
  /** An object relationship */
  role_enum: User_Roles;
  surname: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
};


/** columns and relationships of "users" */
export type UsersRepair_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRepair_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRequests_LogsArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRequests_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

export type Users_Aggregate_Bool_Exp = {
  count?: InputMaybe<Users_Aggregate_Bool_Exp_Count>;
};

export type Users_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Users_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  family?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  gender_enum?: InputMaybe<Genders_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  repair_requests?: InputMaybe<Repair_Requests_Bool_Exp>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Bool_Exp>;
  requests_logs?: InputMaybe<Requests_Logs_Bool_Exp>;
  requests_logs_aggregate?: InputMaybe<Requests_Logs_Aggregate_Bool_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  role_enum?: InputMaybe<User_Roles_Bool_Exp>;
  surname?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export type Users_Constraint =
  /** unique or primary key constraint on columns "email" */
  | 'users_email_key'
  /** unique or primary key constraint on columns "id" */
  | 'users_pkey';

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_enum?: InputMaybe<Genders_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  repair_requests?: InputMaybe<Repair_Requests_Arr_Rel_Insert_Input>;
  requests_logs?: InputMaybe<Requests_Logs_Arr_Rel_Insert_Input>;
  role?: InputMaybe<Scalars['String']['input']>;
  role_enum?: InputMaybe<User_Roles_Obj_Rel_Insert_Input>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  family?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  surname?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  family?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  surname?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  family?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  gender_enum?: InputMaybe<Genders_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Order_By>;
  requests_logs_aggregate?: InputMaybe<Requests_Logs_Aggregate_Order_By>;
  role?: InputMaybe<Order_By>;
  role_enum?: InputMaybe<User_Roles_Order_By>;
  surname?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export type Users_Select_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'family'
  /** column name */
  | 'gender'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'password'
  /** column name */
  | 'role'
  /** column name */
  | 'surname'
  /** column name */
  | 'updated_at';

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  family?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  surname?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export type Users_Update_Column =
  /** column name */
  | 'created_at'
  /** column name */
  | 'email'
  /** column name */
  | 'family'
  /** column name */
  | 'gender'
  /** column name */
  | 'id'
  /** column name */
  | 'name'
  /** column name */
  | 'password'
  /** column name */
  | 'role'
  /** column name */
  | 'surname'
  /** column name */
  | 'updated_at';

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

/** columns and relationships of "vehicle_statuses" */
export type Vehicle_Statuses = {
  color: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  value: Scalars['String']['output'];
  /** An array relationship */
  vehicles: Array<Vehicles>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicles_Aggregate;
  weight: Scalars['Int']['output'];
};


/** columns and relationships of "vehicle_statuses" */
export type Vehicle_StatusesVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};


/** columns and relationships of "vehicle_statuses" */
export type Vehicle_StatusesVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};

/** aggregated selection of "vehicle_statuses" */
export type Vehicle_Statuses_Aggregate = {
  aggregate?: Maybe<Vehicle_Statuses_Aggregate_Fields>;
  nodes: Array<Vehicle_Statuses>;
};

/** aggregate fields of "vehicle_statuses" */
export type Vehicle_Statuses_Aggregate_Fields = {
  avg?: Maybe<Vehicle_Statuses_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicle_Statuses_Max_Fields>;
  min?: Maybe<Vehicle_Statuses_Min_Fields>;
  stddev?: Maybe<Vehicle_Statuses_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicle_Statuses_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicle_Statuses_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicle_Statuses_Sum_Fields>;
  var_pop?: Maybe<Vehicle_Statuses_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicle_Statuses_Var_Samp_Fields>;
  variance?: Maybe<Vehicle_Statuses_Variance_Fields>;
};


/** aggregate fields of "vehicle_statuses" */
export type Vehicle_Statuses_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicle_Statuses_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Vehicle_Statuses_Avg_Fields = {
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "vehicle_statuses". All fields are combined with a logical 'AND'. */
export type Vehicle_Statuses_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicle_Statuses_Bool_Exp>>;
  _not?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicle_Statuses_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
  vehicles?: InputMaybe<Vehicles_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Bool_Exp>;
  weight?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vehicle_statuses" */
export type Vehicle_Statuses_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'vehicle_statuses_pkey'
  /** unique or primary key constraint on columns "value" */
  | 'vehicle_statuses_value_key';

/** input type for incrementing numeric columns in table "vehicle_statuses" */
export type Vehicle_Statuses_Inc_Input = {
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "vehicle_statuses" */
export type Vehicle_Statuses_Insert_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  vehicles?: InputMaybe<Vehicles_Arr_Rel_Insert_Input>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Vehicle_Statuses_Max_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Vehicle_Statuses_Min_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  value?: Maybe<Scalars['String']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

/** response of any mutation on the table "vehicle_statuses" */
export type Vehicle_Statuses_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Vehicle_Statuses>;
};

/** input type for inserting object relation for remote table "vehicle_statuses" */
export type Vehicle_Statuses_Obj_Rel_Insert_Input = {
  data: Vehicle_Statuses_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vehicle_Statuses_On_Conflict>;
};

/** on_conflict condition type for table "vehicle_statuses" */
export type Vehicle_Statuses_On_Conflict = {
  constraint: Vehicle_Statuses_Constraint;
  update_columns?: Array<Vehicle_Statuses_Update_Column>;
  where?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
};

/** Ordering options when selecting data from "vehicle_statuses". */
export type Vehicle_Statuses_Order_By = {
  color?: InputMaybe<Order_By>;
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vehicle_statuses */
export type Vehicle_Statuses_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "vehicle_statuses" */
export type Vehicle_Statuses_Select_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'content'
  /** column name */
  | 'id'
  /** column name */
  | 'value'
  /** column name */
  | 'weight';

/** input type for updating data in table "vehicle_statuses" */
export type Vehicle_Statuses_Set_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Vehicle_Statuses_Stddev_Fields = {
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Vehicle_Statuses_Stddev_Pop_Fields = {
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Vehicle_Statuses_Stddev_Samp_Fields = {
  weight?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "vehicle_statuses" */
export type Vehicle_Statuses_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicle_Statuses_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicle_Statuses_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Statuses_Sum_Fields = {
  weight?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "vehicle_statuses" */
export type Vehicle_Statuses_Update_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'content'
  /** column name */
  | 'id'
  /** column name */
  | 'value'
  /** column name */
  | 'weight';

export type Vehicle_Statuses_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vehicle_Statuses_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vehicle_Statuses_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vehicle_Statuses_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vehicle_Statuses_Var_Pop_Fields = {
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Vehicle_Statuses_Var_Samp_Fields = {
  weight?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Vehicle_Statuses_Variance_Fields = {
  weight?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "vehicles" */
export type Vehicles = {
  color: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fuel: Scalars['String']['output'];
  /** An object relationship */
  fuel_type: Fuel_Types;
  id: Scalars['uuid']['output'];
  make: Scalars['String']['output'];
  mileage: Scalars['Int']['output'];
  model: Scalars['String']['output'];
  plate: Scalars['String']['output'];
  /** An array relationship */
  repair_requests: Array<Repair_Requests>;
  /** An aggregate relationship */
  repair_requests_aggregate: Repair_Requests_Aggregate;
  status_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  /** An object relationship */
  vehicle_status: Vehicle_Statuses;
  vin: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};


/** columns and relationships of "vehicles" */
export type VehiclesRepair_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


/** columns and relationships of "vehicles" */
export type VehiclesRepair_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};

/** aggregated selection of "vehicles" */
export type Vehicles_Aggregate = {
  aggregate?: Maybe<Vehicles_Aggregate_Fields>;
  nodes: Array<Vehicles>;
};

export type Vehicles_Aggregate_Bool_Exp = {
  count?: InputMaybe<Vehicles_Aggregate_Bool_Exp_Count>;
};

export type Vehicles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Vehicles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Vehicles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "vehicles" */
export type Vehicles_Aggregate_Fields = {
  avg?: Maybe<Vehicles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Vehicles_Max_Fields>;
  min?: Maybe<Vehicles_Min_Fields>;
  stddev?: Maybe<Vehicles_Stddev_Fields>;
  stddev_pop?: Maybe<Vehicles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Vehicles_Stddev_Samp_Fields>;
  sum?: Maybe<Vehicles_Sum_Fields>;
  var_pop?: Maybe<Vehicles_Var_Pop_Fields>;
  var_samp?: Maybe<Vehicles_Var_Samp_Fields>;
  variance?: Maybe<Vehicles_Variance_Fields>;
};


/** aggregate fields of "vehicles" */
export type Vehicles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Vehicles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "vehicles" */
export type Vehicles_Aggregate_Order_By = {
  avg?: InputMaybe<Vehicles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Vehicles_Max_Order_By>;
  min?: InputMaybe<Vehicles_Min_Order_By>;
  stddev?: InputMaybe<Vehicles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Vehicles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Vehicles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Vehicles_Sum_Order_By>;
  var_pop?: InputMaybe<Vehicles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Vehicles_Var_Samp_Order_By>;
  variance?: InputMaybe<Vehicles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "vehicles" */
export type Vehicles_Arr_Rel_Insert_Input = {
  data: Array<Vehicles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Vehicles_On_Conflict>;
};

/** aggregate avg on columns */
export type Vehicles_Avg_Fields = {
  mileage?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vehicles" */
export type Vehicles_Avg_Order_By = {
  mileage?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicles". All fields are combined with a logical 'AND'. */
export type Vehicles_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicles_Bool_Exp>>;
  _not?: InputMaybe<Vehicles_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicles_Bool_Exp>>;
  color?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  fuel?: InputMaybe<String_Comparison_Exp>;
  fuel_type?: InputMaybe<Fuel_Types_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  make?: InputMaybe<String_Comparison_Exp>;
  mileage?: InputMaybe<Int_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  plate?: InputMaybe<String_Comparison_Exp>;
  repair_requests?: InputMaybe<Repair_Requests_Bool_Exp>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Bool_Exp>;
  status_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  vehicle_status?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
  vin?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vehicles" */
export type Vehicles_Constraint =
  /** unique or primary key constraint on columns "id" */
  | 'vehicles_pkey'
  /** unique or primary key constraint on columns "vin" */
  | 'vehicles_vin_key';

/** input type for incrementing numeric columns in table "vehicles" */
export type Vehicles_Inc_Input = {
  mileage?: InputMaybe<Scalars['Int']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "vehicles" */
export type Vehicles_Insert_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fuel?: InputMaybe<Scalars['String']['input']>;
  fuel_type?: InputMaybe<Fuel_Types_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  mileage?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  plate?: InputMaybe<Scalars['String']['input']>;
  repair_requests?: InputMaybe<Repair_Requests_Arr_Rel_Insert_Input>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vehicle_status?: InputMaybe<Vehicle_Statuses_Obj_Rel_Insert_Input>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Vehicles_Max_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fuel?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  make?: Maybe<Scalars['String']['output']>;
  mileage?: Maybe<Scalars['Int']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  plate?: Maybe<Scalars['String']['output']>;
  status_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "vehicles" */
export type Vehicles_Max_Order_By = {
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fuel?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  make?: InputMaybe<Order_By>;
  mileage?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  plate?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vin?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicles_Min_Fields = {
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  fuel?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  make?: Maybe<Scalars['String']['output']>;
  mileage?: Maybe<Scalars['Int']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  plate?: Maybe<Scalars['String']['output']>;
  status_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "vehicles" */
export type Vehicles_Min_Order_By = {
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fuel?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  make?: InputMaybe<Order_By>;
  mileage?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  plate?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vin?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "vehicles" */
export type Vehicles_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Vehicles>;
};

/** input type for inserting object relation for remote table "vehicles" */
export type Vehicles_Obj_Rel_Insert_Input = {
  data: Vehicles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Vehicles_On_Conflict>;
};

/** on_conflict condition type for table "vehicles" */
export type Vehicles_On_Conflict = {
  constraint: Vehicles_Constraint;
  update_columns?: Array<Vehicles_Update_Column>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};

/** Ordering options when selecting data from "vehicles". */
export type Vehicles_Order_By = {
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  fuel?: InputMaybe<Order_By>;
  fuel_type?: InputMaybe<Fuel_Types_Order_By>;
  id?: InputMaybe<Order_By>;
  make?: InputMaybe<Order_By>;
  mileage?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  plate?: InputMaybe<Order_By>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_status?: InputMaybe<Vehicle_Statuses_Order_By>;
  vin?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vehicles */
export type Vehicles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "vehicles" */
export type Vehicles_Select_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'created_at'
  /** column name */
  | 'fuel'
  /** column name */
  | 'id'
  /** column name */
  | 'make'
  /** column name */
  | 'mileage'
  /** column name */
  | 'model'
  /** column name */
  | 'plate'
  /** column name */
  | 'status_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'vin'
  /** column name */
  | 'year';

/** input type for updating data in table "vehicles" */
export type Vehicles_Set_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fuel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  mileage?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  plate?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Vehicles_Stddev_Fields = {
  mileage?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vehicles" */
export type Vehicles_Stddev_Order_By = {
  mileage?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicles_Stddev_Pop_Fields = {
  mileage?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vehicles" */
export type Vehicles_Stddev_Pop_Order_By = {
  mileage?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicles_Stddev_Samp_Fields = {
  mileage?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vehicles" */
export type Vehicles_Stddev_Samp_Order_By = {
  mileage?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "vehicles" */
export type Vehicles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Vehicles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Vehicles_Stream_Cursor_Value_Input = {
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  fuel?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  mileage?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  plate?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Vehicles_Sum_Fields = {
  mileage?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "vehicles" */
export type Vehicles_Sum_Order_By = {
  mileage?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** update columns of table "vehicles" */
export type Vehicles_Update_Column =
  /** column name */
  | 'color'
  /** column name */
  | 'created_at'
  /** column name */
  | 'fuel'
  /** column name */
  | 'id'
  /** column name */
  | 'make'
  /** column name */
  | 'mileage'
  /** column name */
  | 'model'
  /** column name */
  | 'plate'
  /** column name */
  | 'status_id'
  /** column name */
  | 'updated_at'
  /** column name */
  | 'vin'
  /** column name */
  | 'year';

export type Vehicles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Vehicles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Vehicles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Vehicles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Vehicles_Var_Pop_Fields = {
  mileage?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vehicles" */
export type Vehicles_Var_Pop_Order_By = {
  mileage?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicles_Var_Samp_Fields = {
  mileage?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vehicles" */
export type Vehicles_Var_Samp_Order_By = {
  mileage?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicles_Variance_Fields = {
  mileage?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vehicles" */
export type Vehicles_Variance_Order_By = {
  mileage?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

export type RegisterMutationVariables = Exact<{
  user: Users_Insert_Input;
}>;


export type RegisterMutation = { insert_users_one?: { id: any, created_at: any, updated_at: any, email: string, name: string, surname: string, family: string, gender_enum: { value: string, content: string }, role_enum: { value: string, content: string } } | null };

export type LoginQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { users: Array<{ id: any, created_at: any, updated_at: any, email: string, name: string, surname: string, family: string, gender_enum: { value: string, content: string }, role_enum: { value: string, content: string } }> };

export type GetUsersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  condition?: Users_Bool_Exp;
  orderBy?: InputMaybe<Array<Users_Order_By> | Users_Order_By>;
}>;


export type GetUsersQuery = { users: Array<{ id: any, created_at: any, updated_at: any, email: string, name: string, surname: string, family: string, gender_enum: { value: string, content: string }, role_enum: { value: string, content: string } }>, users_aggregate: { aggregate?: { count: number } | null } };

export type UserFragment = { id: any, created_at: any, updated_at: any, email: string, name: string, surname: string, family: string, gender_enum: { value: string, content: string }, role_enum: { value: string, content: string } };

export type GetVehiclesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  condition?: Vehicles_Bool_Exp;
  orderBy?: InputMaybe<Array<Vehicles_Order_By> | Vehicles_Order_By>;
}>;


export type GetVehiclesQuery = { vehicles: Array<{ id: any, created_at?: any | null, updated_at?: any | null, vin: string, plate: string, model: string, year: number, make: string, mileage: number, fuel: string, color: string, vehicle_status: { value: string, content: string } }>, vehicles_aggregate: { aggregate?: { count: number } | null } };

export type VehicleFragment = { id: any, created_at?: any | null, updated_at?: any | null, vin: string, plate: string, model: string, year: number, make: string, mileage: number, fuel: string, color: string, vehicle_status: { value: string, content: string } };

export const UserFragmentDoc = gql`
    fragment user on users {
  id
  created_at
  updated_at
  email
  name
  surname
  family
  gender_enum {
    value
    content
  }
  role_enum {
    value
    content
  }
}
    `;
export const VehicleFragmentDoc = gql`
    fragment vehicle on vehicles {
  id
  created_at
  updated_at
  vin
  plate
  model
  year
  make
  mileage
  fuel
  color
  vehicle_status {
    value
    content
  }
}
    `;
export const RegisterDocument = gql`
    mutation Register($user: users_insert_input!) {
  insert_users_one(object: $user) {
    ...user
  }
}
    ${UserFragmentDoc}`;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const LoginDocument = gql`
    query Login($email: String!, $password: String!) {
  users(where: {email: {_eq: $email}, password: {_eq: $password}}) {
    ...user
  }
}
    ${UserFragmentDoc}`;

/**
 * __useLoginQuery__
 *
 * To run a query within a React component, call `useLoginQuery` and pass it any options that fit your needs.
 * When your component renders, `useLoginQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLoginQuery({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginQuery(baseOptions: ApolloReactHooks.QueryHookOptions<LoginQuery, LoginQueryVariables> & ({ variables: LoginQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
      }
export function useLoginLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export function useLoginSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<LoginQuery, LoginQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<LoginQuery, LoginQueryVariables>(LoginDocument, options);
        }
export type LoginQueryHookResult = ReturnType<typeof useLoginQuery>;
export type LoginLazyQueryHookResult = ReturnType<typeof useLoginLazyQuery>;
export type LoginSuspenseQueryHookResult = ReturnType<typeof useLoginSuspenseQuery>;
export type LoginQueryResult = ApolloReactCommon.QueryResult<LoginQuery, LoginQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers($limit: Int, $offset: Int, $condition: users_bool_exp! = {}, $orderBy: [users_order_by!] = {created_at: desc}) {
  users(where: $condition, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...user
  }
  users_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      condition: // value for 'condition'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetVehiclesDocument = gql`
    query GetVehicles($limit: Int, $offset: Int, $condition: vehicles_bool_exp! = {}, $orderBy: [vehicles_order_by!] = {created_at: asc}) {
  vehicles(where: $condition, limit: $limit, offset: $offset, order_by: $orderBy) {
    ...vehicle
  }
  vehicles_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${VehicleFragmentDoc}`;

/**
 * __useGetVehiclesQuery__
 *
 * To run a query within a React component, call `useGetVehiclesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVehiclesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVehiclesQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      condition: // value for 'condition'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetVehiclesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetVehiclesQuery, GetVehiclesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetVehiclesQuery, GetVehiclesQueryVariables>(GetVehiclesDocument, options);
      }
export function useGetVehiclesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetVehiclesQuery, GetVehiclesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetVehiclesQuery, GetVehiclesQueryVariables>(GetVehiclesDocument, options);
        }
export function useGetVehiclesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetVehiclesQuery, GetVehiclesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetVehiclesQuery, GetVehiclesQueryVariables>(GetVehiclesDocument, options);
        }
export type GetVehiclesQueryHookResult = ReturnType<typeof useGetVehiclesQuery>;
export type GetVehiclesLazyQueryHookResult = ReturnType<typeof useGetVehiclesLazyQuery>;
export type GetVehiclesSuspenseQueryHookResult = ReturnType<typeof useGetVehiclesSuspenseQuery>;
export type GetVehiclesQueryResult = ApolloReactCommon.QueryResult<GetVehiclesQuery, GetVehiclesQueryVariables>;