/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { FoundGroup } from './FoundGroup';
/**
 * The list of groups found in a search, including header text (Showing X of Y matching groups) and total of matched groups.
 */
export type FoundGroups = {
  groups?: Array<FoundGroup>;
  /**
   * Header text indicating the number of groups in the response and the total number of groups found in the search.
   */
  header?: string;
  /**
   * The total number of groups found in the search.
   */
  total?: number;
};

