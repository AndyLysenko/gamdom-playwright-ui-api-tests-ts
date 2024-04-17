/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { UiModificationContextDetails } from './UiModificationContextDetails';
/**
 * The details of a UI modification.
 */
export type UpdateUiModificationDetails = {
  /**
   * List of contexts of the UI modification. The maximum number of contexts is 1000. If provided, replaces all existing contexts.
   */
  contexts?: Array<UiModificationContextDetails>;
  /**
   * The data of the UI modification. The maximum size of the data is 50000 characters.
   */
  data?: string;
  /**
   * The description of the UI modification. The maximum length is 255 characters.
   */
  description?: string;
  /**
   * The name of the UI modification. The maximum length is 255 characters.
   */
  name?: string;
};

