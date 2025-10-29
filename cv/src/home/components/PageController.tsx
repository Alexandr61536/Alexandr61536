import { Stack, useMantineColorScheme, type CSSProperties } from "@mantine/core"
import { useEffect, useRef, useState } from "react"

type PageControllerProps = {
    max: number,
    index: number,
    setIndex: React.Dispatch<React.SetStateAction<number>>,
}

export const PageControler: React.FC<PageControllerProps> = ({max, index, setIndex}) => {

    const childRef: React.Ref<HTMLDivElement> = useRef(null)
    const parentRef: React.Ref<HTMLDivElement> = useRef(null)

    const stateRef = useRef({
        index: index,
        isDragging: false,
        startY: 0,
        currentDeltaY: 0,
    });
    const [currentDeltaY, setCurrentDeltaY] = useState(0);

    const { colorScheme } = useMantineColorScheme()

    const styles: {[key: string]: CSSProperties} = {
        root: {
            position: "fixed",
            bottom: "1rem",
            right: "1rem",
            height: "6rem",
            width: "3rem",
            padding: 0,
            backgroundColor: "color-mix(in srgb, var(--mantine-primary-color-light) 85%, #000)",
            boxShadow: colorScheme === 'light' ? `8px 8px 16px rgba(50, 60, 70, 0.8),
             -8px -8px 16px #ffffff`
             : `8px 8px 16px #101010,
             -8px -8px 16px #40403e`,
            overflow: "visible",
            borderRadius: "1.5rem"
        },
        controller: {
            height: "2.5rem",
            width: "2.5rem",
            backgroundColor: "color-mix(in srgb, var(--mantine-primary-color-light-hover) 95%, #000)",
            boxShadow: colorScheme === 'light' ? `8px 8px 16px rgba(50, 60, 70, 0.8),
             -8px -8px 16px #ffffff`
             : `4px 4px 8px #101010,
             -4px -4px 8px #40403e`,
            borderRadius: "50%",
            overflow: "visible",
            cursor: stateRef.current.isDragging ? 'grabbing' : 'grab',
            transform: `translateY(${currentDeltaY}px)`,
            transition: stateRef.current.isDragging ? 'none' : 'transform 0.2s ease'
        }
    }

    const handleStart = (clientY: number) => {
        setCurrentDeltaY(0);
        stateRef.current = { index: index, isDragging: true, startY: clientY, currentDeltaY: 0 };
    }

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        handleStart(e.clientY);
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault();
        if (e.touches.length === 1) {
        handleStart(e.touches[0].clientY);
        }
    }

    const handleMove = (clientY: number) => {

        if (!stateRef.current.isDragging) return;

        const deltaY = clientY - stateRef.current.startY;

        const parentHeight = parentRef.current?.getBoundingClientRect().height || 0 
        const childHeight = childRef.current?.getBoundingClientRect().height || 0; 
        
        const maxDeltaY = (parentHeight - childHeight) / 2; 
        const minDeltaY = -maxDeltaY;
        
        const clampedDeltaY = Math.max(minDeltaY, Math.min(maxDeltaY, deltaY));

        setCurrentDeltaY(clampedDeltaY);
        stateRef.current.currentDeltaY = clampedDeltaY
    }

    const handleEnd = () => {

        const parentHeight = parentRef.current?.getBoundingClientRect().height || 0 
        const childHeight = childRef.current?.getBoundingClientRect().height || 0; 
        
        const maxDeltaY = (parentHeight - childHeight) / 2; 
        const minDeltaY = -maxDeltaY;

        if (stateRef.current.isDragging) {
            stateRef.current.isDragging = false;
        }

        if (stateRef.current.currentDeltaY === maxDeltaY && stateRef.current.index !== max) 
            setIndex(prev => {stateRef.current.index = prev + 1; return prev + 1})
        if (stateRef.current.currentDeltaY === minDeltaY && stateRef.current.index !== 0) 
            setIndex(prev => {stateRef.current.index = prev - 1; return prev - 1})

        if (stateRef.current.index === max) setCurrentDeltaY(()=>{stateRef.current.currentDeltaY = maxDeltaY; return maxDeltaY})
        else if (stateRef.current.index === 0) setCurrentDeltaY(()=>{stateRef.current.currentDeltaY = minDeltaY; return minDeltaY})
        else {
            setCurrentDeltaY(0)
            stateRef.current.currentDeltaY = 0
        }
    }

    useEffect(() => {

        const parentHeight = parentRef.current?.getBoundingClientRect().height || 0 
        const childHeight = childRef.current?.getBoundingClientRect().height || 0; 
        
        const maxDeltaY = (parentHeight - childHeight) / 2; 
        const minDeltaY = -maxDeltaY;

        if (stateRef.current.index === max) setCurrentDeltaY(()=>{stateRef.current.currentDeltaY = maxDeltaY; return maxDeltaY})
        else if (stateRef.current.index === 0) setCurrentDeltaY(()=>{stateRef.current.currentDeltaY = minDeltaY; return minDeltaY})
        else {
            setCurrentDeltaY(0)
            stateRef.current.currentDeltaY = 0
        }

        const handleMouseMove = (e: MouseEvent) => { e.stopPropagation(); handleMove(e.clientY) };

        const handleTouchMove = (e: TouchEvent) => {
            e.stopPropagation()
            e.preventDefault()
            if (e.touches.length === 1) {
                handleMove(e.touches[0].clientY);
            }
        };

        let controller = document.getElementById("PageController")

        controller?.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleEnd);
        controller?.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('touchend', handleEnd);

        return () => {
            controller?.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleEnd);
            controller?.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleEnd);
        };
        
    }, []);

    return <>
        <Stack
            style={styles["root"]}
            align="center"
            justify="center"
            ref={parentRef}
            id="PageController"
        >
            <div 
                style={styles["controller"]}
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                ref={childRef}
            >

            </div>
        </Stack>
    </>
}