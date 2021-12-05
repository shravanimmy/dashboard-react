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
import { blackColor } from "assets/jss/material-dashboard-pro-react";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    color: blackColor,
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
              className="voir"
            >
              Voir
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
            <h4 className={classes.cardIconTitle}>React Table</h4>
          </CardHeader>
          <CardBody className={classes.cardIconTitle}>
            <ReactTable
              columns={[
                {
                  Header: "Name",
                  accessor: "name",
                },
                {
                  Header: "Position",
                  accessor: "position",
                },
                {
                  Header: "Office",
                  accessor: "office",
                },
                {
                  Header: "Age",
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
