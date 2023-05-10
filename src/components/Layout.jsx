import { Nav } from "./";
import { Footer } from "@/components";

const Layout = ({ children }) => (
	<div className="min-h-screen relative bg-black flex flex-col ">
		<Nav />
		<div className="bg-black lg:px-[30vw] px-20">{children}</div>
		<Footer />
	</div>
);

export default Layout;
