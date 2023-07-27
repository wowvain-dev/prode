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
                html
            } 
        }
    }  
    `;