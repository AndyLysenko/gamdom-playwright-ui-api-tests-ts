/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ChangeDetails } from './ChangeDetails';
import type { HistoryMetadata } from './HistoryMetadata';
import type { UserDetails } from './UserDetails';
/**
 * A log of changes made to issue fields. Changelogs related to workflow associations are currently being deprecated.
 */
export type Changelog = {
  /**
   * The user who made the change.
   */
  readonly author?: UserDetails;
  /**
   * The date on which the change took place.
   */
  readonly created?: string;
  /**
   * The history metadata associated with the changed.
   */
  readonly historyMetadata?: HistoryMetadata;
  /**
   * The ID of the changelog.
   */
  readonly id?: string;
  /**
   * The list of items changed.
   */
  readonly items?: Array<ChangeDetails>;
};

