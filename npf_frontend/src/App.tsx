import { Route, Routes } from "react-router-dom";
import { Home, ClientsData } from "./root/pages";
import RootLayout from "./root/RootLayout";
import { Toaster } from "./components/ui/toaster";
import Dashboard from "./root/pages/Dashboard";

const App = () => {
	return (
		<>
			<main className="flex bg-gradient-to-b to-secondary-medium from-white">
				<Routes>
					{/* public routes */}
					<Route element={<RootLayout />}>
						<Route path="/" element={<Home />} />
						<Route path="/clients-data" element={<ClientsData />} />
						<Route path="/dashboard" element={<Dashboard />} />
					</Route>
				</Routes>
				<Toaster/>
			</main>
		</>
	);
};

export default App;
