import OneCard from "./one-card";
import "./card.css"


const CardHolder = () => {
  return (
    <>
      <div className="root">
        <section className="card-bg-half-150 bg-light d-table w-100">
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-12">
                <div className="section-title text-center">
                  <h1 className="sub-title mb-4 Dbold">Doctors team</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row align-items-center">
              <OneCard />
              <OneCard />
              <OneCard />
              <OneCard />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CardHolder;
