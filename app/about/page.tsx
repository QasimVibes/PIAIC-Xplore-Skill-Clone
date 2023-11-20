
import Footer from "../(components)/Footer/Footer";
import Navbar from "../(components)/Navbar/Navbar";
import Image from "next/image";
import SecondaryBTN from "../(components)/SecondaryBTN/SecondaryBTN";
export default function About() {
  return (
    <>
      <section className="Sub-header">
        <Navbar />
        <h1>About Us</h1>
      </section>
      <section className="about-us">
        <div className="row">
          <div className="about-col">
            <h1>We are the world&apos;s largest University</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              cumque in accusantium molestias maiores fuga vitae eos, ducimus
              officiis repudiandae voluptatem error. Laboriosam, numquam
              blanditiis aspernatur, nobis tempora consequatur id aliquam
              asperiores voluptatum iste animi voluptatem fugiat totam excepturi
              dolor.
            </p>
            <SecondaryBTN text="EXPLORE NOW"/>
          </div>
          <div className="about-col">
            <Image
              src={"/img/about.png"}
              alt="Picture of the author"
              width={"494"}
              height={"330"}
            />
          </div>
        </div>
      </section>
      <Footer text={<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi<br/>Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.</>} />
    </>
  );
}
