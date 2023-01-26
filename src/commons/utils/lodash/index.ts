import _ from 'lodash';

export const debounceKeyword = _.debounce((setState, refetch, value) => {
	setState(() => value);
	refetch({ page: 1, search: value });
}, 2000);
