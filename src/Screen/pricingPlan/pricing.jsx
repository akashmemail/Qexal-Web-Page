import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CardGroup } from "react-bootstrap";

function Pricing() {
  return (
    <div id="price">
      <Card className="text-center border-0">
        <Card.Body>
          <Card.Title style={{ fontSize: "2.5rem", margin: "20px" }}>
            Pricing Plan
          </Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            <br />
            vero!orem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            vero!
          </Card.Text>
          <div style={{ gap: "20px", margin: "20px", marginTop: "50px" }}>
            <Button
              variant="primary "
              style={{ margin: "20px", borderRadius: "20px" }}
            >
              Monthly
            </Button>
            <Button variant="primary">Yearly</Button>
          </div>
        </Card.Body>
      </Card>

      <CardGroup>
        <Card className="border-0">
          <Card.Img
            variant="top"
            style={{
              width: "100px",
              background: "#E5EAFF",
              marginLeft: "38%",
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAaVBMVEVHcEwnU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/+YDEvRAAAAInRSTlMA/qhs+wEUBenzMn8M3N/Uery4Ps0bXSVFlMcjWE4LmW2KG26XRQAAARZJREFUWMPtltkOgjAQAKuUS+RUvC/2/z9SEjACZbvbkpiYdN6XBGbYVgiHw/EPbJMsS7bW46EXQUvkhVbj/i2FnvTmm8+f9jBgfzIc35QwodwYjF/XK1BYra/M8eAsYRZ5DljmYkCJSae9ORy904E5HI3TsTkcxKlqDmfG6aw5nKlT1BzO0KnWHO2UNEc4rVNYQFqLEhZRiXzZA3KRyCXzshDiaFbAuIZj12Bl+f7fHncX8/HLbtTi3fBj5nflVz5k/PHs4NssE3qpPArGTxEXD91CbYhHxA21WOunpiz5rBl7GS3r0w3jXKqIbmjUsibd0IzLUrthHO/fsua7YVwwXt0F4xVa31HasvTdMI7qQDgcjp/wBmEzotFx87KBAAAAAElFTkSuQmCC"
          />
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Title>BASIC</Card.Title>
            <Card.Text>Onlinespace:50MB</Card.Text>
            <Card.Text>Support: No</Card.Text>
            <Card.Text>Domain 1</Card.Text>
            <Card.Text>All Extension Included</Card.Text>
            <Card.Text>All Extension Included</Card.Text>
            <Card.Text>$29.00 / Year</Card.Text>
            <button> Buy Now</button>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            variant="top"
            style={{
              width: "100px",
              background: "#E5EAFF",
              marginLeft: "38%",
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAqFBMVEVHcEwnU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/84ytu2AAAAN3RSTlMA3DISbP4jCwXpvKj3WUX0lHgW4Mf7fv0CXvHNgLQ8LkpA1tMdGU+LuNCIrSiOpJ2Zwm/l7wRnUy5TCAAAAlBJREFUWMOtl31fgjAQx4ckoAlgAhSWKYGllT239//OspJt3HaMp99ffIADtt/3jjtC6mTHi0Vsk65yzib0qMmZ0y3eNehJhtsh3FtSQUuvZfhoSoGmoxbh1vmYShqfWw3DL4KIKhUFFw3C7WufovKv7WbO4dJ4yp3DVeNp1TlciKeyc7gUniqdwwU9RZ3DJXpa65zeU61zGk8Lg/aQkZMp7aUHctfvARmJoz7x0bw1ASoaRg8d1895XIXtw8NVhcVty82828JkuLxaNA9fXF12KSb6omLPU314OleUtXV+OjDvZ/Xhs3vzdGu+ZuGbUDz/WkNW9Cq+Kdz8Hd7egC9DyeJVpFzrzS0hm0jeGzVZjBthtxOPZEp3NhJZp++FfmdkifBRJQs7T0PiZQihwpv4l0HmM0+BIFwrvjflg533CbbbcZrGmDuTd0fohVLgd1H6XfJRAD5S0DuZz1UEZ3uzcnkPLj+bEs75S1K555Mzb88/K5eSl1yZS0+PyqyTsvTxqXFrZLiOA3/5qmYpD1yCIOj7CJDEDSopvGPJuc1q/gIMyPWOpXZZRN5WuuImAPlWFpdjPL/hNzmVZAFuTgXgT3sibtH4YCFkCdxYBxHIHfi5RkGhIotzU4BWZEos4JLPEGRkcW7MPTDFKBSccAT/yWLcQCBZnkotzsf3FyOLcfP1/YG3rVKTJXeTEEjYOEulmJNVcqNr3aVGk5HFuNEND1Kr+0+WyI1ufIELTQ6ed0gaN9sDtPv9B44BRp4Bhq4Bxr4BBs8BRt8Bhu9m4/8PK3DanZbJLmYAAAAASUVORK5CYII="
          />
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Title>BASIC</Card.Title>
            <Card.Text>Onlinespace:50MB</Card.Text>
            <Card.Text>Support: No</Card.Text>
            <Card.Text>Domain 1</Card.Text>
            <Card.Text>All Extension Included</Card.Text>
            <Card.Text>All Extension Included</Card.Text>
            <Card.Text>$29.00 / Year</Card.Text>
            <button> Buy Now</button>
          </Card.Body>
        </Card>
        <Card className="border-0">
          <Card.Img
            variant="top"
            style={{
              width: "100px",
              background: "#E5EAFF",
              marginLeft: "38%",
            }}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAqFBMVEVHcEwnU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/8nU/84ytu2AAAAN3RSTlMA3DISbP4jCwXpvKj3WUX0lHgW4Mf7fv0CXvHNgLQ8LkpA1tMdGU+LuNCIrSiOpJ2Zwm/l7wRnUy5TCAAAAlBJREFUWMOtl31fgjAQx4ckoAlgAhSWKYGllT239//OspJt3HaMp99ffIADtt/3jjtC6mTHi0Vsk65yzib0qMmZ0y3eNehJhtsh3FtSQUuvZfhoSoGmoxbh1vmYShqfWw3DL4KIKhUFFw3C7WufovKv7WbO4dJ4yp3DVeNp1TlciKeyc7gUniqdwwU9RZ3DJXpa65zeU61zGk8Lg/aQkZMp7aUHctfvARmJoz7x0bw1ASoaRg8d1895XIXtw8NVhcVty82828JkuLxaNA9fXF12KSb6omLPU314OleUtXV+OjDvZ/Xhs3vzdGu+ZuGbUDz/WkNW9Cq+Kdz8Hd7egC9DyeJVpFzrzS0hm0jeGzVZjBthtxOPZEp3NhJZp++FfmdkifBRJQs7T0PiZQihwpv4l0HmM0+BIFwrvjflg533CbbbcZrGmDuTd0fohVLgd1H6XfJRAD5S0DuZz1UEZ3uzcnkPLj+bEs75S1K555Mzb88/K5eSl1yZS0+PyqyTsvTxqXFrZLiOA3/5qmYpD1yCIOj7CJDEDSopvGPJuc1q/gIMyPWOpXZZRN5WuuImAPlWFpdjPL/hNzmVZAFuTgXgT3sibtH4YCFkCdxYBxHIHfi5RkGhIotzU4BWZEos4JLPEGRkcW7MPTDFKBSccAT/yWLcQCBZnkotzsf3FyOLcfP1/YG3rVKTJXeTEEjYOEulmJNVcqNr3aVGk5HFuNEND1Kr+0+WyI1ufIELTQ6ed0gaN9sDtPv9B44BRp4Bhq4Bxr4BBs8BRt8Bhu9m4/8PK3DanZbJLmYAAAAASUVORK5CYII="
          />
          <Card.Body
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card.Title>BASIC</Card.Title>
            <Card.Text>Onlinespace:50MB</Card.Text>
            <Card.Text>Support: No</Card.Text>
            <Card.Text>Domain 1</Card.Text>
            <Card.Text>All Extension Included</Card.Text>
            <Card.Text>All Extension Included</Card.Text>
            <Card.Text>$29.00 / Year</Card.Text>
            <button> Buy Now</button>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}

export default Pricing;
