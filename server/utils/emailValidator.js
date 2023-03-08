const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
module.exports = emailValidator = (email) => !!email.match(emailRegex)
