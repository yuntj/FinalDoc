import { Component } from 'preact';
import { inject } from 'mobx-react'
import { route } from 'preact-router';
import './index.scss'
import more from './more.svg'
import { MENU_MAIN } from '../../constant/data'


class Nav extends Component {
	constructor(props) {
		super(props)
	}

  doMenu = (path)=>{
    route(path)
  }

	render() {
    return (
      <div className="g-nav">
        <div className="g-menu">
          {MENU_MAIN.map((item,i)=>
            <div key={i} onClick={this.doMenu.bind(this,item.path)}>
              <span>{item.title}</span> <img src={more} />
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Nav
