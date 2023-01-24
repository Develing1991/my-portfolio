import { Inner } from '@/src/commons/styles/globalReset.css';

import * as S from './DefaultFooter.styles';
export default function DefaultFooter() {
	return (
		<>
			<footer>
				<Inner>
					<S.InnerFooter>
						<S.FooterTop>
							<S.TermsMenu>
								<S.TermsMenuItem>
									<S.TermsMenuItemText>이용약관</S.TermsMenuItemText>
								</S.TermsMenuItem>
								<S.TermsMenuItem>
									<S.TermsMenuItemText>개인정보처리방침</S.TermsMenuItemText>
								</S.TermsMenuItem>
								<S.TermsMenuItem>
									<S.TermsMenuItemText>취소 및 환불방식</S.TermsMenuItemText>
								</S.TermsMenuItem>
								<S.TermsMenuItem>
									<S.TermsMenuItemText>연락하기</S.TermsMenuItemText>
								</S.TermsMenuItem>
							</S.TermsMenu>
						</S.FooterTop>
						<S.FooterBottom>
							<S.CallCenterDiv>
								<S.CallNumberText>1599-5555</S.CallNumberText>
								<S.UseTimeText>평일 10:00-18:00</S.UseTimeText>
								<S.UseTimeText>(점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</S.UseTimeText>
								<S.ButtonGroup>
									<S.CustomButton reverse>APP STORE</S.CustomButton>
									<S.CustomButton reverse>PLAY STORE</S.CustomButton>
								</S.ButtonGroup>
							</S.CallCenterDiv>
							<S.AddressDiv>
								<S.AlertText>
									(주)브레이브모바일은 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
								</S.AlertText>
								<S.AddressText>상호명:(주)브레이브모바일 · 대표이사:KIM ROBIN H · 개인정보책임관리자:김태우 · 주소:서울특별시 강남구 테헤란로 415, L7 강남타워 5층</S.AddressText>
								<S.BizNumerText>사업자등록번호:120-88-22325 · 통신판매업신고증:제 2021-서울강남-00551 호 · 직업정보제공사업 신고번호:서울청 제 2019-21호</S.BizNumerText>
								<S.CallCenterText>고객센터:1599-5319 · 이메일:support@soomgo.com</S.CallCenterText>
								<S.CopyRightText>Copyright ©Brave Mobile Inc. All Rights Reserved.</S.CopyRightText>
							</S.AddressDiv>
						</S.FooterBottom>
					</S.InnerFooter>
				</Inner>
			</footer>
		</>
	);
}
