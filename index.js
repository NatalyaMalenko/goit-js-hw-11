import{S as u,i}from"./assets/vendor-B07T6_gy.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const m=s=>s.map(e=>`
          <li class="gallery-card">
            <a class="gallery-link" href="${e.largeImageURL}">
              <img
                class="gallery-img"
                src="${e.webformatURL}"
                alt="${e.tags}"
                loading="lazy"
              />
              <div class="info">
                <p class="info-item"><b>Likes:</b> ${e.likes}</p>
                <p class="info-item"><b>Views:</b> ${e.views}</p>
                <p class="info-item"><b>Comments:</b> ${e.comments}</p>
                <p class="info-item"><b>Downloads:</b> ${e.downloads}</p>
              </div>
            </a>
          </li>`).join(""),f="48308649-6275080a65400e008e92230b2",d=s=>{const e=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${e}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},p=document.querySelector(".search-form"),h=document.querySelector(".search-input");document.querySelector(".search-button");const l=document.querySelector(".gallery"),n=document.querySelector(".loader");let g=new u(".gallery a",{captionsData:"alt",captionDelay:250});p.addEventListener("submit",s=>{s.preventDefault();const e=h.value.trim();if(!e){i.warning({message:"Please enter a search term.",position:"topRight"});return}l.innerHTML="",n.classList.add("active"),d(e).then(o=>{if(n.classList.remove("active"),o.hits.length===0){i.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}l.insertAdjacentHTML("beforeend",m),g.refresh()}).catch(o=>{n.classList.remove("active"),i.error({message:"Something went wrong, please try again later.",position:"topRight"}),console.error("Error fetching data:",o)})});
//# sourceMappingURL=index.js.map
