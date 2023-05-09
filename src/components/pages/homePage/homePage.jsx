import styles from "./homePage.module.css";
import { useState } from "react";
import useModal from "../../../common/hooks/useModal";
import Modal from "../../ui/modal";
import Button from "../../ui/button";
import { rules } from "../../../common/constants/rules";
import plusIcon from "/icons/plus.svg";
import minusIcon from "/icons/minus.svg";

const instruction = rules.map((rule, index) => <li key={index}>{rule}</li>);

const HomePage = () => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const { modalVariety, handleModalOpen, handleModalClose, modalOpen } =
    useModal();

  const toggleDetails = () => {
    setDetailsOpen(!detailsOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <h3 className={styles.logo}>
            <a
              target="_blank"
              href="https://t.me/ruwzdev"
            >
              @ruwzdev
            </a>
          </h3>

          <div className={styles.heading}>
            <h1 className={styles.upper} >Тестовое задание VK</h1>
            <h2 >Забронировать переговорную</h2>
          </div>
          <div>

          </div>
          <Button appearance="ctv" onClick={() => handleModalOpen("booking")}>
            Забронировать
          </Button>
        </div>


      </div>

      {modalOpen && (
        <Modal
          variety={modalVariety}
          isOpen={modalOpen}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default HomePage;
