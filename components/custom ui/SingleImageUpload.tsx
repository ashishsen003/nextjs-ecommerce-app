"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";
import Image from "next/image";

interface SingleImageUploadProps {
  value: string;
  onChange: (url: string) => void;
  onRemove: () => void;
}

const SingleImageUpload: React.FC<SingleImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  const onUpload = (result: any) => {
    onChange(result.info.secure_url);
  };

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-4 items-center">
        {value && (
          <div className="relative w-[150px] h-[150px]">
            <div className="absolute top-2 right-2 z-10">
              <Button onClick={onRemove} size="sm" className="bg-red-500 text-white">
                <X className="h-2 w-2" />
              </Button>
            </div>
            <Image
              src={value}
              alt="collection"
              className="object-cover rounded-lg"
              fill
            />
          </div>
        )}
      </div>
      <CldUploadWidget uploadPreset="lkwjdiuhic" onSuccess={onUpload}>
        {({ open }) => {
          return (
            <Button type="button" className="bg-grey-1 text-white" onClick={() => open()}>
              <Plus className="h-4 w-4" /> Upload Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default SingleImageUpload;
