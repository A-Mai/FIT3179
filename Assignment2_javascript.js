var vg_map = "world happiness chloropleth.vg.json";

vegaEmbed("#chloropleth", vg_map).then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_scatterplot = "scatter_plot_interactive.vg.json";

vegaEmbed("#scatterplot", vg_scatterplot).then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_bar = "bar graph.vg.json";

vegaEmbed("#bar", vg_bar).then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);