import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
   
import DeleteIcon from '@mui/icons-material/Delete';
import accounting from "accounting";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({

  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),

}));

export default function Product({product : {id, name, productType, Image, price, rating, description }}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardHeader
        
        action={
          <Typography
                     
             marginTop = "1rem"
             variant='h6'
             color='textSecondary'
          >
             {accounting.formatMoney(price) }
             </Typography>
        }
        
        title={name}
        subheader={productType}
      />
      <CardMedia

        height= '200'
        paddingTop= "56.25%"
        component="img" 
        image={Image}
        alt="Paella dish"
      />
     
      <CardActions disableSpacing>
        
        {Array(rating)
        .fill()
        .map((_,i) =>(
            <p>&#11088;</p>
        ))}

        <IconButton aria-label="delete">
          <DeleteIcon/>
        </IconButton>
   
      </CardActions>
 
    </Card>
  );
}
