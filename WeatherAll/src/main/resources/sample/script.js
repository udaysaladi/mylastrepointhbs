function openUserProfile() {
    var userProfileModal = document.getElementById('userProfileModal');
    userProfileModal.style.display = 'block';
}

function closeUserProfile() {
    var userProfileModal = document.getElementById('userProfileModal');
    userProfileModal.style.display = 'none';
}

window.onclick = function (event) {
    var userProfileModal = document.getElementById('userProfileModal');
    if (event.target == userProfileModal) {
        userProfileModal.style.display = 'none';
    }
}
