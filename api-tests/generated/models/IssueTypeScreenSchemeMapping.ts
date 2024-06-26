/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The IDs of the screen schemes for the issue type IDs.
 */
export type IssueTypeScreenSchemeMapping = {
  /**
   * The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme.
   */
  issueTypeId: string;
  /**
   * The ID of the screen scheme. Only screen schemes used in classic projects are accepted.
   */
  screenSchemeId: string;
};

