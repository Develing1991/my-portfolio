export function checkImageFileExtension(fileName: string) {
	return /(\.gif|\.jpg|\.jpeg|\.png)$/i.test(fileName);
}
