/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Errors } from './Errors';
/**
 * Number of archived/unarchived issues and list of errors that occurred during the action, if any.
 */
export type IssueArchivalSyncResponse = {
  errors?: Errors;
  numberOfIssuesUpdated?: number;
};

