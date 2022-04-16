const {Schema, model} = require("mongoose");

const JointAccountSchema = new Schema(
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
            type: Date,
            required: true
        },
        relationship: {
            type: String,
            required: true
        },
        account: {
            type: Schema.Types.ObjectId,
            ref: "accounts"
        }
    },
    { timestamps: true }
);

module.exports = model("jointaccount", JointAccountSchema);
