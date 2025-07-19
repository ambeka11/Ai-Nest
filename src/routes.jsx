import App from "./App";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IntegrationsPage from "./pages/IntegrationsPage";
import PricingPage from "./pages/PricingPage";
import CompanyPage from "./pages/CompanyPage";
import DocsPage from "./pages/DocsPage";
import ArticlesPage from "./pages/ArticlesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Changelog from "./pages/Changelog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "integrations", element: <IntegrationsPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "company", element: <CompanyPage /> },
      { path: "docs", element: <DocsPage /> },
      { path: "articles", element: <ArticlesPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "changelog", element: <Changelog /> },
    ],
  },
]);
