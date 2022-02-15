import styles from '../styles/Home.module.css'
import Summary from '../components/summary'

var question = [
    '청소할 때 MBTI 유형별 행동',
    '연예인 중 가장 많은 MBTI는????',
    '홀림 주의 말을 정말 잘하는 MBTI는 바로....',
    'ㄴrㄴㅡㄴㄱr끔 눈물을 흘린다;;;',
    '내 친구 중에 맘에 안드는애 있는데...'
]

export default function Notice() {
  return (
    <div class='body'>
      <div class='advertisement'></div>
      <span class='contents-title'>공지사항</span>
      <div class='contents-list'>
        <ul>
          {question.map(n => (
            <li>{n}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}