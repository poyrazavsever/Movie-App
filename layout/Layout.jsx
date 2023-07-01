import { usePathname } from "next/navigation"
import { Toaster } from "react-hot-toast"

//Components
import Footer from '@/components/Footer/Footer'
import Sidebar from '@/components/Sidebar/Sidebar'
import SplashScreen from '@/components/SplashScreen'
import { useEffect, useState } from "react"

function Layout({ children }) {

    const pathname = usePathname()
    const isHome = pathname === "/"
    const [isLoading, setIsLoading] = useState(isHome)

    useEffect(() => {
        if (isLoading) return
    }, [isLoading])

    if (pathname !== "/register") {
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
    } else {
        return (
            <div>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <main>{children}</main>
            </div>
        )
    }

}

export default Layout