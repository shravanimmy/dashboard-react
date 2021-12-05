import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// react plugin for creating vector maps
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";
import CardBody from "components/Card/CardBody.js";
// core components

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  colouredLinesChart,
} from "variables/charts";

import styles from "assets/jss/material-dashboard-pro-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={3}>
          <Card chart>
            <CardHeader color="info">
              <p className={classes.cardCategory}>9820 Online</p>
              <div className={classes.stats}>Members online</div>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card chart>
            <CardHeader color="primary">
              <p className={classes.cardCategory}>9820 Online</p>
              <div className={classes.stats}>Members online</div>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="warning">
              <p className={classes.cardCategory}>9820 Online</p>
              <div className={classes.stats}>Members online</div>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={completedTasksChart.data}
                type="Line"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3}>
          <Card chart className={classes.cardHover}>
            <CardHeader color="danger">
              <p className={classes.cardCategory}>9820 Online</p>
              <div className={classes.stats}>Members online</div>
              <ChartistGraph
                className="ct-chart-white-colors"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer justify="right">
        <GridItem xs={12} sm={12} md={12}>
          <NavPills
            color="primary"
            alignRight
            tabs={[
              {
                tabButton: "Day",
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
                      <ChartistGraph
                        data={colouredLinesChart.data}
                        type="Line"
                        options={colouredLinesChart.options}
                        listener={colouredLinesChart.animation}
                      />
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
                      <ChartistGraph
                        data={colouredLinesChart.data}
                        type="Line"
                        options={colouredLinesChart.options}
                        listener={colouredLinesChart.animation}
                      />
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "Year",
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
                      <ChartistGraph
                        data={colouredLinesChart.data}
                        type="Line"
                        options={colouredLinesChart.options}
                        listener={colouredLinesChart.animation}
                      />
                    </CardBody>
                  </Card>
                ),
              },
              {
                tabButton: "DOwnload",
                tabContent: (
                  <Card>
                    <CardHeader color="warning" icon>
                      <h4 className={classes.cardIconTitle}>
                        Download
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
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <GridContainer>
              <GridItem className={classes.margin} xs={12} sm={12} md={2}>
                <legend className={classes.margins}>
                  Visits <br />
                  29.072 Users(40%)
                </legend>
                <CustomLinearProgress
                  variant="determinate"
                  color="success"
                  className={classes.report}
                  value={40}
                />
              </GridItem>
              <GridItem className={classes.margin} xs={12} sm={12} md={2}>
                <legend className={classes.margins}>
                  Unique <br />
                  29.072 Users(20%)
                </legend>
                <CustomLinearProgress
                  variant="determinate"
                  color="info"
                  className={classes.report}
                  value={20}
                />
              </GridItem>
              <GridItem className={classes.margin} xs={12} sm={12} md={2}>
                <legend className={classes.margins}>
                  PageViews <br />
                  29.072 Users(60%)
                </legend>
                <CustomLinearProgress
                  variant="determinate"
                  color="warning"
                  className={classes.report}
                  value={60}
                />
              </GridItem>
              <GridItem className={classes.margin} xs={12} sm={12} md={2}>
                <legend className={classes.margins}>
                  New Users <br />
                  29.072 Users(80%)
                </legend>
                <CustomLinearProgress
                  variant="determinate"
                  color="danger"
                  className={classes.report}
                  value={80}
                />
              </GridItem>
              <GridItem className={classes.margin} xs={12} sm={12} md={2}>
                <legend className={classes.margins}>
                  Bounce Rate <br />
                  29.072 Users(40.1%)
                </legend>
                <CustomLinearProgress
                  variant="determinate"
                  color="primary"
                  className={classes.report}
                  value={40.1}
                />
              </GridItem>
            </GridContainer>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
