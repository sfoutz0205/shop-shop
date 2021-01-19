(this["webpackJsonpmern-client"]=this["webpackJsonpmern-client"]||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/spinner.ab497855.gif"},51:function(e,t,a){e.exports=a(67)},56:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(41),o=a.n(c),l=(a(56),a(9)),i=a(5),u=a(12),s=a(49),m=a(6),d=a(14),p=a(50),E=a(22),f=a(4),g=function(e,t){switch(t.type){case"UPDATE_PRODUCTS":return Object(f.a)(Object(f.a)({},e),{},{products:Object(E.a)(t.products)});case"UPDATE_CATEGORIES":return Object(f.a)(Object(f.a)({},e),{},{categories:Object(E.a)(t.categories)});case"UPDATE_CURRENT_CATEGORY":return Object(f.a)(Object(f.a)({},e),{},{currentCategory:t.currentCategory});case"ADD_TO_CART":return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!0,cart:[].concat(Object(E.a)(e.cart),[t.product])});case"ADD_MULTIPLE_TO_CART":return Object(f.a)(Object(f.a)({},e),{},{cart:[].concat(Object(E.a)(e.cart),Object(E.a)(t.products))});case"REMOVE_FROM_CART":var a=e.cart.filter((function(e){return e._id!==t._id}));return Object(f.a)(Object(f.a)({},e),{},{cartOpen:a.length>0,cart:a});case"UPDATE_CART_QUANTITY":return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!0,cart:e.cart.map((function(e){return t._id===e._id&&(e.purchaseQuantity=t.purchaseQuantity),e}))});case"CLEAR_CART":return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!1,cart:[]});case"TOGGLE_CART":return Object(f.a)(Object(f.a)({},e),{},{cartOpen:!e.cartOpen});default:return e}};var b=Object(n.createContext)(),h=b.Provider,v=function(e){e.value;var t,a=Object(p.a)(e,["value"]),c=(t={products:[],cart:[],cartOpen:!1,categories:[],currentCategory:""},Object(n.useReducer)(g,t)),o=Object(m.a)(c,2),l=o[0],i=o[1];return r.a.createElement(h,Object.assign({value:[l,i]},a))},O=function(){return Object(n.useContext)(b)};function y(e,t,a){return new Promise((function(n,r){var c,o,l,i=window.indexedDB.open("shop-shop",1);i.onupgradeneeded=function(e){var t=i.result;t.createObjectStore("products",{keyPath:"_id"}),t.createObjectStore("categories",{keyPath:"_id"}),t.createObjectStore("cart",{keyPath:"_id"})},i.onerror=function(e){console.log("There was an error")},i.onsuccess=function(r){switch(c=i.result,o=c.transaction(e,"readwrite"),l=o.objectStore(e),c.onerror=function(e){console.log("error",e)},t){case"put":l.put(a),n(a);break;case"get":var u=l.getAll();u.onsuccess=function(){n(u.result)};break;case"delete":l.delete(a._id);break;default:console.log("No valid method")}o.oncomplete=function(){c.close()}}}))}var j=function(e){var t=e.image,a=e.name,n=e._id,c=e.price,o=e.quantity,i=O(),u=Object(m.a)(i,2),s=u[0],d=u[1],p=s.cart;return r.a.createElement("div",{className:"card px-1 py-1"},r.a.createElement(l.b,{to:"/products/".concat(n)},r.a.createElement("img",{alt:a,src:"/images/".concat(t)}),r.a.createElement("p",null,a)),r.a.createElement("div",null,r.a.createElement("div",null,o," ",function(e,t){return 1===t?e:e+"s"}("item",o)," in stock"),r.a.createElement("span",null,"$",c)),r.a.createElement("button",{onClick:function(){var t=p.find((function(e){return e._id===n}));t?(d({type:"UPDATE_CART_QUANTITY",_id:n,purchaseQuantity:parseInt(t.purchaseQuantity)+1}),y("cart","put",Object(f.a)(Object(f.a)({},t),{},{purchaseQuantity:parseInt(t.purchaseQuantity)+1}))):(d({type:"ADD_TO_CART",product:Object(f.a)(Object(f.a)({},e),{},{purchaseQuantity:1})}),y("cart","put",Object(f.a)(Object(f.a)({},e),{},{purchaseQuantity:1})))}},"Add to cart"))},w=a(21),_=a(18),T=a.n(_);function N(){var e=Object(w.a)(["\n{\n  user {\n    firstName\n    lastName\n    orders {\n      _id\n      purchaseDate\n      products {\n        _id\n        name\n        description\n        price\n        quantity\n        image\n      }\n    }\n  }\n}\n"]);return N=function(){return e},e}function C(){var e=Object(w.a)(["\n{\n  categories {\n    _id\n    name\n  }\n}\n"]);return C=function(){return e},e}function k(){var e=Object(w.a)(["\n  {\n    products {\n      _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      }\n    }\n  }\n"]);return k=function(){return e},e}function A(){var e=Object(w.a)(["\n  query getProducts($category: ID) {\n    products(category: $category) {\n      _id\n      name\n      description\n      price\n      quantity\n      image\n      category {\n        _id\n      }\n    }\n  }\n"]);return A=function(){return e},e}var x=T()(A()),R=(T()(k()),T()(C())),S=T()(N()),D=a(32),P=a.n(D);var U=function(){var e=O(),t=Object(m.a)(e,2),a=t[0],c=t[1],o=a.currentCategory,l=Object(d.b)(x),i=l.loading,u=l.data;return Object(n.useEffect)((function(){u?(c({type:"UPDATE_PRODUCTS",products:u.products}),u.products.forEach((function(e){y("products","put",e)}))):i||y("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[u,i,c]),r.a.createElement("div",{className:"my-2"},r.a.createElement("h2",null,"Our Products:"),a.products.length?r.a.createElement("div",{className:"flex-row"},(o?a.products.filter((function(e){return e.category.id===o})):a.products).map((function(e){return r.a.createElement(j,{key:e._id,_id:e._id,image:e.image,name:e.name,price:e.price,quantity:e.quantity})}))):r.a.createElement("h3",null,"You haven't added any products yet!"),i?r.a.createElement("img",{src:P.a,alt:"loading"}):null)};var I=function(){var e=O(),t=Object(m.a)(e,2),a=t[0],c=t[1],o=a.categories,l=Object(d.b)(R),i=l.loading,u=l.data;return Object(n.useEffect)((function(){u?(c({type:"UPDATE_CATEGORIES",categories:u.categories}),u.categories.forEach((function(e){y("categories","put",e)}))):i||y("categories","get").then((function(e){c({type:"UPDATE_CATEGORIES",categories:e})}))}),[u,i,c]),r.a.createElement("div",null,r.a.createElement("h2",null,"Choose a Category:"),o.map((function(e){return r.a.createElement("button",{key:e._id,onClick:function(){var t;t=e._id,c({type:"UPDATE_CURRENT_CATEGORY",currentCategory:t})}},e.name)})))},Q=a(20),$=a.n(Q),F=a(25),L=function(e){var t=e.item,a=O(),n=Object(m.a)(a,2)[1];return r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",null,r.a.createElement("img",{src:"/images/".concat(t.image),alt:""})),r.a.createElement("div",null,r.a.createElement("div",null,t.name,", $",t.price),r.a.createElement("div",null,r.a.createElement("span",null,"Qty:"),r.a.createElement("input",{type:"number",placeholder:"1",value:t.purchaseQuantity,onChange:function(e){var a=e.target.value;"0"===a?(n({type:"REMOVE_FROM_CART",_id:t._id}),y("cart","delete",Object(f.a)({},t))):(n({type:"UPDATE_CART_QUANTITY",_id:t._id,purchaseQuantity:parseInt(a)}),y("cart","put",Object(f.a)(Object(f.a)({},t),{},{purchaseQuantity:parseInt(a)})))}}),r.a.createElement("span",{role:"img","aria-label":"trash",onClick:function(){return function(e){n({type:"REMOVE_FROM_CART",_id:e._id}),y("cart","delete",Object(f.a)({},e))}(t)}},"\ud83d\uddd1\ufe0f"))))},G=a(47),M=a(48),q=a(36),W=a.n(q),Y=new(function(){function e(){Object(G.a)(this,e)}return Object(M.a)(e,[{key:"getProfile",value:function(){return W()(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return W()(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),B=(a(66),function(){var e=O(),t=Object(m.a)(e,2),a=t[0],c=t[1];function o(){c({type:"TOGGLE_CART"})}if(Object(n.useEffect)((function(){function e(){return(e=Object(F.a)($.a.mark((function e(){var t;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("cart","get");case 2:t=e.sent,c({type:"ADD_MULTIPLE_TO_CART",products:Object(E.a)(t)});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}a.cart.length||function(){e.apply(this,arguments)}()}),[a.cart.length,c]),!a.cartOpen)return r.a.createElement("div",{className:"cart-closed",onClick:o},r.a.createElement("span",{role:"img","aria-label":"trash"},"\ud83d\uded2"));return console.log(a),r.a.createElement("div",{className:"cart"},r.a.createElement("div",{className:"close",onClick:o},"[close]"),r.a.createElement("h2",null,"Shopping Cart"),a.cart.length?r.a.createElement("div",null,a.cart.map((function(e){return r.a.createElement(L,{key:e._id,item:e})})),r.a.createElement("div",{className:"flex-row space-between"},r.a.createElement("strong",null,"Total: $",function(){var e=0;return a.cart.forEach((function(t){e+=t.price*t.purchaseQuantity})),e.toFixed(2)}()),Y.loggedIn()?r.a.createElement("button",null,"Checkout"):r.a.createElement("span",null,"(log in to check out)"))):r.a.createElement("h3",null,r.a.createElement("span",{role:"img","aria-label":"shocked"},"\ud83d\ude31"),"You haven't added anything to your cart yet!"))}),H=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(I,null),r.a.createElement(U,null),r.a.createElement(B,null))};var V=function(){var e=O(),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(i.f)().id,u=Object(n.useState)({}),s=Object(m.a)(u,2),p=s[0],E=s[1],g=Object(d.b)(x),b=g.loading,h=g.data,v=a.products,j=a.cart;return Object(n.useEffect)((function(){v.length?E(v.find((function(e){return e._id===o}))):h?(c({type:"UPDATE_PRODUCTS",products:h.products}),h.products.forEach((function(e){y("products","put",e)}))):b||y("products","get").then((function(e){c({type:"UPDATE_PRODUCTS",products:e})}))}),[v,h,b,c,o]),r.a.createElement(r.a.Fragment,null,p?r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),r.a.createElement("h2",null,p.name),r.a.createElement("p",null,p.description),r.a.createElement("p",null,r.a.createElement("strong",null,"Price:"),"$",p.price," ",r.a.createElement("button",{onClick:function(){var e=j.find((function(e){return e._id===o}));e?(c({type:"UPDATE_CART_QUANTITY",_id:o,purchaseQuantity:parseInt(e.purchaseQuantity)+1}),y("cart","put",Object(f.a)(Object(f.a)({},e),{},{purchaseQuantity:parseInt(e.purchaseQuantity)+1}))):(c({type:"ADD_TO_CART",product:Object(f.a)(Object(f.a)({},p),{},{purchaseQuantity:1})}),y("cart","put",Object(f.a)(Object(f.a)({},p),{},{purchaseQuantity:1})))}},"Add to Cart"),r.a.createElement("button",{disabled:!j.find((function(e){return e._id===p._id})),onClick:function(){c({type:"REMOVE_FROM_CART",_id:p._id}),y("cart","delete",Object(f.a)({},p))}},"Remove from Cart")),r.a.createElement("img",{src:"/images/".concat(p.image),alt:p.name})):null,b?r.a.createElement("img",{src:P.a,alt:"loading"}):null,r.a.createElement(B,null))};var J=function(e){var t=e.children;return r.a.createElement("div",{style:{height:560,clear:"both",paddingTop:120,textAlign:"center"}},t)},z=function(){return r.a.createElement("div",null,r.a.createElement(J,null,r.a.createElement("h1",null,"404 Page Not Found"),r.a.createElement("h1",null,r.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))},K=a(24);function X(){var e=Object(w.a)(["\n  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {\n    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return X=function(){return e},e}function Z(){var e=Object(w.a)(["\n  mutation addOrder($products: [ID]!) {\n    addOrder(products: $products) {\n      purchaseDate\n      products {\n        _id\n      name\n      description\n      price\n      quantity\n      category {\n        name\n      } \n      }\n    }\n  }\n"]);return Z=function(){return e},e}function ee(){var e=Object(w.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]);return ee=function(){return e},e}var te=T()(ee()),ae=(T()(Z()),T()(X()));var ne=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(d.a)(te),u=Object(m.a)(i,2),s=u[0],p=u[1].error,E=function(){var e=Object(F.a)($.a.mark((function e(t){var a,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,s({variables:{email:c.email,password:c.password}});case 4:a=e.sent,n=a.data.login.token,Y.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.target,a=t.name,n=t.value;o(Object(f.a)(Object(f.a)({},c),{},Object(K.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/signup"},"\u2190 Go to Signup"),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:E},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:g})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:g})),p?r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},"The provided credentials are incorrect")):null,r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var re=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(d.a)(ae),u=Object(m.a)(i,1)[0],s=function(){var e=Object(F.a)($.a.mark((function e(t){var a,n;return $.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,u({variables:{email:c.email,password:c.password,firstName:c.firstName,lastName:c.lastName}});case 3:a=e.sent,n=a.data.addUser.token,Y.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.target,a=t.name,n=t.value;o(Object(f.a)(Object(f.a)({},c),{},Object(K.a)({},a,n)))};return r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/login"},"\u2190 Go to Login"),r.a.createElement("h2",null,"Signup"),r.a.createElement("form",{onSubmit:s},r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"firstName"},"First Name:"),r.a.createElement("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"lastName"},"Last Name:"),r.a.createElement("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"email"},"Email:"),r.a.createElement("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:p})),r.a.createElement("div",{className:"flex-row space-between my-2"},r.a.createElement("label",{htmlFor:"pwd"},"Password:"),r.a.createElement("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:p})),r.a.createElement("div",{className:"flex-row flex-end"},r.a.createElement("button",{type:"submit"},"Submit"))))};var ce=function(){return r.a.createElement("header",{className:"flex-row px-1"},r.a.createElement("h1",null,r.a.createElement(l.b,{to:"/"},r.a.createElement("span",{role:"img","aria-label":"shopping bag"},"\ud83d\udecd\ufe0f"),"-Shop-Shop")),r.a.createElement("nav",null,Y.loggedIn()?r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/orderHistory"},"Order History")),r.a.createElement("li",{className:"mx-1"},r.a.createElement("a",{href:"/",onClick:function(){return Y.logout()}},"Logout"))):r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/signup"},"Signup")),r.a.createElement("li",{className:"mx-1"},r.a.createElement(l.b,{to:"/login"},"Login")))))};var oe=function(){var e,t=Object(d.b)(S).data;return t&&(e=t.user),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container my-1"},r.a.createElement(l.b,{to:"/"},"\u2190 Back to Products"),e?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Order History for ",e.firstName," ",e.lastName),e.orders.map((function(e){return r.a.createElement("div",{key:e._id,className:"my-2"},r.a.createElement("h3",null,new Date(parseInt(e.purchaseDate)).toLocaleDateString()),r.a.createElement("div",{className:"flex-row"},e.products.map((function(e,t){var a=e._id,n=e.image,c=e.name,o=e.price;return r.a.createElement("div",{key:t,className:"card px-1 py-1"},r.a.createElement(l.b,{to:"/products/".concat(a)},r.a.createElement("img",{alt:c,src:"/images/".concat(n)}),r.a.createElement("p",null,c)),r.a.createElement("div",null,r.a.createElement("span",null,"$",o)))}))))}))):null))},le=new s.a({request:function(e){var t=localStorage.getItem("id_token");e.setContext({headers:{authorization:t?"Bearer ".concat(t):""}})},uri:"/graphql"});var ie=function(){return r.a.createElement(u.a,{client:le},r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(v,null,r.a.createElement(ce,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:H}),r.a.createElement(i.a,{exact:!0,path:"/login",component:ne}),r.a.createElement(i.a,{exact:!0,path:"/signup",component:re}),r.a.createElement(i.a,{exact:!0,path:"/orderHistory",component:oe}),r.a.createElement(i.a,{exact:!0,path:"/products/:id",component:V}),r.a.createElement(i.a,{component:z}))))))},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):se(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):se(t,e)}))}}()}},[[51,1,2]]]);
//# sourceMappingURL=main.a28a6217.chunk.js.map