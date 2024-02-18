"use client";

import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect, useState } from "react";
import { useAccount, useEnsName } from "wagmi";
import { GetEnsNameReturnType } from "wagmi/actions";

export default function Home() {
  const [ens, setEns] = useState<GetEnsNameReturnType | undefined>("");
  const [theAddress, setTheAddress] = useState<String | undefined>("");

  const { address } = useAccount();
  console.log(address);

  const ensName = useEnsName({
    address: address,
  });

  console.log(ensName.data);

  useEffect(() => {
    setTheAddress(address);
  }, [address]);

  useEffect(() => {
    setEns(ensName!.data);
  }, [ensName.data]);

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-800 justify-center text-white gap-8 p-24">
      <div className=" flex flex-col gap-8">
        <div className="text-center text-3xl">Welcome to LearnWeb3 Punks </div>
        <ConnectButton />
        {theAddress && <div>{theAddress}</div>}
        {ens && <div>{ens}</div>}
      </div>
    </main>
  );
}
