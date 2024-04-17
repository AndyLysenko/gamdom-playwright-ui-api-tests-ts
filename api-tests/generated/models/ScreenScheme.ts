/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { PageBeanIssueTypeScreenScheme } from './PageBeanIssueTypeScreenScheme';
import type { ScreenTypes } from './ScreenTypes';
/**
 * A screen scheme.
 */
export type ScreenScheme = {
  /**
   * The description of the screen scheme.
   */
  description?: string;
  /**
   * The ID of the screen scheme.
   */
  id?: number;
  /**
   * Details of the issue type screen schemes associated with the screen scheme.
   */
  issueTypeScreenSchemes?: PageBeanIssueTypeScreenScheme;
  /**
   * The name of the screen scheme.
   */
  name?: string;
  /**
   * The IDs of the screens for the screen types of the screen scheme.
   */
  screens?: ScreenTypes;
};

