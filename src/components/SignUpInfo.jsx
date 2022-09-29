import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

import { setSignUpInfo } from '../store/DataSlice';

const SignUpInfo = () => {
  const dispatch = useDispatch();
  const { validateSchema } = useSelector((store) => store.schema);
  const { signUpInfo, isSignUpValidate } = useSelector((store) => store.data);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setSignUpInfo(data));
    redirect();
  };

  const redirect = () => {
    if (isSignUpValidate) {
      return navigate('/signup-info/personal-info');
    }
  };

  return (
    <div className='flex'>
      <form
        className='flex flex-col items-center w-full text-sm'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='relative mb-7'>
          <InputMask
            className={
              errors.phoneNumber
                ? 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            mask='+375 (99) 999 99 99'
            alwaysShowMask={false}
            maskplaceholder='+375 (XX) XXX XX XX'
            type='tel'
            placeholder='Phone'
            {...register('phoneNumber', {
              required: {
                value: validateSchema.mobilePhone.required,
                message: 'This field is required',
              },
              pattern: {
                value: validateSchema.mobilePhone.regExp,
                message: 'Incorrect value',
              },
            })}
          />
          {errors.phoneNumber?.type === 'required' && (
            <p className='absolute ml-3 z-10 bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              This field is required
            </p>
          )}
        </label>

        <label className='relative mb-7'>
          <input
            className={
              errors.email
                ? 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            type='email'
            placeholder='Email'
            {...register('email', {
              value: '',
              required: {
                value: validateSchema.email.required,
                message: 'This field is required',
              },
              pattern: {
                value: validateSchema.email.regExp,
                message: 'Incorrect value',
              },
            })}
          />
          {errors.email && (
            <p className='absolute ml-3 z-10 transition-all bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.email.message}
            </p>
          )}
        </label>

        <label className='relative mb-7'>
          <input
            className={
              errors.password
                ? 'relative block  w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block  w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            type='password'
            placeholder='Password'
            {...register('password', {
              value: '',
              required: {
                value: validateSchema.password.required,
                message: 'This field is required',
              },
              minLength: {
                value: validateSchema.password.minLength,
                message: `Must be at least ${validateSchema.password.minLength} characters`,
              },
              maxLength: {
                value: validateSchema.password.maxLength,
                message: `Must be no more than ${validateSchema.password.minLength} characters`,
              },
              pattern: {
                value: validateSchema.password.regExp,
                message: 'Incorrect value',
              },
            })}
          />
          {errors.password && (
            <p className='absolute ml-3 z-10 bg-white  top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.password.message}
            </p>
          )}
        </label>

        <label className='relative mb-7'>
          <input
            className={
              errors.confirm_password
                ? 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-[400px] h-10 p-[0 10] px-2.5 font-normal transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            type='password'
            placeholder='Confirm password'
            {...register('confirm_password', {
              value: '',
              required: {
                value: validateSchema.password.required,
                message: 'This field is required',
              },
              minLength: {
                value: validateSchema.password.minLength,
                message: `Must be at least ${validateSchema.password.minLength} characters`,
              },
              maxLength: {
                value: validateSchema.password.maxLength,
                message: `Must be no more than ${validateSchema.password.minLength} characters`,
              },
              validate: (val) => {
                if (watch('password') !== val) {
                  return 'Passwords must match';
                }
              },
            })}
          />
          {errors.confirm_password && (
            <p className='absolute ml-3 z-10 bg-white top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.confirm_password.message}
            </p>
          )}
        </label>

        <button
          className='w-[400px] transition rounded-md text-lg p-2 hover:text-white hover:bg-[#912a50] bg-[#ec5990]'
          type='submit'
        >
          submit
        </button>

      </form>
    </div>
  );
};

export default SignUpInfo;
