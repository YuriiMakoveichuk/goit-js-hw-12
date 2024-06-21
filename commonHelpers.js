import{A as m,S as p,i as d}from"./assets/vendor-cf73e4e9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const f=m.create({baseURL:"https://pixabay.com/api/",params:{key:"44363608-aeb5e859d1804b8d255aa00c3",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function h(r){try{const t=await f.get("",{params:{q:r}});return console.log(t),t.data}catch(t){console.log("server error",t)}}function g({webformatURL:r,largeImageURL:t,tags:i,likes:a,views:e,comments:s,downloads:o}){return` <li class="album-item">
            <a class="album-link" href="${t}">
            <img
              class="album-img"
              src="${r}"
              alt="${i}"
            />
            <ul class="statistics-list">
              <li class="statistics-item text-marg-1">
                <p class="statistics-text">Likes</p>
                <p>${a}</p>
              </li>
              <li class="statistics-item text-marg-2">
                <p class="statistics-text">Views</p>
                <p>${e}</p>
              </li>
              <li class="statistics-item text-marg-3">
                <p class="statistics-text">Comments</p>
                <p>${s}</p>
              </li>
              <li class="statistics-item">
                <p class="statistics-text">Downloads</p>
                <p>${o}</p>
              </li>
            </ul>
            </a>
          </li>`}function y(r){return r.map(g).join(`
`)}const c=document.querySelector(".js-form"),l=document.querySelector(".js-album-list"),n=document.querySelector(".js-loader"),u=document.querySelector(".js-form-btn"),b=new p(".album-list a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",async r=>{r.preventDefault(),l.innerHTML="";const t=r.target.elements.text.value.trim();if(t!==""){L();try{const i=await h(t);i.hits.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3}):(l.innerHTML=y(i.hits),b.refresh(),v())}catch(i){console.log(i)}x()}c.reset()});u.addEventListener("click",async()=>{console.log("hello")});function L(){n.classList.remove("hidden")}function x(){n.classList.add("hidden")}function v(){u.classList.remove("btn-hidden")}
//# sourceMappingURL=commonHelpers.js.map
