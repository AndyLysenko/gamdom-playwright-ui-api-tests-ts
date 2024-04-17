/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DocumentVersion } from './DocumentVersion';
import type { ProjectIssueTypes } from './ProjectIssueTypes';
import type { WorkflowLayout } from './WorkflowLayout';
import type { WorkflowReferenceStatus } from './WorkflowReferenceStatus';
import type { WorkflowScope } from './WorkflowScope';
import type { WorkflowTransitions } from './WorkflowTransitions';
/**
 * Details of a workflow.
 */
export type JiraWorkflow = {
  /**
   * The description of the workflow.
   */
  description?: string;
  /**
   * The ID of the workflow.
   */
  id?: string;
  /**
   * Indicates if the workflow can be edited.
   */
  isEditable?: boolean;
  /**
   * The name of the workflow.
   */
  name?: string;
  scope?: WorkflowScope;
  startPointLayout?: WorkflowLayout;
  /**
   * The statuses referenced in this workflow.
   */
  statuses?: Array<WorkflowReferenceStatus>;
  /**
   * If there is a current [asynchronous task](#async-operations) operation for this workflow.
   */
  taskId?: string | null;
  /**
   * The transitions of the workflow.
   */
  transitions?: Array<WorkflowTransitions>;
  /**
   * Use the optional `workflows.usages` expand to get additional information about the projects and issue types associated with the requested workflows.
   */
  usages?: Array<ProjectIssueTypes>;
  version?: DocumentVersion;
};

