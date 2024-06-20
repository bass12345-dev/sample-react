import { useParams } from "react-router-dom";

function admin_layout(){
   const params =  useParams();

    return(

        <>
            <h1>Admin</h1>
        </>
    );
}

export default admin_layout;