import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import MainLayout from "./layouts/mainLayout/MainLayout";
const App = () => {
	return (
		<>
			<BrowserRouter>
				<MainLayout>
					<MainRoutes />
				</MainLayout>
			</BrowserRouter>
		</>
	);
};
export default App;