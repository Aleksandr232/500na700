import { useState } from "react";

const Subscribe=()=>{
const [placeholder, setPlaceholder] = useState("Email");
const [placeholderPhone, setPlacholderPhone] = useState('Телефон')

  const handleFocus = (e) => {
    if (e.target.name === "email") {
        setPlaceholder("myemail@mail.ru");
      } else if (e.target.name === "phone") {
        setPlacholderPhone("+7999000200");
      }
  };

  

    return(
        <div className="view-2">
          <div className="text-wrapper-17">Подпишись</div>
          <p className="text-wrapper-18">Отправляем анонсы новых статей, выпусков и трансляций</p>
          <input onFocus={handleFocus} name="email" className="input-default" placeholder={placeholder}/>
          <input className="input-default-2" name="phone" onFocus={handleFocus}  placeholder={placeholderPhone} />
          <input className="input-default-3" placeholder="11.02.2022"/>
          <input className="input-default-4" placeholder="15:00"/>
          <div className="button-default">
            <div className="text-wrapper-20">Подписаться</div>
           </div> 
        </div>
    )
}

export default Subscribe;