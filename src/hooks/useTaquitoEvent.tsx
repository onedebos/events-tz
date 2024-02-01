import { TezosToolkit, PollingSubscribeProvider } from "@taquito/taquito";
import { useState, useEffect } from "react";

const useTaquitoEvents = () => {
  const rpcUrl = "https://ghostnet.ecadinfra.com";
  const contractAddress = "KT1GJAUzQko8JfBD1qtoEgHJy9dRafjCWQPm";
  const Tezos = new TezosToolkit(rpcUrl);
  const [noOnScreen, setNoOnScreen] = useState({
    noToAdd: "0",
    storedValue: "0",
    blockHash: "",
  });

  useEffect(() => {
    getContractEvents();
  }, []);

  Tezos.setStreamProvider(
    Tezos.getFactory(PollingSubscribeProvider)({
      shouldObservableSubscriptionRetry: true,
      pollingIntervalMilliseconds: 1500,
    })
  );

  const getContractEvents = async () => {
    try {
      const sub = Tezos.stream.subscribeEvent({
        tag: "add",
        address: contractAddress,
      });

      sub.on("data", (data: any) => {
        setNoOnScreen({
          noToAdd: data.payload.args[0].int,
          storedValue: data.payload.args[1].args[1].int,
          blockHash: data.blockHash,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    noOnScreen,
  };
};

export default useTaquitoEvents;
