const posts = localStorage.getItem('posts');

function displayPost () {
    const postsArray = JSON.parse(posts);

    for (let i = 0; i < postsArray.length; i++) {
        const divPost = document.createElement('div');
        divPost.className = "divPost";

        const h3Title = document.createElement('h3');
        h3Title.textContent = postsArray[i].title;
        
    }

}