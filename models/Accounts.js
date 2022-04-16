const { Schema, model } = require("mongoose");

const Account = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        fathersname: {
            type: String,
            required: true
        },
        mothername: {
            type: String,
            required: true
        },
        dob: {
            type: String,
            required: true
        },
        accounttype: {
            type: String,
            default: "savings",
            enum: ["savings", "current"]
        },
        accountdivision: {
            type: String,
            default: "personal",
            enum: ["personal", "joint"]
        },
        accountnumber: {
            //auto generate account number
            type: String,
            required: true
        },
        balance: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
);

module.exports = model("accounts", Account);
