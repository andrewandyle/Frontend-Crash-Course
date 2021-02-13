const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// returning a Promise
function createPost(post) {
  // a Promise takes in a callback
  // this callback takes two parameters: resolve and reject
  // we use resolve if we want to resolve our Promise, or reject if an error occurred
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      // If we set this to true, we'll get an Uncaught (in promise)
      // The solution is to use a .catch on this function call
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

// Instead of a callback, we could use .then to execute getPosts after the Promise
// .catch can handle the case that a Promise is rejected
// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Using Promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
// setTimeout has optional parameters (after the first two) to pass to the function
const promise3 = new Promise((resolve, reject) =>
  setTimeout(resolve, 2000, "Goodbye")
);
const promise4 = fetch(
  "https://jsonplaceholder.typicode.com/users"
).then((res) => res.json());

// Get the values back from the resolved Promises
// This will take however long the longest promise is
// (so either 2 seconds from promise3, or the fetch from promise4 if it takes longer)
// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

// Async / Await
// If we want to use await in a function, we must label that function async
async function init() {
  // We're waiting for createPost to be done before calling getPosts
  await createPost({ title: "Post Three", body: "This is post three" });
  getPosts();
}

init();

async function fetchUsers() {
  // this await fetch will return a promise
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

fetchUsers();
