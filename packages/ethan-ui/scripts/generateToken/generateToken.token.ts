export type TokenObj = {
	$type: "composition" | string;
	$value: string;
};

export type Token = {
	[key: string]: Token | TokenObj;
};
