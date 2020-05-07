---
id: builds
title: Builds
sidebar_label: Builds
---

At some point in your development process you will be ready to build and release your code.

## Start a build

You can start a new build by using the [Dashboard](https://console.wordup.dev) or the command `$ wordup cloud:publish`

## Build steps

Every time you are uploading your project code to Wordup the following build steps will be automatically triggered:

* Process the readme.txt
* Clean your source code based on your `.distignore` file
* Overwrite the placeholders, like semver etc.
* Generate the zip file
* If necessary: Publish your release

## `.distignore` file

There has to be a `.distignore` file in your *src* folder. This file works almost like a `.gitignore` file and it shows Wordup which files you don't want to distribute in your releases.

## Semantic versioning

Wordup uses the [semantic version](https://semver.org/) system for automatically giving every release the correct version number.

You can specify the incrementation level of each release in the CLI by providing the `--increment` flag in your `$ wordup cloud:publish` command.

### Placeholder

In order to ship your code with the correct release version, we are supporting some placeholders you can use in your source code. On every build we are replacing the placeholders with the specified value.

#### Supported placeholders

* `%%VERSION%%` - The semantic version of the build


#### Example

Here is an example of a doctype from a WordPres plugin with a placeholder instead of the version number:

```php
<?php
/**
 * Plugin Name:     Testplugin
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     testplugin
 * Domain Path:     /languages
 * Version:         %%VERSION%%
 *
 * @package         testplugin
 */

// Your code starts here.
```
