const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");console.log(t,e),t.addEventListener("click",(function(){t.setAttribute("disabled","disabled"),o=setInterval((function(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(o)}));let o=0;
//# sourceMappingURL=01-color-switcher.4f032835.js.map