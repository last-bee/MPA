const overflowScrollReg = /scroll|auto/i;
export function getScrollEventTarget(element, rootParent = window) {
	let node = element;
	while(
		node 
		&& node.tagName !== 'HTML'
		&& node.nodeType === 1
		&& node !== rootParent
	) {
		const { overflowY } = window.getComputedStyle(node);

		if(overflowScrollReg.test(overflowY)) {
			if(node.tagName !== 'BODY') {
				return node;
			}
			const { overflowY: htmlOverflowY} = window.getComputedStyle(node.parentNode)
			if(overflowScrollReg.test(htmlOverflowY) || /hidden/i.test(htmlOverflowY)) {
				return node;
			}
		}
		node = node.parentNode;
//		console.log(node)
	}
//	console.log(rootParent)
	return rootParent;
}
