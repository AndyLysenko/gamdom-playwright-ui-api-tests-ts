/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowSchemeAssociation } from './WorkflowSchemeAssociation';
/**
 * The request payload to get the required mappings for updating a workflow scheme.
 */
export type WorkflowSchemeUpdateRequiredMappingsRequest = {
  /**
   * The ID of the new default workflow for this workflow scheme. Only used in global-scoped workflow schemes. If it isn't specified, is set to *Jira Workflow (jira)*.
   */
  defaultWorkflowId?: string | null;
  /**
   * The ID of the workflow scheme.
   */
  id: string;
  /**
   * The new workflow to issue type mappings for this workflow scheme.
   */
  workflowsForIssueTypes: Array<WorkflowSchemeAssociation>;
};

