import "./Dashboard.css";

const Card = ({ title, icon, statistics, description }) => {
  return (
    <>
      <div className="card-content">
        <div className="statsheader">
          <div>
            <h6 className="dark-text">{title}</h6>
          </div>
          <div className="align-self-end">
            <i className={icon}></i>
          </div>
        </div>
        <div>
          <h2>{statistics}</h2>
        </div>
        <div>
          <p className="brief">{description}</p>
        </div>
      </div>
    </>
    //  <div className=".container-sm dashboard">
    //   <div className="card-content">
    //    <div className="card-icon">
    //    {children}
    //    </div>
    //    <div className="stats">
    //     <h4>{description}</h4>
    //     <h2>{price}</h2>
    //    </div>
    //   </div>
    //  </div>
  );
};

export default Card;
