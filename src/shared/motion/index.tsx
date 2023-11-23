import styles from './motion.module.css'

const circles = styles.circles as string

function Motion() {
  return (
    <ul className={circles}>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  )
}

export default Motion
