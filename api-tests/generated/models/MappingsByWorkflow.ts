/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowAssociationStatusMapping } from './WorkflowAssociationStatusMapping';
/**
 * The status mappings by workflows. Status mappings are required when the new workflow for an issue type doesn't contain all statuses that the old workflow has. Status mappings can be provided by a combination of `statusMappingsByWorkflows` and `statusMappingsByIssueTypeOverride`.
 */
export type MappingsByWorkflow = {
  /**
   * The ID of the new workflow.
   */
  newWorkflowId: string;
  /**
   * The ID of the old workflow.
   */
  oldWorkflowId: string;
  /**
   * The list of status mappings.
   */
  statusMappings: Array<WorkflowAssociationStatusMapping>;
};

