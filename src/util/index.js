/**
 * Creates a debounce function that delays the execution of another function
 * until a specific time period has passed without additional invocations.
 *
 * @param {Object} options - Options to configure the debounce function.
 * @param {Function} options.func - The function to be debounced.
 * @param {number} options.time - The time in milliseconds to delay the function execution.
 * @returns {Function} - A function that implements the debounce behavior.
 */
// eslint-disable-next-line import/prefer-default-export
export const debounce = ({ func, time }) => {
	let timeout;
	/**
	 * Debounce function that encapsulates the execution delay logic.
	 *
	 * @param {...*} args - Arguments passed to the original function.
	 */
	return (...args) => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			func(...args);
		}, time);
	};
};
