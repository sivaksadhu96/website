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

// Lightweight scroll-spy for nav active state using IntersectionObserver (fast & GPU-friendly)
+
document.addEventListener('DOMContentLoaded', function(){
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if('IntersectionObserver' in window && sections.length){
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        const id = entry.target.id;
        const link = document.querySelector(`.nav-links a[href="#${id}"]`);
        if(link){
          if(entry.isIntersecting && entry.intersectionRatio > 0.45){
            navLinks.forEach(l=>l.classList.remove('active'));
            link.classList.add('active');
          }
        }
      });
    },{threshold:[0.45,0.6]});

    sections.forEach(s=>obs.observe(s));
  }
});

// Simple typing effect for the main name (runs once on load)
document.addEventListener('DOMContentLoaded', function(){
  const el = document.getElementById('typedName');
  if(!el) return;
  const text = 'Siva Kumar S';
  let i = 0;
  el.textContent = '';
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  el.appendChild(cursor);

  const step = ()=>{
    if(i < text.length){
      cursor.insertAdjacentText('beforebegin', text[i]);
      i++;
      // very fast per-character delay for immediacy
      setTimeout(step, 60);
    } else {
      // leave the cursor for a short moment then remove it
      setTimeout(()=> cursor.remove(), 600);
    }
  };
  // start after a tiny delay so layout is ready
  setTimeout(step, 120);
});
