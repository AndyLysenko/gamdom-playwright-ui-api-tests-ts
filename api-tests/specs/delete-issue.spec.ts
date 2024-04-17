import { CreatedIssue, IssueBean, IssueUpdateDetails, IssuesService } from '../generated';
import { v4 as uuidv4 } from 'uuid';


describe('IssuesService', () => {
  describe('#deleteIssue()', () => {
    it('should delete an issue without error', async () => {
        const guid = uuidv4()
        const summary = `ALY Test Issue ${guid}`
        const description = `Description ${guid}`
        const issueDetails: IssueUpdateDetails = {
          "fields":{
            "project":{
                "id": "10000"
              },
              "issuetype": {
                "id": "10001"},
              "summary": summary,
              "description": description
        }};
  
        // create
        const createdIssue: CreatedIssue = await IssuesService.createIssue(issueDetails, false);

        // validate created
        const fetchedIssue: IssueBean = await IssuesService.getIssue(createdIssue.id as string);
        expect(fetchedIssue).not.toBeNull();

        // delete
        await IssuesService.deleteIssue(createdIssue.id as string);

        // validate deleted
        await expect(IssuesService.deleteIssue(createdIssue.id as string)).rejects.toThrow();
    });

    it('should throw an error if the issue id or key is invalid', async () => {
      const issueIdOrKey = 'INVALID';

      await expect(IssuesService.deleteIssue(issueIdOrKey)).rejects.toThrow();
    });

    // TODO:
    // Test that the deleteIssue method throws an error when the issueIdOrKey parameter is invalid.
    // Test that the deleteIssue method throws an error when the deleteSubtasks parameter is set to false and the issue has one or more subtasks.
    // Test that the deleteIssue method deletes an issue and its subtasks without error when the deleteSubtasks parameter is set to true and the issue has one or more subtasks.
    // Test that the deleteIssue method throws an error when the authentication credentials are incorrect or missing.
    // Test that the deleteIssue method throws an error when the user does not have the necessary permission to delete the issue.
    // Test that the deleteIssue method throws an error when the issue is not found or the user does not have permission to view the issue.
  });
});