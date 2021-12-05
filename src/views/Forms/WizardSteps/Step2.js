import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
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
  const [text1, settext1] = React.useState("FR05463524052453211");
  const [text1State, settext1State] = React.useState("");
  const [text2, settext2] = React.useState("411");
  const [text2State, settext2State] = React.useState("");
  const [text3, settext3] = React.useState("406");
  const [text3State, settext3State] = React.useState("");
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
    sendState: () => {
      return sendState();
    },
    state: {
      text1,
      text1State,
      text2,
      text2State,
      text3,
      text3State,
    },
  }));
  const sendState = () => {
    return {
      text1,
      text1State,
      text2,
      text2State,
      text3,
      text3State,
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
      text1State === "success" &&
      text2State === "success" &&
      text3State === "success"
    ) {
      return true;
    } else {
      if (text1State !== "success") {
        settext1State("error");
      }
      if (text2State !== "success") {
        settext2State("error");
      }
      if (text3State !== "success") {
        settext3State("error");
      }
    }
    return false;
  };

  return (
    <GridContainer justify="left">
      <GridItem xs={12} sm={2} className={classes.bottom}>
        <FormLabel className={classes.labels}>N° de TVA INTRA *</FormLabel>
      </GridItem>
      <GridItem xs={12} sm={12} md={6} lg={6}>
        <CustomInput
          success={text1State === "success"}
          error={text1State === "error"}
          id="text1"
          formControlProps={{
            fullWidth: true,
            readOnly: false,
          }}
          value={text1}
          inputProps={{
            value: text1,
            onChange: (event) => {
              if (!verifyLength(event.target.value, 3)) {
                settext1State("error");
              } else {
                settext1State("success");
              }
              settext1(event.target.value);
            },
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={4}></GridItem>
      <GridItem xs={12} sm={2} md={2} lg={2}>
        <FormLabel className={classes.labels}>
          Code comptable général *
        </FormLabel>
      </GridItem>
      <GridItem xs={12} sm={12} md={6} lg={6}>
        <CustomInput
          success={text2State === "success"}
          error={text2State === "error"}
          id="text2"
          formControlProps={{
            fullWidth: true,
          }}
          value={text2}
          inputProps={{
            value: text2,
            onChange: (event) => {
              if (!verifyLength(event.target.value, 1)) {
                settext2State("error");
              } else {
                settext2State("success");
              }
              settext2(event.target.value);
            },
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={4} md={4} lg={4}></GridItem>
      <GridItem xs={12} sm={2} md={2} lg={2}>
        <FormLabel className={classes.labels}>
          Code comptable auxiliaire *
        </FormLabel>
      </GridItem>
      <GridItem xs={12} sm={8} md={6} lg={6}>
        <CustomInput
          success={text3State === "success"}
          error={text3State === "error"}
          id="text3"
          formControlProps={{
            fullWidth: true,
          }}
          inputProps={{
            value: text3,
            onChange: (event) => {
              if (!verifyLength(event.target.value)) {
                settext3State("error");
              } else {
                settext3State("success");
              }
              settext3(event.target.value);
            },
          }}
        />
      </GridItem>
      <GridItem xs={12} sm={4} md={4} lg={4}></GridItem>
    </GridContainer>
  );
});

Step1.displayName = "Step1";

export default Step1;
