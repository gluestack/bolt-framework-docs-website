import React from "react";
// @ts-ignore
import { AppProvider } from "@gluestack/design-system";
import LandingPageLayout from "../components/landing-page/LandingPageLayout";

function App() {
  return (
    <AppProvider>
      <LandingPageLayout />
    </AppProvider>
  );
}

export default App;
