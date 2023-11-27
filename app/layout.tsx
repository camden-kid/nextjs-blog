import "./_styles/globals.css";
import MainLayout from "./_components/main-layout/MainLayout";
import { MainProvider } from "./_contexts/main/MainContext";
import { ApolloWrapper } from "./_utilities/ApolloWrapper";

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
