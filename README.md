### studyho

국어 · 영어 · 수학 중심 학습 기록 블로그입니다. 콘텐츠는 MDX로 작성하며 컬렉션 스키마는 `src/content/config.ts`에 정의되어 있습니다.

### 실행 방법

-   `npm install`
-   `npm run dev` (http://localhost:4321)
-   `npm run build`
-   `npm run preview`

### 콘텐츠 위치

-   칼럼: `src/content/posts/*.mdx`
-   공부일지: `src/content/logs/*.mdx`
-   책 후기: `src/content/reviews/*.mdx`

파일명은 곧 URL 슬러그가 됩니다. 예: `hello-studyho.mdx` → `/posts/hello-studyho`.

### 공통 규칙

-   subject: 반드시 "국어" | "영어" | "수학"
-   tags: 문자열 배열 (자유롭게)
-   draft: `true`면 사이트에 노출되지 않음
-   날짜 필드는 문자열이어도 ISO로 파싱 가능한 형식을 권장: `YYYY-MM-DD`

### 칼럼(posts) 작성 가이드

필수/선택 필드와 타입은 `src/content/config.ts`를 따릅니다.

```md
---
subject: "국어"
title: "문학 개념 정리"
summary: 핵심 개념을 빠르게 훑는 요약입니다.
tags: [문학, 개념정리]
publishedAt: "2025-08-13"
updatedAt: "2025-08-13"
draft: false
---

본문을 MDX로 자유롭게 작성하세요.
```

노출 규칙

-   리스트/메인: `draft: false`이면서 `publishedAt` 최신 순
-   메인 추천 글: 가장 최근 `publishedAt` 1건 강조

### 공부일지(logs) 작성 가이드

`items` 배열에 과목별 학습 시간을 분 단위로 기록합니다.

```md
---
subject: "영어"
title: 2025-08-13 공부일지
date: "2025-08-13"
tags: [TIL, 리스닝]
mood: 집중
draft: false
items:
    - subject: "영어"
      minutes: 45
      notes: "리스닝 연습"
    - subject: "국어"
      minutes: 30
---

간단한 하루 요약을 적어도 좋습니다.
```

노출 규칙

-   리스트/메인: `draft: false`이면서 `date` 최신 순

### 책 후기(reviews) 작성 가이드

별점은 1~5 사이 숫자입니다.

```md
---
subject: "수학"
bookTitle: "클린 코드"
author: "로버트 C. 마틴"
rating: 5
tags: [개발, 고전]
publishedAt: "2025-08-12"
draft: false
---

인상 깊었던 점과 배운 점을 정리하세요.
```

노출 규칙

-   리스트/메인: `draft: false`이면서 `publishedAt` 최신 순

### 메인 페이지 노출 요약

-   최근 업데이트: 칼럼/공부일지/책 후기에서 날짜 기준 최신 5개 묶음 표시
-   추천 글: `posts`에서 `publishedAt`이 가장 최신인 1건
-   인기 태그: 모든 컬렉션의 `tags`를 집계해 상위 10개 표시

### 과목별 페이지

-   경로: `/subjects/국어`, `/subjects/영어`, `/subjects/수학`
-   각 과목에 해당하는 칼럼/공부일지/후기를 최신 순으로 묶어서 보여줍니다.

### 팁

-   초안 저장은 `draft: true`로 두고 파일을 커밋해도 공개되지 않습니다.
-   날짜를 미래로 설정하면 목록 상단에 노출될 수 있습니다(의도적 예약 발행 용도로 사용 가능).
-   파일명에 한글 사용 가능하지만, URL 슬러그는 파일명 그대로이므로 영문/숫자 조합을 권장합니다.
