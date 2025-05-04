"use client";

import { useWalletStore } from "@/stores/walletStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WalletDebugPanel() {
  const {
    account,
    connectWallet,
    balance,
    allowance,
    totalSupply,
    name,
    symbol,
    decimals,
    approvalStatus,
    spender,
    value,
    subtractedValue,
    addedValue,
    from,
    to,
    amount,
    setSpender,
    setValue,
    setSubtractedValue,
    setAddedValue,
    setFrom,
    setTo,
    setAmount,
    handleBalanceOf,
    handleAllowance,
    handleApprove,
    handleTotalSupply,
    handleName,
    handleSymbol,
    handleDecimals,
    handleIncreaseAllowance,
    handleDecreaseAllowance,
    handleTransfer,
    handleTransferFrom,
  } = useWalletStore();

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded space-y-4">
      <h2 className="text-xl font-bold">🧪 Wallet Store Debug Panel</h2>

      <Button onClick={connectWallet}>Connect Wallet</Button>
      <p>Connected Account: {account ?? "Not connected"}</p>

      <div className="grid grid-cols-2 gap-4">
        <Input
          placeholder="Spender"
          value={spender}
          onChange={(e) => setSpender(e.target.value)}
        />
        <Input
          placeholder="Value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Input
          placeholder="Subtracted Value"
          value={subtractedValue}
          onChange={(e) => setSubtractedValue(e.target.value)}
        />
        <Input
          placeholder="Added Value"
          value={addedValue}
          onChange={(e) => setAddedValue(e.target.value)}
        />
        <Input
          placeholder="From"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <Input
          placeholder="To"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <Input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Button onClick={handleBalanceOf}>Check Balance</Button>
        <Button onClick={handleAllowance}>Check Allowance</Button>
        <Button onClick={handleTotalSupply}>Total Supply</Button>
        <Button onClick={handleName}>Token Name</Button>
        <Button onClick={handleSymbol}>Token Symbol</Button>
        <Button onClick={handleDecimals}>Decimals</Button>
        <Button onClick={handleApprove}>Approve</Button>
        <Button onClick={handleIncreaseAllowance}>Increase Allowance</Button>
        <Button onClick={handleDecreaseAllowance}>Decrease Allowance</Button>
        <Button onClick={handleTransfer}>Transfer</Button>
        <Button onClick={handleTransferFrom}>Transfer From</Button>
      </div>

      <div className="space-y-1 text-sm text-gray-700">
        <p>
          <strong>Balance:</strong> {balance}
        </p>
        <p>
          <strong>Allowance:</strong> {allowance}
        </p>
        <p>
          <strong>Total Supply:</strong> {totalSupply}
        </p>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Symbol:</strong> {symbol}
        </p>
        <p>
          <strong>Decimals:</strong> {decimals}
        </p>
        <p>
          <strong>Status:</strong> {approvalStatus}
        </p>
      </div>
    </div>
  );
}
