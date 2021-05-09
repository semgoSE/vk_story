const url = "";
let state = {
   stories:null, 
   my_stories:null
} 
load = (state_name, method, params, to, from) => {
    axios.post(url, JSON.stringify({event:method, ...params}))
    .then((response) =>{
        this.setState({ [state_name]:response.data, [from]:to});
    })                        
}

offset = (state_name, method, params, to, from) => {
    axios.post(url, JSON.stringify({event:method, ...params}))
    .then((response) =>{
        if(response.data.data.length != 0) {
           let obj = this.state.(state_name);
        }
    })            
}

onChangeSearch = (e) => {
  const {name} = e.currentTarget;

}