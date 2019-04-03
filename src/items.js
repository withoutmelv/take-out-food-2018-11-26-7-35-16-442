function loadAllItems() {
  return [{
    id: 'ITEM0001',
    name: '黄焖鸡',
    price: 18.00
  }, {
    id: 'ITEM0013',
    name: '肉夹馍',
    price: 6.00
  }, {
    id: 'ITEM0022',
    name: '凉皮',
    price: 8.00
  }, {
    id: 'ITEM0030',
    name: '冰锋',
    price: 2.00
  }];
}

var menu=document.querySelectorAll('.item');
var i;
var item=[{
  id: 'ITEM0001',
  name: '黄焖鸡',
  price: 18.00
}, {
  id: 'ITEM0013',
  name: '肉夹馍',
  price: 6.00
}, {
  id: 'ITEM0022',
  name: '凉皮',
  price: 8.00
}, {
  id: 'ITEM0030',
  name: '冰锋',
  price: 2.00
}];
for (i=0;i<menu.length;i++){
  menu[i].innerHTML="菜品："+item[i].name+"<br>"+"价格："+item[i].price;
}


