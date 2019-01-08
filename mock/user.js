const Mock=require('mockjs');
let db=Mock.mock({
  'list|6-10':[{
    id:'@id',
    name:'@cname',
    Email:'@email',
    Website:Mock.Random.url(),
    birthday: '@date("yyyy-MM-dd")',  // 日期
    city: '@city(true)',   // 中国城市
  }]
});

module.exports={
  [`GET /api/users`](req,res){

    res.status(200).json(db);
  },

  [`DELETE /api/users`](req,res){

    let user=req.body;
    console.log(req);
    user.id=Mock.mock('@id');
    db.data.filter((i)=>i.id===user.id);

    res.status(200).json(user);
  }
}
