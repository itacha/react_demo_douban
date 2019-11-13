// console.log('ok')
import React from 'react'
import ReactDOM from 'react-dom'
import fetchJSONP from 'fetch-jsonp'
import fetch from 'fetch'
import App from '@/component/App'
React.Component.prototype.baseURL='https://movie.douban.com/j/'
React.Component.prototype.$http=fetch
ReactDOM.render(<App />,document.getElementById('app'))
// import CmtList from '@/component/CmtList'

// // 渲染数字
// let a=10
// // 渲染字符串
// let str='nihao'
// // 渲染布尔值
// let bool=false
// // 为属性绑定值
// let title='999'
// // 渲染jsx元素
// const h1=<h1>hhhhhhh</h1>
// // 渲染jsx元素数组
// const arr=[
//     <h2 key="1">h2</h2>,
//     <h3 key="2">h3</h3>
// ]
// // 将普通字符串数组，转为jsx数组并渲染到页面上
// const arrStr = ['毛利兰', '柯南', '小五郎', '灰原哀']
// const nameArr=[]
// arrStr.forEach(item=>{
//     const temp=<h5 key={item}>{item}</h5>
//     nameArr.push(temp)
// })

// ReactDOM.render(<div>
//     <CmtList></CmtList>
//     {a+2}{str}{bool?'条件为真':'条件为假'}
//     {/* 在jsx中如果想要写行内样式，不能为style设置字符串的值，*/}
//     <p title={title} style={{color:'red',fontSize:'24px'}}>hello</p>
//     <hr />
//     {h1}
//     {arr}
//     {nameArr}
//     {arrStr.map(item=><div key={item}>{item}</div>)}
//     <p className="myclass">111</p>
//     <label htmlFor="o">2222</label>
// </div>,document.getElementById('app'))