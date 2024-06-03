import { UIProvider } from "./components/providers";
import { UIProvider as AppUIProvider } from "./components/providers";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <head>
        <meta charSet="UTF-8" />
        <meta
          content="width=device-width, initial-scale=1.0 viewport-fit=cover"
          name="viewport"
        />
        <meta
          content="스마트폰으로 주문하는 테이블 오더 시스템입니다."
          name="description"
        />
        <title>스마트 오더</title>
      </head>
      <body>
        <UIProvider>
          <AppUIProvider>{children}</AppUIProvider>
        </UIProvider>
      </body>
    </html>
  );
};

export default RootLayout;
