/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { UserPickerUser } from './UserPickerUser';
/**
 * The list of users found in a search, including header text (Showing X of Y matching users) and total of matched users.
 */
export type FoundUsers = {
  /**
   * Header text indicating the number of users in the response and the total number of users found in the search.
   */
  header?: string;
  /**
   * The total number of users found in the search.
   */
  total?: number;
  users?: Array<UserPickerUser>;
};

