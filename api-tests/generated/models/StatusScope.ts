/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ProjectId } from './ProjectId';
/**
 * The scope of the status.
 */
export type StatusScope = {
  project?: ProjectId;
  /**
   * The scope of the status. `GLOBAL` for company-managed projects and `PROJECT` for team-managed projects.
   */
  type: 'PROJECT' | 'GLOBAL';
};

