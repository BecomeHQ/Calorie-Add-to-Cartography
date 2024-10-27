let totalDistance=0;

let map;
const dishes = [
  { emoji: "🍛", name: "Biryani", type: "meat", calories: "300-400 kcal" },
  { emoji: "🌯", name: "Masala Dosa", type: "vegan", calories: "200-300 kcal" },
  { emoji: "🍘", name: "Idli and Vada", type: "vegan", calories: "150-200 kcal" },
  { emoji: "🍲", name: "Bisi Bele Bath", type: "vegetarian", calories: "200-300 kcal" },
  { emoji: "🍕", name: "Pizza", type: "vegetarian", calories: "250-400 kcal" },
  { emoji: "🍔", name: "Burgers", type: "meat", calories: "300-500 kcal" },
  { emoji: "🍝", name: "Pasta", type: "vegetarian", calories: "300-400 kcal" },
  { emoji: "🍚", name: "Fried Rice", type: "vegetarian", calories: "250-350 kcal" },
  { emoji: "🥡", name: "Manchurian", type: "vegan", calories: "200-300 kcal" },
  { emoji: "🍗", name: "Tandoori Chicken", type: "meat", calories: "300-400 kcal" },
  { emoji: "🧀", name: "Paneer Butter Masala", type: "vegetarian", calories: "350-450 kcal" },
  { emoji: "🥘", name: "Chole Bhature", type: "vegan", calories: "400-500 kcal" },
  { emoji: "🐟", name: "Fish Curry", type: "meat", calories: "250-350 kcal" },
  { emoji: "🍖", name: "Mutton Rogan Josh", type: "meat", calories: "400-500 kcal" },
  { emoji: "🥗", name: "Vegetable Pulao", type: "vegetarian", calories: "200-300 kcal" },
  { emoji: "🍲", name: "Dal Makhani", type: "vegetarian", calories: "300-400 kcal" },
  { emoji: "🫑", name: "Kadai Paneer", type: "vegetarian", calories: "250-350 kcal" },
  { emoji: "🍛", name: "Hyderabadi Biryani", type: "meat", calories: "350-450 kcal" },
  { emoji: "🥦", name: "Gobi Manchurian", type: "vegan", calories: "200-300 kcal" },
  { emoji: "🍗", name: "Chicken 65", type: "meat", calories: "300-400 kcal" },
  { emoji: "🍬", name: "Mysore Pak", type: "vegan", calories: "150-250 kcal" },
  { emoji: "🥞", name: "Holige", type: "vegan", calories: "200-300 kcal" },
  { emoji: "🍘", name: "Rava Idli", type: "vegan", calories: "150-200 kcal" },
  { emoji: "🍛", name: "Chow Chow Bath", type: "vegetarian", calories: "250-350 kcal" },
  { emoji: "🥟", name: "Akki Rotti", type: "vegan", calories: "200-300 kcal" },
  { emoji: "🫓", name: "Benne Masala Dosa", type: "vegetarian", calories: "250-350 kcal" },
  { emoji: "🍲", name: "Upma", type: "vegan", calories: "200-250 kcal" },
  { emoji: "☕️", name: "Filter Coffee", type: "vegan", calories: "20-50 kcal" },
  { emoji: "🍪", name: "Maddur Vada", type: "vegan", calories: "100-150 kcal" },
  { emoji: "🥠", name: "Nipattu", type: "vegan", calories: "100-150 kcal" },
  { emoji: "🍣", name: "Sushi", type: "meat", calories: "200-300 kcal" },
  { emoji: "🍤", name: "Prawn Tempura", type: "meat", calories: "150-200 kcal" },
  { emoji: "🍤", name: "Shrimp Fry", type: "meat", calories: "200-250 kcal" },
  { emoji: "🍛", name: "Chicken Biryani", type: "meat", calories: "300-400 kcal" },
  { emoji: "🍛", name: "Egg Biryani", type: "egg", calories: "300-400 kcal" },
  { emoji: "🍳", name: "Egg Curry", type: "egg", calories: "200-300 kcal" },
  { emoji: "🍳", name: "Egg Bhurji", type: "egg", calories: "150-250 kcal" },
  { emoji: "🥚", name: "Omelette", type: "egg", calories: "100-150 kcal" },
  { emoji: "🍗", name: "Butter Chicken", type: "meat", calories: "400-500 kcal" },
  { emoji: "🍗", name: "Chicken Tikka", type: "meat", calories: "300-350 kcal" },
  { emoji: "🍗", name: "Chicken Kebab", type: "meat", calories: "250-300 kcal" },
  { emoji: "🥩", name: "Steak", type: "meat", calories: "400-500 kcal" },
  { emoji: "🍩", name: "Donut", type: "dessert", calories: "200-300 kcal" },
  { emoji: "🍰", name: "Cake", type: "dessert", calories: "300-400 kcal" },
  { emoji: "🍫", name: "Chocolate", type: "dessert", calories: "50-100 kcal" },
  { emoji: "🍨", name: "Ice Cream", type: "dessert", calories: "150-250 kcal" },
  { emoji: "🍮", name: "Pudding", type: "dessert", calories: "150-250 kcal" },
  { emoji: "🥧", name: "Pie", type: "dessert", calories: "200-300 kcal" },
  { emoji: "🍪", name: "Cookies", type: "dessert", calories: "100-150 kcal" },
  { emoji: "🍮", name: "Gulab Jamun", type: "dessert", calories: "150-200 kcal" },
  { emoji: "🍡", name: "Rasgulla", type: "dessert", calories: "100-150 kcal" },
  { emoji: "🥞", name: "Pancakes", type: "dessert", calories: "200-300 kcal" },
];


const syllables = ["Ban", "Kor", "Mal", "Indi", "Jay", "Raj", "Maj", "Kan"];
let currentTrail = [];
let allTrails = [];
let foodEmojiMarkers = [];
let totalCalories = 0;
let totalItemsDelivered = 0;
let totalFuel = 0;
let totalCholesterol = 0;
let totalPlastic = 0;
let trailInterval;
let meatHeatMap, veganHeatMap, vegetarianHeatMap;
let trailLines = []; // Store trail lines to remove on reset
let uniqueLocations = new Set(); // Track unique nodes

// Initialize map
function setupMap() {
  map = L.map('mapid').setView([12.9716, 77.5946], 13);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; OpenStreetMap contributors & CartoDB'
  }).addTo(map);

  // Initially disable the "Analyze" button
  document.getElementById("analyzeButton").disabled = true;
  document.getElementById("analyzeButton").style.backgroundColor = "gray";



  // Initially disable the "Reset" button
  document.getElementById("resetButton").disabled = true;
  document.getElementById("resetButton").style.backgroundColor = "gray";
}




// Function to calculate the distance between two coordinates using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers
  return distance;
}

// Generate trail data based on random dish and calculate distance and fuel
function generateTrail() {
  const centerLat = 12.9716;
  const centerLng = 77.5946;
  const stops = Math.floor(Math.random() * 5) + 3;

  currentTrail = [];
  let trailDistance = 0; // Initialize total distance

  for (let i = 0; i < stops; i++) {
    const latOffset = (Math.random() - 0.5) * 0.05;
    const lngOffset = (Math.random() - 0.5) * 0.05;
    const location = [centerLat + latOffset, centerLng + lngOffset];
    currentTrail.push(location);

    // Calculate distance from the previous point
    if (i > 0) {
      const [prevLat, prevLng] = currentTrail[i - 1];
      trailDistance += calculateDistance(prevLat, prevLng, location[0], location[1]);
    }
totalDistance += trailDistance; 
    // Add unique location to the set
    uniqueLocations.add(location.toString());
  }

  const foodItem = dishes[Math.floor(Math.random() * dishes.length)];
  const calories = Math.floor(Math.random() * 500) + 100;
  const fuelConsumptionRate = 0.12; // Average fuel consumption rate in liters per km
  const fuel = totalDistance * fuelConsumptionRate; // Fuel required based on distance
  const cholesterol = Math.floor(Math.random() * 50) + 10;
  const plastic = Math.floor(Math.random() * 7) + 7; // Refined plastic range

  document.getElementById("foodName").textContent = foodItem.name;
  document.getElementById("areasVisited").textContent = stops;
  document.getElementById("calories").textContent = calories;

  totalCalories += calories;
  totalItemsDelivered += 1;
  totalFuel += fuel; // Updated with calculated fuel
  totalCholesterol += cholesterol;
  totalPlastic += plastic;

  allTrails.push({ foodItem, trail: [...currentTrail] });
  animateTrail(foodItem);
}



// Display food item trail on the map
function animateTrail(foodItem) {
  currentTrail.forEach(coord => {
    let marker = L.marker(coord, {
      icon: L.divIcon({
        className: 'food-emoji',
        html: `${foodItem.emoji} ${foodItem.name}`,
        iconSize: [50, 30]
      })
    }).addTo(map);
    foodEmojiMarkers.push(marker);
  });
}



// Display color-coded heat maps and trail lines based on concentration of food types
function analyzeTrail() {
  const meatCoords = [];
  const veganCoords = [];
  const vegetarianCoords = [];

  allTrails.forEach(trailData => {
    if (trailData.foodItem.type === "meat") {
      meatCoords.push(...trailData.trail);
    } else if (trailData.foodItem.type === "vegan") {
      veganCoords.push(...trailData.trail);
    } else if (trailData.foodItem.type === "vegetarian") {
      vegetarianCoords.push(...trailData.trail);
    }

    // Create and style a dotted trail line for each trail
    let trailLine = L.polyline(trailData.trail, {
      color: 'gray',
      weight: 2,
      dashArray: '5, 10', // Dotted line style
      opacity: 0.6
    }).addTo(map);
    trailLines.push(trailLine); // Store for removal on reset
  });

  // Remove existing heat maps
  if (meatHeatMap) map.removeLayer(meatHeatMap);
  if (veganHeatMap) map.removeLayer(veganHeatMap);
  if (vegetarianHeatMap) map.removeLayer(vegetarianHeatMap);

  // Create color-coded heat maps
  meatHeatMap = L.heatLayer(meatCoords, {
    radius: 20,
    blur: 15,
    maxZoom: 17,
    gradient: { 0.4: 'red', 0.65: 'orange', 1: 'darkred' }
  }).addTo(map);

  veganHeatMap = L.heatLayer(veganCoords, {
    radius: 20,
    blur: 15,
    maxZoom: 17,
    gradient: { 0.4: 'green', 0.65: 'lightgreen', 1: 'darkgreen' }
  }).addTo(map);

  vegetarianHeatMap = L.heatLayer(vegetarianCoords, {
    radius: 20,
    blur: 15,
    maxZoom: 17,
    gradient: { 0.4: 'yellow', 0.65: 'orange', 1: 'goldenrod' }
  }).addTo(map);

  displayBillPopup();
}

function toggleTracking() {
  const button = document.getElementById("trackButton");
  const resetButton = document.getElementById("resetButton");

  if (button.textContent === "Track") {
    startSimulation();
    button.textContent = "Stop";
    document.getElementById("analyzeButton").disabled = true;
    document.getElementById("analyzeButton").style.backgroundColor = "gray";
    resetButton.disabled = true; // Disable reset button during tracking
    resetButton.style.backgroundColor = "gray";
  } else {
    stopSimulation();
    button.textContent = "Track";
    document.getElementById("analyzeButton").disabled = false;
    document.getElementById("analyzeButton").style.backgroundColor = "#4CAF50";
    resetButton.disabled = false; // Enable reset button after tracking stops
    resetButton.style.backgroundColor = "#FF5722"; // Style the reset button when enabled
  }
}

function openInfoPopup() {
  document.getElementById("infoPopup").style.display = "block";
}

function closeInfoPopup() {
  document.getElementById("infoPopup").style.display = "none";
}

function startSimulation() {
  stopSimulation();
  trailInterval = setInterval(() => {
    generateTrail();
  }, 2000);
}

function displayBillPopup() {
  const totalOrders = uniqueLocations.size;
  const usdToInrConversionRate = 82;

  // Refined costs based on detailed offset calculations
  const fuelCost = totalFuel * 2.2 * (3 / 1000); // cost per kg CO2 at $3 per ton
  const plasticCost = totalPlastic * 0.4;         // cost per kg of plastic recycled
  const calorieCost = totalCalories * 0.01;       // cost of burning calories
  const cholesterolCost = totalCholesterol * 0.05; // cost per mg cholesterol
  
  const totalCostInUSD = fuelCost + plasticCost + calorieCost + cholesterolCost;
  const totalCostInINR = (totalCostInUSD * usdToInrConversionRate).toFixed(2);

  // Update bill content
  document.getElementById("billCalories").textContent = totalCalories;
  document.getElementById("billOrders").textContent = totalOrders;
  document.getElementById("billDistance").textContent = `${totalDistance.toFixed(2)} km`;
  document.getElementById("billFuel").textContent = totalFuel.toFixed(2);
  document.getElementById("billCholesterol").textContent = totalCholesterol;
  document.getElementById("billPlastic").textContent = totalPlastic;
  document.getElementById("totalCostHumanity").textContent = `₹${totalCostInINR}`;

  // Display the waveform signature on the bill
  displayBillSignature();

  // Show the bill popup
  document.getElementById("billPopup").style.display = "block";
}




function displayBillSignature() {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 150;
  const ctx = canvas.getContext("2d");

  const deliveryCount = uniqueLocations.size;
  const calorieFactor = Math.min(totalCalories / 100, 50); // Scale down calorie impact
  const offsetStep = canvas.height / (deliveryCount + 1);

  // Determine color and stroke width based on food type
  const { patternColor, strokeW } = getFoodTypeStyle();

  for (let i = 0; i < deliveryCount; i++) {
    const amplitude = calorieFactor + i * 5; // Amplitude increases slightly per line
    const offset = (i + 1) * offsetStep; // Vertical positioning

    // Set style for each line
    ctx.strokeStyle = patternColor;
    ctx.lineWidth = strokeW;
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
      const frequency = 2 + i * 0.3; // Vary frequency per line
      const y = offset + Math.sin((x / frequency) * Math.PI / 180) * amplitude;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  document.getElementById("billPolygonShape").innerHTML = ""; // Clear previous shape
  document.getElementById("billPolygonShape").appendChild(canvas);
}

// Helper function to set color and stroke width based on food type
function getFoodTypeStyle() {
  let patternColor = "rgba(0, 128, 255, 0.6)";
  let strokeW = 2;

  // Customize style based on predominant food type
  if (totalItemsDelivered > 0) {
    const predominantType = getPredominantFoodType();
    switch (predominantType) {
      case "vegan":
        patternColor = "rgba(120, 200, 80, 0.6)";
        strokeW = 1;
        break;
      case "vegetarian":
        patternColor = "rgba(60, 255, 60, 0.6)";
        strokeW = 2;
        break;
      case "meat":
        patternColor = "rgba(220, 60, 60, 0.6)";
        strokeW = 3;
        break;
    }
  }

  return { patternColor, strokeW };
}

// Function to determine the predominant food type from trails
function getPredominantFoodType() {
  const typeCounts = { vegan: 0, vegetarian: 0, meat: 0 };
  allTrails.forEach(trailData => {
    typeCounts[trailData.foodItem.type]++;
  });

  // Determine the type with the highest count
  return Object.keys(typeCounts).reduce((a, b) => (typeCounts[a] > typeCounts[b] ? a : b));
}



function downloadBillCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = 300;
  canvas.height = 400;
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "#FFF";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#000";
  ctx.font = "16px Arial";
  ctx.fillText("🍽️ Humanity's Bill", 10, 30);

  const usdToInrConversionRate = 82;
  const totalCostInUSD = totalCalories * 0.01 + totalFuel * 0.5 + totalCholesterol * 0.05 + totalPlastic * 0.02;
  const totalCostInINR = (totalCostInUSD * usdToInrConversionRate).toFixed(2);

  ctx.fillText(`Calories Consumed: ${totalCalories} kcal`, 10, 70);
  ctx.fillText(`Number of Orders: ${uniqueLocations.size}`, 10, 100);
  ctx.fillText(`Fuel Burned: ${totalFuel.toFixed(2)} liters`, 10, 130);
  ctx.fillText(`Cholesterol Increased: ${totalCholesterol} mg`, 10, 160);
  ctx.fillText(`Plastic Consumption: ${totalPlastic} grams`, 10, 190);
  ctx.fillText(`Total Cost to Humanity: ₹${totalCostInINR}`, 10, 220);

  const link = document.createElement("a");
  link.download = "Humanity_Bill.png";
  link.href = canvas.toDataURL("image/png");

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function closeBillPopup() {
  document.getElementById("billPopup").style.display = "none";
}

function stopSimulation() {
  clearInterval(trailInterval);
}

function toggleExplanation() {
  const explanation = document.getElementById("explanationSection");
  explanation.classList.toggle("hidden");
}


function resetMap() {
  // Add your existing map reset logic here
  map.eachLayer(layer => {
    if (layer instanceof L.Marker || layer instanceof L.Polygon || layer instanceof L.HeatLayer) map.removeLayer(layer);
  });
  trailLines.forEach(line => map.removeLayer(line)); // Clear all trail lines on reset
  trailLines = [];
  allTrails = [];
  uniqueLocations.clear(); // Clear unique locations
  totalCalories = totalItemsDelivered = totalFuel = totalCholesterol = totalPlastic = totalDistance = 0;

  // Reset the Track button text if it was set to "Stop"
  const trackButton = document.getElementById("trackButton");
  trackButton.textContent = "Track";
  document.getElementById("analyzeButton").disabled = false; // Re-enable the Analyze button after reset
  document.getElementById("analyzeButton").style.backgroundColor = "#4CAF50";
}

// Initialize the map
setupMap();
