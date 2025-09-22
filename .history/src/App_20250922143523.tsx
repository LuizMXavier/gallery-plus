import {BrowserRouter, Route, Routes} from "react-router";
import PageComponents from "./pages/pages-components";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<}>
					<Route path="/componentes" element={<PageComponents/>}/>
				</Route>
				
			</Routes>
		</BrowserRouter>
	)
}
