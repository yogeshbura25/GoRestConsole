let consoleFormE1 = document.getElementById("consoleForm");
let requestUrlE1 = document.getElementById("requestUrl");
let requestUrlErrMsgE1 = document.getElementById("requestUrlErrMsg");
let requestMethodE1 = document.getElementById("requestMethod");
let requestBodyE1 = document.getElementById("requestBody");
let responseSatusE1 = document.getElementById("responseStatus");
let responseBodyE1 = document.getElementById("responseBody");

let formData = {
    requestUrl: "https://gorest.co.in/public-api/users",
    requestMethod: "POST",
    requestBody: ""
};
requestUrlE1.addEventListener("change", function(event) {
    formData.requestUrl = event.target.value;
});
requestMethodE1.addEventListener("change", function(event) {
    formData.requestMethod = event.target.value;
});
requestBodyE1.addEventListener("change", function(event) {
    formData.requestBody = event.target.value;
});

function validateRequestUrl(formData) {
    let {
        requestUrl
    } = formData;
    if (requestUrl === "") {
        requestUrlErrMsgE1.textContent = "Required*";
    } else {
        requestUrlErrMsgE1.textContent = "";
    }
}

function sendRequest(formData) {
    let {
        requestUrl,
        requestMethod,
        requestBody,
    } = formData;
    let options = {
        method: requestMethod,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer 88d52bbcb1d08c8abc4749b31118796c1f44c633b20b9ba4c4bfb18e01d1b3f0"
        },
        body: requestBody
    };
    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            let responseSatus = jsonData.code;
            let responseBody = JSON.stringify(jsonData);
            responseSatusE1.value = responseSatus;
            responseBodyE1.value = responseBody;
        });
}
consoleFormE1.addEventListener("submit", function(event) {
    event.preventDefault();
    validateRequestUrl(formData);
    sendRequest(formData);
})