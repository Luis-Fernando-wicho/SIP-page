import camaraImg from "../../../assets/hero.png";
import video from "../../../assets/202605061419.mp4";
import video2 from "../../../assets/202605061419 (1).mp4";

import "./css/introduction.css";
import "./css/description.css";
import "./css/portfolio.css";

import { useRef } from "react";

function SolarPanels() {
  const videoRef = useRef(null);
  const videoRef2 = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current.pause();
    videoRef2.current.pause();
  };

  const handleMouseLeave = () => {
    videoRef.current.play();
    videoRef2.current.play();
  };
  return (
    <div className="main-content">
      <section className="introduction">
        <div className="introduction__container ">
          <h1 className="introduction__title">Paneles Solares</h1>
          <p className="introduction__description">
            Energia renoable para su empresa u hogar, te hacemos un proyecto de
            paneles solares para poder disminuir el consumo de la red electrica,
            para poder disminuir o no pagar en tus recibos de luz
          </p>
        </div>

        <img
          src="https://evans.com.mx/media/catalog/product/cache/2210af2af20a4d3cb052fe59323561a1/S/i/Sistemas_Interconectados_EVANS_ASB8MFV_2X4_1M.png"
          alt=""
          height="400px"
          className="introduction__video"
        />
      </section>
      <section className="description">
        <div className="description__container">
          <h1 className="description__title">¿Qué incluye nuestro servicio?</h1>
          <div className="description__paragraphs">
            <div className="icon-ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-cctv"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 4a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -2" />
                <path d="M8 14a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                <path d="M19 7v7a7 7 0 0 1 -14 0v-7" />
                <path d="M12 14l.01 0" />
              </svg>
            </div>

            <p className="description__paragraph">
              Sistemas de CCTV Personalizados: Instalación de cámaras de alta
              definición conectadas a sistemas DVR/XVR, garantizando un
              almacenamiento seguro y estable de cada evento.
            </p>
            <div className="icon-ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-progress-alert"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 20.777a8.942 8.942 0 0 1 -2.48 -.969" />
                <path d="M14 3.223a9.003 9.003 0 0 1 0 17.554" />
                <path d="M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592" />
                <path d="M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305" />
                <path d="M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356" />
                <path d="M12 8v4" />
                <path d="M12 16v.01" />
              </svg>
            </div>

            <p className="description__paragraph">
              Detección Inteligente: Integramos sensores de proximidad y
              movimiento que actúan como una primera línea de defensa, alertando
              sobre cualquier actividad inusual.
            </p>
            <div className="icon-ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-volume"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 8a5 5 0 0 1 0 8" />
                <path d="M17.7 5a9 9 0 0 1 0 14" />
                <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
              </svg>
            </div>

            <p className="description__paragraph">
              Alarmas Disuasorias: Configuramos sistemas con o sin sirenas
              integradas, adaptándonos alertas sonoras inmediatas o un aviso
              silencioso para protocolos de seguridad específicos.
            </p>
          </div>
        </div>
        <div className="description__container">
          <h1 className="description__title">
            Control Total en la Palma de su Mano
          </h1>
          <div className="description__paragraphs">
            <div className="icon-ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-upload"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
                <path d="M9 15l3 -3l3 3" />
                <path d="M12 12l0 9" />
              </svg>
            </div>

            <p className="description__paragraph">
              Nuestros sistemas están diseñados para la era digital. Podrá
              supervisar sus instalaciones en tiempo real a través del servidor
              local o en la nueve
            </p>
            <div className="icon-ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-heart-rate-monitor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1l0 -10" />
                <path d="M7 20h10" />
                <path d="M9 16v4" />
                <path d="M15 16v4" />
                <path d="M7 10h2l2 3l2 -6l1 3h3" />
              </svg>
            </div>

            <p className="description__paragraph">
              Monitoreo Local: Visualización en pantallas o monitores dedicados
              dentro de su empresa u hogar, configurados para un facil acesso y
              comodidad.
            </p>
            <div className="icon-ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-device-mobile-check"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.5 21h-3.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v9.5" />
                <path d="M11 4h2" />
                <path d="M12 17v.01" />
                <path d="M15 19l2 2l4 -4" />
              </svg>
            </div>

            <p className="description__paragraph">
              Acceso Remoto Móvil: Configuración completa en su smartphone o
              tablet, permitiéndole ver las cámaras en vivo y revisar
              grabaciones desde cualquier lugar del mundo con conexión a
              internet.
            </p>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <img
          src="https://evans.com.mx/media/catalog/product/cache/2210af2af20a4d3cb052fe59323561a1/S/i/Sistemas_Interconectados_EVANS_ASB8MFV_2X4_1M.png"
          alt=""
          height="400px"
          className="portfolio__video"
        />
        <h1 className="portfolio__galery_title">
          NUESTROS TRABAJOS NOS RESPALDAN
        </h1>
        <div className="portfolio__galery">
          <div className="portfolio__galery_carrousel">
            <div className="portfolio__galery_image">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6pRr9qmg3oQZa4QNRTd0I6nPELCwKNaIWQ&s"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6A4gc0IHvjnAN3JwVvBDhTh34fyF3N8lvhA&s"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              {" "}
              <img
                src="https://plussegur.com/assets/images/2025/10/camaras-de-seguridad_800x534.webp"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              <img
                src="https://www.desitec.com.mx/wp-content/uploads/2024/06/Almacenamiento-de-las-camaras-de-seguridad-portada.webp"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              <img
                src="https://www.segurilatam.com/wp-content/uploads/sites/5/2020/09/instalacion-camaras-videovigilancia.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="portfolio__galery_carrousel">
            <div className="portfolio__galery_image">
              <img
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt6pRr9qmg3oQZa4QNRTd0I6nPELCwKNaIWQ&s"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              {" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6A4gc0IHvjnAN3JwVvBDhTh34fyF3N8lvhA&s"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              {" "}
              <img
                src="https://plussegur.com/assets/images/2025/10/camaras-de-seguridad_800x534.webp"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              <img
                src="https://www.desitec.com.mx/wp-content/uploads/2024/06/Almacenamiento-de-las-camaras-de-seguridad-portada.webp"
                alt=""
              />
            </div>
            <div className="portfolio__galery_image">
              <img
                src="https://www.segurilatam.com/wp-content/uploads/sites/5/2020/09/instalacion-camaras-videovigilancia.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolarPanels;
