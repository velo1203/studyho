# 파비콘 및 OG 이미지 생성 가이드

현재 SVG 파비콘은 이미 생성되어 있습니다. PNG 파비콘과 OG 이미지를 생성하려면 다음 단계를 따르세요.

## 필요한 파일들

### 1. 파비콘 PNG 파일
- `favicon-16x16.png` - 16x16px
- `favicon-32x32.png` - 32x32px
- `favicon-192x192.png` - 192x192px (Android Chrome)
- `favicon-512x512.png` - 512x512px (Android Chrome)
- `apple-touch-icon.png` - 180x180px (iOS)

### 2. OG 이미지
- `og-image.png` - 1200x630px (추천 크기)

## 온라인 도구로 생성하기

### 방법 1: Favicon.io (추천)
1. https://favicon.io/favicon-converter/ 방문
2. `favicon.svg` 파일 업로드
3. 모든 크기의 파비콘 다운로드
4. 다운로드한 파일들을 `public/` 폴더에 복사

### 방법 2: RealFaviconGenerator
1. https://realfavicongenerator.net/ 방문
2. `favicon.svg` 파일 업로드
3. 설정 완료 후 다운로드
4. 생성된 파일들을 `public/` 폴더에 복사

## OG 이미지 생성

### Canva 사용
1. https://canva.com 방문
2. 1200x630px 크기로 새 디자인 생성
3. 다음 요소 포함:
   - 배경: 흰색 (라이트) 또는 검정색 (다크)
   - 텍스트: "studyho" (대제목)
   - 부제: "공부와 생활을 기록하는 공간"
   - 책 아이콘 또는 로고
4. `og-image.png`로 내보내기
5. `public/` 폴더에 저장

### Figma 사용
1. 1200x630px 프레임 생성
2. 흑백 디자인으로 작성
3. PNG로 내보내기
4. `public/og-image.png`로 저장

## SVG를 PNG로 변환 (개발 환경)

Node.js를 사용하여 SVG를 PNG로 변환할 수 있습니다:

```bash
# sharp 패키지 설치
npm install -D sharp svg2png-cli

# SVG를 여러 크기의 PNG로 변환
npx svg2png-cli --input public/favicon.svg --output public/favicon-16x16.png --width 16 --height 16
npx svg2png-cli --input public/favicon.svg --output public/favicon-32x32.png --width 32 --height 32
npx svg2png-cli --input public/favicon.svg --output public/favicon-192x192.png --width 192 --height 192
npx svg2png-cli --input public/favicon.svg --output public/favicon-512x512.png --width 512 --height 512
npx svg2png-cli --input public/favicon.svg --output public/apple-touch-icon.png --width 180 --height 180
```

## 디자인 가이드

### 파비콘
- **스타일**: 미니멀, 흑백
- **아이콘**: 책 + "S" 글자
- **배경**: 라이트 모드 = 흰색, 다크 모드 = 검정색
- **전경**: 라이트 모드 = 검정색, 다크 모드 = 흰색

### OG 이미지
- **크기**: 1200x630px
- **배경**: 흰색 또는 검정색
- **텍스트**: 
  - 제목: "studyho" (굵게, 크게)
  - 부제: "공부와 생활을 기록하는 공간"
- **폰트**: 시스템 폰트 (맑은 고딕, Apple SD Gothic Neo 등)
- **여백**: 충분한 패딩 (최소 80px)

## 확인 사항

생성 후 다음 사항을 확인하세요:

1. 모든 파일이 `public/` 폴더에 있는지
2. 파일 이름이 정확한지
3. 브라우저에서 파비콘이 제대로 표시되는지
4. OG 이미지가 소셜 미디어에서 잘 보이는지
   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

## 파일 구조

```
public/
├── favicon.svg (✅ 완료)
├── favicon-16x16.png (⚠️ 필요)
├── favicon-32x32.png (⚠️ 필요)
├── favicon-192x192.png (⚠️ 필요)
├── favicon-512x512.png (⚠️ 필요)
├── apple-touch-icon.png (⚠️ 필요)
├── og-image.png (⚠️ 필요)
├── robots.txt (✅ 완료)
└── site.webmanifest (✅ 완료)
```

