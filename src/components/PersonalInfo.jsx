import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Modal from './Modal';
import useModal from '../utils/hooks/useModal';
import InputMask from 'react-input-mask';
import { dataSlice } from '../store/DataSlice';

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const { validateSchema } = useSelector((store) => store.schema);
  const { signUpInfo, isSignUpValidate, profileInfo } = useSelector(
    (store) => store.data
  );
  const { isShowing, toggle } = useModal();
  const navigate = useNavigate();

  const { setProfileInfo } = dataSlice.actions;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setProfileInfo(data));
    toggle();
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className='flex'>
      <Modal
        signUpInfo={signUpInfo}
        profileInfo={profileInfo}
        isShowing={isShowing}
        hide={toggle}
      />
      <form
        className='flex flex-col items-center w-full text-sm'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='relative mb-7'>
          <input
            className={
              errors.firstName
                ? 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            type='text'
            placeholder='First Name'
            {...register('firstName', {
              value: '',
              required: {
                value: validateSchema.firstName.required,
                message: 'This field is required',
              },
              minLength: {
                value: validateSchema.firstName.minLength,
                message: `Must be at least ${validateSchema.firstName.minLength} characters`,
              },
              maxLength: {
                value: validateSchema.firstName.maxLength,
                message: `Must be no more than ${validateSchema.firstName.maxLength} characters`,
              },
            })}
          />
          {errors.firstName && (
            <p className='absolute ml-3 z-10 transition-all bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.firstName.message}
            </p>
          )}
        </label>

        <label className='relative mb-7'>
          <input
            className={
              errors.lastName
                ? 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            type='text'
            placeholder='Last Name'
            {...register('lastName', {
              value: '',
              required: {
                value: validateSchema.lastName.required,
                message: 'This field is required',
              },
              minLength: {
                value: validateSchema.lastName.minLength,
                message: `Must be at least ${validateSchema.lastName.minLength} characters`,
              },
              maxLength: {
                value: validateSchema.lastName.maxLength,
                message: `Must be no more than ${validateSchema.lastName.maxLength} characters`,
              },
            })}
          />
          {errors.lastName && (
            <p className='absolute ml-3 z-10 transition-all bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.lastName.message}
            </p>
          )}
        </label>
        <div
          className={
            errors.sex
              ? 'relative mb-7  w-[400px] flex justify-between items-center h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
              : 'relative mb-7  w-[400px] flex  justify-between items-center h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
          }
        >
          Gender :
          <label className='flex items-center gap-3 cursor-pointer'>
            Female
            <input
              value='Female'
              type='radio'
              {...register('sex', { required: validateSchema.sex.required })}
            />
          </label>
          <label className='flex items-center gap-3 cursor-pointer'>
            Male
            <input
              value='Male'
              type='radio'
              {...register('sex', { required: validateSchema.sex.required })}
            />
          </label>
          {errors.sex && (
            <p className='absolute ml-3 z-10 transition-all bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              Choose one
            </p>
          )}
        </div>

        <label className='relative mb-7 w-[400px] flex justify-between'>
          <InputMask
            className={
              errors.birthDay
                ? 'relative block text-center w-1/5 h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block text-center w-1/5 h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            mask='99'
            alwaysShowMask={false}
            type='text'
            max='31'
            placeholder='DD'
            {...register('birthDay', {
              required: {
                value: validateSchema.birthday.required,
                message: 'This field is required',
              },
              validate: () => {
                if (watch('birthDay') > 31) {
                  return 'Incorrect value';
                }
              },
            })}
          />
          <InputMask
            className={
              errors.birthMonth
                ? 'relative block w-1/5 text-center h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-1/5 text-center h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            mask='99'
            alwaysShowMask={false}
            type='text'
            placeholder='MM'
            {...register('birthMonth', {
              required: {
                value: validateSchema.birthday.required,
                message: 'This field is required',
              },
              validate: () => {
                if (watch('birthMonth') > 12) {
                  return 'Incorrect value';
                }
              },
            })}
          />
          <InputMask
            className={
              errors.birthYear
                ? 'relative block w-2/5 h-10 text-center p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-2/5 h-10 text-center p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            mask='9999'
            alwaysShowMask={false}
            type='text'
            placeholder='YYYY'
            {...register('birthYear', {
              required: {
                value: validateSchema.birthday.required,
                message: 'This field is required',
              },
              minLength: 4,
              validate: () => {
                if (
                  watch('birthYear') >
                    currentYear - validateSchema.birthday.minAge ||
                  watch('birthYear') <
                    currentYear - validateSchema.birthday.maxAge
                ) {
                  return 'Incorrect value';
                }
              },
            })}
          />
          {errors.birthDay?.message && (
            <p className='absolute ml-3 z-10 bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'></p>
          )}
          {errors.birthMonth?.message && (
            <p className='absolute ml-3 z-10 bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.birthMonth?.message}
            </p>
          )}
          {errors.birthYear?.message && (
            <p className='absolute ml-3 z-10 bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.birthYear?.message}
            </p>
          )}
        </label>

        <label className='relative mb-7'>
          <select
            className={
              errors.selectOcean
                ? 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            {...register('selectOcean', {
              value: '',
              required: {
                value: validateSchema.ocean.required,
                message: 'Select one option',
              },
            })}
          >
            <option value=''>Choose your favorite ocean</option>
            {validateSchema.ocean.oneOf.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          {errors.selectOcean && (
            <p className='absolute ml-3 z-10 transition-all bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.selectOcean.message}
            </p>
          )}
        </label>
        <div
          className={
            errors.hobby
              ? 'relative pl-3.5 flex w-[400px] mb-7 justify-between items-center border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md'
              : 'relative pl-3.5 flex w-[400px] mb-7 justify-between items-center border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
          }
        >
          <p>Hobby:</p>
          {validateSchema.hobby.anyOf.map((item) => (
            <label className='m-3.5 flex items-center gap-3' key={item}>
              {item}
              <input
                className='flex justify-center gap-3'
                type='checkbox'
                value={item}
                {...register('hobby', {
                  required: validateSchema.hobby.required,
                })}
              />
            </label>
          ))}
          {errors.hobby && (
            <p className='absolute ml-3 z-10 transition-all bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              At least one hobby must be selected
            </p>
          )}
        </div>

        <Link to='/signup-info'>
          <button className='w-[400px] mb-7 transition rounded-md text-lg p-2 hover:text-white hover:bg-[#912a50] bg-[#ec5990]'>
            Change SignUp Information
          </button>
        </Link>

        <button
          className='w-[400px] transition rounded-md text-lg p-2 hover:text-white hover:bg-[#912a50] bg-[#ec5990]'
          type='submit'
        >
          Complete
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
