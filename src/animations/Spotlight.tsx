// import type { ComponentType } from 'react';
// import React, { useState, useRef } from 'react';
// import { motion } from 'framer-motion';

// function getRelativeCoordinates(event, referenceElement) {
//   const position = {
//     x: event.pageX,
//     y: event.pageY,
//   };

//   const offset = {
//     left: referenceElement.offsetLeft,
//     top: referenceElement.offsetTop,
//   };

//   let reference = referenceElement.offsetParent;

//   while (reference) {
//     offset.left += reference.offsetLeft;
//     offset.top += reference.offsetTop;
//     reference = reference.offsetParent;
//   }

//   return {
//     x: position.x - offset.left,
//     y: position.y - offset.top,
//   };
// }

// export function withSpotlight(Component): ComponentType {
//   const style = {
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     zIndex: 0,
//     boxSizing: 'border-box',
//     borderRadius: 'inherit',
//     WebkitMaskImage: `radial-gradient(circle at center, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 100%)`,
//     opacity: 0,
//     // Change this gradient
//     backgroundImage: `linear-gradient(to right, rgb(32, 45, 46) , rgba(48, 52, 40) )`,
//     // Optional border style
//     border: '1px solid rgba(255, 255, 255, 0.2)',
//   };

//   return props => {
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//     const boxRef = useRef();
//     const handleMouseMove = e => {
//       setMousePosition(getRelativeCoordinates(e, boxRef.current));
//     };
//     console.log(mousePosition);
//     return (
//       <Component {...props} ref={boxRef} onMouseMove={e => handleMouseMove(e)}>
//         <motion.div
//           style={{
//             ...style,
//           }}
//           whileHover={{
//             opacity: 1,
//           }}
//           animate={{
//             WebkitMaskImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(255, 255, 255) 0%, rgba(0, 0, 0, 0) 100%)`,
//           }}
//           transition={{
//             duration: 0.0,
//           }}
//         />
//         {props.children}
//       </Component>
//     );
//   };
// }
