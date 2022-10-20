const BASE_URL = 'https://strangers-things.herokuapp.com'
const COHORT = '2209-FTB-ET-WEB-FT'


export async function createNewPost (post, token) {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
            post
        })
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, options)
    const result = await response.json()
    return result.data
}

export async function getPosts() {
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts`)
    const result = await response.json()
    const posts = result.data.posts
    return posts
}

export async function registerUser(username, password) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/register`, options)
    const result = await response.json()
    return result.data
}

export async function getUserInfo(token){
    fetch(`${BASE_URL}/api/${COHORT}/users/me`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(response => response.json())
        .then(result => { 
          console.log(result);})
        //   return result.data

        
        .catch(console.error);

} 

export async function updatePost(post, id, token) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }, body: JSON.stringify({
            post
        })
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}`, options)
    const result = await response.json()
    return result
}
export async function deletePost(id, token) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/posts/${id}`, options)
    const result = await response.json()
    return result
}
export async function loginUser(username, password) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            user: {
                username,
                password
            }
        })
    }
    const response = await fetch(`${BASE_URL}/api/${COHORT}/users/login`, options)
    const result = await response.json()
    return result.data
}