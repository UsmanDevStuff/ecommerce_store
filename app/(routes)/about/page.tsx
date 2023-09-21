import Container from "@/components/ui/container";

const About = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center m-4">
          <h1 className="text-3xl font-bold">About</h1>
        </div>
        <div className="my-6 mx-4 md:mx-8 lg:mx-20 text-lg font-light">
          <p>
            At EllisMart, we believe that shopping should be an enjoyable and
            convenient experience for everyone. As a premier ecommerce website
            based in the United States, we strive to provide you with a wide
            range of high-quality products at affordable prices, all from the
            comfort of your own home.
          </p>
          <br />
          <p>
            <span className="font-bold">Our Mission:</span> Our mission is
            simple - to offer an extensive selection of products that cater to
            your every need, while ensuring a seamless and secure online
            shopping experience. We aim to become your go-to online store,
            providing you with a one-stop solution for all your shopping
            desires.
          </p>
          <br />
          <p>
            <span className="font-bold">Product Range:</span> At EllisMart, we
            take pride in our diverse range of products that span across various
            categories. Whether you&apos;re looking for fashion-forward
            clothing, trendy accessories, cutting-edge electronics, or even home
            essentials, we&apos;ve got you covered. Our team of expert curators
            hand-picks each item to ensure that you receive only the best
            products available on the market.
          </p>
          <br />
          <p>
            <span className="font-bold">Quality Assurance:</span> We understand
            that quality is of utmost importance to you. That&apos;s why we
            partner with trusted and reputable brands to ensure that every
            product you purchase from EllisMart meets the highest standards.
            Rest assured, our products undergo rigorous quality checks to
            guarantee your satisfaction.
          </p>
          <br />
          <p>
            <span className="font-bold">Seamless Shopping Experience:</span> We
            value your time and strive to make your shopping experience as
            smooth as possible. Our user-friendly website is designed with
            simplicity and ease of navigation in mind. You can effortlessly
            browse through our extensive product range, filter your search based
            on your preferences, and read detailed descriptions and customer
            reviews to make an informed decision. With just a few clicks,
            you&apos;ll be able to add your desired items to your cart and
            proceed to a hassle-free checkout process.
          </p>
          <br />
          <p>
            <span className="font-bold">Safe and Secure Transactions:</span>{" "}
            Your privacy and security are our top priorities. We utilize the
            latest encryption and security measures to protect your personal
            information and ensure that all transactions on our website are safe
            and secure. You can shop with confidence, knowing that your data is
            in good hands.
          </p>
          <br />
          <p>
            <span className="font-bold">Exceptional Customer Service:</span> At
            EllisMart, we believe in going above and beyond to serve our valued
            customers. Our dedicated customer support team is available to
            assist you with any queries or concerns you may have. From
            pre-purchase inquiries to after-sales support, we are committed to
            providing you with prompt and friendly assistance every step of the
            way.
          </p>
          <br />
          <p>
            <span className="font-bold">Fast and Reliable Shipping:</span> We
            understand the excitement of receiving your purchases promptly.
            That&apos;s why we work with trusted shipping partners to ensure
            that your orders are delivered to your doorstep in a timely manner.
            We offer various shipping options to cater to your needs, so you can
            choose the one that works best for you.
          </p>
          <br />
          {/* <p>
            Join the EllisMart Community: We invite you to be a part of the
            EllisMart community, where shopping is not just a transaction, but
            an experience. Sign up for our newsletter to stay updated on the
            latest trends, exclusive offers, and exciting promotions. Follow us
            on social media to engage with fellow shoppers, participate in
            contests, and get inspired by our curated collections.
          </p>
          <br /> */}
          <p className="italic">
            Thank you for choosing{" "}
            <span className="underline font-semibold">EllisMart</span> as your
            preferred online shopping destination. We look forward to serving
            you and providing you with an exceptional shopping experience that
            exceeds your expectations.{" "}
            <span className="underline font-semibold">Happy shopping!</span>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default About;
