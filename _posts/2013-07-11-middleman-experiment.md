---
published: false
layout: post
---

I made this blog over the last few days using the basic Jekyll support built into Github pages. I like that I can push content or edit on line and the built site will always be up to date. I also like that the build infrastructure is hosted by someone else, and I don't have to worry about it bitrotting much.

Now I'm looking into doing more advanced stuff at build time (SASS mostly). I could do this on a workstation since the CSS won't change much, but I want to look into other options before I make a decision. Middleman seems to be the default upgrade from Jekyll. It's built around Rails' Asset Pipeline evidently (am I wrong?) which means it's a good bit more complex than Jekyll, but I'd still like to give it a chance.

Open questions
: How much do I have to self-host to use middleman? Could I set up a service on heroku that can build anyone's middleman blog via a github hook? I think yes, but it's not safe since middleman sites can contain arbitrary Ruby.
