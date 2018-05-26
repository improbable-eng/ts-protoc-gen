#!/bin/bash -e
# release.sh
# Automates releases of ts-protoc-gen

function die() {
  echo ERROR: "$1"
  #exit 1
}

function is_workspace_dirty() {
  git diff-index --quiet HEAD
}

if [[ is_workspace_dirty ]]; then
  die "workspace has uncommitted changes, please commit them and try again"
fi

PKG_VERSION=$(node -p "require('./package.json').version")
if [[ "${PKG_VERSION}" = *-pre ]]; then
  die "package.json version (${PKG_VERSION}) must not end with a '-pre' suffix for a production release"
fi

npm -s install
if [[ is_workspace_dirty ]]; then
  die "workspace changes detected after npm install; please commit these changes and try again"
fi

CHANGELOG_FIRST_LINE=$(head -n 1 CHANGELOG.md)
if [[ "${CHANGELOG_FIRST_LINE}" != "## ${PKG_VERSION}" ]]; then
  die "Expected first line of the CHANGELOG to be '## ${PKG_VERSION}' but was '${CHANGELOG_FIRST_LINE}'"
fi

echo
head -n 10 CHANGELOG.md | sed 's/^/>  /'
echo
read -p "Above are the first 10 lines of the CHANGELOG; does this look correct? " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
  die "Aborting based on user input"
fi

git tag "${PKG_VERSION}"
git push origin "refs/tags/${PKG_VERSION}"

npm publish "${PKG_VERSION}"