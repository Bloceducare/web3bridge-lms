"use client";

import React from "react";
import { useAccount, useDisconnect } from "wagmi";
import { useConnectModal } from "@rainbow-me/rainbowkit";
import Button from "@/component/ui/Button";

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const { openConnectModal } = useConnectModal();

  if (isConnected) {
    return (
      <div className="flex flex-col items-center gap-2">
        <p>
          Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
        </p>
        <Button variants="active" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button variants="active" onClick={() => openConnectModal?.()}>
      Connect Wallet
    </Button>
  );
}
