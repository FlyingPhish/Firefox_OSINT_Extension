// Fetch the existing saved queries from local storage
const existingSaves = JSON.parse(localStorage.getItem('overpass-ide_saves')) || {};

// Define the new queries to be added
const newQueries = {
  "All Surveillance Within Boundary of Coords": {
    "overpass": "[out:json];\nnode(around:{{meters}}, {{Long}}, {{Lat}})[\"surveillance\"];\nout body;",
    "type": "saved_query"
  },
  "All Houses in UK w/ House Number 2": {
    "overpass": "[out:json];\narea[name=\"United Kingdom\"][\"boundary\"=\"administrative\"]->.searchArea;\nnode(area.searchArea)[\"addr:housenumber\"=\"2\"];\nout body;",
    "type": "saved_query"
  },
  "Public Infra around Coords": {
    "overpass": "[out:json];\nnode(around:{{meters}}, {{long}}, {{lat}})[\"amenity\"~\"police|fire_station|hospital|post_office|courthouse|embassy|townhall\"];\nout body;",
    "type": "saved_query"
  },
  "Social Engineer Attack Surface": {
    "overpass": "[out:json];\nnode(around:{{meters}}, {{long}}, {{lat}})[\"amenity\"~\"cafe|pub|bar|restaurant|fast_food|gym\"];\nnode(around:{{meters}}, {{long}}, {{lat}})[\"leisure\"=\"park\"];\nnode(around:{{meters}}, {{long}}, {{lat}})[\"shop\"~\"convenience|supermarket\"];\nout body;",
    "type": "saved_query"
  },
  "Social Engineer Attack Surface - Security": {
    "overpass": "[out:json];\nnode(around:{{meters}}, {{long}}, {{lat}})[\"barrier\"~\".*\"];\nnode(around:{{meters}}, {{long}}, {{lat}})[\"security\"~\".*\"];\nnode(around:{{meters}}, {{long}}, {{lat}})[\"surveillance\"~\".*\"];\nout body meta geom;",
    "type": "saved_query"
  }
};

// Merge the existing and new queries
const mergedQueries = { ...existingSaves, ...newQueries };

// Store the merged object back into local storage
localStorage.setItem('overpass-ide_saves', JSON.stringify(mergedQueries));
