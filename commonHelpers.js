import{S as u,i as m}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(r){const s="https://pixabay.com",i="/api/",o=new URLSearchParams({key:"44363608-aeb5e859d1804b8d255aa00c3",q:`${r}`,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}${i}?${o}`;return fetch(e).then(t=>t.json()).catch(t=>{console.log(t)})}function d({webformatURL:r,largeImageURL:s,tags:i,likes:o,views:e,comments:t,downloads:a}){return` <li class="album-item">
            <a class="album-link" href="${s}">
            <img
              class="album-img"
              src="${r}"
              alt="${i}"
            />
            <ul class="statistics-list">
              <li class="statistics-item text-marg-1">
                <p class="statistics-text">Likes</p>
                <p>${o}</p>
              </li>
              <li class="statistics-item text-marg-2">
                <p class="statistics-text">Views</p>
                <p>${e}</p>
              </li>
              <li class="statistics-item text-marg-3">
                <p class="statistics-text">Comments</p>
                <p>${t}</p>
              </li>
              <li class="statistics-item">
                <p class="statistics-text">Downloads</p>
                <p>${a}</p>
              </li>
            </ul>
            </a>
          </li>`}function f(r){return r.map(d).join(`
`)}const c=document.querySelector(".js-form"),l=document.querySelector(".js-album-list"),n=document.querySelector(".js-loader"),h=new u(".album-list a",{captionsData:"alt",captionDelay:250});c.addEventListener("submit",r=>{r.preventDefault(),l.innerHTML="";const s=r.target.elements.text.value.trim();s!==""&&(g(),p(s).then(i=>{i.hits.length===0?m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3}):(l.innerHTML=f(i.hits),h.refresh())}).catch(i=>{console.log(i)}).finally(()=>{y()})),c.reset()});function g(){n.classList.remove("hidden")}function y(){n.classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
