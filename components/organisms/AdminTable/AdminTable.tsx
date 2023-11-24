import React from "react";

interface Props {
    headers: { name: string; }[];
    children: React.ReactNode;
}

const AdminTable = ({ headers, children }: Props) => {
  return (
    <div className="flex">
      <table className="w-full caption-bottom text-sm">
        <thead className="[&amp;_tr]:border-b">
          <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
            {
                headers?.map((header, index: any) => (
                    <th key={`${header.name}_${index}`} className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
             {header.name}
            </th>
                ))
            }
          </tr>
        </thead>
        <tbody className="[&_tr:last-child]:border-0">
            {children}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
