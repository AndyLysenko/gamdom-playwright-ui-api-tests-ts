/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { PermissionGrant } from './PermissionGrant';
/**
 * List of permission grants.
 */
export type PermissionGrants = {
  /**
   * Expand options that include additional permission grant details in the response.
   */
  readonly expand?: string;
  /**
   * Permission grants list.
   */
  readonly permissions?: Array<PermissionGrant>;
};

