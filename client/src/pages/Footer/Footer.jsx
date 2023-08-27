// import { useEffect } from 'react';
// import './Footer.scss';

// const Footer = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   return (
//     <div className='footer'>
//       <div className="container">
//         <div className="top">
//           <div className="item">
//             <h1>Categories</h1>
//             <span>Graphic & Design</span>
//             <span>Digital Marketing</span>
//             <span>Writing & Translation</span>
//             <span>Video & Animation</span>
//             <span>Music & Audio</span>
//             <span>Programming & Tech</span>
//             <span>Data</span>
//             <span>Business</span>
//             <span>Lifestyle</span>
//             <span>Photography</span>
//             <span>Sitemap</span>
//           </div>
//           <div className="item">
//             <h1>About</h1>
//             <span>Careers</span>
//             <span>Press & News</span>
//             <span>Partnership</span>
//             <span>Privacy Policy</span>
//             <span>Terms of Service</span>
//             <span>Intellectual Property Claims</span>
//             <span>Investor Relations</span>
//           </div>
//           <div className="item">
//             <h1>Support</h1>
//             <span>Help & Support</span>
//             <span>Trust & Safety</span>
//             <span>Selling on Fiverr</span>
//             <span>Buying on Fiverr</span>
//           </div>
//           <div className="item">
//             <h1>Community</h1>
//             <span>Events</span>
//             <span>Blog</span>
//             <span>Forum</span>
//             <span>Community Standards</span>
//             <span>Podcast</span>
//             <span>Affiliats</span>
//             <span>Invite a Friend</span>
//           </div>
//           <div className="item">
//             <h1>More From Fiverr</h1>
//             <span>Fiverr Business</span>
//             <span>Fiverr Pro</span>
//             <span>Fiverr Studios</span>
//             <span>Fiverr Logo Maker</span>
//             <span>Fiverr Guild</span>
//             <span>Get Inspired</span>
//             <span>Fiverr Select</span>
//             <span>Clear Voice</span>
//             <span>Fiverr Workspace</span>
//             <span>Learn</span>
//             <span>Working Not Working</span>
//           </div>
//         </div>
//         <hr />
//         <div className="bottom">
//           <div className="left">
//             <h2>fiverr</h2>
//             <span>© Fiverr International Ltd. {new Date().getFullYear()}</span>
//           </div>
//           <div className="right">
//             <div className="social">
//               <img src="./media/twitter.png" alt="" />
//               <img src="./media/facebook.png" alt="" />
//               <img src="./media/linkedin.png" alt="" />
//               <img src="./media/pinterest.png" alt="" />
//               <img src="./media/instagram.png" alt="" />
//             </div>
//             <div className="link">
//               <img src="./media/language.png" alt="" />
//               <span>English</span>
//             </div>
//             <div className="link">
//               <img src="./media/coin.png" alt="" />
//               <span>USD</span>
//             </div>
//             <div className="link">
//               <img src="./media/accessibility.png" alt="" />
//               <span>USD</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.scss";

function Footer() {
	return (
		<footer className="text-center footer text-center">
			<div className="container p-4">
				<div className="row text-md-start mt-5">
					{/* Logo Start */}
					<div className="col-md-4">
						<h4 className="pb-3">
							RPX <span className="Analyst">Analyst </span>
						</h4>
						<p className="copy-right">
							{" "}
							Copyright © 2008-2019 RPX Corporation. All Rights Reserved.
						</p>
					</div>
					{/* Logo end */}

					{/* Solutions Start */}
					<div className="col-md-3">
						<h5 className="pb-3">Solutions </h5>
						<ul className="list-style ps-0 ">
							<li className="pb-3">Patent Licensing and Acquisition</li>
							<li className="pb-3">Portfolio Management and Monetization</li>
							<li className="pb-3">R&D / Market Intelligence</li>
							<li className="pb-3">M&A Opportunity and Due Diligence</li>
							<li className="pb-3">Litigation Risk Assessment and Strategy</li>
							<li className="pb-3">Patent Prosecution</li>
						</ul>
					</div>
					{/* Solutions end */}

					{/* Quick links Start */}
					<div className="col-md-3">
						<h5 className="pb-3"> Quick links </h5>
						<ul className="list-style ps-0">
							<li className="pb-3">RPX Empower</li>
							<li className="pb-3">RPX Insight</li>
							<li className="pb-3">RPX Corporation</li>
						</ul>
					</div>
					{/* Quick links end */}

					{/* Other Start */}
					<div className="col-md-2">
						<h5 className="pb-3"> Other </h5>
						<ul className="list-style ps-0">
							<li className="pb-3">Privacy Policy</li>
							<li className="pb-3">Terms of Use</li>
							<li className="pb-3">Features</li>
							<li className="pb-3">Success Stories</li>
							<li className="pb-3">Contact Us</li>
						</ul>
					</div>
					{/* Other end */}
				</div>
			</div>
		</footer>
	);
}

export default Footer;
