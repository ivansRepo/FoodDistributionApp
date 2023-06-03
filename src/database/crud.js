import { collection, doc, getDocs, query, setDoc } from "firebase/firestore";
const donorCollection = collection(db,'FoodDonor')//reference
import { db } from "../firebaseConfig";

export function logUser(status,uuid) {
    const logUserReference = doc(db,'LogUser/9CS29PXHJcCYpP5sNf9l')
    const logData = {
        logStatus:status,
        userID:uuid
    };
    setDoc(logUserReference,logData)
.then(()=>{
        console.log('User has been logged')
    })
    .catch((error)=>{
        console.log(`I got an error! ${error}`)
    })
}

//const querySnapshot = getDocs(collection(db, "cities"));
//querySnapshot.forEach(element => {
 //   console.log(doc.id, " => ", doc.data());
//});

export async function queryForDocuments(){
    const foodQuery = query(
        collection(db,'Donation')//reference
        //can add where()
        //can add orderBy
    );

    const querySnapshot = await getDocs(foodQuery);
    const allDocs = querySnapshot.forEach(snap => {
        console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data())}`)
    });
    
}