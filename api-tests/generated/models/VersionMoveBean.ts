/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
export type VersionMoveBean = {
  /**
   * The URL (self link) of the version after which to place the moved version. Cannot be used with `position`.
   */
  after?: string;
  /**
   * An absolute position in which to place the moved version. Cannot be used with `after`.
   */
  position?: 'Earlier' | 'Later' | 'First' | 'Last';
};

