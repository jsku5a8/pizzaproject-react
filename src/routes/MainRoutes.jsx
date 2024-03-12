import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Sales from "../pages/sales/Sales";
import Branch from "../pages/branch/Branch";
import NotFound from "../pages/notfound/NotFound";
import Login from "../pages/login/Login";
import Admin from "../pages/admin/Admin";

const MainRoutes = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sales" element={<Sales />} />
				<Route path="/branch" element={<Branch />} />
				<Route path="*" element={<NotFound />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin" Сomponent={<Admin />} path="/admin" />
			</Routes>
		</>
	);
};

export default MainRoutes;
