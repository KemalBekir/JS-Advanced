function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e){
        const profile = e.target.parentElement;
        const isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if(isActive){
            const infoDif = profile.querySelector('div');

            if(e.target.textContent == 'Show more'){
                infoDif.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                infoDif.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}