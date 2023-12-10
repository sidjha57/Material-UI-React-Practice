import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { useState } from 'react';

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLButtonElement>,
    updatedFormats: string[],
  ) => {
    setFormats(updatedFormats);
    console.log(updatedFormats);
  };
  return (
    <Stack spacing={4}>
      <Typography variant="h5">Default Buttons</Typography>
      <Stack spacing={2} direction="row">
        {/* Used when we want to grab less attention in UI example card footer, or confirmation pop up  */}
        <Button variant="text" href="https://www.google.com">
          Text
        </Button>
        {/* Used when we want to grab attention used for primary action in UI example register, or save  */}
        <Button variant="contained">Contained</Button>
        {/* Used when we want to grab attention in between for secondary action UI example cancel and go back  */}
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Typography variant="h5">Buttons with provided colors</Typography>
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          Primary
        </Button>
        <Button variant="text" color="secondary">
          Secondary
        </Button>
        <Button variant="text" color="error">
          Error
        </Button>
        <Button variant="text" color="warning">
          Warning
        </Button>
        <Button variant="text" color="info">
          Info
        </Button>
        <Button variant="text" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="error">
          Error
        </Button>
        <Button variant="outlined" color="warning">
          Warning
        </Button>
        <Button variant="outlined" color="info">
          Info
        </Button>
        <Button variant="outlined" color="success">
          Success
        </Button>
      </Stack>

      <Typography variant="h5">Buttons with different Size</Typography>
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Contained
        </Button>
        <Button variant="contained" size="medium">
          Contained
        </Button>
        <Button variant="contained" size="large">
          Contained
        </Button>
      </Stack>

      <Typography variant="h5">Buttons with Icons</Typography>
      <Stack display="block" spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert('Send clicked')}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        {/* Applicabel for navigation buttons where labeled buttons would look too pronounced  */}
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Typography variant="h5">Buttons Group</Typography>
      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          color="secondary"
          orientation="vertical"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert('Left clicked')}>Left</Button>
          <Button onClick={() => alert('Center clicked')}>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Typography variant="h5">Toggle Button Group</Typography>
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          color='success'
          orientation='vertical'
        >
          <ToggleButton value="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
