/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IssueTypeScreenScheme } from './IssueTypeScreenScheme';
/**
 * Issue type screen scheme with a list of the projects that use it.
 */
export type IssueTypeScreenSchemesProjects = {
  /**
   * Details of an issue type screen scheme.
   */
  issueTypeScreenScheme: IssueTypeScreenScheme;
  /**
   * The IDs of the projects using the issue type screen scheme.
   */
  projectIds: Array<string>;
};

