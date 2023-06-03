import { setDoc, doc, getDoc, addDoc, collection } from "firebase/firestore";
import { db } from "../firebaseConfig";


//
let actualuserID = '';

export const currentUserID = (id) => {
  actualuserID = id;
  return actualuserID;
}

// FOOD DONOR TABLE

// ADD FOOD DONOR
export async function AddFoodDonor(em,fn,ln,loc,org,ph){
    const donorCollection = collection(db,'FoodDonor')//reference
    const newDonor = await addDoc(donorCollection,{
        email:em,
        firstName:fn,
        lastName:ln,
        location:loc,
        organisation:org,
        phone:ph
    });
    console.log(`Your doc was created at ${newDonor.path}`);
    console.log(`Your doc id ia ${newDonor.id}`);
}

export const AddFoodDonor1 = async (user_id, user_name) => {
  try {
      await setDoc(doc(db, "User", user_id), {
          username: user_name,
      });
      
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

// FOOD DONATION TABLE

// ADD FOOD DONATION
export async function AddFoodDonation(date,desc,foodDonor,foodName,loc,quantity,time,veg){
    const donationCollection = collection(db,'Donation')//reference
    const newDonation = await addDoc(donationCollection,{
        date:date,
        description:desc,
        foodDonor:foodDonor,
        foodName:foodName,
        location:loc,
        quantity:quantity,
        time:time,
        veg:veg
    });
    console.log(`Your doc was created at ${newDonation.path}`);
    console.log(`Your doc id ia ${newDonation.id}`);
}

// FOOD DONATION TABLE

// ADD To GIVELIST
export async function AddGiveList(date,desc,foodDonor,foodName,loc,quantity,time,veg){
    const donationCollection = collection(db,'GiveList')//reference
    const newDonation = await addDoc(donationCollection,{
        date:date,
        description:desc,
        foodDonor:foodDonor,
        foodName:foodName,
        location:loc,
        quantity:quantity,
        time:time,
        veg:veg
    });
    console.log(`Your doc was created at ${newDonation.path}`);
    console.log(`Your doc id ia ${newDonation.id}`);
}