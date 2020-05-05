import React from 'react'
import './image.css'

Image = (props) => {

    const { largeImageURL, previewURL, likes, tags, views } = props.image;
    return (
        <div className='card text-white backgroundf'>
            <img src={previewURL} alt={tags} className='card-img-top img-t'></img>
            <div className='card-body card-contenido'>
                <p className='card-text h6'>{views} Vistas</p>
                <p className='card-text h6'>{likes} Likes</p>

                <a href={largeImageURL} className='btn btn-danger btn-block'>Ver imagen completa</a>
            </div>
        </div>
    )
}

export default Image;