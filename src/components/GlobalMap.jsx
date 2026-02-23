import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Dark from "@amcharts/amcharts5/themes/Dark";

const GlobalMap = () => {
  const mapRef = useRef(null);

  useLayoutEffect(() => {
    if (!mapRef.current) return;
    
    // Clear any existing content
    mapRef.current.innerHTML = '';
    
    // Create root element
    const root = am5.Root.new(mapRef.current);

    // Set themes
    root.setThemes([am5themes_Dark.new(root)]);

    // Create the map chart
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "translateX",
        panY: "translateY",
        projection: am5map.geoMercator(),
        paddingBottom: 20,
        paddingTop: 20,
        paddingLeft: 20,
        paddingRight: 20
      })
    );

    // Create main world series
    const worldSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"] // Exclude Antarctica
      })
    );

    worldSeries.mapPolygons.template.setAll({
      tooltipText: "{name}",
      fill: am5.color("#2d3748"),
      stroke: am5.color("#4a5568"),
      strokeWidth: 0.5
    });

    // Add hover animation
    worldSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color("#4a5568"),
      scale: 1.02
    });

    // Animate map appearance
    worldSeries.appear(1000, 100);

    // Set map bounds to exclude Antarctica
    chart.set("homeZoomLevel", 1);
    chart.set("homeGeoPoint", { longitude: 0, latitude: 20 });

    // Highlight India
    worldSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
      if (target.dataItem && target.dataItem.get("id") === "IN") {
        return am5.color("#10b981"); // Accent color for India
      }
      return fill;
    });

    // Export destination countries
    const exportCountries = ["US", "GB", "DE", "AU", "CA", "AE", "SA", "BR", "ZA", "SG"];
    
    worldSeries.mapPolygons.template.adapters.add("fill", (fill, target) => {
      if (target.dataItem) {
        const id = target.dataItem.get("id");
        if (id === "IN") {
          return am5.color("#10b981"); // India in accent color
        }
        if (exportCountries.includes(id)) {
          return am5.color("#ef4444"); // Export countries in red
        }
      }
      return fill;
    });

    // Create line series for export routes
    const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));

    lineSeries.mapLines.template.setAll({
      stroke: am5.color("#10b981"),
      strokeWidth: 3,
      strokeOpacity: 0.8,
      strokeDasharray: [5, 3]
    });

    // Add line animation using CSS-like animation
    lineSeries.mapLines.template.set("strokeDashoffset", -15);
    
    // Create continuous dash animation
    const animateDashes = () => {
      lineSeries.mapLines.each((mapLine) => {
        if (mapLine.get("strokeDashoffset") <= -30) {
          mapLine.set("strokeDashoffset", 0);
        } else {
          mapLine.set("strokeDashoffset", mapLine.get("strokeDashoffset") - 0.5);
        }
      });
      requestAnimationFrame(animateDashes);
    };
    
    setTimeout(() => {
      animateDashes();
    }, 2000);

    // Export routes data (from India to various countries)
    const exportRoutes = [
      { from: "IN", to: "US" },
      { from: "IN", to: "GB" },
      { from: "IN", to: "DE" },
      { from: "IN", to: "AU" },
      { from: "IN", to: "CA" },
      { from: "IN", to: "AE" },
      { from: "IN", to: "SA" },
      { from: "IN", to: "BR" },
      { from: "IN", to: "ZA" },
      { from: "IN", to: "SG" }
    ];

    // Add export routes with proper arc paths
    exportRoutes.forEach((route, index) => {
      const fromCoords = [77.2090, 28.6139]; // India coordinates (Delhi)
      const toCoords = getCountryCoordinates(route.to);
      
      const line = lineSeries.pushDataItem({
        geometry: {
          type: "LineString",
          coordinates: [fromCoords, toCoords]
        }
      });
      
      // Stagger line appearance
      setTimeout(() => {
        if (line.get("mapLine")) {
          line.get("mapLine").appear(1000);
        }
      }, index * 200);
    });

    // Add point series for cities
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {})
    );

    pointSeries.bullets.push(() => {
      const circle = am5.Circle.new(root, {
        radius: 4,
        fill: am5.color("#10b981"),
        stroke: am5.color("#ffffff"),
        strokeWidth: 2
      });
      
      // Add pulsing animation
      const pulseAnimation = circle.animate({
        key: "radius",
        to: 6,
        duration: 1000,
        easing: am5.ease.yoyo(am5.ease.cubic),
        loops: Infinity
      });
      
      return am5.Bullet.new(root, {
        sprite: circle
      });
    });

    // Add India point with animation
    setTimeout(() => {
      pointSeries.pushDataItem({
        geometry: { type: "Point", coordinates: [77.2090, 28.6139] }
      });
    }, 500);

    // Add destination points with staggered animation
    exportRoutes.forEach((route, index) => {
      setTimeout(() => {
        pointSeries.pushDataItem({
          geometry: { type: "Point", coordinates: getCountryCoordinates(route.to) }
        });
      }, 1000 + (index * 150));
    });

    // Country coordinates helper function
    function getCountryCoordinates(countryCode) {
      const coords = {
        "US": [-95.7129, 37.0902],
        "GB": [-3.4360, 55.3781],
        "DE": [10.4515, 51.1657],
        "AU": [133.7751, -25.2744],
        "CA": [-106.3468, 56.1304],
        "AE": [53.8478, 23.4241],
        "SA": [45.0792, 23.8859],
        "BR": [-51.9253, -14.2350],
        "ZA": [22.9375, -30.5595],
        "SG": [103.8198, 1.3521]
      };
      return coords[countryCode] || [0, 0];
    }

    // Disable zoom control (no plus/minus buttons)
    // chart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    
    // Animate chart appearance
    chart.appear(1000, 100);

    return () => {
      if (root) {
        root.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] sm:h-[500px] md:h-[600px] rounded-lg"
      style={{ backgroundColor: 'var(--primary)' }}
    />
  );
};

export default GlobalMap;