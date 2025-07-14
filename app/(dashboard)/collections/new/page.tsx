
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import CollectionForm from "@/components/collections/CollectionForm";

const CreateCollection = () => {
  return (
    <div>
      <CollectionForm />{" "}
    </div>
  );
};

export default CreateCollection;
