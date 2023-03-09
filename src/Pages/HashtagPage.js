import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "../Components/TrendingCard/Card.js"

export default function HashtagPage(){
    const [tag, setTag] = useState()
    const { hashtag } = useParams()

    return(
        <Card />
    )
}