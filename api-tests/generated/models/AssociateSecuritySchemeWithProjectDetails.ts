/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { OldToNewSecurityLevelMappingsBean } from './OldToNewSecurityLevelMappingsBean';
/**
 * Issue security scheme, project, and remapping details.
 */
export type AssociateSecuritySchemeWithProjectDetails = {
  /**
   * The list of scheme levels which should be remapped to new levels of the issue security scheme.
   */
  oldToNewSecurityLevelMappings?: Array<OldToNewSecurityLevelMappingsBean>;
  /**
   * The ID of the project.
   */
  projectId: string;
  /**
   * The ID of the issue security scheme. Providing null will clear the association with the issue security scheme.
   */
  schemeId: string;
};

