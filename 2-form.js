import"./assets/modulepreload-polyfill-B5Qt9EMX.js";const a={email:"",message:""},t=document.querySelector(".feedback-form"),n="feedback-form-state",m=localStorage.getItem(n);if(m){const e=JSON.parse(m);a.email=e.email||"",a.message=e.message||"",t.elements.email.value=a.email,t.elements.message.value=a.message}t.addEventListener("input",e=>{a[e.target.name]=e.target.value,localStorage.setItem(n,JSON.stringify(a))});t.addEventListener("submit",e=>{e.preventDefault();const s=t.querySelector(".warning-message");if(e.target.email.value!==""&&e.target.message.value!==""&&(console.log(a),localStorage.removeItem(n),t.reset()),s)s.remove();else if(!s){const l=document.createElement("p");l.textContent="Fill please all fields",l.classList.add("warning-message"),t.appendChild(l)}});
//# sourceMappingURL=2-form.js.map
