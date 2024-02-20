import * as React from "react";
import { Box, Card, CardContent, Accordion, AccordionDetails, AccordionGroup, AccordionSummary, accordionSummaryClasses, Checkbox, Input, selectClasses, Select, Option, Button } from "@mui/joy";
import { Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Add, Check, Close, KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { MdExpandMore } from "react-icons/md";

const Full_Assessment = ({ onFinish, value }) => {
    const [index, setIndex] = React.useState("");
    const [index2, setIndex2] = React.useState("");
    const [index3, setIndex3] = React.useState("");
    const [expanded, setExpanded] = React.useState([]);

    const handleAccordionChange = (index) => {
        const newExpanded = [...expanded];
        newExpanded[index] = !newExpanded[index];
        setExpanded(newExpanded);
    };

    const handleSubmit = () => {
        onFinish(value + 1);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 py-0">
                    <div className="shadow rounded py-5 px-3 d-flex flex-column gap-5">
                        <div>
                            <AccordionGroup disableDivider color="neutral" variant="soft" sx={{ maxWidth: "80%", marginX: "auto" }}>
                                {/* For Development Environment */}
                                <Accordion expanded={expanded[0]} onChange={() => handleAccordionChange(0)}>
                                    <AccordionSummary indicator={false}>
                                        <Typography className="w-100 d-flex align-items-center justify-content-between fw-bold">
                                            Development Environment
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
                                                <AccordionSummary indicator={<AddIcon />}>1. State the number of development servers</AccordionSummary>
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
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index === 1}
                                                onChange={(event, expanded) => {
                                                    setIndex(expanded ? 1 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>2. State the server type used - please select</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="rack">Rack</Option>
                                                                <Option value="blade">Blade</Option>
                                                                <Option value="midRange">Mid Range</Option>
                                                                <Option value="mainframe">Mainframe</Option>
                                                                <Option value="tower">Tower</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="rack">Rack</Option>
                                                                <Option value="blade">Blade</Option>
                                                                <Option value="midRange">Mid Range</Option>
                                                                <Option value="mainframe">Mainframe</Option>
                                                                <Option value="tower">Tower</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index === 2}
                                                onChange={(event, expanded) => {
                                                    setIndex(expanded ? 2 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>3. State the average refresh cycle for servers (years)</AccordionSummary>
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
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index === 3}
                                                onChange={(event, expanded) => {
                                                    setIndex(expanded ? 3 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>4. State the main processor manufacturer - please select</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Intel">Intel</Option>
                                                                <Option value="AMD">AMD</Option>
                                                                <Option value="Cisco">Cisco</Option>
                                                                <Option value="IBM">IBM</Option>
                                                                <Option value="HP">HP</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Intel">Intel</Option>
                                                                <Option value="AMD">AMD</Option>
                                                                <Option value="Cisco">Cisco</Option>
                                                                <Option value="IBM">IBM</Option>
                                                                <Option value="HP">HP</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index === 4}
                                                onChange={(event, expanded) => {
                                                    setIndex(expanded ? 4 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>5. Specify the number of physical CPU provisioned in each development environment</AccordionSummary>
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
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index === 5}
                                                onChange={(event, expanded) => {
                                                    setIndex(expanded ? 5 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>6. State the operating system used - please select</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Linux">Linux</Option>
                                                                <Option value="Windows">Windows</Option>
                                                                <Option value="Ubuntu">Ubuntu</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Linux">Linux</Option>
                                                                <Option value="Windows">Windows</Option>
                                                                <Option value="Ubuntu">Ubuntu</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionGroup>
                                    </AccordionDetails>
                                </Accordion>

                                {/* For Test Environment */}
                                <Accordion expanded={expanded[1]} onChange={() => handleAccordionChange(1)}>
                                    <AccordionSummary indicator={false}>
                                        <Typography className="w-100 d-flex align-items-center justify-content-between fw-bold">
                                            Test Environment
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
                                                <AccordionSummary indicator={<AddIcon />}>1. State the number of test servers</AccordionSummary>
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
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index2 === 1}
                                                onChange={(event, expanded) => {
                                                    setIndex2(expanded ? 1 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>2. State the server type used - please select</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="rack">Rack</Option>
                                                                <Option value="blade">Blade</Option>
                                                                <Option value="midRange">Mid Range</Option>
                                                                <Option value="mainframe">Mainframe</Option>
                                                                <Option value="tower">Tower</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="rack">Rack</Option>
                                                                <Option value="blade">Blade</Option>
                                                                <Option value="midRange">Mid Range</Option>
                                                                <Option value="mainframe">Mainframe</Option>
                                                                <Option value="tower">Tower</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index2 === 2}
                                                onChange={(event, expanded) => {
                                                    setIndex2(expanded ? 2 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>3. State the average refresh cycle for servers (years)</AccordionSummary>
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
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index2 === 3}
                                                onChange={(event, expanded) => {
                                                    setIndex2(expanded ? 3 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>4. State the main processor manufacturer - please select</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Intel">Intel</Option>
                                                                <Option value="AMD">AMD</Option>
                                                                <Option value="Cisco">Cisco</Option>
                                                                <Option value="IBM">IBM</Option>
                                                                <Option value="HP">HP</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Intel">Intel</Option>
                                                                <Option value="AMD">AMD</Option>
                                                                <Option value="Cisco">Cisco</Option>
                                                                <Option value="IBM">IBM</Option>
                                                                <Option value="HP">HP</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index2 === 4}
                                                onChange={(event, expanded) => {
                                                    setIndex2(expanded ? 4 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>5. Specify the number of physical CPU provisioned in each development environment</AccordionSummary>
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
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index2 === 5}
                                                onChange={(event, expanded) => {
                                                    setIndex2(expanded ? 5 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>6. State the operating system used - please select</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="originalBuildEstimate">Original Build Estimate</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="originalBuildEstimate" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Linux">Linux</Option>
                                                                <Option value="Windows">Windows</Option>
                                                                <Option value="Ubuntu">Ubuntu</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", my: 2 }}>
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Release</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Linux">Linux</Option>
                                                                <Option value="Windows">Windows</Option>
                                                                <Option value="Ubuntu">Ubuntu</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionGroup>
                                    </AccordionDetails>
                                </Accordion>

                                {/* For Production Environment */}
                                <Accordion expanded={expanded[2]} onChange={() => handleAccordionChange(2)}>
                                    <AccordionSummary indicator={false}>
                                        <Typography className="w-100 d-flex align-items-center justify-content-between fw-bold">
                                            Production Environment
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
                                                <AccordionSummary indicator={<AddIcon />}>1. State the number of test servers</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index3 === 1}
                                                onChange={(event, expanded) => {
                                                    setIndex3(expanded ? 1 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>2. State the server type used - please select</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="rack">Rack</Option>
                                                                <Option value="blade">Blade</Option>
                                                                <Option value="midRange">Mid Range</Option>
                                                                <Option value="mainframe">Mainframe</Option>
                                                                <Option value="tower">Tower</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index3 === 2}
                                                onChange={(event, expanded) => {
                                                    setIndex3(expanded ? 2 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>3. State the average refresh cycle for servers (years)</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index3 === 3}
                                                onChange={(event, expanded) => {
                                                    setIndex3(expanded ? 3 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>4. State the main processor manufacturer - please select</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Intel">Intel</Option>
                                                                <Option value="AMD">AMD</Option>
                                                                <Option value="Cisco">Cisco</Option>
                                                                <Option value="IBM">IBM</Option>
                                                                <Option value="HP">HP</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index3 === 4}
                                                onChange={(event, expanded) => {
                                                    setIndex3(expanded ? 4 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>5. Specify the number of physical CPU provisioned in each development environment</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" />
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>

                                            <Accordion expanded={index3 === 5}
                                                onChange={(event, expanded) => {
                                                    setIndex3(expanded ? 5 : null);
                                                }} sx={{ mb: 1 }}>
                                                <AccordionSummary indicator={<AddIcon />}>6. State the operating system used - please select</AccordionSummary>
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
                                                        <Typography className="mb-0" component="label" htmlFor="releaseInput">Use</Typography>
                                                        <div className="d-flex align-items-center gap-3 w-50">
                                                            {/* <Input className="w-100" id="releaseInput" placeholder="Enter Here" variant="outlined" /> */}

                                                            <Select className="w-100" placeholder="Choose Select">
                                                                <Option value="Linux">Linux</Option>
                                                                <Option value="Windows">Windows</Option>
                                                                <Option value="Ubuntu">Ubuntu</Option>
                                                                <Option value="other">Other</Option>
                                                            </Select>
                                                        </div>
                                                    </Box>
                                                </AccordionDetails>
                                            </Accordion>
                                        </AccordionGroup>
                                    </AccordionDetails>
                                </Accordion>
                            </AccordionGroup>

                            <Box sx={{ width: "80%", mx: "auto", my: 3, display: "flex", justifyContent: "end", gap: 2, flexWrap: 'wrap' }}>
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

export default Full_Assessment