const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  // takes a callback and a delay time in milliseconds
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// This initially doesn't work if we call getPosts() before this
// getPosts took 1 second and painted the DOM before this ran
function createPostOld(post) {
  setTimeout(() => {
    posts.push(post);
  }, 2000);
}

// We can instead add a callback here
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

createPost({ title: "Post Three", body: "This is post three" }, getPosts);
