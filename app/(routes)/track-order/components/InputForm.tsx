"use client";
import React from "react";
import { useRef, useState } from "react";

const InputForm = async (data: any) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const orders = data.data;
  const orderId = "ed3f750f-4c8f-4fbe-9525-fa51d35edd3c";
  const [value, setValue] = useState("");
  let orderstatus;
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
    <div className="border border-solid border-black rounded-md flex justify-center">
      <form className="flex flex-col w-1/2">
        <label htmlFor="">Enter Your Order Id</label>
        <input
          className="border border-solid border-gray-600"
          ref={inputRef}
          name="state"
          type="text"
          //onChange={(e) => setState(e.target.value)}
        />
        <button
          className="m-4 border border-solid border-black bg-black text-white w-16"
          onClick={handleClick}
        >
          Track
        </button>
        <div>
          <h1>Order Status : {value}</h1>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
