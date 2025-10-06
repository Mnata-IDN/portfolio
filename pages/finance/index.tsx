import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import { Text, Title, Card, Container, Button, Group, Tabs, Image, SimpleGrid, Flex, Box, Accordion, TextInput, Stack, Paper, Textarea, Grid } from '@mantine/core';
import { IconAt, IconPhone, IconMapPin } from '@tabler/icons-react';
import classes from '@/styles/Finance.module.css';
import { useRef, useState, useEffect } from 'react';

export default function Finance() {

  const tabsData = [
    {
      value: "tab1",
      label: "Budgeting",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Budgeting",
      description: "Kelola anggaran perusahaan dengan lebih efisien dan transparan.",
      content: "Dengan fitur budgeting yang canggih, Anda dapat membuat, melacak, dan mengelola anggaran perusahaan dengan lebih efisien. Alokasikan dana dengan tepat, pantau pengeluaran, dan pastikan setiap departemen tetap berada dalam batas anggaran yang telah ditetapkan. Sistem ini juga memungkinkan Anda untuk membuat proyeksi keuangan yang akurat, membantu dalam perencanaan strategis jangka panjang.",
    },
    {
      value: "tab2",
      label: "Reporting",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Reporting",
      description: "Buat laporan finansial secara cepat dan akurat.",
      content: "Hasilkan laporan keuangan yang komprehensif dan akurat dalam hitungan detik. Fitur reporting kami menyediakan berbagai jenis laporan, mulai dari laporan laba rugi, neraca, hingga laporan arus kas, yang semuanya dapat disesuaikan dengan kebutuhan spesifik bisnis Anda. Visualisasi data yang interaktif memudahkan analisis dan identifikasi tren keuangan, mendukung pengambilan keputusan yang lebih baik dan cepat.",
    },
    {
      value: "tab3",
      label: "Cash Flow",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      title: "Cash Flow",
      description: "Pantau arus kas masuk dan keluar dengan mudah.",
      content: "Lacak setiap transaksi, pantau pemasukan dan pengeluaran, serta kelola likuiditas bisnis Anda secara real-time. Fitur cash flow kami memberikan visibilitas penuh terhadap kondisi keuangan, membantu Anda mengidentifikasi potensi masalah dan mengambil tindakan korektif lebih awal. Dengan data yang akurat, perencanaan keuangan jangka pendek dan panjang menjadi lebih mudah dan efektif.",
    },
    {
      value: "tab4",
      label: "Compliance",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Compliance",
      description: "Pastikan kepatuhan dengan regulasi dan standar akuntansi.",
      content: "Pastikan bisnis Anda selalu mematuhi regulasi keuangan dan standar akuntansi yang berlaku. Fitur compliance kami membantu Anda mengelola dokumen, melacak perubahan peraturan, dan menyiapkan laporan audit dengan mudah. Dengan sistem yang terintegrasi, risiko ketidakpatuhan dapat diminimalkan, memberikan ketenangan pikiran bagi Anda dan tim.",
    },
  ];

  const FAQdata = [
    {
      value: 'How does automated reporting help?',
      description:'Automated reporting streamlines financial analysis by generating real-time reports, reducing manual effort, and providing instant insights into your business\'s financial health. This helps in quicker decision-making and better strategic planning.',
    },
    {
      value: 'How is my data protected?',
      description:'Our platform uses industry-leading encryption and security protocols to protect your financial data. We comply with global data protection regulations and conduct regular security audits to ensure your information remains confidential and secure.',
    },
    {
      value: 'Can I link my bank accounts?',
      description:'Yes, our platform allows seamless integration with most major banks. You can securely link your bank accounts to automate transaction imports, reconcile statements, and get a comprehensive view of your financial position in real-time.',
    },
    {
      value: 'What support options are offered?',
      description:'We offer 24/7 customer support through multiple channels, including live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions or issues you may encounter, ensuring a smooth and efficient experience.',
    },
  ];

  const contactData = [
    { title: 'Email', description: 'contoh@email.com', icon: IconAt },
    { title: 'Nomor Telepon', description: '+62 812 3456 7890', icon: IconPhone },
    { title: 'Alamat', description: 'Jl. Merdeka No. 45, Yogyakarta, Indonesia', icon: IconMapPin },
  ];

  const topRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(tabsData[0].value);

  const handleTabChange = (value: string | null) => {
    if (value) {
      setActiveTab(value);
      if (topRef.current) {
        const offset = topRef.current.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <Header />

      <Container fluid className={classes.wrapper}>
        <Card className={classes.inner}>
          <Title
            fw={300}
            fz='clamp(32px, 8vw, 90px)'
            lts={-1}
            lh={1}
            px="md"
            c="white"
            mb="xs"
            ta="center"
          >
            Pembiayaan mudah untuk bisnis modern
          </Title>

          <Container size={640}>
            <Text
              size="md"
              c="white"
              ta="center"
            >
              Sederhanakan penganggaran, otomatisasi pelaporan, dan akses wawasan arus kas secara real-time. Tetap patuh dan siap audit dengan koneksi bank yang lancar.
            </Text>
          </Container>
        </Card>

        <Group justify='center' my={'20px'}>
          <Button
            size='md'
            variant='filled'
            color='blue.7'
            radius='md'
            autoContrast
            w={{ base:'100%', sm: 'auto' }}
          >
            Get started
          </Button>

          <Button
            size='md'
            variant='outline'
            radius='xl'
            className='buttonBanner'
            color="blue.7"
            w={{ base:'100%', sm: 'auto' }}
          >
            Live demo
          </Button>
        </Group>
      </Container>

      <Container size="xl" py="xl" ref={topRef}>
        <Flex
          gap="md"
          justify="center"
          direction="row"
          wrap="wrap"
          py={'md'}
        >
          <Title ta={'center'} c='var(--mantine-color-bright)'>Keuangan dibuat semakin mudah</Title>
          <Text ta={'center'} c='dimmed'>Sederhanakan keuangan bisnis anda dengan penganggaran intuitif, pelaporan otomatis, arus kas real-time, dan alat kepatuhan terintegrasi.</Text>
        </Flex>

        <Tabs variant="none" autoContrast classNames={{ tab: classes.tab }} value={activeTab} onChange={handleTabChange}>
          {tabsData.map((tab) => (
            <Tabs.Panel key={tab.value} value={tab.value}>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                gap="lg"
                py="md"
              >
                  <Image
                    src={tab.image}
                    alt={tab.title}
                    radius="md"
                    fit="cover"
                    w={{ base: '100%', md: '70%' }}
                    h={{ base: 200, md: 500 }}
                  />
                <Flex
                  w={{ base: '100%', md: '30%' }}
                  direction="column"
                  justify="space-between"
                  p={20}
                >
                  <Box>
                    <Title c="var(--mantine-color-text)" order={2}>
                      {tab.title}
                    </Title>
                    <Text c="dimmed" mt="sm">
                      {tab.content}
                    </Text>
                  </Box>
                  <Button size="lg" mt="md">
                    Details
                  </Button>
                </Flex>
              </Flex>

            </Tabs.Panel>
          ))}
          
          <Tabs.List mt={20}>
            <SimpleGrid cols={{ base: 1, sm: 4}} w={'100%'}>
              {tabsData.map((tab) => (
                <Tabs.Tab
                  key={tab.value}
                  value={tab.value}
                  style={{
                    textAlignLast: 'left',
                  }}
                >
                  <Title fw={300} order={3}>{tab.label}</Title>
                  <Text fw={300} style={{ whiteSpace: 'normal', textAlign: 'left' }}>
                    {tab.description}
                  </Text>
                </Tabs.Tab>
              ))}
            </SimpleGrid>
          </Tabs.List>
        </Tabs>
      </Container>

      <Container size="xl" my={{ base: '2em', sm: '4em' }}>
        <SimpleGrid cols={{ base: 1, md:2 }} spacing="xl">
          <Flex
            gap="lg"
            direction="column"
            align='flex-start'
            justify="flex-start"
            wrap="wrap"
            py={'md'}
          >
            <Title c='var(--mantine-color-bright)'>Pertanyaan yang Sering Diajukan</Title>
            <Text c='dimmed'>Dapatkan gambaran lengkap tentang kesehatan finansial bisnis Anda dengan alat yang mudah digunakan dan terintegrasi penuh.</Text>
            <Button size='md' variant='filled' autoContrast w='100%'>Contact US</Button>
          </Flex>
          <Accordion variant="separated">
            {FAQdata.map((item, index) => (
              <Accordion.Item className={classes.accordion} value={item.value} key={index}>
                <Accordion.Control >
                  <Title order={4}>{item.value}</Title>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="md">{item.description}</Text>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
          </Accordion>
        </SimpleGrid>
      </Container>

      <Container size="xl" py={{ base: '2em', sm: '4em' }}>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing='xl'>
          <Stack justify="flex-start" py="lg" gap="xl">
            <div>
              <Title order={1} fw={300} c='var(--mantine-color-bright)'>
                Hubungi Kami
              </Title>
              <Text c="dimmed" mt="md">
                Punya pertanyaan atau butuh informasi lebih lanjut? Jangan ragu untuk menghubungi tim kami.
              </Text>
            </div>
            {contactData.map((item, index) => (
              <Group key={index} wrap="nowrap" align="flex-start" gap="lg">
                <item.icon size={28} stroke={1.5} />
                <div>
                  <Text fw={300} size="lg" c="var(--mantine-color-bright)">{item.title}</Text>
                  <Text size="md" c="dimmed">{item.description}</Text>
                </div>
              </Group>
            ))}
          </Stack>

          <Card withBorder shadow="md" p={{ base: "md", md: "xl" }} radius="md" className='cardHover'>
            <form onSubmit={(event) => event.preventDefault()}>
              <Grid>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    required
                    label="Nama Lengkap"
                    placeholder="John Doe"
                    radius="md"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    required
                    label="Alamat"
                    placeholder="Jl. Sudirman No. 123"
                    radius="md"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    required
                    label="Email"
                    placeholder="your@email.com"
                    radius="md"
                  />
                </Grid.Col>
                <Grid.Col span={{ base: 12, sm: 6 }}>
                  <TextInput
                    required
                    label="Nomor Telepon"
                    placeholder="+62 812 3456 7890"
                    radius="md"
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <TextInput
                    label="Nama Perusahaan"
                    placeholder="PT. Maju Mundur"
                    radius="md"
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Textarea
                    required
                    label="Isi Pesan"
                    placeholder="Tuliskan pesan Anda di sini..."
                    radius="md"
                    minRows={4}
                  />
                </Grid.Col>
                <Grid.Col span={12}>
                  <Button type="submit" size="md" radius="md" color="blue.6" autoContrast fullWidth>Kirim Pesan</Button>
                </Grid.Col>
              </Grid>
            </form>
          </Card>
        </SimpleGrid>
      </Container>

      <Footer/>
    </>
  );
}
