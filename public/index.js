// 请把与index.html页面相关的javascript代码写在这里
// 同时删除该注释
var bestCharge=require('../src/best-charge.js');
function calculatePrice() {
  // 想办法调用`bestCharge`并且把返回的字符串
  // 显示在html页面的`message`中
  let inputs=[];
  let item=["ITEM0001","ITEM0013","ITEM0022","ITEM0030"];
  var x=document.querySelectorAll(".number");
  for (let i=0;i<x.length;i++){
    if (x[i].value!==0){
      inputs.push(item[i]+" x "+x[i].value);
    }
  }
  //console.log(inputs);
  var output=bestCharge(inputs);
  var ms=document.getElementById("message");
  ms.innerHTML=output;
}

function clea() {
  // 清除用户的选择，以及页面显示的信息
  // 清除之后，用户可以继续正常使用各项功能
  //window.location.reload();
  var m=document.querySelectorAll(".number");
  for (let n=0;n<m.length;n++){
    m[n].value="";
  }
  var k=document.getElementById("message");
  k.innerHTML="";
}
