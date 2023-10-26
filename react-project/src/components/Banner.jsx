// import React from 'react'

// const Banner = ({ movie }) => {
//     const imgPath = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg'
//     console.log('Hone => Banner 영화', movie)
//     return (
//         <div className='banner-img'><img src={imgPath}></img>
//             <div className='banner-item'>
//                 <h1>{movie.title}</h1>
//                 <p>{movie.overview}</p>
//             </div>
//         </div>
//     )
// }

// export default Banner
import React from 'react'

const Banner = ({ movie }) => {
    // console.log('Home => Banner 영화 ', movie)
    return (
        <div className='banner-img'
            style={{
                backgroundImage: "url(" +
                    `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}`
                    + ")"
            }}
        >
            {/* 배너 이미지를 포스터로 띄우고, 그 위에 제목, overview */}

            <div className='banner-item'>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
            </div>
        </div>
    )
}

export default Banner