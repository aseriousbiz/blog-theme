---
title: Archives
permalink: /archives/
include_nav: true
hero_class: is-info
---

<div class="archives" itemscope itemtype="http://schema.org/Blog">
  <section class="section">
    <div class="content">
      {% for post in site.posts %}
      {% if post.layout == 'post' %}
        {% include archive_post.html %}
      {% endif %}
      {% endfor %}
        </ul>
    </div>
  </section>
</div>
