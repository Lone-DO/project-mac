export function deepCopy(obj?: object | null) {
	if (!obj || Array.isArray(obj)) {
		return obj;
	}
	try {
		return JSON.parse(JSON.stringify(obj));
	}
	catch {
		return obj;
	}
}
