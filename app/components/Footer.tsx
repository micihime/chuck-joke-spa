import { Box, Link, Stack, Typography } from '@mui/material';
import FileIcon from '@mui/icons-material/InsertDriveFile';
import WindowIcon from '@mui/icons-material/Window';
import LanguageIcon from '@mui/icons-material/Language';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'background.paper',
                borderTop: 1,
                borderColor: 'divider'
            }}
        >
            <Stack
                direction="row"
                spacing={4}
                justifyContent="center"
                alignItems="center"
            >
                <Link
                    href="https://nextjs.org/learn"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'text.primary',
                        '&:hover': {
                            color: 'primary.main'
                        }
                    }}
                >
                    <FileIcon sx={{ fontSize: 20 }} />
                    <Typography>Learn</Typography>
                </Link>

                <Link
                    href="https://vercel.com/templates?framework=next.js"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'text.primary',
                        '&:hover': {
                            color: 'primary.main'
                        }
                    }}
                >
                    <WindowIcon sx={{ fontSize: 20 }} />
                    <Typography>Examples</Typography>
                </Link>

                <Link
                    href="https://nextjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        textDecoration: 'none',
                        color: 'text.primary',
                        '&:hover': {
                            color: 'primary.main'
                        }
                    }}
                >
                    <LanguageIcon sx={{ fontSize: 20 }} />
                    <Typography>Go to nextjs.org →</Typography>
                </Link>
            </Stack>
        </Box>
    );
}
