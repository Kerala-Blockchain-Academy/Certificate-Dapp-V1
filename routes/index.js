var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/view', function(req, res, next) {
  data = {"courseName" : "Certified Ethereum Developer", "certificateID" : "KBACED1001", "cadndidateName" : "Ananthan", "grade" : "S", "date" : "2021-02-20"}
  res.render('viewCertificate', {data: data});
});

router.post('/view', function(req, res, next) {
  data = req.body;
  console.log(data);
  // res.send(data)
  MyContract.methods.certificateDetails(data.certificateID)
    .call({from:accountAddress})
    .then((result) => {
        console.log(result);
        res.render('viewCertificate', {data : result, certificateID : data.certificateID});
    })
});

router.get('/issue', function(req, res, next) {
  res.render('issueCertificate', {formClass : '', messageClass : 'hidden', certificateID : ''});
});

router.post('/issue', function(req, res, next) {
  data = req.body;
  console.log(data);
  // res.send(data)

  MyContract.methods.newCertificate(data.certificateID, data.courseName, data.cadndidateName, data.grade, data.date)
  .send({from : accountAddress, gasLimit : "927000"}).then((txn) => {
    res.render('issueCertificate', {formClass : 'hidden', messageClass : '', certificateID : data.certificateID})
  })

});

module.exports = router;
