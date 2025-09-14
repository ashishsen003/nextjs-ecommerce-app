"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Button } from "../ui/button";
import { Plus, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ImageUploadProps {
  value: string[];
  onChange: (urls: string[]) => void;
  onRemove: (url: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  onRemove,
  value,
}) => {
  
  // Use a stable component ID that doesn't change on re-renders
  
  // Track if this component is currently uploading to prevent conflicts
  const [isUploading, setIsUploading] = useState(false);

  // Ensure value is always an array
  const safeValue = Array.isArray(value) ? value : [];
  
  const onUpload = (result: unknown) => {
    const uploadResult = result as {info?: {secure_url?: string}};
    if (uploadResult?.info?.secure_url) {
      setIsUploading(true);
      // Use the current form value instead of local state to prevent conflicts
      const newValue = [...safeValue, uploadResult.info.secure_url];
      onChange(newValue);
      setIsUploading(false);
    }
  };

  

  console.log(value);
  

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-4 items-center">
        {safeValue.map((url, i) => (
          <div className="relative w-[150px] h-[150px]" key={i}>
            <div className="absolute top-2 right-2 z-10">
              <Button onClick={() => onRemove(url)} size="sm" className="bg-red-500 text-white">
                <X className="h-2 w-2" />
              </Button>
            </div>
            <Image
              src={url}
              alt="collection"
              className="object-cover rounded-lg"
              fill
              sizes="150px"
            />
          </div>
        ))}
      </div>
      <CldUploadWidget uploadPreset="lkwjdiuhic" onSuccess={onUpload}>
        {({ open }) => {
          return (
            <Button 
              type="button" 
              className="bg-grey-1 text-white" 
              onClick={() => {
                open();
              }}
              disabled={isUploading}
            >
              <Plus className="h-4 w-4" /> {isUploading ? 'Uploading...' : 'Upload Image'}
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;