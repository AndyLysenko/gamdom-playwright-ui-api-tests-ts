/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { DocumentVersion } from './DocumentVersion';
import type { SimpleUsage } from './SimpleUsage';
/**
 * Workflow metadata and usage detail.
 */
export type WorkflowMetadataRestModel = {
  /**
   * The description of the workflow.
   */
  description: string;
  /**
   * The ID of the workflow.
   */
  id: string;
  /**
   * The name of the workflow.
   */
  name: string;
  /**
   * Use the optional `workflows.usages` expand to get additional information about the projects and issue types associated with the workflows in the workflow scheme.
   */
  usage: Array<SimpleUsage>;
  version: DocumentVersion;
};

