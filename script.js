require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/widgets/Home",
  "esri/widgets/Sketch", 
  "esri/layers/GraphicsLayer", 
], function (esriConfig, Map, MapView, Home, Sketch, GraphicsLayer) {
  esriConfig.apiKey = "AAPK371c84182ff24213b903c895f035547aT8YSHDZ3MaHGoDg75Oe-ymh7FF_G8cZ72I1gZoLEuJmPLowLk7gknnVsIb3S04m_";
  
const graphicsLayer = new GraphicsLayer();  
  const map = new Map({
    basemap: "arcgis/topographic" // basemap styles service
  });
  
  const view = new MapView({
    map: map,
    center: [-79.13951701731382, 43.08849518854806], // Longitude, latitude
    zoom: 13, // Zoom level
    container: "viewDiv" // Div element
  });
  
       const sketch = new Sketch({
          view: view,
          layer: graphicsLayer
    });
          // Create a new Home widget
       const homeWidget = new Home({
            view: view
            
    });
  
  // Add the sketch and home widgets to the view
  view.ui.add(sketch, "top-right");
  view.ui.add(homeWidget, "top-left");
});