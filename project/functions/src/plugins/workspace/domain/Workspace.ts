import { Collection } from 'fireorm';
import { Field, ID, InputType, ObjectType } from 'type-graphql';

@ObjectType()
@Collection('Workspace')
export class Workspace {
  @Field(() => ID) id!: string;
  constructor() {}
}

@InputType()
export class WorkspaceDto {
  @Field(() => ID) id!: string;
  constructor() {}
}