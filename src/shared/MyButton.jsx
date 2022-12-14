import React from "react";

function MyButton({ title, color, outline, icon }) {
	const colors = {
		primaryGradient:
			" hover:bg-gradient-to-r from-fuchsia-800 to-purple-900 active:bg-gradient-to-r from-fuchsia-800 to-purple-900  hover:text-white active:text-white uppercase ",
		secondaryGradient:
			"hover:bg-gradient-to-r from-orange-400 via-orange-400 to-pink-700 active:hover:bg-gradient-to-r from-orange-400 via-orange-400 to-pink-700 hover:text-white active:text-white",
		nutralColor: "  bg-white text-black",
		fixedColor:
			"bg-gradient-to-r from-orange-400 via-orange-400 to-pink-700 text-white  border-2 border-white active:opacity-75",
	};

	return (
		<button
			className={`rounded-full shadow-lg p-1 px-6 pb-2 drop-shadow-xl w-5/6 content-center justify-around self-baseline ${
				outline ? colors.fixedColor : colors.nutralColor
			} ${
				color === "primary" ? colors.secondaryGradient : colors.primaryGradient
			}`}>
			<div className=" flex items-center justify-center">
				<span className=" mx-1">
					{icon && (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
					)}
				</span>
				{title}
			</div>
		</button>
	);
}

export default MyButton;
