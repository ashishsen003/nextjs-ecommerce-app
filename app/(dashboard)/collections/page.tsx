"use client";
import { columns } from "@/components/collections/CollectionColumns";
import { DataTable } from "@/components/custom ui/DataTable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Collections = () => {
  const [loading, setLoading] = useState(true);
  const [collections, setCollections] = useState([]);
  const router = useRouter();

  const getCollections = async () => {
    try {
      const res = await fetch("/api/collections");
      const data = await res.json();
      setCollections(data);
      setLoading(false);
    } catch (error) {
      console.log("[collections_GET]", error);
    }
  };

  useEffect(() => {
    getCollections();
  }, []);

  return (
    <div className="px-10 py-5">
    <div className="flex items-center justify-between">
        <p className="text-heading2-bold">Collections</p>
        <Button className="bg-blue-1 text-white" onClick={()=>router.push("/collections/new")}>
            <Plus className="h-4 w-4 mr-2" />
            Create Collection
        </Button>
    </div>
    <Separator className="bg-grey-1 my-4" />
      <DataTable columns={columns} data={collections} searchKey="title" />
    </div>
  );
};

export default Collections;
