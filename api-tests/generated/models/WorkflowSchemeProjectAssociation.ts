/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * An associated workflow scheme and project.
 */
export type WorkflowSchemeProjectAssociation = {
  /**
   * The ID of the project.
   */
  projectId: string;
  /**
   * The ID of the workflow scheme. If the workflow scheme ID is `null`, the operation assigns the default workflow scheme.
   */
  workflowSchemeId?: string;
};

