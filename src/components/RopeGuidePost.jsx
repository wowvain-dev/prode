import {useParams} from "react-router-dom";
import {GET_ROPE_GUIDE_ID} from "../utilities/queries.js";
import {useQuery} from "@apollo/client";
import {Text} from "@chakra-ui/react";

export default function RopeGuidePost() {
    const params = useParams();

    const {loading, error, data} = useQuery(
        GET_ROPE_GUIDE_ID, {
            variables: {
                "guide_id": params.guideId
            }
        }
    );

    if (loading) {
        return <div>
            <Text fontSize="3xl">The content is loading... Hold tight</Text>
        </div>
    }

    if (error) {
        return <div>
            <Text fontSize="3xl">An error occured while loading the content... Skill issue</Text>
        </div>
    }

    console.log(data);

    return(
        <div>
            <div dangerouslySetInnerHTML={{__html: data.ropeGuide.guideContent.html}}/>
        </div>
    );
}