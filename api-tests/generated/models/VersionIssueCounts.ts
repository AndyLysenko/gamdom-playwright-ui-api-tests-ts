/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { VersionUsageInCustomField } from './VersionUsageInCustomField';
/**
 * Various counts of issues within a version.
 */
export type VersionIssueCounts = {
  /**
   * List of custom fields using the version.
   */
  readonly customFieldUsage?: Array<VersionUsageInCustomField>;
  /**
   * Count of issues where a version custom field is set to the version.
   */
  readonly issueCountWithCustomFieldsShowingVersion?: number;
  /**
   * Count of issues where the `affectedVersion` is set to the version.
   */
  readonly issuesAffectedCount?: number;
  /**
   * Count of issues where the `fixVersion` is set to the version.
   */
  readonly issuesFixedCount?: number;
  /**
   * The URL of these count details.
   */
  readonly self?: string;
};

