import Navbar from "@/components/Navbar";
import { Inter, Source_Code_Pro } from "next/font/google";
const Source = Source_Code_Pro({ subsets: ["latin"] });
function MainLayout({ children }) {
  return (
    <main className={` ${Source.className}`}>
      <Navbar />
      {children}
    </main>
  );
}

export default MainLayout;
