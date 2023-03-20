import { useState } from 'react'
import { toast } from "react-toastify";

//The above sendEmail
function NewsletterForm({ currentUser }) {
    const [recipient, setRecipient] = useState('')
    const [isSending, setIsSending] = useState(false)



    async function subscribe(event) {
        event.preventDefault()
        const email = event.currentTarget.elements.email.value

        fetch('api/sendgrid', {
            method: "post",
            body: email
        }).then(res => {
            setIsSending(true)
            if (res.status == 200) {
                toast.success(res.statusText);
                setIsSending(false)

            }
            else {
                toast.error("Nope")
            }
        })
    }

    if (currentUser) {
        return (
            <div className='my-10'>
                <hr className='my-5' />
                <h2 className='text-3xl md:text-3xl font-semibold font-title'>
                    Stay Tuned!
                </h2>
                <label className='label'>
                    <p className='text-lg max-w-xl text-center m-auto leading-9'>
                        Want to be the first to know when we post the latest blog? <br /> Sign up for the newsletter!
                    </p>
                </label>
                <form method="post" onSubmit={subscribe} className='mt-5 mx-auto'>
                    <input
                        onChange={(e) => {
                            setRecipient(e.target.value);
                        }}
                        value={currentUser.email}
                        type='email'
                        name='email'
                        placeholder='Your email'
                        className='input input-primary input-bordered'></input>
                    <button
                        className={`btn ml-3 ${isSending ? "btn-disabled loading" : "btn-primary"
                            }`}>
                        I'm in!
                    </button>
                </form>
                <hr className='my-5' />
            </div>
        )
    }
    else {
        return (
            <div className='my-10'>
                <hr className='my-5' />
                <h2 className='text-3xl md:text-3xl font-semibold font-title'>
                    Stay Tuned!
                </h2>
                <label className='label'>
                    <p className='text-lg max-w-xl text-center m-auto leading-9'>
                        Want to be the first to know when we post the latest blog? <br /> Sign up for the newsletter!
                    </p>
                </label>
                <form method="post" onSubmit={subscribe} className='mt-5 mx-auto'>
                    <input
                        onChange={(e) => {
                            setRecipient(e.target.value);
                        }}
                        value={recipient}
                        type='email'
                        name='email'
                        placeholder='Your email'
                        className='input input-primary input-bordered'></input>
                    <button
                        className={`btn ml-3 ${isSending ? "btn-disabled loading" : "btn-primary"
                            }`}>
                        I'm in!
                    </button>
                </form>
                <hr className='my-5' />
            </div>
        )
    }


}

export default NewsletterForm
