/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { UserFilter } from './UserFilter';
/**
 * Defaults for a User Picker (single) custom field.
 */
export type CustomFieldContextSingleUserPickerDefaults = {
  /**
   * The ID of the default user.
   */
  accountId: string;
  /**
   * The ID of the context.
   */
  contextId: string;
  type: 'single.user.select';
  userFilter: UserFilter;
};

