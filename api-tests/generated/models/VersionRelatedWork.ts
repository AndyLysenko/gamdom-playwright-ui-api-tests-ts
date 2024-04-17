/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Associated related work to a version
 */
export type VersionRelatedWork = {
  /**
   * The category of the related work
   */
  category: string;
  /**
   * The ID of the issue associated with the related work (if there is one). Cannot be updated via the Rest API.
   */
  readonly issueId?: number;
  /**
   * The id of the related work. For the native release note related work item, this will be null, and Rest API does not support updating it.
   */
  readonly relatedWorkId?: string;
  /**
   * The title of the related work
   */
  title?: string;
  /**
   * The URL of the related work. Will be null for the native release note related work item, but is otherwise required.
   */
  url?: string;
};

