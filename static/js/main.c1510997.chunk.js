(this.webpackJsonpmovie_boxoffice=this.webpackJsonpmovie_boxoffice||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(18),i=a.n(o),c=(a(24),a(6)),s=a.n(c),m=a(7),l=a(2),v=a(3),u=a(5),d=a(4),f=(a(26),a(8)),p=a.n(f),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(l.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={moviePosterSrc:"img",movieTitle:"title",date:"pubDate",mvDirector:"director",mvActor:"actor",mvUserRating:0,mvLink:"link",mvGrade:"grade"},e.getMoviePoster=Object(m.a)(s.a.mark((function t(){var a,r,n,o;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.movieTitle,r=e.props.movieGrage,t.next=4,p.a.get("http://127.0.0.1:3001/search",{params:{query:a}});case 4:n=t.sent,o=n.data.items,console.log(o[0]),e.setState({moviePosterSrc:o[0].image,movieTitle:o[0].title,date:o[0].pubDate,mvDirector:o[0].director,mvActor:o[0].actor,mvUserRating:parseFloat(o[0].userRating),mvLink:o[0].link,mvGrade:r});case 8:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMoviePoster()}},{key:"render",value:function(){var e=this.state,t=e.moviePosterSrc,a=e.movieTitle,r=e.date,o=e.mvDirector,i=e.mvActor,c=e.mvUserRating,s=e.mvLink,m=e.mvGrade,l=a.replace(/(<([^>]+)>)/gi," "),v=o.replace("|",""),u=i.replace(/\|/g,",");return u=u.slice(0,-1),n.a.createElement("div",{className:"movieData"},n.a.createElement("img",{src:t,alt:a}),n.a.createElement("div",{className:"movieInnerData"},n.a.createElement("h4",{className:"moveiGrade"},m,"\uc704"),n.a.createElement("h3",{className:"movieTitle"},l),n.a.createElement("h2",{className:"movieRating"},c),n.a.createElement("h5",{className:"movieYear"}," ",r),n.a.createElement("h5",{className:"movieDirector"},"Director | ",v),n.a.createElement("h5",{className:"movieActor"},"Actor | ",u),n.a.createElement("h5",{className:"movieLink"},n.a.createElement("a",{href:s},"\uc601\ud654 \uc790\uc138\ud788\ubcf4\uae30"))))}}]),a}(r.Component);var g=function(e){var t=e.title,a=e.grade,r=e.date;return console.log(t),n.a.createElement("div",{className:"movie"},n.a.createElement(h,{movieTitle:t,movieDate:r,movieGrage:a}))},b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return n.a.createElement("header",null,n.a.createElement("h1",null,"Movie \ubc15\uc2a4\uc624\ud53c\uc2a4",n.a.createElement("span",null,"6\uc6d4 3\uc77c\uc790")))}}]),a}(r.Component),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(l.a)(this,a),(r=t.call(this,e)).getMovies=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"88e5912e2bfb079238ca7936c0322922","20200603",t=[],e.next=5,p.a.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",{params:{key:"88e5912e2bfb079238ca7936c0322922",targetDt:"20200603"}}).then((function(e){t=e.data.boxOfficeResult.dailyBoxOfficeList,console.log(t)})).catch((function(e){console.log(e)}));case 5:r.setState({movies:t,isLoding:!1});case 6:case"end":return e.stop()}}),e)}))),r.state={isLoding:!0,movies:[]},r}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,a=e.movies;return n.a.createElement("div",{className:"container"},n.a.createElement(b,null),t?n.a.createElement("div",{className:"loader"},n.a.createElement("span",{className:"loader_text"},"Loading.....")):n.a.createElement("div",{className:"movies"},a.map((function(e){return n.a.createElement(g,{key:e.rank,date:e.temporal,mvCode:e.movieCd,title:e.movieNm,grade:e.rank})}))))}}]),a}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("wrap")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.c1510997.chunk.js.map