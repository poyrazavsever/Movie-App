import { useState, useEffect } from "react"
import Input from '@/components/Input'
import Icon from "@/components/Icon"
import anime from 'animejs'
import { useRouter } from "next/router"
import Link from "next/link"

// Auth
import { login } from "@/firebase/login"
import toast from "react-hot-toast"

function Login() {

    const lineStyle = "h-[1px] w-full bg-neutral-700"
    
    const router = useRouter();
    const [emailValue, setEmailValue] = useState(false);
    const [passwordValue, setPasswordValue] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = await login(emailValue, passwordValue)
            if(typeof window !== 'undefined' && user){
                localStorage.setItem("user", JSON.stringify(user))
                router.push("/")
                toast.success('Başarıyla giriş yapıldı!')
            }
        console.log(user)
    }
    
    const animate = () => {
        const loader = anime.timeline()

        loader.add({
            targets: '#shadow',
            delay: 0,
            translateY: [100, 0],
            opacity: [0, .4],
            duration: 300,
            easing: "easeInOutExpo"
        })

        loader.add({
            targets: '#title',
            delay: .3,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 300,
            easing: "easeInOutExpo"
        })


        loader.add({
            targets: '#emailAnimate',
            delay: .5,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 300,
            easing: "easeInOutExpo"
        })


        loader.add({
            targets: '#passwordAnimate',
            delay: .7,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 300,
            easing: "easeInOutExpo"
        })

        loader.add({
            targets: '#submitBtnAnimate',
            delay: .9,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 150,
            easing: "easeInOutExpo"
        })

        loader.add({
            targets: '#info',
            delay: 1.3,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 150,
            easing: "easeInOutExpo"
        })

        loader.add({
            targets: '#orAnimate',
            delay: 1.5,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 300,
            easing: "easeInOutExpo"
        })

        loader.add({
            targets: '#googleBtnAnimate',
            delay: 1.8,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 150,
            easing: "easeInOutExpo"
        })

        loader.add({
            targets: '#githubBtnAnimate',
            delay: 2,
            translateY: [100, 0],
            opacity: [0, 1],
            duration: 150,
            easing: "easeInOutExpo"
        })

    }

    useEffect(() => {
        if(typeof window !== 'undefined'){
            const user = localStorage.getItem("user")
            if(user){
                router.push("/")
                toast.error('Zaten giriş yaptınız.')
            }
        }
        animate()
    }, [])

  return (

    <div className='flex justify-center mt-24'>

        <div className="relative">

            <div id="shadow" className='absolute top-12 -left-12 w-24 h-24 bg-violet-700 blur-3xl !-z-40'></div>

            <div className="py-8 flex flex-col items-start gap-4" id="title">
                <h3 className="text-xl md:text-2xl font-semibold text-neutral-400">Giriş Yap</h3>
                <div className={lineStyle}></div>
            </div>

            <form className='inline-flex flex-col items-start gap-7' onSubmit={handleSubmit}>

                <div id="emailAnimate">
                    <Input inputType='email' id="email" label="E-Posta" palceholder="ornek@ohrama.com" setValue={setEmailValue}/>
                </div>

                <div id="passwordAnimate">
                        <Input inputType='password' id="password" label="Parola" palceholder="*********" setValue={setPasswordValue}/>
                </div>                

                <button id="submitBtnAnimate" type="submit" className='w-full py-2 text-sm text-violet-100 font-medium bg-violet-700 rounded hover:bg-violet-900 transition-all disabled:bg-neutral-700 disabled:text-neutral-500' disabled={!emailValue || !passwordValue ? true : false}>Giriş Yap</button>

                <span id="info" className="text-sm text-neutral-500 font-medium">Daha kayıt olmadın mı? <Link href="/register" className="text-neutral-300 underline">Buradan Kayıt Olun</Link></span>

                <div id="orAnimate" className='w-full flex items-center justify-between gap-4 my-3'>
                    <div className={lineStyle}></div>
                    <span className='text-xs font-bold uppercase text-neutral-500 w-36 text-center'>Ya da</span>
                    <div className={lineStyle}></div> 
                </div>

                <a id="googleBtnAnimate" className='w-full py-2 text-sm text-neutral-300 font-medium border border-neutral-500 rounded hover:border-neutral-700 transition-all flex items-center justify-center gap-2 cursor-pointer'>
                    <Icon iconType="ai" iconName="AiOutlineGoogle" iconColor="text-neutral-300" classnames="text-xl"/>
                    <span>Google ile Devam Et</span>
                </a>

                <a id="githubBtnAnimate" className='w-full py-2 text-sm text-neutral-300 font-medium border border-neutral-500 rounded hover:border-neutral-700 transition-all flex items-center justify-center gap-2 cursor-pointer'>
                    <Icon iconType="ai" iconName="AiOutlineGithub" iconColor="text-neutral-300" classnames="text-xl"/>
                    <span>Github ile Devam Et</span>
                </a>

            </form>

        </div>
        
    </div>
    
  )
}

export default Login