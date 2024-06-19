import { useParams } from "react-router-dom";

function Profile(){
   const params =  useParams();

    return(

        <>
            <h1>Profile {params.id}</h1>
        </>
    );
}

export default Profile;