// src/App.js
import React, { useEffect, useState } from "react";
import Table, { AvatarCell, SelectColumnFilter, StatusPill } from "./Table";

function App() {
  const [data, setData] = useState([]);

  const columns = React.useMemo(
    () => [
      {
        Header: "My Collectibles",
        accessor: "title",
      }
    ],
    []
  );

  const getData = async () => {
    const res = await fetch('http://tweetmenft-env.eba-7ztwua3f.us-east-1.elasticbeanstalk.com/nft/for-owner/0x848Cb3945a2808291cCf6E0Eae842E563EE47E69');
    const {ownedNfts} = await res.json();
    console.log(ownedNfts)
    return ownedNfts;
  }

  useEffect(() => {
    getData().then(data => {
      console.log(data);
      setData(data);
    })
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-sm	 mx-auto">
        <div className="">
          <h1 className="text-xl font-semibold">React Table + Tailwind CSS = ❤</h1>
        </div>
        <div className="mt-4">
        {data && data.length > 0? (<Table columns={columns} data={data} />) : <div>No NFTs found</div>}
        </div>
      </main>
    </div>
  );
}

export default App; 