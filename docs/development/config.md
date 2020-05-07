---
id: config
title: Project config
sidebar_label: Project config
---


In your project folder you will find a folder called .wordup for the project specific configuration. 

## Config.yml

The wordup config is located in `.wordup/config.yml`. Feel free to change the config.yml file for project specific needs. 

The following config file shows all possibilities to customize your project:

```yml title="/.wordup/config.yml"

# A wordup project is either of type 'plugins', 'themes' or 'installation'
type: plugins

# The internal project name 
projectName: Testproject

# The slug of your plugin/theme/installation. 
# CAUTION: You have to reinstall your dev server, when you change the slug.
slug: testproject/testproject.php

# Change the default port of 8000
port: 8010

# Change the src folder. Default: src
srcFolder: source

# Change the dist folder. Default: dist
distFolder: build

# WordPress installation config 
wpInstall:
  # Title of the WordPress installation
  title: Testproject
  
  # Language of the WordPress installation
  language: en_US

  # Version of the WordPress installation
  version: latest

  # WordPress users with role
  users:
    - name: admin
      password: 123456
      email: test@example.com
      role: administrator
    - name: editorName
      password: 123456
      email: editor@example.com
      role: custom_role

  # Custom roles 
  roles:
    - name: A Custom editor role
      key: custom_role
      clone_from: editor
      capabilities:
        - view_products
        - read_products
        - build_products

  # Plugins you need for your project    
  plugins:
    contact-form-7: latest
    advanced-custom-fields: latest

  # Themes you need for your project    
  themes: {}

```

**Notes:**
* The first user in your config.yml will always be assigned as site owner.
* Changes in configs and fixtures are only visible after executing `wordup install`

## Plugins and themes

As you can see in the config.yml, you can add public plugins or themes to your WordPress installation. 
The plugins or themes are identified with their own slug. 
On https://wordpress.org/plugins/ and https://wordpress.org/themes/ you can search for the slug, which is always the last part of the projects url.

You also have the option to install plugins/themes from local or remote zip files. 
This option is useful for projects like https://github.com/wp-graphql/wp-graphql which are not listed in the public WordPress repository. 

```yaml
#In your config.yml
wp-graphql: https://github.com/wp-graphql/wp-graphql/archive/master.zip
```

## Users and roles

In the `.wordup/config.yml` file you can define various users with different roles, so that you can cover all your project test cases. 
You have also the option to add and assign custom user roles to your project.

## Docker

Because wordup is based on docker-compose, it's possible to extend a project with containers of your choice. 

If you want to integrate for example phpMyAdmin, 
you just have to create a file called `docker-compose.yml` in the root folder of your project, with the following content:

```yaml title="/docker-compose.yml"
version: '3.7'

services:
  phpmyadmin:
    image: phpmyadmin/phpmyadmin
    restart: always
    environment:
      - PMA_HOST=db
      - PMA_USER=wordpress
      - PMA_PASSWORD=wordpress
    ports:
      - 8080:80
```

That's it, all your wordup commands will stay the same. But now also phpMyAdmin is running on port 8080, when you start/install your project.

## Wordup on linux

On Linux it could be necessary that you have to build the Wordup docker files on your system, because of file permission issues. This can be done with the following command: 

```
$ wordup local:install --build
```
