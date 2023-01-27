import _ from 'lodash';

export const debounceKeyword = _.debounce((setState, refetch, countRefetch, value) => {
	setState(() => value);
	refetch({ page: 1, search: value });
	countRefetch({ search: value });
}, 500);

export const debouncePrefetch = _.debounce(async (client, query, id) => {
	await client.query({ query, variables: { boardId: id } });
}, 1500);
