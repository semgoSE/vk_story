(this["webpackJsonpvk-app-edition-story"]=this["webpackJsonpvk-app-edition-story"]||[]).push([[0],{156:function(e,t,a){e.exports=a(263)},263:function(e,t,a){"use strict";a.r(t);a(157),a(183),a(185),a(186),a(188),a(189),a(190),a(191),a(192),a(193),a(194),a(195),a(197),a(198),a(199),a(200),a(201),a(202),a(203),a(204),a(205),a(206),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222),a(223),a(224),a(225);var n=a(0),o=a.n(n),r=a(59),l=a.n(r),c=a(38),i=a.n(c),s=a(39),m=a(21),u=a(97),d=a(98),f=a(125),g=a(124),p=a(37),h=a.n(p),_=a(99),E=a.n(_),v=a(100),y=a.n(v),C=a(101),w=a.n(C),S=a(102),b=a.n(S),j=a(103),k=a.n(j),x=a(104),O=a.n(x),z=a(105),M=a.n(z),N=a(106),J=a.n(N),T=a(107),q=a.n(T),V=a(108),I=a.n(V),H=(a(234),a(109)),P=a(2),B=(a(245),a(23)),A=a.n(B),F={borderRadius:"30%",borderColor:"black"},L=function(e){var t=e.answer,a=e.next,n=e.go;return o.a.createElement(P.e,{size:"l"},o.a.createElement("div",{style:F},o.a.createElement(P.g,{onClick:n,asideContent:o.a.createElement(P.i,{mode:null==a||0==a?"prominent":"primary"},null==a||0==a?"!":a),multiline:!0,style:{textAlign:"left"}},t)))},D=new H.VKMiniAppAPI,R=Object(P.N)(),K="https://api-bot-php.000webhostapp.com/api/",U="https://api-bot-php.000webhostapp.com/",W=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).get_my_projects=function(){n.setState({load:!0}),A.a.post(K,JSON.stringify({url:window.location.href,event:"get_my_create_projects",offset:n.state.offse_my_projects})).then((function(e){console.log(e),n.setState({create_story:{bool:e.data.bool,data:n.state.create_story.concat(e.data)},load:!1}),0!==e.data.data.length&&n.setState({offse_my_projects:n.state.offse_my_projects+1})}))},n.onChange=function(e){var t=e.currentTarget,a=t.name,o=t.value;n.setState({form:Object(m.a)({},n.state.form,Object(s.a)({},a,o))})},n.create_story=function(e){n.setState({popout:o.a.createElement(P.B,null)}),A.a.post(K,JSON.stringify(Object(m.a)({event:"create_project"},n.state.form,{url:window.location.href}))).then((function(e){console.log(e),n.state.create_story.push(Object(m.a)({},n.state.form,{project_id:e.data})),n.setState({activeModal:null,popout:null,form:{name:"",description:"",fandom:null,count:0}})}))},n.create_route=function(e){n.setState({popout:o.a.createElement(P.B,null)});var t,a=n.state.form;t=null==a.img?0:1;var r={text:a.text,img:t};a.count>=1&&(r.answer_1=a.answer_1),a.count>=2&&(r.answer_2=a.answer_2),a.count>=3&&(r.answer_3=a.answer_3),r.project_id=n.state.project_id,r.count=a.count,A.a.post(K,JSON.stringify(Object(m.a)({event:"create_route",url:window.location.href},a,{project_id:n.state.project_id}))).then((function(e){console.log(e),r.id=e.data,n.state.tree_story.data.unshift(r),n.setState({popout:null,activeModal:null,form:{name:"",description:"",fandom:null,count:0}})})),console.log(n.state.tree_story)},n.setNext=function(e){var t;n.setState({popout:o.a.createElement(P.B,null)});for(var a=0;a<n.state.tree_story.data.length;a++)if(n.state.tree_story.data[a].id==n.state.current_route){t=a;break}A.a.post(K,JSON.stringify({event:"setNext",url:window.location.href,project_id:n.state.project_id,id:n.state.current_route,next_route:e,next:n.state.current_next})).then((function(a){console.log(a);var o=n.state.tree_story.data[t];switch(console.log(o),n.state.current_next){case 1:o.next_1=e;break;case 2:o.next_2=e;break;case 3:o.next_3=e}n.state.tree_story.data.splice(t,1,o),n.setState({activeView:"main",popout:null})}))},n.loadImage=function(e){var t=new FileReader,a=document.getElementById(e).files[0];console.log(a),"undefined"!=typeof a?(console.log(a.type),"image/png"==a.type||"image/jpeg"==a.type?(t.readAsDataURL(a),t.onload=function(){n.setState({form:Object(m.a)({},n.state.form,{img:t.result})})}):n.setState({snackbar:o.a.createElement(P.G,{onClose:function(){return n.setState({snackbar:null})}},"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b \u0442\u0438\u043f  \u0444\u0430\u0439\u043b\u0430")})):n.setState({snackbar:o.a.createElement(P.G,{onClose:function(){return n.setState({snackbar:null})}},"\u0412\u044b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0444\u0430\u0439\u043b")})},n.loadImageEditor=function(){var e=new FileReader,t=document.getElementById("image_editor").files[0];"undefined"!=typeof t&&(e.readAsDataURL(t),e.onload=function(){n.setState({form_edit:Object(m.a)({},n.state.form_edit,{img:1,new_img:e.result})})})},n.load=function(e,t){n.setState({activePanel:"tree_story"}),A.a.post(K,JSON.stringify({event:"get_routes",project_id:e,url:window.location.href,offset:0})).then((function(a){console.log(a),n.setState({project_id:e,tree_story:a.data,watch:t,offset_tree:1})}))},n.get_fandoms=function(e){A.a.post(K,JSON.stringify({event:"search",page:n.state.page,q:n.state.q,url:window.location.href})).then((function(e){console.log(e),0==n.state.page&&n.setState({fandoms:e.data,page:1}),n.setState({fandoms:Object(m.a)({},n.state.fandoms,{data:n.state.fandoms.data.concat(e.data)}),page:n.state.page+1})}))},n.loadOffset=function(){n.setState({load:!0}),A.a.post(K,JSON.stringify({event:"get_routes",project_id:n.state.project_id,url:window.location.href,offset:n.state.offset_tree})).then((function(e){console.log(e),n.setState({load:!1}),e.data.data.length>0&&n.setState({offset_tree:n.state.offset_tree+1,tree_story:{bool:e.data.bool,data:n.state.tree_story.data.concat(e.data.data)}})}))},n.onSet=function(e){var t=e.currentTarget,a=t.name,o=t.value;n.setState({form_edit:Object(m.a)({},n.state.form_edit,Object(s.a)({},a,o))})},n.save_edit_route=function(e){var t;n.setState({popout:o.a.createElement(P.B,null)});for(var a=0;a<n.state.tree_story.length;a++)if(n.state.tree_story[a].id==n.state.form_edit.id){t=a;break}A.a.post(K,JSON.stringify(Object(m.a)({event:"set_route"},n.state.form_edit,{url:window.location.href}))).then((function(e){console.log(e),n.state.tree_story.splice(t,1,n.state.form_edit),n.setState({activeModal:null,popout:null})}))},n.delete_route=function(){var e;n.setState({popout:o.a.createElement(P.B,null)});for(var t=0;t<n.state.tree_story.length;t++)if(n.state.tree_story[t].id==n.state.form_edit.id){e=t;break}A.a.post(K,JSON.stringify(Object(m.a)({event:"delete_route"},n.state.form_edit,{url:window.location.href}))).then((function(t){console.log(t),n.state.tree_story.splice(e,1),n.setState({activeModal:null,popout:null})}))},n.delete_project=function(){var e;n.setState({popout:o.a.createElement(P.B,null)});for(var t=0;t<n.state.create_story.data.length;t++)if(n.state.create_story.data[t].project_id==n.state.project_id){e=t;break}A.a.post(K,JSON.stringify({event:"delete_project",url:window.location.href,project_id:n.state.project_id})).then((function(t){console.log(t),n.state.create_story.data.splice(e,1),n.setState({activePanel:"main",project_id:null,popout:null})}))},n.onChangeSearch=function(e){var t=e.currentTarget,a=t.name,o=t.value;n.setState(Object(s.a)({},a,o)),A.a.post(K,JSON.stringify({event:"search",q:o,page:0,url:window.location.href})).then((function(e){console.log(e),n.setState({fandoms:e.data,page:1,q:o})}))},n.set_view=function(e){for(var t,a=0;a<n.state.create_story.length;a++)if(n.state.create_story[a].project_id==n.state.project_id){t=a;break}var r=n.state.create_story[t];n.setState({popout:o.a.createElement(P.B,null)}),A.a.post(K,JSON.stringify({event:"set_view",project_id:n.state.project_id,url:window.location.href,view:e})).then((function(e){console.log(e),r.watch=e.data,n.state.create_story.splice(t,1,r),n.setState({watch:e.data,popout:null})}))},n.go_menu=function(){n.setState({popout:o.a.createElement(P.a,{onClose:function(){return n.setState({popout:null})}},o.a.createElement(P.b,{autoclose:!0,disabled:!0},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"),1==n.state.watch?o.a.createElement(P.b,{autoclose:!0,before:o.a.createElement(q.a,null),onClick:function(){return n.set_view(0)}},"\u0421\u043a\u0440\u044b\u0442\u044c \u0438\u0437 \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430"):o.a.createElement(P.b,{autoclose:!0,before:o.a.createElement(I.a,null),onClick:function(){return n.set_view(1)}},"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432 \u043e\u0431\u0449\u0435\u043c \u0441\u043f\u0438\u0441\u043a\u0435"),o.a.createElement(P.b,{autoclose:!0,before:o.a.createElement(b.a,null),onClick:n.delete_project},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"),R===P.p&&o.a.createElement(P.b,{autoclose:!0,mode:"cancel"},"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"))})},n.goTo=function(e){D.getUserInfo().then((function(t){D.allowCommunityMessages(123568924).then((function(){D.sendPayloadToCommunity(123568924,{command:"input_story",project_id:e,user_id:t.id})}))}))},n.state={activeView:"main",activePanel:"main",activeTab:"user",snackbar:null,create_story:null,all_story:null,tree_story:null,watch:0,load:!1,page:0,offse_my_projects:0,offset_tree:0,fandoms:null,form:{name:"",description:"",fandom:null,count:0},form_edit:{},current_route:null,current_next:null,settings:{}},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;A.a.post(K,JSON.stringify({url:window.location.href,event:"get_my_create_projects",offset:this.state.offse_my_projects})).then((function(t){console.log(t),e.setState({create_story:t.data})})),A.a.post(K,JSON.stringify({event:"get_projects",url:window.location.href})).then((function(t){console.log(t),e.setState({all_story:t.data,offse_my_projects:1})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.activePanel,n=t.activeTab,r=t.activeModal,l=t.activeView,c=t.form,i=t.form_edit;return o.a.createElement(P.A,{activeView:l},o.a.createElement(P.M,{id:"main",activePanel:a,popout:this.state.popout,header:!1,modal:o.a.createElement(P.u,{activeModal:r},o.a.createElement(P.s,{id:"create_story",header:o.a.createElement(P.t,{right:o.a.createElement(P.j,null,o.a.createElement(h.a,{onClick:function(){return e.setState({activeModal:null})}}))},"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u0439"),onClose:function(){return e.setState({activeModal:null})},dynamicContentHeight:!0,settlingHeight:100},o.a.createElement(P.l,null,o.a.createElement(P.m,{top:"\u0424\u043e\u0442\u043e",align:"center"},null==c.img?null:o.a.createElement(P.c,{src:c.img,size:72,mode:"image"}),o.a.createElement(P.k,{id:"image_story",mode:"outline",onChange:function(){return e.loadImage("image_story")},accept:"image/jpeg,image/png"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),o.a.createElement(P.m,{top:"\u041d\u0430\u0437\u0430\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"},o.a.createElement(P.q,{name:"name",onChange:this.onChange,value:c.name})),o.a.createElement(P.m,{top:"\u0424\u0430\u043d\u0434\u043e\u043c"},o.a.createElement(P.E,{onClick:function(){e.setState({activeView:"fandom"}),e.get_fandoms(0)},placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d"},c.fandom)),o.a.createElement(P.m,{top:"\u0422\u0438\u043f"},o.a.createElement(P.D,{name:"type",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0442\u0438\u043f",onChange:this.onChange,value:c.type},o.a.createElement("option",{value:"book",onChange:this.onChange},"\u041f\u043e \u043a\u043d\u0438\u0433\u0435"),o.a.createElement("option",{value:"film",onChange:this.onChange},"\u041f\u043e \u0444\u0438\u043b\u044c\u043c\u0443"),o.a.createElement("option",{value:"play",onChange:this.onChange},"\u041f\u043e \u0438\u0433\u0440\u0435"),o.a.createElement("option",{value:"other",onChange:this.onChange},"\u0414\u0440\u0443\u0433\u043e\u0435"))),o.a.createElement(P.m,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},o.a.createElement(P.L,{name:"description",onChange:this.onChange,value:c.description})),o.a.createElement(P.d,{size:"xl",onClick:this.create_story,disabled:""==c.name||null==c.type},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c!"))),o.a.createElement(P.s,{id:"edit_story",header:o.a.createElement(P.t,null,o.a.createElement(h.a,{onClick:function(){return e.setState({activeModal:null})}})),onClose:function(){return e.setState({activeModal:null})}},o.a.createElement(P.m,{top:"\u0424\u043e\u0442\u043e",align:"center"},null==c.img?null:o.a.createElement(P.c,{src:c.img,size:72,mode:"image"}),o.a.createElement(P.k,{id:"image_story",mode:"outline",onChange:function(){return e.loadImage("image_story")},accept:"image/jpeg,image/png"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),o.a.createElement(P.m,{top:"\u041d\u0430\u0437\u0430\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"},o.a.createElement(P.q,{name:"name",onChange:this.onChange,value:c.name})),o.a.createElement(P.m,{top:"\u0424\u0430\u043d\u0434\u043e\u043c"},o.a.createElement(P.E,{onClick:function(){e.setState({activeView:"fandom"}),e.get_fandoms(0)},placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d"},i.fandom)),o.a.createElement(P.m,{top:"\u0422\u0438\u043f"},o.a.createElement(P.D,{name:"type",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0442\u0438\u043f",onChange:this.onChange,value:c.type},o.a.createElement("option",{value:"book",onChange:this.onChange},"\u041f\u043e \u043a\u043d\u0438\u0433\u0435"),o.a.createElement("option",{value:"film",onChange:this.onChange},"\u041f\u043e \u0444\u0438\u043b\u044c\u043c\u0443"),o.a.createElement("option",{value:"play",onChange:this.onChange},"\u041f\u043e \u0438\u0433\u0440\u0435"),o.a.createElement("option",{value:"other",onChange:this.onChange},"\u0414\u0440\u0443\u0433\u043e\u0435"))),o.a.createElement(P.m,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},o.a.createElement(P.L,{name:"description",onChange:this.onChange,value:c.description}))),o.a.createElement(P.s,{id:"create_route",header:o.a.createElement(P.t,{right:o.a.createElement(P.j,null,o.a.createElement(h.a,{onClick:function(){return e.setState({activeModal:null})}}))},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 route"),onClose:function(){return e.setState({activeModal:null})},dynamicContentHeight:!0},o.a.createElement(P.l,null,o.a.createElement(P.m,{top:"\u0424\u043e\u0442\u043e",align:"center"},null==c.img?null:o.a.createElement("div",null,o.a.createElement(P.c,{src:c.img,size:72,mode:"image"}),o.a.createElement(P.d,{mode:"destructive",style:{margin:5},onClick:function(){return e.setState({form:Object(m.a)({},c,{img:null})})}},o.a.createElement(h.a,null))),o.a.createElement(P.k,{id:"image_route",accept:"image/jpeg,image/png",mode:"outline",onChange:function(){return e.loadImage("image_route")}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),o.a.createElement(P.m,{top:"\u0422\u0435\u043a\u0441\u0442"},o.a.createElement(P.L,{name:"text",onChange:this.onChange})),o.a.createElement(P.F,{step:1,max:3,min:0,onChange:function(t){return e.setState({form:Object(m.a)({},e.state.form,{count:t})})},bottom:c.count}),o.a.createElement(P.m,{top:"\u041e\u0442\u0432\u0435\u0442\u044b"},c.count>=1?o.a.createElement(P.q,{name:"answer_1",placeholder:"1 \u041e\u0442\u0432\u0435\u0442",onChange:this.onChange}):null,c.count>=2?o.a.createElement(P.q,{name:"answer_2",placeholder:"2 \u041e\u0442\u0432\u0435\u0442",onChange:this.onChange}):null,c.count>=3?o.a.createElement(P.q,{name:"answer_3",placeholder:"3 \u041e\u0442\u0432\u0435\u0442",onChange:this.onChange}):null),o.a.createElement(P.d,{onClick:this.create_route,disabled:null==c.text||""==c.text,size:"xl"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")),this.state.snackbar),o.a.createElement(P.s,{id:"edit_route",header:o.a.createElement(P.t,{right:o.a.createElement(P.j,null,o.a.createElement(h.a,{onClick:function(){return e.setState({activeModal:null})}})),left:o.a.createElement(P.j,null,o.a.createElement(M.a,{onClick:this.delete_route,fill:"var(--accent)"}))},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),onClose:function(){return e.setState({activeModal:null})},dynamicContentHeight:!0},o.a.createElement(P.l,null,o.a.createElement(P.m,{align:"center"},1==i.img?o.a.createElement("div",null,o.a.createElement(P.c,{src:null==i.new_img?U+i.project_id+"_"+i.id+".png":i.new_img,size:120,mode:"image"}),o.a.createElement(P.d,{mode:"destructive",style:{margin:5},onClick:function(){return e.setState({form_edit:Object(m.a)({},i,{img:0})})}},o.a.createElement(h.a,null))):null,o.a.createElement(P.k,{id:"image_editor",accept:"image/jpeg,image/png",mode:"outline",onChange:this.loadImageEditor},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),o.a.createElement(P.m,{top:"\u0422\u0435\u043a\u0441\u0442"},o.a.createElement(P.L,{name:"text",onChange:this.onSet,value:i.text})),o.a.createElement(P.F,{step:1,max:3,min:0,value:i.count,onChange:function(t){return e.setState({form_edit:Object(m.a)({},e.state.form_edit,{count:t})})},bottom:i.count}),o.a.createElement(P.m,{top:"\u041e\u0442\u0432\u0435\u0442\u044b"},i.count>=1?o.a.createElement(P.q,{name:"answer_1",placeholder:"1 \u041e\u0442\u0432\u0435\u0442",value:i.answer_1,onChange:this.onSet}):null,i.count>=2?o.a.createElement(P.q,{name:"answer_2",placeholder:"2 \u041e\u0442\u0432\u0435\u0442",value:i.answer_2,onChange:this.onSet}):null,i.count>=3?o.a.createElement(P.q,{name:"answer_3",placeholder:"3 \u041e\u0442\u0432\u0435\u0442",value:i.answer_3,onChange:this.onSet}):null),o.a.createElement(P.d,{onClick:this.save_edit_route,size:"xl"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))},o.a.createElement(P.v,{id:"main"},"creator"===n?o.a.createElement(P.y,{left:o.a.createElement(P.x,{onClick:function(){return e.setState({activeModal:"create_story"})}},o.a.createElement(k.a,null))},"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0438\u0441\u0442\u043e\u0440\u0438\u0439"):o.a.createElement(P.y,null,"\u0418\u0441\u0442\u043e\u0440\u0438\u0438 \u0432 \u0412\u041a"),o.a.createElement(P.J,null,o.a.createElement(P.K,{selected:"user"===n,onClick:function(){return e.setState({activeTab:"user"})}},"\u041f\u043e\u043b\u044c\u0437\u0432\u0430\u0442\u0435\u043b\u044c"),o.a.createElement(P.K,{selected:"creator"===n,onClick:function(){return e.setState({activeTab:"creator"})}},"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c")),"creator"===n?o.a.createElement(P.j,null,null==this.state.create_story?o.a.createElement(P.H,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):o.a.createElement("div",null,0==this.state.create_story.length?o.a.createElement(P.z,{header:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442",action:o.a.createElement(P.d,{size:"l",onClick:function(){return e.setState({activeModal:"create_story"})}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e")},"\u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u0442\u043e\u0440\u0438\u0439"):o.a.createElement("div",null,o.a.createElement(P.r,null,this.state.create_story.data.map((function(t){return o.a.createElement(P.g,{key:t.story_id,before:o.a.createElement(P.c,{src:t.img,type:"image"}),onClick:function(){return e.load(t.project_id,t.watch)},indicator:t.project_id},t.name)}))),this.state.create_story.bool?o.a.createElement(P.d,null,"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435"):null))):o.a.createElement("div",null,null==this.state.all_story?o.a.createElement(P.H,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):o.a.createElement(P.f,null,this.state.all_story.map((function(t){return o.a.createElement(P.e,{size:"l"},o.a.createElement("div",{align:"center"},o.a.createElement(P.o,{aside:o.a.createElement(P.i,{mode:"secondary"},t.project_id)}),o.a.createElement(P.c,{src:t.img,size:100,style:{marginTop:10}}),o.a.createElement("h1",{style:{fontSize:30,fontWeight:"bold",margin:15}},t.name),o.a.createElement("span",null,t.description),o.a.createElement(P.j,null,o.a.createElement(P.d,{size:"l",mode:"outline",onClick:function(){return e.goTo(t.project_id)},href:"https://vk.com/im?sel=-123568924"},"\u041d\u0430\u0447\u0430\u0442\u044c"))))})))),this.state.snackbar),o.a.createElement(P.v,{id:"tree_story"},o.a.createElement(P.y,{left:o.a.createElement(o.a.Fragment,null,o.a.createElement(P.w,{onClick:function(){return e.setState({activePanel:"main",tree_story:null,offset_tree:0})}}),o.a.createElement(P.x,{onClick:this.go_menu},o.a.createElement(O.a,null)))},"\u0414\u0435\u0440\u0435\u0432\u043e \u0438\u0441\u0442\u043e\u0440\u0438\u0438"),null==this.state.tree_story?o.a.createElement(P.H,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):o.a.createElement(P.j,null,0==this.state.tree_story.data.length?o.a.createElement(P.z,{header:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435",action:o.a.createElement(P.d,{size:"l",onClick:function(){return e.setState({activeModal:"create_route"})},mode:"commerce"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u043e\u0443\u0442")},"\u0441 \u0447\u0438\u0441\u0442\u043e\u0433\u043e \u043b\u0438\u0441\u0442\u0430"):o.a.createElement("div",null,o.a.createElement(P.h,{onClick:function(){return e.setState({activeModal:"create_route"})},before:o.a.createElement(w.a,null),align:"center"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),o.a.createElement(P.f,null,o.a.createElement("div",null,this.state.tree_story.data.map((function(t,a){return o.a.createElement(P.e,{size:"l"},o.a.createElement("div",{align:"center"},o.a.createElement(P.o,{aside:o.a.createElement(J.a,{style:{top:5},onClick:function(){return e.setState({form_edit:e.state.tree_story[a],activeModal:"edit_route"})}})},"route_id: "+t.id),1==t.img?o.a.createElement(P.c,{src:U+t.project_id+"_"+t.id+".png",mode:"image"}):null,o.a.createElement("p",{style:{textAlign:"center",fontSize:20,padding:10,margin:0,fontWeight:"bold"}},t.text),t.count>=1?o.a.createElement(L,{answer:t.answer_1,next:t.next_1,go:function(){return e.setState({activeView:"routes",current_route:t.id,current_next:1})}}):null,t.count>=2?o.a.createElement(L,{answer:t.answer_2,next:t.next_2,go:function(){return e.setState({activeView:"routes",current_route:t.id,current_next:2})}}):null,t.count>=3?o.a.createElement(L,{answer:t.answer_3,next:t.next_3,go:function(){return e.setState({activeView:"routes",current_route:t.id,current_next:3})}}):null))})))),this.state.tree_story.bool?o.a.createElement(P.j,null,o.a.createElement(P.d,{size:"xl",onClick:this.loadOffset},this.state.load?o.a.createElement(P.H,null):"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435")):null)),this.state.snackbar),o.a.createElement(P.v,{id:"settings"},o.a.createElement(P.y,{left:o.a.createElement(o.a.Fragment,null,o.a.createElement(P.w,{onClick:function(){return e.setState({activePanel:"main"})}}),o.a.createElement(P.x,null,o.a.createElement(E.a,null)))},"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"),null==this.state.settings?o.a.createElement(P.H,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):o.a.createElement(P.l,null,o.a.createElement(P.m,null,o.a.createElement(P.g,{asideContent:o.a.createElement(P.I,{defaultChecked:1==this.state.settings.watch})},"\u0412\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u044c"))))),o.a.createElement(P.M,{id:"fandom",header:!1,activePanel:"fandom"},o.a.createElement(P.v,{id:"fandom",seperator:!1},o.a.createElement(P.y,{seperator:!1,left:o.a.createElement(P.w,{onClick:function(){return e.setState({activeView:"main",page:0,q:null})}})},"\u0412\u044b\u0431\u043e\u0440 \u0444\u0430\u043d\u0434\u043e\u043c\u0430"),null==this.state.fandoms?o.a.createElement(P.H,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):o.a.createElement(P.n,null,o.a.createElement(P.r,null,o.a.createElement(P.C,{onChange:this.onChangeSearch,name:"q"}),this.state.fandoms.data.map((function(t){return o.a.createElement(P.g,{key:t.id,onClick:function(){return e.setState({activeView:"main",q:null,page:0,form:Object(m.a)({},e.state.form,{fandom:t.name})})},asideContent:e.state.form.fandom===t.name?o.a.createElement(y.a,{fill:"var(--accent)"}):null},t.name)}))),1==this.state.fandoms.bool?o.a.createElement(P.j,null,o.a.createElement(P.d,{size:"xl",onClick:function(){return e.get_fandoms(1)}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435")):null))),o.a.createElement(P.M,{id:"routes",activePanel:"routes",header:!1},o.a.createElement(P.v,{id:"routes"},o.a.createElement(P.y,{left:o.a.createElement(P.w,{onClick:function(){return e.setState({activeView:"main"})}})},"rotes"),null==this.state.tree_story?o.a.createElement(P.H,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):o.a.createElement("div",null,o.a.createElement(P.r,null,this.state.tree_story.data.map((function(t){return o.a.createElement(P.g,{before:o.a.createElement(P.c,null,t.id),onClick:function(){return e.setNext(t.id)}},t.text)}))),this.state.tree_story.bool?o.a.createElement(P.j,null,o.a.createElement(P.d,{size:"xl",onClick:this.loadOffset},this.state.load?o.a.createElement(P.H,null):"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435")):null))))}}]),a}(o.a.Component);i.a.send("VKWebAppInit"),l.a.render(o.a.createElement(W,null),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.d352c8eb.chunk.js.map