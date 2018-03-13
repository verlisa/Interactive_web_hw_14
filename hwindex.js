// Get references to the tbody element, input field and button
var $tbody = document.querySelector('tbody');
var $dateInput = document.querySelector('#datetime');
var $searchBtn = document.querySelector('#search');

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener('click', handleSearchButtonClick);

// Set filteredSightings to SightingsData initially
// SightingsData comes from the SightingsData.js file
var filteredSightings = dataSet;

// renderTable renders the filteredSightings to the tbody
function renderTable() {
  $tbody.innerHTML = '';
  for (var i = 0; i < filteredSightings.length; i++) {
    // Get get the current address object and its fields
    var sighting = filteredSightings[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current sighting's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDateTime = $dateInput.value.trim().toLowerCase();

  // Set filteredSightings to an array of all dates whose "date/time" matches the filter
  filteredSightings = dataSet.filter(function(DateTime) {
    var sightingsDate = DateTime.datetime.toLowerCase();

    // If true, add the address to the filteredSightings, otherwise don't add it to filteredSightings
    return sightingsDate === filterDateTime;
  });
  renderTable();
}

// Render the table for the first time on page load
renderTable();
