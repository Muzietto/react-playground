import React from 'react';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const useStyles = makeStyles(theme => ({
  root: {
    height: 180,
  },
  wrapper: {
    width: 100 + theme.spacing(2),
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    margin: theme.spacing(1),
  },
  slider: {
    display: 'flex',
    height: 350,
  },
  sliderLegend: {
    padding: 20,
    marginRight: 100,
  },
  svg: {
    width: 400,
    height: 300,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

export default function ThreeStepWizard() {
  const classes = useStyles();
  const [step, setStep] = React.useState(0);

  const handle = ev => {
    setStep(parseInt(ev.target.value, 10));
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.slider}>
          <FormControl component="fieldset" className={classes.sliderLegend}>
            <FormLabel component="legend">Wizard Step</FormLabel>
            <RadioGroup name="steps" value={step} onChange={handle}>
              <FormControlLabel value={0} control={<Radio />} label="Zero" />
              <FormControlLabel value={1} control={<Radio />} label="One" />
              <FormControlLabel value={3} control={<Radio />} label="Two" />
            </RadioGroup>
          </FormControl>
          <Slide direction="left" in={step >= 0} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Slide>
          <Slide direction="up" in={step >= 1} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Slide>
          <Slide direction="left" in={step >= 2} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <svg className={classes.svg}>
                <polygon points="0,100 50,00, 100,100" className={classes.polygon} />
              </svg>
            </Paper>
          </Slide>
        </div>
      </div>
    </div>
  );
}
