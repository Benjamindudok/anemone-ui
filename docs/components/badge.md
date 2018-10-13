# Badge

Badges are small components to show for example a status or a notification icon.

## Props

### type

 - type: ```string```
 - possible values: ``ghost | text``

Defines the type of a badge. Pick either of the possible values, or create your own custom type. The type usually determines a specific style set. Value will be output as a BEM-modifier class. 

``` html
<anemone-badge type="ghost">Ghost button</anemone-badge>
```

### variant

- type: ```string```
- possible values: ```primary | secondary | warning | error | success | <custom>```

Defines the style/color of the badge. There are 5 different variants build in. Value will be output as a BEM-modifier class.

 
``` html
<anemone-badge variant="primary">Ghost button</anemone-badge>
```

### href

- type: ```string```

A target url to use as a badge action. If this is set, the badge will output an anchor tag instead of a span tag.

``` html
<anemone-badge href="#">Button with link</anemone-badge>

<!-- will output: -->
<a href="#" class="button">Button with link</a>
```