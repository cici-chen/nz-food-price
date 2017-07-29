import React from 'react'

class Plates extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showPrice:false
    }
  }
  onHover(){
  }
  onLeave(){
  }
  onClick(){
    this.state.showPrice ? this.setState({showPrice:false}) : this.setState({showPrice:true})
  }
  render(){
    let X=1.06
    let Y=1.75
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h2>New Zealand 🇳🇿</h2>
            <h5>Minimum wage: <a href="https://www.govt.nz/browse/work/workers-rights/minimum-wage-in-new-zealand/">$15.75/hour</a></h5>
            <div className='divider'></div>
            <p className="text-center">
              <a href="https://shop.countdown.co.nz/?gclid=Cj0KCQjwwevLBRCGARIsAKnAJve4NVJ2VStL74YD0FzrBnPLxuArGtmsYLpx_V-c00Ip4S4FRcxvu6gaAgUbEALw_wcB#url=/Shop/ProductDetails%3Fstockcode%3D290642%26name%3Dbutchery-barnwell-chicken-breast-boneless-skin-on-large-pk%26searchString%3Dchicken%2Bbreast">Shopping Receipt</a>
            </p>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="bread" src="https://s-media-cache-ak0.pinimg.com/originals/7c/a1/4e/7ca14e8de6f19d4e01e28b1527d3538c.png" alt="bread"></img>
                </div>
              <div className="food-price col-xs-6">
                Bread | $1.00/bag(600g)
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="milk" src="https://www.anchor.co.nz/app/uploads/2017/04/10351_Anchor_2L_Blue2.png" alt="milk"></img>
                </div>
              <div className="food-price col-xs-6">
                Milk | $2.83/Litre
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                </div>
              <div className="food-price col-xs-6">
                Chicken breast | $1.70/100g
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                </div>
              <div className="food-price col-xs-6">
                Potato | $5.00/2kg
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="broccoli" src="https://www.myjuicecleanse.com/wp-content/uploads/2013/07/broccoli-med.png" alt="broccoli"></img>
              </div>
              <div className="food-price col-xs-6">
                Broccoli | $2.79/head
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="apple" src="http://www.chelanfresh.com/hs-fs/hubfs/Images/gala-apple-chelan-fresh.png?t=1499788946371&width=238&height=301&name=gala-apple-chelan-fresh.png" alt="apple"></img>
                  <img id="apple" src="http://www.chelanfresh.com/hs-fs/hubfs/Images/gala-apple-chelan-fresh.png?t=1499788946371&width=238&height=301&name=gala-apple-chelan-fresh.png" alt="apple"></img>
              </div>
              <div className="food-price col-xs-6">
                Apple | $3.00/1kg
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="coke" src="http://www.coca-colaproductfacts.com/content/dam/productfacts/us/productDetails/ProductImages/Coke_20oz.png" alt="coke"></img>
              </div>
              <div className="food-price col-xs-6">
                Coke | $4.00/bottle(600ml)
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="beer" src="http://www.kingdomliquor.com/wp-content/uploads/2014/10/Heineken-Bottle.png" alt="beer"></img>
              </div>
              <div className="food-price col-xs-6">
                Heineken | $6.69/bottle(650ml)
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="icecream"></img>
              </div>
              <div className="food-price col-xs-6">
                Cornetto | $2/each
              </div>
            </div>
            <div className='divider'></div>
            <h4 className="total">Total cost = $31.01 | 2 hours salary = $31.5</h4>
          </div>
          <div className="col-md-4">
            <h2>Australia 🇦🇺 </h2>
            <h5>Minimum wage: <a href="https://www.govt.nz/browse/work/workers-rights/minimum-wage-in-new-zealand/">${18.29*X}/hour</a></h5>
            <div className='divider'></div>
            <p className="text-center">
              <a href="https://www.woolworths.com.au/shop/search">Shopping Receipt</a>
            </p>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="bread" src="https://s-media-cache-ak0.pinimg.com/originals/7c/a1/4e/7ca14e8de6f19d4e01e28b1527d3538c.png" alt="bread"></img>
                </div>
              <div className="food-price col-xs-6">
                Bread | ${0.85*X}/bag(650g)
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="milk" src="https://www.anchor.co.nz/app/uploads/2017/04/10351_Anchor_2L_Blue2.png" alt="milk"></img>
                </div>
              <div className="food-price col-xs-6">
                Milk | ${1.2*X}/Litre
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                </div>
              <div className="food-price col-xs-6">
                Chicken breast | ${0.85*X}/100g
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                </div>
              <div className="food-price col-xs-6">
                Potato | ${5.50*X}/2kg
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="broccoli" src="https://www.myjuicecleanse.com/wp-content/uploads/2013/07/broccoli-med.png" alt="broccoli"></img>
              </div>
              <div className="food-price col-xs-6">
                Broccoli | ${1.47*X}/head
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="apple" src="http://www.chelanfresh.com/hs-fs/hubfs/Images/gala-apple-chelan-fresh.png?t=1499788946371&width=238&height=301&name=gala-apple-chelan-fresh.png" alt="apple"></img>
                  <img id="apple" src="http://www.chelanfresh.com/hs-fs/hubfs/Images/gala-apple-chelan-fresh.png?t=1499788946371&width=238&height=301&name=gala-apple-chelan-fresh.png" alt="apple"></img>
              </div>
              <div className="food-price col-xs-6">
                Apple | ${3.90*X}/1kg
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="coke" src="http://www.coca-colaproductfacts.com/content/dam/productfacts/us/productDetails/ProductImages/Coke_20oz.png" alt="coke"></img>
                  <img id="coke" src="http://www.coca-colaproductfacts.com/content/dam/productfacts/us/productDetails/ProductImages/Coke_20oz.png" alt="coke"></img>
              </div>
              <div className="food-price col-xs-6">
                Coke | ${Math.round(3.39*X)}/bottle(600ml)
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="beer" src="http://www.kingdomliquor.com/wp-content/uploads/2014/10/Heineken-Bottle.png" alt="beer"></img>
              </div>
              <div className="food-price col-xs-6">
                Heineken | ${Math.round(6.50*X)}/bottle(650ml)
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="icecream"></img>
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="icecream"></img>
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="icecream"></img>
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="icecream"></img>
              </div>
              <div className="food-price col-xs-6">
                Cornetto | ${7*X}/4 cones
              </div>
            </div>
            <div className='divider'></div>
            <h4 className="total">Total cost = ${Math.round(36.43*X)} | 2 hours salary = {Math.round(36.58*X)} </h4>
          </div>
          <div className="col-md-4">
            <h2>UK 🇬🇧 </h2>
            <h5>Minimum wage: <a href="https://www.govt.nz/browse/work/workers-rights/minimum-wage-in-new-zealand/">${Math.round(7.5*Y)}/hour</a></h5>
            <div className='divider'></div>
            <p className="text-center">
              <a href="https://www.tesco.com/groceries/product/search">Shopping Receipt</a>
            </p>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="bread" src="https://s-media-cache-ak0.pinimg.com/originals/7c/a1/4e/7ca14e8de6f19d4e01e28b1527d3538c.png" alt="bread"></img>
                </div>
              <div className="food-price col-xs-6">
                Bread | ${0.5*Y}/bag(800g)
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="milk" src="https://www.anchor.co.nz/app/uploads/2017/04/10351_Anchor_2L_Blue2.png" alt="milk"></img>
                </div>
              <div className="food-price col-xs-6">
                Milk | ${0.75*Y}/Litre
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                  <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                </div>
              <div className="food-price col-xs-6">
                Chicken breast | ${0.527*Y}/100g
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                </div>
              <div className="food-price col-xs-6">
                Potato | ${1.29*Y/2.5*2}/2kg
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="broccoli" src="https://www.myjuicecleanse.com/wp-content/uploads/2013/07/broccoli-med.png" alt="broccoli"></img>
              </div>
              <div className="food-price col-xs-6">
                Broccoli | ${0.5*Y}/head
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="apple" src="http://www.chelanfresh.com/hs-fs/hubfs/Images/gala-apple-chelan-fresh.png?t=1499788946371&width=238&height=301&name=gala-apple-chelan-fresh.png" alt="apple"></img>
              </div>
              <div className="food-price col-xs-6">
                Apple | ${2*Y}/1kg
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="coke" src="http://www.coca-colaproductfacts.com/content/dam/productfacts/us/productDetails/ProductImages/Coke_20oz.png" alt="coke"></img>
                  <img id="coke" src="http://www.coca-colaproductfacts.com/content/dam/productfacts/us/productDetails/ProductImages/Coke_20oz.png" alt="coke"></img>
              </div>
              <div className="food-price col-xs-6">
                Coke | ${Math.round(1.25*Y)}/bottle(500ml)
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="beer" src="http://www.kingdomliquor.com/wp-content/uploads/2014/10/Heineken-Bottle.png" alt="beer"></img>
              </div>
              <div className="food-price col-xs-6">
                Heineken | ${Math.round(2*Y)}/bottle(650ml)
              </div>
            </div>
            <div className='row'>
              <div className="food-item col-xs-6">
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="icecream"></img>
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="icecream"></img>
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="icecream"></img>
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="icecream"></img>
              </div>
              <div className="food-price col-xs-6">
                Cornetto | ${2*Y}/4 cones
              </div>
            </div>
            <div className='divider'></div>
            <h4 className="total">Total cost = ${Math.round(15*Y)} | 2 hours salary = {Math.round(15*Y)} </h4>
          </div>
        </div>
      </div>
    )
  }
}

export default Plates
