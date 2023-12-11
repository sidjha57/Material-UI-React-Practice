import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from '@mui/material';
import { useState } from 'react';

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  console.log({ acceptTnC });
  const [skills, setSkills] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  const handleSkillsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index == -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          control={<Checkbox onChange={handleChange} checked={acceptTnC} />}
          label="I accept terms and conditions"
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes('html')}
                  onChange={handleSkillsChange}
                />
              }
              label="HTML"
              value="html"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes('css')}
                  onChange={handleSkillsChange}
                />
              }
              label="CSS"
              value="css"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes('javascript')}
                  onChange={handleSkillsChange}
                />
              }
              label="JavaScript"
              value="javascript"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
