import { auth, database } from "../../firebase";
import store from "..";

const CREATE_PASSENGER = (passenger) => {
    return async dispatch => {
        let values;
        const UID = auth.currentUser.uid
        await database.ref(`passenger/${UID}`).set({
            id_no: passenger.id_no,
            type: passenger.passengerType,
            name: auth.currentUser.displayName
        })
        const dbRef = firebase.database().ref();
        await dbRef.child("passenger").child(userId).get().then((snapshot) => {
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
export { CREATE_PASSENGER }