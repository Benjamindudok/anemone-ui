# Overlay

The overlay component can show a full screen (colored) overlay in which you can place anything you want. Use this for example to create a full screen navigation menu.

## Props

### show

 - type: ```boolean```

Specify if the overlay is shown or not.

``` html
<anemone-overlay show="showOverlayVariable" @close="showOverlayVariable = false">Ghost button</anemone-overlay>
```

## Events

### close

Triggers when the close button is clicked. Listen to this to show the overlay if needed.
