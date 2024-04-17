/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The list of required status mappings by workflow.
 */
export type RequiredMappingByWorkflows = {
  /**
   * The ID of the source workflow.
   */
  sourceWorkflowId?: string;
  /**
   * The status IDs requiring mapping.
   */
  statusIds?: Array<string>;
  /**
   * The ID of the target workflow.
   */
  targetWorkflowId?: string;
};

