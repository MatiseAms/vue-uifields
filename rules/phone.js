import isMobilePhone from 'validator/lib/isMobilePhone';

/**
 * Check if value is a valid phonenumber
 * @param {String} value
 * @param {Arrary} locale
 */
export default (value, locale) => {	
	return isMobilePhone(value, locale);
};
