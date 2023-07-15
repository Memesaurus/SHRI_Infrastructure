module.exports = async ({ github, context, TAG, run }) => {
    const DEPLOY_LINK = "https://memesaurus.github.io/SHRI_Infrastructure/"
    const WORKFLOW_LINK = `https://github.com/Memesaurus/SHRI_Infrastructure/actions/runs/${run}`
    
    const metaData = {
      owner: context.actor,
      repo: context.repo.repo,
    };

    const issue = await getIssue(github, metaData, TAG);

    const body = `pushed data to deployment branch\n \
                  [workflow run](${WORKFLOW_LINK}) \n
                  [deployment address](${DEPLOY_LINK})`;

    await github.rest.issues.createComment({
        ...metaData,
        issue_number: issue.number,
        body
    })
}