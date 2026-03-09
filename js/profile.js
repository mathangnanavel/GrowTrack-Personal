// Back button
document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'dashboard.html';
});

// Load profile if exists
const profile = JSON.parse(localStorage.getItem('profile')) || {};
document.getElementById('profileName').value = profile.name || '';
document.getElementById('profileBio').value = profile.bio || '';
if(profile.pic) document.getElementById('profilePreview').src = profile.pic;

// Save profile
document.getElementById('saveProfile').addEventListener('click', () => {
  const name = document.getElementById('profileName').value;
  const bio = document.getElementById('profileBio').value;
  const pic = document.getElementById('profilePreview').src || '';

  const profileData = { name, bio, pic };
  localStorage.setItem('profile', JSON.stringify(profileData));
  alert('Profile saved!');
});

// Profile picture preview
document.getElementById('profilePic').addEventListener('change', (e) => {
  const reader = new FileReader();
  reader.onload = () => document.getElementById('profilePreview').src = reader.result;
  reader.readAsDataURL(e.target.files[0]);
});