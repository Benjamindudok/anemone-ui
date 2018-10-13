# Button

A button is one of the key elements in any (single page) application. The anemone button component tries to deliver basic styling functionality, and keeping the usual behaviour of a button intact.

## Props

### type

 - type: ```string```
 - possible values: ``ghost | text``

Defines the type of a button. Pick either of the possible values, or create your own custom type. The type usually determines a specific style set. Value will be output as a BEM-modifier class. 

``` html
<anemone-button type="ghost">Ghost button</anemone-button>
```

### variant

- type: ```string```
- possible values: ```primary | secondary | warning | error | success | <custom>```

Defines the style/color of the button. There are 5 different variants build in. Value will be output as a BEM-modifier class.

 
``` html
<anemone-button variant="primary">Ghost button</anemone-button>
```

### href

- type: ```string```

A target url to use as a button action. If this is set, the button will output an anchor tag instead of a regular button tag.

``` html
<anemone-button href="#">Button with link</anemone-button>

<!-- will output: -->
<a href="#" class="button">Button with link</a>
```