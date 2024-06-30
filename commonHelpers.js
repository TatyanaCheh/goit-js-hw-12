import{a as x,i as n,S as B}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function s(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(t){if(t.ep)return;t.ep=!0;const a=s(t);fetch(t.href,a)}})();const w=x.Axios({baseURL:"https://pixabay.com/"});async function f(r,e,s){try{const i={key:"44652974-093c0b9338f58db6242e87a44",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:s};return(await w.get("api/",{params:i})).data}catch{n.error({title:"Error",message:`${err}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}}const o={form:document.querySelector(".form"),input:document.querySelector(".input"),button:document.querySelector(".button"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMoreBtn:document.querySelector(".load-more-btn")};async function y(r){let e=r.map(s=>`<li class="gallery-item">
        <a class="gallery-link"
        href="${s.largeImageURL}">
        <image class="gallery-image"
        src="${s.webformatURL}"
        alt="${s.tags}"/>
        </a>
        <div class="text-card-container">
        <ul class="text-list">

        <li class="text-item">
        <p class="text-item-name"><strong>Likes:</strong></p>
        <p class="text-item-quantity">${s.likes}</p>
        </li>

        <li class="text-item">
        <p class="text-item-name"><strong>Views:</strong></p>
        <p class="text-item-quantity">${s.views}</p>
        </li>

        <li class="text-item">
        <p class="text-item-name"><strong>Comments:</strong></p>
        <p class="text-item-quantity">${s.comments}</p>
        </li>

        <li class="text-item">
        <p class="text-item-name"><strong>Downloads:</strong></p>
        <p class="text-item-quantity">${s.downloads}</p>
        </li>

        </ul>
        </div>
        </li>`).join("");o.gallery.insertAdjacentElement("beforeend",e)}function h(){o.loader.classList.remove("hidden")}function u(){o.loader.classList.add("hidden")}function b(){o.loader.classList.remove("hidden")}function g(){o.loader.classList.add("hidden")}function q(r,e){r>=e?(g(),e&&n.info({title:"The end!",message:"We're sorry, but you've reached the end of search results."})):b()}function v(r=0,e=0){const i=o.gallery.children[0].getBoundingClientRect().height;window.scrollBy({top:i*2,left:e,behavior:"smooth"})}let c="",l=1,p=15,m=1;const L=new B(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});o.form.addEventListener("submit",async r=>{if(r.preventDefault(),c=r.target.elements.text.value.trim(),l=1,g(),c===""){o.gallery.innerHTML=" ",n.warning({title:"Warning",message:"Please, enter the query",layout:2,displayMode:"once",backgroundColor:"#ef4040",position:"topRight"}),o.form.reset();return}h();try{const e=await f(c,l,p);if(m=Math.ceil(e.totalHits/p),m===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"}),o.form.reset(),u();return}u(),o.form.reset(),y(e.hits),L.refresh(),b()}catch(e){n.error({title:"Error",message:`${e}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});o.loadMoreBtn.addEventListener("click",async()=>{g(),h();try{l++;const r=await f(c,l,p);r.hits.lenght!==0&&(y(r.hits),L.refresh(),u()),q(l,m),v()}catch(r){o.gallery.innerHTML=" ",n.error({title:"Error",message:`${r}`,layout:2,displayMode:"once",backgroundColor:"#ef4040",progressBarColor:"#B51B1B",position:"topRight"})}});
//# sourceMappingURL=commonHelpers.js.map
