/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of project permissions and associated issues and projects to look up.
 */
export type BulkProjectPermissions = {
  /**
   * List of issue IDs.
   */
  issues?: Array<number>;
  /**
   * List of project permissions.
   */
  permissions: Array<string>;
  /**
   * List of project IDs.
   */
  projects?: Array<number>;
};

