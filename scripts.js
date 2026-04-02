// Small JS to handle mobile nav toggle and simple reveal animations
document.addEventListener('DOMContentLoaded', function(){
  const burger = document.getElementById('burger');
  const panel = document.getElementById('mobilePanel');
  if(burger && panel){
    burger.addEventListener('click', function(){
      panel.classList.toggle('open');
    });
    // close panel on outside click
    document.addEventListener('click', (e)=>{
      if(!panel.contains(e.target) && !burger.contains(e.target)){
        panel.classList.remove('open');
      }
    });
  }

  // simple reveal of elements with .fade-in
  const reveal = ()=>{
    document.querySelectorAll('.fade-in').forEach((el, idx)=>{
      setTimeout(()=> el.classList.add('show'), idx*80);
    });
  }
  reveal();
});
