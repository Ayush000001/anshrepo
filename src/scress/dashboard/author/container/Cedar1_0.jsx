import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import Information from "./Information";
import Summary from "./Summary";
import Full_Assessment from "./Full_Assessment";
import OriginalBuildEstimate from "./OriginalBuildEstimate";
import People_Travel_Tools from "./People_Travel_Tools";
import End_Life_Assessment from "./End_Life_Assessment";
import Form_Completed from "./Form_Completed";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Cedar1_0 = () => {
  const [value, setValue] = React.useState(0);

  // this state for a success message regarding that the user successfully completed all the forms of particular web form
  const [finishForm, setFinishForm] = React.useState(false);

  // for enabling the next tasks
  const [tabsEnabled, setTabsEnabled] = React.useState([true, false, false, false, false, false]);

  // for making the checked type icon on the tab which are completed
  const [completedTabs, setCompletedTabs] = React.useState(new Array(6).fill(false));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFinishInformation = (value) => {
    // Enable the second tab when the button in the Information tab is clicked
    const newTabsEnabled = [...tabsEnabled];
    newTabsEnabled[value] = true;
    setTabsEnabled(newTabsEnabled);

    // mark complete the current tab
    const newCompletedTabs = [...completedTabs];
    newCompletedTabs[value - 1] = true;
    setCompletedTabs(newCompletedTabs);

    // Switch to the second tab
    setValue(value);
  };

  const handleFinishSummary = (value) => {
    // Enable the second tab when the button in the Information tab is clicked
    const newTabsEnabled = [...tabsEnabled];
    newTabsEnabled[value] = true;
    setTabsEnabled(newTabsEnabled);

    const newCompletedTabs = [...completedTabs];
    newCompletedTabs[value - 1] = true;
    setCompletedTabs(newCompletedTabs);

    // Switch to the second tab
    setValue(value);
  };

  const handleStartSummary = (value) => {
    // Enable the second tab when the button in the Information tab is clicked
    const newTabsEnabled = [...tabsEnabled];
    newTabsEnabled[value] = false;
    setTabsEnabled(newTabsEnabled);
  };

  const handleFinishSummaryCheck = (value) => {
    // mark complete the current tab
    const newCompletedTabs = [...completedTabs];
    newCompletedTabs[value - 2] = true;
    setCompletedTabs(newCompletedTabs);

    // Switch to the second tab
    setValue(value);
  };

  // For Summary Save Button - When its more than 3 year
  const handleSummaryOriginal = (value, currentValue) => {
    // Enable the next tab
    const newTabsEnabled = [...tabsEnabled];
    newTabsEnabled[value] = true;
    setTabsEnabled(newTabsEnabled);

    // mark complete the current tab
    const newCompletedTabs = [...completedTabs];
    newCompletedTabs[currentValue] = true;
    setCompletedTabs(newCompletedTabs);

    // Switch to the second tab
    setValue(value);
  };

  // For Summary Save Button - When its less than 3 year
  const handleSummaryFull = (value, currentValue) => {
    // Enable the next tab
    const newTabsEnabled = [...tabsEnabled];
    newTabsEnabled[value] = true;
    setTabsEnabled(newTabsEnabled);

    // mark complete the current tab
    const newCompletedTabs = [...completedTabs];
    newCompletedTabs[currentValue] = true;
    setCompletedTabs(newCompletedTabs);

    // Switch to the second tab
    setValue(value);
  };

  const handleSubmitWebForm = (value) => {
    setFinishForm(true);
    handleFinishInformation(value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 mx-auto py-5">
          <div className="shadow rounded px-4 py-5 bg-light">
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label={
                  <div className="d-flex align-items-center gap-2 fw-bold">
                    INFORMATION
                    {completedTabs[0] && <IoMdCheckmarkCircleOutline color="green" size={28} />}
                  </div>
                } />
                <Tab label={
                  <div className="d-flex align-items-center gap-2 fw-bold">
                    SUMMARY DATA
                    {completedTabs[1] && <IoMdCheckmarkCircleOutline color="green" size={28} />}
                  </div>
                } disabled={!tabsEnabled[1]} />
                <Tab label={
                  <div className="d-flex align-items-center gap-2 fw-bold">
                    ORIGINAL BUILD ESTIMATE
                    {completedTabs[2] && <IoMdCheckmarkCircleOutline color="green" size={28} />}
                  </div>
                } disabled={!tabsEnabled[2]} />
                <Tab label={
                  <div className="d-flex align-items-center gap-2 fw-bold">
                    FULL ASSESSMENT
                    {completedTabs[3] && <IoMdCheckmarkCircleOutline color="green" size={28} />}
                  </div>
                } disabled={!tabsEnabled[3]} />
                <Tab label={
                  <div className="d-flex align-items-center gap-2 fw-bold">
                    PEOPLE, TRAVEL & TOOLS
                    {completedTabs[4] && <IoMdCheckmarkCircleOutline color="green" size={28} />}
                  </div>
                } disabled={!tabsEnabled[4]} />
                <Tab label={
                  <div className="d-flex align-items-center gap-2 fw-bold">
                    END OF LIFE ASSESSMENT
                    {completedTabs[5] && <IoMdCheckmarkCircleOutline color="green" size={28} />}
                  </div>
                } disabled={!tabsEnabled[5]} />
              </Tabs>
            </Box>

            <CustomTabPanel value={value} index={0}>
              <Information value={value} onFinish={handleFinishInformation} />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
              <Summary currentValue={value} value={value} handleFinishSummaryCheck={handleFinishSummaryCheck} handleStartSummary={handleStartSummary} handleFinishSummary={handleFinishSummary} onFinish={handleFinishInformation} onSummaryFinishFull={handleSummaryFull} onSummaryFinishOriginal={handleSummaryOriginal} />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
              <OriginalBuildEstimate value={value} onFinish={handleFinishInformation} />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={3}>
              <Full_Assessment value={value} onFinish={handleFinishInformation} />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={4}>
              <People_Travel_Tools value={value} onFinish={handleFinishInformation} />
            </CustomTabPanel>

            <CustomTabPanel value={value} index={5}>
              <End_Life_Assessment value={value} onFinish={handleFinishInformation} handleSubmitWebForm={handleSubmitWebForm} />
            </CustomTabPanel>

            {finishForm && <CustomTabPanel value={value} index={6}>
              <Form_Completed />
            </CustomTabPanel>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cedar1_0