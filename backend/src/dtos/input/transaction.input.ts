import { Field, InputType } from "type-graphql";

@InputType()
export class TransactionInput {

  @Field(() => String)
  description!: string

  @Field(() => Number)
  amount!: number

  @Field(() => Date)
  date!: Date
}