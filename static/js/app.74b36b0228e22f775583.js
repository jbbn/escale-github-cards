webpackJsonp([1,2],{111:function(s,e,t){"use strict";var a=t(2),r=t(126),n=t(121),o=t.n(n);a.a.use(r.a),e.a=new r.a({routes:[{path:"/",name:"Hello",component:o.a}]})},112:function(s,e,t){t(119);var a=t(1)(t(114),t(125),null,null);s.exports=a.exports},114:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},115:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(122),r=t.n(a);e.default={name:"board",data:function(){return{user:"wilfernandesjr",repos:[],_repos:[],language:"Show all languages",languages:[],order_by:{key:"",direction:0}}},mounted:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var s=this;this.$http.get("https://api.github.com/users/"+this.user+"/starred").then(function(e){s.repos=e.body,s._repos=e.body;var t=s._repos.map(function(s){return s.language?s.language:"Without language"});t=t.filter(function(s,e){return s&&t.indexOf(s)===e}),s.languages=["Show all languages"].concat(t)})},filterData:function(s,e){this.repos="Show all languages"===e?this._repos:"language"===s&&"Without language"===e?this._repos.filter(function(s){return!s.language}):this._repos.filter(function(t){return t[s]===e})},orderBy:function(s){s===this.order_by.key?(this.order_by.direction*=-1,this.repos=this.repos.reverse()):(this.order_by.key=s,this.order_by.direction=1,this.repos=this.repos.sort(function(e,t){return e=e[s],t=t[s],isNaN(e)&&isNaN(t)?e[0].toLowerCase()<t[0].toLowerCase()?-1:e[0].toLowerCase()===t[0].toLowerCase()?0:1:isNaN(e)?1:isNaN(t)?-1:e-t}))}},components:{Card:r.a}}},116:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"card",props:["url","name","image","description","language","stargazers-count","open-issues-count","created","pushed"]}},117:function(s,e){},118:function(s,e){},119:function(s,e){},120:function(s,e,t){function a(s){return t(r(s))}function r(s){var e=n[s];if(!(e+1))throw new Error("Cannot find module '"+s+"'.");return e}var n={"./af":3,"./af.js":3,"./ar":9,"./ar-dz":4,"./ar-dz.js":4,"./ar-ly":5,"./ar-ly.js":5,"./ar-ma":6,"./ar-ma.js":6,"./ar-sa":7,"./ar-sa.js":7,"./ar-tn":8,"./ar-tn.js":8,"./ar.js":9,"./az":10,"./az.js":10,"./be":11,"./be.js":11,"./bg":12,"./bg.js":12,"./bn":13,"./bn.js":13,"./bo":14,"./bo.js":14,"./br":15,"./br.js":15,"./bs":16,"./bs.js":16,"./ca":17,"./ca.js":17,"./cs":18,"./cs.js":18,"./cv":19,"./cv.js":19,"./cy":20,"./cy.js":20,"./da":21,"./da.js":21,"./de":23,"./de-at":22,"./de-at.js":22,"./de.js":23,"./dv":24,"./dv.js":24,"./el":25,"./el.js":25,"./en-au":26,"./en-au.js":26,"./en-ca":27,"./en-ca.js":27,"./en-gb":28,"./en-gb.js":28,"./en-ie":29,"./en-ie.js":29,"./en-nz":30,"./en-nz.js":30,"./eo":31,"./eo.js":31,"./es":33,"./es-do":32,"./es-do.js":32,"./es.js":33,"./et":34,"./et.js":34,"./eu":35,"./eu.js":35,"./fa":36,"./fa.js":36,"./fi":37,"./fi.js":37,"./fo":38,"./fo.js":38,"./fr":41,"./fr-ca":39,"./fr-ca.js":39,"./fr-ch":40,"./fr-ch.js":40,"./fr.js":41,"./fy":42,"./fy.js":42,"./gd":43,"./gd.js":43,"./gl":44,"./gl.js":44,"./he":45,"./he.js":45,"./hi":46,"./hi.js":46,"./hr":47,"./hr.js":47,"./hu":48,"./hu.js":48,"./hy-am":49,"./hy-am.js":49,"./id":50,"./id.js":50,"./is":51,"./is.js":51,"./it":52,"./it.js":52,"./ja":53,"./ja.js":53,"./jv":54,"./jv.js":54,"./ka":55,"./ka.js":55,"./kk":56,"./kk.js":56,"./km":57,"./km.js":57,"./ko":58,"./ko.js":58,"./ky":59,"./ky.js":59,"./lb":60,"./lb.js":60,"./lo":61,"./lo.js":61,"./lt":62,"./lt.js":62,"./lv":63,"./lv.js":63,"./me":64,"./me.js":64,"./mi":65,"./mi.js":65,"./mk":66,"./mk.js":66,"./ml":67,"./ml.js":67,"./mr":68,"./mr.js":68,"./ms":70,"./ms-my":69,"./ms-my.js":69,"./ms.js":70,"./my":71,"./my.js":71,"./nb":72,"./nb.js":72,"./ne":73,"./ne.js":73,"./nl":75,"./nl-be":74,"./nl-be.js":74,"./nl.js":75,"./nn":76,"./nn.js":76,"./pa-in":77,"./pa-in.js":77,"./pl":78,"./pl.js":78,"./pt":80,"./pt-br":79,"./pt-br.js":79,"./pt.js":80,"./ro":81,"./ro.js":81,"./ru":82,"./ru.js":82,"./se":83,"./se.js":83,"./si":84,"./si.js":84,"./sk":85,"./sk.js":85,"./sl":86,"./sl.js":86,"./sq":87,"./sq.js":87,"./sr":89,"./sr-cyrl":88,"./sr-cyrl.js":88,"./sr.js":89,"./ss":90,"./ss.js":90,"./sv":91,"./sv.js":91,"./sw":92,"./sw.js":92,"./ta":93,"./ta.js":93,"./te":94,"./te.js":94,"./tet":95,"./tet.js":95,"./th":96,"./th.js":96,"./tl-ph":97,"./tl-ph.js":97,"./tlh":98,"./tlh.js":98,"./tr":99,"./tr.js":99,"./tzl":100,"./tzl.js":100,"./tzm":102,"./tzm-latn":101,"./tzm-latn.js":101,"./tzm.js":102,"./uk":103,"./uk.js":103,"./uz":104,"./uz.js":104,"./vi":105,"./vi.js":105,"./x-pseudo":106,"./x-pseudo.js":106,"./yo":107,"./yo.js":107,"./zh-cn":108,"./zh-cn.js":108,"./zh-hk":109,"./zh-hk.js":109,"./zh-tw":110,"./zh-tw.js":110};a.keys=function(){return Object.keys(n)},a.resolve=r,s.exports=a,a.id=120},121:function(s,e,t){t(117);var a=t(1)(t(115),t(123),"data-v-04b93470",null);s.exports=a.exports},122:function(s,e,t){t(118);var a=t(1)(t(116),t(124),"data-v-5e2f25c4",null);s.exports=a.exports},123:function(s,e){s.exports={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"board"},[t("h1",{on:{click:function(e){s.filterData("language","JavaScript")}}},[s._v("\n      "+s._s(s.user)+"\n    ")]),s._v(" "),t("div",[t("select",{directives:[{name:"model",rawName:"v-model",value:s.language,expression:"language"}],on:{change:[function(e){var t=Array.prototype.filter.call(e.target.options,function(s){return s.selected}).map(function(s){return"_value"in s?s._value:s.value});s.language=e.target.multiple?t:t[0]},function(e){s.filterData("language",s.language)}]}},s._l(s.languages,function(e){return t("option",[s._v(s._s(e))])})),s._v(" "),t("span",[s._v("Order by:")]),s._v(" "),t("span",{staticClass:"github-board__orderby",class:{top:"stargazers_count"===s.order_by.key&&1===s.order_by.direction,bottom:"stargazers_count"===s.order_by.key&&s.order_by.direction===-1}},[t("a",{attrs:{href:"javascript:"},on:{click:function(e){s.orderBy("stargazers_count")}}},[s._v("Stargazers")])]),s._v(" "),t("span",{staticClass:"github-board__orderby",class:{top:"name"===s.order_by.key&&1===s.order_by.direction,bottom:"name"===s.order_by.key&&s.order_by.direction===-1}},[t("a",{attrs:{href:"javascript:"},on:{click:function(e){s.orderBy("name")}}},[s._v("Repository")])]),s._v(" "),t("span",{staticClass:"github-board__orderby",class:{top:"open_issues_count"===s.order_by.key&&1===s.order_by.direction,bottom:"open_issues_count"===s.order_by.key&&s.order_by.direction===-1}},[t("a",{attrs:{href:"javascript:"},on:{click:function(e){s.orderBy("open_issues_count")}}},[s._v("Open issues")])])]),s._v(" "),t("div",{staticClass:"github-board__cards"},s._l(s.repos,function(s){return t("card",{tag:"div",attrs:{url:s.html_url,name:s.name,image:s.owner.avatar_url,description:s.description,language:s.language,"stargazers-count":s.stargazers_count,"open-issues-count":s.open_issues_count,created:s.created_at,pushed:s.pushed_at}})}))])},staticRenderFns:[]}},124:function(s,e){s.exports={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("a",{staticClass:"github-card",attrs:{href:s.url,target:"_blank"}},[t("h3",[s._v(s._s(s.name))]),s._v(" "),t("div",[s.image?t("div",{staticClass:"github-card__image"},[t("img",{attrs:{src:s.image}})]):s._e(),s._v(" "),s.description?t("p",[s._v(s._s(s.description))]):s._e(),s._v(" "),s.language?t("span",{staticClass:"github-card__language"},[t("span",{staticClass:"github-card__language-icon",staticStyle:{color:"#7A0410"}},[s._v("●")]),s._v(" "+s._s(s.language)+"\n    ")]):s._e()]),s._v(" "),t("div",{staticClass:"github-card__metas"},[t("div",{staticClass:"github-card__meta"},[t("span",{staticClass:"card-meta__label"},[s._v("Stargazers")]),s._v(" "+s._s(s.stargazersCount)+"\n    ")]),s._v(" "),t("div",{staticClass:"github-card__meta github-card__openIssuesCount"},[t("span",{staticClass:"card-meta__label"},[s._v("Open issues")]),s._v(" "+s._s(s.openIssuesCount)+"\n    ")]),s._v(" "),t("div",{staticClass:"github-card__meta"},[t("span",{staticClass:"card-meta__label"},[s._v("Created")]),s._v(" "+s._s(s._f("formatDate")(s.created))+"\n    ")]),s._v(" "),t("span",{staticClass:"github-card__meta"},[t("span",{staticClass:"card-meta__label"},[s._v("Pushed")]),s._v(" "+s._s(s._f("formatDate")(s.pushed))+"\n    ")])])])},staticRenderFns:[]}},125:function(s,e){s.exports={render:function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]}},130:function(s,e){},131:function(s,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=t(2),r=t(112),n=t.n(r),o=t(111),i=t(113),u=t.n(i),c=t(0),l=t.n(c);a.a.config.productionTip=!1,a.a.use(u.a),a.a.filter("formatDate",function(s){if(s)return l()(String(s)).format("DD/MM/YYYY hh:mm")}),new a.a({el:"#app",router:o.a,template:"<App/>",components:{App:n.a}})}},[131]);
//# sourceMappingURL=app.74b36b0228e22f775583.js.map