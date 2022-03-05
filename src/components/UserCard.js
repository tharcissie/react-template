import React from 'react'
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Table from '@material-ui/core/Table';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { useContainedCardHeaderStyles } from '@mui-treasury/styles/cardHeader/contained';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(({ spacing }) => ({
    card: {
        marginTop: 40,
        borderRadius: spacing(0.5),
        transition: '0.3s',
        width: '9cm',
        overflow: 'initial',
        background: '#ffffff',
    },
    h: {
        background: '#03045E',
    },
    content: {
        paddingTop: 0,
        textAlign: 'left',
        overflowX: 'auto',
        '& table': {
            marginBottom: 0,
        }
    },
}));



const UserCard = React.memo(function ElevatedHeaderCard() {
    const classes = useStyles();
    const cardHeaderStyles = useContainedCardHeaderStyles();
    const cardShadowStyles = useSoftRiseShadowStyles({ inactive: true });
    const cardHeaderShadowStyles = useFadedShadowStyles();
    return (
        <Card className={cx(classes.card, cardShadowStyles.root)}>
            <CardHeader
                className={cardHeaderShadowStyles.root, cx(classes.h)}
                classes={cardHeaderStyles}
                title={'Yves Byiringiro'}
                subheader={'byiringiro@gmail.com'}
            />
            <CardContent className={classes.content}>
                <Table>
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                                City:
                            </TableCell>
                            <TableCell align="right">Kigali</TableCell>
                        </TableRow>
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                                Street:
                            </TableCell>
                            <TableCell align="right">k23</TableCell>
                        </TableRow>
                        <TableRow key={1}>
                            <TableCell  component="th" scope="row">
                                Phone:
                            </TableCell>
                            <TableCell align="right">+122 223 2222</TableCell>
                        </TableRow>
                        <TableRow key={1}>
                            <TableCell component="th" scope="row">
                               <Link style={{color:'#03045E', textDecoration:'none'}} to='/posts'> <DynamicFeedIcon/>Posts</Link>
                            </TableCell>
                            <TableCell align="right"><Link  style={{color:'#03045E', textDecoration:'none'}}  to='albums'><PhotoAlbumIcon/>Albums</Link></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
});

export default UserCard