import Link from 'next/link'
interface FooterProps{
  text:  React.ReactNode;
}

const Footer:React.FC<FooterProps> =({text})=> {
  return (
    <section className="footer">
        <hr />
        <h4>About Us</h4>
        <p>{text}</p>

        <div className="icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-linkedin"></i>
        </div>
        <p>
          Made with <i className="fas fa-heart"></i> by{" "}
          <Link href="/">Sagar Developer</Link>
        </p>
        <p>
          Copyright © 2021 <Link href="/">Xplore Skill</Link>. All Rights
          Reserved
        </p>
      </section>
  )
}
export default Footer;