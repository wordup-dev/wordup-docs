---
id: managing 
title: Export or clone a project
sidebar_label: Export & clone
---

## Export

You can export your plugin or theme source code with one command: 

```sh
$ wordup export
```

### Export installation

If you want to export the complete WordPress installation (SQL-backup included) you have to run:

```sh
$ wordup export installation
```

### Installation from a backup

If you have exported a WordPress installation with Wordup, you are able to setup a new local WordPress installation with:

```sh
$ wordup install --archive=backup-in-your-dist-folder.tar.gz
```

## Clone a project

If you have a Wordup account you can test your local development with just one command in the cloud.

This handy feature is **very useful** if you want to show a client or a colleague  your current development process.

Just go to your project folder and type:

```sh
$ wordup cloud:clone
```
