import { useEffect, useRef } from "react"

export default function CustomPointer() {
    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);

    const mouseMoveEvent = (e: MouseEvent) => {
        endX.current = e.pageX;
        endY.current = e.pageY;

        customPointer.current!.style.top = `${endY.current} px`;
        customPointer.current!.style.left = `${endX.current} px`;
    }

    const customPointer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveEvent);
        console.log(typeof(customPointer));
        console.log(customPointer);
    });

    return <div ref={customPointer} className="custom-pointer"></div>
}