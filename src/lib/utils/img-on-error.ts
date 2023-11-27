export function imageOnError(event: Event) {
	(event.target as HTMLImageElement).src =
		'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';
}
