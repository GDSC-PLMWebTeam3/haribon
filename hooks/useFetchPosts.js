import { useState, useEffect } from "react";
export default async function useFetchPosts(uri) {
	const res = await fetch(uri, {
		method: "GET"
	});
	const resData = await res.json();
	return resData.data;
}