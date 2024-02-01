import { Fragment, FunctionComponent } from "react";
import { shortenAddress } from "../../helpers";

interface Proposal {
  noToAdd: string;
  storedValue: string;
  blockHash: string;
}

const Events: FunctionComponent<Proposal> = ({ noToAdd, storedValue, blockHash }) => {
  return (
    <div className="bg-gray-800 mt-10 rounded-md p-10 min-w-2xl">
      <h2 className="text-xl">Emitting Events in SmartPy</h2>

      <div>
        <div className="bg-gray-200 max-w-md rounded-md text-black px-3 py-3 mt-4">
          <p className="font-medium text-xl">No to Add</p>
          <p className="text-gray-600">{noToAdd ? noToAdd : "0"}</p>
        </div>

        <div className="bg-gray-200 max-w-md rounded-md text-black px-3 py-3 mt-4">
          <p className="font-medium text-xl">Stored Value</p>
          <p className="text-gray-600">{storedValue ? storedValue : "0"}</p>
        </div>

        <div className="bg-gray-200 max-w-md rounded-md text-black px-3 py-3 mt-4">
          <p className="font-medium text-xl">Block Hash</p>
          <p className="text-gray-600">{blockHash ? shortenAddress(blockHash) : " "}</p>
        </div>
      </div>
    </div>
  );
};

export default Events;
