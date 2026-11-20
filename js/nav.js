// Navigasi dipisah di components/nav.html — jangan duplikat nav di tiap halaman
async function loadNav(){
  const mount=document.getElementById('site-nav');
  if(!mount) return;
  try{ const r=await fetch('components/nav.html'); mount.innerHTML=await r.text(); }
  catch(e){ mount.innerHTML='<p style="padding:12px"><a href="index.html">Beranda</a> | <a href="kamar.html">Kamar</a> | <a href="map.html">Map</a> | <a href="kontak.html">Kontak</a></p>'; }
  const page=(location.pathname.split('/').pop()||'index.html').replace('.html','')||'index';
  mount.querySelectorAll('[data-nav]').forEach(a=>{ if(a.dataset.nav===page) a.classList.add('active'); });
  const burger=mount.querySelector('#burger'); const links=mount.querySelector('#navLinks');
  if(burger&&links) burger.onclick=()=>links.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded',loadNav);
