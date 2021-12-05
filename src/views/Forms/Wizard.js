import React from "react";
//import classes from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Wizard from "components/Wizard/Wizard.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import Step1 from "./WizardSteps/Step1.js";
import Step2 from "./WizardSteps/Step2.js";
import Step3 from "./WizardSteps/Step3.js";
import Step4 from "./WizardSteps/Step4.js";
import Step5 from "./WizardSteps/Step5.js";
import Step6 from "./WizardSteps/Step6.js";
//import { blue } from "@material-ui/core/colors";

const styles = {
  voirbutton: {
    marginTop: "25px",
    backgroundColor: "white",
    color: "blue !important",
    border: "1px solid blue",
    height: "35px",
  },
  exportbutton: {
    marginTop: "25px",
    backgroundColor: "#1006f3eb !important",
    color: "white !important",
    height: "35px",
    width: "160px",
  },
  link: {
    color: "blue",
    marginTop: "30px",
  },
  text: {
    backgroundColor: "white",
    color: "gray",
  },
};

const useStyles = makeStyles(styles);
export default function WizardView() {
  const classes = useStyles();
  return (
    <GridContainer justify="center">
      <GridItem xs={4}>
        <a href="dashboard" className={classes.link}>
          &#8592; Retour aux fournisseurs
        </a>
      </GridItem>
      <GridItem xs={4}></GridItem>
      <GridItem xs={2}>
        <Button className={classes.text}>+ Créer un fournisseur</Button>
      </GridItem>
      <GridItem xs={2}>
        <Button className={classes.text}>Exporter</Button>
      </GridItem>

      <GridItem xs={12} sm={12}>
        <Wizard
          validate
          steps={[
            { stepName: "Général", stepComponent: Step1, stepId: "about" },
            {
              stepName: "Comptabilite",
              stepComponent: Step2,
              stepId: "account",
            },
            {
              stepName: "Coordonnées",
              stepComponent: Step3,
              stepId: "address",
            },
            { stepName: "Contact", stepComponent: Step4, stepId: "contact" },
            { stepName: "Tarifs", stepComponent: Step5, stepId: "tariff" },
            {
              stepName: "Historique",
              stepComponent: Step6,
              stepId: "Historique",
            },
          ]}
          subtitle="SAMPPA NORI"
          finishButtonClick={(e) => alert(e)}
        />
      </GridItem>
    </GridContainer>
  );
}
