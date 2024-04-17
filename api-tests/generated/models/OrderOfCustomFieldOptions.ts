/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * An ordered list of custom field option IDs and information on where to move them.
 */
export type OrderOfCustomFieldOptions = {
  /**
   * The ID of the custom field option or cascading option to place the moved options after. Required if `position` isn't provided.
   */
  after?: string;
  /**
   * A list of IDs of custom field options to move. The order of the custom field option IDs in the list is the order they are given after the move. The list must contain custom field options or cascading options, but not both.
   */
  customFieldOptionIds: Array<string>;
  /**
   * The position the custom field options should be moved to. Required if `after` isn't provided.
   */
  position?: 'First' | 'Last';
};

