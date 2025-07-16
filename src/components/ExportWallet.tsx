import { PrivyProviderWrapper } from "../wrappers/PrivyProviderWrapper";
import { ExportWalletInner } from "./ExportWalletInner";

export function ExportWallet() {
  return (
    <PrivyProviderWrapper>
      <ExportWalletInner />
    </PrivyProviderWrapper>
  );
}
