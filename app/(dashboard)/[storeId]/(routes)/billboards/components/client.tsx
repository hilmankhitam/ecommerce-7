'use client';

import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Plus } from "lucide-react";

export const BillboardClient = () => {
    const params = useParams();
    const router = useRouter();


    return (
        <>
            <div className="flex items-center justify-between">
                <Heading title="Billboards (0)" description="Manage Billboards for your store" />
                <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
                    <Plus className="mr-2 w-4 h-4" />
                    Add New
                </Button>
            </div>
        </>
    );
}