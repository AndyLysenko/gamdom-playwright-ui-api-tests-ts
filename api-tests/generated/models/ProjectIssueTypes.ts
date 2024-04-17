/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectId } from './ProjectId';
/**
 * Use the optional `workflows.usages` expand to get additional information about the projects and issue types associated with the requested workflows.
 */
export type ProjectIssueTypes = {
  /**
   * IDs of the issue types
   */
  issueTypes?: Array<string | null> | null;
  project?: ProjectId;
};

