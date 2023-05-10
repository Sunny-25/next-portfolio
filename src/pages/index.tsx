import { Inter } from "next/font/google";
import { Layout } from "@/components";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const navitems: string[] = [
	"'Software developer'",
	"'React warrior'",
	"'Next.js fanatic'",
	"'Open source contributer'",
	"'Open source contributer'",
	"'Open source contributer'",
	"'Open source contributer'",
	"'Open source contributer'",
	"'Open source contributer'",
];

export default function Home() {
	return (
		<Layout>
			<div className="text-white flex flex-1 flex-col justify-center min-h-[calc(100vh-5rem)]">
				<div className="flex flex-col">
					<span className="text-gray-400">{"// Hi, my name is"}</span>
					<span className="mt-[-1rem] text-white text-[2.5rem]">
						Praveen Kumar Potturi
					</span>
					<br />
					<div>
						<h1>
							$tl_dr <span className="text-[#F29E74]">=</span>
							{" {"}
						</h1>
						<ul className="ml-6">
							{navitems.map((i, index) => (
								<li key={index}>
									[<span className="text-[#FFC85C]">{index}</span>]{" "}
									<span className="text-[#F29E74]">=&gt;</span>{" "}
									<span className="text-[#BAE67E]">{i}</span>,
								</li>
							))}
						</ul>
						<h1>{"}"}</h1>
					</div>
					<Link
						href={"/"}
						className="w-[8rem] hover:bg-blue-600 border-[1.5px] border-blue-600 rounded-[4px] px-3 py-1 mt-4"
						type="button">
						More about me
					</Link>
				</div>
			</div>
		</Layout>
	);
}
