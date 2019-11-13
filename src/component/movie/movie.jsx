import React from 'react'
import { Layout, Menu } from 'antd';
const {  Content, Sider } = Layout;

import {Route,Link,Redirect,Switch} from 'react-router-dom'
import CmtList from '@/component/CmtList'
import movieList from '@/component/movie/movieList'
import movieDetail from '@/component/movie/movieDetail'
export default class movie extends React.Component{
    constructor(){
        super()
        this.state={}
    }

    render(){
        return <Layout style={{ padding: ' 0', background: '#fff' ,height:'100%'}}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
               <Menu.Item key="1"><Link to="/movie/movie/1">热门电影</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/movie/tv/1">热门电视剧</Link></Menu.Item>
                {/* <Menu.Item key="3"><Link to="/movie/top250/1">top250</Link></Menu.Item> */}
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <Switch>
                <Route exact path="/movie" render={()=><Redirect to="/movie/movie/1"/>}></Route>
                <Route exact path="/movie/detail/:id" component={movieDetail}></Route>
                <Route exact path="/movie/:type/:page" component={movieList}/>
              </Switch>
            </Content>
          </Layout>    
    }
}