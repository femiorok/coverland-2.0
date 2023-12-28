'use client';
import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
const NewsletterForm = () => {
  const [email_address, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email_address }),
      });

      if (response.status === 200) {
        setMessage('You&#8217;ve subscribed! Please check your email.');
      } else {
        const data = response.headers.get('content-length')
          ? await response.json()
          : {};
        setMessage(
          data.error || 'Something went wrong. Please try again later.'
        );
      }
    } catch (error) {
      console.error('There was an error:', error);
      setMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-row h-12">
        <input
          type="email"
          placeholder="you@email.com"
          value={email_address}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white w-full rounded-l-xl p-4 text-dark"
        />
        <button
          type="submit"
          className=" w-12 h-12 rounded-r-xl bg-[#185CFF] duration-300 hover:bg-red flex flex-col justify-center items-center"
        >
          <BsChevronRight size={20} />
        </button>
      </form>
      {message && <p className="pt-4">{message}</p>}
    </div>
  );
};

export default NewsletterForm;
