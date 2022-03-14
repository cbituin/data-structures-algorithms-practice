/**
 * @param {string[]} emails
 * @return {number}
 */
 const numUniqueEmails = (emails) => {
    let uniqueEmails = new Set();

    emails.forEach((email) => {
        let parts = email.split('@');
        let local = parts[0].split('+');
        uniqueEmails.add(local[0].replaceAll('.', '') + '@' + parts[1]);
    });

    return uniqueEmails.size;
};
