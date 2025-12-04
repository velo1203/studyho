### studyho

공부와 생활을 기록하는 개인 블로그입니다. Astro + MDX로 작성되며, Tailwind CSS로 스타일링되어 있습니다.

### 실행 방법

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 프로덕션 빌드
npm run preview  # 빌드 결과 미리보기
```

### 프로젝트 구조

```
src/
├── content/
│   ├── columns/          # 칼럼 글 (MDX 파일)
│   └── config.ts         # 콘텐츠 스키마 정의
├── pages/
│   ├── index.astro       # 메인 페이지
│   └── columns/
│       ├── index.astro   # 칼럼 목록
│       └── [slug].astro  # 칼럼 상세
├── layouts/
│   └── Layout.astro      # 공통 레이아웃
└── styles/
    └── global.css        # 글로벌 스타일
```

### 칼럼 작성 가이드

칼럼은 `src/content/columns/` 폴더에 MDX 파일로 작성합니다.

#### 1. 파일 생성

파일명이 URL 슬러그가 됩니다.

```
src/content/columns/my-first-post.mdx
→ https://yoursite.com/columns/my-first-post
```

#### 2. Front Matter 작성

```mdx
---
title: "글의 제목"
summary: "글의 요약 (선택사항)"
tags: [태그1, 태그2]
publishedAt: "2025-12-04"
updatedAt: "2025-12-05"
draft: false
---

여기에 본문 내용을 작성하세요.
```

#### 3. Front Matter 필드 설명

| 필드 | 타입 | 필수 | 설명 |
|------|------|------|------|
| `title` | string | ✅ | 글의 제목 |
| `summary` | string | ❌ | 글의 요약 (목록 페이지에 표시) |
| `tags` | string[] | ❌ | 태그 배열 (기본값: []) |
| `publishedAt` | date | ✅ | 발행일 (YYYY-MM-DD 형식 권장) |
| `updatedAt` | date | ❌ | 수정일 |
| `draft` | boolean | ❌ | 초안 여부 (기본값: false) |

#### 4. 본문 작성

MDX 문법을 사용할 수 있습니다. Markdown의 모든 기능과 함께 JSX 컴포넌트도 사용 가능합니다.

```mdx
## 제목

일반 텍스트와 **굵은 글씨**, *기울임* 등을 사용할 수 있습니다.

### 리스트

- 항목 1
- 항목 2
- 항목 3

### 코드 블록

\`\`\`python
def hello():
    print("Hello, World!")
\`\`\`

### 이미지

![이미지 설명](/images/example.png)

### 링크

[링크 텍스트](https://example.com)
```

### 작성 예시

```mdx
---
title: "수학 공부법 정리"
summary: "효과적인 수학 공부 방법을 정리해봤습니다."
tags: [수학, 공부법, 학습법]
publishedAt: "2025-12-04"
draft: false
---

## 서론

수학은 단순히 문제를 많이 푸는 것만으로는 실력이 오르지 않습니다.

## 핵심 포인트

1. **개념 이해가 우선**
2. **반복보다는 이해**
3. **오답 노트 활용**

## 구체적인 방법

문제를 풀 때는...
```

### 노출 규칙

**칼럼 목록 페이지 (`/columns`)**
- `draft: false`인 글만 표시됩니다
- `publishedAt` 기준 최신 순으로 정렬됩니다
- 인기 태그(상위 10개)가 자동으로 집계되어 표시됩니다

**칼럼 상세 페이지 (`/columns/[slug]`)**
- `draft: true`인 글은 빌드 시 페이지가 생성되지 않습니다

### 개발 팁

#### 초안 작성하기
공개하고 싶지 않은 글은 `draft: true`로 설정하세요.

```mdx
---
title: "작성 중인 글"
draft: true
---
```

#### 파일명 규칙
- 영문, 숫자, 하이픈(`-`) 조합 권장
- 한글 파일명도 가능하지만 URL에 인코딩되어 표시됨
- 예시: `hello-world.mdx`, `my-first-post.mdx`

#### 날짜 형식
날짜는 `YYYY-MM-DD` 형식을 권장합니다.

```mdx
publishedAt: "2025-12-04"  # ✅ 권장
publishedAt: "2025/12/04"  # ⚠️ 가능하지만 비권장
```

#### 태그 활용
- 태그는 자유롭게 지정 가능
- 사용 빈도에 따라 자동으로 인기 태그가 집계됨
- 태그 클릭 시 해당 태그를 가진 글 필터링 가능

### 스키마 확인

더 자세한 스키마 정보는 `src/content/config.ts`를 참고하세요.
