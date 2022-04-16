const Account = require("../models/Accounts");

// to register new Account
const registerAccount = async (AccountDets, res) => {
    try{
        const newAccount = new Account({
            ...AccountDets,
        });
        await newAccount.save()
            .then(account => {
                return res.status(201).json({
                    message: "Account created successfully",
                    success: true,
                    account
                });
            }
            )
    } catch (err) {
        return res.status(500).json({
            message: "Unable to create account",
            success: false
        });
    }
};

// get all accounts
const getAllAccounts = async (res) => {
    await Account.find()
        .then(accounts => {
            res.status(200).json({
                message: "Accounts retrieved successfully",
                success: true,
                accounts
            });
        }
        )
        .catch(err => {
            res.status(500).json({
                message: "Unable to retrieve accounts",
                success: false,
                err
            });
        }
        );
};

// delete an account
const deleteAccount = async (req, res) => {
    await Account.findByIdAndDelete(req.params.id)
        .then(account => {
            res.status(200).json({
                message: "Account deleted successfully",
                success: true,
                account
            });
        }
        )
        .catch(err => {
            res.status(500).json({
                message: "Unable to delete account",
                success: false,
                err
            });
        }
        );
};

//get account by id
// const getAccountById = async (req, res) => {
//     await Account.findById(req.params.id)
//         .then(account => {
//             res.status(200).json({
//                 message: "Account retrieved successfully",
//                 success: true,
//                 account
//             });
//         }
//         )
//         .catch(err => {
//             res.status(500).json({
//                 message: "Unable to retrieve account",
//                 success: false,
//                 err
//             });
//         }
//         );
// };

// update account
// const updateAccount = async (req, res) => {
//     await Account.findByIdAndUpdate(req.params.id, req.body, { new: true })
//         .then(account => {
//             res.status(200).json({
//                 message: "Account updated successfully",
//                 success: true,
//                 account
//             });
//         }
//         )
//         .catch(err => {
//             res.status(500).json({
//                 message: "Unable to update account",
//                 success: false,
//                 err
//             });
//         }
//         );
// };

//get account by account number
const getAccountByAccountNumber = async (req, res) => {
    await Account.findOne({ accountNumber: req.params.accountNumber })
        .then(account => {
            res.status(200).json({
                message: "Account retrieved successfully",
                success: true,
                account
            });
        }
        )
        .catch(err => {
            res.status(500).json({
                message: "Unable to retrieve account",
                success: false,
                err
            });
        }
        );
};

//update account by account number
const updateAccountByAccountNumber = async (req, res) => {
    await Account.findOneAndUpdate({ accountNumber: req.params.accountNumber }, req.body, { new: true })
        .then(account => {
            res.status(200).json({
                message: "Account updated successfully",
                success: true,
                account
            });
        }
        )
        .catch(err => {
            res.status(500).json({
                message: "Unable to update account",
                success: false,
                err
            });
        }
        );
};

//update account balance by account number
const updateAccountBalanceByAccountNumber = async (req, res) => {
    await Account.findOneAndUpdate({ accountNumber: req.params.accountNumber }, { $inc: { balance: req.body.balance } }, { new: true })
        .then(account => {
            res.status(200).json({
                message: "Account updated successfully",
                success: true,
                account
            });
        }
        )
        .catch(err => {
            res.status(500).json({
                message: "Unable to update account",
                success: false,
                err
            });
        }
        );
};

module.exports = {
    registerAccount,
    getAllAccounts,
    deleteAccount,
    getAccountByAccountNumber,
    updateAccountByAccountNumber,
    updateAccountBalanceByAccountNumber
};