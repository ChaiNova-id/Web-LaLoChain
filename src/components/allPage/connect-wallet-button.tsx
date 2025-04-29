"use client";

import { useWalletStore } from "@/stores/walletStore";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { CircleNotch } from "@phosphor-icons/react";

const ConnectWalletButton = () => {
  const { account, connectWallet, disconnectWallet, isLoading } =
    useWalletStore();

  useEffect(() => {
    const autoConnectWallet = async () => {
      const isPreviouslyConnected = localStorage.getItem("isWalletConnected");
      if (isPreviouslyConnected === "true") {
        await connectWallet();
      }
    };

    autoConnectWallet();
  }, [connectWallet]);

  return (
    <>
      {account ? (
        <Button
          onClick={disconnectWallet}
          disabled={isLoading}
          variant="primaryBrand"
          className="w-40 p-6 text-neutral-50 heading-9 cursor-pointer"
        >
          {isLoading ? (
            <CircleNotch
              className="animate-spin text-neutral-50"
              size={20}
              weight="bold"
            />
          ) : (
            "Disconnect"
          )}
        </Button>
      ) : (
        <Button
          onClick={connectWallet}
          disabled={isLoading}
          variant="primaryBrand"
          className="w-40 p-6 text-neutral-50 heading-9 cursor-pointer"
        >
          {isLoading ? (
            <CircleNotch
              className="animate-spin text-neutral-50"
              size={20}
              weight="bold"
            />
          ) : (
            "Connect Wallet"
          )}
        </Button>
      )}
    </>
  );
};

export default ConnectWalletButton;
