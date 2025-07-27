'use client';

import CollectionForm from "@/components/collections/CollectionForm";
import Loader from "@/components/custom ui/Loader";
import React, { use, useEffect, useState } from "react";

const CollectionDetails = ({
  params,
}: {
  params: { collectionId: string };
}) => {

  console.log(params);
  
  const [loading, setLoading] = useState(true);
  const [collectionDetails, setCollectionDetails] =
    useState<CollectionType | null>(null);

  const getCollectionDetails = async () => {
    try {
      const res = await fetch(`/api/collections/${params.collectionId}`, {
        method: "GET",
      });
      const data = await res.json();

      console.log(data);
      
      setCollectionDetails(data);
      setLoading(false);
    } catch (error) {
      console.log("[collectionDetails_GET]", error);
    }
  };

  useEffect(() => {
    getCollectionDetails();
  }, []);

console.log(loading);

  return loading ? <Loader /> : <div>
    <CollectionForm
      initialData={collectionDetails} />
  </div>;
};

export default CollectionDetails;
