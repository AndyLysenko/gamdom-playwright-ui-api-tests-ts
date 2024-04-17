/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { SharePermission } from './SharePermission';
/**
 * Details for permissions of shareable entities
 */
export type PermissionDetails = {
  /**
   * The edit permissions for the shareable entities.
   */
  editPermissions: Array<SharePermission>;
  /**
   * The share permissions for the shareable entities.
   */
  sharePermissions: Array<SharePermission>;
};

