import "../styles/globals.css";
import MainLayout from "./components/MainLayout/MainLayout";
import { ApolloWrapper } from "./utilities/ApolloWrapper";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <MainLayout>{children}</MainLayout>
        </ApolloWrapper>
      </body>
    </html>
  );
}
