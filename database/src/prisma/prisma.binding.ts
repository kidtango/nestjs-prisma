import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    rigs: <T = Array<Rig | null>>(args: { where?: RigWhereInput | null, orderBy?: RigOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    rig: <T = Rig | null>(args: { where: RigWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    rigsConnection: <T = RigConnection>(args: { where?: RigWhereInput | null, orderBy?: RigOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createRig: <T = Rig>(args: { data: RigCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateRig: <T = Rig | null>(args: { data: RigUpdateInput, where: RigWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteRig: <T = Rig | null>(args: { where: RigWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertRig: <T = Rig>(args: { where: RigWhereUniqueInput, create: RigCreateInput, update: RigUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyRigs: <T = BatchPayload>(args: { data: RigUpdateManyMutationInput, where?: RigWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyRigs: <T = BatchPayload>(args: { where?: RigWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    rig: <T = RigSubscriptionPayload | null>(args: { where?: RigSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  Rig: (where?: RigWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateRig {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createRig(data: RigCreateInput!): Rig!
  updateRig(data: RigUpdateInput!, where: RigWhereUniqueInput!): Rig
  deleteRig(where: RigWhereUniqueInput!): Rig
  upsertRig(where: RigWhereUniqueInput!, create: RigCreateInput!, update: RigUpdateInput!): Rig!
  updateManyRigs(data: RigUpdateManyMutationInput!, where: RigWhereInput): BatchPayload!
  deleteManyRigs(where: RigWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  rigs(where: RigWhereInput, orderBy: RigOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Rig]!
  rig(where: RigWhereUniqueInput!): Rig
  rigsConnection(where: RigWhereInput, orderBy: RigOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RigConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Rig implements Node {
  id: ID!
  serial_number: String!
  drilling_depth_capability: Float!
  drilling_pressure_capabality: Float!
}

"""A connection to a list of items."""
type RigConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [RigEdge]!
  aggregate: AggregateRig!
}

input RigCreateInput {
  id: ID
  serial_number: String!
  drilling_depth_capability: Float!
  drilling_pressure_capabality: Float!
}

"""An edge in a connection."""
type RigEdge {
  """The item at the end of the edge."""
  node: Rig!

  """A cursor for use in pagination."""
  cursor: String!
}

enum RigOrderByInput {
  id_ASC
  id_DESC
  serial_number_ASC
  serial_number_DESC
  drilling_depth_capability_ASC
  drilling_depth_capability_DESC
  drilling_pressure_capabality_ASC
  drilling_pressure_capabality_DESC
}

type RigPreviousValues {
  id: ID!
  serial_number: String!
  drilling_depth_capability: Float!
  drilling_pressure_capabality: Float!
}

type RigSubscriptionPayload {
  mutation: MutationType!
  node: Rig
  updatedFields: [String!]
  previousValues: RigPreviousValues
}

input RigSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [RigSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [RigSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RigSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: RigWhereInput
}

input RigUpdateInput {
  serial_number: String
  drilling_depth_capability: Float
  drilling_pressure_capabality: Float
}

input RigUpdateManyMutationInput {
  serial_number: String
  drilling_depth_capability: Float
  drilling_pressure_capabality: Float
}

input RigWhereInput {
  """Logical AND on all given filters."""
  AND: [RigWhereInput!]

  """Logical OR on all given filters."""
  OR: [RigWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [RigWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  serial_number: String

  """All values that are not equal to given value."""
  serial_number_not: String

  """All values that are contained in given list."""
  serial_number_in: [String!]

  """All values that are not contained in given list."""
  serial_number_not_in: [String!]

  """All values less than the given value."""
  serial_number_lt: String

  """All values less than or equal the given value."""
  serial_number_lte: String

  """All values greater than the given value."""
  serial_number_gt: String

  """All values greater than or equal the given value."""
  serial_number_gte: String

  """All values containing the given string."""
  serial_number_contains: String

  """All values not containing the given string."""
  serial_number_not_contains: String

  """All values starting with the given string."""
  serial_number_starts_with: String

  """All values not starting with the given string."""
  serial_number_not_starts_with: String

  """All values ending with the given string."""
  serial_number_ends_with: String

  """All values not ending with the given string."""
  serial_number_not_ends_with: String
  drilling_depth_capability: Float

  """All values that are not equal to given value."""
  drilling_depth_capability_not: Float

  """All values that are contained in given list."""
  drilling_depth_capability_in: [Float!]

  """All values that are not contained in given list."""
  drilling_depth_capability_not_in: [Float!]

  """All values less than the given value."""
  drilling_depth_capability_lt: Float

  """All values less than or equal the given value."""
  drilling_depth_capability_lte: Float

  """All values greater than the given value."""
  drilling_depth_capability_gt: Float

  """All values greater than or equal the given value."""
  drilling_depth_capability_gte: Float
  drilling_pressure_capabality: Float

  """All values that are not equal to given value."""
  drilling_pressure_capabality_not: Float

  """All values that are contained in given list."""
  drilling_pressure_capabality_in: [Float!]

  """All values that are not contained in given list."""
  drilling_pressure_capabality_not_in: [Float!]

  """All values less than the given value."""
  drilling_pressure_capabality_lt: Float

  """All values less than or equal the given value."""
  drilling_pressure_capabality_lte: Float

  """All values greater than the given value."""
  drilling_pressure_capabality_gt: Float

  """All values greater than or equal the given value."""
  drilling_pressure_capabality_gte: Float
}

input RigWhereUniqueInput {
  id: ID
}

type Subscription {
  rig(where: RigSubscriptionWhereInput): RigSubscriptionPayload
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type RigOrderByInput =   'id_ASC' |
  'id_DESC' |
  'serial_number_ASC' |
  'serial_number_DESC' |
  'drilling_depth_capability_ASC' |
  'drilling_depth_capability_DESC' |
  'drilling_pressure_capabality_ASC' |
  'drilling_pressure_capabality_DESC'

export interface RigCreateInput {
  id?: ID_Input | null
  serial_number: String
  drilling_depth_capability: Float
  drilling_pressure_capabality: Float
}

export interface RigSubscriptionWhereInput {
  AND?: RigSubscriptionWhereInput[] | RigSubscriptionWhereInput | null
  OR?: RigSubscriptionWhereInput[] | RigSubscriptionWhereInput | null
  NOT?: RigSubscriptionWhereInput[] | RigSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: RigWhereInput | null
}

export interface RigUpdateInput {
  serial_number?: String | null
  drilling_depth_capability?: Float | null
  drilling_pressure_capabality?: Float | null
}

export interface RigUpdateManyMutationInput {
  serial_number?: String | null
  drilling_depth_capability?: Float | null
  drilling_pressure_capabality?: Float | null
}

export interface RigWhereInput {
  AND?: RigWhereInput[] | RigWhereInput | null
  OR?: RigWhereInput[] | RigWhereInput | null
  NOT?: RigWhereInput[] | RigWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  serial_number?: String | null
  serial_number_not?: String | null
  serial_number_in?: String[] | String | null
  serial_number_not_in?: String[] | String | null
  serial_number_lt?: String | null
  serial_number_lte?: String | null
  serial_number_gt?: String | null
  serial_number_gte?: String | null
  serial_number_contains?: String | null
  serial_number_not_contains?: String | null
  serial_number_starts_with?: String | null
  serial_number_not_starts_with?: String | null
  serial_number_ends_with?: String | null
  serial_number_not_ends_with?: String | null
  drilling_depth_capability?: Float | null
  drilling_depth_capability_not?: Float | null
  drilling_depth_capability_in?: Float[] | Float | null
  drilling_depth_capability_not_in?: Float[] | Float | null
  drilling_depth_capability_lt?: Float | null
  drilling_depth_capability_lte?: Float | null
  drilling_depth_capability_gt?: Float | null
  drilling_depth_capability_gte?: Float | null
  drilling_pressure_capabality?: Float | null
  drilling_pressure_capabality_not?: Float | null
  drilling_pressure_capabality_in?: Float[] | Float | null
  drilling_pressure_capabality_not_in?: Float[] | Float | null
  drilling_pressure_capabality_lt?: Float | null
  drilling_pressure_capabality_lte?: Float | null
  drilling_pressure_capabality_gt?: Float | null
  drilling_pressure_capabality_gte?: Float | null
}

export interface RigWhereUniqueInput {
  id?: ID_Input | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateRig {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface Rig extends Node {
  id: ID_Output
  serial_number: String
  drilling_depth_capability: Float
  drilling_pressure_capabality: Float
}

/*
 * A connection to a list of items.

 */
export interface RigConnection {
  pageInfo: PageInfo
  edges: Array<RigEdge | null>
  aggregate: AggregateRig
}

/*
 * An edge in a connection.

 */
export interface RigEdge {
  node: Rig
  cursor: String
}

export interface RigPreviousValues {
  id: ID_Output
  serial_number: String
  drilling_depth_capability: Float
  drilling_pressure_capabality: Float
}

export interface RigSubscriptionPayload {
  mutation: MutationType
  node?: Rig | null
  updatedFields?: Array<String> | null
  previousValues?: RigPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string