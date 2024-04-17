/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of a project feature.
 */
export type ProjectFeature = {
  /**
   * The key of the feature.
   */
  feature?: string;
  /**
   * URI for the image representing the feature.
   */
  imageUri?: string;
  /**
   * Localized display description for the feature.
   */
  localisedDescription?: string;
  /**
   * Localized display name for the feature.
   */
  localisedName?: string;
  /**
   * List of keys of the features required to enable the feature.
   */
  prerequisites?: Array<string>;
  /**
   * The ID of the project.
   */
  projectId?: number;
  /**
   * The state of the feature. When updating the state of a feature, only ENABLED and DISABLED are supported. Responses can contain all values
   */
  state?: 'ENABLED' | 'DISABLED' | 'COMING_SOON';
  /**
   * Whether the state of the feature can be updated.
   */
  toggleLocked?: boolean;
};

