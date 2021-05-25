#
<div align="center">
  <img src="https://mumble.dev/apple-touch-icon.png" width="15%">
  <b>
  <span>
  VUE
  </span>
  </b>
  <h1 align="center">
    Contributing
  </h1>

<a href="https://mumble-vue.herokuapp.com/">![Mumble](https://img.shields.io/badge/Mumble-Vue-green?style=for-the-badge)</a>

<a href="https://discord.gg/9Du4KUY3dE">![Mumble Community](https://img.shields.io/discord/825371211399692308?label=Mumble%20Community&style=for-the-badge&logo=Discord)</a>

</div>

A big welcome and thank you for considering contributing to Mumble! It’s people like you that make it a reality for users in our community.

Reading and following these guidelines will help us make the contribution process easy and effective for everyone involved. It also communicates that you agree to respect the time of the developers managing and developing these open source projects. In return, we will reciprocate that respect by addressing your issue, assessing changes, and helping you finalize your pull requests.

We highly recommend to go through the guideline before start contributing.

#

### Table of contents

- Contributing to Mumble

      - Code of Conduct
      - Getting Started
      - Issues
      - Pull Requests
      - Merging PRs
      - Reviewers

- NB  

      - Fork-and-Pull
      - Minor Updates
      - Getting Help

#

### Code of Conduct

We take our open source community seriously and hold ourselves and other contributors to high standards of communication. By participating and contributing to this project, you agree to uphold our [Code of Conduct](https://github.com/PraveenMalethia/mumble-vue/blob/master/CODE_OF_CONDUCT.md).

#

### Getting Started

Contributions are made to this repo via Issues and Pull Requests (PRs). A few general guidelines that cover both:

- To report security vulnerabilities, please send a message in our discord server [Join here](https://discord.gg/9Du4KUY3dE).
- Search for existing Issues and PRs before creating your own.
- We work hard to makes sure issues are handled in a timely manner but, depending on the impact, it could take a while to investigate the root cause. A friendly ping in the comment thread to the submitter or a contributor can help draw attention if your issue is blocking.
- If you've never contributed before, see [the first timer's guide on Auth0 blog](https://auth0.com/blog/a-first-timers-guide-to-an-open-source-project/) for resources and tips on how to get started.

#

### Issues

Issues should be used to report problems with the library, request a new feature, or to discuss potential changes before a PR is created.

If you find an Issue that addresses the problem you're having, please add your own reproduction information to the existing issue rather than creating a new one. Adding a [reaction](https://github.blog/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) can also help be indicating to our maintainers that a particular problem is affecting more than just the reporter.

#

### Pull Requests

PRs to our libraries are always welcome and can be a quick way to get your fix or improvement slated for the next release. In general, PRs should:

- Only fix/add the functionality in question **OR** address wide-spread whitespace/style issues, not both.
- Add unit or integration tests for fixed or changed functionality (if a test suite already exists).
- Address a single concern in the least number of changed lines as possible.
- Be accompanied by a complete Pull Request template (loaded automatically when a PR is created).
- **Tag Praveen Malethia !**

> ⚠ [Reviewers](https://github.com/PraveenMalethia/mumble-vue/blob/master/Reviewers.md)

For changes that address core functionality or would require breaking changes (e.g. a major release), it's best to open an Issue to discuss your proposal first. This is not required but can save time creating and reviewing changes.

#

### Merging Pull Requests


1. It's mandatory that the PR author adds reviewers prior to submitting the PR. Tag reviewers in the message. A collaborator of the repo will officially add them in PR as reviewer(s). 
2. All PRs will require the approval of both reviewers prior to the branch merge. Once the last reviewer approves the changes, they can merge the branch.

#

### Reviewers :

After submitting your PR, please tag the Mumble Vue reviewer in your PR message.

You should request [Praveen Malethia](https://github.com/PraveenMalethia)'s review !
    
#

### Fork & Pull

In general, we follow the **fork-and-pull**


#### Steps :

**1. Fork the repository to your own Github account**

**2. Clone the forked project to your machine**

   ```bash
    git clone https://github.com/<your-github-username>/mumble-vue.git
   ```

**3. Add Upstream or the remote of the original project to your local repository**

   ```bash
   # check remotes
   git remote -v
   git remote add upstream https://github.com/PraveenMalethia/mumble-vue.git
   ```

**4. Make sure you update the local repository**

   ```bash
   # Get updates
   git fetch upstream
   # switch to master branch
   git checkout master
   # Merge updates to local repository
   git merge upstream/master
   # Push to github repository
   git push origin master
   ```

**5. Create a branch locally with a succinct but descriptive name**

   ```bash
   git checkout -b branch-name
   ```

**6. Commit changes to the branch**

   ```bash
   # Stage changes for commit i.e add all modified files to commit
   git add .
   # You can also add specific files using
   # git add <filename1> <filename2>
   git commit -m "your commit message goes here"
   # check status
   git status
   ```

**7. Following any formatting and testing guidelines specific to this repository**

**8. Push changes to your fork**

   ```bash
   git push origin branch-name
   ```

**9. Open a PR in our repository and follow the PR template so that we can efficiently review the changes.**

**10. After the pull request was merged, fetch the upstream and update the default branch of your fork**

You can follow along with this video, [Contributing to Mumble](https://youtu.be/UZzYEA5UqN8)

#### NB

1. You have to install [Git for your operating system](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

2. Never Commit on the default branch, commit on branches then make a pull request

3. After making changes, if you want to make another change make sure you branch from the default branch because if you branch from branch-name, this will contain the changes from the 1st pull request except for the new pull request you working on requires the changes from the first pull request

   ```bash
   # check present branch
   git branch
   # switch to master branch
   git checkout master
   # create new branch for new changes
   git checkout -b 2nd-test-branch
   # make new changes and push to your fork
   ```

4. After the pull request was merged, fetch it and update the master branch of your fork

<img align="right" height="400" src="https://drive.google.com/uc?export=view&id=1H0yeU3gYUfhDu0ukyrElucNlzl2kGDCh" />

### Minor Updates and Pull Requests

- It is advisable, to combine all _minor updates_ in a single pull request to reduce the number of pull requests.
- Check for a list of minor updates in the [Issues](https://github.com/divanov11/Mumble/issues) as shown in the image.
- Make changes and commit accordingly
- Create a pull request and wait for review
- Once your pull request has been merge, make sure to update your master branch.

#

### Getting Help

Join us in the <a href="https://discord.gg/9Du4KUY3dE"><img align="center" width="28%" src="https://img.shields.io/discord/825371211399692308?label=Mumble%20Community&style=for-the-badge&logo=Discord"></a> and post your question there in the correct category with a descriptive tag.
