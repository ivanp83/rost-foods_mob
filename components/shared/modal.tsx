import React from "react";
import ReactDOM from "react-dom";
import { FunctionComponent } from "react";
import styled from "styled-components";
import { EmailStatus } from "@utils/types";
import { CSSTransition } from "react-transition-group";
interface IProps {
  showModal: EmailStatus;
}

const Modal: FunctionComponent<IProps> = ({ showModal }) => {
  const content = (
    <>
      <CSSTransition
        timeout={{ exit: 600, appear: 850 }}
        classNames="modal"
        in={!!showModal}
        unmountOnExit={true}
      >
        <ModalContainer type={showModal} className="modal">
          <p>
            {(showModal === "success" &&
              "Ваше сообщение отправлено! Мы обязательно ответим.") ||
              (showModal === "error" &&
                "Увы, мы не получим ваше сообщение. Что-то пошло не так 🤷🏻‍♂️")}
          </p>
        </ModalContainer>
      </CSSTransition>
    </>
  );
  return typeof window !== "undefined"
    ? ReactDOM.createPortal(
        content,
        document.getElementById("modal") as Element
      )
    : null;
};

const ModalContainer = styled.div<{ type: EmailStatus }>`
  height: fit-content;
  width: 100vw;
  background: var(--main-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.type === "error" ? "var(--main-red)" : "var(--main-green)"};
  position: fixed;
  z-index: 200;
  top: 0rem;
  left: 0;
  padding: 2rem;
  background-color: var(--main-light);
  font-size: 1.6rem;
`;
export default Modal;
