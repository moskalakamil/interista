import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/styles/theme";

export function renderWithWrapper(component, options) {
  const Wrapper = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  return render(component, { wrapper: Wrapper, ...options });
}
