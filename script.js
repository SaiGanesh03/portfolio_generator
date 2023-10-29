function generatePortfolio() {
    const name = document.getElementById('name').value;
    const bio = document.getElementById('bio').value;
    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    const pictureInput = document.getElementById('picture');
    
    // Check if a file is selected
    const pictureUrl = pictureInput.files.length > 0 ? URL.createObjectURL(pictureInput.files[0]) : '';

    const portfolioHTML = `
        <div id="portfolioContent">
            <h2>${name}</h2>
            <img src="${pictureUrl || 'https://via.placeholder.com/150'}" alt="Profile Picture">
            <p>${bio}</p>
            <h3>Skills:</h3>
            <ul>
                ${skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `;

    const portfolioResult = document.getElementById('portfolioResult');
    portfolioResult.innerHTML = portfolioHTML;
    portfolioResult.classList.remove('hidden');
}
