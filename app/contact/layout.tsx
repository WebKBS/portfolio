import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "강범수 포트폴리오",
    template: "%s - 강범수 포트폴리오",
  },
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
