import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, signUpInfo, profileInfo }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div
            className={
              isShowing
                ? 'h-screen w-screen bg-black/50 cursor-pointer fixed top-0 right-0 flex items-center justify-center opacity-1 pointer-events-all transition'
                : 'h-screen w-screen bg-black/50 cursor-pointer fixed top-0 right-0 flex items-center justify-center opacity-0 pointer-events-none transition'
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
              <div className='relative'>
                <span
                  className='absolute right-0 top-[-50px] cursor-pointer hover:text-red-800 transition-all font-bold'
                  onClick={hide}
                >
                  x
                </span>
                <div className='flex  flex-col w-full h-full items-center justify-center gap-5 my-5 mx-0'>
                  <p className='w-full text-center border-b-[1px] py-1 border-solid border-r-slate-800'>
                    Name: {profileInfo.firstName}
                  </p>
                  <p className='w-full text-center border-b-[1px] py-1 border-solid border-r-slate-800'>
                    Last name: {profileInfo.lastName}{' '}
                  </p>
                  <p className='w-full text-center border-b-[1px] py-1 border-solid border-r-slate-800'>
                    Password: {signUpInfo.password}{' '}
                  </p>
                  <p className='w-full text-center border-b-[1px] py-1 border-solid border-r-slate-800'>
                    Sex: {profileInfo.sex}{' '}
                  </p>
                  <p className='w-full text-center border-b-[1px] py-1 border-solid border-r-slate-800'>
                    Birthdate: {profileInfo.birthDay} / {profileInfo.birthMonth}{' '}
                    / {profileInfo.birthYear}
                  </p>
                  <p className='w-full text-center border-b-[1px] py-1 border-solid border-r-slate-800'>
                    Email: {signUpInfo.email}{' '}
                  </p>
                  <p className='w-full text-center border-b-[1px] py-1 border-solid border-r-slate-800'>
                    Hobby: {profileInfo.hobby.join(', ')}{' '}
                  </p>
                  <p className='w-full text-center border-b-[1px] py-1 border-solid border-r-slate-800'>
                    Favorite ocean: {profileInfo.selectOcean}{' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
