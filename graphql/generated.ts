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
  timestamp: { input: any; output: any; }
  uuid: { input: any; output: any; }
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
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  ASC = 'ASC',
  /** descending ordering of the cursor */
  DESC = 'DESC'
}

/** columns and relationships of "fuel_types" */
export type Fuel_Types = {
  code: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
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
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  vehicles?: InputMaybe<Vehicles_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "fuel_types" */
export enum Fuel_Types_Constraint {
  /** unique or primary key constraint on columns "code" */
  fuel_types_code_key = 'fuel_types_code_key',
  /** unique or primary key constraint on columns "id" */
  fuel_types_pkey = 'fuel_types_pkey'
}

/** input type for inserting data into table "fuel_types" */
export type Fuel_Types_Insert_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  vehicles?: InputMaybe<Vehicles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Fuel_Types_Max_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Fuel_Types_Min_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
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
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Order_By>;
};

/** primary key columns input for table: fuel_types */
export type Fuel_Types_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "fuel_types" */
export enum Fuel_Types_Select_Column {
  /** column name */
  code = 'code',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "fuel_types" */
export type Fuel_Types_Set_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
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
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "fuel_types" */
export enum Fuel_Types_Update_Column {
  /** column name */
  code = 'code',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at'
}

export type Fuel_Types_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Fuel_Types_Set_Input>;
  /** filter the rows which have to be updated */
  where: Fuel_Types_Bool_Exp;
};

/** columns and relationships of "genders" */
export type Genders = {
  code: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
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
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "genders" */
export enum Genders_Constraint {
  /** unique or primary key constraint on columns "code" */
  genders_code_key = 'genders_code_key',
  /** unique or primary key constraint on columns "id" */
  genders_pkey = 'genders_pkey'
}

/** input type for inserting data into table "genders" */
export type Genders_Insert_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Genders_Max_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type Genders_Min_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
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
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: genders */
export type Genders_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "genders" */
export enum Genders_Select_Column {
  /** column name */
  code = 'code',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "genders" */
export type Genders_Set_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
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
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "genders" */
export enum Genders_Update_Column {
  /** column name */
  code = 'code',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at'
}

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
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_GendersArgs = {
  where: Genders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Genders_By_PkArgs = {
  id: Scalars['uuid']['input'];
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
  id: Scalars['uuid']['input'];
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
export enum Order_By {
  /** in ascending order, nulls last */
  asc = 'asc',
  /** in ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in descending order, nulls first */
  desc = 'desc',
  /** in descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last'
}

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
  id: Scalars['uuid']['input'];
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
  id: Scalars['uuid']['input'];
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
  id: Scalars['uuid']['input'];
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
  automechanic_id?: Maybe<Scalars['uuid']['output']>;
  created_at: Scalars['timestamp']['output'];
  customer_id: Scalars['uuid']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['uuid']['output'];
  requested_at: Scalars['timestamp']['output'];
  /** An array relationship */
  requests_logs: Array<Requests_Logs>;
  /** An aggregate relationship */
  requests_logs_aggregate: Requests_Logs_Aggregate;
  scheduled_for?: Maybe<Scalars['timestamp']['output']>;
  status_id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An object relationship */
  userByCustomerId: Users;
  /** An object relationship */
  vehicle: Vehicles;
  vehicle_id: Scalars['uuid']['output'];
  /** An object relationship */
  vehicle_status: Vehicle_Statuses;
};


/** columns and relationships of "repair_requests" */
export type Repair_RequestsRequests_LogsArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};


/** columns and relationships of "repair_requests" */
export type Repair_RequestsRequests_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
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
  automechanic_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  customer_id?: InputMaybe<Uuid_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  requested_at?: InputMaybe<Timestamp_Comparison_Exp>;
  requests_logs?: InputMaybe<Requests_Logs_Bool_Exp>;
  requests_logs_aggregate?: InputMaybe<Requests_Logs_Aggregate_Bool_Exp>;
  scheduled_for?: InputMaybe<Timestamp_Comparison_Exp>;
  status_id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByCustomerId?: InputMaybe<Users_Bool_Exp>;
  vehicle?: InputMaybe<Vehicles_Bool_Exp>;
  vehicle_id?: InputMaybe<Uuid_Comparison_Exp>;
  vehicle_status?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
};

/** unique or primary key constraints on table "repair_requests" */
export enum Repair_Requests_Constraint {
  /** unique or primary key constraint on columns "id" */
  repair_requests_pkey = 'repair_requests_pkey'
}

/** input type for inserting data into table "repair_requests" */
export type Repair_Requests_Insert_Input = {
  automechanic_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  customer_id?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  requested_at?: InputMaybe<Scalars['timestamp']['input']>;
  requests_logs?: InputMaybe<Requests_Logs_Arr_Rel_Insert_Input>;
  scheduled_for?: InputMaybe<Scalars['timestamp']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByCustomerId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  vehicle?: InputMaybe<Vehicles_Obj_Rel_Insert_Input>;
  vehicle_id?: InputMaybe<Scalars['uuid']['input']>;
  vehicle_status?: InputMaybe<Vehicle_Statuses_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Repair_Requests_Max_Fields = {
  automechanic_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  customer_id?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  requested_at?: Maybe<Scalars['timestamp']['output']>;
  scheduled_for?: Maybe<Scalars['timestamp']['output']>;
  status_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  vehicle_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "repair_requests" */
export type Repair_Requests_Max_Order_By = {
  automechanic_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  requested_at?: InputMaybe<Order_By>;
  scheduled_for?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Repair_Requests_Min_Fields = {
  automechanic_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  customer_id?: Maybe<Scalars['uuid']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  requested_at?: Maybe<Scalars['timestamp']['output']>;
  scheduled_for?: Maybe<Scalars['timestamp']['output']>;
  status_id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  vehicle_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "repair_requests" */
export type Repair_Requests_Min_Order_By = {
  automechanic_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  requested_at?: InputMaybe<Order_By>;
  scheduled_for?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "repair_requests" */
export type Repair_Requests_Mutation_Response = {
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Repair_Requests>;
};

/** input type for inserting object relation for remote table "repair_requests" */
export type Repair_Requests_Obj_Rel_Insert_Input = {
  data: Repair_Requests_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Repair_Requests_On_Conflict>;
};

/** on_conflict condition type for table "repair_requests" */
export type Repair_Requests_On_Conflict = {
  constraint: Repair_Requests_Constraint;
  update_columns?: Array<Repair_Requests_Update_Column>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};

/** Ordering options when selecting data from "repair_requests". */
export type Repair_Requests_Order_By = {
  automechanic_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  customer_id?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  requested_at?: InputMaybe<Order_By>;
  requests_logs_aggregate?: InputMaybe<Requests_Logs_Aggregate_Order_By>;
  scheduled_for?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByCustomerId?: InputMaybe<Users_Order_By>;
  vehicle?: InputMaybe<Vehicles_Order_By>;
  vehicle_id?: InputMaybe<Order_By>;
  vehicle_status?: InputMaybe<Vehicle_Statuses_Order_By>;
};

/** primary key columns input for table: repair_requests */
export type Repair_Requests_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "repair_requests" */
export enum Repair_Requests_Select_Column {
  /** column name */
  automechanic_id = 'automechanic_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  customer_id = 'customer_id',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  requested_at = 'requested_at',
  /** column name */
  scheduled_for = 'scheduled_for',
  /** column name */
  status_id = 'status_id',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  vehicle_id = 'vehicle_id'
}

/** input type for updating data in table "repair_requests" */
export type Repair_Requests_Set_Input = {
  automechanic_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  customer_id?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  requested_at?: InputMaybe<Scalars['timestamp']['input']>;
  scheduled_for?: InputMaybe<Scalars['timestamp']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  vehicle_id?: InputMaybe<Scalars['uuid']['input']>;
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
  automechanic_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  customer_id?: InputMaybe<Scalars['uuid']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  requested_at?: InputMaybe<Scalars['timestamp']['input']>;
  scheduled_for?: InputMaybe<Scalars['timestamp']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  vehicle_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "repair_requests" */
export enum Repair_Requests_Update_Column {
  /** column name */
  automechanic_id = 'automechanic_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  customer_id = 'customer_id',
  /** column name */
  description = 'description',
  /** column name */
  id = 'id',
  /** column name */
  requested_at = 'requested_at',
  /** column name */
  scheduled_for = 'scheduled_for',
  /** column name */
  status_id = 'status_id',
  /** column name */
  title = 'title',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  vehicle_id = 'vehicle_id'
}

export type Repair_Requests_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Repair_Requests_Set_Input>;
  /** filter the rows which have to be updated */
  where: Repair_Requests_Bool_Exp;
};

/** columns and relationships of "requests_logs" */
export type Requests_Logs = {
  author_id: Scalars['uuid']['output'];
  author_role_id: Scalars['uuid']['output'];
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  message: Scalars['String']['output'];
  /** An object relationship */
  repair_request: Repair_Requests;
  request_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user: Users;
  /** An object relationship */
  user_role: User_Roles;
};

/** aggregated selection of "requests_logs" */
export type Requests_Logs_Aggregate = {
  aggregate?: Maybe<Requests_Logs_Aggregate_Fields>;
  nodes: Array<Requests_Logs>;
};

export type Requests_Logs_Aggregate_Bool_Exp = {
  count?: InputMaybe<Requests_Logs_Aggregate_Bool_Exp_Count>;
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
  author_id?: InputMaybe<Uuid_Comparison_Exp>;
  author_role_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  repair_request?: InputMaybe<Repair_Requests_Bool_Exp>;
  request_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_role?: InputMaybe<User_Roles_Bool_Exp>;
};

/** unique or primary key constraints on table "requests_logs" */
export enum Requests_Logs_Constraint {
  /** unique or primary key constraint on columns "id" */
  requests_logs_pkey = 'requests_logs_pkey'
}

/** input type for inserting data into table "requests_logs" */
export type Requests_Logs_Insert_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  author_role_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  repair_request?: InputMaybe<Repair_Requests_Obj_Rel_Insert_Input>;
  request_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_role?: InputMaybe<User_Roles_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Requests_Logs_Max_Fields = {
  author_id?: Maybe<Scalars['uuid']['output']>;
  author_role_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  request_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "requests_logs" */
export type Requests_Logs_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  author_role_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Requests_Logs_Min_Fields = {
  author_id?: Maybe<Scalars['uuid']['output']>;
  author_role_id?: Maybe<Scalars['uuid']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  request_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "requests_logs" */
export type Requests_Logs_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  author_role_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  request_id?: InputMaybe<Order_By>;
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
  author_id?: InputMaybe<Order_By>;
  author_role_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  repair_request?: InputMaybe<Repair_Requests_Order_By>;
  request_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_role?: InputMaybe<User_Roles_Order_By>;
};

/** primary key columns input for table: requests_logs */
export type Requests_Logs_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "requests_logs" */
export enum Requests_Logs_Select_Column {
  /** column name */
  author_id = 'author_id',
  /** column name */
  author_role_id = 'author_role_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  message = 'message',
  /** column name */
  request_id = 'request_id',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "requests_logs" */
export type Requests_Logs_Set_Input = {
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  author_role_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  request_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
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
  author_id?: InputMaybe<Scalars['uuid']['input']>;
  author_role_id?: InputMaybe<Scalars['uuid']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  request_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "requests_logs" */
export enum Requests_Logs_Update_Column {
  /** column name */
  author_id = 'author_id',
  /** column name */
  author_role_id = 'author_role_id',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  message = 'message',
  /** column name */
  request_id = 'request_id',
  /** column name */
  updated_at = 'updated_at'
}

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
  id: Scalars['uuid']['input'];
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
  id: Scalars['uuid']['input'];
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
  id: Scalars['uuid']['input'];
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

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

/** columns and relationships of "user_roles" */
export type User_Roles = {
  code: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  requests_logs: Array<Requests_Logs>;
  /** An aggregate relationship */
  requests_logs_aggregate: Requests_Logs_Aggregate;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};


/** columns and relationships of "user_roles" */
export type User_RolesRequests_LogsArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
};


/** columns and relationships of "user_roles" */
export type User_RolesRequests_Logs_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Requests_Logs_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Requests_Logs_Order_By>>;
  where?: InputMaybe<Requests_Logs_Bool_Exp>;
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
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  requests_logs?: InputMaybe<Requests_Logs_Bool_Exp>;
  requests_logs_aggregate?: InputMaybe<Requests_Logs_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  users?: InputMaybe<Users_Bool_Exp>;
  users_aggregate?: InputMaybe<Users_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint on columns "code" */
  user_roles_code_key = 'user_roles_code_key',
  /** unique or primary key constraint on columns "id" */
  user_roles_pkey = 'user_roles_pkey'
}

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  requests_logs?: InputMaybe<Requests_Logs_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  users?: InputMaybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
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
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  requests_logs_aggregate?: InputMaybe<Requests_Logs_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  users_aggregate?: InputMaybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_roles" */
export enum User_Roles_Select_Column {
  /** column name */
  code = 'code',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
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
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "user_roles" */
export enum User_Roles_Update_Column {
  /** column name */
  code = 'code',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at'
}

export type User_Roles_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Roles_Bool_Exp;
};

/** columns and relationships of "users" */
export type Users = {
  created_at: Scalars['timestamp']['output'];
  email: Scalars['String']['output'];
  first_name: Scalars['String']['output'];
  /** An object relationship */
  gender: Genders;
  gender_id: Scalars['uuid']['output'];
  id: Scalars['uuid']['output'];
  last_name: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  repairRequestsByCustomerId: Array<Repair_Requests>;
  /** An aggregate relationship */
  repairRequestsByCustomerId_aggregate: Repair_Requests_Aggregate;
  /** An array relationship */
  repair_requests: Array<Repair_Requests>;
  /** An aggregate relationship */
  repair_requests_aggregate: Repair_Requests_Aggregate;
  /** An array relationship */
  requests_logs: Array<Requests_Logs>;
  /** An aggregate relationship */
  requests_logs_aggregate: Requests_Logs_Aggregate;
  role_id: Scalars['uuid']['output'];
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user_role: User_Roles;
  /** An array relationship */
  vehicles: Array<Vehicles>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicles_Aggregate;
};


/** columns and relationships of "users" */
export type UsersRepairRequestsByCustomerIdArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersRepairRequestsByCustomerId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
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


/** columns and relationships of "users" */
export type UsersVehiclesArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersVehicles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Vehicles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Vehicles_Order_By>>;
  where?: InputMaybe<Vehicles_Bool_Exp>;
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
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<Genders_Bool_Exp>;
  gender_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  phone?: InputMaybe<String_Comparison_Exp>;
  repairRequestsByCustomerId?: InputMaybe<Repair_Requests_Bool_Exp>;
  repairRequestsByCustomerId_aggregate?: InputMaybe<Repair_Requests_Aggregate_Bool_Exp>;
  repair_requests?: InputMaybe<Repair_Requests_Bool_Exp>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Bool_Exp>;
  requests_logs?: InputMaybe<Requests_Logs_Bool_Exp>;
  requests_logs_aggregate?: InputMaybe<Requests_Logs_Aggregate_Bool_Exp>;
  role_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user_role?: InputMaybe<User_Roles_Bool_Exp>;
  vehicles?: InputMaybe<Vehicles_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  users_email_key = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  users_pkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Genders_Obj_Rel_Insert_Input>;
  gender_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  repairRequestsByCustomerId?: InputMaybe<Repair_Requests_Arr_Rel_Insert_Input>;
  repair_requests?: InputMaybe<Repair_Requests_Arr_Rel_Insert_Input>;
  requests_logs?: InputMaybe<Requests_Logs_Arr_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user_role?: InputMaybe<User_Roles_Obj_Rel_Insert_Input>;
  vehicles?: InputMaybe<Vehicles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  created_at?: Maybe<Scalars['timestamp']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  role_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
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
  first_name?: InputMaybe<Order_By>;
  gender?: InputMaybe<Genders_Order_By>;
  gender_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  phone?: InputMaybe<Order_By>;
  repairRequestsByCustomerId_aggregate?: InputMaybe<Repair_Requests_Aggregate_Order_By>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Order_By>;
  requests_logs_aggregate?: InputMaybe<Requests_Logs_Aggregate_Order_By>;
  role_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_role?: InputMaybe<User_Roles_Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  email = 'email',
  /** column name */
  first_name = 'first_name',
  /** column name */
  gender_id = 'gender_id',
  /** column name */
  id = 'id',
  /** column name */
  last_name = 'last_name',
  /** column name */
  password = 'password',
  /** column name */
  phone = 'phone',
  /** column name */
  role_id = 'role_id',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
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
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  email = 'email',
  /** column name */
  first_name = 'first_name',
  /** column name */
  gender_id = 'gender_id',
  /** column name */
  id = 'id',
  /** column name */
  last_name = 'last_name',
  /** column name */
  password = 'password',
  /** column name */
  phone = 'phone',
  /** column name */
  role_id = 'role_id',
  /** column name */
  updated_at = 'updated_at'
}

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
  code: Scalars['String']['output'];
  color: Scalars['String']['output'];
  created_at: Scalars['timestamp']['output'];
  id: Scalars['uuid']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  repair_requests: Array<Repair_Requests>;
  /** An aggregate relationship */
  repair_requests_aggregate: Repair_Requests_Aggregate;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An array relationship */
  vehicles: Array<Vehicles>;
  /** An aggregate relationship */
  vehicles_aggregate: Vehicles_Aggregate;
  weight: Scalars['Int']['output'];
};


/** columns and relationships of "vehicle_statuses" */
export type Vehicle_StatusesRepair_RequestsArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
};


/** columns and relationships of "vehicle_statuses" */
export type Vehicle_StatusesRepair_Requests_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Repair_Requests_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Repair_Requests_Order_By>>;
  where?: InputMaybe<Repair_Requests_Bool_Exp>;
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
  code?: InputMaybe<String_Comparison_Exp>;
  color?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  repair_requests?: InputMaybe<Repair_Requests_Bool_Exp>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Bool_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  vehicles?: InputMaybe<Vehicles_Bool_Exp>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Bool_Exp>;
  weight?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vehicle_statuses" */
export enum Vehicle_Statuses_Constraint {
  /** unique or primary key constraint on columns "code" */
  vehicle_statuses_code_key = 'vehicle_statuses_code_key',
  /** unique or primary key constraint on columns "id" */
  vehicle_statuses_pkey = 'vehicle_statuses_pkey'
}

/** input type for incrementing numeric columns in table "vehicle_statuses" */
export type Vehicle_Statuses_Inc_Input = {
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "vehicle_statuses" */
export type Vehicle_Statuses_Insert_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  repair_requests?: InputMaybe<Repair_Requests_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  vehicles?: InputMaybe<Vehicles_Arr_Rel_Insert_Input>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Vehicle_Statuses_Max_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  weight?: Maybe<Scalars['Int']['output']>;
};

/** aggregate min on columns */
export type Vehicle_Statuses_Min_Fields = {
  code?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
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
  code?: InputMaybe<Order_By>;
  color?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vehicles_aggregate?: InputMaybe<Vehicles_Aggregate_Order_By>;
  weight?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vehicle_statuses */
export type Vehicle_Statuses_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "vehicle_statuses" */
export enum Vehicle_Statuses_Select_Column {
  /** column name */
  code = 'code',
  /** column name */
  color = 'color',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  weight = 'weight'
}

/** input type for updating data in table "vehicle_statuses" */
export type Vehicle_Statuses_Set_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
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
  code?: InputMaybe<Scalars['String']['input']>;
  color?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  weight?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Vehicle_Statuses_Sum_Fields = {
  weight?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "vehicle_statuses" */
export enum Vehicle_Statuses_Update_Column {
  /** column name */
  code = 'code',
  /** column name */
  color = 'color',
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  weight = 'weight'
}

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
  created_at: Scalars['timestamp']['output'];
  /** An object relationship */
  fuel_type?: Maybe<Fuel_Types>;
  fuel_type_id?: Maybe<Scalars['uuid']['output']>;
  id: Scalars['uuid']['output'];
  make: Scalars['String']['output'];
  model: Scalars['String']['output'];
  owner_id?: Maybe<Scalars['uuid']['output']>;
  plate_number?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  repair_requests: Array<Repair_Requests>;
  /** An aggregate relationship */
  repair_requests_aggregate: Repair_Requests_Aggregate;
  status_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  /** An object relationship */
  user?: Maybe<Users>;
  /** An object relationship */
  vehicle_status?: Maybe<Vehicle_Statuses>;
  vin: Scalars['String']['output'];
  year?: Maybe<Scalars['Int']['output']>;
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
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "vehicles" */
export type Vehicles_Avg_Order_By = {
  year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "vehicles". All fields are combined with a logical 'AND'. */
export type Vehicles_Bool_Exp = {
  _and?: InputMaybe<Array<Vehicles_Bool_Exp>>;
  _not?: InputMaybe<Vehicles_Bool_Exp>;
  _or?: InputMaybe<Array<Vehicles_Bool_Exp>>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  fuel_type?: InputMaybe<Fuel_Types_Bool_Exp>;
  fuel_type_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  make?: InputMaybe<String_Comparison_Exp>;
  model?: InputMaybe<String_Comparison_Exp>;
  owner_id?: InputMaybe<Uuid_Comparison_Exp>;
  plate_number?: InputMaybe<String_Comparison_Exp>;
  repair_requests?: InputMaybe<Repair_Requests_Bool_Exp>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Bool_Exp>;
  status_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamp_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  vehicle_status?: InputMaybe<Vehicle_Statuses_Bool_Exp>;
  vin?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "vehicles" */
export enum Vehicles_Constraint {
  /** unique or primary key constraint on columns "id" */
  vehicles_pkey = 'vehicles_pkey',
  /** unique or primary key constraint on columns "vin" */
  vehicles_vin_key = 'vehicles_vin_key'
}

/** input type for incrementing numeric columns in table "vehicles" */
export type Vehicles_Inc_Input = {
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "vehicles" */
export type Vehicles_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  fuel_type?: InputMaybe<Fuel_Types_Obj_Rel_Insert_Input>;
  fuel_type_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  plate_number?: InputMaybe<Scalars['String']['input']>;
  repair_requests?: InputMaybe<Repair_Requests_Arr_Rel_Insert_Input>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  vehicle_status?: InputMaybe<Vehicle_Statuses_Obj_Rel_Insert_Input>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Vehicles_Max_Fields = {
  created_at?: Maybe<Scalars['timestamp']['output']>;
  fuel_type_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  make?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  plate_number?: Maybe<Scalars['String']['output']>;
  status_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "vehicles" */
export type Vehicles_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fuel_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  make?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  plate_number?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  vin?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Vehicles_Min_Fields = {
  created_at?: Maybe<Scalars['timestamp']['output']>;
  fuel_type_id?: Maybe<Scalars['uuid']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  make?: Maybe<Scalars['String']['output']>;
  model?: Maybe<Scalars['String']['output']>;
  owner_id?: Maybe<Scalars['uuid']['output']>;
  plate_number?: Maybe<Scalars['String']['output']>;
  status_id?: Maybe<Scalars['uuid']['output']>;
  updated_at?: Maybe<Scalars['timestamp']['output']>;
  vin?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "vehicles" */
export type Vehicles_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  fuel_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  make?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  plate_number?: InputMaybe<Order_By>;
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
  created_at?: InputMaybe<Order_By>;
  fuel_type?: InputMaybe<Fuel_Types_Order_By>;
  fuel_type_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  make?: InputMaybe<Order_By>;
  model?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  plate_number?: InputMaybe<Order_By>;
  repair_requests_aggregate?: InputMaybe<Repair_Requests_Aggregate_Order_By>;
  status_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  vehicle_status?: InputMaybe<Vehicle_Statuses_Order_By>;
  vin?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: vehicles */
export type Vehicles_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "vehicles" */
export enum Vehicles_Select_Column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  fuel_type_id = 'fuel_type_id',
  /** column name */
  id = 'id',
  /** column name */
  make = 'make',
  /** column name */
  model = 'model',
  /** column name */
  owner_id = 'owner_id',
  /** column name */
  plate_number = 'plate_number',
  /** column name */
  status_id = 'status_id',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  vin = 'vin',
  /** column name */
  year = 'year'
}

/** input type for updating data in table "vehicles" */
export type Vehicles_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  fuel_type_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  plate_number?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Vehicles_Stddev_Fields = {
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "vehicles" */
export type Vehicles_Stddev_Order_By = {
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Vehicles_Stddev_Pop_Fields = {
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "vehicles" */
export type Vehicles_Stddev_Pop_Order_By = {
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Vehicles_Stddev_Samp_Fields = {
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "vehicles" */
export type Vehicles_Stddev_Samp_Order_By = {
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
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  fuel_type_id?: InputMaybe<Scalars['uuid']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  make?: InputMaybe<Scalars['String']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  owner_id?: InputMaybe<Scalars['uuid']['input']>;
  plate_number?: InputMaybe<Scalars['String']['input']>;
  status_id?: InputMaybe<Scalars['uuid']['input']>;
  updated_at?: InputMaybe<Scalars['timestamp']['input']>;
  vin?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Vehicles_Sum_Fields = {
  year?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "vehicles" */
export type Vehicles_Sum_Order_By = {
  year?: InputMaybe<Order_By>;
};

/** update columns of table "vehicles" */
export enum Vehicles_Update_Column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  fuel_type_id = 'fuel_type_id',
  /** column name */
  id = 'id',
  /** column name */
  make = 'make',
  /** column name */
  model = 'model',
  /** column name */
  owner_id = 'owner_id',
  /** column name */
  plate_number = 'plate_number',
  /** column name */
  status_id = 'status_id',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  vin = 'vin',
  /** column name */
  year = 'year'
}

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
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "vehicles" */
export type Vehicles_Var_Pop_Order_By = {
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Vehicles_Var_Samp_Fields = {
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "vehicles" */
export type Vehicles_Var_Samp_Order_By = {
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Vehicles_Variance_Fields = {
  year?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "vehicles" */
export type Vehicles_Variance_Order_By = {
  year?: InputMaybe<Order_By>;
};

export type GetEnumsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetEnumsQuery = { vehicle_statuses: Array<{ id: any, code: string, color: string, name: string, weight: number }>, user_roles: Array<{ id: any, code: string, name: string }>, genders: Array<{ id: any, code: string, name: string }>, fuel_types: Array<{ id: any, code: string, name: string }> };

export type GetRepairRequestsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  condition?: Repair_Requests_Bool_Exp;
  orderBy?: InputMaybe<Array<Repair_Requests_Order_By> | Repair_Requests_Order_By>;
}>;


export type GetRepairRequestsQuery = { repair_requests: Array<{ id: any, created_at: any, updated_at?: any | null, scheduled_for?: any | null, description?: string | null, title: string, vehicle_status: { id: any, code: string, color: string, name: string, weight: number }, logsCount: { aggregate?: { count: number } | null }, vehicle: { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null } }>, repair_requests_aggregate: { aggregate?: { count: number } | null } };

export type CreateRepairRequestMutationVariables = Exact<{
  input: Repair_Requests_Insert_Input;
}>;


export type CreateRepairRequestMutation = { insert_repair_requests_one?: { id: any, created_at: any, updated_at?: any | null, scheduled_for?: any | null, description?: string | null, title: string, vehicle_status: { id: any, code: string, color: string, name: string, weight: number }, logsCount: { aggregate?: { count: number } | null }, vehicle: { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null } } | null };

export type UpdateRepairRequestMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Repair_Requests_Set_Input;
}>;


export type UpdateRepairRequestMutation = { update_repair_requests_by_pk?: { id: any, created_at: any, updated_at?: any | null, scheduled_for?: any | null, description?: string | null, title: string, vehicle_status: { id: any, code: string, color: string, name: string, weight: number }, logsCount: { aggregate?: { count: number } | null }, vehicle: { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null } } | null };

export type GetRepairRequestByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetRepairRequestByIdQuery = { repair_requests_by_pk?: { id: any, created_at: any, updated_at?: any | null, scheduled_for?: any | null, description?: string | null, title: string, vehicle_status: { id: any, code: string, color: string, name: string, weight: number }, requests_logs: Array<{ id: any, created_at: any, updated_at?: any | null, message: string, user: { id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } } }>, logsCount: { aggregate?: { count: number } | null }, vehicle: { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null } } | null };

export type UpsertRepairRequestLogMutationVariables = Exact<{
  object: Requests_Logs_Insert_Input;
}>;


export type UpsertRepairRequestLogMutation = { insert_requests_logs_one?: { id: any, created_at: any, updated_at?: any | null, message: string, user: { id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } } } | null };

export type DeleteRepairRequestLogMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type DeleteRepairRequestLogMutation = { delete_requests_logs_by_pk?: { id: any, created_at: any, updated_at?: any | null, message: string, user: { id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } } } | null };

export type Repair_RequestFragment = { id: any, created_at: any, updated_at?: any | null, scheduled_for?: any | null, description?: string | null, title: string, vehicle_status: { id: any, code: string, color: string, name: string, weight: number }, logsCount: { aggregate?: { count: number } | null }, vehicle: { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null } };

export type Repair_Request_With_LogsFragment = { id: any, created_at: any, updated_at?: any | null, scheduled_for?: any | null, description?: string | null, title: string, vehicle_status: { id: any, code: string, color: string, name: string, weight: number }, requests_logs: Array<{ id: any, created_at: any, updated_at?: any | null, message: string, user: { id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } } }>, logsCount: { aggregate?: { count: number } | null }, vehicle: { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null } };

export type Request_LogFragment = { id: any, created_at: any, updated_at?: any | null, message: string, user: { id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } } };

export type RegisterMutationVariables = Exact<{
  user: Users_Insert_Input;
}>;


export type RegisterMutation = { insert_users_one?: { id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } } | null };

export type LoginQueryVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginQuery = { users: Array<{ id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } }> };

export type GetUsersQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  condition?: Users_Bool_Exp;
  orderBy?: InputMaybe<Array<Users_Order_By> | Users_Order_By>;
}>;


export type GetUsersQuery = { users: Array<{ id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } }>, users_aggregate: { aggregate?: { count: number } | null } };

export type GetAutoMechanicsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAutoMechanicsQuery = { users: Array<{ id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } }> };

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetUserByIdQuery = { users_by_pk?: { password: string, id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } } | null };

export type Edit_UserFragment = { password: string, id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } };

export type UserFragment = { id: any, created_at: any, updated_at?: any | null, email: string, first_name: string, last_name: string, phone?: string | null, gender: { id: any, code: string, name: string }, user_role: { id: any, code: string, name: string } };

export type RoleFragment = { id: any, code: string, name: string };

export type GenderFragment = { id: any, code: string, name: string };

export type InsertVehicleMutationVariables = Exact<{
  vehicle: Vehicles_Insert_Input;
}>;


export type InsertVehicleMutation = { insert_vehicles_one?: { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null } | null };

export type UpdateVehicleMutationVariables = Exact<{
  id: Scalars['uuid']['input'];
  input: Vehicles_Set_Input;
}>;


export type UpdateVehicleMutation = { update_vehicles_by_pk?: { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null } | null };

export type GetVehicleStatusesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetVehicleStatusesQuery = { vehicle_statuses: Array<{ id: any, code: string, color: string, name: string, weight: number }> };

export type GetVehiclesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  condition?: Vehicles_Bool_Exp;
  orderBy?: InputMaybe<Array<Vehicles_Order_By> | Vehicles_Order_By>;
}>;


export type GetVehiclesQuery = { vehicles: Array<{ id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null }>, vehicles_aggregate: { aggregate?: { count: number } | null } };

export type GetVehicleByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetVehicleByIdQuery = { vehicles_by_pk?: { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null } | null };

export type DetachVehicleMutationVariables = Exact<{
  vehicleId: Scalars['uuid']['input'];
}>;


export type DetachVehicleMutation = { update_vehicles_by_pk?: { id: any } | null };

export type VehicleFragment = { id: any, created_at: any, updated_at?: any | null, vin: string, plate_number?: string | null, model: string, year?: number | null, make: string, fuel_type?: { id: any, name: string, code: string } | null, vehicle_status?: { id: any, code: string, color: string, name: string, weight: number } | null };

export type Fuel_TypeFragment = { id: any, code: string, name: string };

export type Vehicle_StatusFragment = { id: any, code: string, color: string, name: string, weight: number };

export const Vehicle_StatusFragmentDoc = gql`
    fragment vehicle_status on vehicle_statuses {
  id
  code
  color
  name
  weight
}
    `;
export const VehicleFragmentDoc = gql`
    fragment vehicle on vehicles {
  id
  created_at
  updated_at
  vin
  plate_number
  model
  year
  make
  fuel_type {
    id
    name
    code
  }
  vehicle_status {
    ...vehicle_status
  }
}
    ${Vehicle_StatusFragmentDoc}`;
export const Repair_RequestFragmentDoc = gql`
    fragment repair_request on repair_requests {
  id
  created_at
  updated_at
  scheduled_for
  vehicle_status {
    ...vehicle_status
  }
  description
  title
  logsCount: requests_logs_aggregate {
    aggregate {
      count
    }
  }
  vehicle {
    ...vehicle
  }
}
    ${Vehicle_StatusFragmentDoc}
${VehicleFragmentDoc}`;
export const GenderFragmentDoc = gql`
    fragment gender on genders {
  id
  code
  name
}
    `;
export const RoleFragmentDoc = gql`
    fragment role on user_roles {
  id
  code
  name
}
    `;
export const UserFragmentDoc = gql`
    fragment user on users {
  id
  created_at
  updated_at
  email
  first_name
  last_name
  phone
  gender {
    ...gender
  }
  user_role {
    ...role
  }
}
    ${GenderFragmentDoc}
${RoleFragmentDoc}`;
export const Request_LogFragmentDoc = gql`
    fragment request_log on requests_logs {
  id
  created_at
  updated_at
  message
  user {
    ...user
  }
}
    ${UserFragmentDoc}`;
export const Repair_Request_With_LogsFragmentDoc = gql`
    fragment repair_request_with_logs on repair_requests {
  id
  created_at
  updated_at
  scheduled_for
  vehicle_status {
    ...vehicle_status
  }
  description
  title
  requests_logs(order_by: {created_at: desc}) {
    ...request_log
  }
  logsCount: requests_logs_aggregate {
    aggregate {
      count
    }
  }
  vehicle {
    ...vehicle
  }
}
    ${Vehicle_StatusFragmentDoc}
${Request_LogFragmentDoc}
${VehicleFragmentDoc}`;
export const Edit_UserFragmentDoc = gql`
    fragment edit_user on users {
  password
  ...user
}
    ${UserFragmentDoc}`;
export const Fuel_TypeFragmentDoc = gql`
    fragment fuel_type on fuel_types {
  id
  code
  name
}
    `;
export const GetEnumsDocument = gql`
    query GetEnums {
  vehicle_statuses(order_by: {weight: asc}) {
    ...vehicle_status
  }
  user_roles {
    ...role
  }
  genders {
    ...gender
  }
  fuel_types {
    ...fuel_type
  }
}
    ${Vehicle_StatusFragmentDoc}
${RoleFragmentDoc}
${GenderFragmentDoc}
${Fuel_TypeFragmentDoc}`;

/**
 * __useGetEnumsQuery__
 *
 * To run a query within a React component, call `useGetEnumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEnumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEnumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetEnumsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetEnumsQuery, GetEnumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetEnumsQuery, GetEnumsQueryVariables>(GetEnumsDocument, options);
      }
export function useGetEnumsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetEnumsQuery, GetEnumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetEnumsQuery, GetEnumsQueryVariables>(GetEnumsDocument, options);
        }
export function useGetEnumsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetEnumsQuery, GetEnumsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetEnumsQuery, GetEnumsQueryVariables>(GetEnumsDocument, options);
        }
export type GetEnumsQueryHookResult = ReturnType<typeof useGetEnumsQuery>;
export type GetEnumsLazyQueryHookResult = ReturnType<typeof useGetEnumsLazyQuery>;
export type GetEnumsSuspenseQueryHookResult = ReturnType<typeof useGetEnumsSuspenseQuery>;
export type GetEnumsQueryResult = ApolloReactCommon.QueryResult<GetEnumsQuery, GetEnumsQueryVariables>;
export const GetRepairRequestsDocument = gql`
    query GetRepairRequests($limit: Int, $offset: Int, $condition: repair_requests_bool_exp! = {}, $orderBy: [repair_requests_order_by!] = {created_at: asc}) {
  repair_requests(
    where: $condition
    limit: $limit
    offset: $offset
    order_by: $orderBy
  ) {
    ...repair_request
  }
  repair_requests_aggregate(where: $condition) {
    aggregate {
      count
    }
  }
}
    ${Repair_RequestFragmentDoc}`;

/**
 * __useGetRepairRequestsQuery__
 *
 * To run a query within a React component, call `useGetRepairRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRepairRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRepairRequestsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *      condition: // value for 'condition'
 *      orderBy: // value for 'orderBy'
 *   },
 * });
 */
export function useGetRepairRequestsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetRepairRequestsQuery, GetRepairRequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRepairRequestsQuery, GetRepairRequestsQueryVariables>(GetRepairRequestsDocument, options);
      }
export function useGetRepairRequestsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRepairRequestsQuery, GetRepairRequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRepairRequestsQuery, GetRepairRequestsQueryVariables>(GetRepairRequestsDocument, options);
        }
export function useGetRepairRequestsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetRepairRequestsQuery, GetRepairRequestsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetRepairRequestsQuery, GetRepairRequestsQueryVariables>(GetRepairRequestsDocument, options);
        }
export type GetRepairRequestsQueryHookResult = ReturnType<typeof useGetRepairRequestsQuery>;
export type GetRepairRequestsLazyQueryHookResult = ReturnType<typeof useGetRepairRequestsLazyQuery>;
export type GetRepairRequestsSuspenseQueryHookResult = ReturnType<typeof useGetRepairRequestsSuspenseQuery>;
export type GetRepairRequestsQueryResult = ApolloReactCommon.QueryResult<GetRepairRequestsQuery, GetRepairRequestsQueryVariables>;
export const CreateRepairRequestDocument = gql`
    mutation CreateRepairRequest($input: repair_requests_insert_input!) {
  insert_repair_requests_one(object: $input) {
    ...repair_request
  }
}
    ${Repair_RequestFragmentDoc}`;
export type CreateRepairRequestMutationFn = ApolloReactCommon.MutationFunction<CreateRepairRequestMutation, CreateRepairRequestMutationVariables>;

/**
 * __useCreateRepairRequestMutation__
 *
 * To run a mutation, you first call `useCreateRepairRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRepairRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRepairRequestMutation, { data, loading, error }] = useCreateRepairRequestMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateRepairRequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateRepairRequestMutation, CreateRepairRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateRepairRequestMutation, CreateRepairRequestMutationVariables>(CreateRepairRequestDocument, options);
      }
export type CreateRepairRequestMutationHookResult = ReturnType<typeof useCreateRepairRequestMutation>;
export type CreateRepairRequestMutationResult = ApolloReactCommon.MutationResult<CreateRepairRequestMutation>;
export type CreateRepairRequestMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateRepairRequestMutation, CreateRepairRequestMutationVariables>;
export const UpdateRepairRequestDocument = gql`
    mutation UpdateRepairRequest($id: uuid!, $input: repair_requests_set_input!) {
  update_repair_requests_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...repair_request
  }
}
    ${Repair_RequestFragmentDoc}`;
export type UpdateRepairRequestMutationFn = ApolloReactCommon.MutationFunction<UpdateRepairRequestMutation, UpdateRepairRequestMutationVariables>;

/**
 * __useUpdateRepairRequestMutation__
 *
 * To run a mutation, you first call `useUpdateRepairRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRepairRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRepairRequestMutation, { data, loading, error }] = useUpdateRepairRequestMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateRepairRequestMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateRepairRequestMutation, UpdateRepairRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateRepairRequestMutation, UpdateRepairRequestMutationVariables>(UpdateRepairRequestDocument, options);
      }
export type UpdateRepairRequestMutationHookResult = ReturnType<typeof useUpdateRepairRequestMutation>;
export type UpdateRepairRequestMutationResult = ApolloReactCommon.MutationResult<UpdateRepairRequestMutation>;
export type UpdateRepairRequestMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateRepairRequestMutation, UpdateRepairRequestMutationVariables>;
export const GetRepairRequestByIdDocument = gql`
    query GetRepairRequestById($id: uuid!) {
  repair_requests_by_pk(id: $id) {
    ...repair_request_with_logs
  }
}
    ${Repair_Request_With_LogsFragmentDoc}`;

/**
 * __useGetRepairRequestByIdQuery__
 *
 * To run a query within a React component, call `useGetRepairRequestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRepairRequestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRepairRequestByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRepairRequestByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetRepairRequestByIdQuery, GetRepairRequestByIdQueryVariables> & ({ variables: GetRepairRequestByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetRepairRequestByIdQuery, GetRepairRequestByIdQueryVariables>(GetRepairRequestByIdDocument, options);
      }
export function useGetRepairRequestByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetRepairRequestByIdQuery, GetRepairRequestByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetRepairRequestByIdQuery, GetRepairRequestByIdQueryVariables>(GetRepairRequestByIdDocument, options);
        }
export function useGetRepairRequestByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetRepairRequestByIdQuery, GetRepairRequestByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetRepairRequestByIdQuery, GetRepairRequestByIdQueryVariables>(GetRepairRequestByIdDocument, options);
        }
export type GetRepairRequestByIdQueryHookResult = ReturnType<typeof useGetRepairRequestByIdQuery>;
export type GetRepairRequestByIdLazyQueryHookResult = ReturnType<typeof useGetRepairRequestByIdLazyQuery>;
export type GetRepairRequestByIdSuspenseQueryHookResult = ReturnType<typeof useGetRepairRequestByIdSuspenseQuery>;
export type GetRepairRequestByIdQueryResult = ApolloReactCommon.QueryResult<GetRepairRequestByIdQuery, GetRepairRequestByIdQueryVariables>;
export const UpsertRepairRequestLogDocument = gql`
    mutation UpsertRepairRequestLog($object: requests_logs_insert_input!) {
  insert_requests_logs_one(
    object: $object
    on_conflict: {constraint: requests_logs_pkey, update_columns: [message]}
  ) {
    ...request_log
  }
}
    ${Request_LogFragmentDoc}`;
export type UpsertRepairRequestLogMutationFn = ApolloReactCommon.MutationFunction<UpsertRepairRequestLogMutation, UpsertRepairRequestLogMutationVariables>;

/**
 * __useUpsertRepairRequestLogMutation__
 *
 * To run a mutation, you first call `useUpsertRepairRequestLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertRepairRequestLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertRepairRequestLogMutation, { data, loading, error }] = useUpsertRepairRequestLogMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpsertRepairRequestLogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpsertRepairRequestLogMutation, UpsertRepairRequestLogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpsertRepairRequestLogMutation, UpsertRepairRequestLogMutationVariables>(UpsertRepairRequestLogDocument, options);
      }
export type UpsertRepairRequestLogMutationHookResult = ReturnType<typeof useUpsertRepairRequestLogMutation>;
export type UpsertRepairRequestLogMutationResult = ApolloReactCommon.MutationResult<UpsertRepairRequestLogMutation>;
export type UpsertRepairRequestLogMutationOptions = ApolloReactCommon.BaseMutationOptions<UpsertRepairRequestLogMutation, UpsertRepairRequestLogMutationVariables>;
export const DeleteRepairRequestLogDocument = gql`
    mutation DeleteRepairRequestLog($id: uuid!) {
  delete_requests_logs_by_pk(id: $id) {
    ...request_log
  }
}
    ${Request_LogFragmentDoc}`;
export type DeleteRepairRequestLogMutationFn = ApolloReactCommon.MutationFunction<DeleteRepairRequestLogMutation, DeleteRepairRequestLogMutationVariables>;

/**
 * __useDeleteRepairRequestLogMutation__
 *
 * To run a mutation, you first call `useDeleteRepairRequestLogMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRepairRequestLogMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRepairRequestLogMutation, { data, loading, error }] = useDeleteRepairRequestLogMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRepairRequestLogMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteRepairRequestLogMutation, DeleteRepairRequestLogMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteRepairRequestLogMutation, DeleteRepairRequestLogMutationVariables>(DeleteRepairRequestLogDocument, options);
      }
export type DeleteRepairRequestLogMutationHookResult = ReturnType<typeof useDeleteRepairRequestLogMutation>;
export type DeleteRepairRequestLogMutationResult = ApolloReactCommon.MutationResult<DeleteRepairRequestLogMutation>;
export type DeleteRepairRequestLogMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteRepairRequestLogMutation, DeleteRepairRequestLogMutationVariables>;
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
export const GetAutoMechanicsDocument = gql`
    query GetAutoMechanics {
  users(
    where: {user_role: {code: {_eq: "autoMechanic"}}}
    order_by: {created_at: desc}
  ) {
    ...user
  }
}
    ${UserFragmentDoc}`;

/**
 * __useGetAutoMechanicsQuery__
 *
 * To run a query within a React component, call `useGetAutoMechanicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAutoMechanicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAutoMechanicsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAutoMechanicsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAutoMechanicsQuery, GetAutoMechanicsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAutoMechanicsQuery, GetAutoMechanicsQueryVariables>(GetAutoMechanicsDocument, options);
      }
export function useGetAutoMechanicsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAutoMechanicsQuery, GetAutoMechanicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAutoMechanicsQuery, GetAutoMechanicsQueryVariables>(GetAutoMechanicsDocument, options);
        }
export function useGetAutoMechanicsSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetAutoMechanicsQuery, GetAutoMechanicsQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetAutoMechanicsQuery, GetAutoMechanicsQueryVariables>(GetAutoMechanicsDocument, options);
        }
export type GetAutoMechanicsQueryHookResult = ReturnType<typeof useGetAutoMechanicsQuery>;
export type GetAutoMechanicsLazyQueryHookResult = ReturnType<typeof useGetAutoMechanicsLazyQuery>;
export type GetAutoMechanicsSuspenseQueryHookResult = ReturnType<typeof useGetAutoMechanicsSuspenseQuery>;
export type GetAutoMechanicsQueryResult = ApolloReactCommon.QueryResult<GetAutoMechanicsQuery, GetAutoMechanicsQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: uuid!) {
  users_by_pk(id: $id) {
    ...edit_user
  }
}
    ${Edit_UserFragmentDoc}`;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables> & ({ variables: GetUserByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = ApolloReactCommon.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const InsertVehicleDocument = gql`
    mutation InsertVehicle($vehicle: vehicles_insert_input!) {
  insert_vehicles_one(object: $vehicle) {
    ...vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type InsertVehicleMutationFn = ApolloReactCommon.MutationFunction<InsertVehicleMutation, InsertVehicleMutationVariables>;

/**
 * __useInsertVehicleMutation__
 *
 * To run a mutation, you first call `useInsertVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertVehicleMutation, { data, loading, error }] = useInsertVehicleMutation({
 *   variables: {
 *      vehicle: // value for 'vehicle'
 *   },
 * });
 */
export function useInsertVehicleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<InsertVehicleMutation, InsertVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<InsertVehicleMutation, InsertVehicleMutationVariables>(InsertVehicleDocument, options);
      }
export type InsertVehicleMutationHookResult = ReturnType<typeof useInsertVehicleMutation>;
export type InsertVehicleMutationResult = ApolloReactCommon.MutationResult<InsertVehicleMutation>;
export type InsertVehicleMutationOptions = ApolloReactCommon.BaseMutationOptions<InsertVehicleMutation, InsertVehicleMutationVariables>;
export const UpdateVehicleDocument = gql`
    mutation UpdateVehicle($id: uuid!, $input: vehicles_set_input!) {
  update_vehicles_by_pk(pk_columns: {id: $id}, _set: $input) {
    ...vehicle
  }
}
    ${VehicleFragmentDoc}`;
export type UpdateVehicleMutationFn = ApolloReactCommon.MutationFunction<UpdateVehicleMutation, UpdateVehicleMutationVariables>;

/**
 * __useUpdateVehicleMutation__
 *
 * To run a mutation, you first call `useUpdateVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateVehicleMutation, { data, loading, error }] = useUpdateVehicleMutation({
 *   variables: {
 *      id: // value for 'id'
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateVehicleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateVehicleMutation, UpdateVehicleMutationVariables>(UpdateVehicleDocument, options);
      }
export type UpdateVehicleMutationHookResult = ReturnType<typeof useUpdateVehicleMutation>;
export type UpdateVehicleMutationResult = ApolloReactCommon.MutationResult<UpdateVehicleMutation>;
export type UpdateVehicleMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateVehicleMutation, UpdateVehicleMutationVariables>;
export const GetVehicleStatusesDocument = gql`
    query GetVehicleStatuses {
  vehicle_statuses(order_by: {weight: asc}) {
    ...vehicle_status
  }
}
    ${Vehicle_StatusFragmentDoc}`;

/**
 * __useGetVehicleStatusesQuery__
 *
 * To run a query within a React component, call `useGetVehicleStatusesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVehicleStatusesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVehicleStatusesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetVehicleStatusesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetVehicleStatusesQuery, GetVehicleStatusesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetVehicleStatusesQuery, GetVehicleStatusesQueryVariables>(GetVehicleStatusesDocument, options);
      }
export function useGetVehicleStatusesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetVehicleStatusesQuery, GetVehicleStatusesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetVehicleStatusesQuery, GetVehicleStatusesQueryVariables>(GetVehicleStatusesDocument, options);
        }
export function useGetVehicleStatusesSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetVehicleStatusesQuery, GetVehicleStatusesQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetVehicleStatusesQuery, GetVehicleStatusesQueryVariables>(GetVehicleStatusesDocument, options);
        }
export type GetVehicleStatusesQueryHookResult = ReturnType<typeof useGetVehicleStatusesQuery>;
export type GetVehicleStatusesLazyQueryHookResult = ReturnType<typeof useGetVehicleStatusesLazyQuery>;
export type GetVehicleStatusesSuspenseQueryHookResult = ReturnType<typeof useGetVehicleStatusesSuspenseQuery>;
export type GetVehicleStatusesQueryResult = ApolloReactCommon.QueryResult<GetVehicleStatusesQuery, GetVehicleStatusesQueryVariables>;
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
export const GetVehicleByIdDocument = gql`
    query GetVehicleById($id: uuid!) {
  vehicles_by_pk(id: $id) {
    ...vehicle
  }
}
    ${VehicleFragmentDoc}`;

/**
 * __useGetVehicleByIdQuery__
 *
 * To run a query within a React component, call `useGetVehicleByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVehicleByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVehicleByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetVehicleByIdQuery(baseOptions: ApolloReactHooks.QueryHookOptions<GetVehicleByIdQuery, GetVehicleByIdQueryVariables> & ({ variables: GetVehicleByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetVehicleByIdQuery, GetVehicleByIdQueryVariables>(GetVehicleByIdDocument, options);
      }
export function useGetVehicleByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetVehicleByIdQuery, GetVehicleByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetVehicleByIdQuery, GetVehicleByIdQueryVariables>(GetVehicleByIdDocument, options);
        }
export function useGetVehicleByIdSuspenseQuery(baseOptions?: ApolloReactHooks.SkipToken | ApolloReactHooks.SuspenseQueryHookOptions<GetVehicleByIdQuery, GetVehicleByIdQueryVariables>) {
          const options = baseOptions === ApolloReactHooks.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useSuspenseQuery<GetVehicleByIdQuery, GetVehicleByIdQueryVariables>(GetVehicleByIdDocument, options);
        }
export type GetVehicleByIdQueryHookResult = ReturnType<typeof useGetVehicleByIdQuery>;
export type GetVehicleByIdLazyQueryHookResult = ReturnType<typeof useGetVehicleByIdLazyQuery>;
export type GetVehicleByIdSuspenseQueryHookResult = ReturnType<typeof useGetVehicleByIdSuspenseQuery>;
export type GetVehicleByIdQueryResult = ApolloReactCommon.QueryResult<GetVehicleByIdQuery, GetVehicleByIdQueryVariables>;
export const DetachVehicleDocument = gql`
    mutation DetachVehicle($vehicleId: uuid!) {
  update_vehicles_by_pk(pk_columns: {id: $vehicleId}, _set: {owner_id: null}) {
    id
  }
}
    `;
export type DetachVehicleMutationFn = ApolloReactCommon.MutationFunction<DetachVehicleMutation, DetachVehicleMutationVariables>;

/**
 * __useDetachVehicleMutation__
 *
 * To run a mutation, you first call `useDetachVehicleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDetachVehicleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [detachVehicleMutation, { data, loading, error }] = useDetachVehicleMutation({
 *   variables: {
 *      vehicleId: // value for 'vehicleId'
 *   },
 * });
 */
export function useDetachVehicleMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DetachVehicleMutation, DetachVehicleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DetachVehicleMutation, DetachVehicleMutationVariables>(DetachVehicleDocument, options);
      }
export type DetachVehicleMutationHookResult = ReturnType<typeof useDetachVehicleMutation>;
export type DetachVehicleMutationResult = ApolloReactCommon.MutationResult<DetachVehicleMutation>;
export type DetachVehicleMutationOptions = ApolloReactCommon.BaseMutationOptions<DetachVehicleMutation, DetachVehicleMutationVariables>;