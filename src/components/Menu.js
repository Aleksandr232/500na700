import { useEffect } from "react";

const Menu = ({ isOpen}) => {
    useEffect(() => {
        const disableScroll = () => {
          document.body.style.overflow = "hidden";
        };
    
        const enableScroll = () => {
          document.body.style.overflow = "auto";
        };
    
        if (isOpen) {
          disableScroll();
        } else {
          enableScroll();
        }
    
        return () => {
          enableScroll();
        };
      }, [isOpen]);

  return (
    <div>
      {isOpen && (
        <>
            <div className="overlay"/>
            <div className="box">
                <div className="menu-bg">
                    <div className="label">
                        <div className="text-wrapper">Подпункт меню</div>
                        <div className="text-wrapper1">Подпункт меню</div>
                    </div>
                </div>
            </div>
        </>
      )}
    </div>
  );
};

export default Menu;