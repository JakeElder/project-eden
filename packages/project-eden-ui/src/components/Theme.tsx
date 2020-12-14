import React from "react";
import theme from "../theme";
import { ThemeProvider } from "@emotion/react";

function Theme({ children }: React.PropsWithChildren<{}>) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
