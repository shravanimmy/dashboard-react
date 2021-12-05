import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Checkbox from "@material-ui/core/Checkbox";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";

import { dataTable } from "variables/general.js";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    fontSize: "13px",
    color: "gray",
  },
  cardIconTitles: {
    ...cardTitle,
    marginTop: "25px",
    marginBottom: "0px",
    marginLeft: "30px",
    fontWeight: "400",
    fontSize: "18px",
    color: "gray",
  },
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
};

const useStyles = makeStyles(styles);

export default function ReactTables() {
  const [data] = React.useState(
    dataTable.dataRows.map((prop, key) => {
      return {
        id: key,
        name: <Checkbox key="key" tabIndex={-1} />,
        position: prop[1],
        office: prop[2],
        age: prop[3],
        actions: (
          // we've added some custom button actions
          <div className="actions-right">
            {/* use this button to add a like kind of action */}
            <a href="aventes" className="voir">
              Voir
            </a>{" "}
            {/* use this button to remove the data row */}
          </div>
        ),
        btn: (
          // we've added some custom button actions
          <div className="">
            {/* use this button to add a like kind of action */}
            <Button
              simple
              onClick={() => {
                let obj = data.find((o) => o.id === key);
                alert(
                  "You've clicked EDIT button on \n{ \nName: " +
                    obj.name +
                    ", \nposition: " +
                    obj.position +
                    ", \noffice: " +
                    obj.office +
                    ", \nage: " +
                    obj.age +
                    "\n}."
                );
              }}
              className="success"
            >
              Active
            </Button>{" "}
            {/* use this button to remove the data row */}
          </div>
        ),
      };
    })
  );
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <GridContainer>
              <GridItem xs={4}>
                <h4 className={classes.cardIconTitles}>
                  Liste des fournisseurs
                </h4>
              </GridItem>
              <GridItem xs={4}></GridItem>
              <GridItem xs={2}>
                <Button className={classes.voirbutton}>
                  + Créer un fournisseur
                </Button>
              </GridItem>
              <GridItem xs={2}>
                <Button className={classes.exportbutton}>Exporter</Button>
              </GridItem>
            </GridContainer>
          </CardHeader>
          <CardBody className={classes.cardIconTitle}>
            <ReactTable
              columns={[
                {
                  Header: "",
                  accessor: "name",
                },
                {
                  Header: "Référence",
                  accessor: "position",
                },
                {
                  Header: "Raison sociale",
                  accessor: "office",
                },
                {
                  Header: "Status",
                  accessor: "btn",
                },
                {
                  Header: "Tx de commission",
                  accessor: "age",
                },
                {
                  Header: "",
                  accessor: "actions",
                },
              ]}
              data={data}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
