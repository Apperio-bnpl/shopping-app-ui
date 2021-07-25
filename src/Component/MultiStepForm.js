import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  FormControl,
  InputLabel,
  Select,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";

import moment from "moment";

import logo from "../assets/img/logo.png";
import moneybag from "../assets/img/moneybag.png";

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  formControl: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    minWidth: 180,
  },
  calendar: {
    minWidth: 180,
  },
  logo: {
    display: "flex",
    objectFit: "content",
    width: 150,
    marginBottom: 30,
    marginLeft: "auto",
  },
  container: {
    display: "flex",
    flexDirection: "column",
  },
  moneyBag: {
    display: "flex",
    width: "100px",
    objectFit: "contain",
    alignItems: "center",
    margin: "10px auto",
  },
  success: {
    color: "#e81532",
  },
  agreement: {
    marginTop: "10px",
  },
}));

function getSteps() {
  return [
    "Basic information",
    "Contact Information",
    "Address Information",
    "Income Information",
    "Accept Terms",
  ];
}

const BasicForm = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    name: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="firstName"
        render={({ field }) => (
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="lastName"
        render={({ field }) => (
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="gender"
        render={({ field }) => (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-gender-native-simple">
              Gender
            </InputLabel>
            <Select
              native
              id="gender"
              value={state.gender}
              onChange={handleChange}
              label="Gender"
              inputProps={{
                name: "gender",
                id: "outlined-gender-native-simple",
              }}
              {...field}
            >
              <option aria-label="None" value="" />
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="not">Prefer not to say</option>
            </Select>
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="dob"
        render={({ field }) => (
          <TextField
            className={classes.calendar}
            id="dob_"
            label="Date of Birth"
            variant="outlined"
            defaultValue={moment().format("YYYY-MM-DD")}
            format="YYYY-MM-DD"
            fullWidth
            margin="normal"
            type="date"
            {...field}
          />
        )}
      />
    </>
  );
};
const ContactForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PersonalForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const PaymentForm = () => {
  const { control } = useFormContext();
  const classes = useStyles();
  const [state, setState] = React.useState({
    occupation: "",
  });

  const handleChange = (event) => {
    const occupation = event.target.name;
    setState({
      ...state,
      [occupation]: event.target.value,
    });
  };
  return (
    <>
      <Controller
        control={control}
        name="occupation"
        render={({ field }) => (
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-occupation-native-simple">
              Occupation
            </InputLabel>
            <Select
              id="occupation"
              native
              value={state.occupation}
              onChange={handleChange}
              label="Occupation"
              inputProps={{
                name: "occupation",
                id: "outlined-occupation-native-simple",
              }}
              {...field}
            >
              <option aria-label="None" value="" />
              <option value="salaried">Salaried</option>
              <option value="nonSalaried">Non-Salaried</option>
              <option value="selfEmployed">Self-Employed</option>
              {/* <option value="selfEmployed">Self-Employed</option> */}
            </Select>
          </FormControl>
        )}
      />
      <Controller
        control={control}
        name="salary"
        render={({ field }) => (
          <TextField
            id="salary"
            label="Monthly Salary"
            variant="outlined"
            placeholder="Enter Your monthly salary"
            fullWidth
            type="number"
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="ssn"
        render={({ field }) => (
          <TextField
            id="ssn"
            label="Social security number"
            variant="outlined"
            placeholder="Enter Your SSN"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

const MoneyAllocation = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleCheckbox = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };
  const { control } = useFormContext();
  return (
    <>
      <img src={moneybag} className={classes.moneyBag} />
      <Typography variant="h4" align="center" className={classes.success}>
        Congratulations
      </Typography>
      <Typography variant="h6" align="center">
        Your spend limit is
      </Typography>
      <Typography variant="h2" align="center">
        $1000
      </Typography>
      <Typography align="left">
        This is your initial credit limit. It would be extended based on your
        usage and repayments.
      </Typography>
      <Controller
        control={control}
        name="checkedA"
        render={({ field }) => (
          <>
            <FormControlLabel
              className={classes.agreement}
              control={
                <Checkbox
                  checked={state.checkedA}
                  onClick={handleCheckbox("checkedA")}
                  value="true"
                  inputProps={{
                    "aria-label": "primary checkbox",
                  }}
                  {...field}
                />
              }
              label="By clicking you agree to HSBC agreement."
            />
            <br />
          </>
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <BasicForm />;

    case 1:
      return <ContactForm />;
    case 2:
      return <PersonalForm />;
    case 3:
      return <PaymentForm />;
    case 4:
      return <MoneyAllocation />;
    default:
      return "unknown step";
  }
}

const MultiStepForm = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      emailAddress: "",
      phoneNumber: "",
      alternatePhone: "",
      address1: "",
      address2: "",
      country: "",
      occupation: "",
      ssn: "",
      salary: "",
      dob: moment().format("YYYY-MM-DD"),
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  // const isStepOptional = (step) => {
  //   return step === 1 || step === 2;
  // };

  const handleNext = (data) => {
    // call API
    // console.log("===================>>>>>>>", data);
    if (activeStep == steps.length - 1) {
      // fetch("https://jsonplaceholder.typicode.com/comments")
      //   .then((data) => data.json())
      //   .then((res) => {
      //     console.log(res);
      //     setActiveStep(activeStep + 1);
      //   });
      // console.log("===================>>>>>>>", data);
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className={classes.container}>
      <img src={logo} alt="" className={classes.logo} />
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography
          //       variant="caption"
          //       align="center"
          //       style={{ display: "block" }}
          //     >
          //       optional
          //     </Typography>
          //   );
          // }

          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Congratulations!!!
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}

              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default MultiStepForm;
