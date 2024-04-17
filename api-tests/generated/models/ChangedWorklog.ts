/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { EntityProperty } from './EntityProperty';
/**
 * Details of a changed worklog.
 */
export type ChangedWorklog = {
  /**
   * Details of properties associated with the change.
   */
  readonly properties?: Array<EntityProperty>;
  /**
   * The datetime of the change.
   */
  readonly updatedTime?: number;
  /**
   * The ID of the worklog.
   */
  readonly worklogId?: number;
};

