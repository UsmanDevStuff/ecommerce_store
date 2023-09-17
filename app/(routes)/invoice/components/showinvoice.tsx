"use client";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import Container from "@/components/ui/container";
import InvoiceData from "./invoice-data";
import useCart from "@/hooks/use-cart";
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const ShowInvoice = (data: any) => {
  const orders = data.data;
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const removeAll = useCart((state) => state.removeAll);
  const orderbyid = orders.find((o: any) => o.id === id);

  // custom useState hook
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

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

  // invoice stuff && pdf related stuff

  const styles = StyleSheet.create({
    heading: {
      fontSize: 36,
      fontWeight: "bold",
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 70,
      color: "white",
      backgroundColor: "black",
    },
    primary: {
      fontSize: 12,
      fontWeight: "bold",
    },
    secondry: {
      fontSize: 12,
      fontWeight: "light",
      color: "grey",
    },
    flex: {
      flexDirection: "row",
      border: 1,
      borderColor: "black",
      padding: 6,
      marginTop: 2,
      marginBottom: 2,
    },
  });

  const Doc = () => (
    <Document>
      <Page size="A4">
        <View>
          <Text style={styles.heading}>EllisMart Customer Invoice</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.primary}>Order Id :</Text>
          <Text style={styles.secondry}> {orderbyid.orderId}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.primary}>Email :</Text>
          <Text style={styles.secondry}> {orderbyid.email}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.primary}>Phone :</Text>
          <Text style={styles.secondry}> {orderbyid.phone}</Text>
        </View>
        <View style={styles.flex}>
          <Text style={styles.primary}>Address</Text>
          <Text style={styles.secondry}> {orderbyid.address}</Text>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      <Container>
        {searchParams.get("success") ? (
          <div id="pdf">
            <div>
              <InvoiceData data={orders} id={id} />
              <div className="grid justify-center">
                {isClient ? (
                  <PDFDownloadLink
                    className="bg-black rounded-full text-white px-4 py-1 mb-8"
                    document={<Doc />}
                    fileName="invoice.pdf"
                  >
                    {({ blob, url, loading, error }) =>
                      loading ? "Loading Invoice..." : "Get Invoice"
                    }
                  </PDFDownloadLink>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
        {searchParams.get("canceled") ? (
          <h1>There is an error with your order and is not processed</h1>
        ) : null}
      </Container>
    </div>
  );
};

export default ShowInvoice;
