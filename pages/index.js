import styles from '../styles/Home.module.css'
import Summary from '../components/summary'

var notice = [
  '[필독]일반게시판 이용수칙',
  '오늘의 퀴즈 당첨자 목록',
  '홈페이지 점검 및 업데이트 내용',
  '오늘의 내말이 네말이 저말이 무슨말이?',
  '이번주 말말말말 모음집'
]

var question = [
  '청소할 때 MBTI 유형별 행동',
  '연예인 중 가장 많은 MBTI는????',
  '홀림 주의 말을 정말 잘하는 MBTI는 바로....',
  'ㄴrㄴㅡㄴㄱr끔 눈물을 흘린다;;;',
  '내 친구 중에 맘에 안드는애 있는데...'
]

var normal = [
  'INFP들아 대체 왜 휴대폰 안봐?',
  'ESTJ만 답변해줘',
  '아 썸남때문에 고민인데 한번 봐줘 ㅠㅠ',
  'ENTP랑 싸웠는데 어떻게 화해해야할까?',
  'MBTI 조합별 연애 궁합!!!'
]

export default function Home() {
  return (
    <div class='body'>
      <div class='advertisement'></div>
      <div class='summary'>
        <Summary title='공지사항' contents={notice} link='/notice'/>
        <Summary title='질문게시판' contents={question} link='/question'/>
        <Summary title='일반게시판' contents={normal} link='/normal' />
      </div>
    </div>
  )
}
