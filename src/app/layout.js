import { Nunito } from "next/font/google";
import "./globals.css";
import Body from "./Body";
import Script from "next/script";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
	title: {
		template: "%s | Digital Asset Rescue",
		default: "Digital Asset Rescue - Trusted Online Asset Recovery Agency",
	},
	description: "We help you recover your digital assets.",
	generator: "Digital Asset Rescue",
	applicationName: "Digital Asset Rescue",
	keywords: ["recovery", "asset recovery", "digital asset"],
	referrer: "origin-when-cross-origin",
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en-US",
		},
	},
	openGraph: {
		images: "/opengraph-image.png",
	},
};

export default function RootLayout({ children }) {
	if (process.env.NODE_ENV === 'production') {
		(function detectDebugger() {
		  if (window.console && window.console.debug) {
			debugger; // Trigger a breakpoint
		  }
		  setTimeout(detectDebugger, 1000); // Re-run periodically
		})();
	  }
	  
	return (
		<html lang="en">
			<head>
			<meta name="google-site-verification" content="S7-q4rqTmIsEfGb0emf7u-n5nPrYPcb_W4lc3fo9m0k" />
			<meta name="google-site-verification" content="0Sk12sxT_zQ7K7R1VIeeyAjr3foM5vLbm6Ppt6UVdjs" />
			<meta name="google-site-verification" content="sezYeVeOVfweSs_iu-duJvZHd7uw157TQ45baEIEltk" />
							<Script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-EKDEZNZ5P2"></Script>
				<Script id="google-analytics">
					{`
						window.dataLayer = window.dataLayer || []; 
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-EKDEZNZ5P2');
					`}
				</Script>
			</head>
			<body className={nunito.className}>
				<Body>{children}</Body>
			</body>
		</html>
	);
}
