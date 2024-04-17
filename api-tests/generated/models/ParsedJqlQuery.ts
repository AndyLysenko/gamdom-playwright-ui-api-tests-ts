/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JqlQuery } from './JqlQuery';
/**
 * Details of a parsed JQL query.
 */
export type ParsedJqlQuery = {
  /**
   * The list of syntax or validation errors.
   */
  errors?: Array<string>;
  /**
   * The JQL query that was parsed and validated.
   */
  query: string;
  /**
   * The syntax tree of the query. Empty if the query was invalid.
   */
  structure?: JqlQuery;
};

