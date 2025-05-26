/** @format */

export function getRandomIntNumberBetween(min: number = 1, max: number = 10) {
	// min: 5, max: 10

	return Math.floor(Math.random() * (max - min + 1) + min); // 10.999999999999 => 10
}

export const carList = [
	{
		imgUrl: "https://i.ibb.co/Xx4G91m/uberblack.png",
		service: "Black Sedan",
		multiplier: 2,
	},
	{
		imgUrl: "https://i.ibb.co/cyvcpfF/uberx.png",
		service: "Comfort Nexon",
		multiplier: 1.2,
	},
	{
		imgUrl: " https://i.ibb.co/1nStPWT/uberblacksuv.png",
		service: "Range SUV",
		multiplier: 2.8,
	},
];

export let fakeUsers = [
	{
		name: "Everett",
		username: "Everett.Reilly95",
		avatar: "https://cdn.fakercloud.com/avatars/sawrb_128.jpg",
		email: "Everett.Reilly95.Gerlach@gmail.com",
		dob: "1982-06-30T10:19:21.807Z",
		phone: "(803) 642-6327",
		address: {
			street: "Dickinson Center",
			suite: "Apt. 746",
			city: "Wymanchester",
			zipcode: "66927",
			geo: {
				lat: "73.3270",
				lng: "108.5247",
			},
		},
		website: "thurman.info",
		company: {
			name: "Bayer, Murazik and Gottlieb",
			catchPhrase: "Upgradable 6th generation circuit",
			bs: "scale proactive niches",
		},
		id: 0,
	},
	{
		name: "Valerie",
		username: "Valerie_Marvin",
		avatar: "https://cdn.fakercloud.com/avatars/falconerie_128.jpg",
		email: "Valerie_Marvin_Flatley6@yahoo.com",
		dob: "1958-09-22T07:30:44.813Z",
		phone: "1-256-897-1523",
		address: {
			street: "Chandler Wall",
			suite: "Apt. 468",
			city: "South Edward",
			zipcode: "60167-8264",
			geo: {
				lat: "-71.3149",
				lng: "-153.2936",
			},
		},
		website: "loyal.info",
		company: {
			name: "Nicolas - Kuhic",
			catchPhrase: "Optimized zero defect Graphical User Interface",
			bs: "empower distributed vortals",
		},
		id: 1,
	},
	{
		name: "Gregg",
		username: "Gregg6",
		avatar: "https://cdn.fakercloud.com/avatars/evanshajed_128.jpg",
		email: "Gregg6.Murray@gmail.com",
		dob: "1974-04-24T17:50:03.783Z",
		phone: "1-248-211-7223 x795",
		address: {
			street: "Johns Crest",
			suite: "Suite 465",
			city: "East Susanna",
			zipcode: "63751",
			geo: {
				lat: "13.3309",
				lng: "151.7477",
			},
		},
		website: "greyson.org",
		company: {
			name: "Bashirian, Upton and Doyle",
			catchPhrase: "Synergistic zero administration approach",
			bs: "envisioneer one-to-one schemas",
		},
		id: 2,
	},
	{
		name: "Maud",
		username: "Maud_Jacobson9",
		avatar: "https://cdn.fakercloud.com/avatars/jedbridges_128.jpg",
		email: "Maud_Jacobson9.Boyer99@gmail.com",
		dob: "1961-11-28T02:45:29.061Z",
		phone: "959-536-5978 x33491",
		address: {
			street: "Lockman Coves",
			suite: "Apt. 070",
			city: "Attleboro",
			zipcode: "83825-8167",
			geo: {
				lat: "9.9947",
				lng: "-90.8921",
			},
		},
		website: "nina.biz",
		company: {
			name: "Wiza - Kihn",
			catchPhrase: "Enterprise-wide user-facing array",
			bs: "engage bleeding-edge systems",
		},
		id: 3,
	},
];
