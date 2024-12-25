import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart, Imagem } from './styles'

import logo from '../../assets/images/logo.png'
import carrinho from '../../assets/images/carrinho.svg'

const Header = () => (
  <HeaderBar>
    <div>
      <Link to="/">
        <Imagem>
          <img src={logo} alt="EFOOD" />
        </Imagem>
      </Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to="/Restaurantes">Restaurantes</Link>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s) no carrinho
      <img src={carrinho} alt="Carrinho" />
    </LinkCart>
  </HeaderBar>
)

export default Header
