const Koa = require('koa') // 引入koa
const cors = require('koa2-cors');
const app = new Koa() // 实例化

app.use(cors());

app.use(async (ctx) => {
    const randomNum = () => Math.random() > 0.1 ? Math.random() + 5 : Math.random() * 2 + 5;
    const contentType = 'application/json; chartset=utf-8'
    ctx.set('Content-Type', contentType)
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    ctx.body = {
        "code": 200,
        "msg": "success",
        "data": {
            cd1: randomNum().toFixed(2),
            cd2: randomNum().toFixed(2),
            cd3: randomNum().toFixed(2),
            cd4: randomNum().toFixed(2),
            cd5: randomNum().toFixed(2),
            cd6: randomNum().toFixed(2)
        }
    };
})
app.listen(3000)