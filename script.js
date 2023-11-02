require(["esri/Map","esri/views/MapView","esri/widgets/Search","esri/Graphic"],
    function (Map,MapView,Search,Graphic) {

const map = new Map({
    basemap: "satellite"
})

const view= new MapView({
    container:"view",
    map:map,
    center:[31.20939167,30.02856667],
    zoom:17.5
})

const searchWidget = new Search({
    view: view
  });
  // Adds the search widget below other elements in
  // the top left corner of the view
  view.ui.add(searchWidget, {
    position: "top-right",
    index: 2
  });

  var point = {
    type: "point",  // autocasts as new Point()
    longitude: 31.20876389,
    latitude: 30.02740556
  };

  var markerSymbol = {
    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
    color: [226, 119, 40]
  };
  
  // Create a graphic and add the geometry and symbol to it
  var pointView = new Graphic({
    geometry: point,
    symbol: markerSymbol,
    attributes:{
        "name":"Cairo"
    }
    
    });
    view.Graphic.add(pointView);

  });

