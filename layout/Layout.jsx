import { usePathname } from "next/navigation"
import { Toaster, toast } from "react-hot-toast"

//Components
import Footer from '@/components/Footer/Footer'
import Sidebar from '@/components/Sidebar/Sidebar'
import SplashScreen from '@/components/SplashScreen'
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

function Layout({ children }) {

    const pathname = usePathname()
    const isHome = pathname === "/"
    const [isLoading, setIsLoading] = useState(isHome)
    const [isUser, setIsUser] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const user = localStorage.getItem("user")
            if (user !== null) {
                setIsUser(true)
                
            } else {
                setIsUser(false)

            }
        }

        if(!isUser){
            router.push("/register")
        }

        if (isLoading) return
    }, [isLoading])

    if (pathname === "/") {
        return (
            <>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <div>

                    {isLoading && isHome ? (
                        <SplashScreen finishLoading={() => setIsLoading(false)} />
                    ) : (
                        <>
                            <Sidebar />
                            <main>{children}</main>
                            <Footer />
                        </>
                    )}

                </div>
            </>
        )
    } else if (pathname === "/register" || pathname === "/login") {

        return (
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <main>{children}</main>
            </div>
        )

    } else {
        return (
            <>
                <Sidebar />
                <main>{children}</main>
                <Footer />
            </>
        )
    }


}

export default Layout