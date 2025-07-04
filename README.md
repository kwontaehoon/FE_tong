# ⚽ 김포 운통장 README

![README img](./public/images/readme.png)

---

#### 작업 기간 : 24.01.28 ~ 24.03.09
##### 보수 기간 : 24.03 ~ 24.05
#### 배포 URL : 현재 내려감
- User ID : test
- User PW : 1111
- Admin ID : admin
- Admin PW : 1111
- [Back-end Github](https://github.com/kwontaehoon/BE_tong)

---

## 프로젝트 소개

- 웹 기반 모바일 어플리케이션
- 김포 지역에 사는 사람들끼리 만든 팀 프로젝트입니다.
- 김포에서 다양한 스포츠 시설을 활용하고자 하는 사람들에게 편리한 예약 서비스를 제공하기 위해 만든 예약 시스템입니다.

---

## 팀 소개

| **권태훈** | **김정애** | **홍성혁** | **권나영** | **이민희** |
| :------: |  :------: | :------: | :------: | :------: |
|gju04195 | joni81 | shhong497 | gilnayungli | dlalsgml1250 |
|Front-end / Back-end|Design / Publishing|Back-end|Publishing|Design|

</div>

---

## 시작 가이드
### Requirements
For building and running the application you need:

- [Node.js 20.11.0](https://nodejs.org/en/blog/release/v20.11.0)
- [Yarn 1.22.18](https://www.npmjs.com/package/yarn/v/1.22.18)
- [Java 17](https://www.oracle.com/java/technologies/downloads/#java17)
- [SpringBoot 3.2.2](https://spring.io/blog/2024/01/19/spring-boot-3-2-2-available-now)


### Installation
``` bash
$ git clone https://github.com/kwontaehoon/FE_tong.git
$ cd FE_tong
```
### Front-end
``` bash
$ yarn
$ yarn dev
```
### Back-end
``` bash
$ Run Java
```
---


## 기술 스택
### Design
<div>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">
<img src="https://img.shields.io/badge/Photoshop-31A8FF?style=for-the-badge&logo=adobephotoshop&logoColor=white">
</div>

### Front-end
<div>
<img src="https://img.shields.io/badge/React-3776AB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Tailwind_css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white">
<img src="https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
<img src="https://img.shields.io/badge/Zustand-512BD4?style=for-the-badge&logoColor=white">
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
</div>
<br>

### Back-end
<div>
<img src="https://img.shields.io/badge/Java-FF160B?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white">
<img src="https://img.shields.io/badge/JPA-3776AB?style=for-the-badge&logoColor=white">
<img src="https://img.shields.io/badge/MYSQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">
</div>
<br>

### ETC
<div>
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white">
<img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white">
<img src="https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white">
</div>
<br />

---

## 주요 기능
#### 🔶 시간 예약 시스템 구현
- moment.js / day.js 라이브러리로 날짜 / 시간 컨트롤
#### 🔶 콘텐츠 관리가 가능한 관리자 페이지 기능
- 배너, 이벤트, 예약시설, 공지사항, 추천 검색어 커스텀 가능
#### 🔶 위치 기반 실시간 날씨 API 연동 및 조회
- 공공데이터포털 기상청 단기예보 API를 사용하여 온도, 상태, 습도, 강수확률 시각화
#### 🔶 JWT를 활용한 사용자 인증 및 암호화
- token bearer 사용 / 비밀번호 암호화
#### 🔶 InfiniteQuery hook을 이용한 무한 스크롤 기능
#### 🔶 예약 시설 등록 및 취소, 찜, 검색 기능
#### 🔶 소셜 로그인
- 카카오 / 네이버 / 구글
#### 🔶 회원 프로필 변경 및 탈퇴 기능
#### 🔶 게시글, 댓글, 댓글 이모지 감정표현, 대댓글 CRUD

---

## 아키텍쳐
##### Front-end 디렉토리 구조
- **component**: 컴포넌트
- **function**: 공통 component
- **hooks**: custom hooks
- **layout**: 공통 layout
- **lib**: 라이브러리
- **modal**: 모달 / 팝업
- **router**: 라우터
- **service**: react-query service api
- **store**: zustand store
- **util**: custom js
- **constants**: dummy 값

##### Back-end 디렉토리 구조
- **api**: 사용자 컴포넌트
- **admin**: 관리자 컴포넌트
- **cors:**: cors 접근제어
- **utill**: 중복 코드
- **config**: s3 config
- **jwt:** jwt token bearer
- **security:**: spring security 인가/인증/암호화