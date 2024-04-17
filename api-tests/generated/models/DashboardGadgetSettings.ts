/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DashboardGadgetPosition } from './DashboardGadgetPosition';
/**
 * Details of the settings for a dashboard gadget.
 */
export type DashboardGadgetSettings = {
  /**
   * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
   */
  color?: string;
  /**
   * Whether to ignore the validation of module key and URI. For example, when a gadget is created that is a part of an application that isn't installed.
   */
  ignoreUriAndModuleKeyValidation?: boolean;
  /**
   * The module key of the gadget type. Can't be provided with `uri`.
   */
  moduleKey?: string;
  /**
   * The position of the gadget. When the gadget is placed into the position, other gadgets in the same column are moved down to accommodate it.
   */
  position?: DashboardGadgetPosition;
  /**
   * The title of the gadget.
   */
  title?: string;
  /**
   * The URI of the gadget type. Can't be provided with `moduleKey`.
   */
  uri?: string;
};

