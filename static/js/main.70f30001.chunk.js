(this["webpackJsonpstudlife-training"]=this["webpackJsonpstudlife-training"]||[]).push([[0],{163:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),i=n.n(r),s=(n(65),n(43)),o=n(44),l=n(59),m=n(58),u=(n(66),n(76),n(80),n(81),n(8)),h=n.n(u),f=n(46),d=n.n(f),p=n(47),v=n.n(p),w=n(48),E=n.n(w),x=n(49),k=n.n(x),g=n(50),M=n.n(g),N=n(51),S=n.n(N),y=n(52),b=n.n(y),W=n(53),T=n.n(W),A=n(54),R=n.n(A),U=n(55),C=n.n(U),j=n(56),O=n.n(j),B=n(57),I=n.n(B),J=(n(163),function(e){Object(l.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).refWelcome=c.a.createRef(),a.refEthics=c.a.createRef(),a.refWashU=c.a.createRef(),a.refWritingReporting=c.a.createRef(),a.refWritingExperience=c.a.createRef(),a.refSubmit=c.a.createRef(),a.handleScrollTo=function(e){(e.current?e.current:e).scrollIntoView({behavior:"smooth",block:"start"})},a.state={reportingText:null},a.state={reportingActivityMarkdown:null},a.state={newsMarkdown:null},a.state={newsActivityMarkdown:null},a.state={experienceMarkdown:null},a.state={experienceActivityMarkdown:null},a.state={washUMarkdown:null},a.state={washUActivityMarkdown:null},a.state={ethicsMarkdown:null},a.state={welcomeMarkdown:null},a.state={submissionMarkdown:null},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({loaded:!0}),fetch(d.a).then((function(e){return e.text()})).then((function(t){e.setState({reportingText:t})})),fetch(v.a).then((function(e){return e.text()})).then((function(t){e.setState({reportingActivityMarkdown:t})})),fetch(E.a).then((function(e){return e.text()})).then((function(t){e.setState({newsMarkdown:t})})),fetch(k.a).then((function(e){return e.text()})).then((function(t){e.setState({newsActivityMarkdown:t})})),fetch(M.a).then((function(e){return e.text()})).then((function(t){e.setState({experienceMarkdown:t})})),fetch(S.a).then((function(e){return e.text()})).then((function(t){e.setState({experienceActivityMarkdown:t})})),fetch(b.a).then((function(e){return e.text()})).then((function(t){e.setState({washUMarkdown:t})})),fetch(T.a).then((function(e){return e.text()})).then((function(t){e.setState({washUActivityMarkdown:t})})),fetch(R.a).then((function(e){return e.text()})).then((function(t){e.setState({ethicsMarkdown:t})})),fetch(C.a).then((function(e){return e.text()})).then((function(t){e.setState({welcomeMarkdown:t})})),fetch(O.a).then((function(e){return e.text()})).then((function(t){e.setState({submissionMarkdown:t})}))}},{key:"executeOnClick",value:function(e){console.log(e)}},{key:"render",value:function(){var e=this;return c.a.createElement("article",null,c.a.createElement("nav",null,c.a.createElement("div",{className:"sidebar-css"},c.a.createElement("ul",null,c.a.createElement("li",{onClick:function(){e.handleScrollTo(e.refWelcome)},className:"nav-header"},"Welcome"),c.a.createElement("li",{onClick:function(){e.handleScrollTo(e.refEthics)},className:"nav-header"},"Reporting and Ethics"),c.a.createElement("li",{onClick:function(){e.handleScrollTo(e.refWashU)},className:"nav-header"},"Washington University 101"),c.a.createElement("li",{onClick:function(){e.handleScrollTo(e.refWritingReporting)},className:"nav-header"},"Writing from Reporting"),c.a.createElement("li",{onClick:function(){e.handleScrollTo(e.refWritingExperience)},className:"nav-header"},"Writing from Experience"),c.a.createElement("li",{onClick:function(){e.handleScrollTo(e.refSubmit)},className:"nav-header"},"Submit")))),c.a.createElement("div",{className:"main-css"},c.a.createElement("div",{className:"spacer"}),c.a.createElement("div",{ref:this.refWelcome},c.a.createElement("h2",{className:"main-header"},"Welcome to Student Life"),c.a.createElement(h.a,{className:"header-content",source:this.state.welcomeMarkdown})),c.a.createElement("div",{className:"spacer"}),c.a.createElement("div",{ref:this.refEthics},c.a.createElement("h2",{className:"nav-content-header"},"Reporting Basics"),c.a.createElement(h.a,{className:"nav-content",source:this.state.reportingText}),c.a.createElement(h.a,{className:"nav-content",source:this.state.ethicsMarkdown}),c.a.createElement("a",{href:"spj.org/ethicscode.asp#:~:text=Ethical%20journalism%20should%20be%20accurate,the%20accuracy%20of%20their%20work."},c.a.createElement("img",{src:I.a,class:"img"})," "),c.a.createElement(h.a,{className:"nav-content",source:this.state.reportingActivityMarkdown})),c.a.createElement("div",{className:"spacer"}),c.a.createElement("div",{ref:this.refWashU},c.a.createElement("h2",{className:"nav-content-header"},"Washington University 101"),c.a.createElement(h.a,{className:"nav-content",source:this.state.washUMarkdown}),c.a.createElement(h.a,{className:"nav-content",source:this.state.washUActivityMarkdown})),c.a.createElement("div",{className:"spacer"}),c.a.createElement("div",{ref:this.refWritingReporting},c.a.createElement("h2",{className:"nav-content-header"},"Writing from Reporting"),c.a.createElement(h.a,{className:"nav-content",source:this.state.newsMarkdown}),c.a.createElement(h.a,{className:"nav-content",source:this.state.newsActivityMarkdown})),c.a.createElement("div",{ref:this.refWritingExperience},c.a.createElement("h2",{className:"nav-content-header"},"Writing from Experience"),c.a.createElement(h.a,{className:"nav-content",source:this.state.experienceMarkdown}),c.a.createElement(h.a,{className:"nav-content",source:this.state.experienceActivityMarkdown})),c.a.createElement("div",{ref:this.refSubmit},c.a.createElement("h2",{className:"nav-content-header"},"Submit"),c.a.createElement(h.a,{className:"nav-content",source:this.state.submissionMarkdown}))))}}]),n}(a.Component));var D=function(){return c.a.createElement("div",{className:"root"},c.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,n){e.exports=n.p+"static/media/reportingText.4e95dd64.md"},47:function(e,t,n){e.exports=n.p+"static/media/reportingActivity.4ee9e07b.md"},48:function(e,t,n){e.exports=n.p+"static/media/newsText.67330a17.md"},49:function(e,t,n){e.exports=n.p+"static/media/newsActivity.e8e3e46c.md"},50:function(e,t,n){e.exports=n.p+"static/media/experienceText.3d8f9aaf.md"},51:function(e,t,n){e.exports=n.p+"static/media/experienceActivity.316743f8.md"},52:function(e,t,n){e.exports=n.p+"static/media/washUText.df4f0885.md"},53:function(e,t,n){e.exports=n.p+"static/media/washUActivity.53b8e30f.md"},54:function(e,t,n){e.exports=n.p+"static/media/ethicsText.cfc97994.md"},55:function(e,t,n){e.exports=n.p+"static/media/welcomeText.916f0518.md"},56:function(e,t,n){e.exports=n.p+"static/media/submissionText.f344986a.md"},57:function(e,t,n){e.exports=n.p+"static/media/spj-code-of-ethics.b008ed06.png"},60:function(e,t,n){e.exports=n(164)},65:function(e,t,n){},80:function(e,t,n){e.exports=n.p+"static/media/Montserrat-Regular.ee653992.ttf"}},[[60,1,2]]]);
//# sourceMappingURL=main.70f30001.chunk.js.map