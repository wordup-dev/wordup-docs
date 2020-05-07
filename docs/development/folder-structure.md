---
id: folder-structure
title: Folder structure
sidebar_label: Folder structure
---

## The default wordup project structure

The wordup CLI will generate a specific folder structure for your project:

```
├── .gitignore
├── README.md
├── .wordup
|    ├── config.yml 
|    └── docker (The docker folder with the generated files)
├── dist
|    └── (Your exported plugin/theme files)
└── src
     ├── .distignore
     └── (Your plugin/theme src files)
```

## Develop with your own folder structure

It is not necessary that you have to use the Wordup provided folder structure. You can totally use your old development worklow. As long as there is a `.wordup/config.yml` in a folder, the CLI can handle it.

Just make sure to set the `srcFolder` setting correctly in the config.yml file.

### Using an existing project

If you have an existing WordPress plugin or theme project and you want to include Wordup, just create a `.wordup/config.yml` in your source folder and set the `srcFolder` setting to `.`.



