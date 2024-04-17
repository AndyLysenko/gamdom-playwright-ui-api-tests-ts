/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectId } from './ProjectId';
/**
 * The scope of the workflow.
 */
export type WorkflowScope = {
  project?: ProjectId;
  /**
   * The scope of the workflow. `GLOBAL` for company-managed projects and `PROJECT` for team-managed projects.
   */
  type: 'PROJECT' | 'GLOBAL';
};

