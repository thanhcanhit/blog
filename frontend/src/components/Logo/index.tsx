import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<div className="flex justify-center">
			<Link to="/" className="flex items-center">
				<span className="self-center text-xl font-semibold md:text-2xl whitespace-nowrap dark:text-white">
					<span className="text-emerald-600">thanhcanhit</span>
					.github.io
				</span>
			</Link>
		</div>
	);
};

export default Logo;
