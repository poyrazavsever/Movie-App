import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/firebase-config"
import toast from "react-hot-toast"

const auth = getAuth(app)

export const login = async (email, password) => {
  try{    
    const {user} = await signInWithEmailAndPassword(auth, email, password)
    toast.success("Başarıyla giriş yaptınız.")
    return user;
  }catch(err){
    toast.error(err.code)
    return false
  }
}
