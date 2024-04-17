/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowAssociationStatusMapping } from './WorkflowAssociationStatusMapping';
/**
 * Overrides, for the selected issue types, any status mappings provided in `statusMappingsByWorkflows`. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.
 */
export type MappingsByIssueTypeOverride = {
  /**
   * The ID of the issue type for this mapping.
   */
  issueTypeId: string;
  /**
   * The list of status mappings.
   */
  statusMappings: Array<WorkflowAssociationStatusMapping>;
};

