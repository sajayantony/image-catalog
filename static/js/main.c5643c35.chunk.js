(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,n){e.exports=n(45)},22:function(e,t,n){},24:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),i=n.n(r),l=(n(22),n(10)),s=n(11),c=n(14),u=n(12),p=n(15),d=(n(24),n(13)),m=n.n(d),f=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={repositories:[],teams:new Map},n.buildRepos=function(e){console.log("BuildRepos");var t=new Map;return console.log("BuildRepos"),e.forEach(function(e){var n=e.split("/")[0],a=t[n];null==a&&(a={name:n,repositories:[]},t[n]=a),a.repositories.push(e)}),console.log(t),t},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="/data/repositories.json";console.log("production"),t="/image-catalog/data/repositories.json",m.a.get(t).then(function(t){var n=t.data.repositories;e.setState({repositories:n,teams:e.buildRepos(n)}),console.log("Calling buildRepos"+n)}).catch(function(e){console.log(e.response)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:"page-header"},o.a.createElement("h1",null,"Microsoft Container Registry")),Object.keys(this.state.teams).map(function(t){return o.a.createElement("div",null,o.a.createElement("div",{class:"panel panel-default"},o.a.createElement("div",{class:"panel-heading"},o.a.createElement("div",{class:"panel-title"},"            ",o.a.createElement("a",{href:"#"+t,id:t,ref:function(e){var t=window.location.hash;if(""!==t){var n=t.replace("#","");e.id===n&&e.scrollIntoView()}}},t))),o.a.createElement("div",{class:"panel-body"},o.a.createElement("ul",null," ",e.state.teams[t].repositories.map(function(e){return o.a.createElement("li",null,o.a.createElement("a",{className:"App-link",href:"https://mcr.microsoft.com/v2/"+e+"/tags/list",target:"_blank",rel:"noopener noreferrer"},e))})))))}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.c5643c35.chunk.js.map