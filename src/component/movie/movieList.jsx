import React, { Component } from 'react'
import { Spin,Card } from 'antd';
const { Meta } = Card;
import cssobj from '@/css/movielist.scss'
export default class movieList extends Component {
    constructor(props){
        super()
        this.state={
            type:props.match.params.type,
            currentPage:1,
            movieList:[],
            isLoading:true,
            pageSize:12,
            total:5
        }
    }
    render() {
        return (
            this.state.isLoading?<div style={{textAlign:'center'}}><Spin size='large'/></div>:
            <div>
                <div className={cssobj.movielist}>
                {
                    this.state.movieList.map(item=><Card key={item.id}
                        hoverable
                        className={cssobj.movieItem}
                        style={{ width: 240 }}
                        onClick={()=>this.gotoDeatil(item.url)}
                        cover={<img alt="example" src={item.cover} />}
                      >
                        <span>{item.title}</span>
                        {/* <span>{item.id}</span> */}
                        <span style={{color:'#e09015'}}>{item.rate}</span>
                      </Card>)
                }
            </div>
            <a href="#" className={cssobj.more} onClick={(e)=>{this.change(e)}}>加载更多</a>
            </div>
        )
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        this.setState({
            type:nextProps.match.params.type,
            currentPage:nextProps.match.params.page,
            isLoading:true,
            movieList:[]
        },function(){
            setTimeout(()=>{
                this.getMovieList()
            },1000)
        })
    }
    //组件将要挂载
    componentDidMount(){
        this.getMovieList()
    }
    getMovieList=async()=>{
        const res=await fetch(`/api/j/search_subjects?type=${this.state.type}&tag=热门&page_limit=12&page_start=${this.state.pageSize*(this.state.currentPage-1)}`)
         const data=await res.json()
         console.log(data)
         this.setState({
             movieList:this.state.movieList.concat(data.subjects),
             isLoading:false
         })
    }
    change=(e)=>{
        e.preventDefault()
        this.setState((prevState, props)=>({
            currentPage:prevState.currentPage/1 + 1
        }),function(){
            console.log(this.state.currentPage)
            this.getMovieList()
        })
    }
    gotoDeatil=(url)=>{
        // this.props.history.push('/movie/detail/'+id)
        window.open(url)
    }
}
