import React from 'react'
import Favorites from './Favorites'
import RandomResults from './RandomResults'
import { Link } from 'react-router-dom'

const DisplayFavorites = ({favorites}) => {
  return (
    <div className="row">
          <Link to={'/favorites'}>
            {/* //will need to pass props newFavList over as headings/images// */}
          </Link>
    </div>
  )
}

export default DisplayFavorites