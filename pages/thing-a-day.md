---
title: Things
description: Thing-a-day is my effort to do something creative every day. 
layout: sidebar
boxes:
  - title: Guidelines
    content: |
      Each thing should:

       - Fall under a particular theme (or be a "one-off")
       - Be useful independent of any future work (but possibly depend on previously-completed work)

      Thing ideas should be posted on my blog with the following metadata:
      
      ```yaml
        tags: thing-a-day
        theme: handwritten notes, or some such
      ```


       - Post each thing idea with "thing-a-day" tag
       - List them on this page in a table
---

## Day thing ideas

<table class="table">
  <thead><tr><th>Idea</th><th>Description</th>
  <th>Date Posted</th></tr>
{% for post in site.posts %}
  {% if post.tags contains 'thing-a-day' %}
    <tr><td><a href="{{ post.url }}">{{ post.title }}</a></td><td>{{ post.description }}</td><td>{{ post.date | date_to_string }}</td></tr>
    {% endif %}
{% endfor %}
</table>