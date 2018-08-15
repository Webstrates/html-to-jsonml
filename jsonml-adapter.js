'use strict';

// Map from elements to their parents.
const parentMap = new Map();

exports.createDocument = () => [];
exports.createDocumentFragment = () => [];

exports.createElement = (tagName, namespaceURI, attrArray) => {
	const attrs = {};
	attrArray.forEach(({ name, value }) => attrs[name] = value);
	return [ tagName, attrs ];
};

exports.createCommentNode = data => [ '!', data ];

exports.appendChild = (parentNode, newNode) => {
		parentMap.set(newNode, parentNode);
		else parentNode.push(newNode);
};

exports.insertBefore = (parentNode, newNode, referenceNode) => {
	const referenceNodeIndex = parentNode.findIndex(el => el === referenceNode);
	parentNode.splice(referenceNodeIndex, 0, newNode);
};

exports.setTemplateContent = (templateElement, contentElement) =>
	templateElement.concat(contentElement);

exports.getTemplateContent = templateElement => templateElement;
exports.setDocumentType = (document, name, publicId, systemId) => null;
exports.setDocumentMode = (document, mode) => null;
exports.getDocumentMode = () => 'no-quirks';

exports.insertText = (parentNode, text) => {
	const i = parentNode.length - 1;
	if (typeof parentNode[i] === 'string') {
		parentNode[i] += text;
	} else {
		parentNode.push(text);
	}
};

exports.insertTextBefore = (parentNode, text, referenceNode) => {
	const i = parentNode.indexOf(referenceNode) - 1;
	if (typeof parentNode[i] === 'string') {
		parentNode[i] += text;
	} else {
		parentNode.push(text);
	}
};

exports.adoptAttributes = (recipient, attrArray) =>
	attrArray.forEach(({ name, value }) => recipient[1][name] = value);

exports.getFirstChild = node => { throw new Error('getFirstChild not implemented'); };
exports.getChildNodes = node => { throw new Error('getChildNodes not implemented'); };
exports.getParentNode = node => parentMap.get(node);
exports.getAttrList = element => typeof element[1] === 'object' ? element[1] : {};
exports.getTagName = element => element[0];
exports.getNamespaceURI = element => 'http://www.w3.org/1999/xhtml';
