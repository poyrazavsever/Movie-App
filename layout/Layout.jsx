import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

// Components
import Footer from '@/components/Footer/Footer';
import Sidebar from '@/components/Sidebar/Sidebar';
import SplashScreen from '@/components/SplashScreen';
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Layout({ children }) {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const [isLoading, setIsLoading] = useState(isHome);
    const [isUser, setIsUser] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem("user") !== null;
        }
        return false;
    });
    const router = useRouter();

    useEffect(() => {
        if (!isUser) {
            if (pathname === "/") {
                setTimeout(() => {
                    router.push("/register");
                }, 3200);
            } else if (pathname !== "/login") {
                router.push("/register");
            }
        }
    }, [isUser, pathname, router]);

    if (pathname !== "/register" && pathname !== "/login") {
        return (
            <>
                <Toaster position="top-center" reverseOrder={false} />
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
        );
    } else if (pathname === "/register" || pathname === "/login") {
        return (
            <div>
                <Toaster position="top-center" reverseOrder={false} />
                <main>{children}</main>
            </div>
        );
    } 
}

export default Layout;
