# Transitions

A transitions component wrapper to show transitions based on BEM-style classes

## Props

### transition-name

 - type: ```string```
 - default value: ```fade```

The transition name. Can be either one of the possible values, your own custom transition name, or any other name (like a component name, for a component specific transition). 

``` html
<anemone-transitions transition-name="fade">
    Something that needs a transition
</anemone-transitions>
```

### appear

- type: ```boolean```
- default value: ```false```

Show the transition on appear (same as built-in property)

 
``` html
<anemone-transitions :appear="true">
    Something that needs a transition
</anemone-transitions>
```

### mode

- type: ```string```

The transition mode (same as built-in property);

``` html
<anemone-button appear="out-in">
    Something that needs a transition
</anemone-transitions>
```

### group

- type: ```boolean```

Create a transition-group element, instead of a regular transition. Groups add a 'move' step. See VueJS docs for more info.

``` html
<anemone-button :group="true">
    A group of elements that needs a transition
</anemone-transitions>
```