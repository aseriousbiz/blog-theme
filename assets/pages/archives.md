---
title: Archives
permalink: /archives/
include_nav: true
hero_class: is-info
---

{% for post in site.posts %}
  {% if post.layout == 'post' %}
    {% include archive_post.html %}
  {% endif %}
{% endfor %}
</ul>
