!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){},function(e,t){new class{constructor(e){this.boardSize=e**2,this.previousIndexCell=0,this.currentIndexCell=0}drawBoard(){const e=document.getElementById("board");for(let t=0;t<this.boardSize;t+=1){const n=document.createElement("div");n.className="cell",n.id="cell"+t,e.appendChild(n)}this.randomImg()}randomImg(){setInterval(()=>{do{this.currentIndexCell=Math.floor(Math.random()*this.boardSize)}while(this.currentIndexCell===this.previousIndexCell);if(this.previousIndexCell>=0){document.getElementById("cell"+this.previousIndexCell).innerHTML=""}document.getElementById("cell"+this.currentIndexCell).innerHTML='<img src = "./img/goblin.png">',this.previousIndexCell=this.currentIndexCell},1e3)}}(4).drawBoard()},function(e,t,n){"use strict";n.r(t);n(0),n(1),n.p}]);