(function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],d=0,b=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&b.push(n[c][0]),n[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(b.length)b.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],r=!0,i=1;i<o.length;i++){var s=o[i];0!==n[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},n={app:0},a=[];function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vueproj/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},2868:function(e,t,o){"use strict";o("e3c0")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("7a23"),n=o("c802"),a=o.n(n),c={class:"container"},i=Object(r["g"])("img",{alt:"Vue logo",src:a.a},null,-1);function s(e,t,o,n,a,s){var l=Object(r["w"])("Formulario"),u=Object(r["w"])("Tabla");return Object(r["q"])(),Object(r["f"])("div",c,[i,Object(r["i"])(l,{onGetNewDatos:s.addNewUsuario},null,8,["onGetNewDatos"]),Object(r["i"])(u,{onActualizarDatos:s.actualizarDatos,onGetBorrar:s.borrarUsuario,usuarios:a.usuarios},null,8,["onActualizarDatos","onGetBorrar","usuarios"])])}o("4de4"),o("d3b7");var l=function(e){return Object(r["t"])("data-v-b9d3dba0"),e=e(),Object(r["r"])(),e},u={class:"container"},d=l((function(){return Object(r["g"])("br",null,null,-1)})),b=l((function(){return Object(r["g"])("h1",null,"Tabla de usuarios",-1)})),p={key:0},f=l((function(){return Object(r["g"])("thead",null,[Object(r["g"])("th",null,"Nombre"),Object(r["g"])("th",null,"Apellidos"),Object(r["g"])("th",null,"Correo"),Object(r["g"])("th",null,"Opciones")],-1)})),O={key:0},j=["onUpdate:modelValue"],m={key:1},g={key:2},h=["onUpdate:modelValue"],v={key:3},y={key:4},k=["onUpdate:modelValue"],E={key:5},q={class:"btn-group"},w=["onClick"],C=["onClick"],U=["onClick"],A={key:1},x=l((function(){return Object(r["g"])("h3",null,"No hay usuarios para mostrar",-1)})),D=[x];function _(e,t,o,n,a,c){return Object(r["q"])(),Object(r["f"])("div",null,[Object(r["g"])("div",u,[d,b,o.usuarios.length>0?(Object(r["q"])(),Object(r["f"])("div",p,[Object(r["g"])("table",null,[f,Object(r["g"])("tbody",null,[(Object(r["q"])(!0),Object(r["f"])(r["a"],null,Object(r["u"])(o.usuarios,(function(e,o){return Object(r["q"])(),Object(r["f"])("tr",{key:o},[a.editando===e?(Object(r["q"])(),Object(r["f"])("td",O,[Object(r["g"])("form",{onSubmit:t[0]||(t[0]=Object(r["F"])((function(e){return c.guardarEdicion()}),["prevent"]))},[Object(r["E"])(Object(r["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return e.nombre=t}},null,8,j),[[r["C"],e.nombre]])],32)])):(Object(r["q"])(),Object(r["f"])("td",m,Object(r["y"])(e.nombre),1)),a.editando===e?(Object(r["q"])(),Object(r["f"])("td",g,[Object(r["g"])("form",{onSubmit:t[1]||(t[1]=Object(r["F"])((function(e){return c.guardarEdicion()}),["prevent"]))},[Object(r["E"])(Object(r["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return e.apellidos=t}},null,8,h),[[r["C"],e.apellidos]])],32)])):(Object(r["q"])(),Object(r["f"])("td",v,Object(r["y"])(e.apellidos),1)),a.editando===e?(Object(r["q"])(),Object(r["f"])("td",y,[Object(r["g"])("form",{onSubmit:t[2]||(t[2]=Object(r["F"])((function(e){return c.guardarEdicion()}),["prevent"]))},[Object(r["E"])(Object(r["g"])("input",{type:"text",class:"form-control","onUpdate:modelValue":function(t){return e.correo=t}},null,8,k),[[r["C"],e.correo]])],32)])):(Object(r["q"])(),Object(r["f"])("td",E,Object(r["y"])(e.correo),1)),Object(r["g"])("td",null,[Object(r["g"])("div",q,[a.editando===e?(Object(r["q"])(),Object(r["f"])("a",{key:0,onClick:t[3]||(t[3]=function(e){return c.guardarEdicion()}),class:"btn btn-sm btn-outline-success"},"Guardar")):(Object(r["q"])(),Object(r["f"])("a",{key:1,onClick:function(t){return c.editarUsuario(e)},class:"btn btn-sm btn-outline-primary"},"Editar",8,w)),a.editando===e?(Object(r["q"])(),Object(r["f"])("a",{key:2,onClick:function(t){return c.cancelarEdicion(e)},class:"btn btn-sm btn-outline-secondary"},"Cerrar",8,C)):(Object(r["q"])(),Object(r["f"])("a",{key:3,onClick:function(t){return c.borrarUsuario(e)},class:"btn btn-sm btn-outline-danger"},"Borrar",8,U))])])])})),128))])])])):(Object(r["q"])(),Object(r["f"])("div",A,D))])])}var P=o("0180"),I={name:"tabla",props:{usuarios:Array},data:function(){return{toast:Object(P["b"])(),editando:!1,cache_persona:null}},methods:{borrarUsuario:function(e){this.$emit("getBorrar",e),this.toast.info("Contacto "+e.nombre+" borrado correctamente.",{timeout:1200})},editarUsuario:function(e){this.cache_persona=Object.assign({},e),this.editando=e},guardarEdicion:function(){this.$emit("actualizarDatos",this.usuarios),this.resetEdicion(),this.toast.success("Contacto editado correctamente.",{timeout:1e3})},cancelarEdicion:function(e){Object.assign(e,this.cache_persona),this.resetEdicion()},resetEdicion:function(){this.cache_persona=null,this.editando=!1}}},V=(o("2868"),o("6b0d")),F=o.n(V);const S=F()(I,[["render",_],["__scopeId","data-v-b9d3dba0"]]);var N=S,z={class:"row"},G=Object(r["g"])("h3",null,"Agrega un usuario",-1),T=Object(r["g"])("p",null,"Agrega un nuevo usuario al sistema.",-1),B={class:"col-md-4"},M={class:"form-group"},$={class:"col-md-4"},J={class:"form-group"},L={class:"col-md-4"},H={class:"form-group"},K=Object(r["g"])("br",null,null,-1),Q=Object(r["g"])("button",{type:"submit",class:"btn btn-primary"},"Agregar persona",-1),R=Object(r["g"])("br",null,null,-1),W=Object(r["g"])("br",null,null,-1),X={class:"row"},Y={class:"col-md-12"},Z={key:0,class:"alert alert-danger",role:"alert"},ee={key:1,class:"alert alert-success",role:"alert"};function te(e,t,o,n,a,c){return Object(r["q"])(),Object(r["f"])("div",null,[Object(r["g"])("form",{onSubmit:t[6]||(t[6]=Object(r["F"])((function(){return c.enviarDatos&&c.enviarDatos.apply(c,arguments)}),["prevent"]))},[Object(r["g"])("div",z,[G,T,Object(r["g"])("div",B,[Object(r["g"])("div",M,[Object(r["E"])(Object(r["g"])("input",{onFocus:t[0]||(t[0]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)}),class:Object(r["o"])([{"is-invalid":a.procesando&&c.nombreInvalido,"is-valid":a.correcto},"form-control"]),"onUpdate:modelValue":t[1]||(t[1]=function(e){return a.persona.nombre=e}),type:"text",placeholder:"Nombre"},null,34),[[r["C"],a.persona.nombre]])])]),Object(r["g"])("div",$,[Object(r["g"])("div",J,[Object(r["E"])(Object(r["g"])("input",{onFocus:t[2]||(t[2]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)}),class:Object(r["o"])([{"is-invalid":a.procesando&&c.apellidoInvalido,"is-valid":a.correcto},"form-control"]),"onUpdate:modelValue":t[3]||(t[3]=function(e){return a.persona.apellido=e}),type:"text",placeholder:"Apellido"},null,34),[[r["C"],a.persona.apellido]])])]),Object(r["g"])("div",L,[Object(r["g"])("div",H,[Object(r["E"])(Object(r["g"])("input",{onFocus:t[4]||(t[4]=function(){return c.resetEstado&&c.resetEstado.apply(c,arguments)}),class:Object(r["o"])([{"is-invalid":a.procesando&&c.correoInvalido,"is-valid":a.correcto},"form-control"]),"onUpdate:modelValue":t[5]||(t[5]=function(e){return a.persona.correo=e}),type:"email",placeholder:"Correo@correo.com"},null,34),[[r["C"],a.persona.correo]])])])]),K,Q,R,W,Object(r["g"])("div",X,[Object(r["g"])("div",Y,[a.error&&a.procesando?(Object(r["q"])(),Object(r["f"])("div",Z," Debes rellenar todos los campos! ")):Object(r["e"])("",!0),a.correcto?(Object(r["q"])(),Object(r["f"])("div",ee," La persona ha sido agregada correctamente! ")):Object(r["e"])("",!0)])])],32)])}var oe={name:"formulario",data:function(){return{toast:Object(P["b"])(),procesando:!1,correcto:!1,error:!1,persona:{nombre:"",apellido:"",correo:""}}},computed:{nombreInvalido:function(){return this.persona.nombre.length<1},apellidoInvalido:function(){return this.persona.apellido.length<1},correoInvalido:function(){return this.persona.correo.length<1}},methods:{enviarDatos:function(){this.procesando=!0,this.resetEstado(),this.nombreInvalido||this.apellidoInvalido||this.correoInvalido?this.error=!0:(this.$emit("getNewDatos",{nombre:this.persona.nombre,apellido:this.persona.apellido,correo:this.persona.correo}),this.error=!1,this.correcto=!0,this.procesando=!1,this.toast.info("Contacto nuevo agregado correctamente a la lista.",{timeout:1e3}),this.persona={nombre:"",apellido:"",correo:""})},resetEstado:function(){this.correcto=!1,this.error=!1}}};const re=F()(oe,[["render",te]]);var ne=re,ae={name:"App",components:{Tabla:N,Formulario:ne},data:function(){return{usuarios:[]}},created:function(){this.usuarios=[{nombre:"Plamen",apellidos:"Atanasov",correo:"plamen@gmail.com"},{nombre:"Plamen",apellidos:"Atanasov",correo:"plamen@gmail.com"},{nombre:"Plamen",apellidos:"Atanasov",correo:"plamen@gmail.com"},{nombre:"Plamen",apellidos:"Atanasov",correo:"plamen@gmail.com"}]},methods:{addNewUsuario:function(e){this.usuarios.push(e)},borrarUsuario:function(e){this.usuarios=this.usuarios.filter((function(t){return t!=e}))},actualizarDatos:function(e){this.usuarios=e}}};o("8f2b");const ce=F()(ae,[["render",s]]);var ie=ce,se=(o("7b17"),o("ab8b"),o("da96"),Object(r["c"])(ie));se.use(P["a"]),se.mount("#app")},"8f2b":function(e,t,o){"use strict";o("c7ec")},c7ec:function(e,t,o){},c802:function(e,t,o){e.exports=o.p+"img/users.430eedb3.svg"},e3c0:function(e,t,o){}});
//# sourceMappingURL=app.ced2f8af.js.map