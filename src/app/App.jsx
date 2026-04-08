import { jsx } from "react/jsx-runtime";
import { RouterProvider } from "react-router";
import { router } from "@/app/routes";
import { AuthProvider } from "@/app/contexts/AuthContext";
function App() {
  return /* @__PURE__ */ jsx(AuthProvider, { children: /* @__PURE__ */ jsx(RouterProvider, { router }) });
}
export {
  App as default
};
