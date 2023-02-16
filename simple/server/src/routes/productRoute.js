const express = require('express');
const router = express.Router();
const  productController=require('../controller/productController');
//router.get('/datatest',talypdolandyryjy.testdata);
//router.get('/test',talypdolandyryjy.test);
//router.get('/save',(req,res) => {
 //   res.json({status:"Talyp goshuldy"});
//});

router.get('/list',productController.list);
router.post('/create',productController.create);
router.get('/get/:id',productController.get);
router.post('/update/:id',productController.update);
router.delete('/delete',productController.delete);
module.exports = router; 