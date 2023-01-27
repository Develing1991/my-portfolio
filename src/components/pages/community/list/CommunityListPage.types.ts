import { IBoard } from '@/src/commons/types/generated/types';
import { ChangeEvent, RefObject } from 'react';

/* Container */

/* Presenter */
export interface ICommunityPagePresenterProps {
	list: IBoard[];
	keyword: string;
	onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
	onPrefetchBoard: (id: string) => () => void;
	onLoadMore: () => void;
	onClickInit: () => void;
	currPage: number;
	lastPage: number;
	keywordInputRef: RefObject<HTMLInputElement>;
}

/* components.presenter/CommunityListItem */
export interface ICommunityListItemProps {
	el: IBoard;
	onPrefetchBoard: (id: string) => () => void;
}

/* components.presenter/CommunityListItemNotExist */
export interface ICommunityListItemNotExistProps {
	prevText: string;
}
