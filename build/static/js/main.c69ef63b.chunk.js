(this.webpackJsonpprogram=this.webpackJsonpprogram||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),i=n.n(o),l=(n(12),n(1)),s=n(2),c=n(6),u=n(5);n(13);function h(e,t,n,r){var a,o,i="",l=[];if(a=m(),l.push(a),o=m(),l.push(o),Math.random()>e){var s=m();if(l.push(s),Math.random()<=t){var c=m();if(l.push(c),Math.random()<=n){var u=m();l.push(u)}}}return(i=l.join("").toLowerCase()).length>r&&(i=i.substr(0,r)),"whw,bd,uu,shkh,mv,lj,hh,vj".replace(/ /g,"").split(",").forEach((function(e){i.indexOf(e)>-1&&(i=i.replace(RegExp(e,"gi"),e[0]))})),i[0].toUpperCase()+i.substring(1)}function m(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.4,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.05,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.25,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.15,i="b,ch,d,f,g,h,j,jh,k,l,m,n,p,qu,r,s,sh,t,th,y".replace(/ /g,"").split(","),l="kh,qu,v,w,wh,x,z".replace(/ /g,"").split(","),s="a,e,i,o,u".replace(/ /g,"").split(","),c=[];if(Math.random()>t){var u;do{u=p(a,i,l)}while("x".indexOf(u)>-1);Math.random()<=o&&i.indexOf(u)>-1&&u.length<2&&(u+=f(i)),c.push(u)}if(e=f(s),Math.random()<=r&&(e+=f(s)),c.push(e),Math.random()>n){var h;do{h=p(a,i,l)}while("qu,wh".indexOf(h)>-1);Math.random()<=o&&i.indexOf(h)>-1&&h.length<2&&(h+=f(i)),c.push(h)}return c.join("")}function f(e){return e[Math.floor(Math.random()*e.length)]}function p(e,t,n){var r=t;return Math.random()<=e&&(r=n),r[Math.floor(Math.random()*r.length)]}var d={makeGivenName:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.4,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.15,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.02,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:8;return h(e,t,n,r)},makeSurname:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.04,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:10;return h(e,t,n,r)}};function y(e){for(var t="",n=0;n<e;n++)t+=Math.floor(10*Math.random()).toString();return t}function g(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_",r=e[Math.floor(Math.random()*e.length)].toUpperCase(),a="",o=0;o<t;o++)a+=Math.floor(10*Math.random()).toString();return r+n+a}var v=function(){function e(t){Object(l.a)(this,e),this.key=t,this.firstName=d.makeGivenName(),this.lastName=d.makeSurname(),this.department="",this.phoneNumber="",this.computerName="",this.officeNumber="",this.managerName=""}return Object(s.a)(e,[{key:"fullName",value:function(){return this.firstName+" "+this.lastName}},{key:"lastFirstName",value:function(){return this.lastName+", "+this.firstName}},{key:"initials",value:function(){return this.firstName[0]+" "+this.lastName[0]}},{key:"toHTML",value:function(){return a.a.createElement("div",{key:this.key},a.a.createElement("p",null,this.lastFirstName()),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("span",{style:{fontWeight:200}},"Department:")," ",this.department),a.a.createElement("li",null,a.a.createElement("span",{style:{fontWeight:200}},"Manager:")," ",this.managerName),a.a.createElement("li",null,a.a.createElement("span",{style:{fontWeight:200}},"Phone:")," ",this.phoneNumber),a.a.createElement("li",null,a.a.createElement("span",{style:{fontWeight:200}},"Office Number:")," ",this.officeNumber),a.a.createElement("li",null,a.a.createElement("span",{style:{fontWeight:200}},"Computer:")," ",this.computerName)))}},{key:"toHTML_TableRow",value:function(){return a.a.createElement("tr",{key:this.key},a.a.createElement("td",null,this.lastFirstName()),a.a.createElement("td",null,this.department),a.a.createElement("td",null,this.phoneNumber),a.a.createElement("td",null,this.officeNumber),a.a.createElement("td",null,this.computerName))}},{key:"generateName",value:function(){return this.firstName=d.makeGivenName(),this.surname=d.makeSurname(),!0}},{key:"generateDept",value:function(e){e&&(this.department=e[Math.floor(Math.random()*e.length)])}},{key:"generatePhoneNumber",value:function(e,t,n){this.phoneNumber=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"-";""===e&&(e=Math.floor(1e3*Math.random()).toString());for(;e.length<3;)e="0"+e;e=e.substr(0,3),""===t&&(t=Math.floor(1e3*Math.random()).toString());for(;t.length<3;)t="0"+t;t=t.substr(0,3),""===n&&(n=Math.floor(1e4*Math.random()).toString());for(;n.length<4;)n="0"+n;return n=n.substr(0,4),e+r+t+r+n}(e,t,n,".")}},{key:"generatePhoneExtension",value:function(e){this.phoneNumber=y(e)}},{key:"generateOfficeNumber",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";this.officeNumber=t+y(e)+n}},{key:"generateComputerName",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_";this.computerName=g(e,t,n)}}]),e}(),E=function(e){var t=[];return e.empList.forEach((function(e){t.push(e.toHTML_TableRow())})),a.a.createElement("div",null,a.a.createElement("h1",null,"Employees"),a.a.createElement("table",null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",{style:{padding:"2px 5px"}},a.a.createElement("a",{href:"/sortby/name",style:{cursor:"pointer",color:"#aaaaff"},onClick:e.byNameSorter},"Name")),a.a.createElement("th",{style:{padding:"2px 5px"}},a.a.createElement("a",{href:"/sortby/dept",style:{cursor:"pointer",color:"#aaaaff"},onClick:e.byDeptSorter},"Department")),a.a.createElement("th",{style:{padding:"2px 10px"}},a.a.createElement("a",{href:"/sortby/phone",style:{cursor:"pointer",color:"#aaaaff"},onClick:e.byPhoneSorter},"Phone")),a.a.createElement("th",{style:{padding:"2px 10px"}},a.a.createElement("a",{href:"/sortby/office",style:{cursor:"pointer",color:"#aaaaff"},onClick:e.byOfficeSorter},"Office")),a.a.createElement("th",{style:{padding:"2px 5px"}},a.a.createElement("a",{href:"/sortby/computer",style:{cursor:"pointer",color:"#aaaaff"},onClick:e.byComputerSorter},"Computer")))),a.a.createElement("tbody",null,t)))};function N(){for(var e=["Command","Marine Command","Security","Medical","Engineering & Maintenance"],t=["black","blue","green","cyan","red","purple","orange","lgrey","grey","lblue","lgreen","lcyan","lred","lpurple","yellow","white"],n=[],r=0;r<10;r++){var a=new v(r);a.generateName(),a.generateDept(e),a.generatePhoneExtension(4),a.generateComputerName(t,4,"_"),a.generateOfficeNumber(2,"1","ABCD"[Math.floor(4*Math.random())]),n.push(a)}return n}function b(e,t,n){return n?e.sort((function(e,n){return e[t]>n[t]?1:e[t]===n[t]?0:-1})):e.sort((function(e,n){return e[t]>n[t]?-1:e[t]===n[t]?0:1}))}var C=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={employees:N(),sortBy:""},e.sortByName=function(t){var n;t.preventDefault();var r="NAME ASC"!==e.state.sortBy?"NAME ASC":"NAME DESC";n="NAME ASC"!==e.state.sortBy?e.state.employees.sort((function(e,t){return e.lastFirstName()>t.lastFirstName()?1:e.lastFirstName()===t.lastFirstName()?0:-1})):e.state.employees.sort((function(e,t){return e.lastFirstName()>t.lastFirstName()?-1:e.lastFirstName()===t.lastFirstName()?0:1})),e.setState({employees:n,sortBy:r})},e.sortByDept=function(t){t.preventDefault();var n=b(e.state.employees,"department","DEPT ASC"!==e.state.sortBy),r="DEPT ASC"!==e.state.sortBy?"DEPT ASC":"DEPT DESC";e.setState({employees:n,sortBy:r})},e.sortByPhone=function(t){t.preventDefault();var n=b(e.state.employees,"phoneNumber","PHONE ASC"!==e.state.sortBy),r="PHONE ASC"!==e.state.sortBy?"PHONE ASC":"PHONE DESC";e.setState({employees:n,sortBy:r})},e.sortByOffice=function(t){t.preventDefault();var n=b(e.state.employees,"officeNumber","OFFICE ASC"!==e.state.sortBy),r="OFFICE ASC"!==e.state.sortBy?"OFFICE ASC":"OFFICE DESC";e.setState({employees:n,sortBy:r})},e.sortByComputer=function(t){t.preventDefault();var n=b(e.state.employees,"computerName","COMPUTER ASC"!==e.state.sortBy),r="COMPUTER ASC"!==e.state.sortBy?"COMPUTER ASC":"COMPUTER DESC";e.setState({employees:n,sortBy:r})},e}return Object(s.a)(n,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},E({empList:this.state.employees,byNameSorter:this.sortByName,byComputerSorter:this.sortByComputer,byDeptSorter:this.sortByDept,byOfficeSorter:this.sortByOffice,byPhoneSorter:this.sortByPhone})))}}]),n}(a.a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function M(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):M(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):M(t,e)}))}}()},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.c69ef63b.chunk.js.map