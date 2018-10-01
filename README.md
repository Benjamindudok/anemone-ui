# anemone-ui
A library of scss and Vue.js 2.0 UI components and utility helpers. 
This project is currently nowhere near release/production worthy, so
please don't expect it to be. 

## Quick start
There are multiple ways to install all the elements of this library. The easy 
way is to just import the entire library, which automatically installs all 
components as namespaced elements. For the vue components you can 
just ``import 'anemone-ui';`` in your javascript entry file. Then also include
the css by referencing it in the html or importing it into (for example) scss by
```@import '~anemone-ui/dist/anemonui.css'```. 

If you want to include individual components:

```javascript
// in javascript
import { AnemoneUIComponent } from 'anemone-ui';
```

It's not yet possible to include individual component's 
compiles css files, but you can import the source scss file yourself.

```scss
// in an scss file
// import the variables file before everything else
@import '~anemone-ui/src/scss/reference';

// then import the components you need
@import '~anemone-ui/src/components/{name}/{name}.scss';
```

## Browser support
All modern browsers and IE11