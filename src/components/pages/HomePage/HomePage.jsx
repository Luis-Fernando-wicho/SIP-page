import "./about-us.css";
import "./clients.css";
import "./certifications.css";

import logo from "../../../assets/SIPLOGO.png";
function HomePage() {
  return (
    <>
      <section className="about-us">
        <h1 className="about-us__name">
          SIP <h2>Ingenieria y Seguridad Sustentable</h2>
        </h1>
        <div className="about-us__container">
          <p>
            Somos una empresa dedicada al mantenimientro electrico,
            automatizacion y proyectos electicos, nos esforzandonos en otorgar
            una calidad de alto nivel en todos nuestros trabajos para que el
            cliente este satisfecho y tenga la seguridad que nuestro trabajo
            sera de una durabilidad alta con la seguridad de garantia hasta de 1
            ano de nuestros trabajos
          </p>
        </div>
        <img src={logo} alt="" />
      </section>
      <section className="clients">
        <h1 className="clients__title">Nuestros Clientes</h1>
        <div className="clients__carousel">
          <div className="clients__carousel__group">
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66KBuJjAvsx9eltY4WnazvT7J6gkTF34n9g&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Telas_Parisina.svg/3840px-Telas_Parisina.svg.png"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFpCSJ8lQBEahtnXrRhkIdH4IIZNrmp19UA&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/351317991_2039777476384935_1554531707815019042_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hhn9fXisJO0Q7kNvwEFEQJj&_nc_oc=AdqnCE98a5U72JKYC-juxxrFPdHIXe96XOaAWubO5JgfasKq25dVt0WtcH1PpnyZip01yTzfH-egAyiHbuP3tEyl&_nc_zt=23&_nc_ht=scontent.flov1-1.fna&_nc_gid=t-jYzOLvBLsimTSiRJ5cgQ&_nc_ss=7b2a8&oh=00_Af5JABeNOjBctGoJxw-BbFUqeFi4bpRzyO20I6X9CMcedQ&oe=6A0969F3"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66KBuJjAvsx9eltY4WnazvT7J6gkTF34n9g&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/351317991_2039777476384935_1554531707815019042_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hhn9fXisJO0Q7kNvwEFEQJj&_nc_oc=AdqnCE98a5U72JKYC-juxxrFPdHIXe96XOaAWubO5JgfasKq25dVt0WtcH1PpnyZip01yTzfH-egAyiHbuP3tEyl&_nc_zt=23&_nc_ht=scontent.flov1-1.fna&_nc_gid=t-jYzOLvBLsimTSiRJ5cgQ&_nc_ss=7b2a8&oh=00_Af5JABeNOjBctGoJxw-BbFUqeFi4bpRzyO20I6X9CMcedQ&oe=6A0969F3"
                alt=""
              />
            </div>
          </div>
          <div aria-hidden className="clients__carousel__group">
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66KBuJjAvsx9eltY4WnazvT7J6gkTF34n9g&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Telas_Parisina.svg/3840px-Telas_Parisina.svg.png"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFpCSJ8lQBEahtnXrRhkIdH4IIZNrmp19UA&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/351317991_2039777476384935_1554531707815019042_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hhn9fXisJO0Q7kNvwEFEQJj&_nc_oc=AdqnCE98a5U72JKYC-juxxrFPdHIXe96XOaAWubO5JgfasKq25dVt0WtcH1PpnyZip01yTzfH-egAyiHbuP3tEyl&_nc_zt=23&_nc_ht=scontent.flov1-1.fna&_nc_gid=t-jYzOLvBLsimTSiRJ5cgQ&_nc_ss=7b2a8&oh=00_Af5JABeNOjBctGoJxw-BbFUqeFi4bpRzyO20I6X9CMcedQ&oe=6A0969F3"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66KBuJjAvsx9eltY4WnazvT7J6gkTF34n9g&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/351317991_2039777476384935_1554531707815019042_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hhn9fXisJO0Q7kNvwEFEQJj&_nc_oc=AdqnCE98a5U72JKYC-juxxrFPdHIXe96XOaAWubO5JgfasKq25dVt0WtcH1PpnyZip01yTzfH-egAyiHbuP3tEyl&_nc_zt=23&_nc_ht=scontent.flov1-1.fna&_nc_gid=t-jYzOLvBLsimTSiRJ5cgQ&_nc_ss=7b2a8&oh=00_Af5JABeNOjBctGoJxw-BbFUqeFi4bpRzyO20I6X9CMcedQ&oe=6A0969F3"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="certifications">
        <div className="certifications_container">
          <h1 className="certifications__title">
            Nos capacitamos para darte el mejor servicio
          </h1>
          <p className="certifications__text">
            En SIP nos actualizamos continuamente para ofreserte servisios
            vanguardistas y de calidad, ofreciendo tecnologia de punta con la
            seguridad de que nada saldra mal
          </p>
        </div>

        <div className="clients__carousel">
          <div className="clients__carousel__group">
            <div className="client">
              <img
                src="https://ceneris.com/wp-content/uploads/2021/05/Que-es-la-Norma-Ansi.jpg"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFpCSJ8lQBEahtnXrRhkIdH4IIZNrmp19UA&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/351317991_2039777476384935_1554531707815019042_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hhn9fXisJO0Q7kNvwEFEQJj&_nc_oc=AdqnCE98a5U72JKYC-juxxrFPdHIXe96XOaAWubO5JgfasKq25dVt0WtcH1PpnyZip01yTzfH-egAyiHbuP3tEyl&_nc_zt=23&_nc_ht=scontent.flov1-1.fna&_nc_gid=t-jYzOLvBLsimTSiRJ5cgQ&_nc_ss=7b2a8&oh=00_Af5JABeNOjBctGoJxw-BbFUqeFi4bpRzyO20I6X9CMcedQ&oe=6A0969F3"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66KBuJjAvsx9eltY4WnazvT7J6gkTF34n9g&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/351317991_2039777476384935_1554531707815019042_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hhn9fXisJO0Q7kNvwEFEQJj&_nc_oc=AdqnCE98a5U72JKYC-juxxrFPdHIXe96XOaAWubO5JgfasKq25dVt0WtcH1PpnyZip01yTzfH-egAyiHbuP3tEyl&_nc_zt=23&_nc_ht=scontent.flov1-1.fna&_nc_gid=t-jYzOLvBLsimTSiRJ5cgQ&_nc_ss=7b2a8&oh=00_Af5JABeNOjBctGoJxw-BbFUqeFi4bpRzyO20I6X9CMcedQ&oe=6A0969F3"
                alt=""
              />
            </div>
          </div>
          <div aria-hidden className="clients__carousel__group">
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66KBuJjAvsx9eltY4WnazvT7J6gkTF34n9g&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Telas_Parisina.svg/3840px-Telas_Parisina.svg.png"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFpCSJ8lQBEahtnXrRhkIdH4IIZNrmp19UA&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/351317991_2039777476384935_1554531707815019042_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hhn9fXisJO0Q7kNvwEFEQJj&_nc_oc=AdqnCE98a5U72JKYC-juxxrFPdHIXe96XOaAWubO5JgfasKq25dVt0WtcH1PpnyZip01yTzfH-egAyiHbuP3tEyl&_nc_zt=23&_nc_ht=scontent.flov1-1.fna&_nc_gid=t-jYzOLvBLsimTSiRJ5cgQ&_nc_ss=7b2a8&oh=00_Af5JABeNOjBctGoJxw-BbFUqeFi4bpRzyO20I6X9CMcedQ&oe=6A0969F3"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR66KBuJjAvsx9eltY4WnazvT7J6gkTF34n9g&s"
                alt=""
              />
            </div>
            <div className="client">
              <img
                src="https://scontent.flov1-1.fna.fbcdn.net/v/t39.30808-6/351317991_2039777476384935_1554531707815019042_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=hhn9fXisJO0Q7kNvwEFEQJj&_nc_oc=AdqnCE98a5U72JKYC-juxxrFPdHIXe96XOaAWubO5JgfasKq25dVt0WtcH1PpnyZip01yTzfH-egAyiHbuP3tEyl&_nc_zt=23&_nc_ht=scontent.flov1-1.fna&_nc_gid=t-jYzOLvBLsimTSiRJ5cgQ&_nc_ss=7b2a8&oh=00_Af5JABeNOjBctGoJxw-BbFUqeFi4bpRzyO20I6X9CMcedQ&oe=6A0969F3"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
