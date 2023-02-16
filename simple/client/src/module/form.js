import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
class EditComponent extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            pName:"",
            pDescription:"",
            pCost:"",
            pImage:"",
            categoryId:0
        }
    }
    
 render(){
   return (
     <div class="container text-dark bg-light">
       <div class="row">
         <div class="form-group col-md-6">
           <label for="inputPassword4">Product name </label>
           <input type="text" class="form-control"  placeholder="Name" value={this.state.pName} onChange={(value)=> this.setState({pName:value.target.value})}/>
         </div>
         <div class="form-group col-md-6">
           <label for="inputPassword4">Product description </label>
           <input type="text" class="form-control"  placeholder="pDescription" value={this.state.pDescription} onChange={(value)=> this.setState({pDescription:value.target.value})}/>
         </div>
       </div>
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="inputState">Category</label>
           <select id="inputState" class="form-control" onChange={(value)=> this.setState({categoryId:value.target.value})}>
             <option selected>Sayla</option>
             <option value="1">Azyk</option>
              <option value="2">Kakadylan</option>
              <option value="3">Alkogolsyz ichgiler</option>
           </select>
         </div>
         <div class="form-group col-md-6">
           <label for="inputEmail4">Product cost</label>
           <input type="number" class="form-control"    value={this.state.pCost} onChange={(value)=> this.setState({pCost:value.target.value})}/>
         </div>
       </div>
       <div class="form-group col-md-12">
         <label for="inputAddress">Product image</label>
         <input type="text" class="form-control" id="inputAddress"  value={this.state.pImage} onChange={(value)=> this.setState({pImage:value.target.value})}/>
      
       <button type="submit" class="btn btn-primary text-center" onClick={()=>this.sendSave()}>Save product</button>
     </div></div>
   );
 }

 sendSave(){

  if (this.state.categoryId===0) {
    alert("Select category")
  }
  else if (this.state.pCost==="") {
     alert("Select product cost")
  }
  else if (this.state.pName==="") {
     alert("Select product name")
  }

  else if (this.state.pImage==="") {
     alert("Select product image")
  }
  else {

     const baseUrl="http://localhost:2000/product/create"
    const datapost = {
      pName : this.state.pName,
      pDescription : this.state.pDescription,
      pCost : this.state.pCost,
      pImage : this.state.pImage,
      categoryId  : this.state.categoryId,
    }

    axios.post(baseUrl,datapost)
    .then(response=>{
      if (response.data.success===true) {
       alert("Successfully added")
      }
      else {
        alert(response.data.message+" shu yerde problema bar")
      }
    }).catch(error=>{
      alert("Error fuck "+error)
    })

  }

}
}


export default EditComponent;