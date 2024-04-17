/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { GroupName } from './GroupName';
import type { ListWrapperCallbackGroupName } from './ListWrapperCallbackGroupName';
export type SimpleListWrapperGroupName = {
  callback?: ListWrapperCallbackGroupName;
  items?: Array<GroupName>;
  'max-results'?: number;
  pagingCallback?: ListWrapperCallbackGroupName;
  size?: number;
};

