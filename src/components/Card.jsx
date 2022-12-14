import React from "react";
import MyIconImg from "../shared/MyIconImg";
import MyButton from "../shared/MyButton";

function Card() {
	return (
		<div className="container bg-slate-200 rounded-xl w-full px-4 py-4 my-4">
			<div className=" flex flex-row items-center justify-center py-4">
				<div className="basis-1/4 m-0 p-0 flex items-center justify-center">
					<MyButton title={"Clinic"} color={"primary"} />
				</div>
				<div className="basis-1/4  m-0 p-0 flex items-center justify-center">
					<MyButton title={"Test"} color={"primary"} />
				</div>
				<div className="basis-1/4  m-0 p-0 flex items-center justify-center">
					<MyButton title={"Surgery"} color={"primary"} />
				</div>
				<div className="basis-1/4  m-0 p-0 flex items-center justify-center">
					<MyButton title={"Medicine"} color={"primary"} />
				</div>
			</div>
			<div className=" flex flex-row">
				<div className="basis-1/4  m-0 p-0 flex items-center justify-center ">
					<MyIconImg />
				</div>
				<div className=" basis-3/4  m-0 p-0 flex flex-col items-start justify-center px-4">
					<div className="text-2xl">17 September 2021, 9:30 PM</div>
					<div className=" text-xl text-orange-500">
						Appointmenet with Docter Arun
					</div>
					<div className=" text-xl">Doctor World Clinic</div>
				</div>
			</div>
			<div className="flex flex-row py-4">
				<div className="basis-1/3  m-0 p-0 flex items-center justify-center">
					<MyButton title={"Reschedule"} color={"secondary"} />
				</div>
				<div className="basis-1/3  m-0 p-0 flex items-center justify-center">
					<MyButton title={"Cancel"} color={"secondary"} />
				</div>
				<div className="basis-1/3  m-0 p-0 flex items-center justify-center">
					<MyButton icon={true} title={"View"} color={"secondary"} />
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default Card;
