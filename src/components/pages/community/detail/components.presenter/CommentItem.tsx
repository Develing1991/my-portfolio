import DropDown from '@/src/components/commons/dropdowns/DropDown';
import * as S from '../CommunityDetailPage.styles';
import { ChangeEvent, useState, useMemo } from 'react';
import { IBoardComment, IMutation, IMutationDeleteBoardCommentArgs, IMutationUpdateBoardCommentArgs } from '@/src/commons/types/generated/types';
import { timeFromNow } from '@/src/commons/utils/dayjs/dayjs';
import { Button } from '@/src/components/commons/buttons/Button';
import { useMutation } from '@apollo/client';
import { DELETE_BOARD_COMMENT, FETCH_BOARD_COMMENTS, UPDATE_BOARD_COMMENT } from '../CommunityDetailPage.queries';
interface ICommentItemProps {
	commentItem: IBoardComment;
}
function CommentItem({ commentItem }: ICommentItemProps) {
	const [, setShowModal] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const [commentContents, setCommentContents] = useState(commentItem.contents);
	const [updateBoardComment] = useMutation<Pick<IMutation, 'updateBoardComment'>, IMutationUpdateBoardCommentArgs>(UPDATE_BOARD_COMMENT);
	const [deleteBoardComment] = useMutation<Pick<IMutation, 'deleteBoardComment'>, IMutationDeleteBoardCommentArgs>(DELETE_BOARD_COMMENT);

	const time = useMemo(() => {
		return timeFromNow(commentItem.createdAt);
	}, []);

	const onClickDeletePost = () => {
		setShowModal(() => true);
	};

	const onClickEditAble = () => {
		setIsEdit((prev) => !prev);
	};

	const onChangeComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setCommentContents(event.target.value);
	};
	const updateComment = async () => {
		await updateBoardComment({
			variables: {
				boardCommentId: commentItem._id,
				password: '1234',
				updateBoardCommentInput: {
					rating: commentItem.rating,
					contents: commentContents
				}
			},
			refetchQueries: [{ query: FETCH_BOARD_COMMENTS }]
		});
		onClickEditAble();
	};

	const deleteComment = async () => {
		await deleteBoardComment({
			variables: {
				boardCommentId: commentItem._id,
				password: '1234'
			},
			update(cache, { data }) {
				cache.modify({
					fields: {
						fetchBoardComments(prev, { readField }) {
							return prev.filter((el: IBoardComment) => readField('_id', el) !== data?.deleteBoardComment);
						}
					}
				});
			}
		});
		onClickEditAble();
	};

	return (
		<S.CommentItem>
			<S.CommentUser>
				<div className="image__wrapper">
					<img src="https://cdn4.buysellads.net/uu/1/127419/1670532177-Stock.jpg" alt="유저 프로필 이미지" />
				</div>
				<div className="name">{commentItem.writer}</div>
				<div className="time">{time}</div>
			</S.CommentUser>
			{isEdit ? (
				<S.CommentEditContainer>
					<S.CommentEditTextArea defaultValue={commentItem.contents} onChange={onChangeComment} />
					<S.CommentEditButtonContainer>
						<Button reverse fontSize="12" onClick={updateComment}>
							수정
						</Button>
						<Button fontSize="12" onClick={onClickEditAble}>
							취소
						</Button>
					</S.CommentEditButtonContainer>
				</S.CommentEditContainer>
			) : (
				<S.CommentContent>{commentItem.contents}</S.CommentContent>
			)}

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
							{ title: '수정', eventName: onClickEditAble },
							{ title: '삭제', eventName: deleteComment },
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
