"use client";

import { useWalletStore } from "@/stores/walletStore";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

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
          Disconnect
        </Button>
      ) : (
        <Button
          onClick={connectWallet}
          disabled={isLoading}
          variant="primaryBrand"
          className="w-40 p-6 text-neutral-50 heading-9 cursor-pointer"
        >
          Connect
        </Button>
      )}
    </>
  );
};

export default ConnectWalletButton;
