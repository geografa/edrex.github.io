---
published: true
layout: post
---

I made this blog over the last few days using the basic [Jekyll]() support built into [Github Pages](http://pages.github.com/). I like that I can push content or edit on line and the built site will always be up to date. I also like that the build infrastructure is hosted by someone else, and I don't have to worry about it bitrotting much.

On the down side, Jekyll is pretty much in feature freeze, as becomes quickly apparent [looking](https://github.com/mojombo/jekyll/issues/53) through the issue tracker. I'm looking into doing more advanced stuff at build time (SASS mostly) and Jekyll, at least the Github Pages hosted version, won't help me there. I could do my fancy build steps on a workstation, but I want to look into other options before I make a decision. 

## Criteria

**INSERT TABLE

**Middleman** seems to be the default upgrade from Jekyll. It's built around Rails' Asset Pipeline evidently (am I wrong?) which means it's a good bit more complex than Jekyll, but I'd still like to give it a chance.

*Findings:* Middleman repos can have arbitrary Ruby code in them. Boo. I don't want erb, not safe. Mustache templates or similar are much better for layout.
 
Ok, next.. I found [this compilation of tweet votes for static generators](https://gist.github.com/davatron5000/2254924) which gave me a bunch of research threads to pick up.

**[DocPad](http://docpad.org/)** was the most popular such tool running on Node.js. I kinda like the idea of something made with Node since alot of the complexity of my static sites will be on the clientside and thus in JS, and this makes code sharing a possibility.

[One person's experience going from Octopress to DocPad](http://blog.scriptybooks.com/from-jekyll-octopress-to-docpad/)

One encouraging point is [this doc](https://gist.github.com/balupton/5519403) from the DocPad team on setting automatic build from a GitHub repo with the builder running on Heroku, which is pretty close to what I am looking for in a deployment story. Ideally though, I'd like a generic service which can build multiple sites. 

http://emmet.io/blog/docpad/
http://weblog.bocoup.com/introducing-gith-github-webhooks-for-node/
