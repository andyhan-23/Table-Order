import UIProvider from "../../../packages/ui/ui-provider";
import AppUIProvider from "../components/providers/app-ui";
import DataProvider from "../components/providers/data";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <html lang="ko">
    <head>
      <meta charSet="UTF-8" />
      <meta
        content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        name="viewport"
      />
      <meta
        content="스마트폰으로 주문하는 테이블 오더 시스템입니다."
        name="description"
      />
      <meta content="default" name="apple-mobile-web-app-status-bar-style" />
      <meta content="#ffffff" name="theme-color" />
      <meta content="yes" name="apple-mobile-web-app-capable" />
      <meta content="테이블 오더" name="apple-mobile-web-app-title" />
      <title>테이블 오더</title>
      <link href="/favicon.ico" rel="icon" sizes="any" />
      <link
        as="style"
        href="https://cdnjs.cloudflare.com/ajax/libs/pretendard/1.3.9/static/pretendard.min.css"
        rel="stylesheet"
      />
    </head>
    <body>
      <UIProvider>
        <AppUIProvider>
          <DataProvider>{children}</DataProvider>
        </AppUIProvider>
      </UIProvider>
    </body>
  </html>
);

export default RootLayout;
