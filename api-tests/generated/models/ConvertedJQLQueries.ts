/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JQLQueryWithUnknownUsers } from './JQLQueryWithUnknownUsers';
/**
 * The converted JQL queries.
 */
export type ConvertedJQLQueries = {
  /**
   * List of queries containing user information that could not be mapped to an existing user
   */
  queriesWithUnknownUsers?: Array<JQLQueryWithUnknownUsers>;
  /**
   * The list of converted query strings with account IDs in place of user identifiers.
   */
  queryStrings?: Array<string>;
};

