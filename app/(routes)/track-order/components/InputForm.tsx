"use client";
import React from "react";
import { useState } from "react";

const InputForm = async (data: any) => {
  const orders = data.data;
  const orderId = "ed3f750f-4c8f-4fbe-9525-fa51d35edd3c";
  const [state, setState] = useState("");
  function handleClick(e: any) {
    e.preventDefault();
    function getorderid(order: any) {
      return order.orderId === state;
    }

    var gettask = orders.find(getorderid);
    var orderid = JSON.stringify(gettask);

    if (orderid != undefined) console.log(orderid);
    else console.log(`cannot find the given orderid`);
    console.log(orders);

    //console.log(state);
  }
  return (
    <div>
      <form>
        <label htmlFor="">Enter Your Order Id</label>
        <input
          name="state"
          type="text"
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={handleClick}>Track</button>
      </form>
    </div>
  );
};

export default InputForm;
