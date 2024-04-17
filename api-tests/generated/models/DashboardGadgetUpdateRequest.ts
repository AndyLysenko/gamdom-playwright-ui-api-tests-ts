/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DashboardGadgetPosition } from './DashboardGadgetPosition';
/**
 * The details of the gadget to update.
 */
export type DashboardGadgetUpdateRequest = {
  /**
   * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
   */
  color?: string;
  /**
   * The position of the gadget.
   */
  position?: DashboardGadgetPosition;
  /**
   * The title of the gadget.
   */
  title?: string;
};

