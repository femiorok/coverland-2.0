// import Image from 'next/image';
// import carCoverCategory from '../../../public/images/categories/carCoverImage.webp';
// import suvCoverCategory from '../../../public/images/categories/suvCoverImage.webp';
// import truckCoverCategory from '../../../public/images/categories/truckCoverImage.webp';
// import vanCoverCategory from '../../../public/images/categories/vanCoverImage.webp';
// import Link from 'next/link';

// export default function CategoryCards() {
//   return (
//     <section className="w-screen h-auto px-3 pt-20 lg:px-20 md:px-24 bg-[#F9F9FB] lg:bg-white flex flex-col md:pt-20 max-w-[1440px]  text-center">
//       <div className="flex flex-row justify-center md:justify-between items-center flex-nowrap w-full">
//         <Link
//           href="/car-covers"
//           className="cat-links flex flex-col-reverse lg:flex-row justify-center lg:justify-right xl:justify-evenly items-center w-[45%] lg:w-[49%] h-auto lg:h-60 bg-[#F9F9FB] rounded-xl mr-2 lg:mr-0 overflow-hidden"
//         >
//           <div className="lg:pr-12 relative bottom-5 md:bottom-0 md:pl-3 lg:pt-0 lg:pb-0 flex flex-col justify-center items-center">
//             <p className="text-sm font-extrabold pt-5 xs:pt-0 md:pb-10 lg:pb-0 uppercase hover-underline-animation-dark sm:text-2xl md:mg-10">
//               Car <br className="hidden lg:block xl:hidden" /> Covers
//             </p>
//           </div>
//           <div className="test">
//             <Image
//               src={carCoverCategory}
//               className="h-auto lg:h-60 w-auto"
//               height={300}
//               width={300}
//               alt="coverland car covers"
//             />
//           </div>
//         </Link>
//         <Link
//           href="/truck-covers"
//           className="cat-links flex flex-col-reverse lg:flex-row justify-center lg:justify-right xl:justify-evenly items-center w-[45%] lg:w-[49%] h-auto lg:h-60 bg-[#F9F9FB] rounded-xl ml-2 lg:ml-0 overflow-hidden"
//         >
//           <div className="lg:pr-12 relative bottom-5 md:bottom-0 md:pl-3 lg:pt-0 lg:pb-0 flex flex-col justify-center items-center">
//             <p className="text-sm font-extrabold pt-5 xs:pt-0 md:pb-10 lg:pb-0 uppercase hover-underline-animation-dark sm:text-2xl md:mg-10">
//               Truck <br className="hidden lg:block xl:hidden" /> Covers
//             </p>
//           </div>
//           <div className="">
//             {' '}
//             <Image
//               src={truckCoverCategory}
//               className="h-auto lg:h-60 w-auto"
//               height={300}
//               alt="coverland truck covers"
//             />
//           </div>
//         </Link>
//       </div>
//       <div className="flex flex-row justify-center md:justify-between items-center flex-nowrap w-full pt-10 lg:pt-8">
//         <Link
//           href="/suv-covers"
//           className="cat-links flex flex-col-reverse lg:flex-row justify-center lg:justify-right xl:justify-evenly items-center w-[45%] lg:w-[49%] h-auto lg:h-60 bg-[#F9F9FB] rounded-xl mr-2 lg:mr-0 overflow-hidden"
//         >
//           <div className="lg:pr-12 relative bottom-5 md:bottom-0 md:pl-3 lg:pt-0 lg:pb-0 flex flex-col justify-center items-center">
//             <p className="text-sm font-extrabold pt-5 xs:pt-0 md:pb-10 lg:pb-0 uppercase hover-underline-animation-dark sm:text-2xl md:mg-10">
//               SUV <br className="hidden lg:block xl:hidden" /> Covers
//             </p>
//           </div>
//           <div className="">
//             <Image
//               src={suvCoverCategory}
//               className="h-auto lg:h-60 w-auto"
//               height={300}
//               alt="coverland suv covers"
//             />
//           </div>
//         </Link>
//         <Link
//           href="/van-cover"
//           className="cat-links flex flex-col-reverse lg:flex-row justify-center lg:justify-right xl:justify-evenly items-center w-[45%] lg:w-[49%] h-auto lg:h-60 bg-[#F9F9FB] rounded-xl ml-2 lg:ml-0 overflow-hidden"
//         >
//           <div className="lg:pr-12 relative bottom-5 md:bottom-0 md:pl-3 lg:pt-0 lg:pb-0 flex flex-col justify-center items-center">
//             <p className="text-sm font-extrabold pt-5 xs:pt-0 md:pb-10 lg:pb-0 uppercase hover-underline-animation-dark sm:text-2xl md:mg-10">
//               Van <br className="hidden lg:block xl:hidden" /> Covers
//             </p>
//           </div>
//           <div className="">
//             <Image
//               src={vanCoverCategory}
//               className="h-auto lg:h-60 w-auto"
//               height={300}
//               alt="coverland van covers"
//             />
//           </div>
//         </Link>
//       </div>
//     </section>
//   );
// }
