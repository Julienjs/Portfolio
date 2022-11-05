const express = require("express");
const app = express();
const path = require("path");
const nodemailer = require("nodemailer");
const inLineCss = require("nodemailer-juice");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT || 5000;

app.use(cors());

// Middleware
app.use("/public", express.static(path.join(__dirname, "public")));

// express-validator
const rules = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("champs requis")
      .bail()
      .isEmail()
      .trim()
      .escape()
      .withMessage("Veuillez saisir une adresse mail valide")
      .normalizeEmail(),
    body("lastname")
      .notEmpty()
      .withMessage("champs requis")
      .bail()
      .isAlpha()
      .withMessage("Ce champs ne doit pas contenir de chiffre")
      .bail()
      .isLength({ min: 2 })
      .withMessage("Ce champs doit contenir au moins 2 caractères"),
    body("firstname")
      .notEmpty()
      .withMessage("champs requis")
      .bail()
      .isAlpha()
      .withMessage("Ce champs ne doit pas contenir de chiffre")
      .bail()
      .isLength({ min: 2 })
      .withMessage("Ce champs doit contenir au moins 2 caractères"),
    body("subject")
      .notEmpty()
      .withMessage("champs requis")
      .bail()
      .isLength({ min: 8 })
      .withMessage("Vous devez entrer au moins 8 caractères"),
    body("message")
      .notEmpty()
      .withMessage("champs requis")
      .bail()
      .isLength({ min: 10 })
      .withMessage("Votre message doit contenir au moins 10 caractères"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASSWORD,
  },
});
transporter.use("compile", inLineCss());

app.post("/mail", rules(), validate, (req, res, next) => {
  const email = req.body.email;
  const message = req.body.message;
  const firstname = req.body.firstname;
  const subject = req.body.subject;
  const lastname = req.body.lastname;

  const mailOptions = {
    from: email,
    to: process.env.MAIL,
    subject: `Message de ${email}: ${subject}`,
    attachments: [
      {
        filename: "mail-open-outline.png",
        path: __dirname + "/assets/mail.png",
        cid: "img",
      },
    ],
    html: `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <style>
      body {
        font-family: Roboto;
        margin: 10px;
      }
      .mail-title {
        background-color: black;
        color: white;
        padding: 2rem;
        border-radius: 20px;
      }
      .mail-title div {
        border: 7px solid #ffcf20;
        border-radius: 50%;
        width: 6rem;
        height: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin:auto;
      }
    .mail-title div img{
        width:100%;
        object-fit:cover;
    }
      .mail-title h1 {
        text-align: center;
        font-size: 2rem;
      }
      main {
        margin: 20px;
      }
      h2 span {
        margin-left: 5px;
        font-weight: normal;
      }
      .message p {
        font-size: 1.3rem;
      }
    </style>
    <header>
      <div class="mail-title">
        <div>
         <img src="cid:img" />
        </div>
        <h1>Mail de ${firstname} ${lastname}</h1>
      </div>
    </header>
    <main>
      <h2>
        Sujet :
        <span>${subject}</span>
      </h2>
      <h2>
        Email:
        <span>${email}</span>
      </h2>
      <div class="message">
        <h2>Message:</h2>
        <p>
         ${message}
        </p>
      </div>
    </main>
  </body>
</html>

     `,
  };
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      res.json({
        status: err,
      });
      console.log(err);
    } else {
      res.json({
        status: "success",
      });
      console.log("Email sent" + data.response);
    }
  });
});

transporter.verify(function (err, success) {
  if (err) {
    console.log(err);
  } else {
    console.log("server is read to take the emails");
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
