const submitForm = document.querySelector("#formSubmit");


function blogPost (event) {
    event.preventDefault();

    const titleInput = document.querySelector('#title').value;
    const contextInput = document.querySelector('#context').value.trim();
    const authorInput = document.querySelector('#author').value;

    let blogObject = {};
    
    blogObject.title = titleInput;
    blogObject.context = contextInput;
    blogObject.author = authorInput;

    // checks is local storage 'posts' exist
    if (localStorage.getItem('posts') !== null) {
        const postsStr = localStorage.getItem('posts');
        const postsParsed = JSON.parse(postsStr);
        // pushed the new object into the array
        postsParsed.push(blogObject);
        // need to push back into local storage
        const jsonArray1 = JSON.stringify(postsParsed);
        localStorage.setItem('posts', jsonArray1);
    } else {
        // if local doesn't exsit then make one and push into local storage
        const firstArray = [];
        firstArray.push(blogObject);
        const jsonArray2 = JSON.stringify(firstArray);
        localStorage.setItem('posts', jsonArray2);
    }

    var myWindow = window.open("../../blog.html", "_self");
    myWindow();
    
}

// !!!Need to add a funciton to call when submitt
submitForm.addEventListener("submit", blogPost);