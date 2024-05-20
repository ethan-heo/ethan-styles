const createBEMSelector = ({
	block,
	element,
	modifier,
}: {
	block: string | string[];
	element?: string | string[];
	modifier?: string | string[];
}) => {
	let _block = block;
	let _element = element;
	let _modifier = modifier;

	const NAMING_SEPARATOR = "-";

	if (Array.isArray(_block)) {
		_block = _block.join(NAMING_SEPARATOR);
	}

	if (Array.isArray(_element)) {
		_element = _element.join(NAMING_SEPARATOR);
	}

	if (Array.isArray(_modifier)) {
		_modifier = _modifier.join(NAMING_SEPARATOR);
	}

	if (!_element && !_modifier) {
		return _block;
	}

	if (_element && !_modifier) {
		return `${_block}__${_element}`;
	}

	if (!_element && _modifier) {
		return `${_block}--${_modifier}`;
	}

	return `${_block}__${_element}--${_modifier}`;
};

export default createBEMSelector;
