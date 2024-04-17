/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { Comment } from './Comment';
import type { IssueLinkType } from './IssueLinkType';
import type { LinkedIssue } from './LinkedIssue';
export type LinkIssueRequestJsonBean = {
  comment?: Comment;
  inwardIssue: LinkedIssue;
  outwardIssue: LinkedIssue;
  type: IssueLinkType;
};

