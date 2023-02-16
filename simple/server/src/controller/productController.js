const controller = {};
var sequelize = require("../model/database");
var product = require("../model/product");
var category = require("../model/category");

sequelize.sync();
controller.delete = async (req, res) => {
  const { id } = req.body;
  const del = await product.destroy({
    where: { id: id },
  });
  res.json({ success: true, deleted: del, message: "Pozuldy" });
};
controller.update = async (req, res) => {
  const { id } = req.params;
  const { pName, pDescription, pCost, pImage, categoryId } = req.body;
  const data = await product
    .update(
      {
        pName: pName,
        pDescription: pDescription,
        pImage: pImage,
        pCost: pCost,
        categoryId: categoryId,
      },
      {
        where: { id: id },
      }
    )
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data, message: "Update edildi" });
};

controller.get = async (req, res) => {
  const { id } = req.params;
  const data = await product
    .findAll({
      where: { id: id },
      include: [category],
    })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};
controller.list = async (req, res) => {
  const data = await product
    .findAll({
      include: [category],
    })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({ success: true, data: data });
};

controller.create = async (req, res) => {
  const { pName, pDescription, pImage, pCost, categoryId } = req.body;

  const data = await product
    .create({
      pName: pName,
      pDescription: pDescription,
      pImage: pImage,
      pCost: pCost,
      categoryId: categoryId,
    })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  res.status(200).json({
    success: true,
    message: "ishleyar",
    data: data,
  });
};
/**      
dolandyryjy.testdata=async(req,res) => {
const response =sequelize.sync().then(function(){

 //Role.create({
  //   role:'Admin'
 //}); 

 talyp.create({
     name:'Pylansdfnow',
     email:'usdfv@gmail.com',
     adress:'sdffdsdf wel',
     phone:'62336159',
     roleId:1
 });

const data=talyp.findAll();
    return data;
})
.catch(error =>{
    return error;
});
res.json({success:true ,data : response});
}
**/
controller.test = (req, res) => {
  const data = {
    name: "Allamyrat Annayev",
    yash: 21,
    shaher: "Dashoguz",
  };

  console.log("product dolandyrmak ishlap bashlady");
  res.json(data);
};
module.exports = controller;
