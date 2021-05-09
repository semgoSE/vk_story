import Icon24Dismiss from '@vkontakte/icons/dist/24/dismiss';
import Icon28WriteOutline from '@vkontakte/icons/dist/28/write_outline';
import Icon24Done from '@vkontakte/icons/dist/24/done';
import Icon24Add from '@vkontakte/icons/dist/24/add';
import Icon28DeleteOutlineAndroid from '@vkontakte/icons/dist/28/delete_outline_android';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28DeleteOutline from '@vkontakte/icons/dist/28/delete_outline';
import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';
import Icon24Filter from '@vkontakte/icons/dist/24/filter';
import Icon28HideOutline from '@vkontakte/icons/dist/28/hide_outline';
import Icon28ViewOutline from '@vkontakte/icons/dist/28/view_outline';
import Icon24Article from '@vkontakte/icons/dist/24/article';
import { VKMiniAppAPI } from '@vkontakte/vk-mini-apps-api';


import {platform, IOS, Avatar, Button, Card, CardGrid, Cell, CellButton, Div, File, FormLayout, FormLayoutGroup, Group, Header, Input, List, ModalPage, ModalPageHeader, ModalRoot, Panel, PanelHeaderBack, PanelHeaderSimple, Placeholder, Root, ScreenSpinner, Search, Select, SelectMimicry, Slider, Spinner, Tabs, TabsItem, Textarea, View, Snackbar, ActionSheetItem, PanelHeaderButton, Switch, ActionSheet, Counter, FormStatus, Link, ConfigProvider, ModalCard } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import axios from 'axios';
import React from 'react';
import Answer from './componets/Answer';

// Creating API instance
const api = new VKMiniAppAPI();
const osname = platform();
const url = "https://api-bot-php.000webhostapp.com/api/";
const url_photo = "https://api-bot-php.000webhostapp.com/"


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state  = {
		   theme:'bright_light',
		   activeView:'main',
		   activePanel:'main',
		   activeTab:'user',
		   snackbar:null,
		   create_story:null,
		   all_story:null,
		   tree_story:null,
		   watch:0,
		   load:false,
		   page:0,
		   q:"",
		   offset_all_story:0,
		   offse_my_projects:0,
		   offset_tree:0,
		   fandoms:null,
		   form:{
			   name:"",
			   description:"",
			   fandom:null,
			   count:0,
			   answer_1:"",
			   answer_2:"",
			   answer_3:""
		   },
		   form_edit:{
                
		   },
		   filter_type:"",
		   string:"",
		   current_route:null,
		   current_next:null,
		   settings:{}
		}
	} 
	   
	   componentDidMount() {
		   api.onUpdateConfig(this.onUpadeteConfig);
          axios.post(url, JSON.stringify({url:window.location.href, event:'get_my_create_projects',offset:this.state.offse_my_projects})).then(res=>{
			  console.log(res);
			  this.setState({create_story:res.data})
		  })
		  axios.post(url, JSON.stringify({event:'get_projects_search', url:window.location.href, page:0, q:""}))
		  .then(data=>{
			  console.log(data);
			  this.setState({all_story:data.data, offset_all_story:1});
		  })
	   }

	   onUpadeteConfig = (data) => {
		 this.setState({theme:data.scheme});
	   }

	   get_my_projects = () => {
		   this.setState({load:true});
		axios.post(url, JSON.stringify({url:window.location.href, event:'get_my_create_projects', offset:this.state.offse_my_projects})).then(res=>{
			console.log(res);
			this.setState({create_story:{bool:res.data.bool,data:this.state.create_story.data.concat(res.data.data)}, load:false});
			if(res.data.data.length !== 0) {
				this.setState({offse_my_projects:this.state.offse_my_projects+1})
			}
		})
	   }

	   onChange = (e) => {
		   const {name, value} = e.currentTarget;
		   this.setState({form:{ 
			 ...this.state.form,
			 [name]:value
			}
		})
	   }

	   create_story = (e) => {
        this.setState({popout:<ScreenSpinner />});
		axios.post(url,JSON.stringify({event:'create_project', ...this.state.form, url:window.location.href})).then(data => {
			console.log(data);
			this.state.create_story.data.push({...this.state.form,project_id:data.data})
			this.setState({activeModal:null,popout:null,form:{
				name:"",
				description:"",
				fandom:null,
				count:0,
				answer_1:"",
				answer_2:"",
				answer_3:""}});
		})


	   }

	   create_route = (e) => {
		   this.setState({popout:<ScreenSpinner />})
		   const { form } = this.state; 
		   let bool;
		if(form.img == null) {
          bool = 0;
		}else bool=1;
		let obj = {text:form.text, img:bool};
		if(form.count >= 1) {
			obj.answer_1 = form.answer_1;
		}
		if(form.count >= 2) {
			obj.answer_2 = form.answer_2;
		}
		if(form.count >= 3) {
			obj.answer_3 = form.answer_3;
		}
		obj.project_id = this.state.project_id;
		obj.count = form.count;
		axios.post(url, JSON.stringify({event:'create_route', url:window.location.href, ...form, project_id:this.state.project_id}))
		.then(res=>{
			console.log(res);
			obj.id = res.data;
			this.state.tree_story.data.unshift(obj);
			this.setState({popout:null,activePanel:"tree_story", form:{
				name:"",
				description:"",
				fandom:null,
				count:0,
				answer_1:"",
				answer_2:"",
				answer_3:""
			},});
		})
        console.log(this.state.tree_story);
	   }

	   setNext = (next_route) => {
		   this.setState({popout:<ScreenSpinner />})
		 let t;
		 for(let i = 0; i < this.state.tree_story.data.length;i++) {
			 if(this.state.tree_story.data[i].id == this.state.current_route) {
				t = i;
				break;
			 }
		 }
		  axios.post(url, JSON.stringify({event:'setNext',url:window.location.href, project_id:this.state.project_id, id:this.state.current_route, next_route:next_route,next:this.state.current_next}))
		  .then(data=>{
			  console.log(data);
			  let new_obj = this.state.tree_story.data[t];
			  console.log(new_obj);
			  
			  switch (this.state.current_next) {
				  case 1:
					 new_obj.next_1 = next_route;
				  break;
	 
				  case 2:
					 new_obj.next_2 = next_route;
				  break;
	 
				  case 3:
					 new_obj.next_3 = next_route;
				  break;
			  }
			  this.state.tree_story.data.splice(t, 1, new_obj);
			  this.setState({activeView:'main', popout:null});
		  })

	   }

	   loadImage = (file) => {
		let reader = new FileReader();
		let input = document.getElementById(file).files[0];
        console.log(input);
		
		if(typeof(input) != 'undefined') {
			console.log(input.type);
			
		  if(input.type == 'image/png'|| input.type == 'image/jpeg'){
		reader.readAsDataURL(input)
		reader.onload = () => {
			this.setState({form:{...this.state.form, img:reader.result}})
		     }
	      }else this.setState({snackbar:<Snackbar onClose={()=>this.setState({snackbar:null})}>Не поддерживаемы тип  файла</Snackbar>})
	    }else this.setState({snackbar:<Snackbar onClose={()=>this.setState({snackbar:null})}>Вы не выбрали файл</Snackbar>})
	   }

	   loadImageEditor = () => {
		let reader = new FileReader();
		let input = document.getElementById("image_editor").files[0];
		if(typeof(input) != 'undefined') {
		  reader.readAsDataURL(input)
		  reader.onload = () => {
			this.setState({form_edit:{...this.state.form_edit,img:1, new_img:reader.result}})
		  } 
	    }
	   }

	   loadImageEditStory = () => {
		let reader = new FileReader();
		let input = document.getElementById("image_edit_story").files[0];
        console.log(input);
		
		if(typeof(input) != 'undefined') {
			console.log(input.type);
			
		  if(input.type == 'image/png'|| input.type == 'image/jpeg'){
		reader.readAsDataURL(input)
		reader.onload = () => {
			this.setState({form_edit:{...this.state.form_edit, img:reader.result}})
		     }
	      }else this.setState({snackbar:<Snackbar onClose={()=>this.setState({snackbar:null})}>Не поддерживаемы тип  файла</Snackbar>})
		}else this.setState({snackbar:<Snackbar onClose={()=>this.setState({snackbar:null})}>Вы не выбрали файл</Snackbar>})
		
	   }

	   load = (id, i) => {
		this.setState({activePanel:'tree_story'});
		axios.post(url, JSON.stringify({event:'get_routes',project_id:id, url:window.location.href, offset:0}))
		.then(data=>{
			console.log(data);
			this.setState({project_id:id, tree_story:data.data,watch:i, offset_tree:1})
		})
	}   

	    get_fandoms = (e) => {
     
			axios.post(url, JSON.stringify({event:"search", page:this.state.page,q:this.state.q, url:window.location.href})).then(data=>{
				console.log(data);
                 if(this.state.page == 0) {
					 this.setState({fandoms:data.data, page:1});
				 }else{
				this.setState({fandoms:{more:data.data.more, data:this.state.fandoms.data.concat(data.data.data)}, page:this.state.page+1})
			}
			})
		}

	    loadOffset = () => {
		this.setState({load:true});
		   axios.post(url, JSON.stringify({event:'get_routes', project_id:this.state.project_id, url:window.location.href, offset:this.state.offset_tree}))
		   .then((response) => {
			   console.log(response);
			   this.setState({load:false})
			   if(response.data.data.length > 0){
				 this.setState({offset_tree:this.state.offset_tree+1, tree_story:{bool:response.data.bool,data:this.state.tree_story.data.concat(response.data.data)}})
			   }
		   })
		}

	    onSet = (e) => {
			const {name, value} = e.currentTarget;
			this.setState({form_edit:{...this.state.form_edit, [name]:value}})
		}

		save_edit_route = (e) => {
			this.setState({popout:<ScreenSpinner />})
			let t;
			for(let i = 0;i < this.state.tree_story.data.length; i++) {
				if(this.state.tree_story.data[i].id == this.state.form_edit.id) {
				   t = i;
				   break;
				}
			}
			axios.post(url, JSON.stringify({event:'set_route', ...this.state.form_edit, url:window.location.href})).then(data=>{
				 console.log(data);
				 
				this.state.tree_story.data.splice(t, 1, this.state.form_edit);
				this.setState({activePanel:"tree_story", popout:null});
			})
			
		}

		delete_route = () => {
			this.setState({popout:<ScreenSpinner />})
			let t;
			for(let i = 0;i < this.state.tree_story.data.length; i++) {
				if(this.state.tree_story[i].data.id == this.state.form_edit.id) {
				   t = i;
				   break;
				}
			}

			axios.post(url, JSON.stringify({event:'delete_route', ...this.state.form_edit, url:window.location.href})).then(res=>{
             console.log(res);
			 this.state.tree_story.data.splice(t, 1);
			 this.setState({activeModal:null, popout:null});
			})
		}

		delete_project = () => {
			this.setState({ popout:<ScreenSpinner />});
			let i;
			for(let t = 0; t < this.state.create_story.data.length;t++){
				if(this.state.create_story.data[t].project_id == this.state.project_id) {
					i = t;
					break;
				}
			}
			axios.post(url, JSON.stringify({event:'delete_project',url:window.location.href, project_id:this.state.project_id}))
			.then((response) =>{
				console.log(response);
				this.state.create_story.data.splice(i, 1);
				this.setState({activePanel:'main', project_id: null, popout:null})
			})
		}

		onChangeSearch = (e) => {
				const {name, value} = e.currentTarget;
				this.setState({ [name]: value });
				axios.post(url, JSON.stringify({event:"search", q:value,page:0, url:window.location.href}))
				.then(data => {
					console.log(data);
                    this.setState({fandoms:data.data, page:1, q:value})
				})
		} 
		
		onChangeSearchProject = (e) => {
			this.setState({string:e.currentTarget.value});
			axios.post(url, JSON.stringify({event:'get_projects_search', type:this.state.filter_type, fandom:this.state.form.fandom, q:e.currentTarget.value,offset:0, url:window.location.href})).then(data=>{
				console.log(data);
		 	this.setState({all_story:data.data, offset_all_story:1});
			})
		}

		get_search_by_filter = () => {
			axios.post(url, JSON.stringify({event:'get_projects_search', type:this.state.filter_type, fandom:this.state.form.fandom, q:this.state.string, url:window.location.href, offset:0}))
			.then(res=>{
				console.log(res);
				this.setState({all_story:res.data, offset_all_story:1, activeModal:null})
			})
		}

		get_more_story = () => {
			axios.post(url, JSON.stringify({event:'get_projects_search', type:this.state.filter_type, fandom:this.state.form.fandom, q:this.state.string, url:window.location.href, offset:this.state.offset_all_story}))
			.then(res=>{
				console.log(res);
				if(res.data.data.length != 0) {
					this.setState({all_story:{more:res.data.more, data:this.state.all_story.data.concat(res.data.data)},offset_all_story:this.state.offset_all_story+1})
				}
			})
		}

	 
	   set_view = (i) => {
		   let t;
		   for(let u = 0; u < this.state.create_story.data.length; u++) {
              if(this.state.create_story.data[u].project_id == this.state.project_id){
				  t = u;
				  break;
			  }
		   }
		   let obj = this.state.create_story.data[t];
		   this.setState({popout:<ScreenSpinner />})
		  axios.post(url, JSON.stringify({event:'set_view', project_id:this.state.project_id, url:window.location.href, view:i}))
		  .then(data => {
			  console.log(data);
			  obj.watch = data.data;
			  this.state.create_story.data.splice(t, 1, obj)
                this.setState({watch:data.data, popout:null})
		  })
	   }

	   go_menu = () => {
		this.setState({ popout:
			<ActionSheet onClose={() => this.setState({ popout: null })}>
			  <ActionSheetItem autoclose onClick={this.pre_edit_story}>
				Редактировать
			  </ActionSheetItem>
			  {this.state.watch == 1 ?
			  <ActionSheetItem autoclose before={<Icon28HideOutline/>} onClick={()=>this.set_view(0)}>
				Скрыть из общего списка
			  </ActionSheetItem>:
			  <ActionSheetItem autoclose before={<Icon28ViewOutline/>} onClick={()=>this.set_view(1)}>
				Показывать в общем списке
				</ActionSheetItem>
		}     
		        <ActionSheetItem autoclose before={<Icon28DeleteOutlineAndroid />} onClick={this.delete_project}>
				Удалить
				</ActionSheetItem>
			  {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
			</ActionSheet>
		  });
	   }

	   goTo = (i) => {
		this.setState({popout:<ScreenSpinner />});   
	  api.getUserInfo().then((userInfo) => {
		api.allowCommunityMessages(123568924).then(() => {
			api.sendPayloadToCommunity(123568924,{"command":"input_story", "project_id":i, user_id:userInfo.id}).then(() => {
              this.setState({popout:null});
			})
		})}
		)
	   }

	   on = (e) => {
		   const {name, value} = e.currentTarget;
		   this.setState({[name]: value, offset_all_story:0});
	   }


	   pre_edit_story = ()=> {
		   let t;
		   for(let i = 0; i < this.state.create_story.data.length;i++) {
             if(this.state.create_story.data[i].project_id == this.state.project_id) {
				 t = i;
				 break;
			 }
		   }
		   this.setState({form_edit:this.state.create_story.data[t], form:{...this.state.form, fandom:this.state.create_story.data[t].fandom}, activeModal:'edit_story'});

		  
	   }

	   save_story = () => {
		   this.setState({popout:<ScreenSpinner />})
		   let t;
		   for (let i = 0; i < this.state.create_story.data.length;i++) {
			   if (this.state.create_story.data[i].project_id == this.state.project_id) {
				 t = i;
				 break;
			   }
		   }
		   let obj = this.state.form_edit;
	
		   
		   obj.fandom = this.state.form.fandom;

		   axios.post(url, JSON.stringify({event:'set_project',...obj, url:window.location.href}))
		   .then(res =>{
	
			this.state.create_story.data.splice(t, 1, obj);	
			this.setState({activeModal:null, popout:null});		
		   }
			)
		   
	   }
	   
       check_lenght_answer = () => {
		   let st = true;
            const { answer_1, answer_2, answer_3, count} = this.state.form;
		   switch(count) {
			   case 0:
                 st = false;
			   break;

			   case 1:
				   if(answer_1 !== null && answer_1 !== "") {
					   if(answer_1.length < 40) { 
					   st = false;
					   }
				   }
			   break;	

			   case 2:
				if((answer_1 !== null && answer_1 !== "") && (answer_2 !== null && answer_2 !== "")) {
					if(answer_1.length < 40 && answer_2.length < 40) { 
					st = false;
					}
				}
			  break;   

			  case 3:
				if((answer_1 !== null && answer_1 !== "") && (answer_2 !== null && answer_2 !== "") && (answer_3 !== null && answer_3 !== "")) {
					if(answer_1.length < 40 && answer_2.length < 40 && answer_3.length < 40) { 
					st = false;
					}
				}
		   }
		 console.log(st)
		 return st;
	   }

	   render() {
		   const {activePanel, activeTab, activeModal, activeView, form, form_edit } = this.state;
		return(
	  <ConfigProvider isWebView={true} scheme={this.state.theme}>		
		<Root activeView={activeView}>	
		   <View id="main" activePanel={activePanel} popout={this.state.popout} header={false} modal={
			   <ModalRoot activeModal={activeModal}>
				   <ModalPage id="create_story" header={<ModalPageHeader right={<Div><Icon24Dismiss onClick={() =>this.setState({activeModal:null})} /></Div>}>Создатель историй</ModalPageHeader>} onClose={()=>this.setState({activeModal:null})} dynamicContentHeight settlingHeight={100}>
                      <FormLayout>
						  <FormLayoutGroup top="Фото" align="center">
						  {form.img == null ? null :
						  <Avatar src={form.img} size={72} mode='image'/>
		                  }
						  <File id='image_story' mode='outline' onChange={()=>this.loadImage("image_story")} accept="image/jpeg,image/png">Загрузить фото</File>
						  </FormLayoutGroup>

						  <FormLayoutGroup top="Назавание истории">
                           <Input name="name" onChange={this.onChange} value={form.name}/>
						  </FormLayoutGroup>

						  <FormLayoutGroup top="Фандом">
						  <SelectMimicry onClick={()=>{this.setState({activeView:'fandom'}); this.get_fandoms(0)}} placeholder="Не выбран" >{form.fandom}</SelectMimicry>
						  </FormLayoutGroup>

						  <FormLayoutGroup top="Тип">
                           <Select name="type" placeholder="Выбери тип" onChange={this.onChange} value={form.type}>
							   <option value="book"  onChange={this.onChange}>По книге</option>
							   <option value="film"  onChange={this.onChange}>По фильму</option>
							   <option value="play"  onChange={this.onChange}>По игре</option>
							   <option value="other"  onChange={this.onChange}>Другое</option>
						   </Select>
						  </FormLayoutGroup>

						  <FormLayoutGroup top="Описание">
							  <Textarea name='description' onChange={this.onChange} value={form.description}/>
						  </FormLayoutGroup>


                         
						  <Button size="xl" onClick={this.create_story} disabled={form.name == ""||form.type == null}>Создать!</Button>
					  </FormLayout>
				   </ModalPage>

				   <ModalPage id='edit_story' header={<ModalPageHeader right={<Div><Icon24Dismiss onClick={() =>this.setState({activeModal:null})} /></Div>}>Редоктировать</ModalPageHeader>} onClose={()=>this.setState({activeModal:null})} dynamicContentHeight settlingHeight={100}>
					<FormLayout>   
				   <FormLayoutGroup top="Фото" align="center">
						  {form_edit.img == null ? null :
						  <div>
						  <Avatar src={form_edit.img} size={72} mode='image'/>
						  <Button mode="destructive" style={{margin:5}} onClick={()=>this.setState({form_edit:{ ...form_edit,img:null}})}><Icon24Dismiss /></Button>
						  </div>
		                  }
						  <File id='image_edit_story' mode='outline' onChange={this.loadImageEditStory} accept="image/jpeg,image/png">Загрузить фото</File>
						  </FormLayoutGroup>

						  <FormLayoutGroup top="Назавание истории">
                           <Input name="name" onChange={this.onSet} value={form_edit.name}/>
						  </FormLayoutGroup>

						  <FormLayoutGroup top="Фандом">
						  <SelectMimicry onClick={()=>{this.setState({activeView:'fandom'}); this.get_fandoms(0)}} placeholder="Не выбран" >{form.fandom}</SelectMimicry>
						  </FormLayoutGroup>

						  <FormLayoutGroup top="Тип">
                           <Select name="type" placeholder="Выбери тип" onChange={this.onSet} value={form_edit.type}>
							   <option value="book"  onChange={this.onSet}>По книге</option>
							   <option value="film"  onChange={this.onSet}>По фильму</option>
							   <option value="play"  onChange={this.onSet}>По игре</option>
							   <option value="other"  onChange={this.onSet}>Другое</option>
						   </Select>
						  </FormLayoutGroup>

						  <FormLayoutGroup top="Описание">
							  <Textarea name='description' onChange={this.onSet} value={form_edit.description}/>
						  </FormLayoutGroup>
						  <Button onClick={this.save_story} size="xl">Сохранить</Button>
                   </FormLayout>
				   </ModalPage>

                   <ModalPage id='filtres' header={<ModalPageHeader left={osname != IOS && <PanelHeaderButton  onClick={()=>this.setState({activeModal:null})}><Icon24Dismiss /></PanelHeaderButton>}
                                                                              right={<PanelHeaderButton onClick={this.get_search_by_filter}>{osname == IOS ? 'Готово' : <Icon24Done />}</PanelHeaderButton>}>Фильтры</ModalPageHeader>} onClose={()=>this.setState({activeModal:null})}>
				<FormLayout>	   
				   <FormLayoutGroup top="Фандом">
						  <SelectMimicry onClick={()=>{this.setState({activeView:'fandom'}); this.get_fandoms(0)}} placeholder="Не выбран" >{form.fandom}</SelectMimicry>
						  </FormLayoutGroup>

						  <FormLayoutGroup top="Тип">
                           <Select name="filter_type" placeholder="Выбери тип" onChange={this.on} value={this.state.filter_type}>
							   <option value="book"  onChange={this.on}>По книге</option>
							   <option value="film"  onChange={this.on}>По фильму</option>
							   <option value="play"   onChange={this.on}>По игре</option>
							   <option value="other"   onChange={this.on}>Другое</option>
						   </Select>
						  </FormLayoutGroup>
						  <Button onClick={() => this.setState({filter_type:"", form:{...form,fandom:""}, offset_all_story:0})} mode="destructive" size="xl">Сбросить</Button>
				</FormLayout>		  
				   </ModalPage>
			 
				   <ModalCard 
										id='goTo' 
										header="Перейти к истории" 
				                        onClose={()=>this.setState({activeModal:null})}
                                        actions={[{
                                         title: 'Попробовать',
                                         mode: 'primary',
                                         action: ()=>this.setState({activeModal:null})}]}>                     
				   </ModalCard>
			   </ModalRoot>
		   }>
			   <Panel id="main">
				   {activeTab === 'creator' ? 
				   <PanelHeaderSimple left={<PanelHeaderButton onClick={()=>this.setState({activeModal:'create_story'})}><Icon28AddOutline /></PanelHeaderButton>}>Редактор историй</PanelHeaderSimple>:
				   <PanelHeaderSimple>Истории в ВК</PanelHeaderSimple>
				   }
	

				   <Tabs>
					   <TabsItem selected={activeTab === 'user'} onClick={()=>this.setState({activeTab: 'user'})}>Пользователь</TabsItem>
					   <TabsItem selected={activeTab === 'creator'} onClick={()=>this.setState({activeTab: 'creator'})}>Создатель</TabsItem>
				   </Tabs>

				   {activeTab === 'creator' ? 
				   <Div>
					  {this.state.create_story == null ? <Spinner size="large" style={{color:"var(--accent)", marginTop:'40%'}}/>:
					  <div>
						{this.state.create_story.data.length == 0 ? <Placeholder header="У вас нет" action={<Button size="l" onClick={()=>this.setState({activeModal:'create_story'})}>Создать историю</Button>}>созданных историй</Placeholder>:
						<div>
				    <List>
						{this.state.create_story.data.map((data)=>
							<Cell key={data.story_id} before={<Avatar src={data.img} type="image"/>} onClick={()=>this.load(data.project_id, data.watch)} asideContent={'№'+data.project_id}>{data.name}</Cell>
						)}
					</List>
					{this.state.create_story.more ?
					<Button size="xl" onClick={this.get_my_projects}>Показать еще</Button>:null}
					</div>
	                }
					</div>
					}
					</Div>:
					<div>
					{this.state.all_story == null ? <Spinner size="large" style={{color:"var(--accent)", marginTop:'40%'}}/>:
					<div>
                    <CardGrid>
						<Search  icon={<Icon24Filter />}  
								 onChange={this.onChangeSearchProject}
								 value={this.state.string}
						         onIconClick={() => this.setState({ activeModal: 'filtres' })} />
						{this.state.all_story.data.map(story =>	
	                       <Card size='l'>
							   <div align='center'>
							    <Header aside={<Counter mode='secondary'>{story.project_id}</Counter>}></Header>
								<Avatar src={story.img} size={100} style={{marginTop:10}} mode='image'/>
						         <h1 style={{fontSize:30, fontWeight: 'bold',margin:15, padding:5}}>{story.name}</h1>
								 <span style={{padding:10}}>{story.description}</span><br />
						         <Div style={{padding:5}}>
								 <Avatar src={story.photo_200} />
						         <Link href={story.url}>{story.user}</Link>
								 </Div>
	                              <Div>
									  <Button size='l' mode='outline' onClick={()=>this.goTo(story.project_id)} href={"https://vk.com/im?sel=-123568924"}>Начать</Button>
								  </Div>
							   </div>
						   </Card>
							)}
                      
					</CardGrid>
					{this.state.all_story.more ? <Div><Button size='xl' onClick={this.get_more_story} style={{marginTop:5}}>Показать еще</Button></Div>:null}
					</div>
	                }
					</div>
				   }
        
			   </Panel>
			   <Panel id='tree_story'>
                  <PanelHeaderSimple left={
				  <React.Fragment>
					  <PanelHeaderBack onClick={()=>this.setState({activePanel:'main',tree_story:null, offset_tree:0})}/>
                      <PanelHeaderButton onClick={this.go_menu}><Icon28SettingsOutline /></PanelHeaderButton>
				  </React.Fragment>}>Дерево истории</PanelHeaderSimple>
				  {this.state.tree_story == null ? <Spinner size="large" style={{color:"var(--accent)", marginTop:'40%'}}/>:
				  <Div>
				{this.state.tree_story.data.length == 0 ? <Placeholder header="Начните" action={<Button size='l' onClick={()=>this.setState({activePanel:'create_route'})} mode='commerce'>Создать первый роут</Button>}>с чистого листа</Placeholder>:
				<div>
					  <CellButton onClick={()=>this.setState({activePanel:'create_route'})} before={<Icon24Add />} align="center">Добавить</CellButton>
				  <CardGrid>
					 <div> 
				   {this.state.tree_story.data.map((data, i)=>
				      <Card size='l'>
                         <div align='center'>
						
						  <Header aside={<Icon28EditOutline style={{top:5}} onClick={()=>this.setState({form_edit:this.state.tree_story.data[i], activePanel:'edit_route'})}/>}>{"route_id: "+data.id}</Header>
						  {data.img == 1 ? <Avatar src={url_photo+data.project_id+'_'+data.id+'.png'} mode='image'/>:null}
				          <p style={{textAlign:'center', fontSize:20, padding:10, margin:0, fontWeight:'bold'}}>{data.text}</p>
						  {data.count >= 1 ? <Answer answer={data.answer_1} next={data.next_1} go={()=>this.setState({activeView:'routes', current_route:data.id, current_next:1})}/>:null}
						  {data.count >= 2 ? <Answer answer={data.answer_2} next={data.next_2} go={()=>this.setState({activeView:'routes', current_route:data.id, current_next:2})}/>:null}
						  {data.count >= 3 ? <Answer answer={data.answer_3} next={data.next_3} go={()=>this.setState({activeView:'routes', current_route:data.id, current_next:3})}/>:null}
						</div>
					  </Card>
				   )}

				   </div>
	                   
				  </CardGrid>
				  {this.state.tree_story.more?
				  <Div>
				   <Button size='xl'  onClick={this.loadOffset}>{this.state.load ? <Spinner />:"Показать еще"}</Button>
				  </Div> 
				   :null
				   }
				  </div>
				   }
				  </Div>
	            }
				{this.state.snackbar}
			   </Panel>

               <Panel id="create_route">
				 <PanelHeaderSimple left={<PanelHeaderBack onClick={()=>this.setState({activePanel:'tree_story'})}/>}>Редактирование route</PanelHeaderSimple>
			   <FormLayout>
                     {this.check_lenght_answer() ? 
					 <FormStatus mode='error' header='Неккоректная длина ответа'>
                      Ответ не может быть пустым или длиннее 40 символов
					 </FormStatus>:null}
					 <FormLayoutGroup top="Фото" align="center">
						  {form.img == null ? null :
						  <div>
						  <Avatar src={form.img} size={72} mode='image'/>
						  <Button mode="destructive" style={{margin:5}} onClick={()=>this.setState({form:{...form, img:null}})}><Icon24Dismiss /></Button>
						  </div>
		                  }

						  <File id='image_route'  accept="image/jpeg,image/png" mode='outline' onChange={()=>this.loadImage("image_route")}>Загрузить фото</File>
						  </FormLayoutGroup>

						 <FormLayoutGroup top="Текст">
							 <Textarea name='text' onChange={this.onChange}/>
						 </FormLayoutGroup>
							<Slider step={1} 
									max={3} 
									min={0} 
									onChange={value => this.setState({form:{...this.state.form, count:value}})} 
									bottom={form.count} />

                            <FormLayoutGroup top="Ответы">
                               {form.count >= 1 ? <Input name="answer_1" placeholder={"1 Ответ"}  onChange={this.onChange}/>:null}
							   {form.count >= 2 ? <Input name="answer_2" placeholder={"2 Ответ"}  onChange={this.onChange}/>:null}
							   {form.count >= 3 ? <Input name="answer_3" placeholder={"3 Ответ"}  onChange={this.onChange}/>:null}
							</FormLayoutGroup>
				       	

						 <Button onClick={this.create_route} disabled={form.text == null || form.text == "" || this.check_lenght_answer()} size="xl">Создать</Button>
					 </FormLayout>
				
			   </Panel>
		  
		       <Panel id='edit_route'>
				   <PanelHeaderSimple left={<PanelHeaderBack onClick={()=>this.setState({activePanel:'tree_story'})}/>}>Редактирование routes</PanelHeaderSimple>
				   <FormLayout>
					 
					 <FormLayoutGroup align="center">
					   {form_edit.img == 1 ? <div>
						   <Avatar src={form_edit.new_img == null ? url_photo+form_edit.project_id+'_'+form_edit.id+'.png': form_edit.new_img} size={120} mode='image'/>
						   <Button mode="destructive" style={{margin:5}} onClick={()=>this.setState({form_edit:{...form_edit, img:0}})}><Icon24Dismiss /></Button>
						   </div>:null}
					  
					   <File id='image_editor' accept="image/jpeg,image/png" mode='outline' onChange={this.loadImageEditor}>Загрузить фото</File>
					</FormLayoutGroup>
						 <FormLayoutGroup top="Текст">
							 <Textarea name='text' onChange={this.onSet} value={form_edit.text}/>
						 </FormLayoutGroup>

					
							<Slider step={1} 
									max={3} 
									min={0} 
									value={form_edit.count}
									onChange={value => this.setState({form_edit:{...this.state.form_edit, count:value}})} 
									bottom={form_edit.count} />

                            <FormLayoutGroup top="Ответы">
                               {form_edit.count >= 1 ? <Input name="answer_1" placeholder={"1 Ответ"} value={form_edit.answer_1} onChange={this.onSet}/>:null}
							   {form_edit.count >= 2 ? <Input name="answer_2" placeholder={"2 Ответ"} value={form_edit.answer_2} onChange={this.onSet}/>:null}
							   {form_edit.count >= 3 ? <Input name="answer_3" placeholder={"3 Ответ"} value={form_edit.answer_3} onChange={this.onSet}/>:null}
							</FormLayoutGroup>
				       	

						 <Button onClick={this.save_edit_route} size="xl">Сохранить</Button>
					 </FormLayout>
			   </Panel>
		   </View>

		   <View id="fandom" header={false} activePanel="fandom">
			 <Panel id="fandom" seperator={false}>
		      <PanelHeaderSimple seperator={false} left={<PanelHeaderBack onClick={()=>this.setState({activeView:'main', page:0,q:null})}/>}>Выбор фандома</PanelHeaderSimple>
			  {this.state.fandoms == null ? <Spinner size="large" style={{color:"var(--accent)", marginTop:'40%'}} />:
		       <Group>
                 <List>
				   <Search onChange={this.onChangeSearch} name='q'/>
				   {this.state.fandoms.data.map((data)=>
					 <Cell key={data.id} 
					       onClick={()=>this.setState({activeView:'main',q:null,page:0, form:{...this.state.form, fandom:data.name, offset_all_story:0}})}
						   asideContent={this.state.form.fandom === data.name ? <Icon24Done fill="var(--accent)" /> : null}>{data.name}</Cell>
				 )}
                 </List>
				 {this.state.fandoms.more ? 
				 <Div>
				 <Button size='xl' onClick={()=>this.get_fandoms(1)}>Показать еще</Button>
				 </Div>:null}
			   </Group>
				   }
			  </Panel>  
		   </View>

		   <View id="routes" activePanel="routes" header={false}>
			   <Panel id="routes">
                 <PanelHeaderSimple left={<PanelHeaderBack onClick={()=>this.setState({activeView:'main'})}/>}>rotes</PanelHeaderSimple>
				 {this.state.tree_story == null ? <Spinner size="large" style={{color:"var(--accent)", marginTop:'40%'}} />:
				 <div>
				 <List>
					 {this.state.tree_story.data.map((res)=>
					 <Cell before={<Avatar>{res.id}</Avatar>} onClick={()=>this.setNext(res.id)}>{res.text}</Cell>
					 )}
				 </List>
				 {this.state.tree_story.more?
				  <Div>
				   <Button size='xl'  onClick={this.loadOffset}>{this.state.load ? <Spinner />:"Показать еще"}</Button>
				  </Div> 
				   :null
				   }
				 </div>
	           }
			  
			   </Panel>
		   </View>
		</Root>  
	   </ConfigProvider>	 
	   )}
}

export default App;

