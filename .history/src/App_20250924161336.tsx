import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PageComponents from "./pages/pages-components";
import LayoutMain from "./pages/layout-main";
import PageHome from "./pages/page-home";
import PagePhotoDetails from "./pages/page-photo-details";
import {NuqsAdapter} from "nuqs/adapters/react-router/v7";

const queryClient = new QueryClient();

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NuqsAdapter>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutMain />}>
              <Route index element={<PageHome />} />
              <Route path="/fotos/:id" element={<PagePhotoDetails />} />
              <Route path="/componentes" element={<PageComponents />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </NuqsAdapter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
