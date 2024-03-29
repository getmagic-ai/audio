const mail = require("@sendgrid/mail")
mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_KEY);


const sendMail = async (req, res) => {
    const email = req.body;

    const message = {
        to: email,
        from: {
            email: "admin@waveforms.io",
            name: "Waveforms",
        }, // replace with your email address
        subject: 'New from Waveforms!',
        text: "Hey! Thanks for subscribing to our newsletter. Get the latest news right in your email.",
    }

    try {
        const [response, body] = await mail.send(message)
        // console.log("sucessfully sent to ", email)
        res.status(200).json({ status: "ok" })

    } catch (error) {
        console.log(error)
    }

}

export default sendMail;