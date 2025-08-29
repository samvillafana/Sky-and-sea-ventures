import { Navbar, Container, NavbarBrand, Nav, NavLink } from "react-bootstrap";
import Image from "next/image";
import banner from "../../../public/banner.jpeg";
import styles from "./page.module.css";

export default function About() {
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
      </main>
    </div>
  );
}
