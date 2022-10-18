import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom/client"
import { getPosts } from '../api'

const Posts=()=> {

const [allPosts, setAllPosts] = useState([])

useEffect(()=> {
    const fetchedPosts = getPosts()
    setAllPosts(fetchedPosts)
    
},[])

console.log('this is all posts', allPosts)
    return(
        <h1>I am Posts</h1>
    )
}

export default Posts