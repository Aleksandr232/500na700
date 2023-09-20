import { useState } from "react";

const FaqMob = ()=>{
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const showHandler = (id)=>{
            if (id === 1) {
                setShow1(prev => !prev);
            } else if (id === 2) {
                setShow2(prev => !prev);
            } else if (id === 3) {
                setShow3(prev => !prev);
            }
    }

    return (
        <div className="box_mob">
          <div className="faq_mob">
            <div className="text-wrapper_mob">FAQ</div>
            <div className="frame_mob">
              <div className="line_mob" alt="Line" src="line-52.svg" />
              <div onClick={() => showHandler(1)}  className="div_mob">Как добраться до музея?</div>
              {show1 ? (<p className="element_mob">
                В Национальный музей Республики Татарстан можно добраться общественным транспортом:
                <br />
                 «Станция метро «Кремлевская», а затем по направлению к Кремлю пройдя 5 минут пешком;
              </p>) : null}
              <div className="img_mob" alt="Line" src="line-53.svg" />
              <p className="div_mob">Есть ли поблизости удобная парковка?</p>
              <div className="img_mob" alt="Line" src="line-54.svg" />
              <div className="div_mob">Можно ли воспользоваться аудиогидом?</div>
              <div className="img_mob" alt="Line" src="line-55.svg" />
            </div>
          </div>
        </div>
      );
}

export default FaqMob;