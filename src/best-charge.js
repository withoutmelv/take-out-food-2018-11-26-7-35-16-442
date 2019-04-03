function bestCharge(selectedItems) {
  let cost_a=0;
  let cost_b=0;
  let cost=0;
  let items=[];
  let allItems=loadAllItems();
  let promotion=loadPromotions();
  for (let i=0;i<selectedItems.length;i++){
    for (let j=0;j<allItems.length;j++){
      if (selectedItems[i].split(" x ")[0]===allItems[j].id) {
        items.push({name:allItems[j].name,count:selectedItems[i].split(" x ")[1],sum:allItems[j].price*Number(selectedItems[i].split(" x ")[1])});
        cost_a+=allItems[j].price*Number(selectedItems[i].split(" x ")[1]);
        cost_b+=allItems[j].price*Number(selectedItems[i].split(" x ")[1]);
        if (selectedItems[i].split(" x ")[0]===promotion[1].items[0]||selectedItems[i].split(" x ")[0]===promotion[1].items[1]){
          cost_b-=(allItems[j].price/2)*Number(selectedItems[i].split(" x ")[1]);
        }
      }
    }
  }
  cost=cost_a;
  cost-=cost_b;
  if (cost_a>=30){
    cost_a-=6;
  }

  let head="============= 订餐明细 =============\n";
  let body="-----------------------------------\n";
  let foot="===================================";

  for (let m=0;m<items.length;m++){
    head=head+items[m].name+" x "+items[m].count+" = "+items[m].sum+"元"+"\n";
  }
  head=head+body;
  if (cost_a===cost_b&&cost_a<30) {
    head=head+"总计："+cost_a+"元\n"+foot;
  }else if (cost_a<=cost_b){
    head=head+"使用优惠:\n";
    head=head+"满30减6元，省6元\n"+body+"总计："+cost_a+"元\n"+foot;
  }else if (cost_b<cost_a){
    head=head+"使用优惠:\n";
    head=head+"指定菜品半价(黄焖鸡，凉皮)，省"+cost+"元\n"+body+"总计："+cost_b+"元\n"+foot;
  }
  return head;
}
module.exports=bestCharge;
