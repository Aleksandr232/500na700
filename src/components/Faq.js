import { useState } from "react";


const Faq = ()=>{
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


    return(
        <div className="overlap-2">
          <div className="faq">
            <div className="text-wrapper-7">FAQ</div>
            <div className="line" alt="Line"  />
            <div onClick={() => showHandler(1)}   className="text-wrapper-8">Как добраться до музея?</div>
                    {show1 ? (
                        <p className="element-3">
                            В Национальный музей Республики Татарстан можно добраться общественным транспортом:
                            <br/>
                            «Станция метро «Кремлевская», а затем по направлению к Кремлю пройдя 5 минут пешком;
                        </p>
                ) : null}
            <div className='line-2' style={{ top: show1 ? 152 : 120 }} alt="Line" src="/img/line-55-1.svg" />
            <div onClick={() => showHandler(2)} className="text-wrapper-9">Есть ли поблизости удобная парковка?</div>
                    {show2 ? (
                                <p className="element-4">
                                    Да, есть!
                                </p>
                        ) : null}
            <div className="line-3" style={{ top: show2 ? 245 : 241 }} alt="Line" src="/img/line-55-1.svg" />            
            <div onClick={() => showHandler(3)} className="text-wrapper-10">Можно ли воспользоваться аудиогидом?</div>
                    {show3 ? (
                                <p className="element-4_1">
                                            Конечно, можно!
                                        </p>
                                ) : null}    
            
            <div style={{ top: show3 ? 365 : 362 }}  className="line-4" alt="Line" src="/img/line-55-1.svg" />
          </div>
        </div>
    )
}

export default Faq;