const locations = {
  "1": { name: "The Dark Forest", description: "A dense, eerie forest filled with whispering winds.", connections: ["2", "3"] },
  "2": { name: "The Low Hills", description: "Rolling hills covered in mist.", connections: ["1", "4"] },
  "3": { name: "The Rooted Tunnels", description: "Underground pathways with twisted roots.", connections: ["1", "5"] },
  "4": { name: "The Large Trees", description: "Massive trees towering into the sky.", connections: ["2", "6"] },
  "5": { name: "Caves", description: "Dark caverns with glowing crystals.", connections: ["3", "7"] },
};

let currentLocation = "1";

document.addEventListener("DOMContentLoaded", () => {
  updateLocationUI();
  document.getElementById("nav-options").addEventListener("click", handleNavigation);
});

function updateLocationUI() {
  const locationData = locations[currentLocation];
  document.getElementById("location-name").textContent = locationData.name;
  document.getElementById("location-id").textContent = `ID: ${currentLocation}`;
  document.getElementById("location-description").textContent = locationData.description;
  
  const navList = document.getElementById("nav-options");
  navList.innerHTML = "";
  locationData.connections.forEach(loc => {
      let btn = document.createElement("button");
      btn.textContent = locations[loc].name;
      btn.dataset.location = loc;
      navList.appendChild(btn);
  });
}

function handleNavigation(event) {
  if (event.target.tagName === "BUTTON") {
      currentLocation = event.target.dataset.location;
      updateLocationUI();
  }
}
