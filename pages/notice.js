import styles from '../styles/Home.module.css'
import Summary from '../components/summary'

var notice = [
  '[필독]일반게시판 이용수칙',
  '오늘의 퀴즈 당첨자 목록',
  '홈페이지 점검 및 업데이트 내용',
  '오늘의 내말이 네말이 저말이 무슨말이?',
  '이번주 말말말말 모음집'
]

export default function Notice() {
  return (
    <div class='body'>
      <div class='advertisement'></div>
      <span class='contents-title'>공지사항</span>
      <div class='contents-list'>
        <ul>
          {notice.map(n => (
            <li>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
