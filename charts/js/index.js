/*
 * @Author: hcm083214 13723742351@163.com
 * @Date: 2022-11-20 22:23:20
 * @LastEditTime: 2022-11-20 22:57:55
 * @LastEditors: hcm083214 13723742351@163.com
 * @Description: 
 * @FilePath: \09.蓝桥杯\charts\js\index.js
 */
// 指定图表的配置项和数据
let result;
const data = {
    title: {
        text: '产品品质监控看板',
    },
    xAxis: {
        data: [],
    },
    // 补全 yAxis 的设置，要求表格y坐标最大为7，最小为4
    yAxis: { min: 4, max: 7 },
    series: [
        {
            name: 'CD',
            type: 'line',
            data: [],
        },
        {
            name: 'OOC-min',
            symbol: "none",
            type: 'line',
            data: [5, 5, 5, 5, 5, 5],
            color: "#456"
        },
        {
            name: 'OOC-max',
            symbol: "none",
            type: 'line',
            data: [6, 6, 6, 6, 6, 6],
            color: "#456"
        }
    ]
};
function Ajax() {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            //如果使用的浏览器是 IE7+, Firefox, Chrome, Opera, Safari
            xhr = new XMLHttpRequest();
        } else {
            //如果使用的浏览器是 IE6, IE5
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhr.open("get", "http://localhost:3000");
        xhr.send();
        xhr.onreadystatechange = function () {
            // 补全 ajax 代码
            if (xhr.readyState == 4) {
                if (xhr.status == 200 || xhr.status == 304) {
                    resolve(JSON.parse(xhr.responseText));
                }
            }
        }
    })
}
async function renderChart() {
    result = await Ajax();
    const myChart = echarts.init(document.getElementById('main'));
    // 补全代码，设置表格的数据
    data.xAxis.data = Object.keys(result.data);
    data.series[0].data = [];
    data.xAxis.data.forEach(item => {
        data.series[0].data.push(result.data[item]);
    });
    myChart.setOption(data, true);
}
setInterval(() => {
    renderChart()
}, 2000)
module.exports = {
    result, data
}