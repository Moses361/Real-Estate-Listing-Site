document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id'));
    const propertyDetailsContainer = document.getElementById('property-details');
    const ratingsContainer = document.querySelector(".property-container .right");
    const savePropertyBtn = document.getElementById('save-property');

   // Sample properties data (for demonstration)
const properties = [
    { id: 1, name: 'Savannah', image: 'images/rental2.jpg', cost: '$1500 per month', rating: '4.8/5' },
    { id: 2, name: 'Pooler', image: 'images/rental3.jpg', cost: '$2000 per month', rating: '4.5/5' },
    { id: 3, name: 'Port Wentworth', image: 'images/rental2.jpg', cost: '$1800 per month', rating: '4.7/5' },
    { id: 4, name: 'Bloomingdale', image: 'images/rental2.jpg', cost: '$1700 per month', rating: '4.6/5' },
    { id: 5, name: 'Skidaway Island', image: 'images/rental2.jpg', cost: '$1900 per month', rating: '4.9/5' },
    { id: 6, name: 'Rincon', image: 'images/rental2.jpg', cost: '$1600 per month', rating: '4.3/5' }
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