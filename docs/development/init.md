---
id: init
title: Start a new project
sidebar_label: New project
---

After you have installed wordup-cli, you are able to initialize a new project. Simply run in a directory of your choice:

```sh
$ wordup init
```

You will be guided to some setup options. After installing your new project, the WordPress development servers will be started automatically.

## Project types

Wordup supports three different project types. Choose your project type based on what you want to develop:

* Develop a plugin (*type:* plugins): If you want to develop a new plugin for WordPress
* Develop a theme (*type:* themes): If you want to develop a theme or child theme for WordPress
* Basic installation (*type:* installation): If you need a local WordPress server with access to wp-content files

The project type will be saved in the config.yml under *type*.

## Scaffold your project source code

Wordup is able to create boilerplate source code for your project. Currently supported boilerplate projects are:

* For themes: [underscore](https://github.com/automattic/_s)
* For plugins: Official WordPress boilerplate code

## The *src* folder

Your WordPress plugin or theme source code is located by default inside the ./src folder. 
In general you should place all project specific files (like CI config etc.) outside your *src* folder and all files you want to distribute inside.

For *installation* projects the *src* folder represents the wp-content folder of the WordPress installation.
Wordup doesn't show the rest of the WordPress source-code because you should never change files outside of the wp-content folder.

**Hint:** You can change the *src* folder to a folder of your choice in the [config.yml](./config.md)

## Project slug

Each WordPress theme or plugin is defined with a slug. This is a string to identify your plugin or theme in WordPress.

Wordup will create automatically a slug based on your project name. 

In the wordup design philosophy the slug is just a config value. That's why you can change it in the config.yml later.

## Create a project in the cloud

From your local project you are able to create a Wordup project in the cloud:

```sh
$ wordup cloud:project
```

## Use the Wordup example project

Under https://github.com/wordup-dev/wordup-example-project you will find a basic WordPress theme project for Wordup. You can use it as a starting point for setting up a new project on GitHub quickly.


