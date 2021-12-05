import { whiteColor } from "assets/jss/material-dashboard-pro-react";
import {
  successColor,
  tooltip,
  cardTitle,
  grayColor,
} from "assets/jss/material-dashboard-pro-react.js";

import hoverCardStyle from "assets/jss/material-dashboard-pro-react/hoverCardStyle.js";

const dashboardStyle = {
  ...hoverCardStyle,
  tooltip,
  cardTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
    marginLeft: "20px",
  },
  cardProductTitle: {
    ...cardTitle,
    marginTop: "0px",
    marginBottom: "3px",
    textAlign: "center",
  },
  cardCategory: {
    color: whiteColor,
    fontSize: "14px",
    paddingTop: "10px",
    marginBottom: "0",
    marginTop: "0",
    margin: "0",
  },
  cardProductDesciprion: {
    textAlign: "center",
    color: grayColor[0],
  },
  margin: {
    marginLeft: "20px",
    marginRight: "20px",
  },
  report: {
    marginTop: "15px",
    marginBottom: "20px",
  },
  margins: {
    color: grayColor[2],
    fontSize: "11px",
    marginTop: "20px",
  },
  stats: {
    color: whiteColor,
    fontSize: "12px",
    marginTop: "-20px",
    lineHeight: "32px",
    display: "inline-flex",
    "& svg": {
      position: "relative",
      top: "4px",
      width: "16px",
      height: "16px",
      marginRight: "3px",
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      position: "relative",
      top: "4px",
      fontSize: "16px",
      marginRight: "3px",
    },
  },
  productStats: {
    paddingTop: "7px",
    paddingBottom: "7px",
    margin: "0",
  },
  successText: {
    color: successColor[0],
  },
  upArrowCardCategory: {
    width: 14,
    height: 14,
  },
  underChartIcons: {
    width: "17px",
    height: "17px",
  },
  price: {
    color: "inherit",
    "& h4": {
      marginBottom: "0px",
      marginTop: "0px",
    },
  },
};

export default dashboardStyle;
