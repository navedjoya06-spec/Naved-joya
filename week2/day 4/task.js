const userContainer = document.getElementById('user-container');
const refreshBtn = document.getElementById('refresh-btn');

async function loadUsers() {
  userContainer.innerHTML = '<h2>Loading users...</h2>';
  
  try {
    const res = await fetch("https://randomuser.me/api/?results=5");
    const data = await res.json();
    
    userContainer.innerHTML = ''; // Pehle ka text clear karega
    
    data.results.forEach(user => {
      const fullName = `${user.name.first} ${user.name.last}`;
      const email = user.email;
      const profilePic = user.picture.large;
      
      const card = document.createElement('div');
      card.className = 'user-card';
      
      card.innerHTML = `
        <img src="${profilePic}" alt="${fullName}">
        <h3>${fullName}</h3>
        <p>${email}</p>
      `;
      
      userContainer.appendChild(card);
    });
    
  } catch (error) {
    console.error("Error fetching users:", error);
    userContainer.innerHTML = '<h2>Failed to load users. Please try again.</h2>';
  }
}

// Data sirf tab aayega jab button click hoga
refreshBtn.addEventListener('click', loadUsers);