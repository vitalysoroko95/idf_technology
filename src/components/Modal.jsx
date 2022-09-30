import React from 'react';

import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, signUpInfo, profileInfo }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className={
              isShowing
                ? 'h-screen w-screen bg-[rgba(0, 0, 0, 0.4)] fixed top-0 right-0 flex items-center justify-center opacity-1 pointer-events-all transition-all'
                : 'h-screen w-screen bg-[rgba(0, 0, 0, 0.4)] fixed top-0 right-0 flex items-center justify-center opacity-0 pointer-events-none transition-all'
            }
            onClick={hide}
          >
            <div
              className={
                isShowing
                  ? 'p-20 border-2 rounded-xl bg-white w-[800px] h-[800px] scale-1 transition-all text-xl text-black'
                  : 'p-20 border-2 rounded-xl bg-white w-[800px] h-[800px] scale-50 transition-all text-xl text-black'
              }
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <div className='flex flex-col w-full h-full items-center justify-center gap-5 my-5 mx-0'>
                <p>Name: {profileInfo.firstName}</p>
                <p>Last name: {profileInfo.lastName} </p>
                <p>Sex: {profileInfo.sex} </p>
                <p>
                  Birthdate: {profileInfo.birthDay} / {profileInfo.birthMonth} /{' '}
                  {profileInfo.birthYear}
                </p>
                <p>Email: {signUpInfo.email} </p>
                <p>Hobby: {profileInfo.hobby.join(', ')} </p>
                <p>Favorite ocean: {profileInfo.selectOcean} </p>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
