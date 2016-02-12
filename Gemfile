# Maintain Ruby uptated version:

ruby "2.3.0"

gem "foreman", '>=0.78'
gem "local_time", '>=1.0'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Webserver
gem "puma", '>=2.16'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails'

# CSS related stuff
gem 'sass-rails', '>=5.0'
gem "awesome_print", '>=1.6'
gem "font-awesome-rails", '>=4.5'
gem 'bourbon'
gem 'neat'


# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>=2.7'

# Use jquery as the JavaScript library
gem 'jquery-rails', '>=4.1'

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
source 'https://rubygems.org'

# Development Group
group :development do
	# Graph generation tool
	gem "rails-erd", '>=1.4'
	# http://docs.travis-ci.com/user/travis-lint/
	gem 'travis-lint', '>=2.0'
	# Bundle exec rake doc:rails generates the API under doc/api.
	gem 'sdoc', '>=0.4'
	# Spring speeds up development by keeping your application running in the background.
	gem 'spring', '>=1.6'
end

# Test Group
group :development, :test do
	# Code Climate
	gem "codeclimate-test-reporter", require: nil
	# Travis CI
	gem "travis", '>=1.8'
	# Use sqlite3 as the database for Active Record
	gem 'sqlite3', '>=1.3'
end

# Production Group
group :production, :staging do
	# Heroku related gem
	gem 'rails_12factor', '>=0.0.3'
	# Postgres (Database)
	gem "pg", '>=0.18'
end

