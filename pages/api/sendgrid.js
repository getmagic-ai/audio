const mail = require("@sendgrid/mail")
mail.setApiKey(process.env.SENDGRID_API_KEY);


const sendMail = async (req, res) => {
    const email = req.body;

    const message = {
        to: email,
        from: 'admin@waveforms.io', // replace with your email address
        subject: 'New from Waveforms!',
        text: "Hey we thought you'd want to read the latest from us",
    }

    try {
        const [response, body] = await mail.send(message)


    } catch (error) {
        console.error(error)
    }
    res.status(200).json({ status: "ok" })

}

export default sendMail;