/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * The default value for a version picker custom field.
 */
export type CustomFieldContextDefaultValueSingleVersionPicker = {
  type: 'version.single';
  /**
   * The ID of the default version.
   */
  versionId: string;
  /**
   * The order the pickable versions are displayed in. If not provided, the released-first order is used. Available version orders are `"releasedFirst"` and `"unreleasedFirst"`.
   */
  versionOrder?: string;
};

