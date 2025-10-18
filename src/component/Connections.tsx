// import metaMask from "@/public/assets/icons/metamask.svg";
// import walletConnect from "@/public/assets/icons/walletconnect.svg";
// import google from "@/public/assets/icons/google.svg";
// import github from "@/public/assets/icons/github.svg";
// import argent from "@/public/assets/icons/walletconnect.svg";
// import Image from "next/image";

// export default function Connections() {
//   const connect = [
//     {
//       img: metaMask,
//       label: "Metamask",
//     },
//     {
//       img: walletConnect,
//       label: "Walletconnect",
//     },
//     {
//       img: github,
//       label: "Github",
//     },
//     {
//       img: google,
//       label: "Google",
//     },
//     {
//       img: argent,
//       label: "Argent",
//     },
//   ];
//   return (
//     <div>
//       {connect.map((name, i) => {
//         return (
//           <div
//             className="border-2 cursor-pointer lg:w-[50%] md:w-[65%] w-[70%] rounded-4xl my-2.5 mx-auto border-red-600 text-red-600 p-2 flex justify-center"
//             key={i}
//           >
//             <Image src={name.img} className="w-8 h-8 me-2" alt={`${name}`} />
//             <p>{name.label}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
