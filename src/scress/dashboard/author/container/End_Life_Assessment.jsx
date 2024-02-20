import * as React from "react";
import { Box, Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Checkbox, Input, Select, Option, Button } from "@mui/joy";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Check, Close, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const End_Life_Assessment = ({ value, onFinish, handleSubmitWebForm }) => {
    const [index, setIndex] = React.useState("");
    const [index2, setIndex2] = React.useState("");
    const [index3, setIndex3] = React.useState("");
    const [index4, setIndex4] = React.useState("");
    const [index5, setIndex5] = React.useState("");
    const [index6, setIndex6] = React.useState("");
    const [expanded, setExpanded] = React.useState([]);

    const handleAccordionChange = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    const handleSubmit = () => {
        onFinish(value + 1);
        handleSubmitWebForm(value + 1);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 py-0">
                    <div className="shadow rounded py-5 px-3 d-flex flex-column gap-5">
                        <div>
                            <AccordionGroup disableDivider color="neutral" variant="soft" sx={{ maxWidth: "100%", marginX: "auto", py: 2 }}>
                                {/* For Internal People Environment */}
                                <Accordion expanded={expanded[0]} onChange={() => handleAccordionChange(0)}>
                                    <AccordionSummary indicator={false}>
                                        <Typography className="w-100 d-flex align-items-center justify-content-between fw-bold">
                                            Internal People
                                            <Button variant="soft" color="primary" startDecorator={expanded[0] ? <KeyboardArrowUp /> : <KeyboardArrowDown />} >
                                                {expanded[0] ? "Collapse All" : "Expand All"}
                                            </Button>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <AccordionGroup disableDivider color="neutral" variant="soft">
                                            <Accordion expanded={index === 0}
                                                onChange={(event, expanded) => {
                                                    setIndex(expanded ? 0 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>1. State the number of Developer, Test/Quality and directly associated product FTE in location</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="locationInput">Specify Location</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="locationInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="useInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="useInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index === 1}
                                                onChange={(event, expanded) => {
                                                    setIndex(expanded ? 1 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>2. State the number of Developer, Test/Quality and directly associated product FTE in location</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="locationInput">Specify Location</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="locationInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="useInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="useInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index === 2}
                                                onChange={(event, expanded) => {
                                                    setIndex(expanded ? 2 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>3. State the number of Developer, Test/Quality and directly associated product FTE in location</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="locationInput">Specify Location</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="locationInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="useInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="useInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionGroup>
                                    </AccordionDetails>
                                </Accordion>

                                {/* For External People Environment */}
                                <Accordion expanded={expanded[1]} onChange={() => handleAccordionChange(1)}>
                                    <AccordionSummary indicator={false}>
                                        <Typography className="w-100 d-flex align-items-center justify-content-between fw-bold">
                                            External People
                                            <Button variant="soft" color="primary" startDecorator={expanded[1] ? <KeyboardArrowUp /> : <KeyboardArrowDown />} >
                                                {expanded[1] ? "Collapse All" : "Expand All"}
                                            </Button>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <AccordionGroup disableDivider color="neutral" variant="soft">
                                            <Accordion expanded={index2 === 0}
                                                onChange={(event, expanded) => {
                                                    setIndex2(expanded ? 0 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>1. State the number of Developer, Test/Quality and directly associated product FTE in location</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="locationInput">Specify Location</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="locationInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="useInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="useInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index2 === 1}
                                                onChange={(event, expanded) => {
                                                    setIndex2(expanded ? 1 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>2. State the number of Developer, Test/Quality and directly associated product FTE in location</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="locationInput">Specify Location</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="locationInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="useInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="useInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index2 === 2}
                                                onChange={(event, expanded) => {
                                                    setIndex2(expanded ? 2 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>3. State the number of Developer, Test/Quality and directly associated product FTE in location</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="locationInput">Specify Location</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="locationInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="useInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="useInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionGroup>
                                    </AccordionDetails>
                                </Accordion>

                                {/* For Variables Environment */}
                                <Accordion expanded={expanded[2]} onChange={() => handleAccordionChange(2)}>
                                    <AccordionSummary indicator={false}>
                                        <Typography className="w-100 d-flex align-items-center justify-content-between fw-bold">
                                            Variables
                                            <Button variant="soft" color="primary" startDecorator={expanded[2] ? <KeyboardArrowUp /> : <KeyboardArrowDown />} >
                                                {expanded[2] ? "Collapse All" : "Expand All"}
                                            </Button>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <AccordionGroup disableDivider color="neutral" variant="soft">
                                            <Accordion expanded={index3 === 0}
                                                onChange={(event, expanded) => {
                                                    setIndex3(expanded ? 0 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>1. Estimate the average % time allocated to the assessed product across all FTE</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index3 === 1}
                                                onChange={(event, expanded) => {
                                                    setIndex3(expanded ? 1 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>2. Estimate the % FTE in developer / software engineering roles from total FTE above</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index3 === 2}
                                                onChange={(event, expanded) => {
                                                    setIndex3(expanded ? 2 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>3. Specifiy Time (months) effort to decommission applications</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionGroup>
                                    </AccordionDetails>
                                </Accordion>

                                {/* For Travel Internal Staff Related Environment */}
                                <Accordion expanded={expanded[3]} onChange={() => handleAccordionChange(3)}>
                                    <AccordionSummary indicator={false}>
                                        <Typography className="w-100 d-flex align-items-center justify-content-between fw-bold">
                                            Travel Internal Staff Related
                                            <Button variant="soft" color="primary" startDecorator={expanded[3] ? <KeyboardArrowUp /> : <KeyboardArrowDown />} >
                                                {expanded[3] ? "Collapse All" : "Expand All"}
                                            </Button>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <AccordionGroup disableDivider color="neutral" variant="soft">
                                            <Accordion expanded={index4 === 0}
                                                onChange={(event, expanded) => {
                                                    setIndex4(expanded ? 0 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>1. Estimate total number of airmiles travelled during product phase</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index4 === 1}
                                                onChange={(event, expanded) => {
                                                    setIndex4(expanded ? 1 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>2. Estimate the number of commute bus trips per person per day</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index4 === 2}
                                                onChange={(event, expanded) => {
                                                    setIndex4(expanded ? 2 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>3. Estimate the number of commute train trips per person per day</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index4 === 3}
                                                onChange={(event, expanded) => {
                                                    setIndex4(expanded ? 3 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>4. Estimate the number of commute car trips per person per day</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionGroup>
                                    </AccordionDetails>
                                </Accordion>

                                {/* For Travel External Staff Related Environment */}
                                <Accordion expanded={expanded[4]} onChange={() => handleAccordionChange(4)}>
                                    <AccordionSummary indicator={false}>
                                        <Typography className="w-100 d-flex align-items-center justify-content-between fw-bold">
                                            Travel External Staff Related
                                            <Button variant="soft" color="primary" startDecorator={expanded[4] ? <KeyboardArrowUp /> : <KeyboardArrowDown />} >
                                                {expanded[4] ? "Collapse All" : "Expand All"}
                                            </Button>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <AccordionGroup disableDivider color="neutral" variant="soft">
                                            <Accordion expanded={index5 === 0}
                                                onChange={(event, expanded) => {
                                                    setIndex5(expanded ? 0 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>1. Estimate total number of airmiles travelled during product phase</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index5 === 1}
                                                onChange={(event, expanded) => {
                                                    setIndex5(expanded ? 1 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>2. Estimate the number of commute bus trips per person per day</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index5 === 2}
                                                onChange={(event, expanded) => {
                                                    setIndex5(expanded ? 2 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>3. Estimate the number of commute train trips per person per day</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index5 === 3}
                                                onChange={(event, expanded) => {
                                                    setIndex5(expanded ? 3 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>4. Estimate the number of commute car trips per person per day</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionGroup>
                                    </AccordionDetails>
                                </Accordion>

                                {/* For Tooling Environment */}
                                <Accordion expanded={expanded[5]} onChange={() => handleAccordionChange(5)}>
                                    <AccordionSummary indicator={false}>
                                        <Typography className="w-100 d-flex align-items-center justify-content-between fw-bold">
                                            Tooling
                                            <Button variant="soft" color="primary" startDecorator={expanded[5] ? <KeyboardArrowUp /> : <KeyboardArrowDown />} >
                                                {expanded[5] ? "Collapse All" : "Expand All"}
                                            </Button>
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <AccordionGroup disableDivider color="neutral" variant="soft">
                                            <Accordion expanded={index6 === 0}
                                                onChange={(event, expanded) => {
                                                    setIndex6(expanded ? 0 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>1. Select main video collaboration tool used</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="toolSelect">Tool</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Select id="toolSelect" className="w-100" placeholder="Choose Select">
                                                                <Option value="none">None</Option>
                                                                <Option value="zoom">Zoom</Option>
                                                                <Option value="teams">Teams</Option>
                                                                <Option value="googleMeet">Goodle Meet</Option>
                                                                <Option value="cisco">Cisco</Option>
                                                                <Option value="skype">Skype</Option>
                                                                <Option value="amazonChime">Amazon Chime</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index6 === 1}
                                                onChange={(event, expanded) => {
                                                    setIndex6(expanded ? 1 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>2. Estimate the number of commute bus trips per person per day</AccordionSummary>
                                                <AccordionDetails sx={{ border: "1px solid #d0d0d0", bgcolor: "white", my: 3, mx: 0, px: 3 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label">Select Source Type</Typography>
                                                        <div className="d-flex align-items-center justify-content-center gap-5 w-50">
                                                            <Checkbox name="sourceType" label="Primary" />
                                                            <Checkbox name="sourceType" label="Secondary" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="dataSource">Enter Data Source</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="dataSource" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="numberFTE">Number of FTE</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="numberFTE" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionGroup>

                            {/* For Cancel & Save Button */}
                            <Box sx={{ width: "100%", mx: "auto", my: 3, display: "flex", justifyContent: "end", gap: 2, flexWrap: 'wrap' }}>
                                <Button variant="soft" startDecorator={<Close />}>
                                    Cancel
                                </Button>
                                <Button startDecorator={<Check />} onClick={handleSubmit} color="success">
                                    Save
                                </Button>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default End_Life_Assessment