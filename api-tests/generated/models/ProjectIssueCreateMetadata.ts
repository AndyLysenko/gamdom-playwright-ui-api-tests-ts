/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { AvatarUrlsBean } from './AvatarUrlsBean';
import type { IssueTypeIssueCreateMetadata } from './IssueTypeIssueCreateMetadata';
/**
 * Details of the issue creation metadata for a project.
 */
export type ProjectIssueCreateMetadata = {
  /**
   * List of the project's avatars, returning the avatar size and associated URL.
   */
  readonly avatarUrls?: AvatarUrlsBean;
  /**
   * Expand options that include additional project issue create metadata details in the response.
   */
  readonly expand?: string;
  /**
   * The ID of the project.
   */
  readonly id?: string;
  /**
   * List of the issue types supported by the project.
   */
  readonly issuetypes?: Array<IssueTypeIssueCreateMetadata>;
  /**
   * The key of the project.
   */
  readonly key?: string;
  /**
   * The name of the project.
   */
  readonly name?: string;
  /**
   * The URL of the project.
   */
  readonly self?: string;
};

