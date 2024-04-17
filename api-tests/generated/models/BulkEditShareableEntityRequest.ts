/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { BulkChangeOwnerDetails } from './BulkChangeOwnerDetails';
import type { PermissionDetails } from './PermissionDetails';
/**
 * Details of a request to bulk edit shareable entity.
 */
export type BulkEditShareableEntityRequest = {
  /**
   * Allowed action for bulk edit shareable entity
   */
  action: 'changeOwner' | 'changePermission' | 'addPermission' | 'removePermission';
  /**
   * The details of change owner action.
   */
  changeOwnerDetails?: BulkChangeOwnerDetails;
  /**
   * The id list of shareable entities to be changed.
   */
  entityIds: Array<number>;
  /**
   * Whether the actions are executed by users with Administer Jira global permission.
   */
  extendAdminPermissions?: boolean;
  /**
   * The permission details to be changed.
   */
  permissionDetails?: PermissionDetails;
};

