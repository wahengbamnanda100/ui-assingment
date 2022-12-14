import React from "react";
import MyButton from "../shared/MyButton";
import Card from "../components/Card";

function Home() {
	return (
		<div className=" container mx-auto px-4 w-2/4 p-2 bg-stone-100 drop-shadow-sm">
			<div className=" w-full flex items-center justify-center p-6 font-bold uppercase text-xl">
				Upcoming Appointment
			</div>
			<div className="container bg-gradient-to-r from-indigo-600 to-indigo-900 flex p-8 rounded-xl ">
				<h3 className=" text-white basis-full">New Bookin in 2 minutes</h3>
				<MyButton title={"Book Now"} outline />
			</div>
			<Card />
			<Card />

			<div className=" rounded-full w-full flex items-center justify-center p-6 font-bold uppercase text-xl shadow-2xl bg-slate-200 my-4 mt-6 active:opacity-70">
				Back
			</div>
		</div>
	);
}

export default Home;
