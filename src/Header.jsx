import avatar from './assets/avatar.jpeg'

export default function Header() {
  return (
    <header>
      <nav>
        <img className="avatar" src={avatar} alt="Avatar" />
        <ul>
          <li><a href="#">Work</a></li>
          <li><a href="#">Music</a></li>
          <li><a href="#">Pots</a></li>
        </ul>
      </nav>
    </header>
  )
}
