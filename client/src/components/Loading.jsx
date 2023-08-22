import Logo from "./Logo";

// Render UI Component
function Loading() {
	return (
		<div className="w-full h-screen flex items-center justify-center">
			<Logo width="56" height="56" className="stroke-main-dark animate-spin" />
		</div>
	);
}

export default Loading;
