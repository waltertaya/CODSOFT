const addBtn = document.querySelector('.addSocial-btn');

addBtn.addEventListener('click', addSocial);

function addSocial() {
    console.log('Adding social');
    const socialContainer = document.getElementById('socials');
    const socialDiv = document.createElement('div');
    socialDiv.classList.add('social');
    socialDiv.innerHTML = `
        <input type="text" name="socialName[]" placeholder="Name">
        <input type="text" name="socialLink[]" placeholder="Link">
        <button type="button" class="removeSocial-btn" >Remove</button>
    `;
    socialContainer.appendChild(socialDiv);
}

const removeSocialBtns = document.querySelectorAll('.removeSocial-btn');

removeSocialBtns.forEach(btn => {
    console.log('Adding event listener');
    btn.addEventListener('click', () => {
        removeSocial(btn);
    });
});

function removeSocial(btn) {
    console.log('Removing social');
    const socialDiv = btn.parentElement;
    socialDiv.remove();
}
