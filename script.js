document.addEventListener('DOMContentLoaded', function() {
  const propertyCards = document.querySelectorAll('.card');

  propertyCards.forEach(card => {
      card.addEventListener('click', () => {
          // Replace this with your code to show the details of the clicked property
          console.log('Property card clicked');
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.form-control');
  const propertyCards = document.querySelectorAll('.card');

  // Sample properties data (for demonstration)
  const properties = [
      { name: 'Savannah', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', },
      { name: 'Pooler', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', },
      { name: 'Port Wentworth', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', }
      // Add more properties here
  ];

  // Display properties on page load
  displayProperties(properties);

  // Search functionality
  searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const filteredProperties = properties.filter(property => property.name.toLowerCase().includes(searchTerm) || property.description.toLowerCase().includes(searchTerm));
      displayProperties(filteredProperties);
  });

  // Function to display properties
  function displayProperties(properties) {
      propertyCards.forEach((card, index) => {
          const property = properties[index];
          if (property) {
              card.style.display = ''; // Show the card if it matches the search term
              card.querySelector('.card-name').textContent = property.name;
              card.querySelector('.card-text').textContent = property.description;
          } else {
              card.style.display = 'none'; // Hide the card if it doesn't match the search term
          }
      });
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const viewDetailsButtons = document.querySelectorAll('.property-details .btn-primary');

  viewDetailsButtons.forEach(button => {
      button.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default behavior of anchor tag

          // You can add your code here to handle the "View Details" action
          // For example, you can show a modal with more details about the property
          console.log('View Details clicked');
      });
  });
});
