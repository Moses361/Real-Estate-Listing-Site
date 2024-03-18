
const properties = [
    { id: 1, name: 'Savannah', image: 'images/rental 66.jpg', cost: 15000, rating: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 2, name: 'Pooler', image: 'images/rental7.jpg', cost: 35000, rating: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 3, name: 'Port Wentworth', image: 'images/rental8.jpg', cost: 18000 , rating: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 4, name: 'Bloomingdale', image: 'images/rental9.jpg', cost: 17000 , rating: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 5, name: 'Skidaway Island', image: 'images/reental10.jpg', cost: 19000 , rating: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
    { id: 6, name: 'Rincon', image: 'images/rental11.jpg', cost: 1600, rating: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
    // Add more properties here
];

const propertyList = document.getElementById('propertyList');

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('#search');
  const propertyCards = document.querySelectorAll('.card');

  // Display properties on page load
  displayProperties(properties);

  // Search functionality
  searchInput.addEventListener('input', function() {
      const searchTerm = searchInput.value.trim().toLowerCase();
      const filteredProperties = properties.filter(property => property.name.toLowerCase().includes(searchTerm) || property.description.toLowerCase().includes(searchTerm));
      displayProperties(filteredProperties);
    //   console.log('hello there');
  });


  // Function to display properties
  function displayProperties(properties) {
    let cards = ``;
    properties.forEach(property => {
        const card = `
        <div class="col-lg-4 mb-4">
        <div class="card">
            <img src="${property.image}" class="card-img-top" alt="Property 1">
            <div class="card-body">
                <h5 class="card-title">${property.name}</h5>
                <p class="card-text">${property.description}.</p>
                <!-- 5-star rating -->
                <header>How was your experience?</header>
                <div class="rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <a href="#" id="" class="btn btn-primary">View Details</a>
            </div>
        </div>
        </div>
        `;

        cards += card;
    });
    // set inner html
    propertyList.innerHTML = cards;
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
