/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { UiModificationContextDetails } from './UiModificationContextDetails';
/**
 * The details of a UI modification.
 */
export type UiModificationDetails = {
  /**
   * List of contexts of the UI modification. The maximum number of contexts is 1000.
   */
  readonly contexts?: Array<UiModificationContextDetails>;
  /**
   * The data of the UI modification. The maximum size of the data is 50000 characters.
   */
  readonly data?: string;
  /**
   * The description of the UI modification. The maximum length is 255 characters.
   */
  readonly description?: string;
  /**
   * The ID of the UI modification.
   */
  readonly id: string;
  /**
   * The name of the UI modification. The maximum length is 255 characters.
   */
  readonly name: string;
  /**
   * The URL of the UI modification.
   */
  readonly self: string;
};

