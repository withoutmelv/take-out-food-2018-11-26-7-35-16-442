function loadPromotions() {
  return [{
    type: '满30减6元'
  }, {
    type: '指定菜品半价',
    items: ['ITEM0001', 'ITEM0022']
  }];
}

var promoption=[{
  type: '满30减6元'
}, {
  type: '指定菜品半价',
  items: ['ITEM0001', 'ITEM0022']
}];

var x=document.getElementById("promotions");
x.innerHTML="优惠信息："+"<br>"+"第一种:"+promoption[0].type+"<br>"+"第二种:"+promoption[1].type+"(黄焖鸡，凉皮)";
