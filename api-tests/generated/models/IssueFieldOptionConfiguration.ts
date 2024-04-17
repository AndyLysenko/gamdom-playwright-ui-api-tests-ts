/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IssueFieldOptionScopeBean } from './IssueFieldOptionScopeBean';
/**
 * Details of the projects the option is available in.
 */
export type IssueFieldOptionConfiguration = {
  /**
   * DEPRECATED
   */
  attributes?: Array<'notSelectable' | 'defaultValue'>;
  /**
   * Defines the projects that the option is available in. If the scope is not defined, then the option is available in all projects.
   */
  scope?: IssueFieldOptionScopeBean;
};

