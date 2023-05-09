import { Nav } from "./";
import { Footer } from "@/components";

const Layout = ({ children }) => (
	<div className="min-h-screen flex flex-col ">
		<Nav />
		<div className="h-full bg-black px-20">{children}</div>
		<Footer />
	</div>
);

export default Layout;
