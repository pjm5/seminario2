(function(e){function t(t){for(var a,r,l=t[0],i=t[1],c=t[2],d=0,f=[];d<l.length;d++)r=l[d],o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,l=1;l<n.length;l++){var i=n[l];0!==o[i]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},o={app:0},s=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),o=n("ce5b"),s=n.n(o);n("bf40");a["default"].use(s.a,{});var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"app"}},[n("router-view")],1)},l=[],i={data:function(){return{}},props:{source:String},mounted:function(){},created:function(){}},c=i,u=n("2877"),d=Object(u["a"])(c,r,l,!1,null,null,null);d.options.__file="App.vue";var f=d.exports,m=n("8c4f"),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-flex",{attrs:{xs12:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs4:""}},[n("v-combobox",{attrs:{items:e.groups,"item-text":"Name","item-value":"id",change:"changeRoute",label:"Select your group"}})],1),n("v-flex",{attrs:{xs4:""}},[n("v-dialog",{ref:"dialog",attrs:{"return-value":e.date,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(t){e.date=t}},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-text-field",{attrs:{slot:"activator",label:"Select Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.date,callback:function(t){e.date=t},expression:"date"}}),n("v-date-picker",{attrs:{scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.dialog.save(e.date)}}},[e._v("OK")])],1)],1)],1),n("v-flex",{attrs:{xs4:""}},[n("v-btn",{attrs:{round:"",color:"primary",dark:""}},[e._v("Search")])],1)],1)],1),n("v-flex",{attrs:{xs12:""}},[n("gmap-map",{staticStyle:{width:"1000px",height:"500px"},attrs:{center:e.center,zoom:7}},e._l(e.markers,function(t,a){return n("gmap-marker",{key:a,attrs:{position:t.position,clickable:!0,draggable:!0},on:{click:function(n){e.center=t.position}}})}))],1)],1)},v=[],h=n("bc3a"),g=n.n(h),x={data:function(){return{}},getUrl:function(){return"https://seminario2app.herokuapp.com/api/"}},b=x.getUrl()+"groups",I={headers:{Authorization:"bearer "}},_={getAllFilter:function(e,t){var n=JSON.stringify(t);return g.a.get(b+"?filter="+n+"&access_token="+e).then(function(e){return e.data})},getAll:function(){return g.a.get(b).then(function(e){return e.data})},create:function(e,t){return g.a.post(b+"?access_token="+e,t,I).then(function(e){return e.data})},delete:function(e){return g.a.delete(b+"/"+e,I).then(function(e){return e.data})},update:function(e){return g.a.post(b+"/update",e,I).then(function(e){return e.data})},getOneById:function(e){return g.a.get(b+"/"+e,I).then(function(e){return e.data})}},k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("gmap-map",{staticStyle:{width:"1000px",height:"500px"},attrs:{center:e.center,zoom:12}},e._l(e.markers,function(e,t){return n("gmap-marker",{key:t,attrs:{position:e.position}})}))},w=[],y={name:"Google-Map",data:function(){return{center:{lat:-31.4,lng:-64.1833},markers:[],places:[],currentPlace:null}},mounted:function(){this.geolocate()},methods:{setPlace:function(e){this.currentPlace=e},addMarker:function(){if(console.log("agregando marks"),this.currentPlace){console.log("agregando marks");var e={lat:-31.4,lng:-64.1833};this.markers.push({position:[{lat:-31.45949097,lng:-64.18105},{lat:-31.45989488,lng:-64.18105}]}),this.places.push(this.currentPlace),this.center=e,this.currentPlace=null}},geolocate:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){e.center={lat:-31.4,lng:-64.1833}})}}},$=y,U=Object(u["a"])($,k,w,!1,null,null,null);U.options.__file="GoogleMap.vue";var O=U.exports,C={name:"home",data:function(){return{groups:[],date:null,modal:null,selectItem:{},center:{lat:-31.4,lng:-64.1833},markers:[{position:{lat:-31.45949097,lng:-64.18105}},{position:{lat:-31.45989488,lng:-64.18105}},{position:{lat:-31.45929488,lng:-64.18105}},{position:{lat:-31.45909488,lng:-64.18105}},{position:{lat:-31.46029488,lng:-64.18105}},{position:{lat:-31.46049488,lng:-64.18105}}]}},beforeCreate:function(){this.$store.state.IsAuthenticated||(console.log("entro"),this.$router.replace({name:"welcome"}))},computed:{loggedIn:function(){return this.$store.IsAuthenticated}},changeRoute:function(e){console.log(e)},created:function(){var e=this,t={};t.UserId=this.$store.state.user.id,console.log(t),_.getAll(this.$store.state.token,t).then(function(t){e.groups=t}).catch(function(e){console.log("es un error"),console.log(e)})},components:{GoogleMap:O}},S=C,N=Object(u["a"])(S,p,v,!1,null,null,null);N.options.__file="Home.vue";var G=N.exports,M=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[n("h1",[e._v("Sign In")])]),n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-3":""}},[n("form",[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-text-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",required:""},model:{value:e.selectItem.email,callback:function(t){e.$set(e.selectItem,"email",t)},expression:"selectItem.email"}})],1),n("v-flex",[n("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:e.selectItem.password,callback:function(t){e.$set(e.selectItem,"password",t)},expression:"selectItem.password"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{"mt-5":""}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.login()}}},[e._v("Sign In")]),n("v-btn",{attrs:{color:"default"},on:{click:function(t){e.cancel()}}},[e._v("Cancel")])],1)],1)],1)],1)])],1),n("Dialog")],1)},j=[],P=x.getUrl()+"Users",A={getAll:function(){return g.a.get(P).then(function(e){return e.data})},create:function(e){return g.a.post(P,e).then(function(e){return e.data})},delete:function(e){return g.a.delete(P+"/"+e).then(function(e){return e.data})},update:function(e){return g.a.post(P+"/update",e).then(function(e){return e.data})},login:function(e){return g.a.post(P+"/login",e).then(function(e){return e.data})},logout:function(e){return g.a.post(P+"/logout?access_token="+e).then(function(e){return e.data})},getById:function(e,t){return g.a.get(P+"/"+t+"?access_token="+e).then(function(e){return e.data})}},D=x.getUrl()+"UserRoles",E={getAll:function(){return g.a.get(D).then(function(e){return e.data})},create:function(e){return g.a.post(D,e).then(function(e){return e.data})},delete:function(e){return g.a.delete(D+"/"+e).then(function(e){return e.data})},update:function(e){return g.a.post(D+"/update",e).then(function(e){return e.data})},login:function(e){return g.a.post(D+"/login",e).then(function(e){return e.data})},logout:function(e){return g.a.post(D+"/logout?access_token="+e).then(function(e){return e.data})},getByUserId:function(e){var t=JSON.stringify(e);return g.a.get(D+"?filter="+t).then(function(e){return e.data})}},T={data:function(){return{selectItem:{}}},components:{},mounted:function(){},methods:{login:function(e){var t=this;A.login(this.selectItem).then(function(e){var n={};n.userId=e.userId,E.getByUserId(n).then(function(n){for(var a=!1,o=0;o<n.length;o++)n[o].IdUser===e.userId&&1===n[o].RoleType&&(a=!0,console.log(e),localStorage.setItem("accToken",e.id),t.$store.state.token=e.id,t.$store.state.IsAuthenticated=!0,t.$store.state.user.id=e.userId,t.$router.push({path:"/home"}));!1===a&&alert("usuario no valido")})}).catch(function(e){console.log("es un error"),console.log(e),alert("usuario no valido")})},cancel:function(e){this.$router.push({path:"welcome"})}}},B=T,z=Object(u["a"])(B,M,j,!1,null,null,null);z.options.__file="Login.vue";var q=z.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[n("h1",[e._v("Sign Up")])]),n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-3":""}},[n("form",[n("v-layout",{attrs:{column:""}},[n("v-flex",[n("v-text-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",required:""},model:{value:e.selectItem.email,callback:function(t){e.$set(e.selectItem,"email",t)},expression:"selectItem.email"}})],1),n("v-flex",[n("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:e.selectItem.password,callback:function(t){e.$set(e.selectItem,"password",t)},expression:"selectItem.password"}})],1),n("v-flex",[n("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",required:""},model:{value:e.selectItem.confirmPassword,callback:function(t){e.$set(e.selectItem,"confirmPassword",t)},expression:"selectItem.confirmPassword"}})],1),n("v-flex",{staticClass:"text-xs-center",attrs:{"mt-5":""}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.register()}}},[e._v("Sign Up")]),n("v-btn",{attrs:{color:"default"},on:{click:function(t){e.cancel()}}},[e._v("Cancel")])],1)],1)],1)])],1)],1)},L=[],F={data:function(){return{selectItem:{}}},mounted:function(){},methods:{register:function(e){var t=this;console.log("registrar-> "+this.selectItem.password),A.create(this.selectItem).then(function(e){console.log("usuario registrado");var n={};n.IdUser=e.id,n.RoleType=1,E.create(n).then(function(){console.log("rol creado")}),t.$router.push({path:"login"})}).catch(function(e){console.log("es un error"),console.log(e)})},cancel:function(e){this.$router.push({path:"welcome"})}}},Y=F,H=Object(u["a"])(Y,R,L,!1,null,null,null);H.options.__file="Register.vue";var J=H.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-parallax",{attrs:{src:"https://seminario2app.herokuapp.com/inicio.jpg",height:"1000"}},[n("div",[n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[n("h1",[e._v("Family Tracker")])]),n("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-3":""}},[n("blockquote",{staticClass:"blockquote text-xs-center"},[e._v("\n                        Family Tracker is a GPS tracking application that allows you to track the location of Android and Apple cell phones and tablets and send free text messages between them.\n\n                        It is one of the first cross platform applications, which takes a full advantage of the capabilities of the two most popular mobile operating systems to date.\n                    ")])]),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":"","mt-5":""}},[n("v-btn",{attrs:{color:"primary",to:"/register"}},[e._v("Sign Up")]),n("v-btn",{attrs:{to:"/login"}},[e._v("Sign In")])],1)],1)],1)],1)])},V=[],Q={data:function(){return{}},mounted:function(){}},W=Q,X=Object(u["a"])(W,K,V,!1,null,null,null);X.options.__file="Welcome.vue";var Z=X.exports,ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-flex",{attrs:{xs12:""}},[n("label",[e._v("Info Groups")])]),n("div",[n("v-flex",{attrs:{xs12:""}},[n("div",[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",[e._v("Groups")]),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[e._v("New Group")]),n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.selectItem.Name,callback:function(t){e.$set(e.selectItem,"Name",t)},expression:"selectItem.Name"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Description"},model:{value:e.selectItem.Description,callback:function(t){e.$set(e.selectItem,"Description",t)},expression:"selectItem.Description"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.close(t)}}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.save(t)}}},[e._v("Save")])],1)],1)],1)],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.groups,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.Name))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.Description))]),n("td",{staticClass:"justify-center layout px-0"},[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(n){e.editItem(t.item)}}},[e._v("\n                                edit\n                            ")]),n("v-icon",{attrs:{small:""},on:{click:function(n){e.deleteItem(t.item)}}},[e._v("\n                                delete\n                            ")])],1)]}}])})],1)])],1)],1)},te=[],ne={data:function(){return{dialog:!1,selectItem:{name:"",description:""},groups:[],headers:[{text:"Name",value:"name"},{text:"Description",value:"description",sortable:!1}],editedIndex:-1}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(e){e||this.close()}},mounted:function(){this.initialize(),this.$store.state.IsAuthenticated||(console.log("group-welcome- before"),this.$router.push({path:"welcome"}))},methods:{initialize:function(){var e=this,t={};t.UserId=this.$store.state.user.id,console.log(t),_.getAll(this.$store.state.token,t).then(function(t){e.groups=t}).catch(function(e){console.log("es un error"),console.log(e)})},editItem:function(e){this.editedIndex=this.groups.indexOf(e),this.selectItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this,n=this.groups.indexOf(e);_.delete(e.id).then(function(){console.log("elemento borrado"),t.groups.splice(n,1)}).catch(function(e){console.log("es un error"),console.log(e)})},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.selectItem=Object.assign({},e.selectItem),e.editedIndex=-1},300)},save:function(){var e=this;console.log(this.$store.state.token),this.editedIndex>-1?Object.assign(this.groups[this.editedIndex],this.selectItem):(this.selectItem.UserId=this.$store.state.user.id,_.create(this.$store.state.token,this.selectItem).then(function(){e.groups.push(e.selectItem)}).catch(function(e){console.log(e)})),this.close()}}},ae=ne,oe=Object(u["a"])(ae,ee,te,!1,null,null,null);oe.options.__file="Groups.vue";var se=oe.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-flex",{attrs:{xs12:""}},[n("label",[e._v("Info Groups Members")])]),n("div",[n("v-flex",{attrs:{xs12:""}},[n("div",[n("v-toolbar",{attrs:{flat:"",color:"white"}},[n("v-toolbar-title",[e._v("Members")]),n("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),n("v-spacer"),n("v-btn",{staticClass:"mb-2",attrs:{color:"primary",dark:""},nativeOn:{click:function(t){return e.OpenNewMemberModal(t)}}},[e._v("New Member")]),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Name"},model:{value:e.selectItem.Name,callback:function(t){e.$set(e.selectItem,"Name",t)},expression:"selectItem.Name"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Last Name"},model:{value:e.selectItem.LastName,callback:function(t){e.$set(e.selectItem,"LastName",t)},expression:"selectItem.LastName"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:"Email"},model:{value:e.selectItem.Email,callback:function(t){e.$set(e.selectItem,"Email",t)},expression:"selectItem.Email"}})],1),n("v-flex",{attrs:{xs6:""}},[n("v-dialog",{ref:"dialog",attrs:{"return-value":e.selectItem.BirdDay,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(t){e.$set(e.selectItem,"BirdDay",t)}}},[n("v-text-field",{attrs:{slot:"activator",label:"Select Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:e.selectItem.BirdDay,callback:function(t){e.$set(e.selectItem,"BirdDay",t)},expression:"selectItem.BirdDay"}}),n("v-date-picker",{attrs:{scrollable:""},model:{value:e.selectItem.BirdDay,callback:function(t){e.$set(e.selectItem,"BirdDay",t)},expression:"selectItem.BirdDay"}},[n("v-spacer"),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(t){e.$refs.dialog.save(e.selectItem.BirdDay)}}},[e._v("OK")])],1)],1)],1),n("v-flex",{attrs:{xs6:""}},[n("v-select",{attrs:{items:e.groups,"item-text":"Name","item-value":"id",label:"Select Group"},model:{value:e.selectItem.GroupId,callback:function(t){e.$set(e.selectItem,"GroupId",t)},expression:"selectItem.GroupId"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.close(t)}}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.save(t)}}},[e._v("Save")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialogUser,callback:function(t){e.dialogUser=t},expression:"dialogUser"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("New User Mobile")])]),n("v-card-text",[n("v-container",{attrs:{"grid-list-md":""}},[n("v-layout",{attrs:{wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{required:"",label:"User name"},model:{value:e.selectItemUser.username,callback:function(t){e.$set(e.selectItemUser,"username",t)},expression:"selectItemUser.username"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{type:"password",required:"",label:"password"},model:{value:e.selectItemUser.password,callback:function(t){e.$set(e.selectItemUser,"password",t)},expression:"selectItemUser.password"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{type:"password",required:"",label:"repeat password"},model:{value:e.selectItemUser.confirmPassword,callback:function(t){e.$set(e.selectItemUser,"confirmPassword",t)},expression:"selectItemUser.confirmPassword"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.closeNewUser(t)}}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(t){return e.saveUser(t)}}},[e._v("Save")])],1)],1)],1)],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.membersGroup,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[n("td",[e._v(e._s(t.item.Name))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.LastName))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(e._f("moment")(t.item.BirdDay,"dddd, MMMM Do YYYY")))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.GroupId))]),n("td",{staticClass:"text-xs-right"},[e._v(e._s(t.item.Email))]),n("td",{staticClass:"justify-center layout px-0"},[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(n){e.editItem(t.item)}}},[e._v("edit")]),n("v-icon",{attrs:{small:""},on:{click:function(n){e.deleteItem(t.item)}}},[e._v("delete")])],1)]}}])},[n("template",{slot:"no-data"},[n("v-btn",{attrs:{color:"primary"},on:{click:e.initialize}},[e._v("Reset")])],1)],2)],1)])],1)],1)},le=[],ie=x.getUrl()+"group_members",ce={getAll:function(){return g.a.get(ie).then(function(e){return e.data})},create:function(e,t){return g.a.post(ie+"?access_token="+e,t).then(function(e){return e.data})},delete:function(e){return g.a.delete(ie+"/"+e).then(function(e){return e.data})},update:function(e,t,n){return g.a.patch(ie+"/"+e+"?access_token="+t,n).then(function(e){return e.data})}},ue={data:function(){return{date:null,menu:!1,modal:!1,menu2:!1,dialog:!1,dialogUser:!1,selectItem:{},selectItemUser:{},headers:[{text:"Name",value:"name"},{text:"Last Name",value:"lastName"},{text:"BirdDay",value:"birdDay"},{text:"GroupId",value:"groupId"},{text:"Email",value:"email"}],membersGroup:[],groups:[],editedIndex:-1}},computed:{formTitle:function(){return-1===this.editedIndex?"New Member":"Edit Member"}},watch:{dialog:function(e){e||this.close()}},created:function(){this.initialize(),this.$store.state.IsAuthenticated||(console.log("group-welcome- before"),this.$router.push({path:"welcome"}))},methods:{initialize:function(){var e=this;ce.getAll().then(function(t){e.membersGroup=t}).catch(function(e){console.log("es un error"),console.log(e)}),_.getAll().then(function(t){e.groups=t}).catch(function(e){console.log("es un error"),console.log(e)})},OpenNewMemberModal:function(){this.dialog=!0,this.selectItem={}},editItem:function(e){this.editedIndex=this.membersGroup.indexOf(e),this.selectItem=Object.assign({},e),this.dialog=!0},deleteItem:function(e){var t=this,n=this.membersGroup.indexOf(e);this.membersGroup.splice(n,1),ce.delete(e.id).then(function(){console.log("elemento borrado"),t.membersGroup.splice(n,1)}).catch(function(e){console.log("es un error"),console.log(e)})},close:function(){var e=this;this.dialog=!1,setTimeout(function(){e.selectItem=Object.assign({},e.selectItem),e.editedIndex=-1},300)},closeNewUser:function(){var e=this;this.dialogUser=!1,setTimeout(function(){e.selectItemUser=Object.assign({},e.selectItemUser),e.editedIndex=-1},300)},saveUser:function(){var e=this;this.selectItemUser.email=this.selectItem.Email,A.create(this.selectItemUser).then(function(t){console.log("user mobile creado"),e.selectItem.UserId=t.id,ce.create(e.$store.state.token,e.selectItem).then(function(n){console.log("groupMember creado"),e.selectItem.UserId=t.id,ce.update(n.id,e.$store.state.token,e.selectItem).then(function(){console.log("group member actualizado")})}).catch(function(e){console.log("es un error"),console.log(e)});var n={};n.IdUser=t.id,n.RoleType=2,E.create(n).then(function(){console.log("rol creado")}),e.$Progress.finish(),e.dialogUser=!1}).catch(function(e){console.log("es un error"),console.log(e)}),this.close()},save:function(){this.editedIndex>-1?Object.assign(this.membersGroup[this.editedIndex],this.selectItem):(this.$Progress.start(),this.membersGroup.push(this.selectItem)),this.close(),this.dialogUser=!0}}},de=ue,fe=Object(u["a"])(de,re,le,!1,null,null,null);fe.options.__file="MembersGroup.vue";var me=fe.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Menu"),n("v-content",[n("v-container",{staticClass:"grey lighten-4",attrs:{fluid:""}},[n("router-view")],1)],1)],1)},ve=[],he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.loggedIn?n("v-navigation-drawer",{staticClass:"grey lighten-4",attrs:{fixed:"",clipped:"",app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",{staticClass:"grey lighten-4",attrs:{dense:""}},[e._l(e.items,function(t,a){return[t.heading?n("v-layout",{key:a,attrs:{row:"","align-center":""}},[n("v-flex",{attrs:{xs6:""}},[t.heading?n("v-subheader",[e._v("\n                            "+e._s(t.heading)+"\n                        ")]):e._e()],1)],1):t.divider?n("v-divider",{key:a,staticClass:"my-3",attrs:{dark:""}}):n("v-list-tile",{key:a,attrs:{href:"#/"+t.value}},[n("v-list-tile-action",[n("v-icon",[e._v(e._s(t.icon))])],1),n("v-list-tile-content",[n("v-list-tile-title",{staticClass:"grey--text"},[e._v("\n                            "+e._s(t.text)+"\n                        ")])],1)],1)]})],2)],1):e._e(),n("v-toolbar",{attrs:{color:"grey",app:"",absolute:"","clipped-left":""}},[e.loggedIn?n("v-toolbar-side-icon",{nativeOn:{click:function(t){e.drawer=!e.drawer}}}):e._e(),n("span",{staticClass:"title ml-3 mr-5"},[e._v("Family Tracking")]),n("v-spacer"),e.loggedIn?n("v-btn",{attrs:{icon:"",large:"",to:"/welcome"}},[n("v-avatar",{attrs:{size:"32px",tile:""}},[n("v-icon",{on:{click:function(t){e.logout()}}},[e._v("exit_to_app")])],1)],1):e._e(),e.loggedIn?e._e():n("v-btn",{attrs:{icon:"",large:"",to:"/"}},[n("v-avatar",{attrs:{size:"32px",tile:""}},[n("v-icon",[e._v("home")])],1)],1)],1)],1)},ge=[],xe={name:"Menu",data:function(){return{drawer:null,user:"",items:[{heading:"MENU"},{icon:"group",text:"Groups",value:"groups"},{icon:"supervised_user_circle",text:"Members Group",value:"membersGroup"},{icon:"map",text:"Home",value:"home"}]}},methods:{logout:function(e){var t=this;A.logout(this.$store.state.token).then(function(e){console.log(e),t.$store.state.IsAuthenticated=!1,localStorage.removeItem("accToken"),t.$router.push({path:"/welcome"})}).catch(function(e){console.log("es un error"),console.log(e)})}},computed:{loggedIn:function(){return this.$store.state.IsAuthenticated}},mounted:function(){var e=this;A.getById(this.$store.state.token,this.$store.state.user.id).then(function(t){console.log(t),e.user=t.username})}},be=xe,Ie=Object(u["a"])(be,he,ge,!1,null,null,null);Ie.options.__file="Menu.vue";var _e=Ie.exports,ke={name:"Private",data:function(){return{}},props:{source:String},mounted:function(){},created:function(){},components:{Menu:_e}},we=ke,ye=Object(u["a"])(we,pe,ve,!1,null,null,null);ye.options.__file="private.vue";var $e=ye.exports,Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-content",[n("router-view")],1)],1)},Oe=[],Ce={name:"Public",data:function(){return{}},props:{source:String},mounted:function(){},created:function(){}},Se=Ce,Ne=Object(u["a"])(Se,Ue,Oe,!1,null,null,null);Ne.options.__file="public.vue";var Ge=Ne.exports;a["default"].use(m["a"]);var Me=new m["a"]({routes:[{path:"/",component:Ge,children:[{path:"/login",component:q},{path:"/register",component:J},{path:"/welcome",component:Z},{path:"/",component:Z}]},{path:"/",component:$e,children:[{path:"/groups",component:se},{path:"/home",component:G},{path:"/membersGroup",component:me}]}]}),je=Me,Pe=n("2f62");a["default"].use(Pe["a"]);var Ae=new Pe["a"].Store({state:{IsAuthenticated:localStorage.getItem("accToken")||!1,token:null,user:{userName:null,id:null}},mutations:{},actions:{}}),De=n("755e"),Ee=n("26b9"),Te=n.n(Ee),Be=n("ead5"),ze=n.n(Be),qe=n("2ead"),Re=n.n(qe);a["default"].config.productionTip=!1,a["default"].use(ze.a),a["default"].use(Re.a),a["default"].use(Te.a,{color:"rgb(143, 255, 199)",failedColor:"red",height:"2px"}),a["default"].use(De,{load:{key:"AIzaSyDQnGYwqSCRHopYLnhAfoFFSADzSnfNXHE"}});var Le=new a["default"]({store:Ae,router:je,render:function(e){return e(f)}}).$mount("#app");console.log(Le)}});
//# sourceMappingURL=app.4374b72e.js.map