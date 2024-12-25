import { Pizzas } from '../../pages/Home'
import Button from '../Button'
import Tag from '../Tag'

import { formataPreco } from '../ProductsList'

import { Banner, Infos } from './styles'

type Props = {
  massa: Pizzas
}

const Hero = ({ massa }: Props) => (
  <Banner style={{ backgroundImage: `url(${massa.media.cover})` }}>
    <div className="container">
      <div>
        <Tag>{massa.details.category}</Tag>
        <Tag>{massa.details.system}</Tag>
      </div>

      <Infos>
        <h2>{massa.name}</h2>
        <p>
          {massa.prices.discount && (
            <span>De {formataPreco(massa.prices.old)}</span>
          )}
          {massa.prices.current && (
            <>Por {formataPreco(massa.prices.current)}</>
          )}
        </p>
        {massa.prices.current && (
          <Button
            type="button"
            title="Clique aqui para adicionar a pizza no carrinho"
            variant="primary"
          >
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
)

export default Hero
