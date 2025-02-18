const locations = {
  "1": {
      name: "The Dark Forest",
      description: "The Dark Forest - Explore its surroundings.",
      connections: {
          "Left": "2",
          "Right": "7",
          "Top": "3",
          "Top Right": "5",
          "Down Left": "9",
          "Down Right": "8"
      }
  },
  "2": {
      name: "The Low Hills",
      description: "The Low Hills - Explore its surroundings.",
      connections: {
          "Left": "10",
          "Right": "1"
      }
  },
  "3": {
      name: "The Rooted Tunnels",
      description: "The Rooted Tunnels - Explore its surroundings.",
      connections: {
          "Top": "11",
          "Right": "1",
          "Top Right": "4"
      }
  },
  "4": {
      name: "The Large Trees",
      description: "The Large Trees - Explore its surroundings.",
      connections: {
          "Right": "5",
          "Down Left": "3"
      }
  },
  "5": {
      name: "Mountains",
      description: "Mountains - Explore its surroundings.",
      connections: {
          "Left": "4",
          "Top": "13",
          "Down": "1",
          "Down Right": "6"
      }
  },
  "6": {
      name: "Grasses",
      description: "Grasses - Explore its surroundings.",
      connections: {
          "Right": "7",
          "Top Left": "5"
      }
  },
  "7": {
      name: "The Tall Cliffs",
      description: "The Tall Cliffs - Explore its surroundings.",
      connections: {
          "Left": "1",
          "Right": "15",
          "Top": "14",
          "Top Left": "6",
          "Down": "16"
      }
  },
  "8": {
      name: "Desert",
      description: "Desert - Explore its surroundings.",
      connections: {
          "Left": "9",
          "Right": "16",
          "Top Left": "1",
          "Down Right": "17",
          "Down Left": "18"
      }
  },
  "9": {
      name: "Plains",
      description: "Plains - Explore its surroundings.",
      connections: {
          "Right": "8",
          "Left": "19",
          "Top": "1",
          "Down Right": "18"
      }
  },
  "10": {
      name: "Black Pebble Beach",
      description: "Black Pebble Beach - Explore its surroundings.",
      connections: {
          "Right": "2",
          "Top": "20"
      }
  },
  "11": {
      name: "Caves",
      description: "Caves - Explore its surroundings.",
      connections: {
          "Left": "21",
          "Top Right": "12",
          "Down": "3"
      }
  },
  "12": {
      name: "Glaciers",
      description: "Glaciers - Explore its surroundings.",
      connections: {
          "Left": "11",
          "Right": "13",
          "Top": "22",
          "Down": "4",
          
      }
  },
  "13": {
      name: "The Great Stream",
      description: "The Great Stream - Explore its surroundings.",
      connections: {
          "Left": "12",
          "Right": "14",
          "Down": "5"
      }
  },
  "14": {
      name: "White Sand Beach",
      description: "White Sand Beach - Explore its surroundings.",
      connections: {
          "Left": "13",
          "Right": "30",
          "Top": "23"
      }
  },
  "15": {
      name: "The Delta Of Shells",
      description: "The Delta Of Shells - Explore its surroundings.",
      connections: {
          "Left": "16",
          "Right": "30",
          "Top": "7"
      }
  },
  "16": {
      name: "Marsh",
      description: "Marsh - Explore its surroundings.",
      connections: {
          "Left": "8",
          "Right": "24",
          "Top Right": "15",
          "Top": "7",
          "Down": "17"
      }
  },
  "17": {
      name: "Volcano",
      description: "Volcano - Explore its surroundings.",
      connections: {
          "Right": "25",
          "Top": "16",
          "Top Left": "8",
          "Down Left": "26"
      }
  },
  "18": {
      name: "The Windy Canyon",
      description: "The Windy Canyon - Explore its surroundings.",
      connections: {
          "Top": "9",
          "Top Right": "8",
          "Down": "27"
      }
  },
  "19": {
      name: "3 Rivers",
      description: "3 Rivers - Explore its surroundings.",
      connections: {
          "Left": "29",
          "Top": "9",
          "Down": "28"
      }
  },
  "20": {
      name: "Island Passage",
      description: "Island Passage - Explore its surroundings.",
      connections: {
          "Left": "30",
          "Top": "21",
          "Down": "10"
      }
  },
  "21": {
      name: "Lime Stone Cliffs",
      description: "Lime Stone Cliffs - Explore its surroundings.",
      connections: {
          "Right": "11",
          "Down": "20"
      }
  },
  "22": {
      name: "The Land Of Mirrors",
      description: "The Land Of Mirrors - Explore its surroundings.",
      connections: {
          "Left": "31",
          "Top Right": "32",
          "Down": "12"
      }
  },
  "23": {
      name: "Magical Water Fountain",
      description: "Magical Water Fountain - Explore its surroundings.",
      connections: {
          "Down": "14"
      }
  },
  "24": {
      name: "Land Of Fire",
      description: "Land Of Fire - Explore its surroundings.",
      connections: {
          "Left": "16",
          "Down": "25"
      }
  },
  "25": {
      name: "The Sea of Shadows",
      description: "The Sea of Shadows - Explore its surroundings.",
      connections: {
          "Left": "17",
          "Top": "24",
          "Down": "33"
      }
  },
  "26": {
      name: "The Floral Valley",
      description: "The Floral Valley - Explore its surroundings.",
      connections: {
          "Left": "27",
          "Top Right": "17"
      }
  },
  "27": {
      name: "Green Hills",
      description: "Green Hills - Explore its surroundings.",
      connections: {
          "Left": "28",
          "Right": "26",
          "Top": "18"
      }
  },
  "28": {
      name: "Ocean Of Stone",
      description: "Ocean Of Stone - Explore its surroundings.",
      connections: {
          "Right": "27",
          "Top": "19",
          "Down": "41"
      }
  },
  "29": {
      name: "Jungle",
      description: "Jungle - Explore its surroundings.",
      connections: {
          "Left": "36",
          "Top": "19",
          "Top Left": "30",
          "Down": "35"
      }
  },
  "30": {
      name: "Ocean",
      description: "Ocean - Explore its surroundings.",
      connections: {
          "Left": "14",
          "Top": "20",
          "Down": "37",
          "Down Left": "15",
          "Down Right": "29"
      }
  },
  "31": {
      name: "The Kingdom Of Crystals",
      description: "The Kingdom Of Crystals - Explore its surroundings.",
      connections: {
          "Left": "38",
          "Right": "22",
          
         
      }
  },
  "32": {
      name: "Outer Spaces",
      description: "Outer Spaces - Explore its surroundings.",
      connections: {
          "Right": "43",
          "Down Left": "22"
        }
  },
  "33": {
      name: "The Red Island",
      description: "The Red Island - Explore its surroundings.",
      connections: {
          "Left": "34",
          "Down Right": "40"
      }
  },
  "34": {
      name: "The Corridor Of Light",
      description: "The Corridor Of Light - Explore its surroundings.",
      connections: {
          "Left": "33",
          "Right": "40"
      }
  },
  "35": {
      name: "Waterfall",
      description: "Waterfall - Explore its surroundings.",
      connections: {
          "Top": "29",
          "Down": "41"
      }
  },
  "36": {
      name: "Rock Beach",
      description: "Rock Beach - Explore its surroundings.",
      connections: {
          "Right": "29",
          "Top": "37"
      }
  },
  "37": {
      name: "Coral Reef",
      description: "Coral Reef - Explore its surroundings.",
      connections: {
          "Right": "36",
          "Top": "30"
      }
  },
  "38": {
      name: "Sky Of Rainbows",
      description: "Sky Of Rainbows - Explore its surroundings.",
      connections: {
          "Right": "31",
          "Top Left": "39"
      }
  },
  "39": {
      name: "The Dark Vortex",
      description: "The Dark Vortex - Explore its surroundings.",
      connections: {
          "Left": "40",
          "Down Right": "38"
      }
  },
  "40": {
      name: "The Black Circle",
      description: "The Black Circle - Explore its surroundings.",
      connections: {
          "Right": "39",
          "Top Left": "33"
      }
  },
  "41": {
      name: "The White Mountain",
      description: "The White Mountain - Explore its surroundings.",
      connections: {
          "Top Right": "28",
          "Top": "35",
          "Down Left": "42"
      }
  },
  "42": {
      name: "Sphere Of Light",
      description: "Sphere Of Light - Explore its surroundings.",
      connections: {
         
          "Top Right": "41"
      }
  },
  "43": {
      name: "Planet Of Waters",
      description: "Planet Of Waters - Explore its surroundings.",
      connections: {
          "Left": "32"
      }
  }
};

// Initialize the game with a starting location
let currentLocation = "1";

// Run when DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  updateLocationUI();
  // Single event listener
  document.getElementById("nav-options").addEventListener("click", handleNavigation);
});

// Function to update the UI based on current location
function updateLocationUI() {
  const locationData = locations[currentLocation];
  document.getElementById("location-name").textContent = locationData.name;
  document.getElementById("location-id").textContent = `ID: ${currentLocation}`;
  document.getElementById("location-description").textContent = locationData.description;
  
  const navList = document.getElementById("nav-options");
  navList.innerHTML = ""; // Clear existing
  
  const navGrid = document.createElement("div");
  navGrid.className = "nav-grid";
  
  // Map our 3x3 positions
  const gridPositions = {
    "Top Left": 0,
    "Top": 1,
    "Top Right": 2,
    "Left": 3,
    "Action Menu": 4,
    "Right": 5,
    "Down Left": 6,
    "Down": 7,
    "Down Right": 8
  };
  
  // Create 9 cells
  for (let i = 0; i < 9; i++) {
    const button = document.createElement("button");
    
    if (i === 4) {
      // Action Menu Cell
      button.textContent = "Action Menu";
      button.className = "action-menu";
    } else {
      // Find which direction corresponds to this index
      const direction = Object.keys(gridPositions).find(
        key => gridPositions[key] === i
      );
      const connectionID = direction && locationData.connections[direction];
      
      if (connectionID) {
        // Show only location name (no direction text)
        button.textContent = locations[connectionID].name;
        button.dataset.location = connectionID;
      } else {
        // Empty cell
        button.classList.add("empty");
        button.disabled = true;
      }
    }
    
    navGrid.appendChild(button);
  }
  
  navList.appendChild(navGrid);
}

// Single handleNavigation function
function handleNavigation(event) {
  if (event.target.tagName === "BUTTON") {
    // If it's the action-menu button, do something different if desired
    if (event.target.classList.contains("action-menu")) {
      // For now, it does nothing. If you want a menu, open it here:
      // openActionsMenu();
      return;
    }
    // Otherwise navigate if it has a data-location
    const newLocation = event.target.dataset.location;
    if (newLocation) {
      currentLocation = newLocation;
      updateLocationUI();
    }
  }
}