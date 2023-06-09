import { collection, doc, getDoc, getDocs, query, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
//import { nameAlpha } from "../screens/GiveListScreen";


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

export async function queryLogUser(){
  const foodQuery = query(
      collection(db,'LogUser')//reference
      //can add where()
      //can add orderBy
  );

  const querySnapshot = await getDoc(foodQuery);
  const doc = querySnapshot.userID

  //console.log(JSON.stringify(filterData1,null,2))
  //nameAlpha(filterData1)
  return doc;
}

// get donors
export async function updateDonor(email,firstName,lastName,location,organisation,phone,donorID){
    const querySnapshot = doc(db,'FoodDonor',donorID);

    await updateDoc(querySnapshot,{
            email:email,
            firstName:firstName,
            lastName:lastName,
            location:location,
            organisation:organisation,
            phone:phone,            
          }
        );
}
//update
export async function queryDonor(donorID){
  const filterData1 = []; 
  console.log("UserID " + donorID)
  let email,firstName,lastName,location,organisation,phone,id;
  const querySnapshot = collection(db,'FoodDonor');

  const snap = await getDocs(querySnapshot);
      snap.forEach((doc)=>{
        if(doc.id === donorID){
          email=doc.data().email,
          firstName=doc.data().firstName,
          lastName=doc.data().lastName,
          location=doc.data().location,
          organisation=doc.data().organisation,
          phone=doc.data().phone,            
          id = doc.data().id
        }
      })      
    console.log(({email,firstName,lastName,location,organisation,phone,id}))

  return {email,firstName,lastName,location,organisation,phone,id};
}

//const querySnapshot = getDocs(collection(db, "cities"));
//querySnapshot.forEach(element => {
 //   console.log(doc.id, " => ", doc.data());
//});


export async function queryForDocuments1(){
    const filterData1 = []; 
    const foodQuery = query(
        collection(db,'GiveList')//reference
        //can add where()
        //can add orderBy
    );

    const querySnapshot = await getDocs(foodQuery);
    const allDocs = querySnapshot.forEach(snap => {
        //console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data().foodName)}`)
        const data = {
            date:snap.data().date,
            description:snap.data().description,
            foodDonor:snap.data().foodDonor,
            foodName:snap.data().foodName,
            location:snap.data().location,
            quantity:snap.data().quantity,
            time:snap.data().time,
            veg:snap.data().veg,
            id : snap.id
        };
        filterData1.push(data);
        //console.log(`Document ${filterData1}`)
        //console.log(JSON.stringify(filterData1,null,2))
    });
    //console.log(JSON.stringify(filterData1,null,2))
    //nameAlpha(filterData1)
    return filterData1;
}

export async function queryForRestaurant(){
    const filterData1 = []; 
    const foodQuery = query(
        collection(db,'Donation')//reference
        //can add where()
        //can add orderBy
    );

    const querySnapshot = await getDocs(foodQuery);
    const allDocs = querySnapshot.forEach(snap => {
        //console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data().foodName)}`)
        const data = {
            date:snap.data().address,
            description:snap.data().latitude,
            foodDonor:snap.data().longitude,
            foodName:snap.data().location,
            id : snap.id
        };
        filterData1.push(data);
        //console.log(`Document ${filterData1}`)
        //console.log(JSON.stringify(filterData1,null,2))
    });
    //console.log(JSON.stringify(filterData1,null,2))
    //nameAlpha(filterData1)
    return filterData1;
}

export async function queryForFoodStore(){
    const filterData1 = []; 
    const foodQuery = query(
        collection(db,'Donation')//reference
        //where()
        //can add orderBy
    );

    const querySnapshot = await getDocs(foodQuery);
    const allDocs = querySnapshot.forEach(snap => {
        //console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data().foodName)}`)
        const data = {
            date:snap.data().date,
            description:snap.data().description,
            foodDonor:snap.data().foodDonor,
            foodName:snap.data().foodName,
            location:snap.data().location,
            quantity:snap.data().quantity,
            veg:snap.data().veg,
            id : snap.data().id
        };
        filterData1.push(data);
        //console.log(`Document ${filterData1}`)
        //console.log(JSON.stringify(filterData1,null,2))
    });
    //console.log(JSON.stringify(filterData1,null,2))
    //nameAlpha(filterData1)
    return filterData1;
}

export async function queryForGiveList(){
    const filterData1 = []; 
    const foodQuery = query(
        collection(db,'GiveList')//reference
        //can add where()
        //can add orderBy
    );

    const querySnapshot = await getDocs(foodQuery);
    const allDocs = querySnapshot.forEach(snap => {
        //console.log(`Document ${snap.id} contains ${JSON.stringify(snap.data().foodName)}`)
        const data = {
            date:snap.data().date,
            description:snap.data().description,
            foodDonor:snap.data().foodDonor,
            foodName:snap.data().foodName,
            location:snap.data().location,
            quantity:snap.data().quantity,
            time:snap.data().time,
            veg:snap.data().veg,
            id : snap.id
        };
        filterData1.push(data);
        //console.log(`Document ${filterData1}`)
        //console.log(JSON.stringify(filterData1,null,2))
    });
    //console.log(JSON.stringify(filterData1,null,2))
    //nameAlpha(filterData1)
    return filterData1;
}

//Donation qty in each place

export async function DonationQty(location) {
    let sum = 0;
    const foodQuery = query(
      collection(db, 'GiveList')
        .where('location', '==', location)
    );
  
    const querySnapshot = await getDocs(foodQuery);
  
    if (querySnapshot.empty) {
      return sum; // Return 0 if no documents found
    }
  
    querySnapshot.forEach((snap) => {
      sum += parseInt(snap.data().quantity);
    });
    console.log("------------------------->" + JSON.stringify(sum))
    return sum;
  };

  // Donors from each place
  export async function DonorQtyForEachRegion(location) {
    let uniqueDonorIDs = new Set(); // Create a Set to store unique donorIDs
  
    const foodQuery = query(
      collection(db, 'GiveList')
        .where('location', '==', location)
    );
  
    const querySnapshot = await getDocs(foodQuery);
  
    if (querySnapshot.empty) {
      return 0; // Return 0 if no documents found
    }
  
    querySnapshot.forEach((snap) => {
      uniqueDonorIDs.add(snap.data().foodDonor); // Add donorID to the Set
    });
  
    const uniqueDonorCount = uniqueDonorIDs.size; // Get the size of the Set
  
    return uniqueDonorCount;
  }

  //Donation qty 

export async function AllDonationQty(location) {
    let sum = 0;
    const foodQuery = query(
      collection(db, 'GiveList')
    );
  
    const querySnapshot = await getDocs(foodQuery);
  
    if (querySnapshot.empty) {
      return sum; // Return 0 if no documents found
    }
  
    querySnapshot.forEach((snap) => {
      sum += parseInt(snap.data().quantity);
    });
  
    return sum;
  }

  //Count food Donor
  export async function countFoodDonor() {
    const foodDonorCollection = collection(db, 'FoodDonor'); // Replace 'db' with your Firestore instance
  
    const querySnapshot = await getDocs(foodDonorCollection);
    const documentCount = querySnapshot.size;
  
    return documentCount;
  }