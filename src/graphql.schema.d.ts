
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export enum MutationType {
    CREATED = "CREATED",
    UPDATED = "UPDATED",
    DELETED = "DELETED"
}

export enum RigOrderByInput {
    id_ASC = "id_ASC",
    id_DESC = "id_DESC",
    serial_number_ASC = "serial_number_ASC",
    serial_number_DESC = "serial_number_DESC",
    drilling_depth_capability_ASC = "drilling_depth_capability_ASC",
    drilling_depth_capability_DESC = "drilling_depth_capability_DESC",
    drilling_pressure_capabality_ASC = "drilling_pressure_capabality_ASC",
    drilling_pressure_capabality_DESC = "drilling_pressure_capabality_DESC",
    createdAt_ASC = "createdAt_ASC",
    createdAt_DESC = "createdAt_DESC",
    updatedAt_ASC = "updatedAt_ASC",
    updatedAt_DESC = "updatedAt_DESC"
}

export class RigCreateInput {
    id?: string;
    serial_number: string;
    drilling_depth_capability: number;
    drilling_pressure_capabality: number;
}

export class RigSubscriptionWhereInput {
    AND?: RigSubscriptionWhereInput[];
    OR?: RigSubscriptionWhereInput[];
    NOT?: RigSubscriptionWhereInput[];
    mutation_in?: MutationType[];
    updatedFields_contains?: string;
    updatedFields_contains_every?: string[];
    updatedFields_contains_some?: string[];
    node?: RigWhereInput;
}

export class RigUpdateInput {
    serial_number?: string;
    drilling_depth_capability?: number;
    drilling_pressure_capabality?: number;
}

export class RigUpdateManyMutationInput {
    serial_number?: string;
    drilling_depth_capability?: number;
    drilling_pressure_capabality?: number;
}

export class RigWhereInput {
    AND?: RigWhereInput[];
    OR?: RigWhereInput[];
    NOT?: RigWhereInput[];
    id?: string;
    id_not?: string;
    id_in?: string[];
    id_not_in?: string[];
    id_lt?: string;
    id_lte?: string;
    id_gt?: string;
    id_gte?: string;
    id_contains?: string;
    id_not_contains?: string;
    id_starts_with?: string;
    id_not_starts_with?: string;
    id_ends_with?: string;
    id_not_ends_with?: string;
    serial_number?: string;
    serial_number_not?: string;
    serial_number_in?: string[];
    serial_number_not_in?: string[];
    serial_number_lt?: string;
    serial_number_lte?: string;
    serial_number_gt?: string;
    serial_number_gte?: string;
    serial_number_contains?: string;
    serial_number_not_contains?: string;
    serial_number_starts_with?: string;
    serial_number_not_starts_with?: string;
    serial_number_ends_with?: string;
    serial_number_not_ends_with?: string;
    drilling_depth_capability?: number;
    drilling_depth_capability_not?: number;
    drilling_depth_capability_in?: number[];
    drilling_depth_capability_not_in?: number[];
    drilling_depth_capability_lt?: number;
    drilling_depth_capability_lte?: number;
    drilling_depth_capability_gt?: number;
    drilling_depth_capability_gte?: number;
    drilling_pressure_capabality?: number;
    drilling_pressure_capabality_not?: number;
    drilling_pressure_capabality_in?: number[];
    drilling_pressure_capabality_not_in?: number[];
    drilling_pressure_capabality_lt?: number;
    drilling_pressure_capabality_lte?: number;
    drilling_pressure_capabality_gt?: number;
    drilling_pressure_capabality_gte?: number;
    createdAt?: DateTime;
    createdAt_not?: DateTime;
    createdAt_in?: DateTime[];
    createdAt_not_in?: DateTime[];
    createdAt_lt?: DateTime;
    createdAt_lte?: DateTime;
    createdAt_gt?: DateTime;
    createdAt_gte?: DateTime;
    updatedAt?: DateTime;
    updatedAt_not?: DateTime;
    updatedAt_in?: DateTime[];
    updatedAt_not_in?: DateTime[];
    updatedAt_lt?: DateTime;
    updatedAt_lte?: DateTime;
    updatedAt_gt?: DateTime;
    updatedAt_gte?: DateTime;
}

export class RigWhereUniqueInput {
    id?: string;
}

export interface Node {
    id: string;
}

export class AggregateRig {
    count: number;
}

export class BatchPayload {
    count: Long;
}

export abstract class IMutation {
    abstract createRig(data: RigCreateInput): Rig | Promise<Rig>;
    abstract updateRig(data: RigUpdateInput, where: RigWhereUniqueInput): Rig | Promise<Rig>;
    abstract deleteRig(where: RigWhereUniqueInput): Rig | Promise<Rig>;
    abstract upsertRig(where: RigWhereUniqueInput, create: RigCreateInput, update: RigUpdateInput): Rig | Promise<Rig>;
    abstract updateManyRigs(data: RigUpdateManyMutationInput, where?: RigWhereInput): BatchPayload | Promise<BatchPayload>;
    abstract deleteManyRigs(where?: RigWhereInput): BatchPayload | Promise<BatchPayload>;
}

export class PageInfo {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string;
    endCursor?: string;
}

export abstract class IQuery {
    abstract rigs(where?: RigWhereInput, orderBy?: RigOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): Rig[] | Promise<Rig[]>;
    abstract rig(where: RigWhereUniqueInput): Rig | Promise<Rig>;
    abstract rigsConnection(where?: RigWhereInput, orderBy?: RigOrderByInput, skip?: number, after?: string, before?: string, first?: number, last?: number): RigConnection | Promise<RigConnection>;
    abstract node(id: string): Node | Promise<Node>;
}

export class Rig implements Node {
    id: string;
    serial_number: string;
    drilling_depth_capability: number;
    drilling_pressure_capabality: number;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class RigConnection {
    pageInfo: PageInfo;
    edges: RigEdge[];
    aggregate: AggregateRig;
}

export class RigEdge {
    node: Rig;
    cursor: string;
}

export class RigPreviousValues {
    id: string;
    serial_number: string;
    drilling_depth_capability: number;
    drilling_pressure_capabality: number;
    createdAt: DateTime;
    updatedAt: DateTime;
}

export class RigSubscriptionPayload {
    mutation: MutationType;
    node?: Rig;
    updatedFields?: string[];
    previousValues?: RigPreviousValues;
}

export abstract class ISubscription {
    abstract rig(where?: RigSubscriptionWhereInput): RigSubscriptionPayload | Promise<RigSubscriptionPayload>;
}

export type DateTime = any;
export type Long = any;
