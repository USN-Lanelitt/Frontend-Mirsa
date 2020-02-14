import React from 'react';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import FriendCard from "./friend-card";

const useStyles = makeStyles(theme => ({

}));
const FriendList = () => {

    const friendsDataList = [
        {
            id: 1,
            firstname: "Mirsa",
            middlename: "",
            lastname: "Ficori",
            imageUrl: "https://source.unsplash.com/random"

        },
        {
            id: 2,
            firstname: "Linda",
            middlename: "Wangen",
            lastname: " Loftsgarden",
            imageUrl: "https://source.unsplash.com/random"

        },
        {
            id: 3,
            firstname: "Nicole",
            middlename: "",
            lastname: "Bendu",
            imageUrl: "https://source.unsplash.com/random"
        },
        {
            id: 4,
            firstname: "Finn ",
            middlename: "Svolsbru",
            lastname: "Gundersen",
            imageUrl: "https://source.unsplash.com/random"
        },
        {
            id: 5,
            firstname: "John Berge",
            middlename: "",
            lastname: "Brimaas",
            imageUrl: "https://source.unsplash.com/random"
        },
        {
            id: 6,
            firstname: "Farhad",
            middlename: "",
            lastname: "Ahmadhadi",
            imageUrl: "https://source.unsplash.com/random"
        },
        {
            id: 7,
            firstname: "Mickey",
            middlename: "",
            lastname: "Fluffy",
            imageUrl: "https://source.unsplash.com/random"
        }

    ];
        return (
            <Grid container spacing={2} alignItems={"left"}>
                <Container maxWidth="sm">
                    <List>
                        {
                            friendsDataList.map(item => (
                                    <ListItem>

                                        <FriendCard
                                            firstname={item.firstname}
                                            middlename={item.middlename}
                                            lastname={item.lastname}
                                            imageUrl={item.imageUrl}
                                        />
                                    </ListItem>
                                )
                            )
                        }

                    </List>

                </Container>
            </Grid>
        );
    };
export default FriendList;