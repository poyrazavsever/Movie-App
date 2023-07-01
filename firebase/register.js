import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase-config"
import toast from "react-hot-toast"

const auth = getAuth(app)

export const register = async (email, password) => {
  try{
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
    return user;
  }catch(err){
    toast.error(err.message)
  }
}
