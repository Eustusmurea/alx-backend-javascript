function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Perform asynchronous operation (e.g., fetch data from API)
        setTimeout(() => {
            resolve("Response from API");
        }, 1000);
    });
}

export default getResponseFromAPI;
