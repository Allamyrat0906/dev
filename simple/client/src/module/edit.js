import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
const baseUrl="http://localhost:2000"
       
class EditComponent extends React.Component{
    
   constructor(props){
        super(props);
        this.state={
            dataProduct:{},
            pName:"",
            pDescription:"",
            pCost:"",
            pImage:"",
            stringCategory:"",
            selectCategory:0,
        }
    }    

 componentDidMount(){
    let userId = this.props.match.params.id;
    const url = baseUrl+"/product/get/"+userId;
    axios.get(url)
    .then(res=>{
      if (res.data.success) {
        const data = res.data.data[0]
        this.setState({
          dataProduct:data,
          pName: data.pName,
          pDescription:data.pDescription,
          pCost:data.pCost,
          pImage:data.pImage,
          stringCategory:data.category.category,
          selectCategory:data.categoryId
        })
      }
      else {
        alert("service")
      }
    })
    .catch(error=>{
      alert("server "+error)
    })

  }
    
render(){
    return (
      <div class="container">
        <div class="row">
          <div class="form-group col-md-6">
            <label for="inputPassword4">Name</label>
            <input type="text" class="form-control"  
              value={this.state.pName} onChange={(value)=> this.setState({pName:value.target.value})}/>
          </div>
  
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputState">kategoriya </label>
            <select id="inputState" class="form-control" onChange={(value)=> this.setState({selectCategory:value.target.value})}>
              <option selected value={this.state.dataProduct.categoryId}>{this.state.stringCategory}</option>
              <option value="1">Azyk</option>
              <option value="2">Kakadylan</option>
              <option value="3">Ichgiler</option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">haryt nomeri</label>
            <input type="number" class="form-control"  
              value={this.state.pCost} onChange={(value)=> this.setState({pCost:value.target.value})}/>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">bahasy</label>
          <input type="text" class="form-control" id="inputAddress" 
            value={this.state.pImage} onChange={(value)=> this.setState({pImage:value.target.value})}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={()=>this.sendUpdate()}>Update</button>
      </div>
    );
  }
  
  sendUpdate(){

    let userId = this.props.match.params.id;
    const baseUrl = "http://localhost:2000/product/update/"+userId
    const datapost = {
      pName: this.state.pName,
      pDescription: this.state.pDescription,
      pCost: this.state.pCost,
      pImage: this.state.pImage,
      category: this.state.selectCategory,
    }

    axios.post(baseUrl,datapost)
    .then(response => {
      if (response.data.success) {
        alert(response.data.message)
      }
      else {
        alert("bari ishlanok")
      }
    })
    .catch ( error => {
      alert("yenebir mesele  ")
    })

  }
}


export default EditComponent;