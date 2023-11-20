import Footer from "../(components)/Footer/Footer";
import Navbar from "../(components)/Navbar/Navbar";
import TextCard from "../(components)/TextCard/TextCard";
import PictureCard from "../(components)/PictureCard/PictureCard";
export default function Course() {
  return (
    <>
      <section className="Sub-header">
        <Navbar />
        <h1>Our Courses</h1>
      </section>
      <section className="course">
        <h1>Course We Offer</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

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

      <section className="facilities">
        <h1>Best Courses</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div className="row">
          <PictureCard
            link="/img/course1.png"
            heading="Web Development"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio omnis asperiores atque aperiam."
          />
          <PictureCard
            link="/img/course2.png"
            heading="Artificial Intelligence"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio omnis asperiores atque aperiam."
          />
          <PictureCard
            link="/img/course3.png"
            heading="Data Science"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit.Distinctio omnis asperiores atque aperiam."
          />
        </div>
      </section>

      <Footer text={<>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse minima incidunt odio nam facilis, eligendi<br/>Itaque fugiat cupiditate consectetur. Aliquid ab deserunt exercitationem, illum molestiae dolorem.</>} />
    </>
  );
}
