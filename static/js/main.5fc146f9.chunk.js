(this["webpackJsonpvk-app-edition-story"]=this["webpackJsonpvk-app-edition-story"]||[]).push([[0],{153:function(e,t,a){e.exports=a(259)},259:function(e,t,a){"use strict";a.r(t);a(154),a(180),a(182),a(183),a(185),a(186),a(187),a(188),a(189),a(190),a(191),a(192),a(194),a(195),a(196),a(197),a(198),a(199),a(200),a(201),a(202),a(203),a(205),a(206),a(207),a(208),a(209),a(210),a(211),a(212),a(213),a(214),a(215),a(216),a(217),a(218),a(219),a(220),a(221),a(222);var n=a(0),r=a.n(n),o=a(59),l=a.n(o),c=a(37),i=a.n(c),s=a(38),u=a(21),m=a(97),d=a(98),f=a(119),g=a(118),p=a(39),h=a.n(p),_=a(99),E=a.n(_),v=a(100),y=a.n(v),C=a(101),S=a.n(C),b=a(102),w=a.n(b),k=a(103),j=a.n(k),x=a(3),O=(a(241),a(27)),z=a.n(O),M={borderRadius:"30%",borderColor:"black"},N=function(e){var t=e.answer,a=e.next,n=e.go;return r.a.createElement(x.c,{size:"l"},r.a.createElement("div",{style:M},r.a.createElement(x.e,{onClick:n,asideContent:r.a.createElement(x.g,{mode:null==a||0==a?"prominent":"primary"},null==a||0==a?"!":a),multiline:!0,style:{textAlign:"left"}},t)))},J="https://api-bot-php.000webhostapp.com/api/",T="https://api-bot-php.000webhostapp.com/",V=function(e){Object(f.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState({form:Object(u.a)({},n.state.form,Object(s.a)({},a,r))})},n.create_story=function(e){n.setState({popout:r.a.createElement(x.x,null)}),z.a.post(J,JSON.stringify(Object(u.a)({event:"create_project"},n.state.form,{url:window.location.href}))).then((function(e){console.log(e),n.state.create_story.push(Object(u.a)({},n.state.form,{project_id:e.data})),n.setState({activeModal:null,popout:null,form:{name:"",description:"",fandom:null,count:0}})}))},n.create_route=function(e){n.setState({popout:r.a.createElement(x.x,null)});var t,a=n.state.form;t=null==a.img?0:1;var o={text:a.text,img:t};a.count>=1&&(o.answer_1=a.answer_1),a.count>=2&&(o.answer_2=a.answer_2),a.count>=3&&(o.answer_3=a.answer_3),o.project_id=n.state.project_id,o.count=a.count,z.a.post(J,JSON.stringify(Object(u.a)({event:"create_route",url:window.location.href},a,{project_id:n.state.project_id}))).then((function(e){console.log(e),o.id=e.data,n.state.tree_story.data.unshift(o),n.setState({popout:null,activeModal:null,form:{name:"",description:"",fandom:null,count:0}})})),console.log(n.state.tree_story)},n.setNext=function(e){var t;n.setState({popout:r.a.createElement(x.x,null)});for(var a=0;a<n.state.tree_story.length;a++)if(n.state.tree_story[a].id==n.state.current_route){t=a;break}z.a.post(J,JSON.stringify({event:"setNext",url:window.location.href,project_id:n.state.project_id,id:n.state.current_route,next_route:e,next:n.state.current_next})).then((function(a){console.log(a);var r=n.state.tree_story[t];switch(n.state.current_next){case 1:r.next_1=e;break;case 2:r.next_2=e;break;case 3:r.next_3=e}n.state.tree_story.splice(t,1,r),n.setState({activeView:"main",popout:null})}))},n.loadImage=function(e){var t=new FileReader,a=document.getElementById(e).files[0];console.log(a),"undefined"!=typeof a?(console.log(a.type),"image/png"==a.type||"image/jpeg"==a.type?(t.readAsDataURL(a),t.onload=function(){n.setState({form:Object(u.a)({},n.state.form,{img:t.result})})}):n.setState({snackbar:r.a.createElement(x.C,{onClose:function(){return n.setState({snackbar:null})}},"\u041d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043c\u044b \u0442\u0438\u043f  \u0444\u0430\u0439\u043b\u0430")})):n.setState({snackbar:r.a.createElement(x.C,{onClose:function(){return n.setState({snackbar:null})}},"\u0412\u044b \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043b\u0438 \u0444\u0430\u0439\u043b")})},n.loadImageEditor=function(){var e=new FileReader,t=document.getElementById("image_editor").files[0];"undefined"!=typeof t&&(e.readAsDataURL(t),e.onload=function(){n.setState({form_edit:Object(u.a)({},n.state.form_edit,{img:1,new_img:e.result})})})},n.load=function(e){n.setState({activePanel:"tree_story"}),z.a.post(J,JSON.stringify({event:"get_routes",project_id:e,url:window.location.href,offset:0})).then((function(t){console.log(t),n.setState({project_id:e,tree_story:t.data,popout:null,offset_tree:1})}))},n.get_fandoms=function(e){z.a.post(J,JSON.stringify({event:"search",page:n.state.page,q:n.state.q,url:window.location.href})).then((function(e){console.log(e),n.setState({fandoms:Object(u.a)({},n.state.fandoms,{data:n.state.fandoms.data.concat(e.data)}),page:n.state.page+1})}))},n.loadOffset=function(){n.setState({load:!0}),z.a.post(J,JSON.stringify({event:"get_routes",project_id:n.state.project_id,url:window.location.href,offset:n.state.offset_tree})).then((function(e){console.log(e),n.setState({load:!1}),e.data.data.length>0&&n.setState({offset_tree:n.state.offset_tree+1,tree_story:{bool:e.data.bool,data:n.state.tree_story.data.concat(e.data.data)}})}))},n.onSet=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState({form_edit:Object(u.a)({},n.state.form_edit,Object(s.a)({},a,r))})},n.save_edit_route=function(e){var t;n.setState({popout:r.a.createElement(x.x,null)});for(var a=0;a<n.state.tree_story.length;a++)if(n.state.tree_story[a].id==n.state.form_edit.id){t=a;break}z.a.post(J,JSON.stringify(Object(u.a)({event:"set_route"},n.state.form_edit,{url:window.location.href}))).then((function(e){console.log(e),n.state.tree_story.splice(t,1,n.state.form_edit),n.setState({activeModal:null,popout:null})}))},n.delete_route=function(){var e;n.setState({popout:r.a.createElement(x.x,null)});for(var t=0;t<n.state.tree_story.length;t++)if(n.state.tree_story[t].id==n.state.form_edit.id){e=t;break}z.a.post(J,JSON.stringify(Object(u.a)({event:"delete_route"},n.state.form_edit,{url:window.location.href}))).then((function(t){console.log(t),n.state.tree_story.splice(e,1),n.setState({activeModal:null,popout:null})}))},n.onChangeSearch=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object(s.a)({},a,r)),z.a.post(J,JSON.stringify({event:"search",q:r,page:0,url:window.location.href})).then((function(e){console.log(e),n.setState({fandoms:e.data,page:1,q:r})}))},n.state={activeView:"main",activePanel:"main",activeTab:"user",snackbar:null,create_story:null,all_story:null,tree_story:null,load:!1,page:0,offset_tree:0,fandoms:null,form:{name:"",description:"",fandom:null,count:0},form_edit:{},current_route:null,current_next:null},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;z.a.post(J,JSON.stringify({url:window.location.href,event:"get_my_create_projects"})).then((function(t){console.log(t),e.setState({create_story:t.data})})),z.a.post(J,JSON.stringify({event:"get_projects",url:window.location.href})).then((function(t){console.log(t),e.setState({all_story:t.data})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.activePanel,n=t.activeTab,o=t.activeModal,l=t.activeView,c=t.form,i=t.form_edit;return r.a.createElement(x.w,{activeView:l},r.a.createElement(x.H,{id:"main",activePanel:a,popout:this.state.popout,header:!1,modal:r.a.createElement(x.r,{activeModal:o},r.a.createElement(x.p,{id:"create_story",header:r.a.createElement(x.q,{right:r.a.createElement(x.h,null,r.a.createElement(h.a,{onClick:function(){return e.setState({activeModal:null})}}))},"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u0439"),onClose:function(){return e.setState({activeModal:null})},dynamicContentHeight:!0,settlingHeight:100},r.a.createElement(x.j,null,r.a.createElement(x.k,{top:"\u0424\u043e\u0442\u043e",align:"center"},null==c.img?null:r.a.createElement(x.a,{src:c.img,size:72,mode:"image"}),r.a.createElement(x.i,{id:"image_story",mode:"outline",onChange:function(){return e.loadImage("image_story")},accept:"image/jpeg,image/png"},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),r.a.createElement(x.k,{top:"\u041d\u0430\u0437\u0430\u0432\u0430\u043d\u0438\u0435 \u0438\u0441\u0442\u043e\u0440\u0438\u0438"},r.a.createElement(x.n,{name:"name",onChange:this.onChange,value:c.name})),r.a.createElement(x.k,{top:"\u0424\u0430\u043d\u0434\u043e\u043c"},r.a.createElement(x.A,{onClick:function(){e.setState({activeView:"fandom"}),e.get_fandoms(0)},placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d"},c.fandom)),r.a.createElement(x.k,{top:"\u0422\u0438\u043f"},r.a.createElement(x.z,{name:"type",placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438 \u0442\u0438\u043f",onChange:this.onChange,value:c.type},r.a.createElement("option",{value:"book",onChange:this.onChange},"\u041f\u043e \u043a\u043d\u0438\u0433\u0435"),r.a.createElement("option",{value:"film",onChange:this.onChange},"\u041f\u043e \u0444\u0438\u043b\u044c\u043c\u0443"),r.a.createElement("option",{value:"play",onChange:this.onChange},"\u041f\u043e \u0438\u0433\u0440\u0435"),r.a.createElement("option",{value:"other",onChange:this.onChange},"\u0414\u0440\u0443\u0433\u043e\u0435"))),r.a.createElement(x.k,{top:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"},r.a.createElement(x.G,{name:"description",onChange:this.onChange,value:c.description})),r.a.createElement(x.b,{size:"xl",onClick:this.create_story,disabled:""==c.name||null==c.type},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c!"))),r.a.createElement(x.p,{id:"create_route",header:r.a.createElement(x.q,{right:r.a.createElement(x.h,null,r.a.createElement(h.a,{onClick:function(){return e.setState({activeModal:null})}}))},"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 route"),onClose:function(){return e.setState({activeModal:null})},dynamicContentHeight:!0},r.a.createElement(x.j,null,r.a.createElement(x.k,{top:"\u0424\u043e\u0442\u043e",align:"center"},null==c.img?null:r.a.createElement("div",null,r.a.createElement(x.a,{src:c.img,size:72,mode:"image"}),r.a.createElement(x.b,{mode:"destructive",style:{margin:5},onClick:function(){return e.setState({form:Object(u.a)({},c,{img:null})})}},r.a.createElement(h.a,null))),r.a.createElement(x.i,{id:"image_route",accept:"image/jpeg,image/png",mode:"outline",onChange:function(){return e.loadImage("image_route")}},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),r.a.createElement(x.k,{top:"\u0422\u0435\u043a\u0441\u0442"},r.a.createElement(x.G,{name:"text",onChange:this.onChange})),r.a.createElement(x.B,{step:1,max:3,min:0,onChange:function(t){return e.setState({form:Object(u.a)({},e.state.form,{count:t})})},bottom:c.count}),r.a.createElement(x.k,{top:"\u041e\u0442\u0432\u0435\u0442\u044b"},c.count>=1?r.a.createElement(x.n,{name:"answer_1",placeholder:"1 \u041e\u0442\u0432\u0435\u0442",onChange:this.onChange}):null,c.count>=2?r.a.createElement(x.n,{name:"answer_2",placeholder:"2 \u041e\u0442\u0432\u0435\u0442",onChange:this.onChange}):null,c.count>=3?r.a.createElement(x.n,{name:"answer_3",placeholder:"3 \u041e\u0442\u0432\u0435\u0442",onChange:this.onChange}):null),r.a.createElement(x.b,{onClick:this.create_route,disabled:null==c.text||""==c.text,size:"xl"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c")),this.state.snackbar),r.a.createElement(x.p,{id:"edit_route",header:r.a.createElement(x.q,{right:r.a.createElement(x.h,null,r.a.createElement(h.a,{onClick:function(){return e.setState({activeModal:null})}})),left:r.a.createElement(x.h,null,r.a.createElement(w.a,{onClick:this.delete_route,fill:"var(--accent)"}))},"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"),onClose:function(){return e.setState({activeModal:null})},dynamicContentHeight:!0},r.a.createElement(x.j,null,r.a.createElement(x.k,{align:"center"},1==i.img?r.a.createElement("div",null,r.a.createElement(x.a,{src:null==i.new_img?T+i.project_id+"_"+i.id+".png":i.new_img,size:120,mode:"image"}),r.a.createElement(x.b,{mode:"destructive",style:{margin:5},onClick:function(){return e.setState({form_edit:Object(u.a)({},i,{img:0})})}},r.a.createElement(h.a,null))):null,r.a.createElement(x.i,{id:"image_editor",accept:"image/jpeg,image/png",mode:"outline",onChange:this.loadImageEditor},"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0444\u043e\u0442\u043e")),r.a.createElement(x.k,{top:"\u0422\u0435\u043a\u0441\u0442"},r.a.createElement(x.G,{name:"text",onChange:this.onSet,value:i.text})),r.a.createElement(x.B,{step:1,max:3,min:0,value:i.count,onChange:function(t){return e.setState({form_edit:Object(u.a)({},e.state.form_edit,{count:t})})},bottom:i.count}),r.a.createElement(x.k,{top:"\u041e\u0442\u0432\u0435\u0442\u044b"},i.count>=1?r.a.createElement(x.n,{name:"answer_1",placeholder:"1 \u041e\u0442\u0432\u0435\u0442",value:i.answer_1,onChange:this.onSet}):null,i.count>=2?r.a.createElement(x.n,{name:"answer_2",placeholder:"2 \u041e\u0442\u0432\u0435\u0442",value:i.answer_2,onChange:this.onSet}):null,i.count>=3?r.a.createElement(x.n,{name:"answer_3",placeholder:"3 \u041e\u0442\u0432\u0435\u0442",value:i.answer_3,onChange:this.onSet}):null),r.a.createElement(x.b,{onClick:this.save_edit_route,size:"xl"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))))},r.a.createElement(x.s,{id:"main"},"creator"===n?r.a.createElement(x.u,{left:r.a.createElement(x.h,null,r.a.createElement(S.a,{onClick:function(){return e.setState({activeModal:"create_story"})}}))},"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0438\u0441\u0442\u043e\u0440\u0438\u0439"):r.a.createElement(x.u,null,"\u0418\u0441\u0442\u043e\u0440\u0438\u0438 \u0432 \u0412\u041a"),r.a.createElement(x.E,null,r.a.createElement(x.F,{selected:"user"===n,onClick:function(){return e.setState({activeTab:"user"})}},"\u041f\u043e\u043b\u044c\u0437\u0432\u0430\u0442\u0435\u043b\u044c"),r.a.createElement(x.F,{selected:"creator"===n,onClick:function(){return e.setState({activeTab:"creator"})}},"\u0421\u043e\u0437\u0434\u0430\u0442\u0435\u043b\u044c")),"creator"===n?r.a.createElement(x.h,null,null==this.state.create_story?r.a.createElement(x.D,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):r.a.createElement("div",null,0==this.state.create_story.length?r.a.createElement(x.v,{header:"\u0423 \u0432\u0430\u0441 \u043d\u0435\u0442",action:r.a.createElement(x.b,{size:"l",onClick:function(){return e.setState({activeModal:"create_story"})}},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e")},"\u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u0442\u043e\u0440\u0438\u0439"):r.a.createElement(x.o,null,this.state.create_story.map((function(t){return r.a.createElement(x.e,{key:t.story_id,before:r.a.createElement(x.a,{src:t.img,type:"image"}),onClick:function(){return e.load(t.project_id)},indicator:t.project_id},t.name)}))))):r.a.createElement("div",null,null==this.state.all_story?r.a.createElement(x.D,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):r.a.createElement(x.d,null,this.state.all_story.map((function(e){return r.a.createElement(x.c,{size:"l"},r.a.createElement("div",{align:"center"},r.a.createElement(x.a,{src:e.img,size:100,style:{marginTop:10}}),r.a.createElement("span",{style:{fontSize:30,fontWeight:"bold"}},e.name),r.a.createElement(x.h,null,r.a.createElement("span",{style:{bottom:10}},e.description))))})))),this.state.snackbar),r.a.createElement(x.s,{id:"tree_story"},r.a.createElement(x.u,{left:r.a.createElement(x.t,{onClick:function(){return e.setState({activePanel:"main",tree_story:null,offset_tree:0})}})},"\u0414\u0435\u0440\u0435\u0432\u043e \u0438\u0441\u0442\u043e\u0440\u0438\u0438"),null==this.state.tree_story?r.a.createElement(x.D,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):r.a.createElement(x.h,null,0==this.state.tree_story.data.length?r.a.createElement(x.v,{header:"\u041d\u0430\u0447\u043d\u0438\u0442\u0435",action:r.a.createElement(x.b,{size:"l",onClick:function(){return e.setState({activeModal:"create_route"})},mode:"commerce"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0432\u044b\u0439 \u0440\u043e\u0443\u0442")},"\u0441 \u0447\u0438\u0441\u0442\u043e\u0433\u043e \u043b\u0438\u0441\u0442\u0430"):r.a.createElement("div",null,r.a.createElement(x.f,{onClick:function(){return e.setState({activeModal:"create_route"})},before:r.a.createElement(y.a,null),align:"center"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),r.a.createElement(x.d,null,r.a.createElement("div",null,this.state.tree_story.data.map((function(t,a){return r.a.createElement(x.c,{size:"l"},r.a.createElement("div",{align:"center"},r.a.createElement(x.m,{aside:r.a.createElement(j.a,{style:{top:5},onClick:function(){return e.setState({form_edit:e.state.tree_story[a],activeModal:"edit_route"})}})},"route_id: "+t.id),1==t.img?r.a.createElement(x.a,{src:T+t.project_id+"_"+t.id+".png",mode:"image"}):null,r.a.createElement("p",{style:{textAlign:"center",fontSize:20,padding:10,margin:0,fontWeight:"bold"}},t.text),t.count>=1?r.a.createElement(N,{answer:t.answer_1,next:t.next_1,go:function(){return e.setState({activeView:"routes",current_route:t.id,current_next:1})}}):null,t.count>=2?r.a.createElement(N,{answer:t.answer_2,next:t.next_2,go:function(){return e.setState({activeView:"routes",current_route:t.id,current_next:2})}}):null,t.count>=3?r.a.createElement(N,{answer:t.answer_3,next:t.next_3,go:function(){return e.setState({activeView:"routes",current_route:t.id,current_next:3})}}):null))})))),this.state.tree_story.bool?r.a.createElement(x.h,null,r.a.createElement(x.b,{size:"xl",onClick:this.loadOffset},this.state.load?r.a.createElement(x.D,null):"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435")):null)),this.state.snackbar)),r.a.createElement(x.H,{id:"fandom",header:!1,activePanel:"fandom"},r.a.createElement(x.s,{id:"fandom"},r.a.createElement(x.u,{left:r.a.createElement(x.t,{onClick:function(){return e.setState({activeView:"main"})}})},"\u0412\u044b\u0431\u043e\u0440 \u0444\u0430\u043d\u0434\u043e\u043c\u0430"),null==this.state.fandoms?r.a.createElement(x.D,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):r.a.createElement(x.l,null,r.a.createElement(x.o,null,r.a.createElement(x.y,{onChange:this.onChangeSearch,name:"q"}),this.state.fandoms.data.map((function(t){return r.a.createElement(x.e,{key:t.id,onClick:function(){return e.setState({activeView:"main",form:Object(u.a)({},e.state.form,{fandom:t.name})})},asideContent:e.state.form.fandom===t.name?r.a.createElement(E.a,{fill:"var(--accent)"}):null},t.name)}))),1==this.state.fandoms.more?r.a.createElement(x.h,null,r.a.createElement(x.b,{size:"xl",onClick:function(){return e.get_fandoms(1)}},"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0435")):null))),r.a.createElement(x.H,{id:"routes",activePanel:"routes",header:!1},r.a.createElement(x.s,{id:"routes"},r.a.createElement(x.u,{left:r.a.createElement(x.t,{onClick:function(){return e.setState({activeView:"main"})}})},"rotes"),null==this.state.tree_story?r.a.createElement(x.D,{size:"large",style:{color:"var(--accent)",marginTop:"40%"}}):r.a.createElement(x.o,null,this.state.tree_story.data.map((function(t){return r.a.createElement(x.e,{before:r.a.createElement(x.a,null,t.id),onClick:function(){return e.setNext(t.id)}},t.text)}))))))}}]),a}(r.a.Component);i.a.send("VKWebAppInit"),l.a.render(r.a.createElement(V,null),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.5fc146f9.chunk.js.map