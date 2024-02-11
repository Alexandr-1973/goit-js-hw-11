(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const f=document.querySelector(".form");f.addEventListener("submit",p);function p(o){o.preventDefault();const i=o.target.elements.searchInput.value;if(i){const c=`https://pixabay.com/api/?key=42307570-a64cb029cc8427df0f0b3ddcd&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`;fetch(c).then(s=>s.json()).then(s=>{const e=s.hits.map(t=>{const{webformatURL:r,largeImageURL:n,tags:a,likes:l,views:d,comments:m,downloads:u}=t;return`<li class="gallery-item">
<a class="gallery-link" href=${n}>
<img class="gallery-image" src=${r} alt="${a}" />
</a><div class="options-div"><div class="item-div"><h4 class="item-div-name">Likes</h4>
  <p class="item-div-text">${l}</p></div><div class="item-div"><h4 class="item-div-name">Views</h4>
  <p class="item-div-text">${d}</p></div><div class="item-div"><h4 class="item-div-name">Comments</h4>
  <p class="item-div-text">${m}</p></div><div class="item-div"><h4 class="item-div-name">Downloads</h4>
  <p class="item-div-text">${u}</p></div></div>
</li>`}).join("");document.querySelector(".images-list").innerHTML=e})}}
//# sourceMappingURL=commonHelpers.js.map
