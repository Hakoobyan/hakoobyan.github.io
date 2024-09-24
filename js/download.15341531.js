$(document).ready(function(){var e=(e=>{var e=new Date(e),t=new Date;let n=t.getFullYear()-e.getFullYear();return(t.getMonth()<e.getMonth()||t.getMonth()===e.getMonth()&&t.getDate()<e.getDate())&&n--,n})("2022-09-09"),t=document.querySelector(".lage");t&&(t.textContent=e),document.getElementById("downloadBtn").addEventListener("click",function(){var e=document.createElement("a");e.href="pdf/Armen Hakobyan.pdf",e.download="Armen Hakobyan.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)}),$("select").niceSelect()});


