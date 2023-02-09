// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ContactPhoneTwoToneIcon from '@mui/icons-material/ContactPhoneTwoTone';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
// import Icon from '@mui/material/Icon';
const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16,
          // boxSizing: 'content-box',
          padding: '10px',
          fontSize: '50rem',
          
        },
      },
    },
  },
});
export default function Home() {
  return (
     <Box 
      sx={{
        '& > :not(style)': {
          display:'flex',
          width: '580px',
          height: '180px',
          m: '300px auto ',
        },
      }}
    >
      <ThemeProvider theme={theme}>
        <Chip icon={<ContactPhoneTwoToneIcon
          sx={{
        fontSize: 180,
          }}
        />
        }
          label="Phonebook" fontSize="large" 
           sx={{
        fontSize: 60,
          }}
        />
      </ThemeProvider>
    </Box>
    // <div style={styles.container}>
    //   <h1 style={styles.title}>
    //     Task manager welcome page{' '}
    //     <span role="img" aria-label="Greeting icon">
    //       ☎️
    //     </span>
    //   </h1>
    // </div>
  );
}