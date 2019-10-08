import gql from 'graphql-tag';


export const GET_USERS = gql`
    {
        users {
            id
            password
            email
            firstName
        }
    }
`
export const GET_USER = gql`
    query me {
        me {
            email
            firstName
            lastName
            profileImage
            city
            zip
            address
            state
            aptNumber
        }

    }
`;




export const GET_USER_PROFILE = gql`
    {
        me {
            id
            email
            firstName
            lastName
            profileImage
            city
            zip
            address
            state
            aptNumber
            donations {
                id
                amount
            }
            projects { 
                id
                name
                description
                address
                state
                zip
                city
                goalAmount
                duration
                difficulty
                startDate
                featuredImage
                donations {
                    id
                    amount
                }
            }
            likedProjects {
                id
                project {
                    id
                    name
                }
            }
            comments {
                id
                comment
                likes {
                id
                }
                project {
                    id
                    name
                    featuredImage
                }
            }
            likedComments {
                id
                comment {
                    id
                    comment 
                    profile {
                        id
                        firstName
                        profileImage
                    }
                    project {
                        id
                        name
                        featuredImage
                    }
                }
            }
        }
    }


`;