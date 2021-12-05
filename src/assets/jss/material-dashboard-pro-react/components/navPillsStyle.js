import {
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  whiteColor,
  blackColor,
  grayColor,
  hexToRgb,
} from "assets/jss/material-dashboard-pro-react.js";

const navPillsStyle = (theme) => ({
  root: {
    marginTop: "20px",
    paddingLeft: "0",
    marginBottom: "0",
    float: "right",
    overflow: "visible !important",
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "block",
      flexWrap: "wrap",
      float: "right",
    },
  },
  displayNone: {
    display: "none !important",
  },
  fixed: {
    overflow: "visible !important",
  },
  horizontalDisplay: {
    display: "block",
    float: "right",
  },
  pills: {
    float: "right",
    position: "relative",
    display: "block",
    padding: "10px 15px",
    color: grayColor[6],
    height: "auto",
    opacity: "1",
    margin: "0 0px",
    fontSize: "12px",
    maxWidth: "100%",
    minWidth: "100px",
    minHeight: "0px",
    textAlign: "center",
    transition: "all .3s",
    fontWeight: "500",
    lineHeight: "10px",
    borderRadius: "0px",
    textTransform: "uppercase",
    letterSpacing: "initial",
    border: "1px solid #00000017",
  },
  pillsWithIcons: {
    borderRadius: "4px",
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    display: "block",
    margin: "0px 0 !important",
    border: "1px solid black",
  },
  horizontalPills: {
    width: "100%",
    float: "right !important",
    "& + button": {
      margin: "0px 0",
    },
  },
  labelContainer: {
    padding: "0!important",
    color: "inherit",
  },
  label: {
    lineHeight: "24px",
    textTransform: "uppercase",
    fontSize: "12px",
    fontWeight: "500",
    position: "relative",
    display: "block",
    color: "inherit",
  },
  contentWrapper: {
    marginTop: "-20px",
    float: "right",
  },
  primary: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: "#1006f3eb",
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(primaryColor[0]) +
        ", 0.4)",
    },
  },
  info: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: infoColor[0],
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.4)",
    },
  },
  success: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: successColor[0],
      boxShadow:
        "0 2px 2px 0 rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.14), 0 3px 1px -2px rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.2), 0 1px 5px 0 rgba(" +
        hexToRgb(successColor[0]) +
        ", 0.12)",
    },
  },
  warning: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: warningColor[0],
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.4)",
    },
  },
  danger: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: dangerColor[0],
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ", 0.4)",
    },
  },
  rose: {
    "&,&:hover": {
      color: whiteColor,
      backgroundColor: roseColor[0],
      boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 7px 10px -5px rgba(" +
        hexToRgb(roseColor[0]) +
        ", 0.4)",
    },
  },
  alignCenter: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default navPillsStyle;
