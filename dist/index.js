"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var o=m(function(p,s){
var f=require('@stdlib/assert-is-object/dist'),l=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,c=require('@stdlib/assert-has-own-property/dist'),g=require('@stdlib/assert-is-function/dist'),a=require('@stdlib/error-tools-fmtprodmsg/dist');function w(e,r,i,v){var u,n,t;if(!f(e))throw new TypeError(a('2aZ3L',e));if(!l(r))throw new TypeError(a('2aZ45',r));if(!g(i))throw new TypeError(a('2aZ3N',i));u=0;for(t in e)if(c(e,t)&&(n=i.call(v,e[t],t,e),n&&(u+=1,u===r)))return!0;return!1}s.exports=w
});var q=o();module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
