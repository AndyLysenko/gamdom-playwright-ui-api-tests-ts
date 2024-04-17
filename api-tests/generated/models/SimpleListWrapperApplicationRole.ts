/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ApplicationRole } from './ApplicationRole';
import type { ListWrapperCallbackApplicationRole } from './ListWrapperCallbackApplicationRole';
export type SimpleListWrapperApplicationRole = {
  callback?: ListWrapperCallbackApplicationRole;
  items?: Array<ApplicationRole>;
  'max-results'?: number;
  pagingCallback?: ListWrapperCallbackApplicationRole;
  size?: number;
};

