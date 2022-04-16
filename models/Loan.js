const {Schema, model} = require("mongoose");

const LoanSchema = new Schema(
    {
        loanamount: {
            type: Number,
            required: true
        },
        loaninterest: {
            type: Number,
            required: true
        },
        loanperiod: {
            type: Number,
            required: true
        },
        loanstartdate: {
            type: Date,
            required: true
        },
        loanenddate: {
            type: Date,
            required: true
        },
        loantype:{
            type: String,
            required: true
        },
        loanstatus: {
            type: String,
            default: "pending",
            enum: ["pending", "approved", "rejected"]
        },
        account: {
            type: Schema.Types.ObjectId,
            ref: "accounts"
        }
    },
    { timestamps: true }
);

module.exports = model("loans", LoanSchema);