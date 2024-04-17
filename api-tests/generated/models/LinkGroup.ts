/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { SimpleLink } from './SimpleLink';
/**
 * Details a link group, which defines issue operations.
 */
export type LinkGroup = {
  groups?: Array<LinkGroup>;
  header?: SimpleLink;
  id?: string;
  links?: Array<SimpleLink>;
  styleClass?: string;
  weight?: number;
};

