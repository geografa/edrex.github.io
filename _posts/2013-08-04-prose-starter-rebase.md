---
published: true
title: "Prose, Jekyll Starter Repo"
layout: post
description: notes for spinning off a new open source project
---

## Goal

Spin off a minimal reusable starter repo [prose](http://prose.io) + Jekyll/Github Pages sites.

Strategy:

1. clean wc
2. Split commits that touch both content and reusable. Reorder clean commits.

    ```bash
    PATHS=_config.yml _layouts/ links.json index.html js css .gitignore css/ fonts/
    # in three windows:
    git log --stat --reverse --date-order --full-diff $PATHS
    git log -u     --reverse --date-order --full-diff $PATHS
    rebase -i
    # edit/split
    ```

3. In another pass, put reusable commits together at the beginning (leave content commits in place)
4. Clean reusable history by reorder/squash/edit
    * Remove unused asset files
    * Make sure initial commits don't have any personal info in layouts
5. Make new new `reusable-jekyll-site` branch and push to Github.

    git remote add
    git push -u HEAD reusable:master

Note:

