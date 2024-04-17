/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Scope } from './Scope';
import type { ScreenableTab } from './ScreenableTab';
/**
 * A screen with tab details.
 */
export type ScreenWithTab = {
  /**
   * The description of the screen.
   */
  readonly description?: string;
  /**
   * The ID of the screen.
   */
  readonly id?: number;
  /**
   * The name of the screen.
   */
  readonly name?: string;
  /**
   * The scope of the screen.
   */
  scope?: Scope;
  /**
   * The tab for the screen.
   */
  tab?: ScreenableTab;
};

