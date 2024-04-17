/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { SharePermission } from './SharePermission';
/**
 * Details of a dashboard.
 */
export type DashboardDetails = {
  /**
   * The description of the dashboard.
   */
  description?: string;
  /**
   * The edit permissions for the dashboard.
   */
  editPermissions: Array<SharePermission>;
  /**
   * The name of the dashboard.
   */
  name: string;
  /**
   * The share permissions for the dashboard.
   */
  sharePermissions: Array<SharePermission>;
};

