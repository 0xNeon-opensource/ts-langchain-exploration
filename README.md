# NextJS Starter Repo

This code was forked from [nextjs-fullstack-app-template](https://github.com/alexeagleson/nextjs-fullstack-app-template).

## Development

### Storybook

To show the components in Storybook, run:

```bash
yarn storybook
```

### How to generate storybook components

Run the command:

```bash
yarn gen <ComponentName> --path=components/<subdirectory>
```

For example, if we were to make a new button component, we could run:

```bash
yarn gen MyNewButton --path=components/buttons
```

**Don't forget to change the "CHANGE_ME" text in the `ComponentName.stories.tsx` file to the section you want it displayed under in Storybook.**

### Husky

#### Setup

##### Using Husky with with a Git GUI

[Follow this article](https://dev.to/studiospindle/using-husky-s-pre-commit-hook-with-a-gui-21ch)
_Make sure to use the command `vi .huskyrc` - the article has the incorrect command `vi huskyrc` which will not work._

Additionally, add these lines to make NVM work:

```text
# this loads nvm.sh and sets the correct PATH before running hook
. ~/.nvm/nvm.sh
PATH="/usr/local/bin:$PATH"
```

#### Skipping husky

Just add the `--no-verify` flag. For example, skipping the pre-push hooks:

```bash
git commit --no-verify -m "commit message"
```

Or to skip the pre-push hooks:

```bash
git push --no-verify
```

_It's important to note that this will skip all the pre-push hooks, not just the husky hooks._
