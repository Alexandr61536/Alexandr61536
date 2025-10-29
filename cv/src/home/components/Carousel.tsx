import { useEffect, type ReactNode } from "react"
import { Carousel as MantineCarousel } from "@mantine/carousel"

type CarouselProps = {
    children: ReactNode[],
    setCurrentSlide: (i : number) => void,
    beforeUmount: () => void,
}

export const Carousel: React.FC<CarouselProps> = ({ children, setCurrentSlide, beforeUmount }) => {

    useEffect(()=>{beforeUmount()}, [])

    return <MantineCarousel
        onSlideChange={(index) => setCurrentSlide(index)}                    
        slideSize="50%"
        controlsOffset="md"
        controlSize={18}
        withControls
        withIndicators
        emblaOptions={{
            loop: true,
            dragFree: false,
            align: 'center'
        }}
        styles={{
            viewport: {
                overflow: "visible",
            },
            slide: {
                padding: "calc(1 * clamp(0.9rem, 2.9vw, 1.4rem))",
                paddingTop: 0,
                // height: "100% !important",
                overflow: "visible",
            },
            container: {
                height: "fit-content",
            },
            root: {
                margin: "auto",
            },
            indicators: {
                position: 'absolute',
                bottom: -10,
            },
            control: {
                userSelect: "none",
                outline: "none",
            }
        }}
    >
        {children}
    </MantineCarousel>
}