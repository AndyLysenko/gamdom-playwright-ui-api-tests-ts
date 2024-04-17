/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The details of a UI modification's context, which define where to activate the UI modification.
 */
export type UiModificationContextDetails = {
  /**
   * The ID of the UI modification context.
   */
  readonly id?: string;
  /**
   * Whether a context is available. For example, when a project is deleted the context becomes unavailable.
   */
  readonly isAvailable?: boolean;
  /**
   * The issue type ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all issue types. Each UI modification context can have a maximum of one wildcard.
   */
  issueTypeId?: string;
  /**
   * The project ID of the context. Null is treated as a wildcard, meaning the UI modification will be applied to all projects. Each UI modification context can have a maximum of one wildcard.
   */
  projectId?: string;
  /**
   * The view type of the context. Only `GIC`(Global Issue Create) and `IssueView` are supported. Null is treated as a wildcard, meaning the UI modification will be applied to all view types. Each UI modification context can have a maximum of one wildcard.
   */
  viewType?: 'GIC' | 'IssueView';
};

