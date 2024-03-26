document.addEventListener('DOMContentLoaded', function() {
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
    const searchInput = document.querySelector('#search');

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
        let cards = '';
        properties.forEach(property => {
            const card = `
                <div class="col-lg-4 mb-4">
                    <div class="card">
                        <img src="${property.image}" class="card-img-top" alt="Property 1">
                        <div class="card-body">
                            <h5 class="card-title">${property.name}</h5>
                            <p class="card-text">${property.description}</p>
                            <!-- 5-star rating -->
                            <header>How was your experience?</header>
                            <div class="rating">
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                                <span class="fa fa-star checked"></span>
                            </div>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>
            `;
            cards += card;
        });
        // Set inner HTML
        propertyList.innerHTML = cards;
    }

    // Event listener for "View Details" buttons
    propertyList.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-primary')) {
            event.preventDefault(); // Prevent default behavior of anchor tag
            // Handle view details action here
            console.log('View Details clicked');
        }
    });
});
