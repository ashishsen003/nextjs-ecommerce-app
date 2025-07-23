import Loader from "@/components/custom ui/Loader";
import React, { use, useEffect, useState } from "react";

const CollectionDetails = ({
  params,
}: {
  params: { collectionId: string };
}) => {
  const [loading, setLoading] = useState(true);
  const [collectionDetails, setCollectionDetails] =
    useState<CollectionType | null>(null);

  const getCollectionDetails = async () => {
    try {
      const res = await fetch(`/api/collections/${params.collectionId}`);
      const data = await res.json();
      setCollectionDetails(data);
      setLoading(false);
    } catch (error) {
      console.log("[collectionDetails_GET]", error);
    }
  };

  useEffect(() => {
    getCollectionDetails();
  }, []);

  return loading ? <Loader /> : <div>CollectionDetails</div>;
};

export default CollectionDetails;
