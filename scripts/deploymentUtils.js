// @flow
const resolve = require('path').resolve;
const octokit = require('@octokit/rest')();
require('dotenv').config({ path: resolve('.env') });

export const getPr = async (branchName: string) => {
  const res = await octokit.pullRequests.getAll({
    owner: 'kiwicom',
    repo: 'smart-faq',
    head: `kiwicom:${branchName}`,
  });
  return res.data[0];
};

export const updateLiveURL = async (branchName: string, lastUrl: string) => {
  const pr = await getPr(branchName);
  octokit.authenticate({
    type: 'integration',
    token: process.env.GH_ACCESS_TOKEN,
  });
  const res = await octokit.pullRequests.get({
    owner: 'kiwicom',
    repo: 'smart-faq',
    number: pr.number,
  });
  let newBody;
  if (res.data.body.match(/<url>/)) {
    newBody = res.data.body.replace(
      /<url>(.*)(<\/url>)?/,
      `<url>LiveURL: ${lastUrl}</url>`,
    );
  } else {
    newBody = res.data.body.concat(
      `<br/><br/><br/><url>LiveURL: ${lastUrl}</url>`,
    );
  }
  await octokit.pullRequests.update({
    owner: 'kiwicom',
    repo: 'smart-faq',
    number: pr.number,
    body: newBody,
  });
};

require('make-runnable');
