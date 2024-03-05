function handleResponseFromAPI(promise) {
    promise.then(
        // On resolve
        () => {
            console.log('Got a response from the API');
            return { status: 200, body: 'success' };
        },
        // On reject
        () => {
            console.log('Got a response from the API');
            return new Error();
        }
    );
}

export default handleResponseFromAPI;
