/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of the status being created.
 */
export type StatusCreate = {
  /**
   * The description of the status.
   */
  description?: string;
  /**
   * The name of the status.
   */
  name: string;
  /**
   * The category of the status.
   */
  statusCategory: 'TODO' | 'IN_PROGRESS' | 'DONE';
};

