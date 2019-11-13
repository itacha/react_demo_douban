import React from 'react'
import {HashRouter,Route,Link,Redirect} from 'react-router-dom'

import home from '@/component/home'
import movie from '@/component/movie/movie'
import about from '@/component/about'

import cssobj from '@/css/app.scss'

import { Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

export default class App extends React.Component {
    constructor(){
        super()
        this.state={}
    }

    render(){
        // return <HashRouter>
        //     <div>
        //         <h3>app根组件</h3>
        //         <Link to='/home'>首页</Link>
        //         <Link to='/movie'>电影</Link>
        //         <Link to='/about'>关于</Link>
        //         <Route path='/home' component={home}></Route>
        //         <Route path='/movie' component={movie}></Route>
        //         <Route path='/about' component={about}></Route>
        //     </div>
        // </HashRouter>
        return <HashRouter>
            <Layout className="layout" style={{height:'100%'}}>
        <Header>
          <div className={[cssobj.logo]} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[location.hash.split('/')[1]||'movie']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="movie"><Link to='/movie'>电影</Link></Menu.Item>
            <Menu.Item key="home"><Link to='/home'>其它</Link></Menu.Item>
            <Menu.Item key="about"><Link to='/about'>关于</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0',backgroundColor:'#fff' }}>
            <Route exact path="/" render={()=><Redirect to="/movie"/>}></Route>
            <Route path='/home' component={home}></Route>
            <Route path='/movie' component={movie}></Route>
            <Route path='/about' component={about}></Route>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
        </HashRouter>
    }
}
