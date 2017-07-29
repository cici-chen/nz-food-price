import React from 'react'
import {connect} from 'react-redux'

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
    return(
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h2>New Zealand</h2>
            <div className="row">
            <div className="col-md-3">
                <p>Minimum wage: $15.75 <small><a href="https://www.govt.nz/browse/work/workers-rights/minimum-wage-in-new-zealand/">source</a></small></p>
            </div>
            <div className="col-md-2">
                <p>Weekly income: ${15.75*40}</p>
            </div>
            <div className="col-md-4">
                <p>A week's rent in Wellington: ${34*7} <small><a href="http://www.hostelworld.com/hosteldetails.php/YHA-Wellington-City/Wellington/11840?dateFrom=2017-08-30&dateTo=2017-08-31&number_of_guests=1">source</a></small></p>
            </div>
            <div className="col-md-3">
                <p>Budget per meal: ${Math.round((15.75*40-34*7)/7/3)}</p>
            </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>Shopping Bag  | Total Price: $18.72 <small><a href="https://shop.countdown.co.nz/?gclid=Cj0KCQjwwevLBRCGARIsAKnAJve4NVJ2VStL74YD0FzrBnPLxuArGtmsYLpx_V-c00Ip4S4FRcxvu6gaAgUbEALw_wcB#url=/Shop/ProductDetails%3Fstockcode%3D290642%26name%3Dbutchery-barnwell-chicken-breast-boneless-skin-on-large-pk%26searchString%3Dchicken%2Bbreast">source</a></small></p>
              </div>
            </div>
            <div className="row plate">
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)} >
                <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                {this.state.showPrice && <p>Chicken<br></br>$1.10/100G </p>}
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <div className='food-image'>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                  <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                </div>
                {this.state.showPrice && <p>Potato<br></br>$2/1000G</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <div className='food-image'>
                <img id="bread" src="http://i.imgur.com/XiaV9TH.png" alt="bread"></img>
                <img id="bread" src="http://i.imgur.com/XiaV9TH.png" alt="bread"></img>
                </div>
                {this.state.showPrice && <p>Bread<br></br>$0.40/100G</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                  <img id="milk" src="http://www.charlamahon.com/wp-content/uploads/2016/01/Glass-of-Milk.png" alt="milk"></img>
                {this.state.showPrice && <p>Milk<br></br>$1.98/1L</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="beer" src="http://www.kingdomliquor.com/wp-content/uploads/2014/10/Heineken-Bottle.png" alt="beer"></img>
                {this.state.showPrice && <p>Beer<br></br>$4.99/500ML</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="broccoli" src="https://www.myjuicecleanse.com/wp-content/uploads/2013/07/broccoli-med.png" alt="broccoli"></img>
                {this.state.showPrice && <p>Brocolli<br></br>$2.79/head</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="coke" src="http://www.coca-colaproductfacts.com/content/dam/productfacts/us/productDetails/ProductImages/Coke_20oz.png" alt="coke"></img>
                {this.state.showPrice && <p>Coke<br></br>$4.00/600ml bottle</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="apple" src="http://www.chelanfresh.com/hs-fs/hubfs/Images/gala-apple-chelan-fresh.png?t=1499788946371&width=238&height=301&name=gala-apple-chelan-fresh.png" alt="apple"></img>
                {this.state.showPrice && <p>Apple<br></br>$3.00/kg</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="cornetto"></img>
                {this.state.showPrice && <p>Cornetto<br></br>$3.00/kg</p> }
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <h2>Australia</h2>
            <div className="row">
            <div className="col-md-3">
                <p>Minimum wage: $18.29 <small><a href="https://www.fairwork.gov.au/how-we-will-help/templates-and-guides/fact-sheets/minimum-workplace-entitlements/minimum-wages#current-national-minimum-wage">source</a></small></p>
            </div>
            <div className="col-md-2">
                <p>Weekly income: ${Math.round(18.29*40)}</p>
            </div>
            <div className="col-md-4">
                <p>A week's rent in Melbourne: ${31*7} <small><a href="https://www.yha.com.au/hostels/responsive-booking-steps/?hostelCode=MELC&startDate=28/08/2017&endDate=29/08/2017">source</a></small></p>
            </div>
            <div className="col-md-3">
                <p>Budget per meal: ${Math.round((18.29*40-31*7)/7/3)}</p>
            </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>Shopping Bag  | Total Price: $24.6 <small><a href="https://www.woolworths.com.au/shop/search/products?searchTerm=apple&sortBy=PriceAsc">source</a></small></p>
              </div>
            </div>
            <div className="row plate">
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)} >
                <div className='food-image'>
                <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                </div>
                {this.state.showPrice && <p>Chicken<br></br>$1.10/100G </p>}
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                {this.state.showPrice && <p>Potato<br></br>$2/1000G</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <div className='food-image'>
                <img id="bread" src="http://i.imgur.com/XiaV9TH.png" alt="bread"></img>
                <img id="bread" src="http://i.imgur.com/XiaV9TH.png" alt="bread"></img>
                </div>
                {this.state.showPrice && <p>Bread<br></br>$1.00/600G</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                  <img id="milk" src="http://www.charlamahon.com/wp-content/uploads/2016/01/Glass-of-Milk.png" alt="milk"></img>
                {this.state.showPrice && <p>Milk<br></br>$1.98/1L</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="beer" src="http://www.kingdomliquor.com/wp-content/uploads/2014/10/Heineken-Bottle.png" alt="beer"></img>
                {this.state.showPrice && <p>Beer<br></br>$4.99/500ML</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="broccoli" src="https://www.myjuicecleanse.com/wp-content/uploads/2013/07/broccoli-med.png" alt="broccoli"></img>
                {this.state.showPrice && <p>Brocolli<br></br>$2.79/head</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <div className='food-image'>
                  <img id="coke" src="http://www.coca-colaproductfacts.com/content/dam/productfacts/us/productDetails/ProductImages/Coke_20oz.png" alt="coke"></img>
                  <img id="coke" src="http://www.coca-colaproductfacts.com/content/dam/productfacts/us/productDetails/ProductImages/Coke_20oz.png" alt="coke"></img>
                </div>
                {this.state.showPrice && <p>Coke<br></br>$4.00/600ml bottle</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="apple" src="http://www.chelanfresh.com/hs-fs/hubfs/Images/gala-apple-chelan-fresh.png?t=1499788946371&width=238&height=301&name=gala-apple-chelan-fresh.png" alt="apple"></img>
                {this.state.showPrice && <p>Apple<br></br>$3.00/kg</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <div classNama="food-image">
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="cornetto"></img>
                  <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="cornetto"></img>
                </div>
                {this.state.showPrice && <p>Cornetto<br></br>$3.00/kg</p> }
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <h2>England</h2>
            <div className="row">
            <div className="col-md-3">
                <p>Minimum wage: £7.50 <small><a href="https://www.gov.uk/national-minimum-wage-rates">source</a></small></p>
            </div>
            <div className="col-md-2">
                <p>Weekly income: £{Math.round(7.50*40)}</p>
            </div>
            <div className="col-md-4">
                <p>A week's rent in London: £{18*7} <small><a href="http://www.yha.org.uk/hostel/london-central">source</a></small></p>
            </div>
            <div className="col-md-3">
                <p>Budget per meal: £{Math.round((7.5*40-18*7)/7/3)}</p>
            </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>Shopping Bag  | Total Price: £8 <small><a href="https://www.tesco.com/groceries/product/search/default.aspx?searchBox=chicken%20breast&icid=tescohp_sws-1_chicken%20breast">source</a></small></p>
              </div>
            </div>
            <div className="row plate">
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)} >
                <div className='food-image'>
                <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                <img id="chicken" src="https://vignette1.wikia.nocookie.net/dayz-standalone/images/6/65/Cooked_Chicken_Breast.png/revision/latest?cb=20150701111450" alt="chicken breast"></img>
                </div>
                {this.state.showPrice && <p>Chicken<br></br>$1.10/100G </p>}
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <div classNama="food-image">
                <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                <img id="potato" src="https://lh5.ggpht.com/9UDY3O4wSwlBm-kHHfjKf85Yk5GCt0nckL5ZdMR-nYotAfNjODvR4sZ-scPXG3ABVF65=w300" alt="potato"></img>
                </div>
                {this.state.showPrice && <p>Potato<br></br>$2/1000G</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <div className='food-image'>
                <img id="bread" src="http://i.imgur.com/XiaV9TH.png" alt="bread"></img>
                <img id="bread" src="http://i.imgur.com/XiaV9TH.png" alt="bread"></img>
                </div>
                {this.state.showPrice && <p>Bread<br></br>$1.00/600G</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                  <img id="milk" src="http://www.charlamahon.com/wp-content/uploads/2016/01/Glass-of-Milk.png" alt="milk"></img>
                {this.state.showPrice && <p>Milk<br></br>$1.98/1L</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="beer" src="http://www.kingdomliquor.com/wp-content/uploads/2014/10/Heineken-Bottle.png" alt="beer"></img>
                {this.state.showPrice && <p>Beer<br></br>$4.99/500ML</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="broccoli" src="https://www.myjuicecleanse.com/wp-content/uploads/2013/07/broccoli-med.png" alt="broccoli"></img>
                {this.state.showPrice && <p>Brocolli<br></br>$2.79/head</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <div className='food-image'>
                  <img id="coke" src="http://www.coca-colaproductfacts.com/content/dam/productfacts/us/productDetails/ProductImages/Coke_20oz.png" alt="coke"></img>
                </div>
                {this.state.showPrice && <p>Coke<br></br>$4.00/600ml bottle</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="apple" src="http://www.chelanfresh.com/hs-fs/hubfs/Images/gala-apple-chelan-fresh.png?t=1499788946371&width=238&height=301&name=gala-apple-chelan-fresh.png" alt="apple"></img>
                {this.state.showPrice && <p>Apple<br></br>$3.00/kg</p> }
              </div>
              <div className="food-item" onMouseOver={this.onHover.bind(this)} onMouseLeave={this.onLeave.bind(this)} onClick={this.onClick.bind(this)}>
                <img id="cornetto" src="http://www.wallsthailand.com/Resources/Images/CornettoClassicVanilla1838-1005832.png" alt="cornetto"></img>
                {this.state.showPrice && <p>Cornetto<br></br>$3.00/kg</p> }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
}

export default connect(mapStateToProps)(Plates)
