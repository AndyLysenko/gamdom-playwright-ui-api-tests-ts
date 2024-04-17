/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DashboardGadgetPosition } from './DashboardGadgetPosition';
/**
 * Details of a gadget.
 */
export type DashboardGadget = {
  /**
   * The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.
   */
  readonly color: 'blue' | 'red' | 'yellow' | 'green' | 'cyan' | 'purple' | 'gray' | 'white';
  /**
   * The ID of the gadget instance.
   */
  readonly id: number;
  /**
   * The module key of the gadget type.
   */
  readonly moduleKey?: string;
  /**
   * The position of the gadget.
   */
  readonly position: DashboardGadgetPosition;
  /**
   * The title of the gadget.
   */
  readonly title: string;
  /**
   * The URI of the gadget type.
   */
  readonly uri?: string;
};

