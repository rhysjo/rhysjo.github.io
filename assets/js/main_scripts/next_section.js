// Script no longer used

const nsbtn = document.querySelector('#nxt-sec-btn');

function nextSection(sectionName){
    location.href=`#${sectionName}`
}

nsbtn.addEventListener('click', function(){
    event.preventDefault();
    nsbtn.style.display = 'none';
    nextSection("about-section");
});