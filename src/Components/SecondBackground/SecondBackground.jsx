import { useEffect, useRef } from "react";
import { Row, Col, Container, Image, Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import fImage from "./../../assets/Explorer-644x750.jpg";
import sImage from "./../../assets/sphere-white.png";
import TImage from "./../../assets/Group-1904.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./SecondBackground.css";
gsap.registerPlugin(ScrollTrigger);
function SecondBackground() {
  const fImageRef = useRef(null);
  const sImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Set initial radius value
    gsap.set(fImageRef.current, {
      borderRadius: "100px",
    });

    const fImageAnim = gsap.to(fImageRef.current, {
      y: "-100vh",
      ease: "none",
      paused: true,
    });

    const sImageAnim = gsap.to(sImageRef.current, {
      y: "-100vh",
      ease: "none",
      paused: true,
    });

    const fImageScrollTrigger = ScrollTrigger.create({
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;

        const initialHeight = 500;
        const finalHeight = 1000;
        const newHeight =
          initialHeight - progress * (initialHeight - finalHeight);
        gsap.set(fImageRef.current, {
          height: `${newHeight}px`,
        });

        const initialRadius = 2500;
        const finalRadius = 5;
        const borderRadiusValue =
          initialRadius - progress * (initialRadius - finalRadius);
        gsap.set(fImageRef.current, {
          borderRadius: `${borderRadiusValue}px`,
        });

        // Calculate the new scale based on scroll progress
        const initialScale = 1; // Initial scale of the image
        const finalScale = 0.5; // Final scale of the image
        const newScale = initialScale - progress * (initialScale - finalScale);
        gsap.set(fImageRef.current, {
          scale: newScale,
        });
      },
    });

    const sImageScrollTrigger = ScrollTrigger.create({
      scrub: true,
      onUpdate: (self) => {
        const direction = self.direction;
        const distance = 300;

        if (direction === -1) {
          gsap.to(sImageRef.current, { marginTop: distance });
          gsap.to(sImageRef.current, { marginBottom: 0 });
        } else {
          gsap.to(sImageRef.current, { marginTop: 0 });
          gsap.to(sImageRef.current, { marginBottom: distance });
        }
      },
    });

    return () => {
      fImageAnim.kill();
      sImageAnim.kill();
      fImageScrollTrigger.kill();
      sImageScrollTrigger.kill();
    };
  }, []);

  return (
    <>
      <div className="content">
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="imageContainer" style={{ position: "relative" }}>
                <Image
                  fluid
                  xs={12}
                  src={sImage}
                  className="sImage"
                  ref={sImageRef}
                />
                <Image fluid src={fImage} className="fImage" ref={fImageRef} />
              </div>
              <div
                className="BadgesGroup"
                style={{ position: "relative", zIndex: 3 }}
              >
                <Badge className="Badge" bg="dark">
                  <span className="BadgeSpan">CUSTOMERS GIVE US AN</span>
                  <br />
                  <br />
                  <span className="BadgeNum">8.8</span>
                  <br />
                  <br />
                  <span className="BadgeSpan">OUT OF 10</span>
                </Badge>
                <br />

                <Badge className="Badge" bg="dark">
                  <span className="BadgeSpan">CUSTOMERS GIVE US AN</span>
                  <br />
                  <br />
                  <span className="BadgeNum">8.8</span>
                  <br />
                  <br />
                  <span className="BadgeSpan">OUT OF 10</span>
                </Badge>
                <br />

                <Badge className="Badge" bg="dark">
                  <span className="BadgeSpan">CUSTOMERS GIVE US AN</span>
                  <br />
                  <br />
                  <span className="BadgeNum">8.8</span>
                  <br />
                  <br />
                  <span className="BadgeSpan">OUT OF 10</span>
                </Badge>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6}>
              <div className="AboutUsButton">
                <Button
                  className="AboutUs"
                  style={{
                    backgroundColor: "#0b2545",
                    borderRadius: "50px",
                    width: "100px",
                    height: "auto",
                  }}
                >
                  About Us
                </Button>
              </div>
              <div className="h1">
                <h1 style={{ fontSize: "55px" }}>
                  We reveal and fix invisible process inefficiencies
                </h1>
                <Image src={TImage} alt="" style={{ width: "50px" }} />
              </div>
              <span style={{ fontSize: "24px" }}>
                Organisations run their processes through hundreds of
                IT-systems. This leaves space for many inefficiencies.
                Inefficiencies that hurt your business. Through process mining
                we identify and fix those inefficiencies. Apolix is your
                one-stop shop for process improvement.
              </span>
              <br />
              <br />
              <div className="twoButtons">
                <Button id="board1">Get on board</Button>
                <Button id="board2">Get on board</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SecondBackground;
