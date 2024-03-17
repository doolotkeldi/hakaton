

import './Main.scss'
import Logo from '../../assets/svg/Abu1.png'
import Logos from '../../assets/svg/Abu2.png'

const Main = () => {
	return (
		<div className='container'>
			<div className="Card-logo">
				<div className='Abu-1'>
					<img src={Logo} alt="" />
					<div className="text-content-info">
					<h1>WE MADE YOUR EVERYDAY FASHION BETTER!</h1>
					<p>In our journey to improve everyday fashion, euphoria presents EVERYDAY wear range - Comfortable & Affordable fashion 24/7</p>
					<button>Shop Now</button>

					</div>



				</div>
				<div>
					<img src= {Logos} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Main