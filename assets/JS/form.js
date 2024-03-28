const submitForm = document.querySelector("#formSubmit");

function checkInputs (event) {
    let formIsValid = true;
    const inputs = submitForm.querySelectorAll('input');
    const fillInputs = document.querySelector('#fillInputs');

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            formIsValid = false;
        } else {
            formIsValid = true;
        }
    })

    if (formIsValid === false) {
        event.preventDefault();
        fillInputs.textContent = 'Please enter a value in all fields';
    } else {
        event.preventDefault();
        fillInputs.textContent = '';
        blogPost(event);
    }
};




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

    var myWindow = window.open("/blog.html", "_self");
    myWindow();
    
}

// !!!Need to add a funciton to call when submitt
submitForm.addEventListener("submit", checkInputs);




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