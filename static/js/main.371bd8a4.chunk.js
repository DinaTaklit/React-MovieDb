(this["webpackJsonpreact-movie-db"]=this["webpackJsonpreact-movie-db"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},123:function(e,t,n){},125:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(18),s=n.n(r),i=n(6),o=n(4),l=n.n(o),d=n(10),j=n(8),u=n(1),p=a.a.createContext(),b=function(e){var t=e.children,n=Object(c.useState)(!0),a=Object(j.a)(n,2),r=a[0],s=a[1],i=Object(c.useState)([]),o=Object(j.a)(i,2),l=o[0],d=o[1],b=Object(c.useState)(!1),m=Object(j.a)(b,2),v=m[0],O=m[1];return Object(u.jsx)(p.Provider,{value:{loading:r,setLoading:s,moviesByGenre:l,setMoviesByGenre:d,modalIsOpen:v,setModalIsOpen:O},children:t})},m=function(){return Object(c.useContext)(p)},v=n(27),O=(n(59),n(22)),h=function(e,t){return"NEXT"===t.type?Object(O.a)(Object(O.a)({},e),{},{slideIndex:(e.slideIndex+1)%e.slideLength}):"PREV"===t.type?Object(O.a)(Object(O.a)({},e),{},{slideIndex:0===e.slideIndex?e.slideLength-1:e.slideIndex-1}):void 0},x=n(17);var f=function(e){var t=e.slide,n=e.offset,c=0===n||null,r=function(e){var t=a.a.useRef(null);return a.a.useEffect((function(){if(t.current&&e){var n={rect:void 0,mouseX:void 0,mouseY:void 0},c=t.current,a=function(e){if(c){n.rect||(n.rect=c.getBoundingClientRect()),n.mouseX=e.clientX,n.mouseY=e.clientY;var t=(n.mouseX-n.rect.left)/n.rect.width,a=(n.mouseY-n.rect.top)/n.rect.height;c.style.setProperty("--px",t),c.style.setProperty("--py",a)}};return c.addEventListener("mousemove",a),function(){c.removeEventListener("mousemove",a)}}}),[e]),t}(c);return Object(u.jsx)("div",{ref:r,className:"slide","data-active":c,style:{"--offset":n,"--dir":0===n?0:n>0?1:-1},children:Object(u.jsxs)(x.b,{to:"/movie/".concat(t.id),children:[Object(u.jsx)("div",{className:"slideBackground",style:{backgroundImage:"url('".concat(t.backPoster,"')")}}),Object(u.jsx)("div",{className:"slideContent",style:{backgroundImage:"url('".concat(t.backPoster,"')"),objectFit:"cover"},children:Object(u.jsx)("div",{className:"slideContentInner",children:Object(u.jsx)("h2",{className:"slideTitle",children:t.title})})})]})})};var g=function(e){e.offset;var t=e.nowPlayingMovies,n={slideIndex:0,slideLength:t.length},a=Object(c.useReducer)(h,n),r=Object(j.a)(a,2),s=r[0],i=r[1];return Object(u.jsxs)("div",{className:"slides py-4",children:[Object(u.jsx)("button",{onClick:function(){return i({type:"PREV"})},children:"\u2039"}),[].concat(Object(v.a)(t),Object(v.a)(t),Object(v.a)(t)).map((function(e,n){var c=t.length+(s.slideIndex-n);return Object(u.jsx)(f,{slide:e,offset:c},n)})),Object(u.jsx)("button",{onClick:function(){return i({type:"NEXT"})},children:"\u203a"})]})},N=(n(64),"daecf59bd56dc7aad77cb270f625f7bd"),w=n(65).default,k="https://api.themoviedb.org/3",y="".concat(k,"/movie/now_playing"),_="".concat(k,"/movie/top_rated"),I="".concat(k,"/movie"),S="".concat(k,"/genre/movie/list"),E="".concat(k,"/discover/movie"),T="".concat(k,"/trending/person/week"),P="https://image.tmdb.org/t/p/original",M=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get(y,{params:{api_key:N,language:"en_US",page:1}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results.map((function(e){var t=e.id,n=e.backdrop_path,c=e.popularith,a=e.title,r=e.poster_path,s=e.overview,i=e.vote_average;return{id:t,backPoster:"".concat(P).concat(n),popularity:c,title:a,poster:"".concat(P).concat(r),overview:s,rating:i}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get(S,{params:{api_key:N,language:"en_US",page:1}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.genres);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get(E,{params:{api_key:N,language:"en_US",page:1,with_genres:t}});case 3:return n=e.sent,c=n.data,e.abrupt("return",c.results.map((function(e){var t=e.id,n=e.backdrop_path,c=e.popularith,a=e.title,r=e.poster_path,s=e.overview,i=e.vote_average;return{id:t,backPoster:"".concat(P).concat(n),popularity:c,title:a,poster:"".concat(P).concat(r),overview:s,rating:i}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get(T,{params:{api_key:N}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results.map((function(e){var t=e.id,n=e.name,c=e.popularity,a=e.profile_path,r=e.known_for_department;return{id:t,name:n,popularity:c,profile:"".concat(P).concat(a),known:r}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get(_,{params:{api_key:N,language:"en_US",page:1}});case 3:return t=e.sent,n=t.data,e.abrupt("return",n.results.map((function(e){var t=e.id,n=e.backdrop_path,c=e.popularith,a=e.title,r=e.poster_path,s=e.overview,i=e.vote_average;return{id:t,backPoster:"".concat(P).concat(n),popularity:c,title:a,poster:"".concat(P).concat(r),overview:s,rating:i}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c,a,r,s,i,o,d,j,u,p,b;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("".concat(I,"/").concat(t),{params:{api_key:N,language:"en_US"}});case 3:return n=e.sent,c=n.data,a=c.id,r=c.backdrop_path,s=c.title,i=c.genres,o=c.vote_average,d=c.overview,j=c.release_date,u=c.runtime,p=c.budget,b=c.homepage,e.abrupt("return",{id:a,genres:i,posterImage:"".concat(P).concat(r),title:s,vote_average:o,overview:d,release_date:j,runtime:u,budget:p,homepage:b});case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("".concat(I,"/").concat(t,"/videos"),{params:{api_key:N,language:"en_US"}});case 3:return n=e.sent,c=n.data,e.abrupt("return","".concat("https://www.youtube.com/watch?v=").concat(c.results[0].key));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("".concat(I,"/").concat(t,"/credits"),{params:{api_key:N,language:"en_US"}});case 3:return n=e.sent,c=n.data,e.abrupt("return",c.cast.map((function(e){var t=e.cast_id,n=e.name,c=e.character,a=e.profile_path;return{id:t,name:n,character:c,profile:"".concat(P).concat(a)}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.get("".concat(I,"/").concat(t,"/similar"),{params:{api_key:N,language:"en_US"}});case 3:return n=e.sent,c=n.data,e.abrupt("return",c.results.map((function(e){var t=e.id,n=e.backdrop_path,c=e.popularith,a=e.title,r=e.poster_path,s=e.overview,i=e.vote_average;return{id:t,backPoster:"".concat(P).concat(n),popularity:c,title:a,poster:"".concat(P).concat(r),overview:s,rating:i}})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();var G=function(e){var t=e.genres,n=m().setMoviesByGenre,c=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,R(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a=t.map((function(e,t){return Object(u.jsx)("li",{className:"list-inline-item",children:Object(u.jsx)("button",{type:"button",className:"btn btn-outline-info",onClick:function(){c(e.id)},children:e.name})},t)}));return Object(u.jsx)("div",{className:"row mt-3",children:Object(u.jsx)("div",{className:"col-12",children:Object(u.jsx)("ul",{className:"list-inline",children:a})})})},z=n(24),X=n.n(z),H=n(25),W=n.n(H);n(46),n(99);var Y=function(e){var t=e.movies.map((function(e){var t=e.id,n=e.title,c=e.poster,a=e.rating;return Object(u.jsxs)("div",{className:"movie-wrapper",children:[Object(u.jsx)("div",{className:"card",children:Object(u.jsx)(x.b,{to:"/movie/".concat(t),children:Object(u.jsx)("img",{className:"img-fluid",src:c,alt:n})})}),Object(u.jsxs)("div",{className:"mt-2",children:[Object(u.jsx)("p",{style:{fontWeight:"bolder"},children:n}),Object(u.jsxs)("p",{children:["Rated: ",a]}),Object(u.jsx)(X.a,{count:a,size:20,color1:"#f4c10f"})]})]},t)}));return Object(u.jsx)("div",{className:"row",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)(W.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:768},items:2},smallTablet:{breakpoint:{max:768,min:464},items:2},Mobile:{breakpoint:{max:464,min:0},items:1}},children:t})})})};n(100);var F=function(e){var t=e.persons.map((function(e){var t=e.id,n=e.name,c=e.profile,a=e.known,r=e.character;return Object(u.jsxs)("div",{className:"persons col text-center",children:[Object(u.jsx)("img",{className:"img-fluid rounded-circle mx-auto d-block",src:c,alt:n}),Object(u.jsx)("p",{className:"font-weight-bold text-center",children:n}),Object(u.jsxs)("p",{className:"font-weight-light text-center",style:{color:"#5a606b"},children:[a&&"Trending for ".concat(a),r&&"".concat(r)]})]},t)}));return Object(u.jsx)("div",{className:"row mt-3",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)(W.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:4},tablet:{breakpoint:{max:1024,min:768},items:2},smallTablet:{breakpoint:{max:768,min:464},items:2},Mobile:{breakpoint:{max:464,min:0},items:1}},children:t})})})},K=n(19);n(101);var J=function(){return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{className:"col-md-8 col-sm-6",children:[Object(u.jsx)("h3",{children:"ABOUT ME"}),Object(u.jsx)("p",{children:"I am Dina TAKLIT, a software engineer and a web developer who loves building web apps. I have a passion for Web development and Artificial Intelligence Field. I spend my time writing clean, well commented, organized, and optimized code."}),Object(u.jsxs)("ul",{className:"list-inline social-icons",children:[Object(u.jsx)("li",{className:"list-inline-item",children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/dina-taklit/",children:Object(u.jsx)(K.c,{})})}),Object(u.jsx)("li",{className:"list-inline-item",children:Object(u.jsx)("a",{href:"https://github.com/DinaTaklit",children:Object(u.jsx)(K.b,{})})}),Object(u.jsx)("li",{className:"list-inline-item",children:Object(u.jsx)("a",{href:"https://www.linkedin.com/in/dina-taklit/",children:Object(u.jsx)(K.e,{})})})]})]}),Object(u.jsxs)("div",{className:"col-md-4 col-sm-6",children:[Object(u.jsx)("h3",{children:"KEEP IN TOUCH"}),Object(u.jsxs)("ul",{className:"list-unstyled",children:[Object(u.jsx)("li",{children:Object(u.jsxs)("p",{children:[Object(u.jsxs)("strong",{children:[Object(u.jsx)("i",{className:"fas fa-map-marker-alt"})," Address:"]})," ","Setif, Algeria"]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("p",{children:[Object(u.jsxs)("strong",{children:[Object(u.jsx)("i",{className:"fas fa-map-marker-alt"})," Phone:"]})," ","+213 556 41 86 11"]})}),Object(u.jsx)("li",{children:Object(u.jsxs)("p",{children:[Object(u.jsxs)("strong",{children:[Object(u.jsx)("i",{className:"fas fa-envelope"})," Email:"]})," ","ez_taklit@esi.dz"]})})]})]})]})};n(102);var q=function(){return Object(u.jsx)("div",{className:"lading-container",children:Object(u.jsxs)("div",{class:"loading",children:[Object(u.jsx)("div",{class:"ring"}),Object(u.jsx)("div",{class:"ring"}),Object(u.jsx)("div",{class:"ring"}),Object(u.jsx)("p",{children:"Loading..."})]})})};var Q=function(){var e=m(),t=e.loading,n=e.setLoading,a=e.moviesByGenre,r=e.setMoviesByGenre,s=Object(c.useState)([]),i=Object(j.a)(s,2),o=i[0],p=i[1],b=Object(c.useState)([]),v=Object(j.a)(b,2),O=v[0],h=v[1],x=Object(c.useState)([]),f=Object(j.a)(x,2),N=f[0],w=f[1],k=Object(c.useState)([]),y=Object(j.a)(k,2),_=y[0],I=y[1];return Object(c.useEffect)((function(){n(!0),function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,M();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=h,e.next=8,L();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=r,e.next=13,R(28);case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=w,e.next=18,B();case 18:return e.t7=e.sent,(0,e.t6)(e.t7),e.t8=I,e.next=23,C();case 23:e.t9=e.sent,(0,e.t8)(e.t9),n(!1);case 26:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),t?Object(u.jsx)(q,{}):Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(g,{nowPlayingMovies:o}),Object(u.jsxs)("section",{className:"mt-5",children:[Object(u.jsx)(G,{genres:O}),Object(u.jsx)(Y,{movies:a})]}),Object(u.jsxs)("section",{className:"my-5",children:[Object(u.jsx)("p",{className:"font-weight-bold",style:{color:"#5a606b"},children:"TRENDING PERSONS ON THIS WEEK"}),Object(u.jsx)(F,{persons:N})]}),Object(u.jsxs)("section",{className:"my-5",children:[Object(u.jsx)("p",{className:"font-weight-bold",style:{color:"#5a606b"},children:"TOP RATED MOVIES"}),Object(u.jsx)(Y,{movies:_})]}),Object(u.jsx)("hr",{className:"mt-5",style:{borderTop:"1px solid #5a606b"}}),Object(u.jsx)("footer",{className:"mt-5",children:Object(u.jsx)(J,{})})]})},Z=(n(103),n(128)),$=n(51),ee=n.n($);function te(e){var t=e.title,n=e.posterVideo,c=m(),a=c.modalIsOpen,r=c.setModalIsOpen;return Object(u.jsxs)(Z.a,{show:a,onHide:function(){r(!1)},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,animation:!1,children:[Object(u.jsx)(Z.a.Header,{closeButton:!0,children:Object(u.jsx)(Z.a.Title,{id:"contained-modal-title-vcenter",style:{color:"#000000",fontWeight:"bolder"},children:t})}),Object(u.jsx)(Z.a.Body,{style:{backgroundColor:"#000000"},children:Object(u.jsx)(ee.a,{className:"container-fluid",url:n,playing:!0,width:"100%"})})]})}var ne=function(e){var t=e.movieDetail,n=e.posterVideo,c=t.title,a=t.posterImage,r=m().setModalIsOpen;return Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)(te,{title:c,posterVideo:n}),Object(u.jsxs)("div",{className:"movie-poster",children:[Object(u.jsx)(x.b,{to:"/",children:Object(u.jsx)(K.a,{className:"back-button"})}),Object(u.jsx)("img",{className:"img-fluid",src:a,alt:c}),Object(u.jsxs)("div",{className:"movie-body",children:[Object(u.jsx)("div",{children:Object(u.jsx)(K.d,{className:"play-icon",onClick:function(){r(!0)}})}),Object(u.jsx)("div",{className:"caption",children:c})]})]})]})})};var ce=function(e){var t=e.movieDetail,n=t.vote_average,c=t.overview,a=t.release_date,r=t.runtime,s=t.budget,i=t.homepage;return Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)("div",{className:"text-center",children:Object(u.jsx)(X.a,{className:"RateStar",count:n,size:24})}),Object(u.jsxs)("div",{className:"mt-3",children:[Object(u.jsx)("p",{className:"title",children:"OVERVIEW"}),c]}),Object(u.jsxs)("div",{className:"row mt-3",children:[Object(u.jsxs)("div",{className:"col-md-3",children:[Object(u.jsx)("p",{className:"title",children:"RELEASE DATE"}),Object(u.jsx)("p",{className:"movie-info",children:a})]}),Object(u.jsxs)("div",{className:"col-md-3",children:[Object(u.jsx)("p",{className:"title",children:"RUN TIME"}),Object(u.jsx)("p",{className:"movie-info",children:r})]}),Object(u.jsxs)("div",{className:"col-md-3",children:[Object(u.jsx)("p",{className:"title",children:"BUDGET"}),Object(u.jsx)("p",{className:"movie-info",children:s})]}),Object(u.jsxs)("div",{className:"col-md-3",children:[Object(u.jsx)("p",{className:"title",children:"HOMEPAGE"}),Object(u.jsx)("p",{className:"movie-info",children:i})]})]})]})})};var ae=function(e){var t=e.match,n=m(),a=n.loading,r=n.setLoading,s=Object(c.useState)({}),i=Object(j.a)(s,2),o=i[0],p=i[1],b=Object(c.useState)(""),v=Object(j.a)(b,2),O=v[0],h=v[1],x=Object(c.useState)(t.params.id),f=Object(j.a)(x,2),g=f[0],N=(f[1],Object(c.useState)([])),w=Object(j.a)(N,2),k=w[0],y=w[1],_=Object(c.useState)([]),I=Object(j.a)(_,2),S=I[0],E=I[1];return Object(c.useEffect)((function(){r(!0),function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,D(g);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=h,e.next=8,U(g);case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=y,e.next=13,A(g);case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=E,e.next=18,V(g);case 18:e.t7=e.sent,(0,e.t6)(e.t7);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),r(!1)}),[g]),a?Object(u.jsx)(q,{}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("main",{className:"container",children:[Object(u.jsx)(ne,{movieDetail:o,posterVideo:O}),o.genres&&Object(u.jsx)(G,{genres:o.genres}),Object(u.jsx)(ce,{movieDetail:o}),Object(u.jsxs)("div",{className:"mt-3",children:[Object(u.jsx)("p",{className:"title",children:"CASTS"}),Object(u.jsx)(F,{persons:k})]}),Object(u.jsxs)("div",{className:"mt-3",children:[Object(u.jsx)("p",{className:"title",children:"SIMILAR MOVIES"}),Object(u.jsx)(Y,{movies:S})]})]}),Object(u.jsx)("footer",{className:"container mt-5",children:Object(u.jsx)(J,{})})]})};var re=function(){return Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",component:Q,exact:!0}),Object(u.jsx)(i.a,{path:"/movie/:id",component:ae})]})};n(123),n(124);s.a.render(Object(u.jsx)(b,{children:Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(x.a,{children:Object(u.jsx)(re,{})})})}),document.getElementById("root"))},59:function(e,t,n){},64:function(e,t,n){},99:function(e,t,n){}},[[125,1,2]]]);
//# sourceMappingURL=main.371bd8a4.chunk.js.map