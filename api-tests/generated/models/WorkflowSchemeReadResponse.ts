/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DocumentVersion } from './DocumentVersion';
import type { WorkflowMetadataAndIssueTypeRestModel } from './WorkflowMetadataAndIssueTypeRestModel';
import type { WorkflowMetadataRestModel } from './WorkflowMetadataRestModel';
import type { WorkflowScope } from './WorkflowScope';
export type WorkflowSchemeReadResponse = {
  defaultWorkflow?: WorkflowMetadataRestModel;
  /**
   * The description of the workflow scheme.
   */
  description?: string | null;
  /**
   * The ID of the workflow scheme.
   */
  id: string;
  /**
   * The name of the workflow scheme.
   */
  name: string;
  /**
   * The IDs of projects using the workflow scheme.
   */
  projectIdsUsingScheme: Array<string>;
  scope: WorkflowScope;
  /**
   * Indicates if there's an [asynchronous task](#async-operations) for this workflow scheme.
   */
  taskId?: string | null;
  version: DocumentVersion;
  /**
   * Mappings from workflows to issue types.
   */
  workflowsForIssueTypes: Array<WorkflowMetadataAndIssueTypeRestModel>;
};

