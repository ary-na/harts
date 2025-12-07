// components/RootShell.tsx
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollProgressBar from "./ScrollProgressBar";

const RootShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <ScrollProgressBar />
      <main className="container mx-auto md:px-10 px-6 md:py-10 py-6">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default RootShell;
