import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS import karna na bhulein

const Ourblog = () => {
  return (
    // 1. Main Container (Puray page ko center aur padding dene ke liye)
    <Container className="py-5" id="Blog">
      {/* 2. Upar Ka Text Section */}
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-4 fw-bold mt-5">Our Blog</h1>
          <p className="lead text-muted">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium <br /> doloremque laudantum totam rem ab illo inventore.
          </p>
        </Col>
      </Row>

      {/* 3. Niche Ka 3 Cards Section */}
      <Row className="g-4">
        {" "}
        {/* g-4 se cards ke beech me barabar gap aayega */}
        {/* Card 1 */}
        <Col md={4} sm={12}>
          {" "}
          {/* md={4} ka matlab badi screen par 3 card dikhenge (12/4 = 3) */}
          <Card className="h-100 shadow-sm border-0">
            {" "}
            {/* h-100 se sabhi cards ki height barabar rahegi */}
            <Card.Body>
              <div>
                <button
                  style={{
                    color: "blue",
                    backgroundColor: "#E9EDFF",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "2px 3px 4px",
                  }}
                >
                  UI & UX DESIGN
                </button>
              </div>
              <Card.Title style={{ marginTop: "20px" }}>
                Step bt step to conduct usability <br />
                testing
              </Card.Title>
              <Card.Text>
                At vero eos et accusamus et iusto odio <br />
                dignissimos ducimus <br /> qui blanditiis.
              </Card.Text>
              <div style={{ display: "flex", gap: "20px" }}>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    marginTop: "20px",
                  }}
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAQEBAQEBAQEBAQGBgUGBggHBwcHCAwJCQkJCQwTDA4MDA4MExEUEA8QFBEeFxUVFx4iHRsdIiolJSo0MjRERFwBBAQEBAQEBAQEBAYGBQYGCAcHBwcIDAkJCQkJDBMMDgwMDgwTERQQDxAUER4XFRUXHiIdGx0iKiUlKjQyNEREXP/CABEIAMgAyAMBIgACEQEDEQH/xAAdAAACAQUBAQAAAAAAAAAAAAADBAIFBgcICQEA/9oACAEBAAAAAMptMFn7D4pflJefefRh5AAV1qiwwYnv33ts60WVf+ab+Y8hCMAgWXqh2Dln79hfUWtIW8/k7daEIxGAC61UZYOUsqZz19ElW7IvHLu2kIDEAC61UaZMYstGcZgesF05ck9AYDCEAF16q2wcxTc/MW7WWBfQML2dnvcmAlwhCFeqtsGOUuuuD90blvBTFmm+QNsRhAEIhL1Vlg5ikwvhm7Lb2e12+xlmrYwYAjEIS1UYYOY00NWLwoecscr2Nn+8RAHAIhrVBlg5iznh+6KvctJpeFNi4CCMYYQWdYZMYs5U+0Q6/wCfWZ3tAQxiBCAWmGDlLKc7NwpTrsFk+8RjiIQQwC0wwYxJSLr/AEc9Twlttd4oxgAIQiaOwUpfZYnuvQuj1PaLZTn9sfl/4QVwgC0c5SkxLqdQOo+FtTL93sr/ABwptxZnvnYEoV13DG+wRr7iafvRm9Odtt7hT1BohBpXz0fABZwptHsClLD29ejel1K6ZahaVex8WT6c3Csq8WPMy2nfvffureDsIdF9QtLyL+JLbubBrKVAtr87rcc+gyLoVjfXTq7oprB8rOkiyn0TVTqJcN6T2zUfgtx2TujUzrPz4xCJYtD9l1NfTqB9Y9QaZU2AlNVdr9IOpXPi3FwSopgb9ZrUeNo3ginFqMZseZt103v02CrANMaW3B2lXcNobgUqlUISZCUvY/BaQoKU5wWdN7xHPohgJhBtyRp+P1WiqhGrT3/q/wBQR+/c2LBaQKyQ8mWYK/LjUUfKt1Pqf//EABkBAAMBAQEAAAAAAAAAAAAAAAABAgQDBf/aAAgBAhAAAADVIAxgCQRU02wkFjk19BskF5WVersBpojy8y9HewGksuDN73RsGpOWCPWZQxFxznt0mRjoUOqUzRcskoUqi+dBPRQik4dOlMMpOB1UqWV//8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwUEBv/aAAgBAxAAAADygVcokAKPQPPISBu+joc/zgkUPu+t8bnAS2P6D2PkcgBDH0O5Xy+Ughh6OnfGgkltuqvJEqW9E0mCmW9AlUMxC9ESDp4I1sSinRjJtQiKKM8//8QAIBAAAgEFAQEBAQEAAAAAAAAAAQIAAwQFBgcIERASE//aAAgBAQABAgBShUg/fpIgKyq1rdGfSZ9JJ+ksWZ2dlixYIB8+fyWzG/7f1bCbHg+t4vqFpdfDDCDDGjR48EULFAAH8/z1ra7usiU0KYatofQgSCPhBDRgweLEChQFA+Zy+u7jJ08RXusnVvGu6j8Y6EVKlSGDRo8aIECgBQAZ1HbL2+OW2GrRN3d3Is7nkSEEMGDRgwYOECBQqhQqL1PFW1DCcszXPcH55qcMzWjtZeaKTKQysGDBlZXVFUKqqoAQdzxXN8BRtMZgqVjkcXndZ6njfM+OKlWDAqVKsjqiqFChQoA7rieIvu+/2PecJv2a9E2G99tPm7FlSGDKylSrK6oEChVCqPmXx/HcZsOmazy/VtV2LlGqce6vr+i6yVYMCpUqVZXVAoUKFCgAC7xi5uvWs6eNr5TYKNFgQwKlWDKVKuiBQoAUACAZDD18dmLi92Hn9HLUNCpEEEFSGVgQQyoFCgBQAAIJc3OYyltRsbvL7Tz9iCCCCrBlIIYIFCgBYPwRF6DmaVrZaNk6b1sXWZSPnxlZWVgQQgSCCLB+fcNv/VNEvb+53DGZDkWg7Trmm9u1ntqqVYMGDBo0SLBFgijd+0bj2TQdvuBvvONj4prGg4CwpUMrSK4Hc8T6bw/pmxyJjBw0SLBK1xtHorbu0qFhXzNtO7bvmt8v7jRON5b0xmsj/oI6vT5xujRo8eJFizrvRP8ASmCQf9edbtruoeg+cce1pqnqHGfCoYtUZzpN60aOUgld9senFhKO8tK2Ku/V1/wrIuPWl2YzsWNZzU83bI8aVCsE3nLZ9gwhKM8B4TsnrKtqOTva3qfICViWc12J49tlQPKkWCdwrZupXakxlUUqrDzTsXq5Mff6zke55JI7fXNdq8oVsDlnjxYs9CZa6r1XtKjmUi413Mepa1CrxvK7Xkvrskr1ajXMRvPWZePFizrq5OpSNnUYgsKdRG3TYFPFdh+13qsFrSqbj88uXrx4sU9cDNSlN6dQRSrPLvI4y01bNtPpheuwNYzzvmGhClZ6BvTKMqSk6uH+UqlVLCnTzNV0jEmqaMqwrpuUcEKbi73S7Jpy8hKsDTdyGsUVrtqn4xc0I4qAHA3pn//EAEIQAAIBAwIEAgcFBQYFBQAAAAECAwAEEQUGEiExURNBBxQiMmFxgRAgI0BSFUJicpEWJDBDobFUgpKi0WNzg4TC/9oACAEBAAM/AG7mj3NHuaPc0e5pu5o9zR7mm7mm7mhFFJNK/BHGhd2J5BVGSTVvqFvHeWF1HcW0g9iWJw6H6imHej3NHuabuaPc0e5o9zTdzR7mj3NN3NN3NN+o/wCCka8crBUHUnpW1NvW13Nf6iDLA/AYEGZXbsorV93Jc2EM37O0uRsGBX/EdOgDEVuLbviiw126toVkYiEPhGYjHEVrWLC7tXv5xeWioUkXoTnzzW176MesXawTPIQkfvZUnC8+9W1/bxXlnOs0EoJSRehAOPyQHM9K0tdsyWdnqP8AeWugFSFsljCfb6fp61qFzPc3WoXDSIrlyDnLg8/ZqzurG3k4TDGyniZlPEOXl1NKHfif2VA4WfGJY26HJ6kea1qcUk00SsQAeSDKsp6EfGoDATJcKkxJ4cE5wOgwa3DtK4gjvZM6I1wouIZcN7GeEtH5o1RyIk0MiyROodHU5VlPMEHsfyMWmaVf3rvHmKCRsO3CGwOgNXN0LvUbt24pJXdWZufEP38nlk1NNpFteWYD8I4Ziqtn5P2qea3046lGo0yN3HHxZOQOfMcxVnEklmeOS3kHiwAtxeCeLHKrTTtN9btXi4p1OY5AePGOTIemaVriO4wFUTRyMF7N15VbTi7hg9pCoKjOSA5/38q1ca/a7OvJGm0yRWhtQ/WN1y3s/D8hwqzfpUmr++1ieAX7PY+PxGDJCgrywaLQeq8ZeFjxRs3Mj4VqV0kdpADiJ0PLqQvkxpls4LJMAJkhR5BuZH0p1mVmZwEBGR1HyqW+ZEVAqRgKiKOmB0oLaRp4nMqFfvkVcx26CIku7hjk45LzyTV9PvvTZ9OgE7xu8mWbCp5cTH8gM86bRN5a1blg0D3BYBQSoVxnz7Vd393DYWqeKzuFXA78qg0+zRZV4p/DBc92rULm/mghgJUtyJGaWXT/AFi8nzcvzHYUNCgu75rnjdEPAvBWoqs9xFZOtsvtA+ZTPmtSW7Twyq0b8Hsjuo65pP7SbiilTikSxjKfwjjrn+QtZbiwvpLSPMkBhaYv7eRnhwnYUIdyQRunitnKfAAVx+GOA81HLpVkZA8kSAmo48qoXhxUNxbujKrVatDIjwLhhg4qw0TWooVjAV7fkM8+fKkN9vHVS4aVUtrcfJiW/I3F5tEajb8BaxmRinCTK3EcAJihe79SGdCcabLPg+TJ7ODW7tP1WWHRzHAkTlI4wAzyfFga35pV2tvq+mQyqx6OnhNT6jtuXcPgkRRxF3AOQCBW8ri/NloujwxRdAffkNb1vZUm1LUzHdrg+qSoMSI1GfV9C1Ao395tGTB8mVqtLLQNeuVvBLfz3MIuYh/kKFJRfyP7U0rUdPBw89tLHGRyKuVPCR2INXVl6QW9by10NvyGVj74cS8Dcfx5V6y+q3l9c3Aa5I5W4KtJFzzHxjmnfl1rRYrJ4pbfUrl2dSZr0jAjXl4YXt8etWel7L1PQCrGCQyHmckI56ZrRbi1mhttHmMcnhvHcWcvBNC6eaZqKLwMwXNpZ2yAIkr8bu/nJ8GNRTbp2TpkMfiKLmUMvdUXiq02zoawWsIRrp/Hk5YJJGB+Sg256UtO1dIwE1u3uLUY/VweIRj+YVEty9rLEGHlUYiRgAqll4j8KLWt3FLheKIHB5HBomC4U4IVyB8h51LYxyKhHSp9zekTRpH4vAt7eZnI6kyEL/TAOaHkMD8lp+pvY3F5b+JNZS+PbtkqUf6dRSJqLTKDhgP60bawuVgmHrEQyrdQHXmK3FaT6dpceuXk9xcmSSe6aT3fFY/hqOy+VPpO2oLPUL2W8uAzF55GLMQatXSWXI5AkGlXTNQlCjL3zji88BV/KKty44gDExzWq3l3cLZ6nZ21tBIy5nieQuc9QFIpkMj3W+dESVnyBJYReJH8Y/arVGwIt42t1FGeTCxVS+P3eKNgKgjt/CEpLAHirxNqadLw4aR5nb5lz/gH/D4nVe5Aq521uO7EicUGQsyDkwB91x8xWhatA2pJKrxvzYA4r0eXDNcXdnG8pbLEmts6RZmOy4IYEB4VU0dY1MRwZ8Djyx+A8qtNn7L21PrT+rwTyrG8ze5C1458LxD+6rHAz5E0QSCOY/IgAkkAAEkk4AA8zWmb09KWi7R0icS6Vp4ub+4uEPs3dzaplETvEhOfiatd6aeSkptdVt1YW10BkEfokHmlbh2TqN3omrwvbSnOR70Ui/qQ+a1qkbM0E7gN1w5rV9WAe8mPh+QyaXWZDqF6hGmW7r4h6eK/URL/APqrTde39Z27fRA29/aPb4H7pxlCv8hAIrdmyITouoxprNhbsYo0uZCs0HAcEJKMkr8GrYe4lhiudSGkXz4Hq9/7C5/glHsEVxIsg5owyrDmCO4Pn9/l94kgAZNbO2YZLRZ/2rqq5Hqdm4IQ/wDqy9Free8vFtJ7tbDS5AQbGzyqMvaV/een2Pu7b+6UBaGxuh6yg6tbSgxyj/pNR3kMdxBIslvPGssUi81eNxxKw+BBrTN32r2uo2pcDJjlTlLE3dDW5trTI6QPqNhNJwwTRL+IT+l4+uafS0gvt9XVttnRUMYkub+RUZuM4CxpkktWkwaRp8WgvbvpKRgWz28gkjcH9/jXIYmvxOLsCBTJqWpRsMMt3cKfmJDSvG0bAECt47VIO39x3tqg/wAkSccJ+cb5WtzWsEcWubdsL916zxO1s7/NQGWtrXs0cOtaDf6crnBnjdbmNPiQArVp+r2kN/pd9Bd2sqK6SwOHUqwyOnT5H/At7SCW6u544LeJS8ksrBERR5sTyFbS0h5LTb1pPrV0uR4i/g2oP87c2rfG54ns31AWFpJye2sMxKV/Sz+81c+JqzlvjypeFgRy86O6vRpDpN25e927cnTm7m3I44K0Lacc9tCi6nrnATFpsDjiz5Gd+kaVvTX9x6vea/q89tf+Jwer27mOKCNekcIHurVzOLazC3NzJdTosYmYyK8rnA5MSTXpK2KkN/t/dRsrm4AeewXPqg+BjOVreWznf9vbSsb+KG/9VZ4WktmbHUr1WrbVtX1jVbWBre3vL2e6jidgWjSZy4QkdSuaVmBQEr5v0H070M0rVw9KvNk7n07U453FjJMkN/CD7Mlu5w2R3XqKUgMjBkIBVu4PMH72eRrU9e1G/wBCafg0qGXighUYBK8gX/Vmj5dT9nwqeMEgCVevCfZb6HoaEyAhWHmQwwc1ufautDTNF1WW007Wbm3i1BIsAyBCQvtdVxxVoenQGD1SJruQF5JXUM8uepJNf2Y139v6apSyvMHKcgkvmtPuD0q7XF2I3gsLdtT4Cchxa1m3kmXqUP8AU1ZaftjakUcSh59WZm+ISBqU8SkDHTBrIrGPsGK/Bm78hQ1LZW0r9ZTL42kWhLnqWWMK2fqPveHbXUgGSsErYHwUmmm1O6fzKq9ZrlRoSBgD0JU18Ka3nSdB7cTrIvzU5qLVNu7a12B2xPaW8wZT+pRSQbL0LTwoMt/qi/RIELtQ0z0qbIuXYcN7FPpr/wD2YiAKKW08eehAr8TYtgG8r65x9ESjxZU/SiIWOMNjH1NcOAKIoYNZgY95AP6Cl1DaN/tyWTNzpF2ZI1P/AA1zzH0V/vNom0tbvopQk5g8CFj5PMeClOoBgcqy8FFXwfLlXKudeFdYPuTD/vX/AMj7OFwaTWvRZaWLvm40W5exkH8BPiRH/papHXYUK9FtNRnP9USpbDWdnalEcPZ6raS58lVJQWP9KBtpZIl4i7JwgfxNXj7+0mwDZFloaf1nlZq9rrXuIO+T9Ky1cqxWLWD+Ji1NtPfejXUkmLG+cafd9vDnIAb/AJHwaIYg9Qcfd4NuaRAZMLJfszJ+oJEaWTLKeatXDOreTgGsrkUaLpwqcMMMp7MK8eJZOmeo+P2RWW6tT21eTBINasfws9PWrXLr9WQmnVNgt5Na38B+jI1NFPbWqnCqGJ/nNHUtraDqIbJuLG0k+ZMYzQ1L0o7skD8SW7wWa/KGIfZl3PkOVc69ishqwlvH+lBTRlXQ4ZGDL8GU5FR69oGia3CfYvrGC4+roCw+hrr9xLW70a3kflFYyOqd3mfH+y00gLt+9Ra34iMtE3/aa4o1Oa5ZrJNCOYg+5L/o4/8AP2TaBrWla3BnxNPu4rnHcRtlh9RkVbXm1fR9rFuweF7id4m7pNCrrRSZZT14smhf+irbF0Wz4CeA3/wyEV+1tybk1TOfW9Vu5V/lMpAoIhY+QrhQDzPM/WiTSLGQGyaFHjX5CgDTan6PEsZHzJpV/Naj/wBp8Sp92bcHpD1qa5nxZWBFqidhEtRmYpFjhXlWS8bDk6kVwogPbH1BxXKsUHUqDg8iD2IoSxq5GG6MPiK4X+FDXvQJsSCV+K60XcE+mS9+AQF4j9UP2Gz9Am8Lov7ekvfOPrGHWj4aBjk4yfmeZrkkYPNjRyedMep5VhSBXtqAeeRXtLz8hRBpWtd56cW9sSWdwB8CGT7r6bu7eoLEeJfKy/ESqHosSaB6iirOOzn+hriWgfs4JOfuyDB+DV51cpo02mBv7rPdQ3Lr2lhVkVvqHIpr+5SHJCD2pG7LUVh6GPS9ZQkKJ7/TLWIDtOAn+yVzNccrt+nCiupJrl0onAJriuVHxrMhPashmr9mekKGxd8RarZT2h+LqPFT/Vfu29xvnUIbX/LEKTfGVIwp+zFBbth5NXDQxQrxEZM/I9iK8WPn745MPiKElvLH54yKFvbJbRn8aUBpX7CjDpOp7fjBCXV/Z3hPkVtkdR/q9BEdyelcEa/qbmfrQwa5VzWs3P1rGa4YhTaJunburqceqalbSN/LxgN/oa9psdM8vl9sVjaXV9McR20Mkz/KNeKpb7Urm/uGLT3UjzuT3c5rnXSuG4U12o8Oc/Z0yaMUiTD3Hwr/AD8jQDUzNJCmc59s/wAI6Ckku5mj91QEB8jivEkjtwf4m+QoeX2GssKzcf8ANXG6riuWKKh+HqOY+dDUtB0LUQc+tadazE/F4gT9n//EACwRAAEDAgUDAwMFAAAAAAAAAAEAAhEDEAQgITFBEhMiFGGBMDJRQlJicaH/2gAIAQIBAT8AzSpzHMCgfolYjEMoATuV6ymQDKbi6TnESm6wZzHJjKDqr9CNgiz04aHiZ5Cq4V1QB4cAVgzFCiHnyjMbkSCFXc+n2z+2Wn45Rc6rLy4nj/F3ndvoLisG09LSTo1sfJM5jY2xLA5vuVSY1geNDJ5T29T4bvOsKiIpUx/EWGQ2NqrC4D8jVPouLpa7pPITafbJazyqP0VNkMa0fpAGUI26SUGgJ/BRp9wRt7puHbS1Blx3JVOdZsWhRFgim8lCxErmFU3TPtFzcoDwlDm8eSqawfhDYWdkKMhoQMEXPBW4u5He5TjPT/SPF+EBA90bHcZX/cUdkEFyuAvzbkZP/8QAKhEAAgEDAwMDAwUAAAAAAAAAAQIAAxARBBIhIDFBIjJRMGFxExVikaH/2gAIAQMBAT8A6dhhBH01XAsRHXyOsWQAmaXTvqCQOwn7fVyeMAeTH0NVFzjP4lQbQR9FTgiaKuKVPkHOTBUbUZKkjHgylqv02KFSR+JrxmvXZF9IIP8AfULqSrBh3ByJp1Su9UqOHw4+wPOJtSltQIB2P+xqIZ9wRcjzNfVAVqQHLuGJ+yjA6cQXE0VZ6bHngCIlbVkFXVMD55jM2n3LUZTx3Bldt1aqf5HqHRQqCmSW7EYlOuFXBXcPBjPv9dT0005lRi7u+PcSeoWwZgCAZlOo1I5HI+DKmoetjdgKPAhtxCMXEHJFxBF7XEa4g90NzB5FxCMjoSG5jXFjwTdO3SeTcWf3XT2iDvczyZ8W8Wfxb//Z"
                  alt=""
                />
                <div style={{ marginTop: "25px" }}>
                  <h5>John Yeager</h5>
                  <p>Designer,New York</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 2 */}
        <Col md={4} sm={12}>
          <Card className="h-100 shadow-sm border-0">
            <Card.Body>
              <div>
                <button
                  style={{
                    color: "blue",
                    backgroundColor: "#E9EDFF",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "2px 3px 4px",
                  }}
                >
                  CEO
                </button>
              </div>
              <Card.Title style={{ marginTop: "20px" }}>
                Increase conversion rate form ad <br />
                to landing page
              </Card.Title>
              <Card.Text>
                Nemo enim ipsam voluptaitem quia voluptas sit aspernatur aut
                odit aut fugit.
              </Card.Text>
              <div style={{ display: "flex", gap: "20px" }}>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    marginTop: "20px",
                  }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div style={{ marginTop: "25px" }}>
                  <h5>Berneice Harris</h5>
                  <p>Designer,New York</p>
                </div>
              </div>
            </Card.Body>
            <div></div>
          </Card>
        </Col>
        {/* Card 3 */}
        <Col md={4} sm={12}>
          <Card className="h-100 shadow-sm  border-0 ">
            <Card.Body>
              <div>
                <button
                  style={{
                    color: "blue",
                    backgroundColor: "#E9EDFF",
                    padding: "5px 10px",
                    borderRadius: "10px",
                    border: "none",
                    boxShadow: "2px 3px 4px",
                  }}
                >
                  DEVELOPER
                </button>
              </div>
              <Card.Title style={{ marginTop: "20px" }}>
                Why small business should <br />
                start marketing
              </Card.Title>
              <Card.Text>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit.
              </Card.Text>
              <div style={{ display: "flex", gap: "20px" }}>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "100%",
                    marginTop: "20px",
                  }}
                  src="data:image/jpeg;base64,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"
                  alt=""
                />
                <div style={{ marginTop: "25px" }}>
                  <h5>Sarah Pettway</h5>
                  <p>Designer,New York</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ourblog;
