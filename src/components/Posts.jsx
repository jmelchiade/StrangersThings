import React, {useEffect, useState} from 'react'
import {getPosts} from '../api'


const Posts = (props) => {
    const [posts, setAllPosts] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await getPosts()
            setAllPosts(allPosts)
        }
        fetchPosts()
    }, [])
return ( <singlePost />)}



export default Posts

