export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to DB
        const firestore = getFirestore();
        const profile = getState().firebaseR.profile;
        const authorId = getState().firebaseR.auth.uid;
        firestore.collection('projects').add({
            ...project,
            firstName: profile.firstName,
            lastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        })
            .then(() => {
                dispatch({ type: 'CREATE_PROJECT', project });
            })
            .catch((err) => {
                dispatch({ type: 'CREATE_PROJECT_ERROR', err });
            })
    }
}; 