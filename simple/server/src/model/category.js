const Sequelize= require('sequelize');
var sequelize=require('./database');

var nametable='category';

var category= sequelize.define(nametable,{
    category:Sequelize.STRING},
    {
timestamps:false
});


module.exports=category; 