# Abbot Blog Theme

This is a simple Jekyll theme for the Abbot Blog.

## Installation

This theme supports being installed as a [remote theme on GitHub Pages](https://blog.github.com/2017-11-29-use-any-theme-with-github-pages/). No need to copy anything into your site. Just follow these instructions.

### The Quick Version

Add this line to the `_config.yml` of your Jekyll site:

```yaml
remote_theme: aseriousbiz/blog-theme
```

And copy all the relevant [settings from the theme's `_config.yml`](https://github.com/aseriousbiz/blog-theme/blob/master/_config.yml). You'll want to change the values to reflect your website, unless your name just happens to be "Blog Author."

Be sure to check out the customization section for tips on customizing the theme.

### Layouts

Refers to files within the `_layouts` directory, that define the markup for your theme.

- `default.html` &mdash; The base layout that lays the foundation for subsequent layouts. The derived layouts inject their contents into this file at the line that says ` {{ content }} ` and are linked to this file via [FrontMatter](https://jekyllrb.com/docs/frontmatter/) declaration `layout: default`.
- `home.html` &mdash; The layout for your landing-page / home-page / index-page. [[More Info.](#home-layout)]
- `page.html` &mdash; The layout for your documents that contain FrontMatter, but are not posts.
- `post.html` &mdash; The layout for your posts.

### Includes

Refers to snippets of code within the `_includes` directory that can be inserted in multiple layouts (and another include-file as well) within the same theme-gem.

- `footer.html` &mdash; Defines the site's footer section.
- `google-analytics.html` &mdash; Inserts Google Analytics module (active only inproduction environment).
- `head.html` &mdash; Code-block that defines the `<head></head>` in *default* layout.
- `header.html` &mdash; Defines the site's main header section. By default, pages with a defined `title` attribute will have links displayed here.

### Sass

Refers to `.scss` files within the `_sass` directory that define the theme's styles.

- `blog-theme.scss` &mdash; The core file imported by preprocessed `main.scss`, it defines the variable defaults for the theme and also further imports sass partials to supplementitself.
- `blog-theme/_base.scss` &mdash; Resets and defines base styles for various HTML elements.
- `blog-theme/_syntax-highlighting.scss` &mdash; Defines the styles for syntax-highlighting.

### Assets

Refers to various asset files within the `assets` directory. Every file in the theme's `assets` directory is copied to the assets directory of the generated site, unless there's already the same file.

This directory contains the `main.scss` that imports sass files from within the `_scss` directory. This `main.scss` is what gets processed into the theme's main stylesheet `main.css` called by `_layouts/default.html` via `_includes/head.html`.

This directory can include sub-directories to manage assets of similar type, and will be copied over as is, to the final transformed site directory.

### Plugins

blog-theme comes with [`jekyll-seo-tag`](https://github.com/jekyll/jekyll-seo-tag) plugin preinstalled to make sure your website gets the most useful meta tags. See [usage](https://github.com/jekyll/jekyll-seo-tag#usage) to know how to set it up.

## Usage

### Home Layout

`home.html` is a flexible HTML layout for the site's landing-page / home-page / index-page.

#### Main Heading and Content-injection

The *home* layout will inject all content from your `index.md` / `index.html` **before** the list of posts. This will allow you to include non-posts related content to be published on the landing page under a dedicated heading. *We recommended that you title this section with a Heading2 (`##`)*.

Usually the `site.title` itself would suffice as the implicit 'main-title' for a landing-page. But, if your landing-page would like a heading to be explicitly displayed, then simply define a `title` variable in the document's front matter and it will be rendered with an `<h1>` tag.

### Customization

To override the default structure and style of blog-theme, simply create the concerned directory at the root of your site, copy the file you wish to customize to that directory, and then edit the file.
e.g., to override the [`_includes/head.html`](_includes/head.html) file to specify a custom style path, create an `_includes` directory, copy `_includes/head.html` from blog-theme gem folder to `<yoursite>/_includes` and start editing that file.

The site's default CSS has now moved to a new place within the gem itself, [`assets/css/main.scss`](assets/css/main.scss). To **override the default CSS**, the file has to exist at your site source. Do either of the following:

- Create a new instance of `main.scss` at site source.
  - Create a new file `main.scss` at `<your-site>/assets/css/`
  - Add the frontmatter dashes, and
  - Add `@import "blog-theme";`, to `<your-site>/assets/main.scss`
  - Add your custom CSS to the file.
- Download the file from this repo
  - Create  a new file `main.scss` at `<your-site>/assets/css/`
  - Copy the contents at [assets/main.scss](assets/main.scss) onto the `main.scss` you just created, and edit away!

### Customize navigation links

To include a page (a markdown file with `layout: page`) in the navigation section of the header, set the `include_nav: true` property in the front-matter of the page.

### Change default date format

You can change the default date format by specifying `site.blog-theme.date_format`
in `_config.yml`.

```
# blog-theme date format
# refer to http://shopify.github.io/liquid/filters/date/ if you want to customize this
blog-theme:
  date_format: "%b %-d, %Y"
```

### Comments

Nope.

### Enabling Google Analytics

To enable Google Anaytics, add the following lines to your Jekyll site:

```yaml
  google_analytics: UA-NNNNNNNN-N
```

Google Analytics will only appear in production, i.e., `JEKYLL_ENV=production`

### Enabling Excerpts on the Home Page

To display post-excerpts on the Home Page, simply add the following to your `_config.yml`:

```yaml
show_excerpts: true
```

Otherwise the home page shows the full contents of each post.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/aseriousbiz/blog-theme. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## Development

Want to hack on this theme? Great! Not only is this repository a Jekyll theme, it's also a sample Jekyll site. You can clone it locally and run it see it in action.

```bash
git clone https://github.com/aseriousbiz/blog-theme
cd blog-theme
script/bootstrap
script/server
```

The `script/bootstrap` script only needs to be run once to set up your environment.

To test your theme, run `script/server` (or `bundle exec jekyll serve`) and open your browser at `http://localhost:4000`. This starts a Jekyll server using your theme and the contents. As you make modifications, your site will regenerate and you should see the changes in the browser after a refresh.

## License

The theme is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
