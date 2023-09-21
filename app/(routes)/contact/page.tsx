import ContactForm from "./components/ContactForm";
import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/actions/get-billboard";

const Contact = async () => {
  const billboard = await getBillboard("bd0e2fc7-30d8-4c62-a417-a2e6cb6e84a8");
  return (
    <Container>
      {/* <div>
        <Billboard data={billboard} />
      </div> */}
      <div className="flex justify-center text-3xl font-bold m-4">
        <h1>Contact</h1>
      </div>
      <div className="w-full md:w-96 md:max-w-full mx-auto my-8">
        <ContactForm />
      </div>
    </Container>
  );
};

export default Contact;
