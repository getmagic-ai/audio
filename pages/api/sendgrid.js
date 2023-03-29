const mail = require("@sendgrid/mail")
mail.setApiKey(process.env.SENDGRID_API_KEY);


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


    } catch (error) {
        console.error(error)
    }
    res.status(200).json({ status: "ok" })

}

export default sendMail;