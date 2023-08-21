"use client";
import React from "react";
import { useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";
import Container from "@/components/ui/container";

const InputForm = async (data: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const orders = data.data;
  const orderId = "ed3f750f-4c8f-4fbe-9525-fa51d35edd3c";
  const [value, setValue] = useState("");
  function handleClick(e: any) {
    e.preventDefault();
    const inputId = inputRef.current?.value;

    function getorderid(order: any) {
      return order.orderId === inputId;
    }

    var orderid = orders.find(getorderid);
    const orderstatus = orderid.orderStatus;
    setValue(orderstatus);

    if (orderid != undefined) console.log(orderid.orderStatus);
    else console.log(`cannot find the given orderid`);

    console.log(`your input is : ${inputId}`);
    return orderstatus;
  }
  return (
    <Container>
      <div className="grid justify-center">
        <Card className="w-[360px] md:w-[420px]">
          <form>
            <CardHeader className="grid justify-center">
              <CardTitle>Enter Your Order Id...</CardTitle>
            </CardHeader>
            <CardContent className="grid">
              <Input
                ref={inputRef}
                name="state"
                type="text"
                placeholder="Your Order Id ....."
              />
              <Button className="mt-2" onClick={handleClick}>
                Track Order
              </Button>
            </CardContent>
            <CardFooter>
              <h1 className="font-bold">
                Order Status : <span className="font-light">{value}</span>
              </h1>
            </CardFooter>
            {/* <input
          className="border border-solid border-gray-600"
          ref={inputRef}
          name="state"
          type="text"
          //onChange={(e) => setState(e.target.value)}
        /> */}
            {/* <button
          className="m-4 border border-solid border-black bg-black text-white w-16"
          onClick={handleClick}
        >
          Track
        </button>
        <div>
          <h1>Order Status : {value}</h1>
        </div> */}
          </form>
        </Card>
      </div>
    </Container>
  );
};

export default InputForm;
