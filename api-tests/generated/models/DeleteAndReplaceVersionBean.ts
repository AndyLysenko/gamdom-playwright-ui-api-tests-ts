/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { CustomFieldReplacement } from './CustomFieldReplacement';
export type DeleteAndReplaceVersionBean = {
  /**
   * An array of custom field IDs (`customFieldId`) and version IDs (`moveTo`) to update when the fields contain the deleted version.
   */
  customFieldReplacementList?: Array<CustomFieldReplacement>;
  /**
   * The ID of the version to update `affectedVersion` to when the field contains the deleted version.
   */
  moveAffectedIssuesTo?: number;
  /**
   * The ID of the version to update `fixVersion` to when the field contains the deleted version.
   */
  moveFixIssuesTo?: number;
};

