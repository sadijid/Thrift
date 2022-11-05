var express = require('express');
const changes = require('../models/changes');


const changesadd = require('../models/changesadd');

var router = express.Router();


// const multer = require('multer');



//define storage for image

//  const storage = multer.diskStorage({

//   destination:function(req,file,callback)
//   {
//     callback(null,'./public/images');
//   },
//addback extension
// filename:function(req,file,callback){
//   callback(null,file.originalname);
// }

// });

//upload parameter for multer
// const upload = multer({
//   storage :storage,
//   limits:{
//     fieldSize: 1024 * 1024 * 3 ,
//   }
// });


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/Aboutus', function (req, res, next) {
  res.render('Aboutus')
});

router.get('/contact', function (req, res, next) {
  res.render('contact')
});

router.get('/customercare', function (req, res, next) {
  res.render('customercare')
});

router.post('/thriftform', async function (req, res, next) {
  await changes.insertMany([{
    Name: req.body.fname,
    Number: req.body.number,
    Address: req.body.add,
    Product_name: req.body.product,
    total_usage: req.body.used,
    expected_amount: req.body.price,
    img: req.body.image,
  }])
  res.render('Response');
});

router.get('/thriftform', async function (req, res, next) {
  const changesa = await changes.find();
  res.render('thriftform', { thriftItems: changesa });
})
router.post('/returnform', async function (req, res, next) {
  await changesadd.insertMany([{
    Name: req.body.name,
    Number: req.body.number,
    Address: req.body.address,
    Product: req.body.product,
    Price: req.body.price,
    Reason: req.body.reason,
  }])

  res.render('Response');

});

router.get('/returnform', async function (req, res, next) {
  const changesadder = await changesadd.find();
  res.render('returnform', { returnItems: changesadder });
})

module.exports = router;
