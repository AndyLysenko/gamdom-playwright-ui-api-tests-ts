/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Scope } from './Scope';
/**
 * Details about an issue type.
 */
export type IssueTypeDetails = {
  /**
   * The ID of the issue type's avatar.
   */
  readonly avatarId?: number;
  /**
   * The description of the issue type.
   */
  readonly description?: string;
  /**
   * Unique ID for next-gen projects.
   */
  readonly entityId?: string;
  /**
   * Hierarchy level of the issue type.
   */
  readonly hierarchyLevel?: number;
  /**
   * The URL of the issue type's avatar.
   */
  readonly iconUrl?: string;
  /**
   * The ID of the issue type.
   */
  readonly id?: string;
  /**
   * The name of the issue type.
   */
  readonly name?: string;
  /**
   * Details of the next-gen projects the issue type is available in.
   */
  readonly scope?: Scope;
  /**
   * The URL of these issue type details.
   */
  readonly self?: string;
  /**
   * Whether this issue type is used to create subtasks.
   */
  readonly subtask?: boolean;
};

