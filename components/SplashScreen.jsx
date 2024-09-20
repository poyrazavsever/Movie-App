import React, { useEffect, useState } from 'react'
import anime from 'animejs'

function SplashScreen({ finishLoading }) {

    const [isMounted, setIsMounted] = useState(false)

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader.add({
            targets: "#shadow",
            delay: 0,
            translateY: [100, 0],
            opacity: [0, .5],
            duration: 300, // Süreyi kısalttım
            easing: "easeInOutQuad" // Daha hızlı easing fonksiyonu
        })
        loader.add({
            targets: "#title",
            delay: 100, // Gecikmeyi düşürdüm
            translateY: [-100, 0],
            opacity: [0, 1],
            duration: 400, // Süreyi kısalttım
            easing: "easeInOutQuad"
        })
        loader.add({
            targets: '#dot',
            delay: 200, // Gecikmeyi düşürdüm
            translateY: [-500, 0],
            opacity: [0, 1],
            duration: 300, // Süreyi kısalttım
            easing: "easeInOutQuad"
        })
        loader.add({
            targets: "#shadow",
            delay: 100, // Gecikmeyi düşürdüm
            translateY: [0, -100],
            opacity: [.5, 0],
            duration: 300, // Süreyi kısalttım
            easing: "easeInOutQuad"
        })
        loader.add({
            targets: "#title",
            delay: 100, // Gecikmeyi düşürdüm
            translateY: [0, -100],
            opacity: [1, 0],
            duration: 400, // Süreyi kısalttım
            easing: "easeInOutQuad"
        })
        loader.add({
            targets: '#dot',
            delay: 200, // Gecikmeyi düşürdüm
            opacity: [1, 0],
            duration: 300, // Süreyi kısalttım
            easing: "easeInOutQuad"
        })
    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='relative'>
                <div id="shadow" className='absolute -top-8 -left-24 w-36 h-36 bg-violet-600 opacity-30 blur-3xl !-z-40'></div>
                <h2 id='title' className='text-2xl text-neutral-50 sm:text-4xl md:text-6xl font-bold'>Ohrama <span id='dot' className='text-violet-700'>.</span></h2>
            </div>
        </div>
    )
}

export default SplashScreen
