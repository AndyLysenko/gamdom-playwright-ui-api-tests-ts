/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { UserDetails } from './UserDetails';
/**
 * The details of watchers on an issue.
 */
export type Watchers = {
  /**
   * Whether the calling user is watching this issue.
   */
  readonly isWatching?: boolean;
  /**
   * The URL of these issue watcher details.
   */
  readonly self?: string;
  /**
   * The number of users watching this issue.
   */
  readonly watchCount?: number;
  /**
   * Details of the users watching this issue.
   */
  readonly watchers?: Array<UserDetails>;
};

