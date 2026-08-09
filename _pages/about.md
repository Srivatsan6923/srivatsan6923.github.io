---
permalink: /
layout: home
title: #
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

{% assign home = site.data.home %}

<div class="home">

<!-- ============================== BIO ============================== -->
<section class="bio">
  <div class="bio__text">
    <h1 class="bio__name">{{ home.profile.name }}</h1>
    {% for p in home.bio %}<p>{{ p }}</p>{% endfor %}
    {% include bio-links.html %}
  </div>
  <div class="bio__photo">
    <img src="{{ home.profile.photo }}" alt="{{ home.profile.name }}">
  </div>
</section>

<!-- ============================== NEWS ============================= -->
<h2 class="home-heading">News</h2>
<div class="news-box">
  <ul>
    {% for n in home.news %}
    <li>{{ n.date }} - {{ n.body }}</li>
    {% endfor %}
  </ul>
</div>

<!-- ========================== PUBLICATIONS ========================= -->
<h2 class="home-heading">Publications</h2>
{% assign pubs = site.publications | sort: 'date' | reverse %}
{% for p in pubs %}
<div class="row">
  <div class="row__media">
    {% if p.image %}<img src="{{ p.image }}" alt="{{ p.title | escape }}">
    {% else %}<span class="row__media-ph">{{ p.venue }}</span>{% endif %}
  </div>
  <div class="row__body">
    <a class="row__title" href="{{ p.paperurl | default: p.url }}"{% if p.paperurl %} target="_blank" rel="noopener"{% endif %}>{{ p.title }}</a>
    <div class="row__meta"><b>{{ p.venue }}</b>, {{ p.date | date: "%Y" }}</div>
    {% if p.authors %}<div class="row__meta">{{ p.authors | replace: 'S. Sarvesan', '<span class="me">S. Sarvesan</span>' }}</div>{% endif %}
    {% if p.paperurl %}
    <div class="row__links"><a href="{{ p.paperurl }}" target="_blank" rel="noopener">Paper</a></div>
    {% endif %}
  </div>
</div>
{% endfor %}

<!-- ======================= SELECTED PROJECTS ======================= -->
<h2 class="home-heading">Selected Projects</h2>
{% for p in site.data.projects %}{% if p.featured %}
<div class="row">
  <div class="row__media{% if p.contain %} row__media--logo{% endif %}">
    <img src="{{ p.image }}" alt="{{ p.title | escape }}">
  </div>
  <div class="row__body">
    {% if p.url %}<a class="row__title" href="{{ p.url }}">{{ p.title }}</a>
    {% else %}<span class="row__title">{{ p.title }}</span>{% endif %}
    <div class="row__meta"><b>{{ p.meta }}</b></div>
    <p class="row__desc">{{ p.desc }}</p>
  </div>
</div>
{% endif %}{% endfor %}
<p class="home-more"><a href="/projects/">All projects &rarr;</a></p>

<!-- =========================== EXPERIENCE ========================== -->
<h2 class="home-heading">Experience</h2>
{% for x in site.data.experience %}
<div class="row">
  <div class="row__media row__media--logo"><img src="{{ x.logo }}" alt="{{ x.org }}"></div>
  <div class="row__body">
    <span class="row__title">{{ x.org }}</span>
    <div class="row__meta"><b>{{ x.role }}</b>{% if x.dates %}, {{ x.dates }}{% endif %}</div>
    <p class="row__desc">{{ x.body }}</p>
  </div>
</div>
{% endfor %}

<!-- =========================== EDUCATION =========================== -->
<h2 class="home-heading">Education</h2>
{% for e in site.data.education %}
<div class="row">
  <div class="row__media row__media--logo"><img src="{{ e.logo }}" alt="{{ e.short }}"></div>
  <div class="row__body">
    <span class="row__title">{{ e.org }}</span>
    <div class="row__meta"><b>{{ e.degree }}</b>, {{ e.dates }}</div>
    {% if e.detail %}<p class="row__desc">{{ e.detail }}</p>{% endif %}
  </div>
</div>
{% endfor %}
<p class="home-more"><a href="/education/">Coursework &amp; activities &rarr;</a></p>

</div>
