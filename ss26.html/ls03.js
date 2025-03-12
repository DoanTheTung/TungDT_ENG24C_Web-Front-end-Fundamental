let email = ["john.doe@gmail.com", "invalidemail.com", "hello@domain.net", "space@out.com"];

function filterValidEmails(emailList) {
    let validEmails = [];

    for (let i = 0; i < emailList.length; i++) {
        let email = emailList[i];

        if (email.includes("@") && !email.includes(" ")) {
            validEmails.push(email);
        }
    }
    return validEmails;
}
console.log(filterValidEmails(email));