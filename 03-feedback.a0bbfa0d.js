function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,c=u||s||Function("return this")(),l=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return c.Date.now()};function g(e,t,n){var i,o,r,a,f,u,s=0,c=!1,l=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,s=t,a=e.apply(r,n)}function j(e){return s=e,f=setTimeout(w,t),c?y(e):a}function h(e){var n=e-u;return void 0===u||n>=t||n<0||l&&e-s>=r}function w(){var e=v();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-u);return l?m(n,r-(e-s)):n}(e))}function O(e){return f=void 0,g&&i?y(e):(i=o=void 0,a)}function S(){var e=v(),n=h(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(l)return f=setTimeout(w,t),y(u)}return void 0===f&&(f=setTimeout(w,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(l="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==f&&clearTimeout(f),s=0,i=u=o=f=void 0},S.flush=function(){return void 0===f?a:O(v())},S}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form");let j={};if(y.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,sessionStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),sessionStorage.getItem("feedback-form-state")){const{email:e,message:t}=JSON.parse(sessionStorage.getItem("feedback-form-state"));y.email.value=e,y.message.value=t,j.email=e,j.message=t}y.addEventListener("submit",(function(e){if(e.preventDefault(),console.log(j),""===y.email.value||""===y.message.value)return alert("Будь ласка, заповніть всі поля!");sessionStorage.removeItem("feedback-form-state"),y.reset()}));
//# sourceMappingURL=03-feedback.a0bbfa0d.js.map