const postHolder = document.getElementById('postHolder');

const fetchdata = async () =>{
    try{
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const result = await data.json();
    console.log(result);
    return result;
    }
    catch(err)
    {
        console.log(err);
    }
}

(async()=>{
    let apiResponse = await fetchdata();
    for(let i=0; i<apiResponse.length; i++)
    {
        const post = document.createElement('div');
        post.classList.add('post');
        const postTitle = document.createElement('div');
        postTitle.classList.add('postTitle');
        const postDesc = document.createElement('div');
        postDesc.classList.add('postDesc');
        postTitle.textContent = apiResponse[i].title;
        postDesc.textContent = apiResponse[i].body;

        postHolder.appendChild(post);
        post.appendChild(postTitle);
        post.appendChild(postDesc);
    }
})();