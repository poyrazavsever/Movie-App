import { useState } from "react"
import Input from '@/components/Input'
import Icon from "@/components/Icon"

function Login() {

    const lineStyle = "h-[1px] w-full bg-neutral-700"
    
    const [fileValue, setFileValue] = useState(false);
    const [emailValue, setEmailValue] = useState(false);
    const [usernameValue, setUsernameValue] = useState(false);
    const [passwordValue, setPasswordValue] = useState(false);

    console.log(fileValue, emailValue, usernameValue, passwordValue)

  return (

    <div className='flex justify-center mt-12'>

        <div className="relative">

            <div id="shadow" className='absolute top-12 -left-12 w-24 h-24 bg-violet-600 opacity-20 blur-3xl !-z-40'></div>

            <div className="py-8 flex flex-col items-start gap-4">
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-400">Giriş Yap</h3>
                <div className={lineStyle}></div>
            </div>

            <form className='inline-flex flex-col items-start gap-7'>


                <div className="flex flex-col items-start gap-2">
                    
                    <label className="text-sm font-medium text-neutral-500 cursor-pointer" for="file_input">Profil Fotoğrafı Yükle <span className="text-xs text-neutral-600 pl-2">Zorunlu Değil</span></label>

                    <input className='relative cursor-pointer bg-neutral-900 border border-neutral-800 text-neutral-700 text-sm pl-28 py-2 rounded focus:outline-none w-56 sm:w-72 file:px-4 file:h-full file:absolute file:top-0 file:left-0 file:bg-neutral-800 file:border-none file:border-neutral-700 file:text-neutral-500' id="file_input" type="file" onChange={(e) => setFileValue(e.target.value)}/>

                </div>

                <Input inputType='email' id="email" label="E-Posta" palceholder="ornek@ohrama.com" setValue={setEmailValue}/>

                <Input id="username" label="Kullanıcı Adı" palceholder="Ohrama Jr" setValue={setUsernameValue}/>

                <Input inputType='password' id="password" label="Parola" palceholder="*********" setValue={setPasswordValue}/>

                <button className='w-full py-2 text-sm text-violet-100 font-medium bg-violet-700 rounded hover:bg-violet-900 transition-all disabled:bg-neutral-700 disabled:text-neutral-500' disabled={!emailValue || !usernameValue || !passwordValue ? true : false}>Giriş Yap</button>

                <div className='w-full flex items-center justify-between gap-4 my-3'>
                    <div className={lineStyle}></div>
                    <span className='text-xs font-bold uppercase text-neutral-500 w-36 text-center'>Ya da</span>
                    <div className={lineStyle}></div> 
                </div>

                <button className='w-full py-2 text-sm text-neutral-300 font-medium border border-neutral-500 rounded hover:border-neutral-700 transition-all flex items-center justify-center gap-2'>
                    <Icon iconType="ai" iconName="AiOutlineGoogle" iconColor="text-neutral-300" classnames="text-xl"/>
                    <span>Google ile Devam Et</span>
                </button>

                <button className='w-full py-2 text-sm text-neutral-300 font-medium border border-neutral-500 rounded hover:border-neutral-700 transition-all flex items-center justify-center gap-2'>
                    <Icon iconType="ai" iconName="AiOutlineGithub" iconColor="text-neutral-300" classnames="text-xl"/>
                    <span>Github ile Devam Et</span>
                </button>

            </form>

        </div>
        
    </div>
    
  )
}

export default Login