#!/bin/sh

# Fetch updates from the remote repository
git fetch origin

# Check if there are any changes in the local repository that are not yet committed or pushed
changes=$(git status --porcelain)

# Get the name of the current branch
current_branch=$(git rev-parse --abbrev-ref HEAD)

# Check if there are any updates on the remote repository
updates=$(git log HEAD..origin/"$current_branch" --oneline)

if [[ -n "$changes" ]]; then
  echo "There are uncommitted changes in your local repository. Please commit or stash your changes before pushing."
  exit 1
elif [[ -n "$updates" ]]; then
  echo "There are updates on the remote repository. Please pull before pushing."
  exit 1
else
  echo "No updates found. Continuing with push."
fi
