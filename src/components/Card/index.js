import "./style.css";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Card = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [card, setCard] = useState("");
  const linkRef = useRef();
  const [ids, setIds] = useState(11);

  window.addEventListener("scroll", (e) => {
    const math = Math.floor(window.pageYOffset);
    if (math >= ids * 30) {
      setIds(ids + 1);
    }
  });

  useEffect(() => {
    gsap.to(".link" + ids, {
      opacity: 1,
      duration: 0.5,
      ease: "sine.in",
      scrollTrigger: {
        trigger: ".link" + ids,
        start: "top bottom",
        end: "top 600px",
        markers: true,
      },
    });
  });

  useEffect(() => {
    const surah = [];
    fetch("https://equran.id/api/surat")
      .then((response) => response.json())
      .then((data) => {
        data.forEach((sur, id) => {
          surah.push(
            <Link
              className={"link link" + id}
              to={"/" + sur.nomor}
              key={id + 1}
              ref={linkRef}
              style={id > 11 ? { opacity: 0 } : { opacity: 1 }}
            >
              <div className="cardList" key={id}>
                <div className="glass">
                  <div className="namaSurah">
                    {sur.nomor}.{sur.nama_latin}
                  </div>
                  <div className="preview">
                    <div className="potonganSurah">{sur.nama}</div>
                    <div className="artiTurun">
                      {sur.arti} - {sur.tempat_turun}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        });
        setCard(surah);
      });
  }, []);

  return <div className="card">{card}</div>;
};

export default Card;
