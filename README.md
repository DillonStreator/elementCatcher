# Element Catcher

Provides an interface for DOM polling to retrieve elements as they are rendered dynamically. My initial use case was for when a third party appliction was dynamically adding content to the page and I needed to get reference as soon as it was rendered without the third party providing any API into the rendering that was taking place.
For instance, paypal dynamically renders a pay button and I needed to remove the tab indexing on the iframe that was being generated in order to improve accessibility while the iframe was in a "disabled" state.


# Usage

```Html

<script src="../path/to/ElementCatcher.js"></script>

<script>
    // Provide options object
    window.ElementCatcher({selector:"#elementToFind1", interval:250}, function(el) {
        // ... do something with el
    });


    // Provide just selector as string
    window.ElementCatcher("#elementToFind2", function(el) {
        // ... do something with el
    });
</script>
```

# Options
**If utilizing the options object**

| prop | default | description |
|------|---------|-------------|
|selector|''|the selector of the element to poll for|
|interval|100ms|the interval for polling the page|
