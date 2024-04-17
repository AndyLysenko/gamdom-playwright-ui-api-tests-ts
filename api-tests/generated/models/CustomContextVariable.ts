/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IssueContextVariable } from './IssueContextVariable';
import type { JsonContextVariable } from './JsonContextVariable';
import type { UserContextVariable } from './UserContextVariable';
export type CustomContextVariable = (UserContextVariable | IssueContextVariable | JsonContextVariable | {
  /**
   * Type of custom context variable.
   */
  type: string;
});

