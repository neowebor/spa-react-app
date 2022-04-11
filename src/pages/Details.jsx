import {useLocation, useNavigate, useParams} from "react-router-dom";
import {IoArrowBack} from "react-icons/io5";
import {useEffect, useState} from "react";
import {API} from "../Service/API/API";
import {searchByCountry} from "../config";
import {Button} from "../components/Button";
import {Info} from "../components/Info";

export const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const [country, setCountry] = useState(null)


  useEffect(() => {
    API.get(searchByCountry(params.name))
      .then(({data}) => setCountry(data[0]))
  }, [params.name])

  return (
     <div>
       <Button onClick={goBack}>
        <IoArrowBack /> Back
       </Button>
       {country && (<Info {...country}/>)}
     </div>
  )
}