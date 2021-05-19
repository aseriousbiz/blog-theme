---
title: Contributors
permalink: /contributors/
include_nav: true
hero_class: is-success
---

<section class="section">
  <div class="columns">
    <div class="column is-three-fifths is-offset-one-fifth">
      <figure class="image is-128x128 float-left">
        <img src="/assets/img/abbot-logo.png" class="is-rounded" alt="Image of Abbot" />
      </figure>
      <p>
      These lovely people have contributed a fix to this blog. If you want to see yourself in this list, send a pull request!
      </p>
      <p>
      Every post has a "suggest edit" link that lets you edit the blog post directly in the browser and automatically sends a pull request to GitHub.
      </p>
      <p>
      Or <a href="https://github.com/{{site.repository}}">Visit the blog repository</a> and send me a pull
      request the old fashioned way.
      </p>
      <ul class="contributor-list">
      {% if site.github.contributors.size > 0 %}
        {% for contributor in site.github.contributors %}
          <li>
            <img src="{{ contributor.avatar_url }}" /> <a href="{{ contributor.html_url }}">{{ contributor.login }}</a>
          </li>
        {% endfor %}
      {% else %}
        <li>
          <img src="{{ site.avatar_url }}" /><a href="#">Nobody Yet</a>
        </li>
      {% endif %}
      </ul>
    </div>
  </div>
</section>
