/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[16],{358:function(ha,ca,h){h.r(ca);var ba=h(3),aa=h(201);ha=h(349);var fa=h(75);h=h(303);var da={},z=function(h){function f(e,f){var r=h.call(this,e,f)||this;r.url=e;r.range=f;r.status=aa.a.NOT_STARTED;return r}Object(ba.c)(f,h);f.prototype.start=function(e){var f=this;"undefined"===typeof da[this.range.start]&&(da[this.range.start]={Er:function(h){var r=atob(h),n,x=r.length;h=new Uint8Array(x);for(n=0;n<x;++n)h[n]=r.charCodeAt(n);
r=h.length;n="";for(var y=0;y<r;)x=h.subarray(y,y+1024),y+=1024,n+=String.fromCharCode.apply(null,x);f.Er(n,e)},nN:function(){f.status=aa.a.ERROR;e({code:f.status})}},window.external.Nea(this.url),this.status=aa.a.STARTED);f.$y()};return f}(ha.ByteRangeRequest);ha=function(h){function f(e,f,r,w){e=h.call(this,e,r,w)||this;e.$u=z;return e}Object(ba.c)(f,h);f.prototype.bt=function(e,f){return e+"?"+f.start+"&"+(f.stop?f.stop:"")};return f}(fa.a);Object(h.a)(ha);Object(h.b)(ha);ca["default"]=ha}}]);}).call(this || window)
