let sections = document.querySelectionAll('section');
let navlinks = document.querySelectionAll('header nav a');

window.onscroll = ()=>{
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop -150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navlinks.forEach(links =>{
          links.classlist.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add ('active');
      });0
    };
    
  });
};