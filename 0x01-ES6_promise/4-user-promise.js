function signUpUser(firstName, lastName) {
    if (!firstName || !lastName) {
        return Promise.reject(new Error('First name and last name are required.'));
    }
    return Promise.resolve({ firstName, lastName });
}

export default signUpUser;
