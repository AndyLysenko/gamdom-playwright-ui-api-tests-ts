/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* eslint-disable */
import type { ApiRequestOptions } from './ApiRequestOptions';
import dotenv from 'dotenv';

dotenv.config();

type Resolver<T> = (options: ApiRequestOptions) => Promise<T>;
type Headers = Record<string, string>;

export type OpenAPIConfig = {
  BASE: string;
  VERSION: string;
  WITH_CREDENTIALS: boolean;
  CREDENTIALS: 'include' | 'omit' | 'same-origin';
  TOKEN?: string | Resolver<string> | undefined;
  USERNAME?: string | Resolver<string> | undefined;
  PASSWORD?: string | Resolver<string> | undefined;
  HEADERS?: Headers | Resolver<Headers> | undefined;
  ENCODE_PATH?: ((path: string) => string) | undefined;
};

export const OpenAPI: OpenAPIConfig = {
  BASE: 'https://demogm.atlassian.net',
  VERSION: '1001.0.0-SNAPSHOT-9c61b78796b51839636b0c22f7f9f2138328d1a0',
  WITH_CREDENTIALS: false,
  CREDENTIALS: 'include',
  TOKEN: process.env['JIRA_DEMOQA_TOKEN'],
  USERNAME: undefined,
  PASSWORD: undefined,
  HEADERS: undefined,
  ENCODE_PATH: undefined,
};
