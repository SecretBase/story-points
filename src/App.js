import React, { useState } from "react";
import {
  FormGroup,
  Label,
  Input,
  Container,
  Grid,
  Cell,
  H5,
  Text
} from "styled-meow";

const App = () => {
  const [lastSprintWorkingDays, setLastSprintWorkingDays] = useState("10");
  const [lastSprintHoliday, setLastSprintHoliday] = useState("0");
  const [teamSize, setTeamSize] = useState("4");
  const [leaveDays, setLeaveDays] = useState("0");
  const [completeStoryPoints, setCompleteStoryPoints] = useState("99");

  const [nextSprintWorkingDays, setNextSprintWorkingDays] = useState("10");
  const [nextSprintHoliday, setNextSprintHoliday] = useState("0");
  const [nextLeaveDays, setNextLeaveDays] = useState("0");
  const [nextTeamSize, setNextTeamSize] = useState("4");

  const ippd =
    completeStoryPoints /
    (lastSprintWorkingDays -
      (parseFloat(lastSprintHoliday) + parseFloat(leaveDays) / teamSize)) /
    teamSize;

  const nextSprintCommitment =
    ippd *
    nextTeamSize *
    (nextSprintWorkingDays -
      (parseFloat(nextSprintHoliday) +
        parseFloat(nextLeaveDays) / nextTeamSize));

  return (
    <Container>
      <Grid>
        <Cell>
          <FormGroup>
            <Label htmlFor="lastSprintWorkingDays">
              Last Sprint Working Days
            </Label>
            <Input
              type="number"
              id="lastSprintWorkingDays"
              name="lastSprintWorkingDays"
              onChange={event => setLastSprintWorkingDays(event.target.value)}
              value={lastSprintWorkingDays}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="lastSprintHoliday">Last Sprint Holiday</Label>
            <Input
              type="number"
              id="lastSprintHoliday"
              name="lastSprintHoliday"
              min="0"
              onChange={event => setLastSprintHoliday(event.target.value)}
              value={lastSprintHoliday}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="teamSize">Team size</Label>
            <Input
              type="number"
              id="teamSize"
              name="teamSize"
              min="0"
              onChange={event => setTeamSize(event.target.value)}
              value={teamSize}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="leaveDays">Individual Leave Days</Label>
            <Input
              type="number"
              id="leaveDays"
              name="leaveDays"
              min="0"
              onChange={event => setLeaveDays(event.target.value)}
              value={leaveDays}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="completeStoryPoints">Completed Story Points</Label>
            <Input
              type="number"
              id="completeStoryPoints"
              name="completeStoryPoints"
              min="0"
              onChange={event => setCompleteStoryPoints(event.target.value)}
              value={completeStoryPoints}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="nextSprintWorkingDays">
              Next Sprint Working Days
            </Label>
            <Input
              type="number"
              id="nextSprintWorkingDays"
              name="nextSprintWorkingDays"
              min="0"
              onChange={event => setNextSprintWorkingDays(event.target.value)}
              value={nextSprintWorkingDays}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="nextSprintHoliday">Next Sprint Holiday</Label>
            <Input
              type="number"
              id="nextSprintHoliday"
              name="nextSprintHoliday"
              min="0"
              onChange={event => setNextSprintHoliday(event.target.value)}
              value={nextSprintHoliday}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="setNextLeaveDays">Individual Leave Days</Label>
            <Input
              type="number"
              id="setNextLeaveDays"
              name="setNextLeaveDays"
              min="0"
              onChange={event => setNextLeaveDays(event.target.value)}
              value={nextLeaveDays}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="nextTeamSize">Next Sprint Team Size</Label>
            <Input
              type="number"
              id="nextTeamSize"
              name="nextTeamSize"
              min="0"
              onChange={event => setNextTeamSize(event.target.value)}
              value={nextTeamSize}
            />
          </FormGroup>
        </Cell>
        <Cell>
          <H5>Individual Point per Day</H5>
          <Text>{ippd}</Text>
          <H5>Next Sprint Commitment</H5>
          <Text>{nextSprintCommitment}</Text>
        </Cell>
      </Grid>
    </Container>
  );
};

export default App;
