/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ChangedWorklog } from './ChangedWorklog';
/**
 * List of changed worklogs.
 */
export type ChangedWorklogs = {
  lastPage?: boolean;
  /**
   * The URL of the next list of changed worklogs.
   */
  readonly nextPage?: string;
  /**
   * The URL of this changed worklogs list.
   */
  readonly self?: string;
  /**
   * The datetime of the first worklog item in the list.
   */
  readonly since?: number;
  /**
   * The datetime of the last worklog item in the list.
   */
  readonly until?: number;
  /**
   * Changed worklog list.
   */
  readonly values?: Array<ChangedWorklog>;
};

