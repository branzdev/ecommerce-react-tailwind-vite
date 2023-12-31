import PropTypes from "prop-types";

function Layout({ children }) {
	return (
		<main className="w-full max-w-screen-lg mx-auto flex mt-20 flex-col items-center p-7">
			{children}
		</main>
	);
}

Layout.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default Layout;
