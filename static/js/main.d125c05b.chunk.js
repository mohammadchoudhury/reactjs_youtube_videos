(this.webpackJsonpyoutube_videos=this.webpackJsonpyoutube_videos||[]).push([[0],{44:function(e,t,i){},45:function(e,t,i){"use strict";i.r(t);var n=i(2),c=i.n(n),s=i(17),a=i.n(s),r=i(8),o=i.n(r),d=i(18),l=i(3),u=i(4),m=i(6),j=i(5),b=i(0),h=function(e){Object(m.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={term:""},e.onInputChange=function(t){e.setState({term:t.target.value})},e.onFormSubmit=function(t){t.preventDefault(),e.props.onFormSubmit(e.state.term)},e}return Object(u.a)(i,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"search-bar ui segment",children:Object(b.jsx)("form",{onSubmit:this.onFormSubmit,className:"ui form",children:Object(b.jsxs)("div",{className:"field",children:[Object(b.jsx)("label",{children:"Video Search"}),Object(b.jsx)("input",{type:"text",value:this.state.term,onChange:this.onInputChange})]})})})}}]),i}(c.a.Component),p=i(19),v=i.n(p).a.create({baseURL:"https://www.googleapis.com/youtube/v3",params:{part:"snippet",maxResults:5,safeSearch:"strict",type:"video",videoEmbeddable:!0,key:"AIzaSyB4qUsQuy1h5y1WnKymx-woNexTCb81Mpk"}}),x=(i(44),function(e){var t=e.video,i=e.onVideoSelect;return Object(b.jsxs)("div",{className:"video-item item",onClick:function(){return i(t)},children:[Object(b.jsx)("img",{className:"ui image",src:t.snippet.thumbnails.medium.url,alt:t.snippet.title}),Object(b.jsx)("div",{className:"content",children:Object(b.jsx)("div",{className:"header",children:t.snippet.title})})]})}),O=function(e){var t=e.videos,i=e.onVideoSelect,n=t.map((function(e){return Object(b.jsx)(x,{video:e,onVideoSelect:i},e.id.videoId)}));return Object(b.jsx)("div",{className:"ui relaxed divided list",children:n})},f=function(e){var t=e.video;if(!t)return Object(b.jsxs)("div",{className:"ui icon message",children:[Object(b.jsx)("i",{className:"notched circle loading icon"}),Object(b.jsxs)("div",{className:"content",children:[Object(b.jsx)("div",{className:"header",children:"Just one second"}),Object(b.jsx)("p",{children:"We're fetching that content for you."})]})]});var i="https://www.youtube.com/embed/".concat(t.id.videoId,"?autoplay=1");return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"ui embed",children:Object(b.jsx)("iframe",{title:"Video Player",src:i,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(b.jsxs)("div",{className:"ui segment",children:[Object(b.jsx)("h4",{className:"ui header",children:t.snippet.title}),Object(b.jsx)("p",{children:t.snippet.description})]})]})},y=function(e){Object(m.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(l.a)(this,i);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={videos:[],selectedVideo:null},e.onTermSubmit=function(){var t=Object(d.a)(o.a.mark((function t(i){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/search",{params:{q:i}});case 2:n=t.sent,e.setState({videos:n.data.items,selectedVideo:n.data.items[0]});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.onVideoSelect=function(t){e.setState({selectedVideo:t})},e}return Object(u.a)(i,[{key:"componentDidMount",value:function(){this.onTermSubmit("ReactJS")}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"ui container",style:{marginTop:"1em"},children:[Object(b.jsx)(h,{onFormSubmit:this.onTermSubmit}),Object(b.jsx)("div",{className:"ui grid stackable",children:Object(b.jsxs)("div",{className:"ui row",children:[Object(b.jsx)("div",{className:"sixteen wide tablet ten wide computer column",children:Object(b.jsx)(f,{video:this.state.selectedVideo})}),Object(b.jsx)("div",{className:"sixteen wide tablet six wide computer column",children:Object(b.jsx)(O,{videos:this.state.videos,onVideoSelect:this.onVideoSelect})})]})})," "]})}}]),i}(c.a.Component);a.a.render(Object(b.jsx)(y,{}),document.querySelector("#root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d125c05b.chunk.js.map