(this.webpackJsonpmovie_boxoffice=this.webpackJsonpmovie_boxoffice||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},24:function(e,t,a){},26:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(18),c=a.n(r),i=(a(24),a(6)),s=a.n(i),l=a(7),m=a(2),v=a(3),u=a(5),f=a(4),h=(a(26),a(8)),d=a.n(h),p=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={mvCode:""},e.getMoviePoster=Object(l.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.props.mvCode,"88e5912e2bfb079238ca7936c0322922",t.next=4,d.a.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json",{params:{key:"88e5912e2bfb079238ca7936c0322922"}}).then((function(e){var t=e;console.log(t)})).catch((function(e){console.log(e)}));case 4:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMoviePoster()}},{key:"render",value:function(){var e=this.state,t=e.moviePosterSrc,a=e.movieTitle,n=e.date,r=e.mvDirector,c=e.mvActor,i=e.mvUserRating,s=e.mvLink,l=e.mvGrade,m=a.replace(/(<([^>]+)>)/gi," "),v=r.replace("|",""),u=c.replace(/\|/g,",");return u=u.slice(0,-1),o.a.createElement("div",{className:"movieData"},o.a.createElement("img",{src:t,alt:a}),o.a.createElement("div",{className:"movieInnerData"},o.a.createElement("h4",{className:"moveiGrade"},l,"\uc704"),o.a.createElement("h3",{className:"movieTitle"},m),o.a.createElement("h2",{className:"movieRating"},i),o.a.createElement("h5",{className:"movieYear"}," ",n),o.a.createElement("h5",{className:"movieDirector"},"Director | ",v),o.a.createElement("h5",{className:"movieActor"},"Actor | ",u),o.a.createElement("h5",{className:"movieLink"},o.a.createElement("a",{href:s},"\uc601\ud654 \uc790\uc138\ud788\ubcf4\uae30"))))}}]),a}(n.Component);var b=function(e){var t=e.title,a=e.grade,n=e.date;return console.log(t),o.a.createElement("div",{className:"movie"},o.a.createElement(p,{movieTitle:t,movieDate:n,movieGrage:a}))},g=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return o.a.createElement("header",null,o.a.createElement("h1",null,"Movie \ubc15\uc2a4\uc624\ud53c\uc2a4",o.a.createElement("span",null,"6\uc6d4 3\uc77c\uc790")))}}]),a}(n.Component),E=function(e){Object(u.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={isLoding:!0,movies:[]},e.getMovies=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"88e5912e2bfb079238ca7936c0322922","20200603",e.next=4,d.a.get("https://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json",{params:{key:"88e5912e2bfb079238ca7936c0322922",targetDt:"20200603"}}).then((function(e){var t=e.data.boxOfficeResult.dailyBoxOfficeList;console.log(t),this.setState({movies:t,isLoding:!1})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoding,a=e.movies;return o.a.createElement("div",{className:"container"},o.a.createElement(g,null),t?o.a.createElement("div",{className:"loader"},o.a.createElement("span",{className:"loader_text"},"Loading.....")):o.a.createElement("div",{className:"movies"},a.map((function(e){return o.a.createElement(b,{key:e.rank,date:e.temporal,mvCode:e.movieCd,title:e.movieNm,grade:e.rank})}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("wrap")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.f73366e8.chunk.js.map