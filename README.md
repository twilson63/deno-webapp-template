# Deno Web Stack

This is an example/template project repository that demonstrates how to spin up
a Deno/NanoSSR application.

Deno web apps with NanoSSR supports server-side and client-side components with
tailwind pre-bundled, and makes for a nice framework. Check out the website:
https://nanojsx.io/ - this repo sets up all you need to start developing your
application using Deno and NanoSSR. It also comes with a github action deploy
script that pushes your code to deno deploy.

## Requirements

- Deno v1.19 or higher - https://deno.land

## Developer Usage

```
make
```

## Bundle for production

```
make bundle
```

## Deno Deploy setup

1. register for a free account
2. create a new project
3. link the project to this github repo
4. update the deploy.yml workflow to use the project name
