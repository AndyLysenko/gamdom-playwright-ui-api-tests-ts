/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Change the order of issue resolutions.
 */
export type ReorderIssueResolutionsRequest = {
  /**
   * The ID of the resolution. Required if `position` isn't provided.
   */
  after?: string;
  /**
   * The list of resolution IDs to be reordered. Cannot contain duplicates nor after ID.
   */
  ids: Array<string>;
  /**
   * The position for issue resolutions to be moved to. Required if `after` isn't provided.
   */
  position?: string;
};

