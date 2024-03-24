import { BsArrowDownSquare } from "react-icons/bs";
import AutoPlay from "./../Carousel/AutoPlay";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Text.css";

export default function Text() {
  return (
    <>
      <Container>
        <Row style={{ marginBottom: "100px" }}>
          <Col sm={12}>
            <h2 className="head1">Take your Process to the next dimension</h2>
            <Row>
              <Col sm={12}>
                <BsArrowDownSquare className="arrowIcon" />
              </Col>

              <Col sm={12}>
                <div>
                  <span className="head2">
                    Apolix optimizes your processes through data, focusing on
                    simplicity and value creation.
                  </span>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <br />

                  <span className="head3">
                    THESE ORGANIZATIONS WENT TO THE MOON WITH US
                  </span>
                </div>

                <div
                  className="AutoPlay"
                  style={{
                    alignItems: "center",
                    marginTop: "30px",
                    marginRight: "200px",
                    width: "700px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  <AutoPlay />
                </div>
              </Col>
            </Row>
          </Col>
          <Col sm={12}>
            <Button
              id="fButton"
              style={{
                backgroundColor: " #0b2545",
                height: "80px",
                borderRadius: "20px",
                width: "200px",
                color: "white",
                border: "none",
                fontSize: "20px",
                marginTop: "400px",
                marginLeft: "35px",
              }}
            >
              Get On Board
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
{
  /* <Row>
<Container className="mt-4">
  <Row className="Texr-Row">
    <Col sm={10}>
      <h2 className="head1">Take your Process to the next dimension</h2>
      <Row>
        <Col sm={1}>
          <BsArrowDownSquare className="arrowIcon" />
        </Col>

        <Col sm={11}>
          <div>
            <span className="head2">
              Apolix optimizes your processes through data, focusing on
              simplicity and value creation.
            </span>
          </div>
          <div style={{ marginTop: "10px" }}>
            <span className="head3">
              THESE ORGANIZATIONS WENT TO THE MOON WITH US
            </span>
          </div>
          <div
            className="AutoPlay"
            style={{
              alignItems: "center",
              marginTop: "30px",
              marginRight: "200px",
              width: "700px",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            <AutoPlay />
          </div>
        </Col>
      </Row>
    </Col>
    <Col sm={2}>
      <div>
        <button className="GetOnBoard">Get on board</button>
      </div>
    </Col>
  </Row>
</Container>
</Row> */
}
