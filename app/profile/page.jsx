'use client';

import axios from 'axios';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState('nothing');
  const logout = async () => {
    try {
      await axios.get('/api/users/logout');
      toast.success('Logout successful');
      router.push('/login');
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me');
    console.log(res.data);
    setData(res.data.data._id);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1 className='text-4xl'>Profile</h1>
      <br />
      <p>Profile page</p>
      <h2 className='p-1 bg-green-500 rounded'>
        {data === 'nothing' ? (
          'Nothing'
        ) : (
          <Link href={`/profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        onClick={logout}
        className='px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className='px-4 py-2 mt-4 font-bold text-white bg-green-800 rounded hover:bg-blue-700'>
        GetUser Details
      </button>
    </div>
  );
}
