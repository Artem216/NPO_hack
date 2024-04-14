import WelcomeBlock from "@/components/widgets/WelcomeBlock";
import BgLines from "@/components/widgets/BgLines";

const Home = () => {
	return (
		<>
			<div className="h-[calc(100vh-288px)] flex justify-center items-center relative z-50 p-2 align-middle">
				<WelcomeBlock />
			</div>
			<BgLines />
		</>
	);
};

export default Home;