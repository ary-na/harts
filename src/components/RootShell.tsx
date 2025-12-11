// src/components/RootShell.tsx

// Component imports
import NavBar from "./NavBar";
import Footer from "./Footer";

// UI imports
import ScrollProgressBar from "@hart/lib/ui/ScrollProgressBar";

const RootShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <ScrollProgressBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootShell;
