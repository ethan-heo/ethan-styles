import { useLayoutEffect, useRef, useState } from "react";
import { Platform } from "../../types/constants";

const useMediaQuery = () => {
	const [platform, setPlatform] = useState<Platform>("desktop");
	const media_queries = useRef(new Map<Platform, MediaQueryList>()).current;

	useLayoutEffect(() => {
		const MEDIA_QUERIES = [
			"(max-width: 428px)",
			"(min-width: 429px) and (max-width: 768px)",
			"(min-width: 769px) and (max-width: 1024px)",
			"(min-width: 1025px) and (max-width: 1280px)",
			"(min-width: 1281px)",
		];
		const MATCHER: Record<number, Platform> = {
			0: "mobile-portrait",
			1: "mobile-landscape",
			2: "tablet-portrait",
			3: "tablet-landscape",
			4: "desktop",
		};

		MEDIA_QUERIES.forEach((media_query_str, index) => {
			const media_query = window.matchMedia(media_query_str);

			media_query.addEventListener("change", matchPlatform);
			media_queries.set(MATCHER[index], media_query);
		});

		matchPlatform();
	}, []);

	function matchPlatform() {
		media_queries.forEach((media_query, platform) => {
			if (media_query.matches) {
				setPlatform(platform);
			}
		});
	}

	return platform;
};

export default useMediaQuery;
