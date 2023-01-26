import dayjs from 'dayjs';
import ko from 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs.locale(ko);

export const timeFromNow = (date: string) => {
	return dayjs(date).fromNow();
};
