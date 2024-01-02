/**
 * Check a string is a valid datetime
 * @param {string} strDateTime "yyyy-mm-dd HH:mm:ss" 
 * @returns {boolean} Return true if the datetime is valid, false if the datetime input invalid
 */
function isValidDateTimeString(strDateTime) {
    const datetime = new Date(strDateTime);
    return !isNaN(datetime) && datetime.toString() !== "Invalid Date";
}

/**
 * Check a string is a valid date
 * @param {string} strDate "yyyy-mm-dd"
 * @returns {boolean} Return true if the datetime is valid, false if the datetime input invalid
 */
function isValidDate(strDate) {
    const datetime = new Date(strDate);
    return !isNaN(datetime) && datetime.toISOString().split("T")[0] === strDate;
}

module.exports = {
    isValidDateTimeString,
    isValidDate
}