!function(){"use strict";let e=document.querySelector('link[rel="next"]')?.getAttribute("href");function t(e,t){document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(t).forEach((function(t){const n=function(e){const t=new Date(e);console.log("startDate",e,t);const n=new Date;let o=n.getFullYear()-t.getFullYear();return console.log("years",o),(n.getMonth()<t.getMonth()||n.getMonth()===t.getMonth()&&n.getDate()<t.getDate())&&(o-=1),console.log("years",o),o}(e);t.textContent=n}))}))}!function(){const e=document.querySelector(".gh-burger");e?.addEventListener("click",(function(){document.body.classList.toggle("gh-head-open")}))}(),function(){if(!e)return;new IntersectionObserver(((t,n)=>{try{t.forEach((t=>{t.isIntersecting&&e&&async function(e){try{const t=await fetch(e);if(!t.ok)throw new Error("Failed to fetch page");const n=await t.text(),o=(new DOMParser).parseFromString(n,"text/html"),r=o.querySelectorAll(".post"),c=o.querySelector('link[rel="next"]')?.getAttribute("href");return{posts:r,nextLink:c}}catch(e){throw new Error(e)}}(e).then((t=>{let{posts:o,nextLink:r}=t;o.forEach((e=>{document.querySelector(".gh-postfeed").append(e)})),r?(e=r,n.observe(document.querySelector(".post:last-of-type"))):n.disconnect()}))}))}catch(e){console.log(e)}}),{rootMargin:"150px"}).observe(document.querySelector(".post:last-of-type"))}(),t("Dec 2012","#num-work-years"),t("Jul 2019","#num-startup-years")}();
//# sourceMappingURL=index.js.map
