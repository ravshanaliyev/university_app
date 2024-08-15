// import { Stack, Link, Button, Container } from '@mui/material'
// import Logo from '../../assets/images/logo.svg'

// export default function Navbar() {
//   return (
//     <Container component="nav" maxWidth='lg'>
//       <Stack direction="row"
//         justifyContent="space-between"
//         alignItems="center"
//         spacing={2}
//         // width='1240px'
//         // margin='0 auto'
//         height='90px'
//       >
//         <img src={Logo} width={150} height={40} alt="" />
//         <Stack direction="row" alignItems="center" spacing={8} >
//           <Stack direction="row" alignItems="center"
//             spacing={2}>
//             <Link href='/' variant='body2' color="inherit" fontSize={16}>Our capabipties</Link>
//             <Link href='/' variant='body2' color="inherit" fontSize={16}>Our offers</Link>
//             <Link href='/' variant='body2' color="inherit" fontSize={16}>Reviews</Link>
//             <Link href='/' variant='body2' color="inherit" fontSize={16}>FAQ</Link>
//           </Stack>
//           <Stack direction="row" alignItems="center" spacing={2}>
//             <Button variant="soft" size='medium' color='primary'>Login</Button>
//             <Button variant="contained" size='medium' color='primary'>Sign up</Button>
//           </Stack>
//         </Stack>
//       </Stack>
//     </Container>
//   )
// }

import { Link, Stack, Button, Container, IconButton, useMediaQuery, } from '@mui/material';

import SvgColor from '../svg-color';
import Logo from '../../assets/images/logo.svg';

export default function Navbar() {
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));

  return (
    <Container component="nav" maxWidth='lg'>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={isMobile ? 1 : 2}
        height='90px'
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          {isMobile && (
            <IconButton>
              <SvgColor src="/assets/icons/navbar/ic_menu_item.svg" />
            </IconButton>
          )}
          <img src={Logo} width={isMobile ? 120 : 150} height={40} alt="Logo" />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={isMobile ? 2 : 8}>
          {!isMobile && (
            <Stack direction="row" alignItems="center" spacing={2}>
              <Link href='/' variant='body2' color="inherit" fontSize={16}>Our capabilities</Link>
              <Link href='/' variant='body2' color="inherit" fontSize={16}>Our offers</Link>
              <Link href='/' variant='body2' color="inherit" fontSize={16}>Reviews</Link>
              <Link href='/' variant='body2' color="inherit" fontSize={16}>FAQ</Link>
            </Stack>
          )}
          <Stack direction="row" alignItems="center" spacing={2}>
            <Button variant={!isMobile ? 'soft' : 'contained'} size='medium' color='primary'>Login</Button>
            {!isMobile && <Button variant="contained" size='medium' color='primary'>Sign up</Button>}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
