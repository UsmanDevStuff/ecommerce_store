import Container from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const InvoiceData = (data: any) => {
  const orderId = "ed3f750f-4c8f-4fbe-9525-fa51d35edd3c"; //test
  const orders = data.data;
  const id = data.id;
  function getorderid(order: any) {
    return order.orderId === id;
  }
  var orderbyid = orders.find(getorderid);
  console.log(orderbyid);
  const orderid = orderbyid.orderId;
  const email = orderbyid.email;
  const phone = orderbyid.phone;
  const address = orderbyid.address;
  const ispaid = orderbyid.isPaid;
  const orderstatus = orderbyid.orderStatus;

  return (
    <div className="grid justify-center">
      <Container>
        <div className="max-w-md my-10">
          <Card>
            <CardHeader>
              <CardTitle>Your Order Invoice</CardTitle>
              <CardDescription>
                <span className="font-semibold">Note:</span> Be sure to copy
                your order id and save it, So you will be able to track your
                order.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <CardDescription className="font-bold">
                Order Id : <span className="font-light">{orderid}</span>
              </CardDescription>
              <CardDescription className="font-bold">
                Email : <span className="font-light">{email}</span>
              </CardDescription>
              <CardDescription className="font-bold">
                Phone : <span className="font-light">{phone}</span>
              </CardDescription>
              <CardDescription className="font-bold">
                Address : <span className="font-light">{address}</span>
              </CardDescription>
              {ispaid ? (
                <CardDescription className="font-bold">
                  Is Paid :{" "}
                  <span className="font-light">Payment Successful</span>
                </CardDescription>
              ) : (
                <CardDescription className="font-bold">
                  Is Paid : <span className="font-light">Payment</span>
                </CardDescription>
              )}
              <CardDescription className="font-bold">
                Order Status : <span className="font-light">{orderstatus}</span>
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default InvoiceData;
