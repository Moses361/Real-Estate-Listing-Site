document.addEventListener('DOMContentLoaded', function() {
    const savedPropertyContainer = document.getElementById('saved-properties');
    const editModal = document.getElementById('edit-modal');
    const editTitleInput = document.getElementById('edit-name');
    const editIngredientsInput = document.getElementById('edit-cost');
    const editInstructionsInput = document.getElementById('edit-rating');
    
    const saveEditBtn = document.getElementById('save-edit-btn');
    let editedPropertyId = null;

    // Load saved properties from localStorage
    const savedProperties = JSON.parse(localStorage.getItem('savedProperties')) || [];

    // Display saved properties
    savedProperties.forEach(property => {
        const propertyCard = createPropertyCard(property);
        savedPropertiesContainer.appendChild(propertyCard);
    });

    // Function to create property card
    function createPropertyCard(properties) {
        propertyList.innerHTML = '';
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.classList.add('property');
            propertyCard.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src="${property.image}" alt="${recipe.title}">
                <button class="view-details-btn" data-id="${recipe.id}">View Details</button>
            `;
            recipeList.appendChild(recipeCard);
        });
    }

    // Event listener for editing property
    savedPropertiesContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const propertyId = parseInt(event.target.dataset.id);
            const propertyToEdit = savedProperties.find(property=> property.id === propertyId);
            editedPropertyId = propertyId;
            editTitleInput.value = propertyToEdit.title;
            editIngredientsInput.value = propertyToEdit.cost.join('\n');
            editInstructionsInput.value = propertyToEdit.rating;
            editModal.style.display = 'block';
        }
    });

    // Event listener for saving edited property
    saveEditBtn.addEventListener('click', function() {
        const editedProperty = {
            id: editedPropertyId,
            title: editNameInput.value,
            ingredients: editCostInput.value.split('\n').map(cost => cost.trim()),
            cost: editCostInput.value
        };
        const updatedProperties = savedProperties.map(property => {
            return property.id === editedPropertyId ? { ...editedProperty, image: property.image } : property;
        });
        localStorage.setItem('savedProperties', JSON.stringify(updatedProperties));
        editModal.style.display = 'none';
        location.reload(); // Refresh the page to reflect changes
    });

    // Event listener for deleting properties
    savedPropertiesContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const propertyId = parseInt(event.target.dataset.id);
            if (confirm('Are you sure you want to delete this property?')) {
                const updatedProperties = savedProperties.filter(property => property.id !== propId);
                localStorage.setItem('savedProperties', JSON.stringify(updatedProperties));
                event.target.parentNode.remove(); // Remove property card from UI
                alert('Property deleted!');
            }
        }
    });

    // Close the edit modal when clicking on the close button
    editModal.querySelector('.close').addEventListener('click', function() {
        editModal.style.display = 'none';
    });

    // Close the edit modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target === editModal) {
            editModal.style.display = 'none';
        }
    }
});
