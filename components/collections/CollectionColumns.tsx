"use client";
import { ColumnDef } from "@tanstack/react-table";
import Delete from "../custom ui/Delete";
import Link from "next/link";

export const columns: ColumnDef<CollectionType>[] = [
  {
    accessorKey: "title",
    header: "Title",
    cell:({row})=><Link href={`/collection/${row.original._id}`} className="hover:text-blue-1">{row.original.title}</Link>
},
{
    accessorKey: "products",
    header: "Products",
    cell:({row})=><p>{row.original.product.length}</p>
  },
  {
    id: "actions",
    cell: ({ row }) => <Delete id={row.original._id} />,
  },
];
