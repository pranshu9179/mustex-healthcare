// // import { Mail, Phone, Share2 } from "lucide-react";
// // import productImg from "../../assets/zerodiab.jpg"; // change your image here

// // export default function ProductDetail() {
// //   return (
// //     <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-2 gap-10">

// //       {/* ================================
// //           LEFT: PRODUCT IMAGE & SHARE BUTTON
// //       ================================= */}
// //       <div className="space-y-4">
// //         <div className="relative border p-4 rounded-xl shadow-sm bg-white">
// //           {/* Share Icon */}
// //           <button className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200">
// //             <Share2 size={18} />
// //           </button>

// //           {/* Main Image */}
// //           <img
// //             src={productImg}
// //             alt="product"
// //             className="w-full h-[350px] object-contain rounded-lg"
// //           />
// //         </div>
// //       </div>

// //       {/* ================================
// //           RIGHT: PRODUCT INFO
// //       ================================= */}
// //       <div>
// //         <h1 className="text-3xl font-bold text-gray-900 leading-snug">
// //           Herbal Anti-diabetic Syrup - 500 Ml Purple Liquid | Infused With Jamun, Neem, Karela, Supports Blood Sugar Control
// //         </h1>

// //         {/* PRICE + STATUS */}
// //         <div className="mt-4">
// //           <p className="font-semibold text-gray-700">Price:</p>
// //           <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700">
// //             Get Latest Price
// //           </button>

// //           <p className="text-green-600 font-medium mt-2 flex items-center gap-2">
// //             ● In Stock
// //           </p>
// //         </div>

// //         {/* SEND INQUIRY BUTTON */}
// //         <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700">
// //           SEND INQUIRY
// //         </button>

// //         {/* ================================
// //             PRODUCT SPECIFICATIONS
// //         ================================= */}
// //         <h2 className="mt-8 text-xl font-semibold text-gray-900">
// //           Product Specifications
// //         </h2>

// //         <table className="w-full mt-3 border text-sm">
// //           <tbody>
// //             <tr className="border">
// //               <td className="p-3 bg-gray-50 font-semibold">Product Type</td>
// //               <td className="p-3">Herbal syrup</td>
// //             </tr>
// //             <tr className="border">
// //               <td className="p-3 bg-gray-50 font-semibold">Ingredients</td>
// //               <td className="p-3">Karela, Jamun, Neem</td>
// //             </tr>
// //             <tr className="border">
// //               <td className="p-3 bg-gray-50 font-semibold">Packaging</td>
// //               <td className="p-3">Bottle</td>
// //             </tr>
// //             <tr className="border">
// //               <td className="p-3 bg-gray-50 font-semibold">Quantity</td>
// //               <td className="p-3">Varied</td>
// //             </tr>
// //             <tr className="border">
// //               <td className="p-3 bg-gray-50 font-semibold">Storage</td>
// //               <td className="p-3">Cool, dry place</td>
// //             </tr>
// //             <tr className="border">
// //               <td className="p-3 bg-gray-50 font-semibold">Manufacturing Process</td>
// //               <td className="p-3">Herbal extraction</td>
// //             </tr>
// //             <tr className="border">
// //               <td className="p-3 bg-gray-50 font-semibold">Features</td>
// //               <td className="p-3">
// //                 Diabetes control, Digestion improvement, Blood purification, Immunity boost
// //               </td>
// //             </tr>
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* ================================
// //           PRODUCT OVERVIEW
// //       ================================= */}
// //       <div className="lg:col-span-2 mt-12">
// //         <h2 className="text-2xl font-bold text-gray-800">Product Overview</h2>

// //         <p className="mt-4 text-gray-700 leading-relaxed">
// //           Offered Herbal Anti-diabetic Syrup is prepared under hygienic conditions by our professionals
// //           using extracts of natural ingredients including karela and gumar. This syrup regulates insulin
// //           secretion and controls blood sugar level.
// //         </p>

// //         <h3 className="mt-4 font-semibold text-gray-800">Key Features:</h3>
// //         <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
// //           <li>Helps curb sugar cravings</li>
// //           <li>Helpful in treating piles</li>
// //           <li>Controls excess urination</li>
// //         </ul>

// //         <h3 className="mt-6 font-semibold text-gray-800">Benefits:</h3>
// //         <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
// //           <li>Useful for all diabetic patients</li>
// //           <li>Improves metabolism</li>
// //           <li>Supports heart health & reduces cholesterol</li>
// //         </ul>

// //         <h3 className="mt-6 font-semibold text-gray-800">Other uses:</h3>
// //         <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
// //           <li>Obesity & Weight Management</li>
// //           <li>High Blood Pressure</li>
// //           <li>Digestion & Detoxification</li>
// //         </ul>

// //         {/* DISCLAIMER */}
// //         <h3 className="mt-10 text-xl font-bold text-gray-900">Disclaimer</h3>
// //         <p className="mt-2 text-gray-700 leading-relaxed">
// //           The content is for informational purposes only. Not a substitute for medical advice.
// //           Consult your physician before use.
// //         </p>

// //         {/* ================================
// //             COMPANY DETAILS
// //         ================================= */}
// //         <h3 className="mt-10 text-xl font-bold text-gray-900">Company Details</h3>

// //         <div className="mt-4 space-y-2 text-gray-700">
// //           <p>Business Type: Manufacturer, Supplier</p>
// //           <p>Establishment: 2007</p>
// //           <p>GST No: 04AADCH1130J1Z4</p>
// //           <p>Employees: 15</p>
// //           <p>Working Days: Monday to Sunday</p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { useState } from "react";
// import { Mail, Phone, Share2, Star, CheckCircle, Shield, Truck, Leaf, Heart, ChevronRight, Globe, Users, Award, Clock, ExternalLink } from "lucide-react";
// import productImg from "../../assets/zerodiab.jpg";

// export default function ProductDetail() {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [quantity, setQuantity] = useState(1);

//   const tabs = [
//     { id: "overview", label: "Overview", icon: <Leaf className="w-4 h-4" /> },
//     { id: "benefits", label: "Benefits", icon: <Heart className="w-4 h-4" /> },
//     { id: "specs", label: "Specifications", icon: <CheckCircle className="w-4 h-4" /> },
//     { id: "company", label: "Company", icon: <Users className="w-4 h-4" /> },
//   ];

//   const benefits = [
//     { title: "Blood Sugar Control", description: "Helps regulate glucose levels naturally" },
//     { title: "Digestive Health", description: "Improves digestion and reduces indigestion" },
//     { title: "Heart Support", description: "Supports cardiovascular health and cholesterol" },
//     { title: "Immunity Boost", description: "Enhances immune system function" },
//     { title: "Natural Detox", description: "Purifies blood and removes toxins" },
//     { title: "Energy Boost", description: "Reduces fatigue and increases stamina" },
//   ];

//   const features = [
//     { icon: <Shield className="w-5 h-5" />, text: "100% Natural & Herbal" },
//     { icon: <Leaf className="w-5 h-5" />, text: "No Artificial Additives" },
//     { icon: <CheckCircle className="w-5 h-5" />, text: "ISO 9001:2015 Certified" },
//     { icon: <Truck className="w-5 h-5" />, text: "Free Shipping Over ₹499" },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
//       {/* Floating Action Buttons for Mobile */}
//       <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white border-t shadow-lg p-3">
//         <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
//           <div className="flex items-center space-x-2">
//             <button
//               onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//               className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
//             >
//               -
//             </button>
//             <span className="font-semibold">{quantity}</span>
//             <button
//               onClick={() => setQuantity(prev => prev + 1)}
//               className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center"
//             >
//               +
//             </button>
//           </div>
//           <div className="flex space-x-2">
//             <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition">
//               Get Price
//             </button>
//             <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
//               Inquiry
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Main Container */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10">
//         {/* Breadcrumb */}
//         <div className="flex items-center text-sm text-gray-500 mb-6">
//           <a href="#" className="hover:text-purple-600 transition">Home</a>
//           <ChevronRight className="w-4 h-4 mx-2" />
//           <a href="#" className="hover:text-purple-600 transition">Health Care</a>
//           <ChevronRight className="w-4 h-4 mx-2" />
//           <span className="text-purple-600 font-medium">Anti-diabetic Syrup</span>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
//           {/* LEFT: PRODUCT IMAGE SECTION */}
//           <div>
//             {/* Image Container */}
//             <div className="relative bg-gradient-to-br from-white to-gray-50 border rounded-2xl shadow-lg p-4 md:p-6 overflow-hidden">
//               {/* Badges */}
//               <div className="absolute top-4 left-4 z-10">
//                 <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
//                   In Stock
//                 </span>
//                 <span className="ml-2 bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
//                   Herbal
//                 </span>
//               </div>

//               {/* Share Button */}
//               <button className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110">
//                 <Share2 className="w-5 h-5 text-gray-600" />
//               </button>

//               {/* Main Image */}
//               <div className="relative h-72 md:h-96 lg:h-[420px] rounded-xl overflow-hidden group">
//                 <img
//                   src={productImg}
//                   alt="Herbal Anti-diabetic Syrup"
//                   className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
//                 />
//                 {/* Hover Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
//               </div>

//               {/* Image Thumbnails */}
//               <div className="flex justify-center space-x-3 mt-6">
//                 {[1, 2, 3].map((i) => (
//                   <div
//                     key={i}
//                     className="w-16 h-16 md:w-20 md:h-20 border-2 border-transparent hover:border-purple-500 rounded-lg overflow-hidden cursor-pointer bg-gray-100 flex items-center justify-center"
//                   >
//                     <div className="text-gray-400">Thumb {i}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Features Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-3 rounded-xl border hover:border-purple-300 transition-colors text-center"
//                 >
//                   <div className="flex justify-center mb-2 text-purple-600">
//                     {feature.icon}
//                   </div>
//                   <p className="text-xs md:text-sm font-medium text-gray-700">{feature.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: PRODUCT INFO SECTION */}
//           <div>
//             {/* Title */}
//             <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
//               Herbal Anti-diabetic Syrup - 500 ML
//               <span className="block text-purple-600 text-xl md:text-2xl mt-2">
//                 Infused With Jamun, Neem & Karela
//               </span>
//             </h1>

//             {/* Rating */}
//             <div className="flex items-center space-x-2 mt-4">
//               <div className="flex">
//                 {[...Array(5)].map((_, i) => (
//                   <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                 ))}
//               </div>
//               <span className="text-gray-600">4.5 (1,234 reviews)</span>
//               <span className="text-green-600 font-semibold ml-2">● In Stock</span>
//             </div>

//             {/* Price Section */}
//             <div className="mt-6 p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-100">
//               <p className="text-sm text-gray-600">Starting Price</p>
//               <div className="flex items-baseline mt-2">
//                 <span className="text-4xl font-bold text-gray-900">₹349</span>
//                 <span className="text-lg text-gray-500 ml-2 line-through">₹499</span>
//                 <span className="ml-3 bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
//                   30% OFF
//                 </span>
//               </div>
//               <p className="text-sm text-gray-500 mt-2">Inclusive of all taxes</p>

//               {/* Quantity Selector */}
//               <div className="flex items-center mt-6">
//                 <span className="font-medium text-gray-700 mr-4">Quantity:</span>
//                 <div className="flex items-center border rounded-lg">
//                   <button
//                     onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
//                     className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-l-lg"
//                   >
//                     -
//                   </button>
//                   <span className="w-12 h-10 flex items-center justify-center font-semibold border-x">
//                     {quantity}
//                   </span>
//                   <button
//                     onClick={() => setQuantity(prev => prev + 1)}
//                     className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-r-lg"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <span className="ml-4 text-sm text-gray-600">500 ML per bottle</span>
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3 mt-8">
//               <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center">
//                 Get Latest Price
//                 <ExternalLink className="ml-2 w-4 h-4" />
//               </button>
//               <button className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center">
//                 SEND INQUIRY
//                 <Mail className="ml-2 w-4 h-4" />
//               </button>
//               <button className="px-4 py-3 border-2 border-purple-200 text-purple-700 font-semibold rounded-xl hover:bg-purple-50 transition-colors">
//                 <Phone className="w-5 h-5" />
//               </button>
//             </div>

//             {/* Quick Benefits */}
//             <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
//               {benefits.slice(0, 3).map((benefit, index) => (
//                 <div
//                   key={index}
//                   className="bg-white p-4 rounded-xl border hover:shadow-md transition-shadow"
//                 >
//                   <CheckCircle className="w-5 h-5 text-green-500 mb-2" />
//                   <p className="font-semibold text-gray-800">{benefit.title}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Delivery Info */}
//             <div className="mt-8 p-4 bg-gray-50 rounded-xl">
//               <div className="flex items-center text-gray-700">
//                 <Truck className="w-5 h-5 mr-3 text-blue-600" />
//                 <div>
//                   <p className="font-semibold">Free Delivery</p>
//                   <p className="text-sm text-gray-600">Order within 3 hours for same day dispatch</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* TABBED CONTENT SECTION */}
//         <div className="mt-12 lg:mt-16">
//           {/* Tab Navigation */}
//           <div className="flex overflow-x-auto border-b">
//             {tabs.map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`flex items-center px-4 py-3 font-medium whitespace-nowrap transition-colors ${activeTab === tab.id
//                     ? "text-purple-600 border-b-2 border-purple-600"
//                     : "text-gray-500 hover:text-gray-700"
//                   }`}
//               >
//                 {tab.icon}
//                 <span className="ml-2">{tab.label}</span>
//               </button>
//             ))}
//           </div>

//           {/* Tab Content */}
//           <div className="mt-8">
//             {activeTab === "overview" && (
//               <div className="space-y-8">
//                 {/* Key Features */}
//                 <div className="bg-white p-6 rounded-2xl shadow-sm border">
//                   <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h3>
//                   <p className="text-gray-700 leading-relaxed mb-6">
//                     Our Herbal Anti-diabetic Syrup is meticulously prepared under stringent hygienic conditions
//                     by certified professionals using premium extracts of natural ingredients including Karela,
//                     Jamun, and Neem. This potent formulation is scientifically designed to support healthy
//                     blood sugar levels and promote overall wellness.
//                   </p>

//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="space-y-4">
//                       <h4 className="font-bold text-lg text-gray-900 flex items-center">
//                         <Leaf className="w-5 h-5 mr-2 text-green-600" />
//                         Key Benefits
//                       </h4>
//                       <ul className="space-y-3">
//                         {[
//                           "Regulates insulin secretion naturally",
//                           "Controls blood sugar levels effectively",
//                           "Reduces sugar cravings and hunger pangs",
//                           "Improves digestive health and metabolism",
//                           "Enhances energy levels and reduces fatigue",
//                           "Supports cardiovascular health"
//                         ].map((item, index) => (
//                           <li key={index} className="flex items-start">
//                             <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>

//                     <div className="space-y-4">
//                       <h4 className="font-bold text-lg text-gray-900 flex items-center">
//                         <Heart className="w-5 h-5 mr-2 text-red-600" />
//                         Special Features
//                       </h4>
//                       <ul className="space-y-3">
//                         {[
//                           "100% natural herbal formulation",
//                           "No artificial additives or preservatives",
//                           "Suitable for Type 1 & Type 2 diabetes",
//                           "Safe for long-term use",
//                           "ISO 9001:2015 certified manufacturing",
//                           "GMP certified facility"
//                         ].map((item, index) => (
//                           <li key={index} className="flex items-start">
//                             <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
//                             <span>{item}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Ingredients Highlight */}
//                 <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
//                   <h4 className="text-xl font-bold text-gray-900 mb-6">Key Ingredients</h4>
//                   <div className="grid md:grid-cols-3 gap-4">
//                     {[
//                       { name: "Jamun", benefit: "Regulates blood sugar levels" },
//                       { name: "Neem", benefit: "Purifies blood and detoxifies" },
//                       { name: "Karela", benefit: "Improves insulin sensitivity" },
//                     ].map((ing, index) => (
//                       <div key={index} className="bg-white p-4 rounded-xl text-center">
//                         <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                           <Leaf className="w-6 h-6 text-green-600" />
//                         </div>
//                         <h5 className="font-bold text-gray-900">{ing.name}</h5>
//                         <p className="text-sm text-gray-600 mt-1">{ing.benefit}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}

//             {activeTab === "benefits" && (
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {benefits.map((benefit, index) => (
//                   <div
//                     key={index}
//                     className="bg-white p-6 rounded-xl border hover:shadow-lg transition-shadow"
//                   >
//                     <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
//                       <Heart className="w-6 h-6 text-purple-600" />
//                     </div>
//                     <h4 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h4>
//                     <p className="text-gray-600">{benefit.description}</p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {activeTab === "specs" && (
//               <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="text-left p-4 font-semibold text-gray-700">Specification</th>
//                         <th className="text-left p-4 font-semibold text-gray-700">Details</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y">
//                       {[
//                         ["Product Type", "Herbal syrup"],
//                         ["Key Ingredients", "Karela, Jamun, Neem extracts"],
//                         ["Packaging Type", "Food-grade PET bottle"],
//                         ["Quantity", "500 ML"],
//                         ["Shelf Life", "24 months from manufacturing"],
//                         ["Storage", "Store in cool, dry place away from sunlight"],
//                         ["Manufacturing", "GMP & ISO 9001:2015 certified facility"],
//                         ["Usage", "2 teaspoons twice daily after meals"],
//                         ["Certifications", "ISO, GMP, FSSAI approved"],
//                       ].map(([spec, detail], index) => (
//                         <tr key={index} className="hover:bg-gray-50 transition-colors">
//                           <td className="p-4 font-medium text-gray-800">{spec}</td>
//                           <td className="p-4 text-gray-600">{detail}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             )}

//             {activeTab === "company" && (
//               <div className="space-y-8">
//                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border">
//                   <div className="flex items-start mb-6">
//                     <Globe className="w-8 h-8 text-blue-600 mr-4 mt-1" />
//                     <div>
//                       <h4 className="text-2xl font-bold text-gray-900">Health Everyday</h4>
//                       <p className="text-blue-600 font-semibold mt-1">An ISO 9001:2017 Certified Company</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-700 leading-relaxed">
//                     Health Everyday was founded with a vision to promote holistic wellness through nature's wisdom.
//                     We combine traditional Ayurvedic knowledge with modern scientific research to create effective
//                     herbal formulations that support everyday health and vitality.
//                   </p>
//                 </div>

//                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
//                   {[
//                     { icon: <Award className="w-6 h-6" />, label: "Established", value: "2007" },
//                     { icon: <Users className="w-6 h-6" />, label: "Team Size", value: "15+" },
//                     { icon: <Globe className="w-6 h-6" />, label: "Presence", value: "Pan India" },
//                     { icon: <Clock className="w-6 h-6" />, label: "Working Days", value: "Mon-Sun" },
//                   ].map((stat, index) => (
//                     <div key={index} className="bg-white p-4 rounded-xl border text-center">
//                       <div className="text-purple-600 flex justify-center mb-2">
//                         {stat.icon}
//                       </div>
//                       <p className="text-sm text-gray-600">{stat.label}</p>
//                       <p className="text-lg font-bold text-gray-900 mt-1">{stat.value}</p>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="bg-white p-6 rounded-2xl border">
//                   <h5 className="font-bold text-lg text-gray-900 mb-4">Business Details</h5>
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <div className="space-y-3">
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Business Type:</span>
//                         <span className="font-medium">Manufacturer & Supplier</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">GST Number:</span>
//                         <span className="font-medium">QUAACCHTESUZZLE</span>
//                       </div>
//                     </div>
//                     <div className="space-y-3">
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Quality Standards:</span>
//                         <span className="font-medium">ISO 9001:2017</span>
//                       </div>
//                       <div className="flex justify-between">
//                         <span className="text-gray-600">Delivery Network:</span>
//                         <span className="font-medium">2000+ Partners</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* DISCLAIMER SECTION */}
//         <div className="mt-12">
//           <div className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl p-6">
//             <div className="flex items-start">
//               <Shield className="w-6 h-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
//               <div>
//                 <h4 className="text-lg font-bold text-gray-900 mb-3">Important Medical Disclaimer</h4>
//                 <p className="text-gray-700 leading-relaxed">
//                   This information is provided for educational purposes only and is not intended as medical advice.
//                   This product is not intended to diagnose, treat, cure, or prevent any disease. Always consult with
//                   your healthcare provider before starting any new supplement, especially if you are pregnant,
//                   nursing, taking medication, or have a medical condition. Do not discontinue any prescribed
//                   medication without consulting your physician.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="mt-12">
//           <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
//           <div className="space-y-4">
//             {[
//               {
//                 q: "How should I take this syrup?",
//                 a: "Take 2 teaspoons (10ml) twice daily after meals, or as directed by your healthcare provider."
//               },
//               {
//                 q: "Is this suitable for Type 1 diabetes?",
//                 a: "Yes, it supports both Type 1 and Type 2 diabetes management. However, consult your doctor before use."
//               },
//               {
//                 q: "How long until I see results?",
//                 a: "Most users report noticeable improvements within 4-6 weeks of regular use along with a healthy lifestyle."
//               },
//             ].map((faq, index) => (
//               <div key={index} className="bg-white border rounded-xl p-5">
//                 <h5 className="font-semibold text-gray-900 mb-2">{faq.q}</h5>
//                 <p className="text-gray-600">{faq.a}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Mail, Phone, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import img1 from "../../assets/zerodiab.jpg";
import img2 from "../../assets/callfizz.jpg";
import img3 from "../../assets/albumex.jpg";
import img4 from "../../assets/myotex+.jpg";
import img5 from "../../assets/gluzenQ.jpg";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function ProductDetail() {
  const [isPaused, setIsPaused] = useState(false);

  const images = [img1, img2, img3, img4, img5];
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    if (isPaused) return; // 🚀 pause when hovered

    const interval = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused, index]);

  const prevImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* ======================================================
            LEFT: IMAGE SLIDER + THUMBNAILS
        ====================================================== */}
          <div className="space-y-6">
            {/* MAIN SLIDER – GRADIENT BORDER */}
            <div className="relative p-[3px] rounded-xl bg-gradient-to-r from-purple-600 to-pink-500">
              {/* Inner white box */}
              <div className="bg-white rounded-xl p-4 shadow-md">
                {/* Share Icon */}
                <button className="absolute top-4 right-4 bg-gray-100 p-2 rounded-full hover:bg-gray-200 z-20">
                  <Share2 size={18} />
                </button>

                {/* MAIN IMAGE */}
                <div
                  className="relative h-[360px] md:h-[460px] flex items-center justify-center"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={index}
                      src={images[index]}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-full h-full object-contain rounded-lg"
                    />
                  </AnimatePresence>
                </div>

                {/* LEFT ARROW */}
                <button
                  onClick={prevImage}
                  className="absolute -left-6 top-1/2 -translate-y-1/2 bg-purple-500 text-white p-2 py-4 rounded-full shadow-lg hover:bg-purple-600 transition z-20"
                >
                  <ChevronLeft size={26} />
                </button>

                {/* RIGHT ARROW */}
                <button
                  onClick={nextImage}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 bg-purple-500 text-white p-2  py-4  rounded-full shadow-lg hover:bg-purple-600 transition z-20"
                >
                  <ChevronRight size={26} />
                </button>
              </div>
            </div>

            {/* THUMBNAILS */}
            <div className="grid grid-cols-5 gap-3">
              {images.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`cursor-pointer rounded-lg p-0.5 transition
        ${
          i === index
            ? "bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg"
            : "bg-gray-200"
        }
      `}
                >
                  <img
                    src={img}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ======================================================
            RIGHT: PRODUCT DETAILS
        ====================================================== */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-gray-900 leading-snug"
            >
              Herbal Anti-diabetic Syrup – Infused With Jamun, Neem, Karela |
              Supports Blood Sugar Control
            </motion.h1>
            {/* PRICE + INQUIRY ROW */}
            <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* PRICE & STOCK */}
              <div>
                <p className="font-semibold text-red-700">Price:</p>

                <button className="px-4 py-2 bg-purple-600 text-white rounded-full text-sm hover:bg-purple-700">
                  Get Latest Price
                </button>
              </div>

              {/* INQUIRY BUTTON */}
              <div>
                <p className="text-green-600  font-semibold flex items-center gap-2">
                  ● In Stock
                </p>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl transition-all w-full sm:w-auto">
                  SEND INQUIRY
                </button>
              </div>
            </div>

            {/* Specifications */}
            <h2 className="mt-10 text-xl font-semibold text-gray-900">
              Product Specifications
            </h2>

            <table className="w-full mt-4 border text-sm rounded-lg overflow-hidden">
              <tbody>
                {[
                  ["Product Type", "Herbal syrup"],
                  ["Ingredients", "Karela, Jamun, Neem"],
                  ["Packaging", "Bottle"],
                  ["Quantity", "Varied"],
                  ["Storage", "Cool, dry place"],
                  ["Manufacturing Process", "Herbal extraction"],
                  [
                    "Features",
                    "Blood sugar control, Digestion support, Immunity boost",
                  ],
                ].map(([key, val], i) => (
                  <tr className="border" key={i}>
                    <td className="p-3 bg-gray-50 font-semibold w-48">{key}</td>
                    <td className="p-3">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ======================================================
          PRODUCT OVERVIEW
      ====================================================== */}
        <div className="mt-14">
          <h2 className="text-2xl font-bold text-gray-800">Product Overview</h2>

          <p className="mt-4 text-gray-700 leading-relaxed">
            This Ayurvedic Anti-diabetic Syrup is prepared using natural
            extracts such as Karela & Jamun. It helps regulate insulin
            secretion, improve digestion, and maintain healthy blood sugar
            levels.
          </p>

          <h3 className="mt-5 font-semibold text-gray-800">Key Features</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>Helps curb sugar cravings</li>
            <li>Improves metabolism</li>
            <li>Boosts digestion and immunity</li>
          </ul>

          <h3 className="mt-6 font-semibold text-gray-800">Benefits</h3>
          <ul className="list-disc ml-6 mt-2 text-gray-700 space-y-1">
            <li>Useful for diabetic patients</li>
            <li>Supports heart health</li>
            <li>Helps with detoxification</li>
          </ul>

          <h3 className="mt-6 font-semibold text-gray-800">Disclaimer</h3>
          <p className="mt-2 text-gray-700">
            This content is for informational purposes only. Consult your doctor
            before use.
          </p>

          <h3 className="mt-10 text-xl font-bold text-gray-900">
            Company Details
          </h3>
          <div className="mt-4 space-y-2 text-gray-700">
            <p>
              <strong>Business Type:</strong> Manufacturer, Supplier
            </p>
            <p>
              <strong>Established:</strong> 2007
            </p>
            <p>
              <strong>GST No:</strong> 04AADCH1130J1Z4
            </p>
            <p>
              <strong>Employees:</strong> 15
            </p>
            <p>
              <strong>Working Days:</strong> Monday–Sunday
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
