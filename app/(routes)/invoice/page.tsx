import ShowInvoice from "./components/showinvoice";
import getOrders from "@/actions/get-orders";

export const revalidate = 0;

const Invoice = async () => {
  const orders = await getOrders();
  return (
    <div>
      <div>
        <ShowInvoice data={orders} />
      </div>
    </div>
  );
};

export default Invoice;
