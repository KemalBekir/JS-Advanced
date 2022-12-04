function toggle() {
    const btn = document.getElementsByClassName('button')[0];
    let isToggled = document.getElementById('extra');

    if(btn.textContent == 'More'){  
        isToggled.style.display = 'block'
        btn.textContent = 'Less';
    } else {
        isToggled.style.display = 'none';
        btn.textContent = 'More';
    }
    
}