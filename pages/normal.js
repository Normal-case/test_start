import styles from '../styles/Home.module.css'
import Summary from '../components/summary'

var normal = [
    'INFP들아 대체 왜 휴대폰 안봐?',
    'ESTJ만 답변해줘',
    '아 썸남때문에 고민인데 한번 봐줘 ㅠㅠ',
    'ENTP랑 싸웠는데 어떻게 화해해야할까?',
    'MBTI 조합별 연애 궁합!!!'
  ]

export default function Notice() {
  return (
    <div class='body'>
      <div class='advertisement'></div>
      <span class='contents-title'>공지사항</span>
      <div class='contents-list'>
        <ul>
          {normal.map(n => (
            <li>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
