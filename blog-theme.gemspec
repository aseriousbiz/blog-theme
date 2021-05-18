# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "blog-theme"
  spec.version       = "0.1.0"
  spec.authors       = ["A Serious Business, Inc."]
  spec.email         = ["support@aseriousbusiness.com"]

  spec.summary       = "Simple blog theme for our Abbot Blog."
  spec.homepage      = "https://github.com/aseriousbiz/blog-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.7.4"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"
  spec.add_runtime_dependency "jekyll-paginate", "~> 1.1.0"
  spec.add_runtime_dependency "jekyll-include-cache", "~> 0.1.0"
  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 13.0.1"
end
