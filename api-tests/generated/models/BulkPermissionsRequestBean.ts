/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { BulkProjectPermissions } from './BulkProjectPermissions';
/**
 * Details of global permissions to look up and project permissions with associated projects and issues to look up.
 */
export type BulkPermissionsRequestBean = {
  /**
   * The account ID of a user.
   */
  accountId?: string;
  /**
   * Global permissions to look up.
   */
  globalPermissions?: Array<string>;
  /**
   * Project permissions with associated projects and issues to look up.
   */
  projectPermissions?: Array<BulkProjectPermissions>;
};

