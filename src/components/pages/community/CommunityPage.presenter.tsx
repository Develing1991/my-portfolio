import * as S from './CommunityPage.styles';
import { Inner } from '@/src/commons/styles/global.styles';
import { ChangeEvent, useState } from 'react';
export default function CommunityPagePresenter() {
	const [keyword, setKeyword] = useState('');
	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		setKeyword(() => event?.target.value);
	};
	return (
		<>
			<section>
				<Inner>
					<S.SectionInner>
						<S.AreaTitleDiv>
							<S.AreaTitle>커뮤니티</S.AreaTitle>
						</S.AreaTitleDiv>
						<S.AreaCompositionDiv>
							<S.CompositionGroup>
								<S.CompositionButton reverse>글쓰기</S.CompositionButton>
								<S.CompositionInput keyword={keyword} onChangeInput={onChangeInput} />
							</S.CompositionGroup>
						</S.AreaCompositionDiv>
					</S.SectionInner>
				</Inner>
			</section>
			<section>
				<Inner>
					<nav>
						<ul>
							<li>
								<a href="">궁금해요</a>
							</li>
							<li>
								<a href="">자유주제</a>
							</li>
							<li>
								<a href="">프로젝트</a>
							</li>
							<li>
								<a href="">중고거래</a>
							</li>
						</ul>
					</nav>
					<article>
						<div className="boardcard">
							<div className="left">
								<p className="title">제목</p>
								<p className="contents">내용</p>
								<div className="icons">
									<span>좋아요</span>
									<span>댓글</span>
								</div>
							</div>
							<div className="right">
								<div className="boardimage">
									<img src="" alt="" />
								</div>
								<p className="timesago">52분전</p>
							</div>
						</div>
					</article>
				</Inner>
			</section>
		</>
	);
}
