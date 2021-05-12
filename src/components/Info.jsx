import React from 'react'


const Info = ({info}) => {

    if(Object.keys(info).length === 0) return null;

    return ( 

        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
                Información Artista
            </div>
            <div className='card-body'>
                <img src={info.strArtistThumb} alt='Logo artista'/>
                <p className='card-text'>Género: {info.strGenre}</p>
                <h2 className='card-text'>Biografía</h2>
                <p className='card-text'>{info.strBiographyES}</p>
            </div>
        </div>
     );
}
 
export default Info;