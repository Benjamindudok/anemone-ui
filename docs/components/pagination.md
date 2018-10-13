# Pagination

The pagination component provides a list of links to specific pages.

## Props

### pages

 - type: ```number```

The amount of pages that are available.

``` html
<anemone-pagination :pages="5"></anemone-pagination>
```

### current-page

 - type: ```number```
 - default value: 1

The current page number.

``` html
<anemone-pagination :pages="5" :current-page="1"></anemone-pagination>
```