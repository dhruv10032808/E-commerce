import React, { useRef } from 'react';

function ContactUs(props) {
  const nameRef = useRef('');
  const emailRef = useRef('');
  const numberRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    const data = {
     name:nameRef.current.value,
     email:emailRef.current.value,
     phoneNumber:numberRef.current.value,
    };
  props.onSubmit(data);
    
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' ref={nameRef} />
      </div>
      <div>
        <label htmlFor='email-id'>Opening Text</label>
        <input type='email' id='email-id' ref={emailRef}></input>
      </div>
      <div>
        <label htmlFor='number'>Phone Number</label>
        <input type='phone number' id='number' ref={numberRef} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
}

export default ContactUs; 