/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { SecuritySchemeLevelMemberBean } from './SecuritySchemeLevelMemberBean';
export type SecuritySchemeLevelBean = {
  /**
   * The description of the issue security scheme level.
   */
  description?: string;
  /**
   * Specifies whether the level is the default level. False by default.
   */
  isDefault?: boolean;
  /**
   * The list of level members which should be added to the issue security scheme level.
   */
  members?: Array<SecuritySchemeLevelMemberBean>;
  /**
   * The name of the issue security scheme level. Must be unique.
   */
  name: string;
};

