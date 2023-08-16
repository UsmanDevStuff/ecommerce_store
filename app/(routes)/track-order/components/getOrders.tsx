import getOrders from "@/actions/get-orders";
export default async function orders() {
  const orders = await getOrders();
  return orders;
}
