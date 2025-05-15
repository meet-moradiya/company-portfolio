// "use client";

// import { useEffect, useRef } from "react";

// const CustomCursor = () => {
//     const cursorRef = useRef(null);
//     const mouse = useRef({ x: 0, y: 0 });
//     const pos = useRef({ x: 0, y: 0 });
//     const rafId = useRef(null);
//     const scale = useRef(1);

//     useEffect(() => {
//         if (typeof window === "undefined") return;

//         const updateVisibility = (show) => {
//             if (cursorRef.current) {
//                 cursorRef.current.style.opacity = show ? 0.8 : 0;
//             }
//         };

//         const onMouseMove = ({ clientX, clientY }) => {
//             mouse.current = { x: clientX, y: clientY };
//             updateVisibility(true);
//         };

//         const onMouseDown = () => (scale.current = 0.7);
//         const onMouseUp = () => (scale.current = 1);
//         const onMouseEnter = () => updateVisibility(true);
//         const onMouseLeave = () => updateVisibility(false);

//         const animate = () => {
//             const dx = mouse.current.x - pos.current.x;
//             const dy = mouse.current.y - pos.current.y;

//             pos.current.x += dx * 0.07;
//             pos.current.y += dy * 0.07;

//             if (cursorRef.current) {
//                 cursorRef.current.style.transform = `translate3d(${pos.current.x - 10}px, ${pos.current.y - 10}px, 0) scale(${scale.current})`;
//             }

//             rafId.current = requestAnimationFrame(animate);
//         };

//         document.addEventListener("mousemove", onMouseMove);
//         document.addEventListener("mousedown", onMouseDown);
//         document.addEventListener("mouseup", onMouseUp);
//         window.addEventListener("mouseenter", onMouseEnter);
//         window.addEventListener("mouseleave", onMouseLeave);

//         rafId.current = requestAnimationFrame(animate);

//         return () => {
//             document.removeEventListener("mousemove", onMouseMove);
//             document.removeEventListener("mousedown", onMouseDown);
//             document.removeEventListener("mouseup", onMouseUp);
//             window.removeEventListener("mouseenter", onMouseEnter);
//             window.removeEventListener("mouseleave", onMouseLeave);
//             cancelAnimationFrame(rafId.current);
//         };
//     }, []);

//     return (
//         <div
//             ref={cursorRef}
//             className="
//                 fixed top-0 left-0 w-5 h-5 
//                 rounded-full bg-red-500 pointer-events-none 
//                 z-[9999] opacity-0 
//                 transition-transform duration-150 ease-in-out 
//                 transition-opacity transition-colors will-change-transform will-change-opacity
//             "
//         />
//     );
// };

// export default CustomCursor;
