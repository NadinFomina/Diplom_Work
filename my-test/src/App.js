
import "./style/style.css"
import img1 from "../src/img/NAAM 1.png"
import img2 from "../src/img/Group 46.svg"
import img3 from "../src/img/Social Media Button-3.png"
import img4 from "../src/img/Social Media Button-2.png"
import img5 from "../src/img/Social Media Button-1.png"
import img6 from "../src/img/Social Media Button.png"
import img7 from "../src/img/Ellipse 771.png"
import coctail from "../src/img/coctail.png"
import vector from "../src/img/Vector 6.png"
import steik from "../src/img/steik.png"
import bear from "../src/img/bear.png"
import Vector from "../src/img/Vector.png"
import Vector2 from "../src/img/Vector 2.png"
import ellipse from "../src/img/Ellipse 771.png"
import rectangle77 from "../src/img/Rectangle 77.png"
import rectangle80 from "../src/img/Rectangle 80.png"
import arrow from "../src/img/arrow-up.png"
import point from "../src/img/“.png"
import map from "../src/img/map.png"
import phone from "../src/img/icon1.png"
import sms from "../src/img/sms.png"
import time from "../src/img/time.svg"
import map2 from "../src/img/map2.png"
import logo from "../src/img/NAAM 2.png"
import tw from "../src/img/fb.png"
import lg from "../src/img/lg.png"
import yt from "../src/img/yt.png"
import fb from "../src/img/fb.png"

import Slider from "./swiper_slider"



function App() {
  return (
    <div class="wrapper">
      <header>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <a className="navbar_brand" href="#"><img src={img1} />  </a>
            {/* <button className="navbar-toggler " type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> */}
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav">
                <a class="nav-link text-white" style={{ padding: "0px" }} href="#">À la carte</a>
                <a class="nav-link text-white" style={{ padding: "0px" }} href="#">Wijnkaart</a>
                <a class="nav-link text-white" style={{ padding: "0px" }} href="#" >Lunchmenu</a>
                <a class="nav-link text-white last" style={{ marginRight: "159px", padding: "0px" }} href="#">Contact</a>
                <div class="contact" style={{ flexWrap: 'nowrap', display: 'flex' }}>
                  <a class="nav-link text-white" style={{ padding: "0px" }} href="mobile"> <img src={img2} /> +32 9 282 57 25</a>
                </div>

              </div>

            </div>
          </div>
        </nav>
        <section style={{ marginTop: "154px" }}>
          <p>OPEN EVERYDAY 6AM - 9PM</p>
          <span>A bad day with lunch is better than <br></br> a good day without it.</span>
          <div class="social">
            <button>Reserve a table</button>
            <span class="socil_svg" >
              <img src={img3} />
              <img src={img4} />
              <img src={img5} />
              <img src={img6} />
            </span>
          </div>
        </section>
      </header>
      <main>
        <div class="main_container">
          <section>
            <span>
              <h3>Woensdag 12/01</h3>
              <p>Salade met Serrano
                <img src={img7} />
                <img src={img7} />
                <img src={img7} />
                Steak Tartaar
              </p>
              <img src={Vector2} />
            </span>

            <span>
              <h3>
                Donderdag 13/01
              </h3>
              <p>
                Toast Roquefort
                <img src={ellipse} />
                <img src={ellipse} />
                <img src={ellipse} />
                Penne met Kip en Prei
              </p>
              <img src={Vector2} />
            </span>

            <span>
              <h3>
                Vrijdag 14/01
              </h3>
              <p>
                Verrassing van de Chef
                <img src={ellipse} />
                <img src={ellipse} />
                <img src={ellipse} />
                Penne met Kip en Prei
              </p>
              <img src={Vector2} />
            </span>

            <span>
              <h3>
                Vrijdag 15/01

              </h3>
              <p>
                Verrassing van de Chef
                <img src={ellipse} />
                <img src={ellipse} />
                <img src={ellipse} />
                Penne met Kip en Prei
              </p>
              <img src={Vector2} />
            </span>

            <span>
              <h3>
                Vrijdag 16/01
              </h3>
              <p>
                Verrassing van de Chef
                <img src={ellipse} />
                <img src={ellipse} />
                <img src={ellipse} />
                Penne met Kip en Prei
              </p>
              <img src={Vector2} />
            </span>

          </section>
          <section class="last_section_img">
            <img src={rectangle77} />
            <img src={rectangle80} />
          </section>

        </div>

        <section class="lozung">
          <div><img src={arrow} /></div>
          <div class="lozung_devis">
            <img src={point} />
            <h1>Goede service, lekker eten, toffe ambiance</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor<br></br>
              invidunt
              ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
              duo
              dolores et<br></br> ea rebum. Stet clita kasd gubergren.
            </p>
            <h3>ALAIN HEYNDRICKX</h3>
          </div>
          <div><img src={Vector} /></div>
        </section>
        <section class="section_menu"  >
          <div>
            <section>
              <span className="menu_first">
                <h1>LEKKER ETEN</h1>
                <img src={vector} />
                <p>
                  Eten gaat niet over indruk maken op mensen. Het gaat <br></br>erom dat ze zich op hun gemak
                  voelen.
                  Dat is onze <br></br>filosofie, goed eten in een goede sfeer.
                </p>
              </span>
              <img src={steik} />
            </section>

          </div>
          <div>
            <section>
              <img src={bear} />
              <span>
                <h1>TOFFE AMBIANCE</h1>
                <img src={vector} />
                <p>
                  Het creëren van de juiste sfeer is zeer belangrijk voor ons. We nemen onze tijd om te
                  zorgen dat alle elementen bijdragen aan de juiste setting.
                </p>
              </span>
            </section>

          </div>
          <div>
            <section>
              <span>
                <h1>LEKKERE COCKTAILS</h1>
                <img src={vector} />
                <p>
                  Ons doel is simpel: een gastvrije plek bieden waar u kunt genieten van een
                  onvergetelijke cocktail, een goed gesprek en lekker eten.
                </p>
              </span>
              <img src={coctail} />
            </section>

          </div>
        </section>
        <section class="lozung2">
          <section className="lozung2_conteiner">
            <div class="lozung_devis2">
              <h1>Sfeerfoto's</h1>
              <p>
                De beste manier om de sfeer te ervaren is eens langskomen.<br></br>
                In tussentijd hebben we hier alvast wat foto’s voor je klaar.
              </p>
            </div>
            <div>
              <img src={arrow} style={{ marginRight: "82.21px" }} />
              <img src={Vector} />
            </div>
          </section>
          <Slider />
        </section>

        <section className="footer">
          <section className="footer_contacts">
            <div className="contact_company">
              <h1>Contacts</h1>
              <span>
                <img src={phone}></img>
                <span>
                  <p>Phone Number</p>
                  <a href="tel:+3292825725"><b>+32 9 282 57 25</b></a>
                </span>
              </span>
              <span>
                <img src={sms}></img>
                <span>
                  <p>Email</p>
                  <a href="mailto:info@email.com"><b>info@email.com</b></a>
                </span>
              </span>
              <span>
                <img src={time}></img>
                <span>
                  <p>Opening Hours</p>
                  <a href="#"><b>Everyday from 6 AM - 9 PM</b></a>
                </span>
              </span>
              <span>
                <img src={map2}></img>
                <span>
                  <p>Map Street</p>
                  <a href="https://www.google.com/maps/place/Jl.+Raya+Surabaya+-+Malang+No.2787,+Klojen,+Kec.+Klojen,+Kota+Malang,+Jawa+Timur+65119,+%D0%98%D0%BD%D0%B4%D0%BE%D0%BD%D0%B5%D0%B7%D0%B8%D1%8F/@-7.9762394,112.6268712,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd628248f8ca4fb:0xdc5c7201ac769e4f!8m2!3d-7.9762447!4d112.6294461"><b>Jl. Raya Surabaya 2787</b></a>
                </span>
              </span>
            </div>
            <div className="contact_form">
              <h1>have any questions?</h1>
              <span>
                <div>
                  <label for="name">Name</label>
                  <input type="text" id="name" placeholder="Input your name" />
                </div>
                <div>
                  <label for="email">Email</label>
                  <input type='email' id="email" placeholder="Input your email" />
                </div>
              </span>
              <div className="story">
                <label for="story">Speciale Request</label>
                <textarea id="story" name="story"
                  rows="5" cols="33">
                  Input your special request
                </textarea>
                <button>Send</button>
              </div>
            </div>
          </section>
          <section className="footer_map">
            <img src={map} />
          </section>
          <section className="footer_logo">
            <img src={logo} />
            <span class="socil_svg2" >
              <img src={fb} />
              <img src={lg} />
              <img src={tw} />
              <img src={yt} />
            </span>
          </section>
        </section>
      </main>

    </div>
  )
}

export default App;

