/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectDetails } from './ProjectDetails';
import type { PublishedWorkflowId } from './PublishedWorkflowId';
import type { Transition } from './Transition';
import type { WorkflowOperations } from './WorkflowOperations';
import type { WorkflowSchemeIdName } from './WorkflowSchemeIdName';
import type { WorkflowStatus } from './WorkflowStatus';
/**
 * Details about a workflow.
 */
export type Workflow = {
  /**
   * The creation date of the workflow.
   */
  created?: string;
  /**
   * The description of the workflow.
   */
  description: string;
  /**
   * Whether the workflow has a draft version.
   */
  hasDraftWorkflow?: boolean;
  id: PublishedWorkflowId;
  /**
   * Whether this is the default workflow.
   */
  isDefault?: boolean;
  operations?: WorkflowOperations;
  /**
   * The projects the workflow is assigned to, through workflow schemes.
   */
  projects?: Array<ProjectDetails>;
  /**
   * The workflow schemes the workflow is assigned to.
   */
  schemes?: Array<WorkflowSchemeIdName>;
  /**
   * The statuses of the workflow.
   */
  statuses?: Array<WorkflowStatus>;
  /**
   * The transitions of the workflow.
   */
  transitions?: Array<Transition>;
  /**
   * The last edited date of the workflow.
   */
  updated?: string;
};

