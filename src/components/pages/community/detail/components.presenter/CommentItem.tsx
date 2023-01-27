import DropDown from '@/src/components/commons/dropdowns/DropDown';
import * as S from '../CommunityDetailPage.styles';
import { useState, useMemo } from 'react';
import { IBoardComment } from '@/src/commons/types/generated/types';
import { timeFromNow } from '@/src/commons/utils/dayjs/dayjs';
interface ICommentItemProps {
	comment: IBoardComment;
}
function CommentItem({ comment }: ICommentItemProps) {
	const [showModal, setShowModal] = useState(false);
	const onClickDeletePost = () => {
		setShowModal(() => true);
	};
	const time = useMemo(() => {
		return timeFromNow(comment.createdAt);
	}, []);
	return (
		<S.CommentItem>
			<S.CommentUser>
				<div className="image__wrapper">
					<img src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" alt="유저 프로필 이미지" />
				</div>
				<div className="name">{comment.writer}</div>
				<div className="time">{time}</div>
			</S.CommentUser>
			<S.CommentContent>{comment.contents}</S.CommentContent>
			<S.CommentReact>
				<div className="left">
					<div className="like">
						<S.LikeIcon className="like-icon" /> 3
					</div>
					<div className="count">
						<S.CommentIcon className="comment-icon" /> 0
					</div>
				</div>
				<div className="right">
					<DropDown
						data={[
							{ title: '수정', eventName: onClickDeletePost },
							{ title: '삭제', eventName: onClickDeletePost },
							{ title: '신고', eventName: onClickDeletePost }
						]}
					>
						<S.MoreActionIcon className="more-icon" titleAccess="더 보기 액션 아이콘" />
					</DropDown>
				</div>
			</S.CommentReact>
		</S.CommentItem>
	);
}

export default CommentItem;
