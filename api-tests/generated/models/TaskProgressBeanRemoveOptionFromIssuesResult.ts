/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { RemoveOptionFromIssuesResult } from './RemoveOptionFromIssuesResult';
/**
 * Details about a task.
 */
export type TaskProgressBeanRemoveOptionFromIssuesResult = {
  /**
   * The description of the task.
   */
  description?: string;
  /**
   * The execution time of the task, in milliseconds.
   */
  elapsedRuntime: number;
  /**
   * A timestamp recording when the task was finished.
   */
  finished?: number;
  /**
   * The ID of the task.
   */
  id: string;
  /**
   * A timestamp recording when the task progress was last updated.
   */
  lastUpdate: number;
  /**
   * Information about the progress of the task.
   */
  message?: string;
  /**
   * The progress of the task, as a percentage complete.
   */
  progress: number;
  /**
   * The result of the task execution.
   */
  result?: RemoveOptionFromIssuesResult;
  /**
   * The URL of the task.
   */
  self: string;
  /**
   * A timestamp recording when the task was started.
   */
  started?: number;
  /**
   * The status of the task.
   */
  status: 'ENQUEUED' | 'RUNNING' | 'COMPLETE' | 'FAILED' | 'CANCEL_REQUESTED' | 'CANCELLED' | 'DEAD';
  /**
   * A timestamp recording when the task was submitted.
   */
  submitted: number;
  /**
   * The ID of the user who submitted the task.
   */
  submittedBy: number;
};

