/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { RequiredMappingByIssueType } from './RequiredMappingByIssueType';
import type { RequiredMappingByWorkflows } from './RequiredMappingByWorkflows';
import type { StatusesPerWorkflow } from './StatusesPerWorkflow';
import type { StatusMetadata } from './StatusMetadata';
export type WorkflowSchemeUpdateRequiredMappingsResponse = {
  /**
   * The list of required status mappings by issue type.
   */
  statusMappingsByIssueTypes?: Array<RequiredMappingByIssueType>;
  /**
   * The list of required status mappings by workflow.
   */
  statusMappingsByWorkflows?: Array<RequiredMappingByWorkflows>;
  /**
   * The details of the statuses in the associated workflows.
   */
  statuses?: Array<StatusMetadata>;
  /**
   * The statuses associated with each workflow.
   */
  statusesPerWorkflow?: Array<StatusesPerWorkflow>;
};

