This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).


## Project Setup
Clone project on local. 
In terminal cd into project folder and run
```sh
npm install
```
Click [here to read more regarding Cypress integration](https://neoncrm.atlassian.net/wiki/x/fwK9w).

### Vue Custom Component [Tutorial](https://www.youtube.com/watch?v=1w24B1f1Rmo)
This 10min tutorial will walk you through how to create and register a component:
```js
import { defineCustomElement } from 'vue'
import TestComponent from './components/my-test-component.ce.vue'

const element = defineCustomElement(TestComponent);

customElements.define("test-component", element);
```
How to bundle css into one js file. (naming component files with extension ce.vue

Once your work is complete you run
```sh
npm run build
```
And this will generate one js file in the /dist directory (along with an html file for previewing)

