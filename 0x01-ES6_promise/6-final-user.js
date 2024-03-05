import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
    const promises = [
        signUpUser(firstName, lastName),
        uploadPhoto(fileName)
    ];

    const results = await Promise.allSettled(promises);

    return results.map(result => ({
        status: result.status,
        value: result.status === 'fulfilled' ? result.value : result.reason
    }));
}

export default handleProfileSignup;
