document.addEventListener('DOMContentLoaded', function() {
    const propertyDetailsContainer = document.getElementById('property-details');

    // Sample properties data (for demonstration)
    const properties = [
        { id: 1, name: 'Savannah', image: 'images/rental2.jpg', cost: 15000, rating: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { id: 2, name: 'Pooler', image: 'images/rental3.jpg', cost: 35000, rating: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { id: 3, name: 'Port Wentworth', image: 'images/rental2.jpg', cost: 18000 , rating: 4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { id: 4, name: 'Bloomingdale', image: 'images/rental2.jpg', cost: 17000 , rating: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { id: 5, name: 'Skidaway Island', image: 'images/rental2.jpg', cost: 19000 , rating: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { id: 6, name: 'Rincon', image: 'images/rental2.jpg', cost: 1600, rating: 5, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }
        // Add more properties here
    ];

    // Display properties on page load
    displayProperties(properties);

    // Function to display properties
    function displayProperties(properties) {
        if (!propertyDetailsContainer) {
            console.error("Property details container not found");
            return;
        }

        propertyDetailsContainer.innerHTML = '';

        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.classList.add('property-card');
            propertyCard.innerHTML = `
                <h2>${property.name}</h2>
                <img src="${property.image}" alt="${property.name}">
                <p><b>Cost:</b> $${property.cost.toFixed(2)}</p>
                <p><b>Rating:</b> ${property.rating}/5</p>
                <p><b>Description:</b> ${property.description}</p>
            `;
            propertyDetailsContainer.appendChild(propertyCard);
        });
    }
});
