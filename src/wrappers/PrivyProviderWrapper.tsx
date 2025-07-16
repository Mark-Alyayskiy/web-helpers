import { PrivyProvider } from "@privy-io/react-auth";
import splashIcon from "../assets/splash-icon.png";

export const PrivyProviderWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <PrivyProvider
      appId="cm8q965ko017kn99mm4z3p7qj"
      config={{
        embeddedWallets: {
          solana: { createOnLogin: "users-without-wallets" },
        },
        appearance: {
          theme: "dark",
          accentColor: "#CDFB52",
          logo: splashIcon,
          loginMessage:
            "Log in with the same social sign-in used for connecting to WEWE.",
        },
        loginMethods: ["email", "google", "apple", "twitter"],
      }}
    >
      {children}
    </PrivyProvider>
  );
};
