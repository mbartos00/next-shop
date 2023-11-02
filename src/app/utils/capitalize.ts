const capitalize = (str: string) => {
	if (!str) return;
	return str.toLowerCase().replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
};

export default capitalize;
