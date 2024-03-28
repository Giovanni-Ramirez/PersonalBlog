const posts = localStorage.getItem('posts');
const section = document.querySelector('section');

function displayPosts () {
    const postsArray = JSON.parse(posts);

    for (let i = 0; i < postsArray.length; i++) {
        const divPost = document.createElement('div');
        divPost.className = "divPost";

        const h2Title = document.createElement('h2');
        h2Title.textContent = postsArray[i].title;
        divPost.append(h2Title);

        const pContext = document.createElement('p');
        pContext.textContent = postsArray[i].context;
        divPost.append(pContext);

        const h3Author = document.createElement('h3');
        h3Author.textContent = "by: " + postsArray[i].author;
        divPost.append(h3Author);

        section.append(divPost);
    }
};

displayPosts();

// DarkLightMode 
const darkLightMode = document.querySelector('#darkLightMode');
const bodyLD = document.querySelector('body');

let mode = 'dark';

darkLightMode.addEventListener('click', function() {
    if (mode === 'dark'){
        mode = 'light';
        bodyLD.setAttribute('class', 'light');
    } else {
        mode = 'dark';
        bodyLD.setAttribute('class', 'dark');
    }
});