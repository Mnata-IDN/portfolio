import {
  IconChevronDown,
  IconArrowRight,
  IconBuildingFactory,
  IconShoppingCart,
  IconBriefcase,
  IconDatabaseOff,
  IconPackageOff,
  IconManualGearbox,
  IconReceipt2,
  IconChartBar,
  IconBuildingWarehouse,
} from '@tabler/icons-react';
import {
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Container,
  Drawer,
  Group,
  HoverCard,
  Card,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
  Stack,
  Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link'
import SVGComponent from '../Logo/Logo';
import classes from './Header.module.css';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle'

const mockdata = [
  {
    title: "Sektor bisnis",
    items: [
      {
        icon: IconBuildingFactory,
        title: 'Manufaktur',
        description: 'Mendukung pengelolaan produksi, bahan baku, dan alur kerja pabrik secara efisien.',
        link: '/solutions/manufacturing',
      },
      {
        icon: IconShoppingCart,
        title: 'Perdagangan',
        description: 'Mempermudah transaksi, manajemen penjualan, dan distribusi produk.',
        link: '/solutions/retail',
      },
      {
        icon: IconBriefcase,
        title: 'Jasa',
        description: 'Mengelola layanan, penjadwalan, serta hubungan dengan pelanggan.',
        link: '/solutions/services',
      },
    ]
  },
  {
    title: "Permasalahan",
    items: [
      {
        icon: IconDatabaseOff,
        title: 'Data Terpisah',
        description: 'Informasi bisnis masih tersebar di banyak sistem dan sulit diintegrasikan.',
        link: '/problems/data-silos',
      },
      {
        icon: IconPackageOff,
        title: 'Stok Tidak Terkelola',
        description: 'Persediaan tidak terpantau dengan baik sehingga berpotensi menimbulkan kerugian.',
        link: '/problems/inventory-management',
      },
      {
        icon: IconManualGearbox,
        title: 'Proses Manual',
        description: 'Operasional masih dilakukan secara manual, mengurangi efisiensi kerja.',
        link: '/problems/manual-processes',
      },
    ]
  },
  {
    title: "Fitur Utama",
    items: [
      {
        icon: IconReceipt2,
        title: 'Keuangan',
        description: 'Mengotomatiskan pencatatan transaksi, laporan keuangan, dan pengelolaan anggaran.',
        link: '/finance',
      },
      {
        icon: IconChartBar,
        title: 'Penjualan',
        description: 'Meningkatkan proses penjualan dengan integrasi sistem pelanggan dan inventaris.',
        link: '/sales',
      },
      {
        icon: IconBuildingWarehouse,
        title: 'Inventaris',
        description: 'Memantau stok barang secara real-time untuk mencegah kelebihan atau kekurangan.',
        link: '/inventory',
      },
    ]
  }
];

export function Header() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((section) => (
    <Container size='lg' py={{ base: '0', sm: '2em' }} key={section.title}>
      <Text fw={600} size="md" mb="xs">
        {section.title}
      </Text>
      {section.items.map((item) => (
        <Link href={item.link}>
          <UnstyledButton className={classes.subLink} key={item.title}>
            <Group wrap="nowrap" align="flex-start">
              <ThemeIcon size={34} variant="light" radius="md">
                <item.icon size={22} color={theme.colors.blue[6]} />
              </ThemeIcon>
              <div>
                <Text size="sm" c='var(--mantine-color-bright)'>
                  {item.title}
                </Text>
                <Text size="xs" c="dimmed">
                  {item.description}
                </Text>
              </div>
            </Group>
          </UnstyledButton>
        </Link>
      ))}
    </Container>
  ));

  return (
    <>
      <header className={classes.header}>
        <Container size='xl'>
          <Group justify="space-between" h="100%">
            <SVGComponent height={70} width={100}/>
            <Group h="100%" visibleFrom="md">
                <a href="/" className={classes.link}>
                  Beranda
                </a>
                <HoverCard width="auto" position="bottom" offset={20} radius="md" shadow="md" withinPortal>
                  <HoverCard.Target>
                    <a href="#" className={classes.link}>
                      <Center inline>
                        <Box component="span" mr={5}>
                          Solusi
                        </Box>
                        <IconChevronDown size={16} />
                      </Center>
                    </a>
                  </HoverCard.Target>

                  <HoverCard.Dropdown style={{ overflow: 'hidden', backgroundColor: 'light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-9))' }} >
                    <Container strategy="grid" size='xl'>
                      <SimpleGrid cols={{ base: 1, sm: 2, xl: 4 }}>
                        {links}

                        <Card className="cardHover" shadow="sm" m="lg" radius="md" withBorder bg="#fff">
                          <Stack
                            h="100%"
                            align="flex-start"
                            justify="space-between"
                            m="lg"
                          >
                            <Title
                              style={{ whiteSpace: "normal", wordBreak: "break-word" }}
                              order={2}
                              fw={500}
                              c="black"
                            >
                              ERP modern, bisnis makin efisien
                            </Title>

                            <Text c="dimmed">
                              Platform terintegrasi, mudah, siap berkembang
                            </Text>

                            <Button
                              variant="transparent"
                              color="black"
                              rightSection={<IconArrowRight size={14} />}
                              p={0}
                            >
                              Pelajari
                            </Button>
                          </Stack>
                        </Card>
                      </SimpleGrid>
                    </Container>
                  </HoverCard.Dropdown>
                </HoverCard>
                <a href="#" className={classes.link}>
                    Tentang
                </a>
                <a href="#" className={classes.link}>
                    Blog
                </a>
                <a href="#" className={classes.link}>
                    Dukungan
                </a>
                <ColorSchemeToggle />
                <Button mx="sm" variant="filled" size="md" radius="md" color='blue.1' autoContrast>Coba Demo Gratis</Button>
            </Group>
            <Group hiddenFrom="md">
              <ColorSchemeToggle />
              <Burger opened={drawerOpened} onClick={toggleDrawer} color='white' />
            </Group>
          </Group>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        title="Navigation"
        hiddenFrom="md"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px" mx="-md">
          <Container size='lg'>
            <a href="#" className={classes.link}>
              Beranda
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  Solusi
                </Box>
                <IconChevronDown size={16} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened} className={classes.link}>{links}</Collapse>
            <a href="#" className={classes.link}>
                Tentang
            </a>
            <a href="#" className={classes.link}>
                Blog
            </a>
            <a href="#" className={classes.link}>
                Dukungan
            </a>
            <Button variant="filled" size="md" radius="md" fullWidth autoContrast>Coba Demo Gratis</Button>
          </Container>
        </ScrollArea>
      </Drawer>
    </>
  );
}