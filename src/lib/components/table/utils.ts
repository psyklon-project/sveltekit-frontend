export function filtervalue(value?: any, filter?: string) {
	switch (filter) {
		case 'date':
			value = new Date(value).toLocaleDateString();
			break;
		case 'datetime':
			value = new Date(value).toLocaleString();
			break;
		case 'time':
			value = new Date(value).toLocaleTimeString();
			break;
		case 'minutes':
			value = new Date(value).toLocaleTimeString([], { minute: '2-digit' });
			break;
		// case 'currency':
		// 	value = new Intl.NumberFormat('hu', { style: 'currency', currency: 'HUF' }).format(
		// 		Number(value)
		// 	);
		// 	break;
		// case 'number':
		// 	value = new Intl.NumberFormat('hu').format(Number(value));
		// 	break;
		// case 'percent':
		// 	value = new Intl.NumberFormat('hu', { style: 'percent' }).format(Number(value));
		// 	break;
		// case 'phone':
		//     console.log(value);
		// 	value = new Intl.NumberFormat('hu', { style: 'phone' }).format(value as any);
		// 	break;
		case 'uppercase':
			value = value.toUpperCase();
			break;
		case 'lowercase':
			value = value.toLowerCase();
			break;
		case 'capitalize':
			value = value.charAt(0).toUpperCase() + value.slice(1);
			break;
		case 'capitalizeall':
			value = value
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
			break;
		case 'capitalizefirst':
			value = value
				.split(' ')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
			break;
		case 'boolean':
		case 'bool':
			value = value.toString() === 'true' ? '✔' : '❌';
			break;
		default:
			value = value?.toString?.() ?? value;
			break;
	}

	return typeof value === 'string' ? value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') : value;
}

export function isBool(value: any): value is boolean {
	return value === 'boolean' || value === 'bool';
}
