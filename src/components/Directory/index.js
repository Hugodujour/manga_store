import React from "react";
import ShopMangas from './../../assets/shopFigurines.jpg';
import ShopFigurines from './../../assets/shopMangas.jpg';
import './styles.scss'

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
                <div
                className="item"
                style={{
                    backgroundImage: `url(${ShopFigurines})`
                    }}>
                        <a>Shop Mangas</a>
                </div>
                <div
                    className="item"
                    style={{ 
                    backgroundImage: `url(${ShopMangas})`
                    }}>
                        <a>Shop Figurines</a>
                </div>
            </div>
        </div>
    )
}

export default Directory