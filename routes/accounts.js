const router = require ("express").Router();

const {
    userAuth,
    checkRole,
} = require("../utils/Auth");

const {
    registerAccount,
    getAllAccounts,
    deleteAccount,
    getAccountByAccountNumber,
    updateAccountByAccountNumber,
    updateAccountBalanceByAccountNumber
} = require("../utils/AccountsAuth");

// new account route
router.post("/register-account",
    userAuth,
    checkRole(["superadmin", "admin", "user"]),
    async (req, res) => {
        await registerAccount(req.body, res);
    }
);

// get all accounts route
router.get("/accounts",
    userAuth,
    checkRole(["superadmin", "admin"]),
    async (req, res) => {
        await getAllAccounts(res);
    }
);

// delete account route
router.delete("/accounts/:accountNumber",
    userAuth,
    checkRole(["superadmin", "admin"]),
    async (req, res) => {
        await deleteAccount(req.params.accountNumber, res);
    }
);

// get account by account number route
router.get("/accounts/:accountNumber",
    userAuth,
    checkRole(["superadmin", "admin"]),
    async (req, res) => {
        await getAccountByAccountNumber(req.params.accountNumber, res);
    }
);

// update account by account number route
router.put("/accounts/:accountNumber",
    userAuth,
    checkRole(["superadmin", "admin"]),
    async (req, res) => {
        await updateAccountByAccountNumber(req, res);
    }
);

// update account balance by account number route
router.put("/accounts/:accountNumber/balance",
    userAuth,
    checkRole(["superadmin", "admin"]),
    async (req, res) => {
        await updateAccountBalanceByAccountNumber(req, res);
    }
);

module.exports = router;
