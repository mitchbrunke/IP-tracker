const apiKey = "at_0O4oUtIPLre3fboFvRVbHdhoWX0mS";
const userInput = document.getElementById("search");
const submitBtn = document.querySelector("button");
const ipValue = document.querySelector("#Ip-result");
const location = 

const ip = userInput.value;

//api - fetch
const getIp = async (ip) => {
  //creating the endpoint
  const base = "https://geo.ipify.org/api/v1";
  const query = `?apiKey=${apiKey}&ipAddress=${ip}`;
  // fetching data
  const response = await fetch(base + query);
  const data = await response.json();
  return data;
};

//update ui

const updateUi = (data) => {
  console.log(data.location);
  ipValue.innerText = `${data.ip}`;
};

//event listener to catch IP
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const ip = userInput.value.trim();
  //invoking function to update ui
  getIp(ip)
    .then((data) => updateUi(data))
    .catch((err) => console.log(err));
});
