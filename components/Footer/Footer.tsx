import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text, Image } from '@mantine/core';
import SVGComponent from '../Logo/Logo';
import classes from './Footer.module.css';

const data = [
  {
    title: 'Fitur',
    links: [
      { label: 'Beranda', link: '#' },
      { label: 'Solusi', link: '#' },
      { label: 'Tentang', link: '#' },
      { label: 'Blog', link: '#' },
      { label: 'Dukungan', link: '#' },
    ],
  },
  {
    title: 'Solusi',
    links: [
      { label: 'Manufaktur', link: '#' },
      { label: 'Perdagangan', link: '#' },
      { label: 'Jasa', link: '#' },
    ],
  },
  {
    title: 'Bantuan',
    links: [
      { label: 'Pusat Bantuan', link: '#' },
      { label: 'FAQ', link: '#' },
      { label: 'Kebijakan Privasi', link: '#' },
      { label: 'Syarat dan Ketentuan', link: '#' },
    ],
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size='xl' className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src='/fimosaLogo.png'
            h={40}
            w='auto'
          />
          <Text size="sm" c="dimmed" className={classes.description}>
            Bangun bisnis yang lebih efisien dan modern dengan solusi ERP terintegrasi dari Fimosa.
          </Text>
          <Group gap={0} className={classes.social} wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container size='xl' className={classes.afterFooter}>
        <Text ta='center' c="dimmed" size="sm" w='100%'>
          © {currentYear} Create with Love - <strong> Fimosa </strong> All rights reserved.
        </Text>
      </Container>
    </footer>
  );
}