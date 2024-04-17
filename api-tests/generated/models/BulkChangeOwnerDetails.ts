/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details for changing owners of shareable entities
 */
export type BulkChangeOwnerDetails = {
  /**
   * Whether the name is fixed automatically if it's duplicated after changing owner.
   */
  autofixName: boolean;
  /**
   * The account id of the new owner.
   */
  newOwner: string;
};

