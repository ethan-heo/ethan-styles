import { useLayoutEffect, useRef, useState } from "react";
import getCSSVariablesInDocument from "../../utils/getCSSVariableInDocument";

const useMediaQuery = () => {
	const [platform, setPlatform] = useState<ResponsivePlatform>("desktop");
	const variables = useRef(getCSSVariablesInDocument()).current;
	const match_medias = useRef(
		new Map<ResponsivePlatform, MediaQueryList>(),
	).current;

	useLayoutEffect(() => {
		const MEDIA_QUERIES = [
			`(max-width: ${variables.get("--responsive-desktop")})`,
			`(max-width: ${variables.get("--responsive-tablet")})`,
			`(max-width: ${variables.get("--responsive-mobile")})`,
		];
		const MATCHER: Record<number, ResponsivePlatform> = {
			0: "desktop",
			1: "tablet",
			2: "mobile",
		};

		MEDIA_QUERIES.forEach((media_query_str, index) => {
			const match_media = window.matchMedia(media_query_str);
			const platform = MATCHER[index];

			match_media.addEventListener("change", matchPlatform);
			match_medias.set(platform, match_media);
		});

		matchPlatform();

		return () => {};
	}, []);

	function matchPlatform() {
		match_medias.forEach((match_media, platform) => {
			if (match_media.matches) {
				setPlatform(platform);
			}
		});
	}

	return platform;
};

export default useMediaQuery;
