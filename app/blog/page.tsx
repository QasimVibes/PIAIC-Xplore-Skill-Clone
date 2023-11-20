
import Footer from "../(components)/Footer/Footer";
import Navbar from "../(components)/Navbar/Navbar";
import Image from "next/image";
import SecondaryBTN from "../(components)/SecondaryBTN/SecondaryBTN";
import PostCategories from "../(components)/PostCategories/PostCategories";
import InputSection from "../(components)/InputSection/InputSection";
export default function blog() {
  return (
    <>
      <section className="Sub-header">
        <Navbar />
        <h1>Our Post</h1>
      </section>
      <section className="blog-content">
        <div className="row">
          <div className="blog-left">
            <h2>Our Certificate & Online Program</h2>
            <h5>Aug 1, 2021</h5>
            <Image
              src={"/img/post.png"}
              alt="Picture of the author"
              width={"667"}
              height={"450"}
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium dolor consequatur, nobis quae obcaecati delectus at
              aspernatur, placeat quasi iure mollitia. Repellendus a ut nostrum
              dolore velit odit cumque, quos doloribus sint id aperiam eius
              aliquam quo modi sequi rem quia exercitationem laborum, ratione
              expedita! Deleniti velit officia incidunt illum.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Inventore corrupti blanditiis deserunt incidunt itaque ut
              laudantium a amet omnis nihil, dolor doloribus. Voluptatum,
              accusantium? Quo, aperiam nobis labore pariatur, esse vitae amet
              repellendus libero architecto nisi facere unde ducimus
              perspiciatis, laudantium alias porro. Sapiente voluptatem eligendi
              at voluptatum optio facilis?
            </p>
            <br />
            <div className="comment-box">
              <h3>Leave a Comment</h3>
              <form className="comment-form">
                <InputSection type="text" placeholder="Enter Name"/>
                <InputSection type="email" placeholder="Enter Email"/>
                <textarea rows={5} placeholder="Your Comment"></textarea>
                <SecondaryBTN text="POST COMMENT"/>
              </form>
            </div>
          </div>

          <div className="blog-right">
            <h3>Post Categories</h3>
            <PostCategories heading="Business Analytics" num="12"/>
            <PostCategories heading="Machine Learning" num="29"/>
            <PostCategories heading="Computer Science" num="15"/>
            <PostCategories heading="Data Analytics" num="22"/>
            <PostCategories heading="Full Stack" num="20"/>
          </div>
        </div>
      </section>
      <Footer text={<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi<br/>Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.</>} />
    </>
  );
}
