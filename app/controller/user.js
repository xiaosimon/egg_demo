const Controller = require('egg').Controller;

class UserController extends Controller {
  async list() {
    const method=function(){
      console.log(arguments);
    }
    const dataList = {
      list: [],
      method:method
    };
    await this.app.mysql.query('select t.* from user_tbl t;').then( data=> {
      console.log('query has been sent');
      for(let i in data) {
        console.log(data[i]);
        const item={
          id:data[i].id,
          name:data[i].name
        }
        dataList.list.push(item);
      }
    })
    await this.ctx.render('user/list.nj', dataList);

  }
}

module.exports = UserController;