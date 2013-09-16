---
title: Things
description: Thing-a-day is my effort to do something creative every day. 
layout: sidebar
permalink: things/
boxes:

---

### What's this?

I want to practice something creative every day. 

This page could be viewed as a process tool to help make that happen.

### How is this thing going to help you get things done?

Avoid a backlog of unstarted things. Instead try to keep each thing fresh and explore it right away.

Avoid too many rules other than that each thing should be tagged "thing-a-day".

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