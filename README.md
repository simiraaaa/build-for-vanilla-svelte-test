# build-for-vanilla-svelte-test

The purpose of this repository is to load a built Svelte component using a script tag.

`<script src="components.js"></script>`

## vite.config.js

https://github.com/simiraaaa/test-svelte-build-for-vanilla/blob/main/vite.config.js

## setup

```
npm i

```

## build & check

```
npm run build
```

### Check only umd.cjs

```
open ./test.html
```

### Check es & umd

```
npx http-server
```

and open `http://127.0.0.1:port/test.html` in your browser.

## development

```
npm run dev
```

## memo

- https://vitejs.dev/guide/build.html#library-mode
- https://stackoverflow.com/questions/75832641/how-to-compile-svelte-3-components-into-iifes-that-can-be-used-in-vanilla-js
- Unable to utilize aliases in svelte.config.js. For example, `$lib`.

## log

```
npm create svelte@latest      

```

```

┌  Welcome to SvelteKit!
│
◇  Where should we create your project?
│    (hit Enter to use current directory)
│
◇  Directory not empty. Continue?
│  Yes
│
◇  Which Svelte app template?
│  Library project
│
◇  Add type checking with TypeScript?
│  Yes, using JavaScript with JSDoc comments
│
◇  Select additional options (use arrow keys/space bar)
│  none
│
└  Your project is ready!

```

```
npm i
```

```
git init && git add -A && git commit -m "Initial commit"
```


...
