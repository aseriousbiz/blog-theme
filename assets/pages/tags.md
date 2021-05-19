---
title: Tags
permalink: /tags/
include_nav: false
hero_class: is-primary
container_class: tags
---

<script>
  Haack.ready(() => {
    const tag = window.location.hash
    if(tag) {
        let tagElement = document.getElementById(`tag-${tag.substring(1)}`)
        if (tagElement) {
          tagElement.style.display = 'block'
        }
    }
    else {
      // Let's just show them all
      const tags = document.querySelectorAll('.tags .tag-list')
      for (var tagElement of tags) {
        if (tagElement) {
          tagElement.style.display = 'block'
        }
      }
    }
  })
</script>

{% assign tags = site.tags %}

{% for tag in tags %}
  {% assign tagname = tag | first | slugify %}
<div id="tag-{{ tagname }}" class="tag-list">
  <span class="meta">Tagged with</span>
  <h2>{{ tagname }}</h2>
  {% assign posts = tag[1] %}
  <ul>
  {% for post in posts %}
    <li>
      <h3 class="title"><a href="{{ post.url }}">{{post.title}}</a></h3>
    </li>
  {% endfor %}
  </ul>
</div>
{% endfor %}
