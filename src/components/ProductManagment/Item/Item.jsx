import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  //   Grid,
} from '@material-ui/core';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
// import { AddShoppingCart } from '@material-ui/icons';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import Divider from '@mui/material/Divider';
import useStyles from './styles';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

//import MainTheme from "../../../themes/MainTheme";
// const styleForPaper = {
//   width: '96vw',
//   height: '20vh',
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

const styleForIcon = {
  width: '2vw',
  height: '3vh',
  '&:hover': {
    width: '4vw',
    height: '6vh',
  },
};
// const styleForPrice = {
//   font: '5rem',
// };
const NewItem = ({ product }) => {
  const [count, setCount] = React.useState(parseInt(product.count));
  const [itemVisible, setItemVisible] = React.useState(true);
  const classes = useStyles();
  const inStock =
    parseInt(product.quantity) > 0
      ? '✅ In-stock (' + product.quantity + ')'
      : '❌ Not in-stock';
  if (itemVisible != true) return <></>;
  return (
    <Card className={classes.root} sx={{ display: 'flex' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          border: 'solid 1px grey',
        }}
      >
        <CardMedia
          className={classes.media}
          image={product.image}
          title={product.name}
          component='img'
          height={'25%'}
          width={'25%'}
          align={'left'}
        />
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <Rating
            name='read-only'
            value={product.rating}
            readOnly
            className={classes.rating}
          />

          <span className={classes.stock}>{inStock}</span>
        </Grid>
        <CardContent>
          <TextField
            className={classes.textField}
            margin='normal'
            required
            fullWidth
            id='code'
            color='secondary'
            autoFocus
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
            value={product.name}
            // onChange={(e) => setCode(e.target.value)}
          />

          <TextField
            className={classes.textField}
            margin='normal'
            required
            fullWidth
            id='code'
            color='secondary'
            autoFocus
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
            value={product.description}
            // onChange={(e) => setCode(e.target.value)}
          />
        </CardContent>
        <Divider orientation='vertical' variant='middle' flexItem />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <TextField
            className={classes.textField}
            margin='normal'
            required
            fullWidth
            id='code'
            color='secondary'
            autoFocus
            InputProps={{
              classes: {
                root: classes.cssOutlinedInput,
                focused: classes.cssFocused,
                notchedOutline: classes.notchedOutline,
                input: classes.input,
              },
            }}
            value={'$' + product.price}
            // onChange={(e) => setCode(e.target.value)}
          />
        </Box>
        <Divider orientation='vertical' variant='middle' flexItem />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
          }}
        >
          <ButtonGroup className={classes.amount}>
            <Button
              variant='text'
              className={classes.amount}
              aria-label='reduce'
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize='large' />
            </Button>
            <Button variant='text' disabled>
              <Typography
                className={classes.amount}
                style={{ alignContent: 'center', fontSize: '1.5rem' }}
                gutterBottom
              >
                {' '}
                {count}
              </Typography>
            </Button>
            <Button
              variant='text'
              className={classes.amount}
              aria-label='increase'
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize='large' />
            </Button>
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
              style={styleForIcon}
              aria-label='Example'
              onClick={() => {
                setItemVisible(false);
              }}
            >
              <IndeterminateCheckBoxIcon
                style={styleForIcon}
                sx={{ color: '#550000' }}
              />
            </IconButton>
          </CardActions>
          <CardActions disableSpacing className={classes.cardActions}>
            <IconButton
              style={styleForIcon}
              aria-label='Example'
              onClick={() => {
                setItemVisible(false);
              }}
            >
              <CheckBoxIcon style={styleForIcon} sx={{ color: '#005500' }} />
            </IconButton>
          </CardActions>
        </Box>
      </Box>
    </Card>
  );
};

export default NewItem;
