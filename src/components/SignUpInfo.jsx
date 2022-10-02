import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';

import { setSignUpInfo, setValidate } from '../store/DataSlice';

const SignUpInfo = () => {
  const dispatch = useDispatch();
  const { validateSchema } = useSelector((store) => store.schema);
  const { signUpInfo, isSignUpValidate } = useSelector((store) => store.data);
  const navigate = useNavigate();

  const defaultValues = {
    phoneNumber: signUpInfo.phoneNumber,
  };

  useEffect(() => {
    if (signUpInfo.phoneNumber) {
      setValue('phoneNumber', signUpInfo.phoneNumber);
    }
    if (signUpInfo.email) {
      setValue('email', signUpInfo.email);
    }
    if (signUpInfo.password) {
      setValue('password', signUpInfo.password);
    }
    if (signUpInfo.confirm_password) {
      setValue('confirm_password', signUpInfo.confirm_password);
    }
  }, []);

  useEffect(() => {
    return () => {
      dispatch(setValidate(false));
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    control,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    redirect();
    dispatch(setSignUpInfo(data));
  };

  const redirect = () => {
    navigate('/signup-info/personal-info');
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        className='flex flex-col w-[27rem] sm:w-screen px-4 items-center text-sm'
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className='relative w-full mb-7'>
          <Controller
            name='phoneNumber'
            control={control}
            rules={{
              required: {
                value: validateSchema.mobilePhone.required,
                message: 'This field is required',
              },
              pattern: validateSchema.mobilePhone.regExp,
              validate: (val) => {
                if (val.includes('_')) {
                  return 'Enter correct number';
                }
              },
            }}
            render={({ field: { onChange, value } }) => (
              <InputMask
                mask='+375 (99) 999 99 99'
                value={value}
                onChange={onChange}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type='tel'
                    placeholder='Phone'
                    className={
                      errors.phoneNumber
                        ? 'relative block w-full  bg-[#1e293a]  h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                        : 'relative block w-full  bg-[#1e293a]  h-10 p-[0 10] px-2.5 font-normal text-white  transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                    }
                  />
                )}
              </InputMask>
            )}
          />
          {errors.phoneNumber && (
            <p className='absolute ml-3 z-10 bg-[#1e293a] top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.phoneNumber.message}
            </p>
          )}
        </label>

        <label className='relative w-full mb-7'>
          <input
            className={
              errors.email
                ? 'relative block w-full bg-[#1e293a]  h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-full bg-[#1e293a] h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
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
            <p className='absolute ml-3 z-10 transition-all bg-[#1e293a] top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.email.message}
            </p>
          )}
        </label>

        <label className='relative w-full mb-7'>
          <input
            className={
              errors.password
                ? 'relative block  w-full bg-[#1e293a] h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block  w-full bg-[#1e293a] h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            type='password'
            placeholder='Password'
            defaultValue={signUpInfo.password}
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
                message: `Must be no more than ${validateSchema.password.maxLength} characters`,
              },
              pattern: {
                value: validateSchema.password.regExp,
                message: 'Incorrect value',
              },
            })}
          />
          {errors.password && (
            <p className='absolute ml-3 z-10 bg-[#1e293a] top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.password.message}
            </p>
          )}
        </label>

        <label className='relative w-full mb-7'>
          <input
            className={
              errors.confirm_password
                ? 'relative block w-full bg-[#1e293a] h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-red-700/50 shadow-md shadow-red-700/50 rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
                : 'relative block w-full bg-[#1e293a] h-10 p-[0 10] px-2.5 font-normal text-white transition leading-10 border-solid border-2 border-[#0e101c] rounded-md focus:outline-none focus:border-solid focus:border-2 focus:border-[#ec5990]'
            }
            type='password'
            placeholder='Confirm password'
            defaultValue={signUpInfo.confirm_password}
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
                message: `Must be no more than ${validateSchema.password.maxLength} characters`,
              },
              validate: (val) => {
                if (watch('password') !== val) {
                  return 'Passwords must match';
                }
              },
            })}
          />
          {errors.confirm_password && (
            <p className='absolute ml-3 z-10 bg-[#1e293a] top-[-15px] text-red-800 text-sm font-light text-start p-1 inline-block'>
              {errors.confirm_password.message}
            </p>
          )}
        </label>

        <button
          className='w-full ease-out duration-300 rounded-md text-lg p-2 hover:text-white hover:bg-[#912a50] bg-[#ec5990]'
          type='submit'
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default SignUpInfo;
