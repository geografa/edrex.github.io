---
title: In-page source editor
published: true
tags:
- things
- github
status: next
description: Major Github APIfu
layout: default
permalink: things/in-page-editor
---

Workflow:

```
click edit
  fetch source from (public) github repo
  make changes to file
click save
  if don't have token
    oauth flow
  if don't have write access
    if don't have fork of repo
      fork repo
    *hand wave*
    create pull request
  else
    commit change
``` 

 - source button
 replaces body text with source
 - load page source 
http://codemirror.net/index.html

## References

<http://developer.github.com/v3/pulls/#create-a-pull-request>
<https://github.com/philschatz/octokit.js>