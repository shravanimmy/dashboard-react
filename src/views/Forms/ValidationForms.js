/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import InputAdornment from "@material-ui/core/InputAdornment";

// material ui icons
import MailOutline from "@material-ui/icons/MailOutline";
import Contacts from "@material-ui/icons/Contacts";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardText from "components/Card/CardText.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import NavPills from "components/NavPills/NavPills.js";


// style for this view
import styles from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.js";

const useStyles = makeStyles(styles);

export default function ValidationForms() {
  // register form
  const [registerEmail, setregisterEmail] = React.useState("");
  const [registerEmailState, setregisterEmailState] = React.useState("");
  const [registerPassword, setregisterPassword] = React.useState("");
  const [registerPasswordState, setregisterPasswordState] = React.useState("");
  const [registerConfirmPassword, setregisterConfirmPassword] = React.useState(
    ""
  );
  const [
    registerConfirmPasswordState,
    setregisterConfirmPasswordState,
  ] = React.useState("");
  const [registerCheckbox, setregisterCheckbox] = React.useState(false);
  const [registerCheckboxState, setregisterCheckboxState] = React.useState("");
  // login form
  const [loginEmail, setloginEmail] = React.useState("");
  const [loginEmailState, setloginEmailState] = React.useState("");
  const [loginPassword, setloginPassword] = React.useState("");
  const [loginPasswordState, setloginPasswordState] = React.useState("");
  // type validation
  const [required, setrequired] = React.useState("");
  const [requiredState, setrequiredState] = React.useState("");
  const [typeEmail, settypeEmail] = React.useState("");
  const [typeEmailState, settypeEmailState] = React.useState("");
  const [number, setnumber] = React.useState("");
  const [numberState, setnumberState] = React.useState("");
  const [url, seturl] = React.useState("");
  const [urlState, seturlState] = React.useState("");
  const [equalTo, setequalTo] = React.useState("");
  const [whichEqualTo, setwhichEqualTo] = React.useState("");
  const [equalToState, setequalToState] = React.useState("");
  // range validation
  const [minLength, setminLength] = React.useState("");
  const [minLengthState, setminLengthState] = React.useState("");
  const [maxLength, setmaxLength] = React.useState("");
  const [maxLengthState, setmaxLengthState] = React.useState("");
  const [range, setrange] = React.useState("");
  const [rangeState, setrangeState] = React.useState("");
  const [minValue, setminValue] = React.useState("");
  const [minValueState, setminValueState] = React.useState("");
  const [maxValue, setmaxValue] = React.useState("");
  const [maxValueState, setmaxValueState] = React.useState("");
  // function that returns true if value is email, false otherwise
  const verifyEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };
  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length || defaultvalue.length >= length) {
      return true;
    }
    return false;
  };
  // function that verifies if value contains only numbers
  const verifyNumber = (value) => {
    var numberRex = new RegExp("^[0-9]+$");
    if (numberRex.test(value)) {
      return true;
    }
    return false;
  };
  // verifies if value is a valid URL
  const verifyUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch (_) {
      return false;
    }
  };
  const registerClick = () => {
    if (registerEmailState === "") {
      setregisterEmailState("error");
    }
    if (registerPasswordState === "") {
      setregisterPasswordState("error");
    }
    if (registerConfirmPasswordState === "") {
      setregisterConfirmPasswordState("error");
    }
    if (registerCheckboxState === "") {
      setregisterCheckboxState("error");
    }
  };
  const loginClick = () => {
    if (loginEmailState === "") {
      setloginEmailState("error");
    }
    if (loginPasswordState === "") {
      setloginPasswordState("error");
    }
  };
  const typeClick = () => {
    if (requiredState === "") {
      setrequiredState("error");
    }
    if (typeEmailState === "") {
      settypeEmailState("error");
    }
    if (numberState === "") {
      setnumberState("error");
    }
    if (urlState === "") {
      seturlState("error");
    }
    if (equalToState === "") {
      setequalToState("error");
    }
  };
  const rangeClick = () => {
    if (minLengthState === "") {
      setminLengthState("error");
    }
    if (maxLengthState === "") {
      setmaxLengthState("error");
    }
    if (rangeState === "") {
      setrangeState("error");
    }
    if (minValueState === "") {
      setminValueState("error");
    }
    if (maxValueState === "") {
      setmaxValueState("error");
    }
  };
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="rose" icon>
            <h4 className={classes.cardIconTitle}>Register Forms</h4>
          </CardHeader>
          <CardBody>
          <GridItem xs={12} sm={12} md={8}>
            <form>
              <CustomInput
                success={registerEmailState === "success"}
                error={registerEmailState === "error"}
                labelText="Email Address *"
                id="registeremail"
                formControlProps={{
                  fullWidth: true,
                }}

                inputProps={{
                  value: "xsdsad",
                  onChange: (event) => {
                    if (verifyEmail(event.target.value)) {
                      setregisterEmailState("success");
                    } else {
                      setregisterEmailState("error");
                    }
                    setregisterEmail(event.target.value);
                  },
                  
                }}
              />
              <CustomInput
                success={registerPasswordState === "success"}
                error={registerPasswordState === "error"}
                labelText="Password *"
                id="registerpassword"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                   onChange: (event) => {
                    if (verifyLength(event.target.value, 1)) {
                      setregisterPasswordState("success");
                    } else {
                      setregisterPasswordState("error");
                    }
                    setregisterPassword(event.target.value);
                  },
                  type: "password",
                  autoComplete: "off",
                }}
              />
              <CustomInput
                success={registerConfirmPasswordState === "success"}
                error={registerConfirmPasswordState === "error"}
                labelText="Confirm Password *"
                id="registerconfirmpassword"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  onChange: (event) => {
                    if (registerPassword === event.target.value) {
                      setregisterConfirmPasswordState("success");
                    } else {
                      setregisterConfirmPasswordState("error");
                    }
                    setregisterConfirmPassword(event.target.value);
                  },
                  type: "password",
                  autoComplete: "off",
                }}
              />
              <div className={classes.formCategory}>
                <small>*</small> Required fields
              </div>
              <FormControlLabel
                control={
                  <Checkbox
                    tabIndex={-1}
                    onClick={(event) => {
                      if (event.target.checked) {
                        setregisterCheckboxState("success");
                      } else {
                        setregisterCheckboxState("error");
                      }
                      setregisterCheckbox(event.target.checked);
                    }}
                    checkedIcon={<Check className={classes.checkedIcon} />}
                    icon={<Check className={classes.uncheckedIcon} />}
                    classes={{
                      checked: classes.checked,
                      root: classes.checkRoot,
                    }}
                  />
                }
                classes={{
                  label:
                    classes.label +
                    (registerCheckboxState === "error"
                      ? " " + classes.labelError
                      : ""),
                }}
                label="Subscribe to newsletter"
              />
              <Button
                color="rose"
                onClick={registerClick}
                className={classes.registerButton}
              >
                Register
              </Button>
            </form>
            </GridItem>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
          <h3 className={classes.pageSubcategoriesTitle}>Page Subcategories</h3>
          <br />
          <NavPills
            color="warning"
            alignCenter
            tabs={[
              {
                tabButton: "Description",
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Description about product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Collaboratively administrate empowered markets via
                      plug-and-play networks. Dynamically procrastinate B2C
                      users after installed base benefits.
                      <br />
                      <br />
                      Dramatically visualize customer directed convergence
                      without revolutionary ROI.
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Location",
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Location of the product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br />
                      Dramatically maintain clicks-and-mortar solutions without
                      functional solutions.
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Legal Info",
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>
                        Legal info of the product
                      </h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Help Center",
                tabContent: (
                  <Card>
                    <CardHeader>
                      <h4 className={classes.cardTitle}>Help center</h4>
                      <p className={classes.cardCategory}>
                        More information here
                      </p>
                    </CardHeader>
                    <CardBody>
                      From the seamless transition of glass and metal to the
                      streamlined profile, every detail was carefully considered
                      to enhance your experience. So while its display is
                      larger, the phone feels just right.
                      <br />
                      <br />
                      Another Text. The first thing you notice when you hold the
                      phone is how great it feels in your hand. The cover glass
                      curves down around the sides to meet the anodized aluminum
                      enclosure in a remarkable, simplified design.
                    </CardBody>
                  </Card>
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
   <NavPills
     color="primary"
     alignRight
     tabs={[
       {
         tabButton: "Description",
         tabContent: (
           <Card>
             <CardHeader color="warning" icon>
               <h4 className={classes.cardIconTitle}>
                 Traffic
                 <small>
                   <br />
                   November 2017
                 </small>
               </h4>
             </CardHeader>
             <CardBody>
             </CardBody>
           </Card>
         ),
       },
       {
         tabButton: "Month",
         tabContent: (
           <Card>
             <CardHeader color="warning" icon>
               <h4 className={classes.cardIconTitle}>
                 Traffic
                 <small>
                   <br />
                   November 2017
                 </small>
               </h4>
             </CardHeader>
             <CardBody>
             </CardBody>
           </Card>
         ),
       },
       {
         tabButton: "Month",
         tabContent: (
           <Card>
             <CardHeader color="warning" icon>
               <h4 className={classes.cardIconTitle}>
                 Traffic
                 <small>
                   <br />
                   November 2017
                 </small>
               </h4>
             </CardHeader>
            </Card>
         ),
       },
       {
         tabButton: "DOwnload",
         tabContent: (
           <Card>
             <CardHeader color="warning" icon>
               <h4 className={classes.cardIconTitle}>
                 Traffic
                 <small>
                   <br />
                   November 2017
                 </small>
               </h4>
             </CardHeader>
             <CardBody>
               Collaboratively administrate empowered markets via
               plug-and-play networks. Dynamically procrastinate B2C
               users after installed base benefits.
               <br />
               <br />
               Dramatically visualize customer directed convergence
               without revolutionary ROI.
             </CardBody>
           </Card>
         ),
       },
     ]}
   />
 </GridItem>
</GridContainer>

    
  );
}
