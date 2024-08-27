const userContainer = document.getElementById('user-container');
const userImage = document.getElementById('user-image');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const newUserBtn = document.getElementById('new-user-btn');

async function fetchUser() {
    try {
        const queryString = '?nat=us&gender=female';
        const response = await fetch(`https://randomuser.me/api/${queryString}`);
        const data = await response.json();
        const user = data.results[0];

        // Update the image, name, and email
        userImage.src = user.picture.large;
        userName.textContent = `${user.name.first} ${user.name.last}`;
        userEmail.textContent = user.email;
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Fetch new user when the page loads
fetchUser();

// Fetch new user when the button is clicked
newUserBtn.addEventListener('click', fetchUser);

// EXTRA #2: Make multiple requests to the API
async function fetchMultipleUsers(count) {
    try {
        const response = await fetch(`https://randomuser.me/api/?results=${count}`);
        const data = await response.json();
        const users = data.results;

        
        users.forEach(user => {
            console.log(`${user.name.first} ${user.name.last}`);
        });
    } catch (error) {
        console.error('Error fetching multiple users:', error);
    }
}

fetchMultipleUsers(5);