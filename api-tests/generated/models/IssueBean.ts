/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { IncludedFields } from './IncludedFields';
import type { IssueTransition } from './IssueTransition';
import type { IssueUpdateMetadata } from './IssueUpdateMetadata';
import type { JsonTypeBean } from './JsonTypeBean';
import type { Operations } from './Operations';
import type { PageOfChangelogs } from './PageOfChangelogs';
/**
 * Details about an issue.
 */
export type IssueBean = {
  /**
   * Details of changelogs associated with the issue.
   */
  readonly changelog?: PageOfChangelogs;
  /**
   * The metadata for the fields on the issue that can be amended.
   */
  readonly editmeta?: IssueUpdateMetadata;
  /**
   * Expand options that include additional issue details in the response.
   */
  readonly expand?: string;
  fields?: Record<string, any>;
  fieldsToInclude?: IncludedFields;
  /**
   * The ID of the issue.
   */
  readonly id?: string;
  /**
   * The key of the issue.
   */
  readonly key?: string;
  /**
   * The ID and name of each field present on the issue.
   */
  readonly names?: Record<string, string>;
  /**
   * The operations that can be performed on the issue.
   */
  readonly operations?: Operations;
  /**
   * Details of the issue properties identified in the request.
   */
  readonly properties?: Record<string, any>;
  /**
   * The rendered value of each field present on the issue.
   */
  readonly renderedFields?: Record<string, any>;
  /**
   * The schema describing each field present on the issue.
   */
  readonly schema?: Record<string, JsonTypeBean>;
  /**
   * The URL of the issue details.
   */
  readonly self?: string;
  /**
   * The transitions that can be performed on the issue.
   */
  readonly transitions?: Array<IssueTransition>;
  /**
   * The versions of each field on the issue.
   */
  readonly versionedRepresentations?: Record<string, Record<string, any>>;
};

