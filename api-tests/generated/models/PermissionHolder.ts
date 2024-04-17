/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
/**
 * Details of a user, group, field, or project role that holds a permission. See [Holder object](../api-group-permission-schemes/#holder-object) in *Get all permission schemes* for more information.
 */
export type PermissionHolder = {
  /**
   * Expand options that include additional permission holder details in the response.
   */
  readonly expand?: string;
  /**
   * As a group's name can change, use of `value` is recommended. The identifier associated withthe `type` value that defines the holder of the permission.
   */
  parameter?: string;
  /**
   * The type of permission holder.
   */
  type: string;
  /**
   * The identifier associated with the `type` value that defines the holder of the permission.
   */
  value?: string;
};

