import React, {useState} from 'react';
import FriendCard from "./friend-card";
import data from "./data";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

heroContent: {
    backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
},

}));
const FriendAll = () => {
    /*
        let [setFirstnameVar] = useState('');
        let [setMidlenameVar] = useState('');
        let [setLastnameVar] = useState('');

        function FriendsAll() {
            fetch('http://127.0.0.1:8000/api/friendAll', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    //'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstname: setFirstname,
                    midname: setMidlename,
                    lastname: setLastname,

                })
            })
                .then((Response) => Response.on())
                .then((Result) => {
                    alert(Result);
                })
        }
    /*
        function setFirstname(e) {
            setFirstnameVar = e.target.value;
        }
        function setMidlename(e) {
            setMidnameVar = e.target.value;
        }
        function setLastname(e) {
            setLastnameVar = e.target.value;
        }

        const [values, setValues] = useState({
            fornavn: '',
            midnavn:'',
            etternavn:'',
        });


     */
    const classes = useStyles();
        return (
            <React.Fragment>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Mine Venner
                        </Typography>
                    </Container>
                </div>

            <Grid container spacing={4}>
            {data.map(item => (
                <Grid item key={item} xs={12} sm={6} md={4}>

                <FriendCard
                    firstname={item.firstname}
                    lastname={item.lastname}
                    middlename={item.middlename}
                    imageUrl={item.imageUrl}
                />
                </Grid>


            ))}
            </Grid>

            </React.Fragment>


        );

    };
export default FriendAll;