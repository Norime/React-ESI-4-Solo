import React from "react";
import MovieModule from "./Movie.module.css";

//Need to clean//
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


//const ExpandMore = styled((props) => {
//    const { expand, ...other } = props;
//    return <IconButton {...other} />;
//})(({ theme, expand }) => ({
//    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//    marginLeft: 'auto',
//    transition: theme.transitions.create('transform', {
//        duration: theme.transitions.duration.shortest,
//    }),
//}));

//export default function RecipeReviewCard() {
//    const [expanded, setExpanded] = React.useState(false);

//    //const handleExpandClick = () => {
//    //    setExpanded(!expanded);
//    //};
//};


const Movie = (props) => {
    //const { myTitle, title } = props;
    //const { myId, id } = props;
    
    //return <div>Movie:
    //    <span> {myId}</span>
    //    <span> {myTitle}</span>
    //</div>;

    //return <div className={MovieModule.error}>
    //    <span> {props.title}</span>
    //    <span> {props.episode_id}</span>
    //</div>;
    const [expanded, setExpanded] = React.useState(false);
    return <Card className={MovieModule.cardFilm} sx={{ maxWidth: 345 }}>
        <CardHeader
            title={props.title}
            subheader={props.episode_id}
        />
        <CardMedia
            component="img"
            height="194"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
        />
        <CardContent>
            <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
            </Typography>
        </CardContent>
    </Card>;
    
}

export default Movie;