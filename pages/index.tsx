import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Input, Text, Button, Container, Group, Flex, Image, Grid, ThemeIcon, Stack, Card, Badge, Paper, Divider, CloseButton } from '@mantine/core';
import {
  IconShoppingCart,
  IconBuildingBank,
  IconTruckDelivery,
  IconPackages,
  IconAt 
} from '@tabler/icons-react';
import { useState } from 'react';

export default function HomePage() {
  const mockdata = {
    card: [
      {
        src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
        category: 'Keuangan',
        title: 'Kelola arus kas otomatis',
        description: 'Pantau transaksi, laporan, dan anggaran bisnis Anda secara real-time tanpa proses manual yang rumit.'
      },
      {
        src: 'https://images.unsplash.com/photo-1531973576160-7125cd663d86',
        category: 'Penjualan',
        title: 'Proses order lebih cepat',
        description: 'Otomatisasi penjualan, kelola pelanggan, dan tingkatkan efisiensi tim sales dalam satu platform.'
      },
      {
        src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
        category: 'Inventaris',
        title: 'Stok selalu terkontrol',
        description: 'Cek ketersediaan barang, atur gudang, dan pantau pergerakan stok secara akurat dan terpusat.'
      }
    ],
    pricing: [
      {
        title: 'Startup',
        description: 'Cocok untuk uji coba fitur dasar tanpa biaya. Mulai eksplorasi sistem ERP dengan mudah.',
        price: 175
      },
      {
        title: 'Growth',
        description: 'Paket untuk bisnis yang mulai berkembang dengan kebutuhan fitur lebih lengkap.',
        price: 250
      },
      {
        title: 'Business',
        description: 'Solusi untuk bisnis menengah dengan manajemen operasional yang lebih kompleks.',
        price: 300
      },
      {
        title: 'Enterprise',
        description: 'Hubungi kami untuk penawaran khusus yang dapat disesuaikan dengan kebutuhan perusahaan besar.',
        price: 'Call Us'
      }
    ]
  }

  const [value, setValue] = useState('');

  return (
    <>
      <Header />

      {/* Banner */}
      <Container h={{ base: "auto", sm: "100vh" }} py={{ base: "8em 4em", sm: "auto" }} size='xl'>
        <Flex gap={{ base: 30, sm: 40 }} h="100%" justify="center" align="start" direction="column" w={{ base:'auto', sm:'70%' }}>
          <Text c='var(--mantine-color-bright)' style={{
              fontSize: 'clamp(32px, 8vw, 90px)',
              lineHeight: 1.2
            }} inline>
            Solusi ERP Modern, {' '}
            <Text span c='blue.5' inherit>
              Bisnis Lebih Mudah
            </Text>
          </Text>
          <Text c="dimmed" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>
            Kelola bisnis lebih efisien dengan platform ERP terintegrasi. Otomatisasi proses, pantau data real-time, dan tingkatkan produktivitas tanpa ribet. Mulai perjalanan digital Anda hari ini.
          </Text>
          <Group w='100%'>
            <Button
              size='md'
              variant="filled"
              color="blue.7"
              radius='md'
              autoContrast
              w={{ base:'100%', sm: 'auto' }}
            >
              Coba Demo Gratis
            </Button>

            <Button
              size='md'
              variant="default"
              radius='xl'
              className='buttonBanner'
              w={{ base:'100%', sm: 'auto' }}
            >
              Lihat Fitur
            </Button>
          </Group>
        </Flex>
      </Container>

      {/* Kata2 mutiara */}
      <Container fluid py={{ base: "2em", sm: "auto" }} bg='blue.5'>
        <Flex gap={40} h="100%" justify="center" align="center" direction="column">
          <Text 
            c='white' 
            style={{ fontSize: 'clamp(18px, 4vw, 24px)' }}
            w={{ base: '90%', sm: '80%' }} 
            lh={1.5} ta="center"
          >
            “Sistem ERP kami membantu bisnis tumbuh lebih efisien, mengurangi proses manual, dan memudahkan pengelolaan data. Antarmuka yang intuitif membuat tim kami lebih produktif dan kolaboratif. Kini, semua laporan keuangan dan stok dapat diakses real-time, tanpa hambatan. Kami merekomendasikan solusi ini untuk perusahaan yang ingin berkembang dengan teknologi modern dan layanan profesional.”
          </Text>
          <Flex gap={12} direction={{ base:'column', sm:'row' }} ta={{ base: 'center', sm: 'left' }} align='center'>
            <Image
              src='/fimosaLogo.png'
              h={40}
              w='auto'
              mx={4}
            />
            <Text c='white' lh={1.5} style={{ fontSize: 'clamp(14px, 3vw, 16px)' }}>
              <Text span fw={700} inherit>Rakha Wismaya</Text><br />
              Manajer Operasional, FIMOSA
            </Text>
          </Flex>
        </Flex>
      </Container>

      {/* Grid Section */}
      <Container py={{ base: "4em", sm: "auto" }} size='xl'>
        <Flex gap={20} h="100%" align="start" direction="column">
          <Text c='var(--mantine-color-bright)' style={{
              fontSize: 'clamp(16px, 4vw, 36px)',
              lineHeight: 1.2
            }} fw={700} inline>
            Fitur utama untuk bisnis efisien
          </Text>
          <Text c="dimmed" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>
            Temukan solusi terintegrasi yang memudahkan operasional, mempercepat proses, dan meningkatkan produktivitas perusahaan Anda.
          </Text>
          <Grid w='100%' gutter={{ base: 'md', md: 'lg' }}>
            <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
              <Card 
                shadow="sm" 
                padding="xl" 
                radius="lg" 
                withBorder
                h="100%"
                bg="light-dark(#fff, #121212)" 
              >
                <Stack gap="lg">
                  <ThemeIcon 
                    size={50} 
                    radius="lg" 
                    variant="light" 
                    color="blue.5"
                  >
                    <IconBuildingBank size={28} stroke={1.5} />
                  </ThemeIcon>
                  
                  <Text fw={500} size="xl">
                    Manajemen keuangan mudah
                  </Text>
                  
                  <Text size="sm" lh={1.6}>
                    Kelola arus kas, laporan keuangan, dan transaksi secara otomatis untuk pengambilan keputusan yang lebih cepat dan akurat.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card 
                shadow="sm" 
                padding="xl" 
                radius="lg" 
                withBorder
                h="100%"
                bg="light-dark(#fff, #121212)" 
              >
                <Stack gap="lg">
                  <ThemeIcon 
                    size={50} 
                    radius="lg" 
                    variant="light" 
                    color="blue.5"
                  >
                    <IconShoppingCart size={28} stroke={1.5} />
                  </ThemeIcon>
                  
                  <Text fw={500} size="xl">
                    Penjualan terpantau real-time
                  </Text>
                  
                  <Text size="sm" lh={1.6}>
                    Pantau penjualan, kelola pelanggan, dan proses pesanan dengan sistem yang terintegrasi dan responsif.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <Card 
                shadow="sm" 
                padding="xl" 
                radius="lg" 
                withBorder
                h="100%"
                bg="light-dark(#fff, #121212)" 
              >
                <Stack gap="lg">
                  <ThemeIcon 
                    size={50} 
                    radius="lg" 
                    variant="light" 
                    color="blue.5"
                  >
                    <IconTruckDelivery size={28} stroke={1.5} />
                  </ThemeIcon>
                  
                  <Text fw={500} size="xl">
                    Pembelian lebih terkontrol
                  </Text>
                  
                  <Text size="sm" lh={1.6}>
                    Optimalkan proses pembelian, pantau permintaan, dan kelola supplier dengan efisien dalam satu platform.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
              <Card 
                shadow="sm" 
                padding="xl" 
                radius="lg" 
                withBorder
                h="100%"
                bg="light-dark(#fff, #121212)" 
              >
                <Stack gap="lg">
                  <ThemeIcon 
                    size={50} 
                    radius="lg" 
                    variant="light" 
                    color="blue.5"
                  >
                    <IconPackages size={28} stroke={1.5} />
                  </ThemeIcon>
                  
                  <Text fw={500} size="xl">
                    Stok & inventaris akurat
                  </Text>
                  
                  <Text size="sm" lh={1.6}>
                    Lacak persediaan secara real-time, minimalkan kekurangan stok, dan pastikan ketersediaan barang selalu terjaga.
                  </Text>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>
        </Flex>
      </Container>

      {/* Card Section */}
      <Container fluid bg='white'>
        <Container py={{ base: "4em", sm: "auto" }} size='xl' >
          <Flex gap={20} h="100%" align="start" direction="column">
            <Text c='black' style={{
                fontSize: 'clamp(16px, 4vw, 36px)',
                lineHeight: 1.2
              }} fw={700} inline>
              Fitur utama untuk bisnis efisien
            </Text>
            <Text c="dimmed" style={{ fontSize: 'clamp(14px, 3.5vw, 18px)' }}>
              Temukan solusi terintegrasi yang memudahkan operasional, mempercepat proses, dan meningkatkan produktivitas perusahaan Anda.
            </Text>
            <Grid w='100%' gutter={{ base: 'md', md: 'lg' }}>
              {mockdata.card.map((item, index) => (
                <Grid.Col 
                  key={index}
                  span={{ base: 12, md: 4 }}
                >
                  <Card shadow="sm" padding="lg" radius="md" h="100%" bg="#fff">
                    <Paper shadow="sm" radius="md">
                      <Image
                        src={item.src}
                        height={200}
                        alt={item.title}
                        fit="cover"
                        bdrs="md"
                      />
                    </Paper>

                    <Stack gap="md" mt="md">
                      <Badge color="blue.5" variant="light" size="sm" w="fit-content">
                        {item.category}
                      </Badge>

                      <Text fw={600} size="lg" c="black">
                        {item.title}
                      </Text>

                      <Text size="sm" c="dimmed" lh={1.6}>
                        {item.description}
                      </Text>

                      <Button 
                        color="blue.5" 
                        variant="light" 
                        radius="md"
                      >
                        Pelajari Lebih Lanjut
                      </Button>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Container>

      {/* Pricing Section */}
      <Container fluid h="auto" bg='blue.5'>
        <Container py={{ base: "4em", sm: "auto" }} size='xl' >
          <Flex gap={20} h="100%" align="start" direction="column">
            <Text c='white' style={{
                fontSize: 'clamp(16px, 4vw, 36px)',
                lineHeight: 1.2
              }} inline>
              Pilih paket sesuai kebutuhan
            </Text>
            <Grid w='100%' gutter={{ base: 'md', md: 'lg' }}>
              {mockdata.pricing.map((item, index) => (
                <Grid.Col 
                  key={index}
                  span={{ base: 12, sm: 6, lg: 3 }}
                >
                  <Card 
                    shadow="sm" 
                    padding="xl" 
                    radius="lg" 
                    h={{ base:'auto', lg: '60vh' }}
                    bg='#181818'
                    style={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <Stack gap="lg" style={{ flex: 1 }}>
                      {/* Header */}
                      <div>
                        <Text fw={700} size="xl" c="white" mb="xs">
                          {item.title}
                        </Text>
                      </div>

                      {/* Description */}
                      <Text size="sm" c="dimmed" lh={1.6} style={{ flex: 1 }}>
                        {item.description}
                      </Text>

                      {/* Price */}
                      <div>
                        {typeof item.price === 'number' ? (
                          <Group gap="xs" align="baseline">
                            <Text size="36px" fw={300} c="blue.6" lh={1}>
                              Rp.{item.price}k
                            </Text>
                            <Text size="sm" c="dimmed">
                              /bulan
                            </Text>
                          </Group>
                        ) : (
                          <Text size="36px" fw={700} c="blue.6" lh={1}>
                            {item.price}
                          </Text>
                        )}
                      </div>

                      {/* Button */}
                      <Button 
                        color="blue.6" 
                        variant={index === 3 ? "filled" : "light"}
                        radius="md"
                        size="md"
                        fullWidth
                      >
                        {index === 0
                          ? "Coba Gratis"
                          : typeof item.price === "number"
                          ? "Coba Paket"
                          : "Hubungi Kami"}
                      </Button>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Flex>
        </Container>
      </Container>

      {/* Subscribe Section */}
      <Container fluid bg='blue.5'>
        <Container py="4em" size='xl'>
          <Card p={{ base: "2em", sm:"4em", md: "8em 16em" }} bg='#181818' radius='md'>
            <Stack gap="lg">
              <Text size="clamp(32px, 8vw, 90px)" fw={300} c='white' ta='center'>
                Langganan info bisnis terbaru
              </Text>
              <Grid gutter="md">
                <Grid.Col span={{ base: 12, sm: 8 }}>
                  <Input 
                    placeholder="Your email" 
                    leftSection={<IconAt size={16} stroke={1.5} />} 
                    value={value}
                    onChange={(event) => setValue(event.currentTarget.value)}
                    rightSectionPointerEvents="all"
                    rightSection={
                      <CloseButton
                        onClick={() => setValue('')}
                        style={{ display: value ? undefined : 'none' }}
                      />
                    }
                    variant="filled"
                    size="md"
                    radius="md"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 4 }}>
                  <Button
                    color="blue.6"
                    radius="md"
                    size="md"
                    fullWidth
                  >
                    Hubungi Kami
                  </Button>
                </Grid.Col>
              </Grid>
            </Stack>
          </Card>
        </Container>
      </Container>

      <Footer/>
    </>
  );
}
