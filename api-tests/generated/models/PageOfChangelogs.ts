/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Changelog } from './Changelog';
/**
 * A page of changelogs.
 */
export type PageOfChangelogs = {
  /**
   * The list of changelogs.
   */
  readonly histories?: Array<Changelog>;
  /**
   * The maximum number of results that could be on the page.
   */
  readonly maxResults?: number;
  /**
   * The index of the first item returned on the page.
   */
  readonly startAt?: number;
  /**
   * The number of results on the page.
   */
  readonly total?: number;
};

