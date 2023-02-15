# sample-project

<div style="display:flex; flex-wrap:wrap; gap:10px;">
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> 
<img src="https://img.shields.io/badge/Apollo GraphQL-311C87?style=flat-square&logo=Apollo GraphQL&logoColor=white"/>
<img src="https://img.shields.io/badge/styled_components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Material Design-757575?style=flat-square&logo=Material Design&logoColor=white"/>
<img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat-square&logo=React-Hook-Form&logoColor=white"/>
<img src="https://img.shields.io/badge/Lodash-3492FF?style=flat-square&logo=Lodash&logoColor=white"/>
</div>

## 주요 키워드

<ul>
  <li><a href="#design">디자인</a></li>
  <li><a href="#publishing">퍼블리싱</a></li>
  <li><a href="#styled">스타일드 코드</a></li>
  <li><a href="#debounce">검색 디바운싱</a></li>
  <li><a href="#infinite">무한스크롤</a></li>
  <li><a href="#cache">최적화 - 캐시업데이트</a></li>
  <li><a href="#prefetch">최적화 - 프리페치</a></li>
  <li><a href="#optimistic">최적화 - 옵티미스틱 UI</a></li>
  <li><a href="#xxs">XXS 공격에 대한 보안 처리</a></li>
  <li><a href="#preview">이미지 업로드 미리보기(드래그 앤 드랍)</a></li>
  <li><a href="#validation">폼 밸리데이션</a></li>
  <li><a href="#jwt">JWT 인증, 인가 보안 처리</a></li>
  <li><a href="#router">라우터 가드</a></li>
  <li><a href="#ssr">서버사이드 렌더링</a></li>
  <li><a href="#etc">이후 추가사항</a></li>
  <li><a href="#study">관심사 및 스터디</a></li>
</ul>

<br/><br/>

<h2 id="design">Figma 프로토타입 디자인</h2>

![image](https://user-images.githubusercontent.com/54789601/214791101-75d0ac8c-acbd-482b-8c61-c8657c29e1f6.png)

![image](https://user-images.githubusercontent.com/54789601/216770731-c59d480c-c249-4b0d-a536-e59b357c6b12.png)
웹 접근성(색약, 색맹) - 명도 비율 확인

<br/><br/>

<h2 id="publishing">반응형 웹 퍼블리싱</h2>

<img width="960" src="https://user-images.githubusercontent.com/54789601/214800581-a2d33148-a3e1-47a0-84e9-f67489557cf9.gif" alt="검색 디바운싱"/>

<br/><br/>

## 글로벌 스타일 코드

![image](https://user-images.githubusercontent.com/54789601/214794706-36590c49-a8ba-4fbf-ae95-8d403a1092f4.png)

<br/><br/>

<h2 id="styled">퍼블리싱 코드 타입</h2>

### 1. 전체 스타일드 컴포넌트 스타일링

### 2. 스타일드 컴포넌트와 선택자 조합 스타일링

![image](https://user-images.githubusercontent.com/54789601/214796523-7f99186a-d5c0-467c-96e8-0c5ba46d17d4.png)

<br/><br/>

## 공통 스타일드 컴포넌트 및 재 사용

![image](https://user-images.githubusercontent.com/54789601/214798319-d9988d34-861a-49fc-b904-7aeb87c5d9d8.png)

<br/><br/>

<h2 id="debounce">검색 디바운싱</h2>

- 마지막 입력 기준으로 일정 시간이 지나면 해당 키워드로 한 번만 검색
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215017242-025d3e7e-89fd-474c-8f0f-c3d1e2adf543.gif" alt="검색 디바운싱"/>

<br/><br/>

<h2 id="infinite">무한 스크롤</h2>

<img width="960" src="https://user-images.githubusercontent.com/54789601/215017234-56f8d8ae-a5d0-44ef-b85b-764af74c5b29.gif" alt="무한 스크롤"/>

<br/><br/>

## 최적화

<h3 id="cache">캐시 업데이트 (global state 조작) - 트래픽이 많은 경우의 최적화 </h3>

#### 리페치 쿼리 - API 요청 트래픽 증가

- 댓글 등록 시 Create API 요청 후 Fetch API 요청을 함
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215204010-02dc4704-5258-45cb-ae54-823417f77113.gif" alt="리페치 쿼리"/>

#### 캐시 업데이트 - API 요청 트래픽 감소

- 댓글 등록 시 Create API 요청. 업데이트 결과 UI 갱신은 캐시에 있는 값만 수정했기 때문에 Fetch API는 추가로 요청하지 않음
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215204049-c2b8a535-1c67-41b8-86c1-69d9a383ee96.gif" alt="캐시 업데이트"/>

<br/><br/>

<h3 id="prefetch">프리페치 (데이터 미리 받아오기) - 빠른 응답으로 UI,UX 개선 </h3>

#### 프리페치 적용 전

- 페이지로 이동 시 해당 페이지에서 데이터를 받아오기 때문에 네트워크가 느린 환경에선 다소 느려보임
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215017265-c28630d5-e9f0-455e-b184-15621d114903.gif" alt="프리페치 이전"/>

#### 프리페치 적용 후

- 마우스 오버 시 해당 페이지의 데이터 미리 받아오기 때문에 빠른 UI 렌더링 ( cache-first 정책 )
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215017279-e81e3fcc-4687-43ad-af99-1083c9dfec16.gif" alt="프리페치 이후"/>

<br/><br/>

<h3 id="optimistic">옵티미스틱 UI (낙관적 UI) - 빠른 응답으로 UX 개선 </h3>

- API요청에 대한 결과가 긍정적(성공)일 것이라 기대 하고 결과에 대한 캐시를 미리 업데이트
- 문제가 생겨도 크리티컬하지 않은 서비스에 적용 ( 구독 또는 좋아요 )

#### 옵티미스틱 UI 적용 전

- 요청 후 업데이트 된 값을 반영하기 때문에 네트워크가 좋지 못한 환경에선 다소 느리게 느껴질 수 있음
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215028617-51836976-ba20-4d3b-af03-e3e0c92ed087.gif" alt="XSS 공격 방지 처리 전"/>

#### 옵티미스틱 UI 적용 후

- 요청과 동시에 캐시 값을 직접 수정하면서 요청하기 때문에 반응이 빠르게 보이는 효과
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215028624-8f245d04-8e9f-4506-990d-d1785e9611a4.gif" alt="XSS 공격 방지 처리 전"/>

<br/><br/>

<h2 id="xxs">XSS(Cross Site Scripting) 공격 방지 (dompurify) - 스크립트 문자 처리 </h2>

- 임의로 스크립트로 작성 된 게시글을 등록
- 실제 백 엔드 URL 노출 및 XSS관련 처리 로직이 제대로 동작하지 않았을 모든 상황을 가정

#### XSS 공격 방지 처리 전

- 해당 페이지 접근 시 스크립트 실행
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215020518-df5f3982-7189-4d9b-9193-818f5a233775.gif" alt="XSS 공격 방지 처리 전"/>

#### XSS 공격 방지 처리 후

- 해당 페이지 접근 시 스크립트 실행하지 않음
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215020408-b6238bd6-c11c-41bb-948c-f1febea6351e.gif" alt="XSS 공격 방지 처리 후"/>

<br/><br/>

<h2 id="preview">이미지 미리보기</h2>

- 드래그 앤 드랍 또는 클릭
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215259794-836201cf-673c-468d-9977-452e84aa1513.gif" alt="XSS 공격 방지 처리 후"/>

<br/><br/>

<h2 id="validation">폼 밸리데이션 (react-hook-form, yup) </h2>

<img width="960" src="https://user-images.githubusercontent.com/54789601/215819151-033f143c-8c1a-45ff-95fe-e54b0e0a2570.gif" alt="밸리데이션"/>

<br/><br/>

<h2 id="jwt">jwt 토큰 보안이슈</h2>

- accessToken 보안상 메모리로 관리 (완) - 새로고침 시에도 메모리 로그인 유지 처리 및 로그인에 대한 상태만 로컬스토리지에 저장
- 브라우저 렌더링과 프리 렌더링관련 이슈 처리 (완) - 로그인, 로그아웃 시 헤더에 대한 DOM구조가 다름에 따른 처리
- refreshToken은 백 엔드에서 쿠키로 받아 옴 (httpOnly, secure 옵션)
  <img width="960" src="https://user-images.githubusercontent.com/54789601/215816102-2d97738d-cd09-43a5-a0f2-88d369cdd1e3.gif" alt="로그인"/>

<br/><br/>

<h2 id="router">라우터가드</h2>

- 인증 및 인가가 필요한 페이지는 링크 또는 직접 url 접근 시 블락
  <img width="960" src="https://user-images.githubusercontent.com/54789601/216537803-49aea6aa-a49e-40a3-b6b9-ad11346d7e5e.gif" alt="라우터가드"/>

<br/><br/>

<h2 id="ssr">서버사이드 렌더링</h2>

- 소셜네트워크 서비스 링크 공유 또는 스크랩, 크롤링, 검색엔진 최적화 시 필요한 페이지에 맞게 서버사이드 렌더링 작업
  <img width="960" src="https://user-images.githubusercontent.com/54789601/216532789-b492c1da-b27a-40da-b668-742d11725c62.gif" alt="서버사이드"/>

<br/><br/>

<h2 id="etc">이후 추가사항</h2>

<ul>
  <li>
    <ul>
      <h4>UI</h4>
      <li>헤더 퍼블리싱 추가 (스크롤 다운 시 fixed)</li>
      <li>스크롤 다운시 페이지 최상단으로 이동하는 아이콘</li>
      <li>메인페이지 퍼블리싱 (이미지 레이지로드 추가)</li>
    </ul>
  </li>
  <li>
    <ul>
      <h4>최적화</h4>
      <li>메모이제이션 미비한 곳 추가로 최적화</li>
      <li>오버엔지니어링이 될 수도 있기 때문에 컴포넌트 트리가 무거운 경우나 상태 또는 props가 변경이 잦은 곳, 다른 상태 변경에 따른 불필요한 리렌더링하는 곳이 아니면 최적화(메모이제이션) 하지 않음</li>
      <li>구글 애널리틱스 활용</li>
    </ul>
  </li>
  <li>
    <ul>
      <h4>빌드 및 배포</h4>
      <li> 정적, 동적파일 CDN 분기 및 로드밸런서 트래픽 분산 Docker 배포 (백그라운드)</li>
      <li>백엔드 변경 - 현재 localhost:3000에서만 요청 가능 (firebase base 이관 또는 직접 백엔드 구축)</li>
    </ul>
  </li>

</ul>

<br/><br/>

<h2 id="study">관심사 및 스터디</h2>

- 웹 표준, 웹 접근성 및 크로스브라우징 (스크린 리더 테스트, 또는 퍼블리싱 리팩토링)
- 프로젝트 전반에 대한 좀 더 효율적인 방향에 대한 고민
- PWA 또는 React-Native 스터디
- 배포 및 자동화
