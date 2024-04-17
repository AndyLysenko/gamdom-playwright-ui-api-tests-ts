import { IssueBean, IssuesService, IssueUpdateDetails } from '../generated';
import { v4 as uuidv4 } from 'uuid';

describe('IssuesService', () => {
  describe('#editIssue()', () => {
    it('should edit an issue correctly', async () => {
      const issueId = '10002';
      const guid = uuidv4()
      const summary = `ALY Test Issue ${guid}`
      const description = `Description ${guid}`
      const requestBody: IssueUpdateDetails = {
        "fields":{
          "project":{
              "id": "10000"
            },
            "issuetype": {
              "id": "10001"},
            "summary": summary,
            "description": description
      }};

      await IssuesService.editIssue(issueId, requestBody);
      
      // check values
      const fetchedIssue: IssueBean = await IssuesService.getIssue(issueId)
      expect(fetchedIssue.fields?.['summary']).toBe(summary);
      expect(fetchedIssue.fields?.['description']).toBe(description);
    });

    it('should not change the issue if the same values are provided', async () => {
        const issueId = '10002';
        const fetchedIssueBefore: IssueBean = await IssuesService.getIssue(issueId)
        const summary = fetchedIssueBefore.fields?.['summary'];
        const description = fetchedIssueBefore.fields?.['description'];
        const requestBody: IssueUpdateDetails = {
          "fields":{
            "project":{
                "id": "10000"
              },
              "issuetype": {
                "id": "10001"},
              "summary": summary,
              "description": description
        }};
      
        await IssuesService.editIssue(issueId, requestBody);
        
        // check values
        const fetchedIssueAfter: IssueBean = await IssuesService.getIssue(issueId)
        expect(fetchedIssueAfter.fields?.['summary']).toBe(summary);
        expect(fetchedIssueAfter.fields?.['description']).toBe(description);
      });

    it('should throw an error if the issue id or key is invalid', async () => {
      const issueIdOrKey = 'INVALID';
      const requestBody: IssueUpdateDetails = {
        // fill with valid issue details
      };
      await expect(IssuesService.editIssue(issueIdOrKey, requestBody)).rejects.toThrow();
    });
    
    // TODO:
    // Test that the editIssue method throws an error when the issueIdOrKey parameter is missing.
    // Test that the editIssue method throws an error when the requestBody parameter is missing.
    // Test that the editIssue method throws an error when the requestBody parameter contains invalid field values.
    // Test that the editIssue method throws an error when the requestBody parameter contains fields that cannot be set for the issue type.
    // Test that the editIssue method throws an error when the requestBody parameter is used to edit a subtype in a project different than that of the parent issue.
    // Test that the editIssue method throws an error when the requestBody parameter is used to edit a subtask when the option to edit subtasks is disabled.
    // Test that the editIssue method throws an error when the authentication credentials are incorrect or missing.
    // Test that the editIssue method throws an error when the user does not have the necessary permission to edit the issue.
    // Test that the editIssue method throws an error when the issue is not found or the user does not have permission to view the issue.
    // Test that the editIssue method throws an error when a configuration problem prevents the editing of the issue.
  });
});