import{a as m,S as p,i as c}from"./assets/vendor-D_1dfqIW.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d="56206542-d30ce4b763db5e6ca8fe7f09b",h="https://pixabay.com/api/";function g(s){const o={key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:o}).then(r=>r.data).catch(r=>{throw console.error(r),r})}const l=document.querySelector(".gallery"),a=document.querySelector("#loader"),y=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const o=s.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:n,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${r}" alt="${e}" />
          <div class="info">
            <p class="info-item"><b>Likes</b>${t}</p>
            <p class="info-item"><b>Views</b>${n}</p>
            <p class="info-item"><b>Comments</b>${u}</p>
            <p class="info-item"><b>Downloads</b>${f}</p>
          </div>
        </a>
      </li>
    `).join("");l.innerHTML=o,y.refresh()}function L(){l&&(l.innerHTML="")}function w(){a&&a.classList.add("is-active")}function S(){a&&a.classList.remove("is-active")}const v=document.querySelector(".form");v.addEventListener("submit",P);function P(s){s.preventDefault();const o=s.currentTarget,r=o.elements["search-text"].value.trim();if(r===""){c.warning({title:"Caution",message:"Please enter a keyword to search!",position:"topRight"});return}L(),w(),console.log(`Валідація пройдена! Запит для слова: "${r}"`),g(r).then(i=>{if(!i.hits||i.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i.hits)}).catch(i=>{console.error(i),c.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"})}).finally(()=>{S(),o.reset()})}
//# sourceMappingURL=index.js.map
