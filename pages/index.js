import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

import Tree from "../components/Tree";
import Gallery from "../components/Gallery";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [id, setId] = useState("");

  const search = async () => {
    setLoading(true);
    const res = await fetch(`/api/loader?id=${id}`);
    const json = await res.json();
    console.log(json);
    setData(json);
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Instaloader</title>
      </Head>

      <main>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.currentTarget.value)}
          disabled={loading}
        />

        <input
          type="button"
          disabled={loading}
          value={loading ? "Zoeken ..." : "Zoek"}
          onClick={(e) => search(id)}
        />
      </main>

      <Tree data={data} />
    </div>
  );
}
