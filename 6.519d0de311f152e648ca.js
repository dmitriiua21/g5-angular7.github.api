(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{uiXR:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=u("f4AX"),e=function(){function l(l,n){this.userService=l,this.router=n}return l.prototype.ngOnInit=function(){this.users$=this.userService.users$},l.prototype.showDetail=function(l){this.userService.selectUser(l),this.router.navigateByUrl("/detail")},l}(),o=function(){return function(){}}(),c=u("pMnS"),r=u("Ip0R"),b=u("ZYCi"),a=t.nb({encapsulation:0,styles:[["[_nghost-%COMP%]   .img-avatar[_ngcontent-%COMP%]{max-height:100px;max-width:100px}[_nghost-%COMP%]   .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:unset}"]],data:{}});function p(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,10,"tr",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,1,"div",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.showDetail(l.context.$implicit)&&t),t},null,null)),(l()(),t.pb(3,0,null,null,0,"img",[["class","img-thumbnail img-avatar"]],[[8,"src",4]],null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Db(5,null,["",""])),(l()(),t.pb(6,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Db(7,null,["",""])),(l()(),t.pb(8,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,1,"a",[["target","_blank"]],[[8,"href",4]],null,null,null,null)),(l()(),t.Db(10,null,["",""]))],null,function(l,n){l(n,3,0,n.context.$implicit.avatar_url),l(n,5,0,n.context.$implicit.login),l(n,7,0,n.context.$implicit.type),l(n,9,0,n.context.$implicit.html_url),l(n,10,0,n.context.$implicit.html_url)})}function s(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,13,"table",[["class","table"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"thead",[],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,8,"tr",[],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Avatar"])),(l()(),t.pb(5,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Login"])),(l()(),t.pb(7,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Type"])),(l()(),t.pb(9,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),t.Db(-1,null,["Link"])),(l()(),t.pb(11,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,1,null,p)),t.ob(13,278528,null,0,r.i,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,13,0,n.context.ngIf)},null)}function f(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,5,"div",[["class","container my-sm-3"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,3,"div",[["class","table-responsive-sm col-12"]],null,null,null,null,null)),(l()(),t.gb(16777216,null,null,2,null,s)),t.ob(4,16384,null,0,r.j,[t.O,t.L],{ngIf:[0,"ngIf"]},null),t.yb(131072,r.b,[t.h])],function(l,n){var u=n.component;l(n,4,0,t.Eb(n,4,0,t.xb(n,5).transform(u.users$)))},null)}function h(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-table",[],null,null,null,f,a)),t.ob(1,114688,null,0,e,[i.a,b.k],null,null)],function(l,n){l(n,1,0)},null)}var g=t.lb("app-table",e,h,{},{},[]);u.d(n,"TableModuleNgFactory",function(){return m});var m=t.mb(o,[],function(l){return t.vb([t.wb(512,t.j,t.bb,[[8,[c.a,g]],[3,t.j],t.x]),t.wb(4608,r.l,r.k,[t.u,[2,r.r]]),t.wb(1073742336,r.c,r.c,[]),t.wb(1073742336,b.n,b.n,[[2,b.t],[2,b.k]]),t.wb(1073742336,o,o,[]),t.wb(1024,b.i,function(){return[[{path:"",component:e}]]},[])])})}}]);