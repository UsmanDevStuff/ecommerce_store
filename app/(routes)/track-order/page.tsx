"use client";
import getBillboard from "@/actions/get-billboard";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

export const revalidate = 0;

const TrackOrderPage = async () => {
  const billboard = await getBillboard("23835991-39d3-4878-ae86-e91586eb75b6");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <h1>Hello Idiot</h1>
          <input
            id="id"
            type="text"
            placeholder="enter your order tracking id"
          />
          <button>Track</button>
        </div>
      </div>
    </Container>
  );
};

export default TrackOrderPage;
