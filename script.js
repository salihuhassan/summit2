document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});






document.getElementById('sampleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;

    // Simple validation to check if all fields are filled
    if (!name || !email || !password || !gender) {
        alert('Please fill in all fields.');
        return;
    }

    // Display form data
    document.getElementById('formResult').innerHTML = `
        <h2>Form Submitted!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password}</p>
        <p><strong>Gender:</strong> ${gender}</p>
    `;
});




document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var feedback = document.getElementById('feedback').value;
    var messageElement = document.getElementById('message');

    if (feedback.trim() === '') {
        messageElement.textContent = 'Feedback cannot be empty!';
        messageElement.style.color = 'red';
    } else {
        messageElement.textContent = 'Thank you for your feedback!';
        messageElement.style.color = 'green';
        // Here you could handle the form data (e.g., send it to a server)
        // For now, we just clear the textarea
        document.getElementById('feedback').value = '';
    }
});





// script.js
const itemsPerPage = 5;
const totalItems = 50; // Total number of items you have
let currentPage = 1;

function renderPagination() {
    const pageNumbers = document.getElementById('pageNumbers');
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    pageNumbers.innerHTML = '';
    
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.className = i === currentPage ? 'active' : '';
        button.onclick = () => goToPage(i);
        pageNumbers.appendChild(button);
    }
    
    updateContent();
}

function goToPage(page) {
    if (page < 1 || page > Math.ceil(totalItems / itemsPerPage)) return;
    currentPage = page;
    renderPagination();
}

function updateContent() {
    const content = document.getElementById('content');
    content.innerHTML = `Showing items ${(currentPage - 1) * itemsPerPage + 1} to ${Math.min(currentPage * itemsPerPage, totalItems)} of ${totalItems}`;
    
    document.querySelector('.prev').disabled = currentPage === 1;
    document.querySelector('.next').disabled = currentPage === Math.ceil(totalItems / itemsPerPage);
}

function changePage(direction) {
    goToPage(currentPage + direction);
}

renderPagination();
