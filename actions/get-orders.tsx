import { Orders } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/orders`;

const getOrders = async (): Promise<Orders[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getOrders;
