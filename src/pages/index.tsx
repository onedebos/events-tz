import useTaquitoEvents from "@/hooks/useTaquitoEvent";
import Events from "@/components/Events";

export default function Home() {
  const { noOnScreen } = useTaquitoEvents();

  return (
    <main className="bg-gray-900 p-10 min-h-screen flex gap-4">
      <Events noToAdd={noOnScreen.noToAdd} storedValue={noOnScreen.storedValue} blockHash={noOnScreen.blockHash} />
    </main>
  );
}
