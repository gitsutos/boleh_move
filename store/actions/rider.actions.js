import { auth, database } from "../../firebase";
import store from "..";

const CREATE_RIDER = (rider) => {
    return async dispatch => {
        let values;
        const UID = auth.currentUser.uid
        await database.ref(`rider/${UID}`).set({
            id_no: rider.id_no,
            organization: rider.organization,
            name: auth.currentUser.displayName
        })
        const dbRef = firebase.database().ref();
        await dbRef.child("rider").child(userId).get().then((snapshot) => {
            if (snapshot.exists()) {
                values = snapshot.val();
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        dispatch({
            type: 'ADD',
            payload: values
        })
    }
}

const ADD_RIDER = (values) => {
    return async dispatch => {
        dispatch({
            type: 'ADD',
            payload: values
        })
    }
}
export { CREATE_RIDER, }