(function(t){function e(e){for(var n,r,l=e[0],i=e[1],c=e[2],d=0,f=[];d<l.length;d++)r=l[d],o[r]&&f.push(o[r][0]),o[r]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,l=1;l<a.length;l++){var i=a[l];0!==o[i]&&(n=!1)}n&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},o={app:0},s=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("744f"),a("6c7b"),a("7514"),a("20d6"),a("1c4c"),a("6762"),a("cadf"),a("e804"),a("55dd"),a("d04f"),a("c8ce"),a("217b"),a("7f7f"),a("f400"),a("7f25"),a("536b"),a("d9ab"),a("f9ab"),a("32d7"),a("25c9"),a("9f3c"),a("042e"),a("c7c6"),a("f4ff"),a("049f"),a("7872"),a("a69f"),a("0b21"),a("6c1a"),a("c7c62"),a("84b4"),a("c5f6"),a("2e37"),a("fca0"),a("7cdf"),a("ee1d"),a("b1b1"),a("87f3"),a("9278"),a("5df2"),a("04ff"),a("f751"),a("4504"),a("fee7"),a("ffc1"),a("0d6d"),a("9986"),a("8e6e"),a("25db"),a("e4f7"),a("b9a1"),a("64d5"),a("9aea"),a("db97"),a("66c8"),a("57f0"),a("165b"),a("456d"),a("cf6a"),a("fd24"),a("8615"),a("551c"),a("097d"),a("df1b"),a("2397"),a("88ca"),a("ba16"),a("d185"),a("ebde"),a("2d34"),a("f6b3"),a("2251"),a("c698"),a("a19f"),a("9253"),a("9275"),a("3b2b"),a("3846"),a("4917"),a("a481"),a("28a5"),a("386d"),a("6b54"),a("4f7f"),a("8a81"),a("ac4d"),a("8449"),a("9c86"),a("fa83"),a("48c0"),a("a032"),a("aef6"),a("d263"),a("6c37"),a("9ec8"),a("5695"),a("2fdb"),a("d0b0"),a("b54a"),a("f576"),a("ed50"),a("788d"),a("14b9"),a("f386"),a("f559"),a("1448"),a("673e"),a("242a"),a("c66f"),a("b05c"),a("34ef"),a("6aa2"),a("15ac"),a("af56"),a("b6e4"),a("9c29"),a("63d9"),a("4dda"),a("10ad"),a("c02b"),a("4795"),a("130f"),a("ac6a"),a("96cf");var n=a("2b0e"),o=a("ce5b"),s=a.n(o);a("bf40");n["default"].use(s.a,{});var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("Menu"),a("v-content",[a("v-container",{staticClass:"grey lighten-4",attrs:{fluid:""}},[a("router-view")],1)],1),a("vue-progress-bar")],1)},l=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.loggedIn?a("v-navigation-drawer",{staticClass:"grey lighten-4",attrs:{fixed:"",clipped:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list",{staticClass:"grey lighten-4",attrs:{dense:""}},[t._l(t.items,function(e,n){return[e.heading?a("v-layout",{key:n,attrs:{row:"","align-center":""}},[a("v-flex",{attrs:{xs6:""}},[e.heading?a("v-subheader",[t._v("\n                            "+t._s(e.heading)+"\n                        ")]):t._e()],1)],1):e.divider?a("v-divider",{key:n,staticClass:"my-3",attrs:{dark:""}}):a("v-list-tile",{key:n,attrs:{href:"#/"+("home"==e.value?"":e.value)}},[a("v-list-tile-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"grey--text"},[t._v("\n                            "+t._s(e.text)+"\n                        ")])],1)],1)]})],2)],1):t._e(),a("v-toolbar",{attrs:{color:"grey",app:"",absolute:"","clipped-left":""}},[t.loggedIn?a("v-toolbar-side-icon",{nativeOn:{click:function(e){t.drawer=!t.drawer}}}):t._e(),a("span",{staticClass:"title ml-3 mr-5"},[t._v("Family Tracking")]),a("v-spacer"),t.loggedIn?a("div",[a("span",{staticClass:"title ml-3 mr-5"},[t._v("Hi  "+t._s(t.user)+"!")])]):t._e(),t.loggedIn?a("v-btn",{attrs:{icon:"",large:"",to:"/welcome"}},[a("v-avatar",{attrs:{size:"32px",tile:""}},[a("v-icon",{on:{click:function(e){t.logout()}}},[t._v("exit_to_app")])],1)],1):t._e(),t.loggedIn?t._e():a("v-btn",{attrs:{icon:"",large:"",to:"/"}},[a("v-avatar",{attrs:{size:"32px",tile:""}},[a("v-icon",[t._v("home")])],1)],1)],1)],1)},c=[],u=a("bc3a"),d=a.n(u),f={data:function(){return{}},getUrl:function(){return"https://seminario2app.herokuapp.com/api/"}},m=f.getUrl()+"Users",p={getAll:function(){return d.a.get(m).then(function(t){return t.data})},create:function(t){return d.a.post(m,t).then(function(t){return t.data})},delete:function(t){return d.a.delete(m+"/"+t).then(function(t){return t.data})},update:function(t){return d.a.post(m+"/update",t).then(function(t){return t.data})},login:function(t){return d.a.post(m+"/login",t).then(function(t){return t.data})},logout:function(t){return d.a.post(m+"/logout?access_token="+t).then(function(t){return t.data})},getById:function(t,e){return d.a.get(m+"/"+e+"?access_token="+t).then(function(t){return t.data})}},v={name:"Menu",data:function(){return{drawer:null,user:"null",items:[{heading:"MENU"},{icon:"group",text:"Groups",value:"groups"},{icon:"supervised_user_circle",text:"Members Group",value:"membersGroup"},{icon:"map",text:"Home",value:"home"}]}},methods:{logout:function(t){var e=this;p.logout(this.$store.state.token).then(function(t){console.log(t),e.$store.state.IsAuthenticated=!1,localStorage.removeItem("accToken"),e.$router.replace({name:"welcome"})}).catch(function(t){console.log("es un error"),console.log(t)})}},computed:{loggedIn:function(){var t=this;return this.$store.state.IsAuthenticated&&p.getById(this.$store.state.token,this.$store.state.user.id).then(function(e){console.log(e),t.user=e.username}),this.$store.state.IsAuthenticated}},mounted:function(){var t=this;this.$store.state.IsAuthenticated&&p.getById(this.$store.state.token,this.$store.state.user.id).then(function(e){console.log(e),t.user=e.username})}},h=v,g=a("2877"),x=Object(g["a"])(h,i,c,!1,null,null,null);x.options.__file="Menu.vue";var b=x.exports,I={data:function(){return{}},props:{source:String},mounted:function(){},created:function(){},components:{Menu:b}},_=I,k=Object(g["a"])(_,r,l,!1,null,null,null);k.options.__file="App.vue";var y=k.exports,w=a("8c4f"),$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("v-flex",{attrs:{xs12:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs4:""}},[a("v-combobox",{attrs:{items:t.groups,"item-text":"Name","item-value":"id",change:"changeRoute",label:"Select your group"}})],1),a("v-flex",{attrs:{xs4:""}},[a("v-dialog",{ref:"dialog",attrs:{"return-value":t.date,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(e){t.date=e}},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[a("v-text-field",{attrs:{slot:"activator",label:"Select Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.date,callback:function(e){t.date=e},expression:"date"}}),a("v-date-picker",{attrs:{scrollable:""},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}},[a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.dialog.save(t.date)}}},[t._v("OK")])],1)],1)],1),a("v-flex",{attrs:{xs4:""}},[a("v-btn",{attrs:{round:"",color:"primary",dark:""}},[t._v("Search")])],1)],1)],1),a("v-flex",{attrs:{xs12:""}},[a("gmap-map",{staticStyle:{width:"1000px",height:"500px"},attrs:{center:t.center,zoom:7}},t._l(t.markers,function(e,n){return a("gmap-marker",{key:n,attrs:{position:e.position,clickable:!0,draggable:!0},on:{click:function(a){t.center=e.position}}})}))],1)],1)},C=[],O=f.getUrl()+"groups",S={headers:{Authorization:"bearer "}},G={getAll:function(){return d.a.get(O,S).then(function(t){return t.data})},create:function(t,e){return d.a.post(O+"?access_token="+t,e,S).then(function(t){return t.data})},delete:function(t){return d.a.delete(O+"/"+t,S).then(function(t){return t.data})},update:function(t){return d.a.post(O+"/update",t,S).then(function(t){return t.data})},getOneById:function(t){return d.a.get(O+"/"+t,S).then(function(t){return t.data})}},N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("gmap-map",{staticStyle:{width:"1000px",height:"500px"},attrs:{center:t.center,zoom:12}},t._l(t.markers,function(t,e){return a("gmap-marker",{key:e,attrs:{position:t.position}})}))},j=[],A={name:"Google-Map",data:function(){return{center:{lat:-31.4,lng:-64.1833},markers:[],places:[],currentPlace:null}},mounted:function(){this.geolocate()},methods:{setPlace:function(t){this.currentPlace=t},addMarker:function(){if(console.log("agregando marks"),this.currentPlace){console.log("agregando marks");var t={lat:-31.4,lng:-64.1833};this.markers.push({position:[{lat:-31.45949097,lng:-64.18105},{lat:-31.45989488,lng:-64.18105}]}),this.places.push(this.currentPlace),this.center=t,this.currentPlace=null}},geolocate:function(){var t=this;navigator.geolocation.getCurrentPosition(function(e){t.center={lat:-31.4,lng:-64.1833}})}}},D=A,M=Object(g["a"])(D,N,j,!1,null,null,null);M.options.__file="GoogleMap.vue";var P=M.exports,E={name:"home",data:function(){return{groups:[],date:null,modal:null,selectItem:{},center:{lat:-31.4,lng:-64.1833},markers:[{position:{lat:-31.45949097,lng:-64.18105}},{position:{lat:-31.45989488,lng:-64.18105}},{position:{lat:-31.45929488,lng:-64.18105}},{position:{lat:-31.45909488,lng:-64.18105}},{position:{lat:-31.46029488,lng:-64.18105}},{position:{lat:-31.46049488,lng:-64.18105}}]}},beforeCreate:function(){this.$store.state.IsAuthenticated||(console.log("entro"),this.$router.replace({name:"welcome"}))},computed:{loggedIn:function(){return this.$store.IsAuthenticated}},changeRoute:function(t){console.log(t)},created:function(){var t=this;G.getAll().then(function(e){t.groups=e}).catch(function(t){console.log("es un error"),console.log(t)})},components:{GoogleMap:P}},B=E,z=Object(g["a"])(B,$,C,!1,null,null,null);z.options.__file="Home.vue";var T=z.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("h1",[t._v("Sign In")])]),a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-3":""}},[a("form",[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-text-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",required:""},model:{value:t.selectItem.email,callback:function(e){t.$set(t.selectItem,"email",e)},expression:"selectItem.email"}})],1),a("v-flex",[a("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.selectItem.password,callback:function(e){t.$set(t.selectItem,"password",e)},expression:"selectItem.password"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{"mt-5":""}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.login()}}},[t._v("Sign In")]),a("v-btn",{attrs:{color:"default"},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1)],1)],1)],1)])],1),a("Dialog")],1)},q=[],L={data:function(){return{selectItem:{}}},components:{},mounted:function(){},methods:{login:function(t){var e=this;p.login(this.selectItem).then(function(t){console.log(t),localStorage.setItem("accToken",t.id),e.$store.state.token=t.id,e.$store.state.IsAuthenticated=!0,e.$store.state.user.id=t.userId,e.$router.push({path:"/"})}).catch(function(t){console.log("es un error"),console.log(t)})},cancel:function(t){this.$router.push({path:"welcome"})}}},Y=L,F=Object(g["a"])(Y,U,q,!1,null,null,null);F.options.__file="Login.vue";var H=F.exports,R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("h1",[t._v("Sign Up")])]),a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-3":""}},[a("form",[a("v-layout",{attrs:{column:""}},[a("v-flex",[a("v-text-field",{attrs:{name:"email",label:"Email",id:"email",type:"email",required:""},model:{value:t.selectItem.email,callback:function(e){t.$set(t.selectItem,"email",e)},expression:"selectItem.email"}})],1),a("v-flex",[a("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:""},model:{value:t.selectItem.password,callback:function(e){t.$set(t.selectItem,"password",e)},expression:"selectItem.password"}})],1),a("v-flex",[a("v-text-field",{attrs:{name:"confirmPassword",label:"Confirm Password",id:"confirmPassword",type:"password",required:""},model:{value:t.selectItem.confirmPassword,callback:function(e){t.$set(t.selectItem,"confirmPassword",e)},expression:"selectItem.confirmPassword"}})],1),a("v-flex",{staticClass:"text-xs-center",attrs:{"mt-5":""}},[a("v-btn",{attrs:{color:"primary"},on:{click:function(e){t.register()}}},[t._v("Sign Up")]),a("v-btn",{attrs:{color:"default"},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1)],1)],1)])],1)],1)},J=[],K={data:function(){return{selectItem:{}}},mounted:function(){},methods:{register:function(t){var e=this;console.log("registrar-> "+this.selectItem.password),p.create(this.selectItem).then(function(){console.log("usuario registrado"),e.$router.push({path:"login"})}).catch(function(t){console.log("es un error"),console.log(t)})},cancel:function(t){this.$router.push({path:"welcome"})}}},V=K,Q=Object(g["a"])(V,R,J,!1,null,null,null);Q.options.__file="Register.vue";var W=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-parallax",{attrs:{src:"https://seminario2app.herokuapp.com/inicio.jpg",height:"1000"}},[a("div",[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"","mt-5":""}},[a("h1",[t._v("Family Tracker")])]),a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":"","mt-3":""}},[a("blockquote",{staticClass:"blockquote text-xs-center"},[t._v("\n                        Family Tracker is a GPS tracking application that allows you to track the location of Android and Apple cell phones and tablets and send free text messages between them.\n\n                        It is one of the first cross platform applications, which takes a full advantage of the capabilities of the two most popular mobile operating systems to date.\n                    ")])]),a("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm6:"","offset-sm3":"","mt-5":""}},[a("v-btn",{attrs:{color:"primary",to:"/register"}},[t._v("Sign Up")]),a("v-btn",{attrs:{to:"/login"}},[t._v("Sign In")])],1)],1)],1)],1)])},Z=[],tt={data:function(){return{}},mounted:function(){}},et=tt,at=Object(g["a"])(et,X,Z,!1,null,null,null);at.options.__file="Welcome.vue";var nt=at.exports,ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-flex",{attrs:{xs12:""}},[a("label",[t._v("Info Groups")])]),a("div",[a("v-flex",{attrs:{xs12:""}},[a("div",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Groups")]),a("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("New Group")]),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Name"},model:{value:t.selectItem.Name,callback:function(e){t.$set(t.selectItem,"Name",e)},expression:"selectItem.Name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Description"},model:{value:t.selectItem.Description,callback:function(e){t.$set(t.selectItem,"Description",e)},expression:"selectItem.Description"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Save")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.groups,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.Name))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.Description))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){t.editItem(e.item)}}},[t._v("\n                                edit\n                            ")]),a("v-icon",{attrs:{small:""},on:{click:function(a){t.deleteItem(e.item)}}},[t._v("\n                                delete\n                            ")])],1)]}}])})],1)])],1)],1)},st=[],rt={data:function(){return{dialog:!1,selectItem:{name:"",description:""},groups:[],headers:[{text:"Name",value:"name"},{text:"Description",value:"description",sortable:!1}],editedIndex:-1}},computed:{formTitle:function(){return-1===this.editedIndex?"New Item":"Edit Item"}},watch:{dialog:function(t){t||this.close()}},mounted:function(){this.initialize(),this.$store.state.IsAuthenticated||(console.log("group-welcome- before"),this.$router.push({path:"welcome"}))},methods:{initialize:function(){var t=this;G.getAll().then(function(e){t.groups=e}).catch(function(t){console.log("es un error"),console.log(t)})},editItem:function(t){this.editedIndex=this.groups.indexOf(t),this.selectItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this,a=this.groups.indexOf(t);G.delete(t.id).then(function(){console.log("elemento borrado"),e.groups.splice(a,1)}).catch(function(t){console.log("es un error"),console.log(t)})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.selectItem=Object.assign({},t.selectItem),t.editedIndex=-1},300)},save:function(){var t=this;console.log(this.$store.state.token),this.editedIndex>-1?Object.assign(this.groups[this.editedIndex],this.selectItem):G.create(this.$store.state.token,this.selectItem).then(function(){t.groups.push(t.selectItem)}).catch(function(t){console.log("es un error"),console.log(t)}),this.close()}}},lt=rt,it=Object(g["a"])(lt,ot,st,!1,null,null,null);it.options.__file="Groups.vue";var ct=it.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-flex",{attrs:{xs12:""}},[a("label",[t._v("Info Groups Members")])]),a("div",[a("v-flex",{attrs:{xs12:""}},[a("div",[a("v-toolbar",{attrs:{flat:"",color:"white"}},[a("v-toolbar-title",[t._v("Members")]),a("v-divider",{staticClass:"mx-2",attrs:{inset:"",vertical:""}}),a("v-spacer"),a("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{staticClass:"mb-2",attrs:{slot:"activator",color:"primary",dark:""},slot:"activator"},[t._v("New Member")]),a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v(t._s(t.formTitle))])]),a("v-card-text",[a("v-container",{attrs:{"grid-list-md":""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Name"},model:{value:t.selectItem.Name,callback:function(e){t.$set(t.selectItem,"Name",e)},expression:"selectItem.Name"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Last Name"},model:{value:t.selectItem.LastName,callback:function(e){t.$set(t.selectItem,"LastName",e)},expression:"selectItem.LastName"}})],1),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:"Email"},model:{value:t.selectItem.Email,callback:function(e){t.$set(t.selectItem,"Email",e)},expression:"selectItem.Email"}})],1),a("v-flex",{attrs:{xs6:""}},[a("v-dialog",{ref:"dialog",attrs:{"return-value":t.selectItem.BirdDay,persistent:"",lazy:"","full-width":"",width:"290px"},on:{"update:returnValue":function(e){t.$set(t.selectItem,"BirdDay",e)}}},[a("v-text-field",{attrs:{slot:"activator",label:"Select Date","prepend-icon":"event",readonly:""},slot:"activator",model:{value:t.selectItem.BirdDay,callback:function(e){t.$set(t.selectItem,"BirdDay",e)},expression:"selectItem.BirdDay"}}),a("v-date-picker",{attrs:{scrollable:""},model:{value:t.selectItem.BirdDay,callback:function(e){t.$set(t.selectItem,"BirdDay",e)},expression:"selectItem.BirdDay"}},[a("v-spacer"),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),a("v-btn",{attrs:{flat:"",color:"primary"},on:{click:function(e){t.$refs.dialog.save(t.selectItem.BirdDay)}}},[t._v("OK")])],1)],1)],1),a("v-flex",{attrs:{xs6:""}},[a("v-select",{attrs:{items:t.groups,"item-text":"Name","item-value":"id",label:"Select Group"},model:{value:t.selectItem.GroupId,callback:function(e){t.$set(t.selectItem,"GroupId",e)},expression:"selectItem.GroupId"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.close(e)}}},[t._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("Save")])],1)],1)],1)],1),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.membersGroup,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.Name))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.LastName))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(t._f("moment")(e.item.BirdDay,"dddd, MMMM Do YYYY")))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.GroupId))]),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.Email))]),a("td",{staticClass:"justify-center layout px-0"},[a("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(a){t.editItem(e.item)}}},[t._v("\n                                edit\n                            ")]),a("v-icon",{attrs:{small:""},on:{click:function(a){t.deleteItem(e.item)}}},[t._v("\n                                delete\n                            ")])],1)]}}])},[a("template",{slot:"no-data"},[a("v-btn",{attrs:{color:"primary"},on:{click:t.initialize}},[t._v("Reset")])],1)],2)],1)])],1)],1)},dt=[],ft=f.getUrl()+"group_members",mt={headers:{Authorization:"Bearer "}},pt={getAll:function(){return d.a.get(ft,mt).then(function(t){return t.data})},create:function(t,e){return d.a.post(ft+"?access_token="+t,e,mt).then(function(t){return t.data})},delete:function(t){return d.a.delete(ft+"/"+t,mt).then(function(t){return t.data})},update:function(t){return d.a.post(ft+"/update",t,mt).then(function(t){return t.data})}},vt={data:function(){return{date:null,menu:!1,modal:!1,menu2:!1,dialog:!1,selectItem:{},headers:[{text:"Name",value:"name"},{text:"Last Name",value:"lastName"},{text:"BirdDay",value:"birdDay"},{text:"GroupId",value:"groupId"},{text:"Email",value:"email"}],membersGroup:[],groups:[],editedIndex:-1}},computed:{formTitle:function(){return-1===this.editedIndex?"New Member":"Edit Member"}},watch:{dialog:function(t){t||this.close()}},created:function(){this.initialize(),this.$store.state.IsAuthenticated||(console.log("group-welcome- before"),this.$router.push({path:"welcome"}))},methods:{initialize:function(){var t=this;pt.getAll().then(function(e){t.membersGroup=e}).catch(function(t){console.log("es un error"),console.log(t)}),G.getAll().then(function(e){t.groups=e}).catch(function(t){console.log("es un error"),console.log(t)})},editItem:function(t){this.editedIndex=this.membersGroup.indexOf(t),this.selectItem=Object.assign({},t),this.dialog=!0},deleteItem:function(t){var e=this,a=this.membersGroup.indexOf(t);this.membersGroup.splice(a,1),pt.delete(t.id).then(function(){console.log("elemento borrado"),e.membersGroup.splice(a,1)}).catch(function(t){console.log("es un error"),console.log(t)})},close:function(){var t=this;this.dialog=!1,setTimeout(function(){t.selectItem=Object.assign({},t.selectItem),t.editedIndex=-1},300)},save:function(){var t=this;this.editedIndex>-1?Object.assign(this.membersGroup[this.editedIndex],this.selectItem):(this.$Progress.start(),this.membersGroup.push(this.selectItem),pt.create(this.$store.state.token,this.selectItem).then(function(){var e={};e.email=t.selectItem.Email,e.password="1234",e.create(t.$store.state.token,e).then(function(){t.$Progress.finish()}).catch(function(t){console.log("es un error"),console.log(t)})}).catch(function(t){console.log("es un error"),console.log(t)})),this.close()}}},ht=vt,gt=Object(g["a"])(ht,ut,dt,!1,null,null,null);gt.options.__file="MembersGroup.vue";var xt=gt.exports;n["default"].use(w["a"]);var bt=new w["a"]({routes:[{path:"/",name:"home",component:T},{path:"/login",name:"login",component:H},{path:"/welcome",name:"welcome",component:nt},{path:"/groups",name:"groups",component:ct},{path:"/membersGroup",name:"membersGroup",component:xt},{path:"/register",name:"register",component:W}]});bt.beforeEach(function(t,e,a){a()});var It=bt,_t=a("2f62");n["default"].use(_t["a"]);var kt=new _t["a"].Store({state:{IsAuthenticated:localStorage.getItem("accToken")||!1,token:null,user:{userName:null,id:null}},mutations:{},actions:{}}),yt=a("755e"),wt=a("26b9"),$t=a.n(wt),Ct=a("ead5"),Ot=a.n(Ct),St=a("2ead"),Gt=a.n(St);n["default"].config.productionTip=!1,n["default"].use(Ot.a),n["default"].use(Gt.a),n["default"].use($t.a,{color:"rgb(143, 255, 199)",failedColor:"red",height:"2px"}),n["default"].use(yt,{load:{key:"AIzaSyDQnGYwqSCRHopYLnhAfoFFSADzSnfNXHE"}});var Nt=new n["default"]({store:kt,router:It,render:function(t){return t(y)}}).$mount("#app");console.log(Nt)}});
//# sourceMappingURL=app.9be8b9bf.js.map