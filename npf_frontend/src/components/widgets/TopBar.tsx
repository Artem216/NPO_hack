import { NavLink, Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import logoPath from "../../assets/npf_logo.jpg";
import mobileLogoPath from "../../assets/npf_logo.jpg";
import { topBarLinks } from "@/constants";
import { INavLink } from "@/models";
import uuid from "react-uuid";

const TopBar = () => {
	const { pathname } = useLocation();
	return (
		<section className="flex w-full justify-between p-2 bg-extra-light">
			<div className="flex gap-3 items-center">
				<Link to="/" className="hidden md:block">
					<img src={logoPath} alt="logo" width={117} height={70} />
				</Link>
				<Link to="/" className="block md:hidden">
					<img src={mobileLogoPath} alt="logo" width={40} height={24} />
				</Link>
			</div>

			<div className="flex">
				<ul className="flex gap">
					{topBarLinks.map((link: INavLink) => {
						const index = pathname.lastIndexOf("/");
						const concatedPathname = pathname.substring(0, index);
						const isActive =
							pathname === link.route || concatedPathname === link.route;
						let linkTo = link.route;
						if (link.route === "/chat") linkTo += `/${uuid()}`;

						return (
							<li key={link.label} className="flex items-center">
								<NavLink to={linkTo} className="flex-center gap-3">
									<Button
										variant="link"
										className={`${isActive && "underline"}`}
									>
										{link.label}
									</Button>
								</NavLink>
							</li>
						);
					})}
				</ul>
				{/* <CreateAccountDialog /> */}
			</div>
		</section>
	);
};

export default TopBar;
