const Mock=require('mockjs');
let db=Mock.mock({
  'list|6-10':[{
    id:'@id',
    name:'@cname',
    Email:'@email',
    Website:Mock.Random.url(),
    birthday: '@date("yyyy-MM-dd")',  // 日期
    city: '@city(true)',   // 中国城市111
  }]
});

module.exports={
  [`GET /api/users`](req,res){
    // console.log(req);
    // console.log("-------req---------------");
    // console.log(res);
    // console.log("-------res---------------");
    res.status(200).json(db);
  },

  [`DELETE /api/users/:id`](req,res){
    //req.params去接受DELETE接口传回的id进行模拟删除操作。
    let user=req.params;
    console.log(req.params);
    db.list = db.list.filter((i)=>i.id!==user.id);

    res.status(200).json(user);
  }
}
