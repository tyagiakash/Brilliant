import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AppModal from "./appModal";
import ModalItemComponent from "./modalItemComponent";
import AppCard from "./appCard";

function Header({ headerData }) {
  const [showContent, setShowContent] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  let history = useHistory();
  const handleShowMore = (ev) => {
    ev.preventDefault();
    setShowContent(true);
  };
  const handleNextSteps = (ev) => {
    ev.preventDefault();
    setModalShow(true);
    console.log(modalShow);
  };

  const handleClickOnCardBtn = () => {
    history.push("/puzzle/");
  };
  return (
    <>
      <AppModal
        modalTitle="Logic"
        modalShow={modalShow}
        setModalShow={setModalShow}
        ModalItemComponent={<ModalItemComponent />}
      />
      <div className="bg-light pb-5">
        <div className="container">
          <div className="row pt-5 ps-2 pe-2">
            <div className="col-12 col-lg-7 mb-5 ms-auto">
              <h1 style={{ fontSize: "4rem" }} className="mb-4">
                Logic
              </h1>
              <h4 className="mb-5" style={{ color: "#4f575f" }}>
                Stretch your analytic muscles with knights, knaves, logic gates,
                and more!
              </h4>
              <p className="mb-4 text-muted fs-5">
                The beginning of our introductory math journey is Logic. Through
                these challenging problem solving exercises, you'll construct
                the critical thinking skills that are the basis for mathematical
                reasoning.
              </p>
              <p className="mb-4 text-muted fs-5">
                You'll use limited information to make predictions – eliminating
                the impossible to uncover the truth. This course builds up to
                some truly mind-bending challenges!{" "}
                <a
                  className="text-muted fs-5"
                  onClick={handleShowMore}
                  href="/#"
                >
                  Read More!
                </a>
              </p>
              {showContent && (
                <div>
                  <p className="text-muted mb-5 fs-5">
                    By the end of this course, you'll be able to spot logical
                    fallacies, navigate some strategic game theory, understand
                    machine logic, and use the symbolic languages of logic to
                    understand fun riddles.
                  </p>
                  <h4 className="mb-4">Topics covered</h4>
                  <div className="row">
                    <div className="col-6">
                      <p className="text-muted fs-5 fs-5">Binary</p>
                      <p className="text-muted fs-5">Logic Gates</p>
                      <p className="text-muted fs-5">Venn and Euler Diagrams</p>
                      <p className="text-muted fs-5">Propositional Logic</p>
                      <p className="text-muted fs-5">
                        The Square of Opposition
                      </p>
                    </div>
                    <div className="col-6">
                      <p className="text-muted fs-5">De Morgan's Laws</p>
                      <p className="text-muted fs-5">
                        Inclusive and Exclusive OR
                      </p>
                      <p className="text-muted fs-5">Combinatorics</p>
                      <p className="text-muted fs-5">
                        Knight and Knave Puzzles
                      </p>
                      <p className="text-muted fs-5">
                        Combinatorial Game Algorithms
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <a
                onClick={handleNextSteps}
                className="text-muted fs-5"
                href="/#"
              >
                View prerequisites and next steps
              </a>
            </div>
            <div className="ms-auto col-lg-5 col-xl-4 d-none d-md-none d-lg-block">
              <AppCard data={headerData} onClick={handleClickOnCardBtn} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
