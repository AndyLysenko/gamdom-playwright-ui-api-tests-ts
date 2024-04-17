/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details about the default workflow.
 */
export type DefaultWorkflow = {
  /**
   * Whether a draft workflow scheme is created or updated when updating an active workflow scheme. The draft is updated with the new default workflow. Defaults to `false`.
   */
  updateDraftIfNeeded?: boolean;
  /**
   * The name of the workflow to set as the default workflow.
   */
  workflow: string;
};

