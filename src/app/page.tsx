import styles from "./page.module.css";
import Container from "react-bootstrap/Container";
import {
  Carousel,
  CarouselCaption,
  CarouselItem,
  Nav,
  NavLink,
} from "react-bootstrap";
import { Navbar, NavbarBrand } from "react-bootstrap";
import Image from "next/image";
import banner from "../../public/banner.jpeg";
import van from "../../public/van.jpeg";
import vanside from "../../public/vanside.jpeg";
import side from "../../public/side.jpeg";
import inside from "../../public/inside.jpeg";
import backdoor from "../../public/backdoor.jpeg";
import car from "../../public/car.jpeg";
import parkedvan from "../../public/parkedvan.jpeg";

export default function Home() {
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
              <NavLink className="text-white" href="/">
                Services
              </NavLink>
              <NavLink className="text-white" href="/">
                Pricing
              </NavLink>
              <NavLink className="text-white" href="/contact">
                Contact
              </NavLink>
            </Nav>
          </Container>
        </Navbar>

        {/* Full-width Hero Carousel - Booking.com style */}
        <Carousel
          className={styles.heroCarousel}
          interval={5000}
          controls={true}
          indicators={true}
        >
          <CarouselItem>
            <div className={styles.carouselImageContainer}>
              <Image
                src={van}
                className={styles.heroImage}
                alt="Van exterior"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
              <div className={styles.overlay}></div>
            </div>
            <CarouselCaption className={styles.heroCaption}>
              <h1 className={styles.heroTitle}>Discover Your Perfect Van</h1>
              <p className={styles.heroSubtitle}>
                Experience the freedom of the open road with our premium van
                rentals
              </p>
              <button className={styles.heroButton}>Book Now</button>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem>
            <div className={styles.carouselImageContainer}>
              <Image
                src={side}
                className={styles.heroImage}
                alt="Side view"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.overlay}></div>
            </div>
            <CarouselCaption className={styles.heroCaption}>
              <h1 className={styles.heroTitle}>Comfort Meets Adventure</h1>
              <p className={styles.heroSubtitle}>
                Modern amenities and spacious interiors for your journey
              </p>
              <button className={styles.heroButton}>Explore Features</button>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem>
            <div className={styles.carouselImageContainer}>
              <Image
                src={inside}
                className={styles.heroImage}
                alt="Interior view"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.overlay}></div>
            </div>
            <CarouselCaption className={styles.heroCaption}>
              <h1 className={styles.heroTitle}>Home Away From Home</h1>
              <p className={styles.heroSubtitle}>
                Fully equipped interiors with everything you need for your
                adventure
              </p>
              <button className={styles.heroButton}>View Interior</button>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem>
            <div className={styles.carouselImageContainer}>
              <Image
                src={vanside}
                className={styles.heroImage}
                alt="Van side view"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.overlay}></div>
            </div>
            <CarouselCaption className={styles.heroCaption}>
              <h1 className={styles.heroTitle}>Built for Adventure</h1>
              <p className={styles.heroSubtitle}>
                Rugged design meets refined comfort for any destination
              </p>
              <button className={styles.heroButton}>Learn More</button>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem>
            <div className={styles.carouselImageContainer}>
              <Image
                src={backdoor}
                className={styles.heroImage}
                alt="Back door view"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.overlay}></div>
            </div>
            <CarouselCaption className={styles.heroCaption}>
              <h1 className={styles.heroTitle}>Easy Access Storage</h1>
              <p className={styles.heroSubtitle}>
                Convenient rear access with ample storage for all your gear
              </p>
              <button className={styles.heroButton}>See Storage</button>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem>
            <div className={styles.carouselImageContainer}>
              <Image
                src={car}
                className={styles.heroImage}
                alt="Car view"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.overlay}></div>
            </div>
            <CarouselCaption className={styles.heroCaption}>
              <h1 className={styles.heroTitle}>Premium Performance</h1>
              <p className={styles.heroSubtitle}>
                Reliable engines and smooth handling for any terrain
              </p>
              <button className={styles.heroButton}>Check Specs</button>
            </CarouselCaption>
          </CarouselItem>

          <CarouselItem>
            <div className={styles.carouselImageContainer}>
              <Image
                src={parkedvan}
                className={styles.heroImage}
                alt="Parked van"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className={styles.overlay}></div>
            </div>
            <CarouselCaption className={styles.heroCaption}>
              <h1 className={styles.heroTitle}>Your Adventure Awaits</h1>
              <p className={styles.heroSubtitle}>
                Start your journey today with our premium van rentals
              </p>
              <button className={styles.heroButton}>Get Started</button>
            </CarouselCaption>
          </CarouselItem>
        </Carousel>

        {/* Your other content goes here */}
        <Container className="my-5">
          <h2>Welcome to Our Van Rental Service</h2>
          <p>Content below the hero carousel...</p>
        </Container>
      </main>
    </div>
  );
}
