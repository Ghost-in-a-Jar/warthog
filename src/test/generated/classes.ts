// This file has been auto-generated by Warthog.  Do not update directly as it
// will be re-written.  If you need to change this file, update models or add
// new TypeGraphQL objects
import { GraphQLID as ID } from "graphql";
import {
  ArgsType,
  Field as TypeGraphQLField,
  Float,
  InputType as TypeGraphQLInputType,
  Int
} from "type-graphql";
import { registerEnumType } from "type-graphql";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { GraphQLJSONObject } = require("graphql-type-json");

import { BaseWhereInput, PaginationArgs } from "../../";
// @ts-ignore
import { KitchenSink } from "../modules/kitchen-sink/kitchen-sink.model";
// @ts-ignore
import { Dish } from "../modules/dish/dish.model";

export enum KitchenSinkOrderByEnum {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",

  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  version_ASC = "version_ASC",
  version_DESC = "version_DESC",

  stringField_ASC = "stringField_ASC",
  stringField_DESC = "stringField_DESC",

  nullableStringField_ASC = "nullableStringField_ASC",
  nullableStringField_DESC = "nullableStringField_DESC",

  dateField_ASC = "dateField_ASC",
  dateField_DESC = "dateField_DESC",

  emailField_ASC = "emailField_ASC",
  emailField_DESC = "emailField_DESC",

  integerField_ASC = "integerField_ASC",
  integerField_DESC = "integerField_DESC",

  booleanField_ASC = "booleanField_ASC",
  booleanField_DESC = "booleanField_DESC",

  floatField_ASC = "floatField_ASC",
  floatField_DESC = "floatField_DESC",

  jsonField_ASC = "jsonField_ASC",
  jsonField_DESC = "jsonField_DESC"
}

registerEnumType(KitchenSinkOrderByEnum, {
  name: "KitchenSinkOrderByInput"
});

@TypeGraphQLInputType()
export class KitchenSinkWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField({ nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField({ nullable: true })
  createdById_contains?: string;

  @TypeGraphQLField({ nullable: true })
  createdById_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  createdById_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField({ nullable: true })
  updatedById_contains?: string;

  @TypeGraphQLField({ nullable: true })
  updatedById_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  updatedById_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField({ nullable: true })
  deletedById_contains?: string;

  @TypeGraphQLField({ nullable: true })
  deletedById_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  deletedById_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  version_eq?: number;

  @TypeGraphQLField({ nullable: true })
  version_gt?: number;

  @TypeGraphQLField({ nullable: true })
  version_gte?: number;

  @TypeGraphQLField({ nullable: true })
  version_lt?: number;

  @TypeGraphQLField({ nullable: true })
  version_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  version_in?: number[];

  @TypeGraphQLField({ nullable: true })
  stringField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  stringField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  stringField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  stringField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  stringField_in?: string[];

  @TypeGraphQLField({ nullable: true })
  nullableStringField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  nullableStringField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  nullableStringField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  nullableStringField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  nullableStringField_in?: string[];

  @TypeGraphQLField({ nullable: true })
  dateField_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  dateField_gte?: Date;

  @TypeGraphQLField({ nullable: true })
  dateField_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  dateField_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  emailField_eq?: string;

  @TypeGraphQLField({ nullable: true })
  emailField_contains?: string;

  @TypeGraphQLField({ nullable: true })
  emailField_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  emailField_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  emailField_in?: string[];

  @TypeGraphQLField({ nullable: true })
  integerField_eq?: number;

  @TypeGraphQLField({ nullable: true })
  integerField_gt?: number;

  @TypeGraphQLField({ nullable: true })
  integerField_gte?: number;

  @TypeGraphQLField({ nullable: true })
  integerField_lt?: number;

  @TypeGraphQLField({ nullable: true })
  integerField_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  integerField_in?: number[];

  @TypeGraphQLField(() => Boolean, { nullable: true })
  booleanField_eq?: Boolean;

  @TypeGraphQLField(() => [Boolean], { nullable: true })
  booleanField_in?: Boolean[];

  @TypeGraphQLField({ nullable: true })
  floatField_eq?: number;

  @TypeGraphQLField({ nullable: true })
  floatField_gt?: number;

  @TypeGraphQLField({ nullable: true })
  floatField_gte?: number;

  @TypeGraphQLField({ nullable: true })
  floatField_lt?: number;

  @TypeGraphQLField({ nullable: true })
  floatField_lte?: number;

  @TypeGraphQLField(() => [Float], { nullable: true })
  floatField_in?: number[];
}

@TypeGraphQLInputType()
export class KitchenSinkWhereUniqueInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id?: string;

  @TypeGraphQLField(() => String, { nullable: true })
  emailField?: string;
}

@TypeGraphQLInputType()
export class KitchenSinkCreateInput {
  @TypeGraphQLField()
  stringField!: string;

  @TypeGraphQLField({ nullable: true })
  nullableStringField?: string;

  @TypeGraphQLField({ nullable: true })
  dateField?: Date;

  @TypeGraphQLField()
  emailField!: string;

  @TypeGraphQLField()
  integerField!: number;

  @TypeGraphQLField()
  booleanField!: boolean;

  @TypeGraphQLField()
  floatField!: number;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  jsonField?: JSON;
}

@TypeGraphQLInputType()
export class KitchenSinkUpdateInput {
  @TypeGraphQLField({ nullable: true })
  stringField?: string;

  @TypeGraphQLField({ nullable: true })
  nullableStringField?: string;

  @TypeGraphQLField({ nullable: true })
  dateField?: Date;

  @TypeGraphQLField({ nullable: true })
  emailField?: string;

  @TypeGraphQLField({ nullable: true })
  integerField?: number;

  @TypeGraphQLField({ nullable: true })
  booleanField?: boolean;

  @TypeGraphQLField({ nullable: true })
  floatField?: number;

  @TypeGraphQLField(() => GraphQLJSONObject, { nullable: true })
  jsonField?: JSON;
}

@ArgsType()
export class KitchenSinkWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => KitchenSinkWhereInput, { nullable: true })
  where?: KitchenSinkWhereInput;

  @TypeGraphQLField(() => KitchenSinkOrderByEnum, { nullable: true })
  orderBy?: KitchenSinkOrderByEnum;
}

@ArgsType()
export class KitchenSinkCreateManyArgs {
  @TypeGraphQLField(() => [KitchenSinkCreateInput])
  data!: KitchenSinkCreateInput[];
}

@ArgsType()
export class KitchenSinkUpdateArgs {
  @TypeGraphQLField() data!: KitchenSinkUpdateInput;
  @TypeGraphQLField() where!: KitchenSinkWhereUniqueInput;
}

export enum DishOrderByEnum {
  id_ASC = "id_ASC",
  id_DESC = "id_DESC",

  createdAt_ASC = "createdAt_ASC",
  createdAt_DESC = "createdAt_DESC",

  updatedAt_ASC = "updatedAt_ASC",
  updatedAt_DESC = "updatedAt_DESC",

  deletedAt_ASC = "deletedAt_ASC",
  deletedAt_DESC = "deletedAt_DESC",

  version_ASC = "version_ASC",
  version_DESC = "version_DESC",

  name_ASC = "name_ASC",
  name_DESC = "name_DESC",

  kitchenSinkId_ASC = "kitchenSinkId_ASC",
  kitchenSinkId_DESC = "kitchenSinkId_DESC"
}

registerEnumType(DishOrderByEnum, {
  name: "DishOrderByInput"
});

@TypeGraphQLInputType()
export class DishWhereInput {
  @TypeGraphQLField(() => ID, { nullable: true })
  id_eq?: string;

  @TypeGraphQLField(() => [ID], { nullable: true })
  id_in?: string[];

  @TypeGraphQLField({ nullable: true })
  createdAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_gte?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  createdAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  createdById_eq?: string;

  @TypeGraphQLField({ nullable: true })
  createdById_contains?: string;

  @TypeGraphQLField({ nullable: true })
  createdById_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  createdById_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  createdById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  updatedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_gte?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  updatedById_eq?: string;

  @TypeGraphQLField({ nullable: true })
  updatedById_contains?: string;

  @TypeGraphQLField({ nullable: true })
  updatedById_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  updatedById_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  updatedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  deletedAt_gt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_gte?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lt?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_lte?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedAt_all?: Date;

  @TypeGraphQLField({ nullable: true })
  deletedById_eq?: string;

  @TypeGraphQLField({ nullable: true })
  deletedById_contains?: string;

  @TypeGraphQLField({ nullable: true })
  deletedById_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  deletedById_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  deletedById_in?: string[];

  @TypeGraphQLField({ nullable: true })
  version_eq?: number;

  @TypeGraphQLField({ nullable: true })
  version_gt?: number;

  @TypeGraphQLField({ nullable: true })
  version_gte?: number;

  @TypeGraphQLField({ nullable: true })
  version_lt?: number;

  @TypeGraphQLField({ nullable: true })
  version_lte?: number;

  @TypeGraphQLField(() => [Int], { nullable: true })
  version_in?: number[];

  @TypeGraphQLField({ nullable: true })
  name_eq?: string;

  @TypeGraphQLField({ nullable: true })
  name_contains?: string;

  @TypeGraphQLField({ nullable: true })
  name_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  name_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  name_in?: string[];

  @TypeGraphQLField({ nullable: true })
  kitchenSinkId_eq?: string;

  @TypeGraphQLField({ nullable: true })
  kitchenSinkId_contains?: string;

  @TypeGraphQLField({ nullable: true })
  kitchenSinkId_startsWith?: string;

  @TypeGraphQLField({ nullable: true })
  kitchenSinkId_endsWith?: string;

  @TypeGraphQLField(() => [String], { nullable: true })
  kitchenSinkId_in?: string[];
}

@TypeGraphQLInputType()
export class DishWhereUniqueInput {
  @TypeGraphQLField(() => ID)
  id?: string;
}

@TypeGraphQLInputType()
export class DishCreateInput {
  @TypeGraphQLField()
  name!: string;

  @TypeGraphQLField()
  kitchenSinkId!: string;
}

@TypeGraphQLInputType()
export class DishUpdateInput {
  @TypeGraphQLField({ nullable: true })
  name?: string;

  @TypeGraphQLField({ nullable: true })
  kitchenSinkId?: string;
}

@ArgsType()
export class DishWhereArgs extends PaginationArgs {
  @TypeGraphQLField(() => DishWhereInput, { nullable: true })
  where?: DishWhereInput;

  @TypeGraphQLField(() => DishOrderByEnum, { nullable: true })
  orderBy?: DishOrderByEnum;
}

@ArgsType()
export class DishCreateManyArgs {
  @TypeGraphQLField(() => [DishCreateInput])
  data!: DishCreateInput[];
}

@ArgsType()
export class DishUpdateArgs {
  @TypeGraphQLField() data!: DishUpdateInput;
  @TypeGraphQLField() where!: DishWhereUniqueInput;
}
