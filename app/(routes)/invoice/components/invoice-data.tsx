import Container from "@/components/ui/container";

const InvoiceData = (data: any) => {
  const orderId = "ed3f750f-4c8f-4fbe-9525-fa51d35edd3c"; //test
  const orders = data.data;
  const id = data.id;
  function getorderid(order: any) {
    return order.orderId === id;
  }
  var orderbyid = orders.find(getorderid);
  console.log(orderbyid);
  const email = orderbyid.email;
  const phone = orderbyid.phone;
  const address = orderbyid.address;
  const ispaid = orderbyid.isPaid;
  const orderstatus = orderbyid.orderStatus;

  return (
    <div>
      <Container>
        <div>
          <h1>Email : {email}</h1>
          <h1>Phone : {phone}</h1>
          <h1>Address : {address}</h1>
          {ispaid ? (
            <h1>Is Paid : Payment Completed</h1>
          ) : (
            <h1>Is Paid : Payment not completed</h1>
          )}
          <h1>Order Status : {orderstatus}</h1>
        </div>
      </Container>
    </div>
  );
};

export default InvoiceData;
