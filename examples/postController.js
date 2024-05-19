const posts = [
    {id: 1, title: "Post 1"},
    {id: 2, title: "Post 2"}
];

const getPosts = () => posts;

//export {getPosts}; //normal exports  
export const getPostsLength = () => posts.length;
export default getPosts;
