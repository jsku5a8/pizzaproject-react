import { Navigate, Route } from "react-router-dom";

const PrivateRoutes = ({ isAuth, сomponent: Component, path }) => {
	return (
		<>
			{isAuth ? (
				<Route path={path} element={Component} />
			) : (
				<Navigate to="/login" />
			)}
		</>
	);
};

export default PrivateRoutes;
