import React, { Component } from 'react'
import axios from 'axios'
export default class AllArtist extends Component {
    state = {
        allArtist: []
    }

    componentDidMount(){
        axios.get('/api/v1/artist')
            .then((res)=>{
                console.log(res.data)
            })
    }
    render() { 
        return (
            <div>
                
            </div>
        )
    }
}
