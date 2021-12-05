import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormLabel from "@material-ui/core/FormLabel";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

// const styles = {
//   infoText: {
//     fontWeight: "300",
//     margin: "10px 0 30px",
//     textAlign: "center",
//   },
//   inputAdornmentIcon: {
//     color: "#555",
//   },
//   inputAdornment: {
//     position: "relative",
//   },
//   margins: {
//     marginLeft: "50px",
//   },
// };

const useStyles = makeStyles(styles);

const Step1 = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [firstname, setfirstname] = React.useState("Sampa Noor");
  const [firstnameState, setfirstnameState] = React.useState("");
  const [lastname, setlastname] = React.useState("SPN_17000122");
  const [lastnameState, setlastnameState] = React.useState("");
  const [email, setemail] = React.useState("");
  const [emailState, setemailState] = React.useState("");
  const [note, setnote] = React.useState("");
  const [noteState, setnoteState] = React.useState("");
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
    sendState: () => {
      return sendState();
    },
    state: {
      firstname,
      firstnameState,
      lastname,
      lastnameState,
      email,
      emailState,
      note,
      noteState,
    },
  }));
  const sendState = () => {
    return {
      firstname,
      firstnameState,
      lastname,
      lastnameState,
      email,
      emailState,
      note,
      noteState,
    };
  };

  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
  const isValidated = () => {
    if (
      firstnameState === "success" &&
      lastnameState === "success" &&
      emailState === "success" &&
      noteState === "success"
    ) {
      return true;
    } else {
      if (firstnameState !== "success") {
        setfirstnameState("error");
      }
      if (lastnameState !== "success") {
        setlastnameState("error");
      }
      if (emailState !== "success") {
        setemailState("error");
      }
      if (noteState !== "success") {
        setnoteState("error");
      }
    }
    return false;
  };

  return (
    <GridContainer justify="left">
      <GridItem xs={12} sm={2} className={classes.bottom}>
        <FormLabel className={classes.labels}>Rasion Sociale *</FormLabel>
      </GridItem>
      <GridItem xs={12} sm={12} md={6} lg={6}>
        <CustomInput
          success={firstnameState === "success"}
          error={firstnameState === "error"}
          id="firstname"
          formControlProps={{
            fullWidth: true,
            readOnly: false,
          }}
          value={firstname}
          inputProps={{
            value: firstname,
            onChange: (event) => {
              if (!verifyLength(event.target.value, 3)) {
                setfirstnameState("error");
              } else {
                setfirstnameState("success");
              }
              setfirstname(event.target.value);
            },
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={4}></GridItem>
      <GridItem xs={12} sm={2} md={2} lg={2}>
        <FormLabel className={classes.labels}>Code fournisseur *</FormLabel>
      </GridItem>
      <GridItem xs={12} sm={12} md={6} lg={6}>
        <CustomInput
          success={lastnameState === "success"}
          error={lastnameState === "error"}
          id="lastname"
          formControlProps={{
            fullWidth: true,
          }}
          value={lastname}
          inputProps={{
            value: lastname,
            onChange: (event) => {
              if (!verifyLength(event.target.value, 3)) {
                setlastnameState("error");
              } else {
                setlastnameState("success");
              }
              setlastname(event.target.value);
            },
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={4} md={4} lg={4}></GridItem>
      <GridItem xs={12} sm={2} md={2} lg={2}>
        <FormLabel className={classes.labels}>
          Site web / Portail Pro *
        </FormLabel>
      </GridItem>
      <GridItem xs={12} sm={8} md={6} lg={6}>
        <CustomInput
          success={emailState === "success"}
          error={emailState === "error"}
          labelText={
            <span>
              <small>(required)</small>
            </span>
          }
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            onChange: (event) => {
              if (!verifyLength(event.target.value)) {
                setemailState("error");
              } else {
                setemailState("success");
              }
              setemail(event.target.value);
            },
            startAdornment: (
              <InputAdornment position="end" className={classes.inputAdornment}>
                https
              </InputAdornment>
            ),
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={4} md={4} lg={4}></GridItem>
      <GridItem xs={12} sm={2}>
        <FormLabel className={classes.labels}>Note *</FormLabel>
      </GridItem>
      <GridItem xs={12} sm={12} md={6} lg={6}>
        <CustomInput
          success={noteState === "success"}
          error={noteState === "error"}
          id="note"
          labelText={
            <span>
              <small>(required)</small>
            </span>
          }
          formControlProps={{
            fullWidth: true,
            readOnly: false,
          }}
          type="textarea"
          inputProps={{
            type: "textarea",
            placeholder: "Écrivez quelquechose",
            onChange: (event) => {
              if (!verifyLength(event.target.value, 3)) {
                setnoteState("error");
              } else {
                setnoteState("success");
              }
              setnote(event.target.value);
            },
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={4}></GridItem>
    </GridContainer>
  );
});

Step1.displayName = "Step1";

export default Step1;
