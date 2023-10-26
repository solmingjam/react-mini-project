import React, { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import PuffLoader, { PacmanLoader } from 'react-spinners/PuffLoader'
import { Badge } from 'react-bootstrap'
import axios from '../axios'
const MovieDetail = () => {
    const { popularMovies, topRatedMovies, upComingMovies } = useSelector(state => state.movies)

    // route 작성하는 부분에 /:id <- path 작성
    const { id } = useParams();

    // url을 작성하는 부분에 ?type=어쩌구저쩌구
    const [searchParams] = useSearchParams();
    const type = searchParams.get('type')


    // console.log(`내가 가져온 영화의 id는 ${id}, 타입은 ${type}`)

    const [movie, setMovie] = useState();
    const [review, setReview] = useState([]);

    const [loading, setLoading] = useState(true)

    /** 내가 가져올 영화에 대한 데이터를 추출하는 함수 */
    const getMovieData = () => {
        if (type === 'popularMovies') {
            setMovie(popularMovies.results.find((item) => item.id == id))
        } else if (type === 'topRatedMovies') {
            setMovie(topRatedMovies.results.find((item) => item.id == id))
        } else {
            setMovie(upComingMovies.results.find((item) => item.id == id))
        }
    }

    /** 내가 선택한 영화에 대한 리뷰를 가져오는 함수*/
    const getReviewData = () => {
        // /{movie_id}/reviews
        // 리뷰 가져오기 / 1번
        axios
            .get(`/${id}/reviews`)
            .then(res => setReview(res.data.results))
    }
    useEffect(() => {
        // console.log('현재 movie', movie)
        if (movie) {
            // movie라는 state에 새로운 값이 들어가면, 그 값을 sessionstorage 안에 저장
            sessionStorage.setItem('movie', JSON.stringify(movie));
            getReviewData()
        }
    }, [movie])
    // redux의 값이 가지고 와졌을 때,
    useEffect(() => {
        const sessionMovie = JSON.parse(sessionStorage.getItem('movie'))
        // console.log('session movie', sessionMovie)
        // 리뷰가져오기 / 2번
        getReviewData()
        // 세션 안에 값이 존재하면 (이미 클린한 전적) => 세션 안에 있는 값을 movie 세팅

        if (sessionMovie) {
            setMovie(sessionMovie)
        } else {
            // 세션 안에 값이 없다면 (최초 클릭) => redux 로 가서 movie 세팅
            getMovieData()
        }
    }, [popularMovies.results, topRatedMovies.results, upComingMovies.results, id, type])




    return (
        <div className='movie-detail'>
            {movie &&
                <div className='movie-box'>
                    <div className='movie-detail'>
                        <div className='detail-poster'
                            style={{
                                backgroundImage: `url(https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movie.poster_path})`
                            }}></div>
                        <div className='detail-item'>
                            <div>
                                {/* react-bootstrap Badge */}
                                {movie.adult
                                    ? <Badge bg="danger">청소년 관람 불가</Badge>
                                    : <Badge bg="success">전체관람가</Badge>
                                }
                            </div>
                            <h1>{movie.title}</h1>
                            <div>
                                <span>평점 : {movie.vote_average}점</span> {" "}
                                <span>개봉일 : {movie.release_date}</span>
                            </div>
                            <div>{movie.overview}</div>
                        </div>
                        <hr />
                        <h2>Review</h2>

                        {/* 리뷰 불러오기 / 3번 */}
                        {review.length === 0
                            ? <p>등록된 리뷰가 없습니다</p>
                            : (review.map((item) =>
                                <div key={item.id}>
                                    <hr />
                                    <p>{item.content}</p>
                                    <p>
                                        작성자 {item.author}|
                                        작성일 {item.created_at}
                                    </p>
                                </div>))
                        }
                    </div>
                </div>
            }</div>
    )
}

export default MovieDetail