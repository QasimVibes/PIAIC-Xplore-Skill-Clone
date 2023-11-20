import Footer from "./(components)/Footer/Footer";
import MainBTN from "./(components)/MainBTN/MainBTN";
import Navbar from "./(components)/Navbar/Navbar";
import TextCard from "./(components)/TextCard/TextCard";
import HomeCard from "./(components)/HomeCard/HomeCard";
import PictureCard from "./(components)/PictureCard/PictureCard";
import ReviewSection from "./(components)/ReviewSection/ReviewSection";
import PageBlock from "./(components)/PageBlock/PageBlock";
export default function Home() {
  return (
    <>
      <section className="header">
        <Navbar />
        <div className="text_box">
          <h2>GET READY</h2>
          <p id="headtext">TO DISCOVER CAMPUS</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            consequuntur corrupti sapiente aut porro
            <br /> esse blanditiis in quae perspiciatis quo.
          </p>
          <MainBTN text="Visit Us To Know More" />
        </div>
      </section>

      <section className="course">
        <PageBlock heading={<>EXPLORE OUR 60+<br />MAJOR PROGRAMS</>} text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>
        <div className="row">
          <TextCard
            heading="Undergraduate Programs"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedi
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non."
          />
          <TextCard
            heading="Graduate Programs"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non."
          />
          <TextCard
            heading="Adult Learning & Degree Completion"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor corporis, commodi nihil quas soluta labore quisquam impedit
              distinctio explicabo aut minima quos pariatur unde aliquam earum
              laborum velit non."
          />
        </div>
      </section>

      <section className="campus">
        <PageBlock
          heading="TAKE OUR VIRTUAL TOUR"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        />

        <div className="row">
          <HomeCard link="/img/Campus1.png" heading="DELHI" />
          <HomeCard link="/img/Campus2.png" heading="HYDERABAD" />
          <HomeCard link="/img/Campus3.png" heading="MUMBAI" />
        </div>
      </section>

      <section className="facilities">
        <PageBlock heading="Our Facilities" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>

        <div className="row">
          <PictureCard
            link="/img/libary.png"
            heading="Best Libary"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio omnis asperiores atque aperiam."
          />
          <PictureCard
            link="/img/playground.png"
            heading="Athletics"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio omnis asperiores atque aperiam."
          />
          <PictureCard
            link="/img/food.png"
            heading="Tasty and Healthy Food"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio omnis asperiores atque aperiam."
          />
        </div>
      </section>

      <section className="testimonials">
        <PageBlock heading="What Our Student Says" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit."/>

        <div className="row">
          <ReviewSection
            link="/img/user.png"
            heading="Student Name"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime."
          />
          <ReviewSection
            link="/img/user.png"
            heading="Student Name"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi maiores in nostrum rerum voluptatem praesentium veritatis alias omnis voluptate nisi aperiam, voluptatum quibusdam itaque a deserunt. In quia repellat maxime."
          />
        </div>
      </section>

      <section className="cta">
        <h1>GET READY FOR A BRIGHT FUTURE</h1>
        <MainBTN text="CONTACT US" />
      </section>
      <Footer text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem."/>
    </>
  );
}
