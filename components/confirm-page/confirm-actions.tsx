/** @format */

import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "../ui/map/map"; // Make sure your Map component can accept coordinates as props

const ConfirmActionItems: React.FunctionComponent<{
	pickUpLocation: string;
	dropOffLocation: string;
}> = ({ pickUpLocation, dropOffLocation }) => {
	const [pickUpCoordinate, setPickUpCoordinate] = useState<[number, number] | null>(null);
	const [dropOffCoordinate, setDropOffCoordinate] = useState<[number, number] | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const MAPBOX_TOKEN = "pk.eyJ1IjoiYW1pdGRvdGRldiIsImEiOiJjbWI0eWJjMTMxcmZoMmpzYTB2N3NjODM2In0.vyzUNJdqBAz-3v2qiWcg1w";

	const getCoordinate = async (location: string) => {
		const res = await fetch(
			`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${MAPBOX_TOKEN}`,
		);
		const data = await res.json();
		if (data.features && data.features[0]) {
			return data.features[0].center as [number, number];
		}
		return null;
	};

	useEffect(() => {
		const fetchCoordinates = async () => {
			setLoading(true);
			setError(null);
			try {
				const [pickup, dropoff] = await Promise.all([
					pickUpLocation ? getCoordinate(pickUpLocation) : null,
					dropOffLocation ? getCoordinate(dropOffLocation) : null,
				]);
				setPickUpCoordinate(pickup);
				setDropOffCoordinate(dropoff);
			} catch (err) {
				setError("Failed to fetch coordinates. Please check your locations.");
			}
			setLoading(false);
		};
		fetchCoordinates();
	}, [pickUpLocation, dropOffLocation]);

	console.log("Pickup:", pickUpCoordinate, "Dropoff:", dropOffCoordinate);

	return (
		<Wrapper>
			<Container>
				<SectionTitle>Confirm Locations</SectionTitle>
				<InputSummary>
					<div>
						<span className="font-semibold text-gray-700">Pickup:</span>{" "}
						{pickUpLocation}{" "}
						{pickUpCoordinate && (
							<span className="text-xs text-gray-500">
								[{pickUpCoordinate[1].toFixed(5)}, {pickUpCoordinate[0].toFixed(5)}]
							</span>
						)}
					</div>
					<div>
						<span className="font-semibold text-gray-700">Dropoff:</span>{" "}
						{dropOffLocation}{" "}
						{dropOffCoordinate && (
							<span className="text-xs text-gray-500">
								[{dropOffCoordinate[1].toFixed(5)}, {dropOffCoordinate[0].toFixed(5)}]
							</span>
						)}
					</div>
				</InputSummary>
				{loading && <div className="text-blue-500">Loading map...</div>}
				{error && <div className="text-red-500">{error}</div>}
				{pickUpCoordinate && dropOffCoordinate && (
					<Map
						pickUpCoordinate={pickUpCoordinate}
						dropOffCoordinate={dropOffCoordinate}
					/>
				)}
			</Container>
		</Wrapper>
	);
};

export default ConfirmActionItems;

const Wrapper = tw.div`
w-full flex-1 p-5
`;

const Container = tw.div`
max-w-[900px] mx-auto pb-8 bg-white bg-opacity-90 rounded-2xl shadow-lg p-6
`;

const SectionTitle = tw.h2`
text-xl font-bold text-[#3730a3] mb-4
`;

const InputSummary = tw.div`
mb-6 space-y-2
`;
