const logoutadmin = (req, res) => {
    res.clearCookie("userRegistered2");
    res.redirect("/");
}

module.exports = logoutadmin;