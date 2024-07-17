# SmartPhone Order - 모바일 주문을 통한 테이블 오더 시스템

## 프로젝트 소개
식당에서 고객이 본인의 스마트폰으로 직접 메뉴를 주문하는 테이블 오더 시스템을 만들었습니다.
<br />
이 시스템을 사용하면 업주는 태블릿 설치형 테이블 오덜에 비해 연간 450만 원 이상의 렌탈비를 점갈할 수 있으며, 기기 관리를 매일 해야 하는 번거로움에서도 해방될 수 있습니다.

## 프로젝트 목표
- 디자인 시스템을 표방하여 재사용이 용이한 추상화된 컴포넌트를 구현합니다.
- 직관성이 높은 UI/UX 구현을 목표로 합니다.
- 사용자 경험을 개선하기 위해 행동 유도(Call To Action) 요소를 적극적으로 활용합니다.

## TechStacks
- 코어: Next.JS, React, TypeScript
- 상태관리: React-Query(Server State), Recoil(Client State)
- 디자인: Chakra UI
- JS utility library: lodash

## Preview
<img width="625" alt="스크린샷 2024-06-21 오후 8 24 11" src="https://github.com/andyhan-23/Table-Order/assets/98483125/f1661baf-9ec8-48b6-8509-19ae1549b0b2">

## 고민했던 부분
1. [UI/UX에 대한 깊은 고민을 해보았습니다.](https://velog.io/@kungfuk11/%EC%89%BD%EA%B3%A0-%EC%A7%81%EA%B4%80%EC%A0%81%EC%9D%B8-UIUX)

## 실행하는 법
```
$ git clone https://github.com/andyhan-23/smartphone-order.git
$ cd front
$ yarn
$ yarn dev
```

## 비고
- 본 프로젝트는 백엔드 개발에 의존하지 않고 데이터를 사전에 mocking 하여 내부에서 프론트 요청에 따라 데이터를 제공하였습니다.
