console.log("hello there");
const key = "at_0O4oUtIPLre3fboFvRVbHdhoWX0mS";
const endpoint =
  "https://geo.ipify.org/api/v1?apiKey=at_0O4oUtIPLre3fboFvRVbHdhoWX0mS&ipAddress=8.8.8.8";
const userInput = document.getElementById("search");
const submitBtn = document.querySelector("button");

// // ?apiKey=at_0O4oUtIPLre3fboFvRVbHdhoWX0mS&ipAddress=103.74.67.28
//api - fetch & update dom
fetch(endpoint, {
  method: "GET",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let info = data;
    console.log(info.location.country);
  })
  .catch((err) => console.log("Error"));

// //use form input to update url and dom

// //dom manipulation

// //maps - update map based on the input

// const ipKey = "at_0O4oUtIPLre3fboFvRVbHdhoWX0mS";

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(userInput.value);
});
