// Navigasi: sudah ada fallback inline di HTML, JS ini hanya upgrade ke components/nav.html kalau bisa di-fetch
async function loadNav(){
  const mount=document.getElementById('site-nav');
  if(!mount) return;
  const isSub = location.pathname.includes('/map/');
  const navPath = isSub ? '/components/nav.html' : 'components/nav.html';
  try{
    const r=await fetch(navPath);
    if(r.ok) mount.innerHTML=await r.text();
  }catch(e){ /* biarkan fallback inline, halaman tetap jalan */ }
  let page=(location.pathname.split('/').filter(Boolean).pop()||'index.html').replace('.html','')||'index';
  if(location.pathname.endsWith('/map')||location.pathname.endsWith('/map/')) page='map';
  mount.querySelectorAll('[data-nav]').forEach(a=>{ if(a.dataset.nav===page) a.classList.add('active'); });
  const burger=mount.querySelector('#burger'); const links=mount.querySelector('#navLinks');
  if(burger&&links) burger.onclick=()=>links.classList.toggle('open');
}
document.addEventListener('DOMContentLoaded',loadNav);
