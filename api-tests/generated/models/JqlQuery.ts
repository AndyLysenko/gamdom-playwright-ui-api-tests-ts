/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { JqlQueryClause } from './JqlQueryClause';
import type { JqlQueryOrderByClause } from './JqlQueryOrderByClause';
/**
 * A parsed JQL query.
 */
export type JqlQuery = {
  orderBy?: JqlQueryOrderByClause;
  where?: JqlQueryClause;
};

