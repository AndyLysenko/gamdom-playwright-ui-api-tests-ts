/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { WorkflowMetadataRestModel } from './WorkflowMetadataRestModel';
/**
 * The workflow metadata and issue type IDs which use this workflow.
 */
export type WorkflowMetadataAndIssueTypeRestModel = {
  /**
   * The list of issue type IDs for the mapping.
   */
  issueTypeIds: Array<string>;
  workflow: WorkflowMetadataRestModel;
};

