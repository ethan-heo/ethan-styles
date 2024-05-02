const transformClassnamesToProps = <T extends Record<any, any>>(styles: T) => {
	return Object.entries(styles)
		.filter(([_, value]) => Boolean(value))
		.map(([key]) => key);
};

export default transformClassnamesToProps;
