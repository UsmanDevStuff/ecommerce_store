"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import Container from "@/components/ui/container";
import InvoiceData from "./invoice-data";
import useCart from "@/hooks/use-cart";

const ShowInvoice = (data: any) => {
  const orders = data.data;
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const removeAll = useCart((state) => state.removeAll);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success(
        "Payment completed. Please download your invoice or check your email for details"
      );
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong. Please try again");
    }
  }, [searchParams, removeAll]);

  return (
    <div>
      <Container>
        {searchParams.get("success") ? (
          <InvoiceData data={orders} id={id} />
        ) : null}
        {searchParams.get("canceled") ? (
          <h1>There is an error with your order and is not processed</h1>
        ) : null}
      </Container>
    </div>
  );
};

export default ShowInvoice;
