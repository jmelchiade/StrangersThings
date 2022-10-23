// import React, { useState } from "react";



// const SearchBar = ({ posts }) => {
//     const [posts, setPosts] = useState(posts);
//     const [search, setSearch] = useState(null);
  
//     const handleChange = (e) => {
//       let { value } = e.target;
//       setSearch(value);
//     };
//     const onSearch = () => {
//       if (search === "") return;
//       let searchPosts = posts.filter((post) => {
//         for (const p in post) {
//           if (search === post[p]) {
//             return post;
//           }
//         }
//       });
//       setPosts(searchedPosts);
//     };
//     const resetSearch = () => {
//       setPosts(posts);
//     };
//     return (
//         <div>
// <input type="text" onChange={handleChange} />
// <button onClick={onSearch}>Search</button>
// <button onClick={resetSearch}>Reset Search</button>
//         </div>
//     )




//   }

// export default SearchBar;