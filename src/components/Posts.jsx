import React, {useEffect, useState} from 'react'
import {getPosts} from '../api'
import SinglePost from './SinglePost'


const Posts = (props) => {
    const [posts, setAllPosts] = useState([])
    useEffect(() => {
        async function fetchPosts() {
            const allPosts = await getPosts()
            setAllPosts(allPosts)
        }
        fetchPosts()
    }, [])
return ( <SinglePost posts={posts} />)}



export default Posts

