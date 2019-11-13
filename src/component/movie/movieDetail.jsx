import React, { Component } from 'react'

export default class movieDetail extends Component {
    constructor(props){
        super()
        this.state={
            id:props.match.params.id,
            movieInfo:[]
        }
    }
    render() {
        return (
            <div>
                电影--{this.state.id}
            </div>
        )
    }
    componentDidMount(){
        this.getMovieInfo()
    }
    getMovieInfo=async ()=>{
        // const res=await fetch(`/api/rexxar/api/v2/gallery/subject_feed?start=0&count=4&subject_id=1292001&ck=null`,{credentials: 'include'})
        // const data=await res.json()
        // this.setState({
        //     movieInfo:data.items
        // })
        // console.log(this.state.movieInfo)
    }
}
