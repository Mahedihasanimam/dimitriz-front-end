// "use client";

// import React, { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import Navbar from "@/components/share/Navbar";
// import Footer from "@/components/share/Footer";
// import { Spin, Progress } from "antd"; // Added Progress for loading indicator

// const ClientWrapper = ({ children }) => {
// //   const pathname = usePathname();
//   const [spinning, setSpinning] = useState(true);
//   const [percent, setPercent] = useState(0);

// //   const authRoutes = ["/auth/signup"];
// //   const footerCriteria = [
// //     "/auth/otpverification",
// //     "/auth/forgetpassword",
// //     "/auth/signup/intarest",
// //     "/auth/signup/categories",
// //   ];

// //   const isAuthRoute = authRoutes.includes(pathname);
// //   const isFooter = footerCriteria.includes(pathname);

//   useEffect(() => {
//     // Simulate loading progress
//     const interval = setInterval(() => {
//       setPercent((prev) => {
//         if (prev >= 100) {
//           clearInterval(interval);
//           return 100;
//         }
//         return prev + 10;
//       });
//     }, 300);

//     const timer = setTimeout(() => {
//       setSpinning(false);
//       setPercent(0); // Reset progress
//     }, 3000); // Simulating a 3-second delay

//     // Cleanup intervals and timeout
//     return () => {
//       clearInterval(interval);
//       clearTimeout(timer);
//       setSpinning(false)
//     };
//   },);

//   return (
//     <>
//       {spinning ? (
//         <div className="loader-container absolute top-1/2 left-[40%] text-center">
//           <Spin size="large" spinning={spinning} />
//           {/* Add progress bar below spinner */}
//           <Progress
//             className="mt-4"
//             percent={percent}
//             status={percent < 100 ? "active" : "success"}
//           />
//         </div>
//       ) : (
//         <>
         
//           {/* {!isAuthRoute && <Navbar />} */}
//           <Navbar/>

//           {children}
//         <Footer/>
//           {/* {!isAuthRoute && !isFooter && <Footer />} */}
//         </>
//       )}
//     </>
//   );
// };

// export default ClientWrapper;
