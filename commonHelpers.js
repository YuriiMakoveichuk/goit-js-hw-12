import{A as v,S,i as p}from"./assets/vendor-cf73e4e9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();const q=v.create({baseURL:"https://pixabay.com/api/",params:{key:"44363608-aeb5e859d1804b8d255aa00c3",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}});async function h(s,t){try{return(await q.get("",{params:{q:s,page:t}})).data}catch(r){console.log("server error",r)}}function M({webformatURL:s,largeImageURL:t,tags:r,likes:c,views:e,comments:i,downloads:o}){return` <li class="album-item">
            <a class="album-link" href="${t}">
            <img
              class="album-img"
              src="${s}"
              alt="${r}"
            />
            <ul class="statistics-list">
              <li class="statistics-item text-marg-1">
                <p class="statistics-text">Likes</p>
                <p>${c}</p>
              </li>
              <li class="statistics-item text-marg-2">
                <p class="statistics-text">Views</p>
                <p>${e}</p>
              </li>
              <li class="statistics-item text-marg-3">
                <p class="statistics-text">Comments</p>
                <p>${i}</p>
              </li>
              <li class="statistics-item">
                <p class="statistics-text">Downloads</p>
                <p>${o}</p>
              </li>
            </ul>
            </a>
          </li>`}function f(s){return s.map(M).join(`
`)}const m=document.querySelector(".js-form"),u=document.querySelector(".js-album-list"),g=document.querySelector(".js-loader"),d=document.querySelector(".js-form-btn"),y=new S(".album-list a",{captionsData:"alt",captionDelay:250});let l,n,b;m.addEventListener("submit",async s=>{if(s.preventDefault(),u.innerHTML="",l=s.target.elements.text.value.trim(),n=1,a(),l!==""){L();try{a();const t=await h(l,n);b=Math.ceil(t.totalHits/t.hits.length),t.hits.length===0?p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3}):(u.innerHTML=f(t.hits),y.refresh(),w())}catch(t){console.log(t)}x()}else a();m.reset()});d.addEventListener("click",async()=>{L(),n+=1,a();try{const s=await h(l,n);u.insertAdjacentHTML("beforeend",f(s.hits)),y.refresh(),E()}catch(s){console.log(s)}x(),w()});function L(){g.classList.remove("hidden")}function x(){g.classList.add("hidden")}function w(){n<b?P():(a(),p.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:3e3}))}function P(){d.classList.remove("btn-hidden")}function a(){d.classList.add("btn-hidden")}function E(){const t=u.children[0].getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
