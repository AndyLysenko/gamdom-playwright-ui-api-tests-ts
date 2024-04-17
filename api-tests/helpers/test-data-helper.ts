import fs from 'fs';
import path from 'path';
import { IssueBean, IssueEvent } from '../generated';

function loadData<T>(filePath: string): T[] {
  const absoluteFilePath = path.join(__dirname, filePath);
  const jsonData = fs.readFileSync(absoluteFilePath, 'utf-8');
  return JSON.parse(jsonData);
}

// events
export function loadIssueEvents(): IssueEvent[] {
  return loadData('../data/issue-events.json')
}

// issues
export function loadIssues(): IssueBean[] {
  return loadData('../data/issue-details.json')
}

export function getIssue(id: string): IssueBean {
    return loadIssues().find(issue => issue.id === id) as IssueBean;
}