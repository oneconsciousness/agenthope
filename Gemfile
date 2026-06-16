source "https://rubygems.org"

# GitHub Pages — "Deploy from a branch" builds with this gem. Pinning it keeps
# local builds identical to what GitHub Pages produces. No GitHub Actions needed.
gem "github-pages", group: :jekyll_plugins

# Plugins (also declared in _config.yml). jekyll-sitemap ships with github-pages.
group :jekyll_plugins do
  gem "jekyll-sitemap"
end

# Lock down platform-specific gems for reproducible installs.
gem "webrick", "~> 1.8"
