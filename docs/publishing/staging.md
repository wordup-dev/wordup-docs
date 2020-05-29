---
id: staging
title: Staging
sidebar_label: Staging
---

You can build a release only for a staging environment with the following command:

```
$ wordup cloud:publish --environment=staging
```

Building a release in a staging environment is a very useful feature to automate your testing worklow.

## Use a Wordup test node

You can use a Wordup test node to automatically test a project in a staging environment.

First you need to setup a new test node under: https://console.wordup.dev/servers

After that you only need to add the new test domain to your `config.yml`:

```yaml title="/.wordup/config.yml"
#Add this line
staging: example.wordup.page
```

From now on every time you are publishing to your staging environment, Wordup will update the source code on the test node.
