import { EmailStatus } from "@utils/types";
import React, { FormEvent, useState } from "react";
import styled from "styled-components";

import dynamic from "next/dynamic";
const Modal = dynamic(() => import("@components/shared/modal"), { ssr: false });
function ContactForm() {
  const [state, setState] = useState<{
    name: string;
    email: string;
    message: string;
    disabled: boolean;
    emailStatus: EmailStatus;
  }>({
    name: "",
    email: "",
    message: "",
    disabled: false,
    emailStatus: EmailStatus.IDLE,
  });

  const resetForm = () => {
    setState({
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailStatus: EmailStatus.IDLE,
    });
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();

    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleModal = (incType: EmailStatus) => {
    setState({ ...state, emailStatus: incType });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (state.disabled) return;
    setState({
      ...state,
      disabled: true,
    });

    let formData = new FormData();
    formData.append("name", state.name);
    formData.append("email", state.email);
    formData.append("message", state.message);

    fetch(`${process.env.NEXT_PUBLIC_API}/mail`, {
      method: "post",
      body: formData,
    })
      .then((res) => {
        if (res.status === 200) handleModal(EmailStatus.SUCCESS);
      })
      .catch((error) => handleModal(EmailStatus.ERROR))
      .finally(() => {
        setTimeout(() => {
          setState({
            ...state,
            disabled: false,
          });
          resetForm();
        }, 2000);
      });
  };

  return (
    <>
      <Modal showModal={state.emailStatus} />

      <ContactsContainer onSubmit={handleSubmit}>
        <div className="form__group">
          <input
            id="full-name"
            name="name"
            type="text"
            value={state.name}
            onChange={handleChange}
            placeholder="Как вас зовут"
            required={true}
          />
          <label htmlFor="full-name" className="form__label">
            Как вас зовут
          </label>
        </div>

        <div className="form__group">
          <input
            id="email"
            name="email"
            type="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
            required={true}
          />
          <label htmlFor="email" className="form__label">
            Email
          </label>
        </div>
        <div className="form__group">
          <textarea
            id="message"
            name="message"
            rows={7}
            value={state.message}
            onChange={handleChange}
            placeholder="Тескт обращения"
            required={true}
          />
          <label htmlFor="message" className="form__label">
            Тескт обращения
          </label>
        </div>

        <button disabled={state.disabled} type="submit">
          Отправить
        </button>
      </ContactsContainer>
    </>
  );
}

export default ContactForm;

const ContactsContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  color: inherit;
  width: 100%;
  color: var(--main-dark);
  font-size: 1.6rem;
  .form__group {
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;

    .form__label {
      font-size: 1.6rem;
      margin-left: 2rem;
      margin-top: 0.7rem;
      display: block;
      transition: all 0.3s;
      color: var(--main-gray);
    }
    input,
    textarea {
      font-size: inherit;
      padding: 1.2rem 2rem;
      font-family: var(--titl-ff);
      background: transparent;
      border: none;
      background: var(--main-light);
      border-bottom: 2px solid transparent;
      display: block;
      width: 100%;
      color: inherit;
      border-radius: 10px;
      &:placeholder-shown + label {
        opacity: 0;
        visibility: hidden;
        transform: translateY(4rem);
      }
      &:focus {
        outline: none;
        box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
        border-bottom: 2px solid green;
      }
      &::-webkit-input-placeholder {
        color: var(--mainGray);
        font-size: inherit;
      }
      &:focus:invalid {
        border-bottom: 2px solid red;
        outline: none;
      }
    }
  }
  button {
    background-color: var(--main-blue);
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
    padding: 15px 30px;
    text-align: center;
    transition: 200ms;
    width: 100%;
    box-sizing: border-box;
    border: 0;
    font-size: 16px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin-top: 4rem;
    text-transform: uppercase;
    &:disabled {
      opacity: 0.1;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    button:not(:disabled):hover,
    button:not(:disabled):focus {
      box-shadow: rgb(0 0 0 / 25%) 0 8px 15px;
      transform: translateY(-2px);
    }
    button:active {
      box-shadow: none;
      transform: translateY(0);
    }
  }
  @media all and (max-width: 1024px) {
    width: 100%;
  }
`;
