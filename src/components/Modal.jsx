import React from 'react';
import ReactDOM from 'react-dom';

import Table from 'react-bootstrap/Table';

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
              <Table striped bordered hover variant='dark'>
                <tbody>
                  <tr>
                    <td>Name: </td>
                    <td> {profileInfo.firstName}</td>
                  </tr>
                  <tr>
                    <td>Last name: </td>
                    <td> {profileInfo.lastName}</td>
                  </tr>
                  <tr>
                    <td>Sex: </td>
                    <td> {profileInfo.sex} </td>
                  </tr>
                  <tr>
                    <td>Birthdate: </td>
                    <td>
                      {profileInfo.birthDay} / {profileInfo.birthMonth} /
                      {profileInfo.birthYear}
                    </td>
                  </tr>
                  <tr>
                    <td>Email: </td>
                    <td>{signUpInfo.email}</td>
                  </tr>
                  <tr>
                    <td>Hobby: </td>
                    <td>{profileInfo.hobby.join(', ')}</td>
                  </tr>
                  <tr>
                    <td>Favorite ocean: </td>
                    <td>{profileInfo.selectOcean} </td>
                  </tr>
                </tbody>
              </Table>

              {/* <div className='flex flex-col w-full h-full items-center justify-center gap-5 my-5 mx-0'>
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
              </div> */}
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default Modal;
