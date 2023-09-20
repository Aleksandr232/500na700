

const Menu = ({ isOpen}) => {
  

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