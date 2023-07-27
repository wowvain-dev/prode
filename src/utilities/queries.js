import {gql} from '@apollo/client';

export const GET_ROPE_GUIDES= gql`
query getRopeGuides {
  ropeGuides {
    id
    guideTitle
    guideContent {
        html
    }
  }
}
`;

export const GET_ROPE_GUIDE_ID = gql`
    query getRopeGuideId($guide_id: ID) {
        ropeGuide(where: {id: $guide_id}) {
            guideTitle
            guideContent {
                raw
            } 
        }
    }  
    `;

export const CREATE_ROPE_GUIDE = gql`
    mutation createRopeGuide($title: String!, $content: RichTextAST!) {
        createRopeGuide(data: {
            guideTitle: $title,
            guideContent: $content
        }) {
            id
            guideTitle
            guideContent {
                raw
            } 
        }
        
    }
`;

export const PUBLISH_ROPE_GUIDE = gql`
    mutation publishRopeGuide($gid: ID) {
        publishRopeGuide(where: {id: $gid}, to: PUBLISHED) {
            id
            guideTitle
            guideContent {
                raw
            }
        } 
    }   
`;

export const GET_NECKTIE_GUIDES= gql`
query getNecktieGuides {
  necktieGuides {
    id
    guideTitle
    guideContent {
        html
    }
  }
}
`;

export const GET_NECKTIE_GUIDE_ID = gql`
    query getNecktieGuideId($guide_id: ID) {
        necktieGuide(where: {id: $guide_id}) {
            guideTitle
            guideContent {
                raw
            } 
        }
    }  
    `;

export const CREATE_NECKTIE_GUIDE = gql`
    mutation createNecktieGuide($title: String!, $content: RichTextAST!) {
        createNecktieGuide(data: {
            guideTitle: $title,
            guideContent: $content
        }) {
            id
            guideTitle
            guideContent {
                raw
            } 
        }
        
    }
`;

export const PUBLISH_NECKTIE_GUIDE = gql`
    mutation publishNecktieGuide($gid: ID) {
        publishNecktieGuide(where: {id: $gid}, to: PUBLISHED) {
            id
            guideTitle
            guideContent {
                raw
            }
        } 
    }   
`;

export const GET_SHOELACE_GUIDES= gql`
query getShoelaceGuides {
  shoelaceGuides {
    id
    guideTitle
    guideContent {
        html
    }
  }
}
`;

export const GET_SHOELACE_GUIDE_ID = gql`
    query getShoelaceGuideId($guide_id: ID) {
        shoelaceGuide(where: {id: $guide_id}) {
            guideTitle
            guideContent {
                raw
            } 
        }
    }  
    `;

export const CREATE_SHOELACE_GUIDE = gql`
    mutation createShoelaceGuide($title: String!, $content: RichTextAST!) {
        createShoelaceGuide(data: {
            guideTitle: $title,
            guideContent: $content
        }) {
            id
            guideTitle
            guideContent {
                raw
            } 
        }
        
    }
`;

export const PUBLISH_SHOELACE_GUIDE = gql`
    mutation publishShoelaceGuide($gname: String) {
        publishShoelaceGuide(where: {guideTitle: $gname}, to: PUBLISHED) {
            id
            guideTitle
            guideContent {
                raw
            }
        } 
    }   
`;
