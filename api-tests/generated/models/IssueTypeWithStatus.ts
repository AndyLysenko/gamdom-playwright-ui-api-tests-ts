/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { StatusDetails } from './StatusDetails';
/**
 * Status details for an issue type.
 */
export type IssueTypeWithStatus = {
  /**
   * The ID of the issue type.
   */
  readonly id: string;
  /**
   * The name of the issue type.
   */
  readonly name: string;
  /**
   * The URL of the issue type's status details.
   */
  readonly self: string;
  /**
   * List of status details for the issue type.
   */
  readonly statuses: Array<StatusDetails>;
  /**
   * Whether this issue type represents subtasks.
   */
  readonly subtask: boolean;
};

