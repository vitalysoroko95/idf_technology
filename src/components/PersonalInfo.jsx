import React, { useEffect, useState } from 'react';
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
    setValue,
    getValues,
  } = useForm();

  useEffect(() => {
    if (profileInfo.firstName) {
      setValue('firstName', profileInfo.firstName);
    }
    if (profileInfo.lastName) {
      setValue('lastName', profileInfo.lastName);
    }
    if (profileInfo.sex) {
      setValue('sex', profileInfo.sex);
    }
    if (profileInfo.birthDay) {
      setValue('birthDay', profileInfo.birthDay);
    }
    if (profileInfo.birthMonth) {
      setValue('birthMonth', profileInfo.birthMonth);
    }
    if (profileInfo.birthYear) {
      setValue('birthYear', profileInfo.birthYear);
    }
    if (profileInfo.selectOcean) {
      setValue('selectOcean', profileInfo.selectOcean);
    }
    return () => {
      let values = getValues();
      dispatch(setProfileInfo(values));
    };
  }, []);

  const onSubmit = (data) => {
    dispatch(setProfileInfo(data));
    toggle();
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className='flex items-center justify-center'>
      <Modal
        signUpInfo={signUpInfo}
        profileInfo={profileInfo}
        isShowing={isShowing}
        hide={toggle}
      />
      <form
        className='flex flex-col w-[27rem] sm:w-screen px-4 items-center text-sm'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='relative w-full mb-7'>
          <input
            className={
              errors.firstName
                ? 'relative block w-full  bg-inherit  h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-full  bg-inherit  h-10 p-[0 10] px-2.5 font-normal text-white  transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
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
            <p className='absolute ml-3 z-10 transition-all bg-[#1e293a]  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.firstName.message}
            </p>
          )}
        </label>

        <label className='relative w-full mb-7'>
          <input
            className={
              errors.lastName
                ? 'relative block w-full  bg-inherit  h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-full  bg-inherit  h-10 p-[0 10] px-2.5 font-normal text-white  transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
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
            <p className='absolute ml-3 z-10 transition-all bg-[#1e293a]  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.lastName.message}
            </p>
          )}
        </label>
        <div
          className={
            errors.sex
              ? 'relative flex justify-between items-center w-full mb-7  bg-inherit  h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
              : 'relative flex justify-between items-center w-full mb-7  bg-inherit  h-10 p-[0 10] px-2.5 font-normal text-white  transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
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
          <label className='flex  items-center gap-3 cursor-pointer'>
            Male
            <input
              value='Male'
              type='radio'
              {...register('sex', { required: validateSchema.sex.required })}
            />
          </label>
          {errors.sex && (
            <p className='absolute ml-3 z-10 transition-all bg-[#1e293a]  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              Choose one
            </p>
          )}
        </div>

        <label className='relative mb-7 w-full flex  flex-wrap justify-between'>
          <p className='w-full text-white text-base mb-3'>
            Enter your birtdate:
          </p>
          <InputMask
            className={
              errors.birthDay
                ? 'relative block  bg-[#1e293a] text-white text-center w-1/5 h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block bg-[#1e293a] text-white text-center w-1/5 h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
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
                ? 'relative block w-1/5 bg-[#1e293a] text-white text-center h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-1/5 bg-[#1e293a] text-white text-center h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
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
                ? 'relative block w-2/5 bg-[#1e293a] text-white h-10 text-center p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-2/5 bg-[#1e293a] text-white h-10 text-center p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
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
            <p className='absolute ml-3 z-10 bg-[#1e293a]  top-[20px] text-red-800 text-sm font-light text-start p-1 inline-block'></p>
          )}
          {errors.birthMonth?.message && (
            <p className='absolute ml-3 z-10 bg-[#1e293a]  top-[20px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.birthMonth?.message}
            </p>
          )}
          {errors.birthYear?.message && (
            <p className='absolute ml-3 z-10 bg-[#1e293a]  top-[20px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.birthYear?.message}
            </p>
          )}
        </label>

        <label className='relative w-full mb-7'>
          <select
            className={
              errors.selectOcean
                ? 'relative block w-full bg-[#1e293a] text-white h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-full bg-[#1e293a] text-white h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
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
            <p className='absolute ml-3 z-10 transition-all bg-[#1e293a]  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.selectOcean.message}
            </p>
          )}
        </label>
        <div
          className={
            errors.hobby
              ? 'relative pl-3.5 flex flex-wrap  w-full mb-7 justify-between items-center border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md'
              : 'relative pl-3.5 flex flex-wrap  w-full  mb-7 justify-between items-center border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
          }
        >
          <p className='text-white sm:w-full sm:mt-4'>Hobby:</p>
          {validateSchema.hobby.anyOf.map((item) => (
            <label
              className='m-3.5 flex items-center gap-3 text-white sm:w-50%'
              key={item}
            >
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
            <p className='absolute ml-3 z-10 transition-all bg-[#1e293a]  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              At least one hobby must be selected
            </p>
          )}
        </div>

        <Link className='w-full' to='/signup-info'>
          <button className='w-full mb-7 transition rounded-md text-lg p-2 hover:text-white hover:bg-[#912a50] bg-[#ec5990]'>
            Change SignUp Information
          </button>
        </Link>

        <button
          className='w-full transition rounded-md text-lg p-2 hover:text-white hover:bg-[#912a50] bg-[#ec5990]'
          type='submit'
        >
          Complete
        </button>
      </form>
    </div>
  );
};

export default PersonalInfo;
