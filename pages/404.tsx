import { Title, Text, Button, Container, Group } from '@mantine/core';
import Link from 'next/link';
import classes from '../styles/NotFound.module.css';

export default function NotFound() {
  return (
    <Container className={classes.root}>
      <div className={classes.label}>
        <span aria-hidden="true">404</span>
        404
        <span aria-hidden="true">404</span>
      </div>
      <Title className={classes.title}>Anda menemukan tempat rahasia.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Sepertinya Anda mengikuti tautan yang rusak, atau Anda mengetik URL yang salah.
      </Text>
      <Group justify="center">
        <Button component={Link} href="/" variant="light" size="lg">
          Bawa saya kembali ke halaman utama
        </Button>
      </Group>
    </Container>
  );
}