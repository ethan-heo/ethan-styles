import { useLayoutEffect, useRef, useState } from "react";
import { Platform } from "../types/constants";

const useMediaQuery = () => {
	const [platform, setPlatform] = useState<Platform>("desktop");
	const media_queries = useRef(new Map<Platform, MediaQueryList>()).current;

	useLayoutEffect(() => {
		const MEDIA_QUERIES = [
			"(orientation: portrait) and (max-width: 575px)",
			"(orientation: landscape) and (min-width: 576px) and (max-width: 767px)",
			"(min-width: 768px) and (max-width: 991px)",
			"(min-width: 992px)",
		];
		const MATCHER: Record<number, Platform> = {
			0: "mobile-portrait",
			1: "mobile-landscape",
			2: "tablet",
			3: "desktop",
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
