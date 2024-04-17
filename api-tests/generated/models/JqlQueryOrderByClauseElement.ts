/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JqlQueryField } from './JqlQueryField';
/**
 * An element of the order-by JQL clause.
 */
export type JqlQueryOrderByClauseElement = {
  /**
   * The direction in which to order the results.
   */
  direction?: 'asc' | 'desc';
  field: JqlQueryField;
};

