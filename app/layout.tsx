import "../styles/globals.css";
import MainLayout from "./components/MainLayout/MainLayout";
import { MainProvider } from "./contexts/main/MainContext";
import { ApolloWrapper } from "./utilities/ApolloWrapper";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MainProvider>
          <ApolloWrapper>
            <MainLayout>{children}</MainLayout>
          </ApolloWrapper>
        </MainProvider>
      </body>
    </html>
  );
}
