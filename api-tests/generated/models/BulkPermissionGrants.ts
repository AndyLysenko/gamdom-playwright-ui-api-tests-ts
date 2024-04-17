/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { BulkProjectPermissionGrants } from './BulkProjectPermissionGrants';
/**
 * Details of global and project permissions granted to the user.
 */
export type BulkPermissionGrants = {
  /**
   * List of permissions granted to the user.
   */
  globalPermissions: Array<string>;
  /**
   * List of project permissions and the projects and issues those permissions provide access to.
   */
  projectPermissions: Array<BulkProjectPermissionGrants>;
};

