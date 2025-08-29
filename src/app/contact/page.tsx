import { Navbar, Container, NavbarBrand, Nav, NavLink } from "react-bootstrap";
import Image from "next/image";
import banner from "../../../public/banner.jpeg";
import styles from "./page.module.css";
import contact from "../../../public/contact.jpeg";

export default function Contact() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar className={styles.navbar}>
          <Container>
            <NavbarBrand href="/">
              <Image
                alt="banner"
                width={60}
                height={60}
                className="rounded-circle img-thumbnail"
                src={banner}
              />
            </NavbarBrand>
            <Nav className="me-auto">
              {/* <NavLink className="text-white" href="/about">
                About
              </NavLink> */}
              <NavLink className="text-white" href="#services">
                Services
              </NavLink>
              <NavLink className="text-white" href="#pricing">
                Pricing
              </NavLink>
              <NavLink className="text-white" href="/contact">
                Contact
              </NavLink>
            </Nav>
          </Container>
        </Navbar>

        {/* Full-width Hero Image - Booking.com style */}
        <div className={styles.heroImageContainer}>
          <Image
            src={contact}
            className={styles.heroImage}
            alt="Contact Information"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Your other content can go here */}
        <Container className="my-5">
          <div className="row">
            <div className="col-md-8 mx-auto text-center">
              <h2>Ready to Start Your Journey?</h2>
              <p className="lead">
                Contact us today to book your perfect van rental experience.
              </p>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
}
