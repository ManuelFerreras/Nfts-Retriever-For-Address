// create a react NFT Card

import React from "react";

export function NftCard({ nft }) {
    return (
        <td className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-white-800 dark:hover:bg-white-700">
            <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={nft.rawMetadata.image} alt={nft.title} />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <div>{nft.title}</div>
                <div>ID: {nft.tokenId}</div>
                <div>Address: {nft.contract.address}</div>
            </div>
        </td>
    );
}