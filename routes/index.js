const express = require('express');
const router = express.Router();
const path=require("path")
const excel=require("exceljs")

router.get('/', function(req, res) {
  res.sendFile(`${path.dirname(__dirname)}/views/index.html`)
});

const saveData=(sheetno,emailid,username,persona)=>{
  workbook=new excel.Workbook()
  workbook.xlsx.readFile("./public/file/user.xlsx").then(function() {
    var worksheet = workbook.getWorksheet(sheetno);
    worksheet.addRow([emailid,username,persona])
    // worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
    //   console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
    // });
    workbook.xlsx.writeFile("./public/file/user.xlsx").then(function () {
      console.log("User Save")
    });
});
}

router.post("/api/employee",(req,res)=>{
  try{

    let {emailid,username,persona}=req.body;
    if(!String(emailid).endsWith('@gmail.com')){
      return res.status(500).json({status:false})
    }
    else{
        saveData(1,emailid,username,persona)
        return res.status(200).json({status:true})
    }
  }
  catch(e){
    console.log(e)
    return res.status(500).json({status:false})
  }
})

router.post("/api/manager",(req,res)=>{
  try{

    let {emailid,username,persona}=req.body;
    if(!String(emailid).endsWith('@gmail.com')){
      return res.status(500).json({status:false})
    }
    else{
        saveData(2,emailid,username,persona)
        return res.status(200).json({status:true})
    }
  }
  catch(e){
    console.log(e)
    return res.status(500).json({status:false})
  }
})

router.post("/api/yourmanager",(req,res)=>{
  try{

    let {emailid,username,persona}=req.body;
    if(!String(emailid).endsWith('@gmail.com')){
      return res.status(500).json({status:false})
    }
    else{
        saveData(3,emailid,username,persona)
        return res.status(200).json({status:true})
    }
  }
  catch(e){
    console.log(e)
    return res.status(500).json({status:false})
  }
})

module.exports = router;
