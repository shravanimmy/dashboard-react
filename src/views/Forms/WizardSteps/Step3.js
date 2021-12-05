import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import CustomInput from "components/CustomInput/CustomInput.js";
import InputAdornment from "@material-ui/core/InputAdornment";
// import FormLabel from "@material-ui/core/FormLabel";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
//import Button from "components/CustomButtons/Button.js";

import Check from "@material-ui/icons/Check";

import styles from "assets/jss/material-dashboard-pro-react/views/extendedTablesStyle.js";

const useStyles = makeStyles(styles);

const Step3 = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [simpleSelect, setsimpleSelect] = React.useState("");
  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
    sendState: () => {
      return sendState();
    },
    state: {
      simpleSelect,
    },
  }));
  const sendState = () => {
    return {
      simpleSelect,
    };
  };
  const isValidated = () => {
    return true;
  };
  return (
    <GridContainer justify="center">
      <GridItem xs={12}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={4}>
            <CustomInput
              id="text3"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                startAdornment: (
                  <InputAdornment position="start">Search: </InputAdornment>
                ),
              }}
            />
          </GridItem>
          <GridItem xs={12} sm={7}></GridItem>
          <GridItem xs={12} sm={1}>
            <FormControl fullWidth className={classes.selectFormControl}>
              <InputLabel
                htmlFor="simple-select-step-3"
                className={classes.selectLabel}
              >
                Items
              </InputLabel>
              <Select
                MenuProps={{
                  className: classes.selectMenu,
                }}
                classes={{
                  select: classes.select,
                }}
                value={simpleSelect}
                onChange={(value) => {
                  setsimpleSelect(value.target.value);
                }}
                inputProps={{
                  name: "simpleSelect",
                  id: "simple-select-step-3",
                }}
              >
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                  }}
                >
                  5
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="2"
                >
                  10
                </MenuItem>
                <MenuItem
                  classes={{
                    root: classes.selectMenuItem,
                    selected: classes.selectMenuItemSelected,
                  }}
                  value="3"
                >
                  15
                </MenuItem>
              </Select>
            </FormControl>
          </GridItem>
        </GridContainer>

        <Table
          striped
          tableHead={[
            "",
            "Id adresse",
            "Adresse",
            "Code postal",
            "Ville",
            "Pays",
          ]}
          tableData={[
            [
              <Checkbox
                key="key"
                className={classes.positionAbsolute}
                tabIndex={-1}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot,
                }}
              />,
              "Moleskine Agenda",
              "Office",
              "25",
              "Périgny",
              "France",
            ],
            [
              <Checkbox
                key="key"
                className={classes.positionAbsolute}
                tabIndex={-1}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot,
                }}
              />,
              "Stabilo Pen",
              "Office",
              "30",
              "France",
              "France",
            ],
            [
              <Checkbox
                key="key"
                className={classes.positionAbsolute}
                tabIndex={-1}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot,
                }}
              />,
              "A4 Paper Pack",
              "Office",
              "50",
              "France",
              "France",
            ],
            [
              <Checkbox
                key="key"
                className={classes.positionAbsolute}
                tabIndex={-1}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot,
                }}
              />,
              "Apple iPhone",
              "Communication",
              "10",
              "France",
              "France",
            ],
            // { total: true, colspan: "5", amount: "€12,999" },
          ]}
          customCellClasses={[classes.center, classes.right, classes.right]}
          customClassesForCells={[0, 5, 6]}
          customHeadCellClasses={[classes.center, classes.right, classes.right]}
          customHeadClassesForCells={[0, 5, 6]}
        />
      </GridItem>
    </GridContainer>
  );
});

Step3.displayName = "Step3";

export default Step3;
