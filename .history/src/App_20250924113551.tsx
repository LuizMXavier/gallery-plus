import {BrowserRouter, Route, Routes} from "react-router";
import {QueryClient, } from "@tanstack/react-query"
import PageComponents from "./pages/pages-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PagePhotoDetails from "./pages/page-photo-details";

const queryClient = new QueryClient();

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<LayoutMain/>}>
					<Route index element={<PageHome/>}/>
					<Route path="/fotos/:id" element={<PagePhotoDetails/>}/>
					<Route path="/componentes" element={<PageComponents/>}/>
				</Route>
				
			</Routes>
		</BrowserRouter>
	)
}
