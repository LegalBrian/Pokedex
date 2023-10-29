import React from "react";
import pokemon from "./api.json";
import Card from "@/components/Card";

const Home: React.FC = () => {
  return (
    <main className="flex w-full justify-center">
      <div className="grid grid-cols-3 gap-4">
        {pokemon.map((p, i) => (
          <Card key={i} p={p} />
          ))}
      </div>
    </main>
  );
}

export default Home;