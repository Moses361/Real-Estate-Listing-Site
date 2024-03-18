document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id'));
    const propertyDetailsContainer = document.getElementById('property-details');
    const ratingsContainer = document.querySelector(".property-container .right");
    const savePropertyBtn = document.getElementById('save-property');

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

    // Find the property with the given id
    const property = properties.find(r => r.id === propertyId);

    if (property) {
        renderPropertyDetails(property);
    } else {
        proprtyDetailsContainer.innerHTML = '<p>Property not found</p>';
        ratingsContainer.style.display = "none";

    }

    // Function to render property details
    function renderPropertyDetails(property) {
        propertyDetailsContainer.innerHTML = `
            <h2>${property.name}</h2>
            <img src="${property.image}" alt="${property.name}">
            <p><b>Cost:</b> ${property.cost.join(', ')}</p>
            <p><b>Cost:</b> ${property.cost}</p>
        `;
    }

    // Event listener for saving property
    savePropertyBtn.addEventListener('click', function() {
        const savedProperties = JSON.parse(localStorage.getItem('savedProperties')) || [];
        const existingProperties = savedProperties.find(r => r.id === propertyId);
        if (!existingProperty) {
            savedProperty.push(property);
            localStorage.setItem('savedProperties', JSON.stringify(savedProperties));
            alert('Property saved!');
        } else {
            alert('Property already saved!');
        }
    });
});