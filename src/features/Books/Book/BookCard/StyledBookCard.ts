import Grid from '@mui/material/Grid';
import { styled as muiStyled } from '@mui/material';

const StyledBookCard = muiStyled(Grid, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== 'color' && prop !== 'variant' && prop !== 'sx',
  name: 'StyledBookCard',
  slot: 'Root',
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [styles.root, props.color === 'primary' && styles.primary, props.color === 'secondary' && styles.secondary],
})(({ theme, color }) => ({
  borderColor: theme.palette.primary.main
}));

export default StyledBookCard;
